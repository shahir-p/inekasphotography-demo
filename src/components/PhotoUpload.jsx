import { useState } from 'react'
import PhotoThumbnails from './PhotoThumbnails'
import SizeSelector from './SizeSelector'
import PriceCalculator from './PriceCalculator'

function PhotoUpload({ category, uploadedPhotos, setUploadedPhotos }) {
  const [selectedSize, setSelectedSize] = useState('4x6')

  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files)
    
    // For single photo category, only allow one photo
    if (category === 'single') {
      if (files.length > 1) {
        alert('Single Photo Print allows only one photo. Please select just one image.')
        return
      }
      if (uploadedPhotos.length >= 1) {
        alert('Single Photo Print allows only one photo. Please remove the existing photo first.')
        return
      }
    } else {
      // For other categories, allow up to 5 photos
      if (uploadedPhotos.length + files.length > 5) {
        alert('Maximum 5 photos allowed')
        return
      }
    }

    const newPhotos = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      url: URL.createObjectURL(file),
      name: file.name
    }))

    setUploadedPhotos(prev => [...prev, ...newPhotos])
  }

  const removePhoto = (id) => {
    setUploadedPhotos(prev => prev.filter(photo => photo.id !== id))
  }

  const getCategoryTitle = () => {
    const titles = {
      single: 'Single Photo Print',
      collage: 'Photo Collage Service',
      panoramic: 'Panoramic Print',
      polaroid: 'Polaroid Style Print',
      canvas: 'Canvas Print'
    }
    return titles[category] || 'Photo Print'
  }

  const getUploadText = () => {
    if (category === 'single') {
      return uploadedPhotos.length === 0 
        ? 'Click to select a single photo' 
        : 'Replace photo'
    }
    return 'Click to upload photos'
  }

  const getMaxPhotosText = () => {
    if (category === 'single') {
      return 'Single photo only'
    }
    return 'Maximum 5 photos allowed • JPEG, PNG formats'
  }

  return (
    <div className="container mx-auto px-4 py-8 flex-1">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          {getCategoryTitle()}
        </h2>
        <p className="text-gray-600 text-center mb-8">
          {category === 'single' 
            ? 'Select one photo for printing' 
            : 'Upload your photos and choose print options'
          }
        </p>

        {/* Upload Area */}
        <div className="mb-8">
          <input
            type="file"
            id="photo-upload"
            multiple={category !== 'single'} // Only allow multiple for non-single categories
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
          <label 
            htmlFor="photo-upload" 
            className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-12 cursor-pointer transition-all duration-300 hover:border-blue-500 hover:bg-blue-50"
          >
            <div className="text-4xl mb-4 text-blue-600">
              {category === 'single' ? '🖼️' : '📷'}
            </div>
            <p className="text-lg font-semibold text-gray-700 mb-2">
              {getUploadText()}
            </p>
            <span className="text-gray-500 text-sm">{getMaxPhotosText()}</span>
          </label>
        </div>

        <PhotoThumbnails 
          photos={uploadedPhotos} 
          onRemove={removePhoto}
          category={category}
        />

        {uploadedPhotos.length > 0 && (
          <>
            <SizeSelector 
              selectedSize={selectedSize}
              onSizeChange={setSelectedSize}
            />
            
            <PriceCalculator 
              selectedSize={selectedSize}
              category={category}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default PhotoUpload
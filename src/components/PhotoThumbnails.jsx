function PhotoThumbnails({ photos, onRemove, category }) {
  if (photos.length === 0) return null

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Selected Photos ({photos.length}/5)
      </h3>
      
      {category === 'collage' ? (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto mb-4">
            {photos.map((photo, index) => (
              <div 
                key={photo.id} 
                className="aspect-square rounded-lg overflow-hidden shadow-sm border border-gray-200"
              >
                <img 
                  src={photo.url} 
                  alt={`Collage ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-sm">
            Preview of your collage layout
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {photos.map(photo => (
            <div key={photo.id} className="relative group">
              <div className="aspect-square rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <img 
                  src={photo.url} 
                  alt={photo.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <button 
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg text-sm"
                onClick={() => onRemove(photo.id)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PhotoThumbnails
import { useState } from 'react'
import AppBar from './components/AppBar'
import CategoryCards from './components/CategoryCards'
import Footer from './components/Footer'
import PhotoUpload from './components/PhotoUpload'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [uploadedPhotos, setUploadedPhotos] = useState([])

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
  }

  const handleBackToHome = () => {
    setSelectedCategory(null)
    setUploadedPhotos([])
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppBar onBack={selectedCategory ? handleBackToHome : null} />

      
      {!selectedCategory ? (
        <CategoryCards onCategorySelect={handleCategorySelect} />
      ) : (
        <PhotoUpload 
          category={selectedCategory}
          uploadedPhotos={uploadedPhotos}
          setUploadedPhotos={setUploadedPhotos}
        />
      )}
      
      <Footer />
    </div>
  )
}

export default App
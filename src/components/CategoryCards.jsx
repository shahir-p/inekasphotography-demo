function CategoryCards({ onCategorySelect }) {
  const categories = [
    {
      id: 'single',
      title: 'Single Photo',
      description: 'High-quality individual prints',
      icon: '🖼️'
    },
    {
      id: 'collage',
      title: 'Photo Collage',
      description: 'Professional collage designs',
      icon: '🧩'
    },
    {
      id: 'panoramic',
      title: 'Panoramic',
      description: 'Wide format prints',
      icon: '🌅'
    },
    {
      id: 'polaroid',
      title: 'Polaroid Style',
      description: 'Vintage style prints',
      icon: '📸'
    },
    {
      id: 'canvas',
      title: 'Canvas Print',
      description: 'Gallery quality canvas',
      icon: '🎨'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 flex-1">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Photo Printing</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Choose from our premium printing services. Upload your photos and get studio-quality prints delivered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map(category => (
          <div 
            key={category.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer transition-all duration-300 hover:shadow-md hover:border-blue-500"
            onClick={() => onCategorySelect(category.id)}
          >
            <div className="text-3xl mb-4 text-blue-600">{category.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
            <p className="text-gray-600">{category.description}</p>
            <div className="mt-4 flex items-center text-blue-600 font-medium">
              <span>Select Service</span>
              <span className="ml-2">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryCards
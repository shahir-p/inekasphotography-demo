function AppBar({ onBack }) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {onBack && (
            <button 
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 border border-gray-300"
              onClick={onBack}
            >
              <span>←</span>
              <span>Back</span>
            </button>
          )}
          <h1 className="text-2xl font-bold text-gray-900">Inekas Photography</h1>
        </div>
       
      </div>
    </header>
  )
}

export default AppBar
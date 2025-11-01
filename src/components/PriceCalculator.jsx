function PriceCalculator({ selectedSize, category }) {
  const getCategoryPrice = (size, categoryType) => {
    const pricing = {
      single: {
        '4x6': 1.5,
        '5x7': 3,
        '8x10': 5
      },
      collage: {
        '4x6': 8,
        '5x7': 12,
        '8x10': 18
      },
      panoramic: {
        '4x6': 4,
        '5x7': 6,
        '8x10': 10
      },
      polaroid: {
        '4x6': 2,
        '5x7': 4,
        '8x10': 7
      },
      canvas: {
        '4x6': 15,
        '5x7': 25,
        '8x10': 40
      }
    }
    
    return pricing[categoryType]?.[size] || 0
  }

  const getCategoryDescription = (categoryType) => {
    const descriptions = {
      single: 'Single Photo Print',
      collage: 'Photo Collage Service',
      panoramic: 'Panoramic Print',
      polaroid: 'Polaroid Style Print',
      canvas: 'Premium Canvas Print'
    }
    return descriptions[categoryType] || 'Photo Print'
  }

  const totalPrice = getCategoryPrice(selectedSize, category)

  const handlePayNow = () => {
    alert(`Demo Payment: AED ${totalPrice}\nThis is a demo - no real payment processed.`)
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center py-3 border-b border-gray-200">
          <span className="text-gray-700">
            {getCategoryDescription(category)}
          </span>
          <span className="font-semibold text-gray-900">AED {totalPrice.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600">Print Size</span>
          <span className="font-medium text-gray-900">{selectedSize} inches</span>
        </div>
        
        <div className="flex justify-between items-center py-3 border-t border-gray-200">
          <span className="text-lg font-bold text-gray-900">Total Amount</span>
          <span className="text-xl font-bold text-blue-600">AED {totalPrice.toFixed(2)}</span>
        </div>
      </div>
      
      <button 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-sm"
        onClick={handlePayNow}
      >
        Pay Now - AED {totalPrice.toFixed(2)}
      </button>
      
   
    </div>
  )
}

export default PriceCalculator
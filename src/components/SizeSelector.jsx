function SizeSelector({ selectedSize, onSizeChange }) {
  const sizes = [
    { value: '4x6', label: '4×6 inches', price: 1.5 },
    { value: '5x7', label: '5×7 inches', price: 3 },
    { value: '8x10', label: '8×10 inches', price: 5 }
  ]

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Print Size</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sizes.map(size => (
          <label key={size.value} className="cursor-pointer">
            <input
              type="radio"
              name="print-size"
              value={size.value}
              checked={selectedSize === size.value}
              onChange={() => onSizeChange(size.value)}
              className="hidden"
            />
            <div className={`border-2 rounded-lg p-4 transition-all duration-200 ${
              selectedSize === size.value 
                ? 'border-blue-500 bg-blue-50 shadow-sm' 
                : 'border-gray-300 hover:border-gray-400'
            }`}>
              <div className="font-semibold text-gray-900">{size.label}</div>
              <div className="text-green-600 font-bold text-lg mt-2">AED {size.price}</div>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}

export default SizeSelector
import React, { useState } from 'react'

const Rating = ({ initialRating, onRate }) => {
  const [rating, setRating] = useState(initialRating ?? 0)

  const currentRating = typeof initialRating === 'number' ? initialRating : rating

  const handleRating = (value) => {
    setRating(value)
    if (onRate) onRate(value)
  }

  return (
    <div className='flex'>
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1
        return (
          <span
            key={index}
            className={`text-xl sm:text-2xl cursor-pointer transition-colors ${
              starValue <= currentRating ? 'text-yellow-500' : 'text-gray-400'
            }`}
            onClick={() => handleRating(starValue)}
          >
            {/* Bug fix 3: &#9733 was missing the closing semicolon — star never rendered */}
            &#9733;
          </span>
        )
      })}
    </div>
  )
}

export default Rating

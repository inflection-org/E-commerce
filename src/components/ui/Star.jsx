// src/StarRating.js
import React, { useState } from 'react'

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <div className='flex'>
      {[...Array(totalStars)].map((star, index) => {
        index += 1
        return (
          <button
            type='button'
            key={index}
            className={`${
              index <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'
            } text-2xl focus:outline-none`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className='star'>&#9733;</span>
          </button>
        )
      })}
    </div>
  )
}

export default StarRating

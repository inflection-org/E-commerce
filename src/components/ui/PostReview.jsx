'use client'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { instance } from '@/app/axios/Api'

function PostReview() {
  const [isActive, setIsActive] = useState(false)
  const [reviewFormData, setReviewFormData] = useState({
    review: '',
    rating: '',
  })
  console.log(reviewFormData)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  const saveReview = async () => {
    try {
      const res = await instance.post('/reviews/', { reviewFormData, id })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className='flex flex-col max-w-xl p-8 shadow-sm rounded-xl bg-light_gray lg:p-12 '>
        <div className='flex flex-col items-center w-full'>
          <h2 className='text-3xl font-semibold text-center'>
            Your opinion matters!
          </h2>
          <div className='flex flex-col items-center py-6 space-y-3'>
            <span className='text-center'>How was your experience?</span>
            <div className='flex space-x-3'>
              <button
                type='button'
                name='1'
                value={1}
                aria-label='Rate 1 stars'
                onClick={(e) => {
                  handleClick()
                  setReviewFormData({
                    ...reviewFormData,
                    rating: e.target.value,
                  })
                }}
              >
                <FaStar
                  className={`size-8 cursor-pointer ${
                    isActive ? 'text-yellow ' : 'text-black'
                  }`}
                />
              </button>
              <button
                type='button'
                title='Rate 2 stars'
                aria-label='Rate 2 stars'
              >
                <FaStar
                  className={`size-8 cursor-pointer ${
                    isActive ? 'text-yellow ' : 'text-black'
                  }`}
                />
              </button>
              <button
                type='button'
                title='Rate 3 stars'
                aria-label='Rate 3 stars'
              >
                <FaStar
                  className={`size-8 cursor-pointer ${
                    isActive ? 'text-yellow ' : 'text-black'
                  }`}
                />
              </button>
              <button
                type='button'
                title='Rate 4 stars'
                aria-label='Rate 4 stars'
              >
                <FaStar
                  className={`size-8 cursor-pointer ${
                    isActive ? 'text-yellow ' : 'text-black'
                  }`}
                />
              </button>
              <button
                type='button'
                title='Rate 5 stars'
                aria-label='Rate 5 stars'
              >
                <FaStar
                  className={`size-8 cursor-pointer ${
                    isActive ? 'text-yellow ' : 'text-black'
                  }`}
                />
              </button>
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <textarea
              rows='3'
              placeholder='Message...'
              className='p-4 rounded-md resize-none '
              onChange={(e) => {
                setReviewFormData({
                  ...reviewFormData,
                  review: e.target.value,
                })
              }}
            ></textarea>
            <button
              type='button'
              onClick={(e) => saveReview()}
              className='py-4 my-8 font-semibold bg-black text-white rounded-md '
            >
              Leave feedback
            </button>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <a rel='noopener noreferrer' href='#' className='text-sm'>
            Maybe later
          </a>
        </div>
      </div>
    </div>
  )
}

export default PostReview

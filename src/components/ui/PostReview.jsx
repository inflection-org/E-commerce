'use client'
import React, { useState } from 'react'
import { instance } from '@/app/axios/Api'
import { Rating } from '@mui/material'

function PostReview({ oderIt }) {
  const [isActive, setIsActive] = useState(false)
  const [reviewFormData, setReviewFormData] = useState({
    review: '',
    rating: 0,
  })

  const handleClick = () => {
    setIsActive(!isActive)
  }

  const saveReview = async () => {
    console.log(oderIt, reviewFormData)
    try {
      const res = await instance.post(`/reviews/${oderIt}`, reviewFormData)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='pb-5 md:pb-10'>
      <div className='flex flex-col w-full p-8 shadow-sm rounded-xl bg-light_gray  '>
        <div className='flex flex-col items-center w-full'>
          <h2 className='text-3xl font-semibold text-center'>
            Your opinion matters!
          </h2>
          <div className='flex flex-col items-center py-6 space-y-3'>
            <span className='text-center'>How was your experience?</span>
            <div>
              <Rating
                value={reviewFormData.rating}
                onChange={(event, value) => {
                  setReviewFormData({
                    ...reviewFormData,
                    rating: value,
                  })
                }}
              />
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
              onClick={(e) => saveReview(oderIt)}
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

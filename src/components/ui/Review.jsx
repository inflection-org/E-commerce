'use client'
import React, { useEffect, useState } from 'react'
import { Rating } from '@mui/material'
import { instance } from '@/app/axios/Api'
import LocalTime from './LocalTime'

const Review = ({ reviewId }) => {
  const [reviews, setReviews] = useState([])
  console.log(reviews)

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const res = await instance.get(`/reviews/product/${reviewId}`)
        setReviews(res.data.reviews)
      } catch (err) {
        console.log(err)
      }
    }
    fetchReview()
  }, [reviewId])

  return (
    <div>
      <div class='relative'>
        <div class='w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto'>
          <div class='w-full'>
            {reviews.map((e, i) => (
              <div key={i}>
                <div class='pt-11 pb-8 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto'>
                  <div class='flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4'>
                    <div class='flex items-center gap-3'>
                      <img
                        src={e.profile_photo_url}
                        alt='John image'
                        class='w-8 h-8'
                      />
                      <h6 class='font-semibold text-lg leading-8 text-indigo-600 '>
                        {e.full_name}
                      </h6>
                    </div>
                    <p class='font-normal text-lg leading-8 text-gray-400'>
                      {LocalTime(e.created_at)}
                    </p>
                  </div>
                  <div class='flex items-center gap-3 mb-4'>
                    <Rating value={e.rating} />
                  </div>
                  <h3 class='font-manrope font-semibold text-lg sm:text-2xl leading-9 text-black mb-6'>
                    {e.review}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review

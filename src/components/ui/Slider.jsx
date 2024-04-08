'use client'
import React, { useRef, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import './styles.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div>
            <img
              className='object-cover w-full h-[500px]'
              src='/Slider1.webp'
              alt='logo'
            />
          </div>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <div>
            <img
              className='object-cover w-full h-[500px]'
              src='/Slider3.jpeg'
              alt='logo'
            />
          </div>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <div>
            <img
              className='object-cover w-full h-[500px]'
              src='/Slider2.webp'
              alt='logo'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard2 from './cards/ProductCard2'
import instance from '../../app/axios/Api'
import { FreeMode, Pagination } from 'swiper/modules'
import { Autoplay } from 'swiper'
import SwiperCore from 'swiper'

function CotegorySlider() {
  SwiperCore.use([Autoplay])
  const [categories, setCategories] = useState([])
  // console.log(categories)
  useEffect(() => {
    async function search() {
      try {
        const res = await instance.get('/categories/list')
        // console.log(res.data)
        setCategories(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    search()
  }, [])

  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 640px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={3}
        spaceBetween={30}
        // freeMode={true}
        pagination={{
          clickable: true,
        }}
        // modules={[FreeMode, Pagination]}
        className='mySwiper'
      >
        {categories.length > 0 &&
          categories?.map((category, i) => (
            <SwiperSlide key={i}>
              <ProductCard2
                name={category.name}
                dis={category.description}
                // price={category.price}
                pic={category.image}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default CotegorySlider

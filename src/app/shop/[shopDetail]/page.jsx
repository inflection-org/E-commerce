'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import instance from '@/app/axios/Api'
import { getCookie } from '@/app/axios/CookieConfig'

const page = () => {
  const [currentTab, setCurrentTab] = useState('third-img')
  const [productDetails, setProductDetails] = useState([])
  // const [variant, setVariant] = useState([])
  const params = useParams()
  const id = params.shopDetail
  const token = getCookie('access_token')
  // console.log(token)

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await instance.get(`/products/public/${id}`)
        console.log(res.data)
        setProductDetails(res.data)
        // console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()

    // **********variant**********
    // async function getVariant() {
    //   try {
    //     const res = await instance.get(`/variant/product/${id}`)
    //     console.log(res.data)

    //     setVariant(res.data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // getVariant()
  }, [id])

  return (
    <div className='px-5 md:px-10'>
      <div className='block md:flex py-2 md:py-8 gap-4 w-[100] md:divide-x'>
        <div className='w-full md:w-[40%]'>
          <div className=''>
            {/* **********1-img********** */}
            <div className='flex  justify-center'>
              <div className='w-auto border-2 border-light_gray  shadow-md'>
                {currentTab === 'first-img' && (
                  <img
                    className='object-cover group-hover:scale-110 duration-1000 w-auto h-60 md:h-80'
                    src={productDetails.thumbnail}
                    alt='logo'
                  />
                )}
                {currentTab === 'second-img' && (
                  <img
                    className='object-cover  group-hover:scale-110 duration-1000 h-60 md:h-80'
                    src={'/product/aa2.webp'}
                    alt='logo'
                  />
                )}{' '}
                {currentTab === 'third-img' && (
                  <img
                    className='object-cover  group-hover:scale-110 duration-1000 h-60 md:h-80'
                    src={'/product/aa.webp'}
                    alt='logo'
                  />
                )}
              </div>
            </div>
            {/* **********2-img*********** */}
            <div className='flex justify-center py-6 md:py-8 gap-4'>
              <div
                onMouseEnter={() => {
                  setCurrentTab('first-img')
                }}
                className={`p-1 ${
                  currentTab === 'first-img'
                    ? 'border-2 border-orange rounded-md'
                    : 'border-2 border-light_gray'
                }`}
              >
                <img
                  className='object-cover w-28 h-24  '
                  src={'/product/aa1.webp'}
                  alt='logo'
                />
              </div>
              <div
                onMouseEnter={() => {
                  setCurrentTab('second-img')
                }}
                className={`p-1 ${
                  currentTab === 'second-img'
                    ? 'border-2 border-orange rounded-md'
                    : 'border-2 border-light_gray'
                }`}
              >
                <img
                  className='object-cover  w-28 h-24  '
                  src={'/product/aa2.webp'}
                  alt='logo'
                />
              </div>
              <div
                onMouseEnter={() => {
                  setCurrentTab('third-img')
                }}
                className={`p-1 ${
                  currentTab === 'third-img'
                    ? 'border-2 border-orange rounded-md'
                    : 'border-2 border-light_gray'
                }`}
              >
                <img
                  className='object-cover   w-28 h-24  '
                  src={'/product/aa.webp'}
                  alt='logo'
                />
              </div>
            </div>
            {/*******button***** */}
            <div className='flex mt-5 justify-center'>
              <div>
                <button className='bg-orange  hover:bg-black duration-1000 text-white rounded-full px-28 md:px-32 py-2'>
                  Buy Now
                </button>
                <div className='flex justify-between gap-4 mt-2'>
                  <button className='bg-orange mt-2 md:mt-0 hover:bg-black duration-1000 text-white rounded-full px-3 md:px-5 py-2'>
                    Add To WishList
                  </button>
                  <button className='bg-orange mt-2 md:mt-0 hover:bg-black duration-1000 text-white rounded-full px-3 md:px-7 py-2'>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* **********second-part */}
        <div className='w-full md:w-[60%] mt-7  md:mt-0 px-4'>
          <div className='border-b-2 border-light_gray'>
            <h1 className='font-semibold text-xl'>{productDetails.name}</h1>
          </div>
          <div className='flex gap-4 border-b-2 mt-4 pb-2 border-light_gray'>
            <p className=''>
              <span className='font-semibold'> Price: </span>900
            </p>
            <p className=''>
              <span className='font-semibold'> Availability:</span> In Stock
            </p>
          </div>
          <div>
            <p className='mt-4 border-b-2 pb-2 border-light_gray'>
              <span className='font-semibold p-1 text-lg'>size:</span>
              <span className='border-2 border-orange p-1 hover:bg-orange hover:text-white rounded-md'>
                9x12
              </span>
            </p>
          </div>
          <div className='mt-8'>
            <h1 className='font-semibold text-lg'>Design Information</h1>
            <div className='flex justify-between w-64 '>
              <p>Color -</p>
              <p>Beige + 7 More</p>
            </div>
            <div className='flex justify-between w-64 '>
              <p>Construction -</p>
              <p className=''>Hand Tufted</p>
            </div>
            <div className='flex justify-between w-64'>
              <p>Material -</p>
              <p>Wool</p>
            </div>
            <div className='flex justify-between w-64'>
              <p>Shape -</p>
              <p>Rectangle</p>
            </div>
            <div className='flex justify-between w-64'>
              <p>Size -</p>
              <p>6X9 cm</p>
            </div>
            <div className='flex justify-between w-64'>
              <p>Use - Bedroom</p>
              <p>Bedroom</p>
            </div>
          </div>
          {/* ********dis*** */}
          <div className='mt-10'>
            <h1 className='text-lg font-semibold'>Description</h1>
            <p>{productDetails.description}</p>
            <h2>{productDetails.meta_description}</h2>
            <h2>{productDetails.meta_keywords}</h2>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default page

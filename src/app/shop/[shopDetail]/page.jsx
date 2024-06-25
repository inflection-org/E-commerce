'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { instance } from '@/app/axios/Api'
import { discountedPrice } from '@/components/ui/Discount'
import { addTwoFloat } from '@/components/ui/Floting'
import { FaHeart } from 'react-icons/fa'
import { IoMdShareAlt } from 'react-icons/io'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { MdOutlineMailOutline } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { FiTwitter } from 'react-icons/fi'
import SimilarCard from '@/components/ui/SimilarCard'
import Review from '@/components/ui/Review'

const ShopDetail = () => {
  const [isShow, setIsShow] = useState(false)
  const router = useRouter()
  const [currentImage, setCurrentImage] = useState('')
  const [productDetails, setProductDetails] = useState([])
  const [currentVariant, setCurrentVariant] = useState({})
  const [isActive, setIsActive] = useState(false)
  const params = useParams()
  const id = params.shopDetail
  const handleClick = () => {
    setIsActive(!isActive)
  }
  const addToWishList = async (id) => {
    try {
      const res = await instance.post('/wishlists', {
        variant_id: id,
      })
      toast.success(res?.data?.message)
    } catch (err) {
      console.log(err)
      if (err.response?.data?.message) {
        toast.error(err.response?.data?.message)
      } else {
        toast.error(err.message)
      }
    }
  }
  const removeWishlist = async (id) => {
    try {
      const res = await instance.delete(`/wishlists/${id}`)
      toast.success(res?.data?.message)
    } catch (err) {
      console.log(err)
      if (err.response?.data?.message) {
        toast.error(err.response?.data?.message)
      } else {
        toast.error(err.message)
      }
    }
  }
  const addToCart = async (id) => {
    try {
      const res = await instance.post('/carts', {
        variant_id: id,
      })
      router.push('/cart')
      toast.success(res?.data?.message)
    } catch (err) {
      if (err.response?.data?.message) {
        toast.error(err.response?.data?.message)
      } else {
        toast.error(err.message)
      }
    }
  }

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await instance.get(`/products/public/${id}`)
        setProductDetails(res.data)
        if (res.data) {
          setCurrentVariant(res.data.variants[0])
        }
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, [id])

  return (
    <div className='px-5 md:px-10'>
      <div className='block md:flex py-2 md:py-8 gap-4 w-[100] md:divide-x'>
        <div className='w-full md:w-[40%]'>
          <div className=''>
            {/* **********1-img********** */}
            <div className='relative'>
              <div className='flex  justify-center'>
                <div className=' w-auto border-2 border-light_gray  shadow-md'>
                  <img
                    className='object-cover group-hover:scale-110 duration-1000 w-auto h-60 md:h-80'
                    src={currentImage ? currentImage : productDetails.thumbnail}
                    alt='logo'
                  />
                </div>
              </div>
              <div className='absolute p-2 top-5 right-2'>
                <FaHeart
                  onClick={() => {
                    handleClick()
                    if (isActive) {
                      removeWishlist(currentVariant.variant_id)
                    } else {
                      addToWishList(currentVariant.variant_id)
                    }
                  }}
                  className={`size-5 cursor-pointer ${
                    isActive ? 'text-red' : 'text-gray'
                  }`}
                />
              </div>
            </div>
            {/* **********2-img*********** */}
            <div className='flex justify-center gap-4'>
              {productDetails?.image_urls?.map((item, i) => {
                return (
                  <div
                    onMouseEnter={() => {
                      setCurrentImage(item)
                    }}
                    key={i}
                    className={`p-1 rounded-md mt-8 cursor-pointer ${
                      currentImage === item
                        ? 'border-2 border-orange '
                        : 'border-2 border-light_gray '
                    }`}
                  >
                    <img src={item} alt='logo' className=' w-24 h-24 ' />
                  </div>
                )
              })}
            </div>
            {/*******button***** */}
            <div className='flex mt-5 justify-center'>
              <div>
                <div className='flex justify-between gap-4 mt-2'>
                  <button
                    onClick={() =>
                      router.push(
                        `/checkout?variant_id=${currentVariant.variant_id}`
                      )
                    }
                    className='bg-orange mt-2 md:mt-0 hover:bg-black duration-1000 text-white rounded-md px-3 md:px-7 py-2'
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => addToCart(currentVariant.variant_id)}
                    className='bg-orange mt-2 md:mt-0 hover:bg-black duration-1000 text-white rounded-md px-3 md:px-7 py-2'
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* **********second-part */}
        <div className='w-full md:w-[60%] mt-7 bg-light_gray py-2 md:mt-0 px-4'>
          <div className='flex justify-between items-center border-b-2 border-black'>
            <div className='font-semibold text-xl py-2'>
              {currentVariant?.name
                ? currentVariant?.name
                : productDetails.name}
            </div>
            <div
              onMouseEnter={() => {
                setIsShow(true)
              }}
              onMouseLeave={() => {
                setIsShow(false)
              }}
            >
              <div className='relative flex gap-1 cursor-pointer items-center hover:text-blue'>
                <IoMdShareAlt className='size-5' />
                <h1>Share</h1>
              </div>
              {isShow && (
                <div className='absolute shadow-lg rounded-md right-8 p-2'>
                  <div className='flex gap-2 cursor-pointer'>
                    <MdOutlineMailOutline className='text-red size-8' />
                    <IoLogoWhatsapp className='text-green size-7' />
                    <FiTwitter className='text-blue size-7' />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* ************price******** */}
          <div className=' block md:flex gap-8  border-b-2 border-black pb-4 '>
            <div className='flex mt-5 px-4 justify-center border-2 border-gray bg-white rounded-lg gap-3 py-4'>
              <p className=''>
                <span className='font-semibold'> Price: </span> &#8377;$
                {discountedPrice(currentVariant.price, currentVariant.discount)}
              </p>
              {currentVariant.discount > 0 && (
                <p className='text-gray line-through'>
                  &#8377;${addTwoFloat(currentVariant.price)}
                </p>
              )}
            </div>
            <p className='py-4  mt-5 px-4 border-2 border-gray   bg-white rounded-lg'>
              <span className='font-semibold'> Discount:</span>{' '}
              {currentVariant.discount}%
            </p>
          </div>
          {/* **************All variants*************** */}
          <div className='flex gap-5'>
            {productDetails?.variants?.map((variant, i) => {
              return (
                <div key={i} className=''>
                  {/* ************************* */}
                  <div
                    onClick={() => setCurrentVariant(variant)}
                    className={`border-2 border-black rounded-md gap-4 p-2  border-b-2 mt-4 pb-2 ${
                      currentVariant.name === variant.name && 'bg-light_gray'
                    }`}
                  >
                    <p>{variant.name}</p>
                    <p className='text-gray'>{variant.product_code}</p>
                  </div>
                </div>
              )
            })}
          </div>
          {/* ********dis*** */}
          <div className='mt-10 '>
            <h1 className='text-lg font-semibold'>Description</h1>
            <p>{productDetails.description}</p>
          </div>
        </div>
      </div>
      <hr></hr>
      {/* ***************************Review & comments********************************************* */}
      <Review />

      {/* **************similar product******************** */}
      <div>
        <div className='mt-5'>
          <h3 className='text-2xl font-semibold text-black '>
            Similar product
          </h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 '>
          <SimilarCard />
          <SimilarCard />
          <SimilarCard />
          <SimilarCard />
        </div>
      </div>
      {/* *************recently viewed************* */}
      <div>
        <div className='mt-5'>
          <h3 className='text-2xl font-semibold text-black '>
            Recently Viewed
          </h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 '>
          <SimilarCard />
          <SimilarCard />
          <SimilarCard />
          <SimilarCard />
        </div>
      </div>
    </div>
  )
}

export default ShopDetail

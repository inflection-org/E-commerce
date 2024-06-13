import React from 'react'
import { useState } from 'react'
import { discountedPrice } from '../Discount'
import { addTwoFloat } from '../Floting'
import instance from '@/app/axios/Api'
// import { FaHeart } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export const ProductCard = ({
  pic,
  name,
  price,
  description,
  rating,
  discount,
  toto,
  variantId,
}) => {
  // const [isActive, setIsActive] = useState(false)
  const router = useRouter()

  const addToCart = async (id) => {
    try {
      const res = await instance.post('/carts', {
        variant_id: id,
        quantity: 1,
      })
      console.log(res.data)
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

  // const handleClick = () => {
  //   setIsActive(!isActive)
  //   console.log(isActive)
  // }
  // const addToWishList = async (id) => {
  //   try {
  //     const res = await instance.post('/wishlists', {
  //       variant_id: id,
  //     })
  //     console.log(res.data)
  //     toast.success(res?.data?.message)
  //   } catch (err) {
  //     console.log(err)
  //     if (err.response?.data?.message) {
  //       toast.error(err.response?.data?.message)
  //     } else {
  //       toast.error(err.message)
  //     }
  //   }
  // }
  // const removeWishlist = async (id) => {
  //   try {
  //     const res = await instance.delete(`/wishlists/${id}`)
  //     console.log(res.data)
  //     toast.success(res?.data?.message)
  //   } catch (err) {
  //     console.log(err)
  //     if (err.response?.data?.message) {
  //       toast.error(err.response?.data?.message)
  //     } else {
  //       toast.error(err.message)
  //     }
  //   }
  // }

  return (
    <div className='border-2 group border-light_gray w-auto h-auto cursor-pointer shadow-md hover:border-gray rounded-lg'>
      <div className='flex relative justify-center m-4 rounded-lg overflow-hidden bg-light_gray'>
        <img
          className='object-fill group-hover:scale-110 duration-1000 w-full h-[300px]'
          src={pic}
          alt='logo'
        />
        {/* <div className='absolute top-5 right-2'>
          <FaHeart
            onClick={() => {
              handleClick()
              if (isActive) {
                removeWishlist(variantId)
              } else {
                addToWishList(variantId)
              }
            }}
            className={`size-5 ${isActive ? 'text-red' : 'text-gray'}`}
          />
        </div> */}
      </div>
      <div className='p-5'>
        <div onClick={() => toto()}>
          <h1 className='hover:text-orange text-2xl'>{name}</h1>
          <p className='text-gray mt-2'>{description}</p>
        </div>
        <p className='text-orange mt-2'>
          <div className='w-14'>
            {discount > 0 && (
              <p className=' bg-green px-2 py-1  rounded-md text-white text-sm'>
                {discount}
                <span className='ml-1'>%</span>
              </p>
            )}
          </div>
          <div className='flex justify-between mt-2 items-center'>
            <div>
              <p className='font-bold'>
                <span className='text-black  mr-2'>&#8377;</span>$
                {discountedPrice(price, discount)}
              </p>
              {discount > 0 && (
                <p className='text-gray line-through '>
                  <span className='text-black mr-2'>&#8377;</span>$
                  {addTwoFloat(price)}
                </p>
              )}
            </div>
            <div>
              <button
                onClick={() => addToCart(variantId)}
                className='text-sm bg-orange md:mt-0 hover:bg-black duration-1000 text-white px-4 py-2 rounded-md '
              >
                Add To Cart
              </button>
            </div>
          </div>
        </p>
        <p className='text-orange mt-2'>{rating}</p>
      </div>
    </div>
  )
}

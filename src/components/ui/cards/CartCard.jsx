'use client'
import React from 'react'
import { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import { instance } from '@/app/axios/Api'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa6'
import { FaMinus } from 'react-icons/fa6'

function CartCard({ pic, dis, price, variantId, cartId, quan, refresh }) {
  const [isActive, setIsActive] = useState(false)
  const [isButtonDisabled, setButtonDisabled] = useState(false)
  const [quantity, setQuantity] = useState(quan)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  const addToWishList = async (id) => {
    try {
      const res = await instance.post('/wishlists', {
        variant_id: id,
      })
      toast.success(res?.data?.message)
      refresh()
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
      refresh()
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

  const removeCartList = async (id) => {
    try {
      const res = await instance.delete(`/carts/${cartId}`)
      toast.success(res?.data?.message)
      refresh()
    } catch (err) {
      console.log(err)
    }
  }
  const increment = async (id) => {
    try {
      const res = await instance.post('/carts', {
        variant_id: id,
      })
      console.log(res.data.cart)
      setQuantity(res.data)
      refresh()
    } catch (err) {
      console.log(err)
    }
  }
  const decrement = async (id, quantityVal) => {
    try {
      const res = await instance.post('/carts', {
        variant_id: id,
        quantity: quantityVal - 1,
      })
      console.log(res.data)
      refresh()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='bg-light_gray'>
      <div className='rounded-lg  border  border-gray-200 bg-white/65  shadow-md p-4   md:p-6'>
        <div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
          <Link href='#' className='shrink-0 md:order-1'>
            <img
              className='hidden h-20 w-20 md:h-32 md:w-32 dark:block'
              src={pic}
              alt='imac image'
            />
          </Link>
          <label className='sr-only'>Choose quantity:</label>
          <div className='flex items-center justify-between md:order-3 md:justify-end'>
            <div className='flex items-center'>
              <button
                type='button'
                onClick={() => {
                  decrement(variantId, quan)
                }}
                id='decrement-button'
                data-input-counter-decrement='counter-input'
                className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-b  hover:bg-light_gray focus:outline-none focus:ring-2  ${
                  isButtonDisabled ? 'text-black' : 'text-gray'
                }`}
              >
                <FaMinus />
              </button>
              <p className='w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium  focus:outline-none focus:ring-0 '>
                {quantity}
              </p>
              <button
                onClick={() => {
                  increment(variantId)
                }}
                id='increment-button'
                data-input-counter-increment='counter-input'
                className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray  hover:bg-light_gray focus:outline-none  ${
                  isButtonDisabled
                    ? 'text-light_gray border-2 border-light_gray'
                    : 'text-gray'
                }`}
              >
                <FaPlus />
              </button>
            </div>
            <div className='text-end md:order-4 md:w-32'>
              <p className='text-base font-bold '>{price}</p>
            </div>
          </div>
          <div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
            <Link href='#' className='text-xl font-medium  hover:underline '>
              {dis}
            </Link>
            <div className='flex items-center gap-4 '>
              <button
                type='button'
                className='inline-flex items-center text-sm gap-1.5 font-medium text-gray hover:text-black hover:underline  '
              >
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
                Add to Favorites
              </button>

              <button
                onClick={() => {
                  removeCartList(cartId)
                }}
                className='inline-flex items-center text-sm font-medium text-red hover:underline '
              >
                <MdDeleteForever className='size-5' />
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCard

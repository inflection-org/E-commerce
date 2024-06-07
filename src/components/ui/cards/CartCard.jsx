import React from 'react'
import { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import instance from '@/app/axios/Api'
import { toast } from 'react-toastify'

function CartCard({ pic, dis, price, variantId, refresh }) {
  const removeCartList = async (id) => {
    try {
      const res = await instance.delete(`/carts/remove/${id}`)
      toast.success(res?.data?.message)
      refresh()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='bg-light_gray'>
      <div className='rounded-lg  border  border-gray-200 bg-white/65  shadow-md p-4   md:p-6'>
        <div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
          <a href='#' className='shrink-0 md:order-1'>
            <img
              className='hidden h-20 w-20 md:h-32 md:w-32 dark:block'
              src={pic}
              alt='imac image'
            />
          </a>

          <label for='counter-input' className='sr-only'>
            Choose quantity:
          </label>
          <div className='flex items-center justify-between md:order-3 md:justify-end'>
            <div className='flex items-center'>
              <button
                type='button'
                id='decrement-button'
                data-input-counter-decrement='counter-input'
                className='inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
              >
                <svg
                  className='h-2.5 w-2.5 text-gray-900 '
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 2'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M1 1h16'
                  />
                </svg>
              </button>
              <input
                type='text'
                id='counter-input'
                data-input-counter
                className='w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 '
                placeholder=''
                value='2'
                required
              />
              <button
                type='button'
                id='increment-button'
                data-input-counter-increment='counter-input'
                className='inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
              >
                <svg
                  className='h-2.5 w-2.5 text-gray-900 '
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </button>
            </div>
            <div className='text-end md:order-4 md:w-32'>
              <p className='text-base font-bold text-gray-900 '>{price}</p>
            </div>
          </div>

          <div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
            <a
              href='#'
              className='text-xl font-medium text-gray-900 hover:underline '
            >
              {dis}
            </a>

            <div className='flex items-center gap-4 '>
              <button
                type='button'
                className='inline-flex items-center text-sm gap-1.5 font-medium text-gray hover:text-black hover:underline dark:text-gray-400 '
              >
                <FaHeart className='size-4' />
                Add to Favorites
              </button>

              <button
                onClick={() => removeCartList(variantId)}
                type='button'
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

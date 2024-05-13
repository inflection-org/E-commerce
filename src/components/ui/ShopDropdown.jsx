'use client'
import React from 'react'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const ShopDropdown = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <div>
      <div className='relative z-20  '>
        <div
          className='flex justify-center items-center group  gap-3 cursor-pointer'
          onMouseEnter={() => {
            setIsShow(true)
          }}
          onMouseLeave={() => {
            setIsShow(false)
          }}
        >
          <h1 className='group-hover:text-orange'>PRODUCT</h1>
          <IoIosArrowDown
            className={
              isShow
                ? 'rotate-180 -ml-1 group-hover:text-orange'
                : '-ml-1 group-hover:text-orange'
            }
          />
        </div>
        <div
          onMouseEnter={() => {
            setIsShow(true)
          }}
          onMouseLeave={() => {
            setIsShow(false)
          }}
          className='absolute  bg-white w-full  rounded-b-lg  '
        >
          {isShow && (
            <ul className='text-sm pl-2 cursor-pointer'>
              <li className='pt-2 hover:underline hover:text-black'>
                <a href='/shop'>SHOP</a>
              </li>
              <li className='pt-1 pb-2 hover:underline hover:text-black'>
                Shopping Cart
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShopDropdown

'use client'
import React from 'react'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link'

const ShopDropdown = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <div>
      <div className='relative z-20'>
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
          className='absolute bg-white w-full rounded-b-lg'
        >
          {isShow && (
            <ul className='text-xs px-2 font-semibold  cursor-pointer'>
              <li className='pt-2 text-gray hover:text-black'>
                <Link href='/shop'>SHOP</Link>
              </li>
              <li className='pt-1  pb-2 text-gray  hover:text-black'>
                SHOPPING CART
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShopDropdown

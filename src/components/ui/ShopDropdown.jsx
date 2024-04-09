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
          onClick={() => {
            setIsShow(!isShow)
          }}
        >
          <h1 className='group-hover:text-orange'>SHOP</h1>
          <IoIosArrowDown className='group-hover:text-orange' />
        </div>
        <div className='absolute  bg-light_gray w-full  rounded-b-lg  left-[50%] -translate-x-[50%]'>
          {isShow && (
            <ul className='text-sm'>
              <li>
                <a href='/shop'>Right sideBar</a>
              </li>
              <li>Left sideBar</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShopDropdown

'use client'
import React from 'react'
import { useState } from 'react'
import { CgMenuGridO } from 'react-icons/cg'
import { IoIosArrowDown } from 'react-icons/io'
const MenuDropdown = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className='relative z-50'>
      <div
        className='flex justify-center items-center bg-orange text-white h-12 p-2 gap-4 cursor-pointer'
        onMouseEnter={() => {
          setIsShow(true)
        }}
        onMouseLeave={() => {
          setIsShow(false)
        }}
      >
        <CgMenuGridO className='' />
        <h1>All Categories</h1>
        <IoIosArrowDown className={isShow ? 'rotate-180' : ''} />
      </div>
      <div
        onMouseEnter={() => {
          setIsShow(true)
        }}
        onMouseLeave={() => {
          setIsShow(false)
        }}
        className='absolute bg-white w-full rounded-b-lg   top-12 left-[50%] -translate-x-[50%]'
      >
        {isShow && (
          <ul className='ml-5 text-gray cursor-pointer '>
            <li className='pt-1 hover:text-black hover:underline'>
              Electronics
            </li>
            <li className='pt-1 hover:text-black hover:underline '>Mobile</li>
            <li className='pt-1 hover:text-black hover:underline'>Sunglass</li>
            <li className='pt-1 hover:text-black hover:underline'>
              Uncategorized
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}
export default MenuDropdown

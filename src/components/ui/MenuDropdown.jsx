'use client'
import React from 'react'
import { useState } from 'react'
import { CgMenuGridO } from 'react-icons/cg'
import { IoIosArrowDown } from 'react-icons/io'
const MenuDropdown = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className='relative'>
      <div
        className='flex justify-center items-center bg-orange text-white h-12 p-2 gap-6 cursor-pointer'
        onClick={() => {
          setIsShow(!isShow)
        }}
      >
        <CgMenuGridO className='' />
        <h1>All Categories</h1>
        <IoIosArrowDown className='' />
      </div>
      <div className='absolute bg-gray w-full rounded-b-lg   top-14 left-[50%] -translate-x-[50%]'>
        {isShow && (
          <ul className='text-center'>
            <li>jhjh</li>
            <li>njb</li>
            <li>nbbn</li>
            <li>jnbjb</li>
          </ul>
        )}
      </div>
    </div>
  )
}
export default MenuDropdown

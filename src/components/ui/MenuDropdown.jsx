'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { CgMenuGridO } from 'react-icons/cg'
import { IoIosArrowDown } from 'react-icons/io'
import { instance } from '@/app/axios/Api'
import { useRouter } from 'next/navigation'

const MenuDropdown = () => {
  const router = useRouter()
  const [isShow, setIsShow] = useState(false)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function search() {
      try {
        const res = await instance.get('/categories/list')
        setCategories(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    search()
  }, [])
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
        <CgMenuGridO />
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
        className='absolute bg-white w-full rounded-b-lg top-12 left-[50%] -translate-x-[50%]'
      >
        {isShow && (
          <ul className='ml-5 text-gray cursor-pointer'>
            {categories.map((item) => {
              return (
                <ul onClick={() => router.push(`/cotegory/${item.id}`)}>
                  <li className='pt-1 hover:text-black' key={item}>
                    {item.name}
                  </li>
                </ul>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
export default MenuDropdown

import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const SimilarCard = () => {
  return (
    <>
      <div class='relative m-10  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-black bg-white shadow-md'>
        <Link
          class='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'
          href='#'
        >
          <img
            class='object-cover'
            src='https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='product image'
          />
          <span class='absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white'>
            39% OFF
          </span>
        </Link>
        <div class='mt-4 px-5 pb-5'>
          <a href='#'>
            <h5 class='text-xl tracking-tight text-black'>
              Nike Air MX Super 2500 - Red
            </h5>
          </a>
          <div class='mt-2 mb-5 flex items-center justify-between'>
            <p>
              <span class='text-3xl font-bold text-black'>$449</span>
              <span class='text-sm text-black line-through'>$699</span>
            </p>
          </div>
          <Link
            href='#'
            class='flex items-center justify-center  px-5 py-2.5 text-center text-sm font-medium  bg-orange  hover:bg-black duration-1000 text-white rounded-md'
          >
            <FaShoppingCart className='size-4 mr-2' />
            Add to cart
          </Link>
        </div>
      </div>
    </>
  )
}

export default SimilarCard

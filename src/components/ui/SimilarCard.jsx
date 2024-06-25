import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const SimilarCard = () => {
  return (
    <>
      <div class='relative py-5  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-black bg-white shadow-md'>
        <Link
          class='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'
          href='#'
        >
          <img
            class='object-cover'
            src='https://d2wd2j5j7vio4j.cloudfront.net/data/carpets/Mobile/64-15072-320x115-05.jpg'
            alt='product image'
          />
          <span class='absolute top-0 left-0 m-2 rounded-full bg-green px-2 text-center text-sm font-medium text-white'>
            39% OFF
          </span>
        </Link>
        <div class='mt-4 px-5 pb-5'>
          <Link href='#'>
            <h5 class='text-xl tracking-tight text-black hover:text-orange'>
              Nike Air MX Super 2500 - Red
            </h5>
          </Link>
          <div class='mt-2 mb-5 flex items-center justify-between'>
            <p>
              <span class='text-2xl font-bold text-orange'> &#8377;449</span>
              <span class='text-base text-gray line-through ml-2'>$699</span>
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

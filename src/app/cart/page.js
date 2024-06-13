'use client'
import React, { useEffect, useState } from 'react'
import CartCard from '@/components/ui/cards/CartCard'
import instance from '@/app/axios/Api'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ProtectedRoute from '@/components/app/ProtectedRoute'

const page = () => {
  const pathname = usePathname()
  const [allCarts, setAllCarts] = useState([])
  const [refresh, setRefresh] = useState(false)
  console.log(allCarts)

  useEffect(() => {
    async function searchCart() {
      try {
        const res = await instance.get('/carts/my')
        setAllCarts(res.data.items)
      } catch (err) {
        console.log(err)
      }
    }

    searchCart()
  }, [refresh])

  return (
    <>
      <div className='bg-white py-8 antialiased  md:py-16'>
        <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
          <div className='h-44 my-5 px-4 block md:flex md:justify-between items-center bg-light_gray'>
            <div className='pt-5 md:pt-0'>
              <h1 className='text-3xl md:text-5xl font-bold'>My Cart</h1>
              <p className='mt-3  text-gray text-lg md:text-xl'>
                Something differet, every day.
              </p>
            </div>
            <p className='uppercase text-center mt-2 md:mt-0'>home{pathname}</p>
          </div>
          <div className='mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8'>
            <div className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'>
              <div className='space-y-6'>
                {/* ************card components******************* */}
                {allCarts?.map((cart, index) => (
                  <CartCard
                    key={index}
                    pic={cart.product_thumbnail}
                    dis={cart.product_description}
                    price={cart.price}
                    name={cart.product_name}
                    variantId={cart.variant_id}
                    refresh={() => setRefresh(!refresh)}
                  />
                ))}
              </div>

              {/*  */}
              <div className='hidden xl:mt-8 xl:block'>
                <h3 className='text-2xl font-semibold text-gray-900 '>
                  watch letter
                </h3>
                <div className='mt-6 grid grid-cols-3 gap-4 sm:mt-8'>
                  <div className='space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 '>
                    <a href='#' className='overflow-hidden rounded'>
                      <img
                        className='mx-auto h-44 w-44 dark:hidden'
                        src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg'
                        alt='imac image'
                      />
                      <img
                        className='mx-auto hidden h-44 w-44 dark:block'
                        src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg'
                        alt='imac image'
                      />
                    </a>
                    <div>
                      <a
                        href='#'
                        className='text-lg font-semibold leading-tight text-gray-900 hover:underline '
                      >
                        iMac 27”
                      </a>
                      <p className='mt-2 text-base font-normal text-gray-500 dark:text-gray-400'>
                        This generation has some improvements, including a
                        longer continuous battery life.
                      </p>
                    </div>
                    <div>
                      <p className='text-lg font-bold text-gray-900 '>
                        <span className='line-through'> $399,99 </span>
                      </p>
                      <p className='text-lg font-bold leading-tight text-red-600 dark:text-red-500'>
                        $299
                      </p>
                    </div>
                    <div className='mt-6 flex items-center gap-2.5'>
                      <button
                        data-tooltip-target='favourites-tooltip-1'
                        type='button'
                        className='inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
                      >
                        <svg
                          className='h-5 w-5'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z'
                          ></path>
                        </svg>
                      </button>
                      <div
                        id='favourites-tooltip-1'
                        role='tooltip'
                        className='tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700'
                      >
                        Add to favourites
                        <div className='tooltip-arrow' data-popper-arrow></div>
                      </div>
                      <button
                        type='button'
                        className='inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                      >
                        <svg
                          className='-ms-2 me-2 h-5 w-5'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4'
                          />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className='space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 '>
                    <a href='#' className='overflow-hidden rounded'>
                      <img
                        className='mx-auto h-44 w-44 dark:hidden'
                        src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg'
                        alt='imac image'
                      />
                      <img
                        className='mx-auto hidden h-44 w-44 dark:block'
                        src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg'
                        alt='imac image'
                      />
                    </a>
                    <div>
                      <a
                        href='#'
                        className='text-lg font-semibold leading-tight text-gray-900 hover:underline '
                      >
                        Playstation 5
                      </a>
                      <p className='mt-2 text-base font-normal text-gray-500 dark:text-gray-400'>
                        This generation has some improvements, including a
                        longer continuous battery life.
                      </p>
                    </div>
                    <div>
                      <p className='text-lg font-bold text-gray-900 '>
                        <span className='line-through'> $799,99 </span>
                      </p>
                      <p className='text-lg font-bold leading-tight text-red-600 dark:text-red-500'>
                        $499
                      </p>
                    </div>
                    <div className='mt-6 flex items-center gap-2.5'>
                      <button
                        data-tooltip-target='favourites-tooltip-2'
                        type='button'
                        className='inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
                      >
                        <svg
                          className='h-5 w-5'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z'
                          ></path>
                        </svg>
                      </button>
                      <div
                        id='favourites-tooltip-2'
                        role='tooltip'
                        className='tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700'
                      >
                        Add to favourites
                        <div className='tooltip-arrow' data-popper-arrow></div>
                      </div>
                      <button
                        type='button'
                        className='inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                      >
                        <svg
                          className='-ms-2 me-2 h-5 w-5'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4'
                          />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className='space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 '>
                    <a href='#' className='overflow-hidden rounded'>
                      <img
                        className='mx-auto h-44 w-44 dark:hidden'
                        src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg'
                        alt='imac image'
                      />
                      <img
                        className='mx-auto hidden h-44 w-44 dark:block'
                        src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg'
                        alt='imac image'
                      />
                    </a>
                    <div>
                      <a
                        href='#'
                        className='text-lg font-semibold leading-tight text-gray-900 hover:underline '
                      >
                        Apple Watch Series 8
                      </a>
                      <p className='mt-2 text-base font-normal text-gray-500 dark:text-gray-400'>
                        This generation has some improvements, including a
                        longer continuous battery life.
                      </p>
                    </div>
                    <div>
                      <p className='text-lg font-bold text-gray-900 '>
                        <span className='line-through'> $1799,99 </span>
                      </p>
                      <p className='text-lg font-bold leading-tight text-red-600 dark:text-red-500'>
                        $1199
                      </p>
                    </div>
                    <div className='mt-6 flex items-center gap-2.5'>
                      <button
                        data-tooltip-target='favourites-tooltip-3'
                        type='button'
                        className='inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
                      >
                        <svg
                          className='h-5 w-5'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z'
                          ></path>
                        </svg>
                      </button>
                      <div
                        id='favourites-tooltip-3'
                        role='tooltip'
                        className='tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700'
                      >
                        Add to favourites
                        <div className='tooltip-arrow' data-popper-arrow></div>
                      </div>

                      <button
                        type='button'
                        className='inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                      >
                        <svg
                          className='-ms-2 me-2 h-5 w-5'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4'
                          />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* *******************Order summary******************************* */}
            <div className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'>
              <div className='space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700  sm:p-6'>
                <p className='text-xl font-semibold text-gray-900 '>
                  Order summary
                </p>

                <div className='space-y-4'>
                  <div className='space-y-2'>
                    <dl className='flex items-center justify-between gap-4'>
                      <dt className='text-base font-normal text-gray-500 dark:text-gray-400'>
                        Original price
                      </dt>
                      <dd className='text-base font-medium text-gray-900 '>
                        $7,592.00
                      </dd>
                    </dl>

                    <dl className='flex items-center justify-between gap-4'>
                      <dt className='text-base font-normal text-gray-500 dark:text-gray-400'>
                        Savings
                      </dt>
                      <dd className='text-base font-medium text-green-600'>
                        -$299.00
                      </dd>
                    </dl>

                    <dl className='flex items-center justify-between gap-4'>
                      <dt className='text-base font-normal text-gray-500 dark:text-gray-400'>
                        Store Pickup
                      </dt>
                      <dd className='text-base font-medium text-gray-900 '>
                        $99
                      </dd>
                    </dl>

                    <dl className='flex items-center justify-between gap-4'>
                      <dt className='text-base font-normal text-gray-500 dark:text-gray-400'>
                        Tax
                      </dt>
                      <dd className='text-base font-medium text-gray-900 '>
                        $799
                      </dd>
                    </dl>
                  </div>

                  <dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700'>
                    <dt className='text-base font-bold text-gray-900 '>
                      Total
                    </dt>
                    <dd className='text-base font-bold text-gray-900 '>
                      $8,191.00
                    </dd>
                  </dl>
                </div>

                <a
                  href='#'
                  className='flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                >
                  Proceed to Checkout
                </a>

                <div className='flex justify-center py-3 shadow-md rounded-md '>
                  <Link
                    href='/payment'
                    className='bg-orange hover:bg-black duration-1000 text-white   rounded-md px-6 py-3'
                  >
                    Place Order
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProtectedRoute(page)

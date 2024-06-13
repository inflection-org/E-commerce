import React from 'react'
import Link from 'next/link'
const CheckOut = () => {
  return (
    <div>
      <div className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'>
        <div className='space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700  sm:p-6'>
          <p className='text-xl font-semibold text-gray-900 '>Order summary</p>

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
                <dd className='text-base font-medium text-gray-900 '>$99</dd>
              </dl>

              <dl className='flex items-center justify-between gap-4'>
                <dt className='text-base font-normal text-gray-500 dark:text-gray-400'>
                  Tax
                </dt>
                <dd className='text-base font-medium text-gray-900 '>$799</dd>
              </dl>
            </div>

            <dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700'>
              <dt className='text-base font-bold text-gray-900 '>Total</dt>
              <dd className='text-base font-bold text-gray-900 '>$8,191.00</dd>
            </dl>
          </div>

          <a
            href='#'
            className='flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
          >
            Proceed to Checkout
          </a>

          {/* <div className='flex justify-center py-3 shadow-md rounded-md '>
            <Link
              href='/payment'
              className='bg-orange hover:bg-black duration-1000 text-white   rounded-md px-6 py-3'
            >
              Place Order
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default CheckOut

'use client'
import React from 'react'
import OrderSummry from '@/components/ui/OrderSummry'
import { SiRazorpay } from 'react-icons/si'
import Link from 'next/link'

const PaymentDetails = () => {
  return (
    <div className='mx-5 md:mx-10'>
      <div className=' md:flex justify-between w-full gap-5 py-5'>
        <div className='w-full md:w-[70%]  space-y-3 rounded-md '>
          <h1 className='bg-blue py-3  rounded-md pl-2 text-white'>
            Select Payment Method
          </h1>
          <div className='md:flex justify-center py-5 gap-4 space-y-6 md:space-y-0 '>
            <div className='py-5  md:w-[45.5%] rounded-md shadow-md px-8'>
              <div className='flex items-center border-2 border-gray px-5 md:w-96 bg-orange hover:bg-black duration-1000 text-white rounded-md  py-3 mb-4'>
                <input
                  id='default-radio-1'
                  type='radio'
                  value=''
                  name='default-radio'
                  class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 '
                />
                <label
                  for='default-radio-1'
                  className='ms-2 text-sm font-bold '
                >
                  Cash On Delevary
                </label>
              </div>
            </div>
            <div className='py-5 md:w-[45.5%] rounded-md shadow-md cursor-pointer px-8'>
              <div className='flex items-center border-2 px-5 md:w-96 bg-orange hover:bg-black duration-1000 text-white rounded-md  border-gray py-3 mb-4'>
                <SiRazorpay className='size-5' />
                <Link
                  href='https://dashboard.razorpay.com/app/qr_codes'
                  className='ms-2 text-sm font-bold '
                >
                  Razorpay
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full md:w-[30%]'>
          <OrderSummry />
        </div>
      </div>
    </div>
  )
}

export default PaymentDetails

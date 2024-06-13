'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import OrderSummary from '../../components/ui/OrderSummry'

function Payment() {
  const router = useRouter()
  return (
    <div className='mx-5 md:mx-10 py-5'>
      <div className='md:flex justify-center gap-5 w-full'>
        <div className='w-full md:w-[70%]'>
          <div className='shadow-md rounded-md py-4  mt-4'>
            <button className='ml-3 py-2 text-white px-8 rounded-md bg-gray '>
              User Information
            </button>
            <p className='ml-3 mt-3 font-bold'>
              Apple<span className='ml-2'>amit23@gamil.com</span>
            </p>
          </div>
          <div className='shadow-md rounded-md mt-4'>
            <h1 className='bg-blue py-3  rounded-md pl-2 text-white'>
              SELECT DELIVERY ADDRESS
            </h1>
            <div className='p-4'>
              <div className='flex items-center mb-4'>
                <input
                  id='default-radio-1'
                  type='radio'
                  value=''
                  name='default-radio'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 '
                />
                <label
                  for='default-radio-1'
                  className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Address
                </label>
              </div>
              <p>Address </p>
              <p>Apple</p>
              <p>Khamaria</p>
              <p>Bhadohi</p>
              <p>9369584885</p>
              <p>221306</p>
              <p>Uttar Pradesh</p>
            </div>
            <hr></hr>
            <div className='p-4'>
              <div className='flex items-center mb-4'>
                <input
                  id='default-radio-1'
                  type='radio'
                  value=''
                  name='default-radio'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 '
                />
                <label
                  for='default-radio-1'
                  className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Address
                </label>
              </div>
              <p>Address </p>
              <p>Apple</p>
              <p>Khamaria</p>
              <p>Bhadohi</p>
              <p>9369584885</p>
              <p>221306</p>
              <p>Uttar Pradesh</p>
            </div>
            <hr></hr>
            <div className='p-4'>
              <div className='flex items-center mb-4'>
                <input
                  id='default-radio-1'
                  type='radio'
                  value=''
                  name='default-radio'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 '
                />
                <label
                  for='default-radio-1'
                  className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Address
                </label>
              </div>
              <p>Address </p>
              <p>Apple</p>
              <p>Khamaria</p>
              <p>Bhadohi</p>
              <p>9369584885</p>
              <p>221306</p>
              <p>Uttar Pradesh</p>
            </div>
            <hr></hr>
            <div className='flex justify-end py-3 px-4 shadow-md rounded-md '>
              <button
                onClick={() => router.push('/payment/*')}
                className='bg-orange hover:bg-black duration-1000 text-white   rounded-md px-6 py-3'
              >
                DELIVERY HEAR
              </button>
            </div>
          </div>
        </div>
        <div className='w-full md:w-[30%]'>
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

export default Payment

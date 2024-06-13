'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const OrderDetail = () => {
  const pathname = usePathname()

  return (
    <div className='px-5 md:px-10'>
      <div className='h-44 my-5 px-4 block md:flex md:justify-between items-center bg-light_gray'>
        <div className='pt-5 md:pt-0'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Order</h1>
          <p className='mt-3  text-gray text-lg md:text-xl'>
            Something differet, every day.
          </p>
        </div>
        <p className='uppercase text-center mt-2 md:mt-0'>home{pathname}</p>
      </div>
      <div className='block md:flex gap-2 py-5 w-[100%]'>
        <div className='border-2  border-gray w-full md:w-[30%]'>
          <div className='hover:bg-orange bg-light_gray'>
            <p className='py-4 px-4 text-sm font-semibold'>DASHBOARD</p>
          </div>
          <hr className='h-px my-0 bg-gray border-0' />
          <div className='hover:bg-orange bg-light_gray'>
            <p className='py-4 px-4 text-sm font-semibold'>ORDERS</p>
          </div>
          <hr className='h-px my-0 bg-gray border-0' />
          <div className='hover:bg-orange bg-light_gray'>
            <p className='py-4 px-4 text-sm font-semibold'>DOWNLOADS</p>
          </div>
          <hr className='h-px my-0 bg-gray border-0' />
          <div className='hover:bg-orange bg-light_gray'>
            <p className='py-4 px-4 text-sm font-semibold'>ADDRESS</p>
          </div>
          <hr className='h-px my-0 bg-gray border-0' />
          <div className='hover:bg-orange bg-light_gray'>
            <p className='py-4 px-4 text-sm font-semibold'>LOGOUT</p>
          </div>
          <hr className='h-px my-0 bg-gray border-0' />
        </div>
        <div className='w-full md:w-[70%]'>
          <h1 className='font-semibold text-2xl pt-5 md:pt-0 pb-3'>
            Order Details
          </h1>
          <div>
            <div className='flex justify-between bg-light_gray py-4 px-4'>
              <p>PRODUCT</p>
              <p>TOTAL</p>
            </div>
            <hr className='h-px my-0 bg-gray border-0' />
            <div className='flex justify-between py-4 px-4'>
              <p>#5342</p>
              <p>1254</p>
            </div>
            <hr className='h-px my-0 bg-gray border-0' />
            <div className='flex justify-between py-4 px-4'>
              <p>Subtotal:</p>
              <p>1254</p>
            </div>
            <hr className='h-px my-0 bg-gray border-0' />
            <div className='flex justify-between py-4 px-4'>
              <p>Shipping:</p>
              <p>76.70 (incl. tax) via Shipping</p>
            </div>
            <hr className='h-px my-0 bg-gray border-0' />
            <div className='flex justify-between py-4 px-4'>
              <p>Payment method:</p>
              <p>debit Card / UPI / NetBanking</p>
            </div>
            <hr className='h-px my-0 bg-gray border-0' />
            <div className='flex justify-between py-4 px-4'>
              <p>Total:</p>
              <p>1387.70</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className='bg-orange rounded-md hover:text-white p-4 md:text-base md:p-2'>
          Order again
        </button>
        <div className='bg-light_gray py-4 px-4 my-4'>
          <p className='py-4 font-semibold'>Billing Address</p>
          <p>inflection ORG</p>
          <p>Apple</p>
          <p>Khalwapur </p>
          <p>khamaria 221306</p>
          <p>phone 9367657497</p>
          <p>email Apple23@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail

'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import OrderCard from '@/components/ui/cards/OrderCard'

const page = () => {
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
        <p className='uppercase text-center mt-2 md:mt-0'>home {pathname}</p>
      </div>
      <div className='block md:flex gap-2 py-5 w-[100%]'>
        {/* <div className='border-2  border-gray w-full md:w-[30%]'>
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
        </div> */}
        <div className='w-full mt-8 md:mt-0 md:w-[100%]'>
          <div className='flex justify-between bg-light_gray py-2 px-2'>
            <p className='font-semibold'>Order</p>
            <p className=' font-semibold hidden md:block'>Date</p>
            <p className='font-semibold'>Status</p>
            <p className='font-semibold hidden md:block '>Total</p>
            <p className='font-semibold'>Action</p>
          </div>
          <OrderCard
            order={'#345664'}
            date={'August11,2023'}
            status={'Completed'}
            total={8542}
          />
          <OrderCard
            order={'#345664'}
            date={'August11,2023'}
            status={'Completed'}
            total={8542}
          />
        </div>
      </div>
    </div>
  )
}

export default page

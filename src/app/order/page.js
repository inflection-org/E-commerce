'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import OrderCard from '@/components/ui/cards/OrderCard'

const Order = () => {
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
        <div className='w-full mt-8 md:mt-0 md:w-[100%]'>
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

export default Order

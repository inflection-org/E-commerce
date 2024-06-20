import React from 'react'
import LocalTime from '../LocalTime'

const OrderCard = ({ data, setOrderId }) => {
  return (
    <div className='mt-8'>
      <div onClick={() => setOrderId(data.id)}>
        <div className='flex justify-between bg-light_gray shadow-md  rounded-md mt-4 py-10 px-4'>
          <p className='p-2 text-blue'>
            {' '}
            <span className='mr-1 font-semibold'>#</span>
            {data.order_code}
          </p>
          <p className='hidden md:block p-2'>{LocalTime(data.order_at)}</p>
          <p className='p-2'>
            <span className='mr-1 font-semibold animate-ping text-red'>
              &#x2022;
            </span>
            {data.order_status}
          </p>
          <p className='hidden md:block p-2'>
            <span className='mr-1 font-semibold'>&#8377;</span>
            {data.total_price}
          </p>
          <button className='bg-orange text-xs  rounded-md hover:text-white p-1 md:text-base md:p-2'>
            See Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderCard

import React from 'react'

const OrderCard = ({ order, date, status, total }) => {
  return (
    <div className='mt-8'>
      <div>
        <div className='flex justify-between bg-light_gray shadow-sm rounded-md mt-4 p-4 '>
          <p className='p-2 text-blue'>{order}</p>
          <p className='hidden md:block p-2'>{date}</p>
          <p className='p-2'>{status}</p>
          <p className='hidden md:block p-2'>{total}</p>
          <button className='bg-orange text-xs  rounded-md hover:text-white p-1 md:text-base md:p-2'>
            View Invoice
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderCard

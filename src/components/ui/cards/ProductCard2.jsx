import React from 'react'

const ProductCard2 = () => {
  return (
    <div>
      <div className='flex items-center bg-light_gray w-auto h-auto py-8 px-4 rounded-lg'>
        <div className='ml-4 w-52'>
          <p className='text-sm text-gray'>Watch</p>
          <h1 className='text-2xl font-bold mt-3'>Headphone</h1>
          <p className='text-sm mt-2'>
            Starting at <span className='text-orange'>$399</span>
          </p>
          <button className='bg-white hover:bg-orange hover:text-white duration-1000 rounded-full px-4 md:px-8 py-3 mt-8 md:mt-14'>
            Shop Now
          </button>
        </div>
        <div className='w-52'>
          <img
            className='object-cover group-hover:scale-110 rounded-md duration-1000 w-auto h-auto '
            src={'/product/S3.jpg'}
            alt='logo'
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard2

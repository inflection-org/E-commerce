import React from 'react'

const ProductCard2 = ({ name, dis, price, pic, categoriesDetails }) => {
  return (
    <div>
      <div className='flex items-center bg-light_gray w-auto h-[250px] py-8 px-4 rounded-lg'>
        <div className='ml-4 w-52'>
          <p className='text-sm text-gray'>{name}</p>
          <h1 className='text-lg font-semibold mt-3'>{dis}</h1>
          <button
            onClick={() => categoriesDetails()}
            className='bg-white hover:bg-orange hover:text-white duration-1000 rounded-full px-4 md:px-8 py-3 mt-8 md:mt-14'
          >
            Shop Now
          </button>
        </div>
        <div className='w-52'>
          <img
            className='object-cover group-hover:scale-110 rounded-md duration-1000 w-auto h-auto '
            src={pic}
            alt='logo'
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard2

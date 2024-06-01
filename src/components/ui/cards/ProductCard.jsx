import React from 'react'

export const ProductCard = ({ pic, name, price, rating, discount, toto }) => {
  return (
    <div
      className='border-2 group border-light_gray w-auto h-auto rounded-lg'
      onClick={() => toto()}
    >
      <div className='flex relative justify-center m-4 rounded-lg overflow-hidden   bg-light_gray'>
        {pic ? (
          <img
            className='object-cover group-hover:scale-110 duration-1000 w-full h-full '
            src={pic}
            alt='logo'
          />
        ) : (
          <img
            className='object-cover group-hover:scale-110 rounded-md duration-1000 w-auto h-auto '
            src={'/product/S3.jpg'}
            alt='logo'
          />
        )}

        {discount && (
          <p className='absolute top-2 right-2 bg-orange px-2 py-1 rounded-full text-white text-sm'>
            {discount}
          </p>
        )}
      </div>
      <div className='p-5'>
        <h1 className='hover:text-orange'>{name}</h1>
        <p className='text-orange mt-2'>{price}</p>
        <p className='text-orange mt-2'>{rating}</p>
      </div>
    </div>
  )
}

import React from 'react'
import { discountedPrice } from '../Discount'
import { addTwoFloat } from '../Floting'

export const ProductCard = ({
  pic,
  name,
  price,
  description,
  rating,
  discount,
  toto,
}) => {
  // console.log('pic', pic)
  return (
    <div
      className='border-2 group border-light_gray w-auto h-auto rounded-lg'
      onClick={() => toto()}
    >
      <div className='flex relative justify-center m-4 rounded-lg overflow-hidden bg-light_gray'>
        <img
          className='object-cover group-hover:scale-110 duration-1000 w-full h-full '
          src={pic}
          alt='logo'
        />
        {discount > 0 && (
          <p className='absolute top-2 right-2 bg-orange px-2 py-1 rounded-full text-white text-sm'>
            {discount}
            <span className='ml-1'>%</span>
          </p>
        )}
      </div>
      <div className='p-5'>
        <h1 className='hover:text-orange'>{name}</h1>
        <p className='text-orange mt-2'>{description}</p>
        <p className='text-orange mt-2'>
          <div>
            <p>${discountedPrice(price, discount)}</p>
            <p className='text-gray line-through'>${addTwoFloat(price)}</p>
          </div>
        </p>
        <p className='text-orange mt-2'>{rating}</p>
      </div>
    </div>
  )
}

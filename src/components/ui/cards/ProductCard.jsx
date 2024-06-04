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
      className='border-2 group border-light_gray w-auto h-auto cursor-pointer shadow-md hover:border-gray rounded-lg'
      onClick={() => toto()}
    >
      <div className='flex relative justify-center m-4 rounded-lg overflow-hidden bg-light_gray'>
        <img
          className='object-fill group-hover:scale-110 duration-1000 w-full h-[300px]'
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
        <h1 className='hover:text-orange text-2xl'>{name}</h1>
        <p className='text-gray mt-2'>{description}</p>
        <p className='text-orange mt-2'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold'>
                <span className='text-black  mr-2'>&#8377;</span>$
                {discountedPrice(price, discount)}
              </p>
              <p className='text-gray line-through '>
                <span className='text-black mr-2'>&#8377;</span>$
                {addTwoFloat(price)}
              </p>
            </div>
            <div>
              <button className='text-sm bg-blue text-white px-4 py-2  rounded-md'>
                Add To Cart
              </button>
            </div>
          </div>
        </p>
        <p className='text-orange mt-2'>{rating}</p>
      </div>
    </div>
  )
}

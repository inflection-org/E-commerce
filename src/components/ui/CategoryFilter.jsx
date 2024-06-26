'use client'
import React, { useEffect, useState } from 'react'
import { instance } from '@/app/axios/Api'
import { ProductCard } from './cards/ProductCard'

const CategoryFilter = ({ cld }) => {
  const [categoryData, setCategoryData] = useState([])

  async function fetchCategory(id) {
    try {
      const res = await instance.get(`/products/public/cat/${id}`)
      setCategoryData(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (cld) {
      fetchCategory(cld)
    }
  }, [cld])
  return (
    <div>
      {categoryData.length > 0 ? (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {categoryData.map((e, index) => (
            <ProductCard
              toto={() => seeDetails(e.product_id)}
              pic={e.thumbnail}
              name={e.product_name}
              description={e.product_description}
              price={e.price}
              discount={e.discount}
              key={index}
              variantId={e.variant_id}
            />
          ))}
        </div>
      ) : (
        <div className='flex justify-center bg-light_gray w-full items-center h-[400px]'>
          <div>
            <h1 className='text-xl'>Category Not found!</h1>
          </div>
        </div>
      )}
    </div>
  )
}

export default CategoryFilter

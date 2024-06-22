'use client'
import React, { useEffect, useState } from 'react'
import { instance } from '@/app/axios/Api'
import { ProductCard } from '@/components/ui/cards/ProductCard'
import { useParams, usePathname } from 'next/navigation'
function CategoryDetail() {
  const pathname = usePathname()
  const params = useParams()
  const id = params.cotegoryDetail
  const [categoryData, setCategoryData] = useState([])
  console.log(categoryData)

  useEffect(() => {
    async function fetchCategory() {
      try {
        const res = await instance.get(`/products/public/${id}`)
        setCategoryData(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchCategory()
  }, [])

  return (
    <div className='px-5 md:px-10 w-full'>
      <div className='h-44 md:my-5 px-4 block md:flex md:justify-between items-center bg-light_gray'>
        <div className='pt-5 md:pt-0'>
          <h1 className='text-3xl md:text-5xl font-bold'>Category</h1>
          <p className='mt-3  text-gray text-lg md:text-xl'>
            Something differet, every day.
          </p>
        </div>
        <p className='uppercase text-center mt-2 md:mt-0'>home {pathname}</p>
      </div>
      {categoryData.length > 0 ? (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {categoryData?.map((category, index) => (
            <ProductCard
              toto={() => seeDetails(category.product_id)}
              pic={category.thumbnail}
              name={category.product_name}
              description={category.product_description}
              price={category.price}
              discount={category.discount}
              key={index}
              variantId={category.variant_id}
            />
          ))}
        </div>
      ) : (
        <>
          <div className='flex justify-center bg-light_gray  w-full items-center h-[400px]'>
            <div>
              <h1 className='text-xl'>Category Not found !</h1>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CategoryDetail

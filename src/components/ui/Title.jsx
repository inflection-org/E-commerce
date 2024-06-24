'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { instance } from '@/app/axios/Api'
// import { useRouter } from 'next/navigation'
import { ProductCard } from './cards/ProductCard'

function Title({ title, btn, tag }) {
  //   const router = useRouter()
  const [data, setData] = useState([])

  useEffect(() => {
    if (tag) {
      const filterProduct = async () => {
        try {
          const res = await instance.get(`/products/public?limit=4&tags=${tag}`)
          setData(res.data)
        } catch (err) {
          console.log(err)
        }
      }
      filterProduct()
    }
  }, [])

  return (
    <div>
      <div className='block md:flex justify-between items-center mt-5'>
        {data?.length > 0 && (
          <>
            <h1 className='text-3xl capitalize md:text-4xl font-semibold'>
              {title}
            </h1>
            <div className='hidden md:block'>
              <Link
                href={btn}
                className='bg-orange md:mt-0 hover:bg-black duration-1000 text-white rounded-full px-4 py-1.5'
              >
                View All
              </Link>
            </div>
          </>
        )}
      </div>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10 md:gap-12'>
          {data?.length > 0 &&
            data?.map((product, index) => (
              <ProductCard
                // toto={() => seeDetails(product.product_id)}
                pic={product.thumbnail}
                name={product.product_name}
                description={product.product_description}
                price={product.price}
                discount={product.discount}
                key={index}
                variantId={product.variant_id}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Title

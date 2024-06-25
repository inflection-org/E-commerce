'use client'
import React, { useEffect, useState } from 'react'
import { instance } from '@/app/axios/Api'
import { ProductCard } from '@/components/ui/cards/ProductCard'
import { useParams, usePathname, useRouter } from 'next/navigation'

function CategoryDetail() {
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const id = params.cotegoryDetail
  const [categoryData, setCategoryData] = useState([])
  const [categoryId, setCategoryId] = useState(id)
  const [CategoryList, setCategoryList] = useState([])
  const [tab, setTab] = useState()

  console.log(categoryId)

  async function fetchCategory(id) {
    try {
      const res = await instance.get(`/products/public/cat/${id}`)
      setCategoryData(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    async function fetchCategoryList() {
      try {
        const res = await instance.get('/categories/list')
        setCategoryList(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchCategoryList()
  }, [])

  useEffect(() => {
    if (categoryId) {
      fetchCategory(categoryId)
    }
  }, [categoryId])

  // const handleCategoryClick = (categoryId, categoryName) => {
  //   const newPath = `/cotegory/${categoryId}/${categoryName}`
  //   window.history.pushState(null, '', newPath)
  //   setCategoryId(categoryId)
  //   fetchCategory(categoryId)
  // }

  return (
    <div className='px-5 md:px-10 w-full'>
      <div className='py-5'>
        <h1 className='text-2xl'>Category</h1>
      </div>
      <div className='flex gap-2'>
        <div className='w-[30%] bg-light_gray'>
          <div className='px-4 mt-5'>
            <h1 className='text-lg mb-2'>Category</h1>
            <hr />
            {CategoryList.map((e, index) => (
              <div
                key={index}
                onClick={() => {
                  setCategoryId(e.id)
                  fetchCategory(e.id)
                  // handleCategoryClick(e.id, e.name)
                }}
              >
                <p className='hover:bg-gray p-2'>{e.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='w-[70%]'>
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
      </div>
    </div>
  )
}

export default CategoryDetail

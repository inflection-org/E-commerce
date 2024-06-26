'use client'
import React, { useEffect, useState } from 'react'
import { instance } from '@/app/axios/Api'
// import { ProductCard } from '@/components/ui/cards/ProductCard'
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import CategoryFilter from '@/components/ui/categoryFilter'

function CategoryDetail() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const params = useParams()
  const id = params.cotegoryDetail
  const [categoryId, setCategoryId] = useState(id)
  const [CategoryList, setCategoryList] = useState([])
  const [tab, setTab] = useState()

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

    setTab(searchParams.get('tab'))
  }, [])

  return (
    <div className='px-5 md:px-10 w-full'>
      <div className='py-5'>
        <h1 className='text-2xl'>Category</h1>
      </div>
      <div className='flex gap-2'>
        <div className='w-[20%] bg-light_gray'>
          <div className='px-4 mt-5'>
            <h1 className='text-lg mb-2'>Category</h1>
            <hr />
            {CategoryList.map((e, index) => (
              <div
                className={`${
                  tab === e.name && 'text-white bg-gray'
                } capitalize p-2.5 hover:bg-gray hover:text-white cursor-pointer`}
                key={index}
                onClick={() => {
                  setCategoryId(e.id)
                  router.push(`/cotegory/${e.id}?tab=${e.name}`)
                }}
              >
                <p className='hover:bg-gray p-2'>{e.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='w-[80%]'>
          <CategoryFilter cld={categoryId} />
        </div>
      </div>
    </div>
  )
}

export default CategoryDetail

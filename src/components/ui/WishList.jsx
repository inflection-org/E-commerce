import { useEffect, useState } from 'react'
import React from 'react'
import instance from '@/app/axios/Api'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { BsBagHeart } from 'react-icons/bs'
import { toast } from 'react-toastify'

const WishList = () => {
  const [wishLists, setWishLists] = useState([])
  const [isShow, setIsShow] = useState(true)
  // console.log(wishLists)

  useEffect(() => {
    async function search() {
      try {
        const res = await instance.get('/wishlists/my')
        // console.log(res.data)
        setWishLists(res.data.data)
        // setIsShow(false)
      } catch (error) {
        console.log(error)
      }
    }
    search()
  }, [])

  const Remove = async (variant_id) => {
    try {
      const res = await instance.delete(`/wishlists/${variant_id}`)
      toast.success('Removed from wish list')
      console.log(res.data)
      // setWishLists(res.data.data)
    } catch (error) {
      if (error.res.data.data.message) {
        toast.error(error.res.data.data.message)
      } else {
        toast.error(error.message)
      }
    }
  }

  return (
    <div>
      {isShow ? (
        wishLists?.map((wishList, i) => {
          const { variant_id, product_name, price } = wishList
          return (
            <div className='mx-2 my-4'>
              <div
                className='flex items-center justify-between p-5 bg-white rounded-md shadow-md'
                key={i}
              >
                <div className='flex items-center gap-3'>
                  <img
                    className='object-cover group-hover:scale-110 duration-1000 w-24 h-24 '
                    src={'/product/S3.jpg'}
                    alt='logo'
                  />
                </div>
                <h1 className=''>{product_name}</h1>
                <p>{price}</p>
                <button className='bg-blue text-white py-2 px-4 rounded-md hover:bg-green'>
                  Add to Cart
                </button>
                <button onClick={() => Remove(variant_id)}>
                  <RiDeleteBin5Line className='size-6 hover:text-red' />
                </button>
              </div>
            </div>
          )
        })
      ) : (
        <div className='w-auto h-[500px] rounded-md shadow-md bg-white m-4  flex justify-center text-center items-center '>
          <div className=''>
            <BsBagHeart className='size-20 ml-20 text-blue' />
            <h1 className='text-3xl mt-2'>No Item In WishList</h1>
            <p className='text-xl'>Save Your Favorite Item Here</p>
            <button className='bg-orange mt-5 hover:bg-black duration-1000  text-white rounded-full px-8 py-2'>
              Shop Now
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default WishList

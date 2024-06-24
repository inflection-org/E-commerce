import React from 'react'
import { useState, useEffect } from 'react'
import WishList from '@/components/ui/WishList'
import AddressBook from '@/components/ui/AddressBook'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'react-toastify'
import { instance } from '../../app/axios/Api'

const ProfileComponent = () => {
  const router = useRouter()
  const params = useSearchParams()
  const [tab, setTab] = useState()
  const [userDetails, setUserDetails] = useState({})
  useEffect(() => {
    setTab(params.get('tab') || '?tab=information')
  }, [params, tab])

  useEffect(() => {
    if (params.size === 0) {
      router.push('/profile/?tab=information')
    }
  })

  useEffect(() => {
    async function userDetail() {
      try {
        const res = await instance.get('/users/profiles/my')
        setUserDetails(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    userDetail()
  }, [])

  console.log(tab)

  // ***************logOut**************
  const Remove = async () => {
    try {
      const res = await instance.delete('/users/logout')
      toast.success(res.data?.message)
      router.push('/')
    } catch (err) {
      console.log(err)
      if (err.response?.data?.message) {
        toast.error(err.response?.data?.message)
      } else {
        toast.error(err.message)
      }
    }
  }

  return (
    <>
      <div className='px-5 md:px-10 bg-white'>
        <div className=' md:flex  gap-4 md:py-8  py-2 w-[100%]'>
          {/* **************part-1**************** */}
          <div className='w-full md:w-[20%] rounded-md bg-light_gray h-[600px]'>
            <div className='flex justify-center text-center mt-2 '>
              <div>
                <div className='flex justify-center'>
                  <img
                    className='w-20 h-20  mt-2 rounded-full'
                    src={userDetails.profile_photo_url}
                    alt='logo'
                  />
                </div>
                <h1 className='mt-2 md:mt-4 text-lg  text-gray font-bold'>
                  {userDetails.full_name}
                </h1>
                <h1 className='mt-2 md:mt-2 text-lg text-gray font-bold'>
                  {userDetails.email}
                </h1>
              </div>
            </div>
            <ul className='py-5'>
              {/************My Details************** */}
              <li
                onClick={() => router.push('?tab=information')}
                className={`${
                  tab === 'information' && 'text-white bg-gray'
                } capitalize p-2.5 hover:bg-gray hover:text-white cursor-pointer`}
              >
                My Details
              </li>
              <hr className='h-0.5 border-0 bg-pink' />
              {/* ****************Wish List******************** */}
              <li
                onClick={() => router.push('?tab=wishlist')}
                className={`${
                  tab === 'wishlist' && 'text-white bg-gray'
                } capitalize p-2.5 hover:bg-gray hover:text-white cursor-pointer`}
              >
                My Wishlist
              </li>
              <hr className='h-0.5 border-0 bg-pink' />
              {/* ***********My Order*************************** */}
              <li
                onClick={() => router.push('/order')}
                className='p-2.5 hover:text-white hover:bg-gray cursor-pointer'
              >
                My Order
              </li>
              <hr className='h-0.5 border-0 bg-pink' />
              {/* **********************My Address book************ */}
              <li
                onClick={() => router.push('?tab=address')}
                className={`${
                  tab === 'address' && 'text-white bg-gray'
                } capitalize p-2.5 hover:bg-gray hover:text-white cursor-pointer`}
              >
                Manage addresses
              </li>
              <hr className='h-0.5 border-0 bg-pink' />
              {/* *********************LogOut********************* */}
              <div className='hover:bg-gray hover:text-white cursor-pointer'>
                <button
                  onClick={Remove}
                  className='p-2.5 text-sm font-semibold'
                >
                  LogOut
                </button>
              </div>
            </ul>
          </div>
          {/* ************part-2*********** */}
          <div className='w-full mt-5 md:mt-0 md:w-[80%] rounded-md bg-light_gray'>
            {/* **********My Details********** */}
            <div>
              {tab === 'information' && (
                <div className='mx-10 mt-12 '>
                  <p className='text-black text-2xl font-bold'>
                    Personal Information
                  </p>
                  <div className='border-2 border-light_gray shadow-md rounded-md bg-white w-auto mt-4'>
                    <p className='text-lg py-3 px-4'>
                      <span className='font-bold mr-4'>Name:</span>
                      {userDetails.full_name}
                    </p>
                  </div>
                  <div className='border-2 border-light_gray shadow-md rounded-md bg-white w-auto mt-4'>
                    <p className='text-lg py-3 px-4'>
                      <span className='font-bold mr-4'>Email:</span>
                      {userDetails.email}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* ****************wish list******************** */}
            <div>
              {tab === 'wishlist' && (
                <div>
                  <WishList />
                </div>
              )}
            </div>
            {/* ***************My Address book************ */}
            <div>
              {tab === 'address' && (
                <div>
                  <AddressBook />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileComponent

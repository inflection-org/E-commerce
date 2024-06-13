'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import WishList from '@/components/ui/WishList'
import AddressBook from '@/components/ui/AddressBook'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import instance from '../axios/Api'
import UserDetails from '@/components/ui/userDetails'
import ProtectedRoute from '@/components/app/ProtectedRoute'

const page = () => {
  const router = useRouter()
  const [currentTab, setCurrentTab] = useState('My Details')
  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    async function userDetail() {
      try {
        const res = await instance.get('/users/profiles/my')
        console.log(res.data)
        setUserDetails(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    userDetail()
  }, [])

  // ***************logOut**************
  const Remove = async () => {
    console.log('remove')
    try {
      const res = await instance.delete('/users/logout')
      console.log(res)
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
    <div className='px-5 md:px-10 bg-white'>
      <div className=' md:flex  gap-4 md:py-8  py-2 w-[100%]'>
        {/* **************part-1**************** */}
        <div className='w-full md:w-[20%] rounded-md bg-light_gray h-[600px]'>
          <div className='flex justify-center text-center mt-2 '>
            <div className=''>
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
          <div className='py-2 md:py-6'>
            {/************My Details************** */}
            <div
              className={`p-1 cursor-pointer ${
                currentTab === 'My Details' ? 'bg-gray ' : 'hover:bg-gray '
              }`}
              onClick={() => {
                setCurrentTab('My Details')
              }}
            >
              <p className='py-4 px-4 text-sm font-semibold'>My Details</p>
            </div>
            <hr className='h-px my-0 bg-black border-0' />
            {/* ****************Wish List******************** */}
            <div
              className={`p-1 cursor-pointer ${
                currentTab === 'Wish List' ? 'bg-gray ' : 'hover:bg-gray '
              }`}
              onClick={() => {
                setCurrentTab('Wish List')
              }}
            >
              <p className='py-4 px-4 text-sm font-semibold'>Wish List</p>
            </div>
            <hr className='h-px my-0 bg-black border-0' />
            {/* ***********My Order*************************** */}
            <div
              className={`p-1 cursor-pointer ${
                currentTab === 'My Order' ? 'bg-gray ' : 'hover:bg-gray '
              }`}
              onClick={() => {
                router.push('/order')
              }}
            >
              <p className='py-4 px-4 text-sm font-semibold'>My Order</p>
            </div>
            <hr className='h-px my-0 bg-black border-0' />
            {/* **********************My Address book************ */}
            <div
              className={`p-1 cursor-pointer ${
                currentTab === 'My Address book' ? 'bg-gray ' : 'hover:bg-gray '
              }`}
              onClick={() => {
                setCurrentTab('My Address book')
              }}
            >
              <p className='py-4 px-4 text-sm font-semibold'>
                Manage Addresses
              </p>
            </div>
            <hr className='h-px my-0 bg-black border-0' />
            {/* *********************LogOut********************* */}
            <div className='hover:bg-gray cursor-pointer'>
              <button
                onClick={Remove}
                className='py-4 px-4 text-sm font-semibold'
              >
                LogOut
              </button>
            </div>
          </div>
        </div>
        {/* ************part-2*********** */}
        <div className='w-full mt-5 md:mt-0 md:w-[80%] rounded-md bg-light_gray'>
          {/* **********My Details********** */}
          <div>
            {currentTab === 'My Details' && (
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
          {/* *************My Order***************** */}
          <div>
            {currentTab === 'My Order' && (
              <div>
                <h1 className='font-semibold p-2'>this is my order</h1>
              </div>
            )}
          </div>
          {/* ****************wish list******************** */}
          <div>
            {currentTab === 'Wish List' && (
              <div>
                <div className='hidden md:block    md:mx-6 mt-5'>
                  <div className='flex justify-between'>
                    <h1 className='font-semibold text-lg'>Product Id</h1>
                    <h1 className='font-semibold text-lg'>Name</h1>
                    <h1 className='font-semibold text-lg'>Price</h1>
                    <h1 className='font-semibold text-lg'>Action</h1>
                    <h1 className='font-semibold text-lg'>Removed</h1>
                  </div>
                </div>
                <WishList />
              </div>
            )}
          </div>
          {/* ***************My Address book************ */}
          <div>
            {currentTab === 'My Address book' && (
              <div>
                <AddressBook />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProtectedRoute(page)

'use client'
import React, { useState, useEffect } from 'react'
// import OrderSummary from '../../components/ui/OrderSummry'
import { instance } from '.././axios/Api'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function Checkout() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [address, setAddress] = useState([])
  const [variantId, setVariantId] = useState()
  const [currentStatus, setCurrent] = useState('w-[25%]')
  const [orderFormData, setOrderFormData] = useState({
    callback_url: 'http://localhost:3000/payment',
    shipping_method: '',
    billing_address_id: '',
  })

  const orderPlace = async () => {
    try {
      const res = await instance.post('/orders/cart', {
        callback_url: orderFormData.callback_url,
        shipping_method: orderFormData.shipping_method,
        billing_address_id: orderFormData.billing_address_id * 1,
      })
      if (res?.data?.shipping_response) {
        toast.success(res?.data?.shipping_response)
        setCurrent('w-[100%]')
        router.push('/order')
      }
      if (res?.data.payment_url) {
        window.location.replace(res?.data.payment_url)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const buyNow = async () => {
    try {
      const res = await instance.post('/orders/now', {
        variant_id: variantId * 1,
        callback_url: orderFormData.callback_url,
        shipping_method: orderFormData.shipping_method,
        billing_address_id: orderFormData.billing_address_id * 1,
      })
      if (res?.data?.shipping_response) {
        toast.success(res?.data?.shipping_response)
        setCurrent('w-[100%]')
        router.push('/order')
      }
      if (res?.data.payment_url) {
        window.location.replace(res?.data.payment_url)
      }
    } catch (err) {
      if (err.response?.data?.message) {
        toast.error(err.response?.data?.message)
      } else {
        toast.error(err.message)
      }
    }
  }

  useEffect(() => {
    async function search() {
      try {
        const res = await instance.get('/address/my')
        setAddress(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    setVariantId(searchParams.get('variant_id'))
    search()
  }, [])

  return (
    <div>
      <div className='mx-5 md:mx-10 py-5'>
        <div className='py-4'>
          <h2 className='sr-only'>Steps</h2>

          <div>
            <div className='overflow-hidden rounded-full bg-light_gray'>
              <div
                className={`h-2 ${currentStatus} rounded-full bg-blue`}
              ></div>
            </div>

            <ol className='mt-4 grid grid-cols-3 text-sm font-medium text-gray'>
              <li className='flex items-center justify-start text-blue sm:gap-1.5'>
                <span className='hidden sm:inline'> Details </span>

                <svg
                  className='size-6 sm:size-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
                  />
                </svg>
              </li>

              <li className='flex items-center justify-center text-blue sm:gap-1.5'>
                <span className='hidden sm:inline'> Address </span>

                <svg
                  className='size-6 sm:size-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </li>

              <li className='flex items-center justify-end sm:gap-1.5'>
                <span className='hidden sm:inline'> Payment </span>

                <svg
                  className='size-6 sm:size-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                  />
                </svg>
              </li>
            </ol>
          </div>
        </div>
        <div className='md:flex justify-center gap-5 w-full'>
          <div className='w-full '>
            {/* *******************Address********** */}
            <div className='shadow-md rounded-md '>
              <div className='bg-blue  rounded-md px-4 py-3  text-white'>
                <div className='flex justify-between items-center'>
                  <h1>SELECT DELIVERY ADDRESS</h1>
                  <button
                    className='bg-orange hover:bg-black duration-1000 text-white py-2 px-4 rounded-md '
                    onClick={() => router.push('/profile?tab=address')}
                  >
                    Add New Address
                  </button>
                </div>
              </div>
              <div className='bg-white shadow-md rounded-lg p-4 mb-6'>
                <div className='space-y-4'>
                  {address.map((address) => (
                    <div key={address.id}>
                      <label className='flex items-center'>
                        <input
                          type='radio'
                          name='address'
                          onChange={(e) => {
                            setCurrent('w-[50%]')
                            setOrderFormData({
                              ...orderFormData,
                              billing_address_id: e.target.value,
                            })
                          }}
                          value={address.id}
                          className='mr-2'
                        />
                        <span>{`${address.name}, ${address.address}, ${address.address_line_2}, ${address.city},${address.phone},${address.phone_opt},${address.pincode},${address.state}`}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* ***********************payment*************************** */}
            <div>
              <div className='md:flex justify-between w-full gap-5 py-5'>
                <div className='w-full'>
                  <h1 className='bg-blue py-3 pl-2 rounded-md  text-white'>
                    Select Payment Method
                  </h1>
                  <div className=' bg-white rounded-md shadow-md py-4 mt-5 px-4   gap-4  '>
                    <div className='space-y-4'>
                      <label className='flex items-center'>
                        <input
                          type='radio'
                          name='paymentMethod'
                          className='mr-2'
                          value='prepaid'
                          billing_address='default-radio'
                          onChange={(e) => {
                            setCurrent('w-[75%]')
                            setOrderFormData({
                              ...orderFormData,
                              shipping_method: e.target.value,
                            })
                          }}
                        />
                        <span> PrePaid Delivery</span>
                      </label>
                    </div>
                    <div className='space-y-4 mt-5'>
                      <label className='flex items-center'>
                        <input
                          type='radio'
                          name='paymentMethod'
                          className='mr-2'
                          value='cod'
                          onChange={(e) => {
                            setCurrent('w-[75%]')
                            setOrderFormData({
                              ...orderFormData,
                              shipping_method: e.target.value,
                            })
                          }}
                        />
                        <span> Cash On Delivery</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <button
                className='bg-orange hover:bg-black duration-1000 text-white w-44 mt-6 rounded-md  py-3'
                onClick={() => {
                  setCurrent('w-[85%]')
                  variantId ? buyNow() : orderPlace()
                }}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// export default Checkout

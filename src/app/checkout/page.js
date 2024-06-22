'use client'
import React, { useState, useEffect } from 'react'
import OrderSummary from '../../components/ui/OrderSummry'
import { instance } from '.././axios/Api'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function Checkout() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [address, setAddress] = useState([])
  const [variantId, setVariantId] = useState('')
  const [orderFormData, setOrderFormData] = useState({
    callback_url: 'http://localhost:3000/payment',
    shipping_method: '',
    billing_address_id: '',
  })

  // console.log(variantId)
  const orderPlace = async () => {
    try {
      const res = await instance.post('/orders/cart', {
        callback_url: orderFormData.callback_url,
        shipping_method: orderFormData.shipping_method,
        billing_address_id: orderFormData.billing_address_id * 1,
      })
      console.log(res.data)
      console.log('orderPlace')
      if (res?.data.payment_url) {
        window.location.replace(res?.data.payment_url)
      }
    } catch (error) {
      console.log(error)
    }
  }

  console.log(address)
  console.log(orderFormData)
  const buyNow = async () => {
    console.log(orderFormData)
    try {
      const res = await instance.post('/orders/now', {
        variant_id: variantId * 1,
        callback_url: orderFormData.callback_url,
        shipping_method: orderFormData.shipping_method,
        billing_address_id: orderFormData.billing_address_id * 1,
      })
      console.log(res.data)
      console.log('buyNow')
      if (res?.data.payment_url) {
        window.location.replace(res?.data.payment_url)
      }
    } catch (error) {
      console.log(error)
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
        <div className='md:flex justify-center gap-5 w-full'>
          <div className='w-full md:w-[70%]'>
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
                          onChange={(e) =>
                            setOrderFormData({
                              ...orderFormData,
                              billing_address_id: e.target.value,
                            })
                          }
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
                          onChange={(e) =>
                            setOrderFormData({
                              ...orderFormData,
                              shipping_method: e.target.value,
                            })
                          }
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
                          onChange={(e) =>
                            setOrderFormData({
                              ...orderFormData,
                              shipping_method: e.target.value,
                            })
                          }
                        />
                        <span> Cash On Delivery</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-[30%]'>
            <OrderSummary />
            <div className='flex justify-center'>
              <button
                className='bg-orange hover:bg-black duration-1000 text-white w-full mt-6 rounded-md  py-3'
                onClick={() => (variantId ? buyNow() : orderPlace())}
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

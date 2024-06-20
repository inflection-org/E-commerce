'use client'
import React, { useState, useEffect } from 'react'
import OrderSummary from '../../components/ui/OrderSummry'
import { instance } from '../axios/Api'

export default function Checkout() {
  const [address, setAddress] = useState([])
  const [orderFormData, setOrderFormData] = useState({
    callback_url: 'http://localhost:3000/payment',
    shipping_method: '',
    billing_address_id: '',
  })

  const orderPlace = async () => {
    console.log(orderFormData)
    try {
      const res = await instance.post('/orders/cart', {
        callback_url: orderFormData.callback_url,
        shipping_method: orderFormData.shipping_method,
        billing_address_id: orderFormData.billing_address_id * 1,
      })
      //   console.log('Creating Order', res.data.payment_url)
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
    search()
  }, [])

  return (
    <div>
      <div className='mx-5 md:mx-10 py-5'>
        <div className='md:flex justify-center gap-5 w-full'>
          <div className='w-full md:w-[70%]'>
            <div className='shadow-md rounded-md py-4  mt-4'>
              <button className='ml-3 py-2 text-white px-8 rounded-md bg-gray '>
                User Information
              </button>
              <p className='ml-3 mt-3 font-bold'>
                Apple<span className='ml-2'>amit23@gamil.com</span>
              </p>
            </div>
            {/* *******************Address********** */}
            <div className='shadow-md rounded-md mt-4'>
              <h1 className='bg-blue py-3  rounded-md pl-2 text-white'>
                SELECT DELIVERY ADDRESS
              </h1>
              <div className=''>
                {address?.length > 0 ? (
                  address?.map((addressd, i) => {
                    const {
                      name,
                      address,
                      address_line_2,
                      city,
                      state,
                      phone,
                      phone_opt,
                      pincode,
                    } = addressd
                    return (
                      <div key={i}>
                        <div className='flex gap-2 bg-white rounded-md shadow-md py-4 mt-5 px-4'>
                          <div>
                            <input
                              onChange={(e) =>
                                setOrderFormData({
                                  ...orderFormData,
                                  billing_address_id: e.target.value,
                                })
                              }
                              id='default-radio-1'
                              type='radio'
                              value={addressd.id}
                              name='default-radio'
                              class='w-4 h-4 text-blue bg-light_gray border-gray focus:ring-blue'
                            />
                          </div>
                          <div>
                            <p className='font-semibold'>Address {i + 1}</p>
                            <p>{name}</p>
                            <p>{address}</p>
                            <p>{address_line_2}</p>
                            <p>{city}</p>
                            <p>{phone}</p>
                            <p>{phone_opt}</p>
                            <p>{pincode}</p>
                            <p>{state}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <div className='w-full h-[500px] rounded-md shadow-md bg-white mt-5  flex justify-center text-center items-center '>
                    <div className=''>
                      <p className='text-xl'>Empty your Address</p>
                    </div>
                  </div>
                )}
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
                    <div className='block md:flex  justify-center'>
                      <div className='py-5  px-8'>
                        <div className='flex items-center border-2 border-gray px-5 md:w-96 bg-orange hover:bg-black duration-1000 text-white rounded-md  py-3 mb-4'>
                          <input
                            id='default-radio-1'
                            type='radio'
                            value='cod'
                            onChange={(e) =>
                              setOrderFormData({
                                ...orderFormData,
                                shipping_method: e.target.value,
                              })
                            }
                            billing_address='default-radio'
                            class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 '
                          />
                          <label className='ms-2 text-sm font-bold '>
                            Cash On Delivery
                          </label>
                        </div>
                      </div>
                      <div className='py-5  cursor-pointer px-8'>
                        <div className='flex items-center border-2 border-gray px-5 md:w-96 bg-orange hover:bg-black duration-1000 text-white rounded-md  py-3 mb-4'>
                          <input
                            id='default-radio-1'
                            type='radio'
                            value='prepaid'
                            billing_address='default-radio'
                            class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 '
                            onChange={(e) =>
                              setOrderFormData({
                                ...orderFormData,
                                shipping_method: e.target.value,
                              })
                            }
                          />
                          <label className='ms-2 text-sm font-bold '>
                            PrePaid Delivery
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center'>
                      <button
                        className='bg-orange hover:bg-black duration-1000 text-white   rounded-md px-6 py-3'
                        onClick={(e) => orderPlace(e)}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ************************* */}
            </div>
          </div>
          <div className='w-full md:w-[30%]'>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  )
}

// export default Checkout

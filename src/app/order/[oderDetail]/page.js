'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { instance } from '@/app/axios/Api'
import LocalTime from '@/components/ui/LocalTime'
import { useRouter } from 'next/navigation'
import { discountedPrice } from '@/components/ui/Discount'
import Invoice from '@/components/ui/Invoice'
import PostReview from '@/components/ui/PostReview'

//   TODO: Review me aad sidebar (like all categories showing here click to fetch products)
const OrderDetail = () => {
  const router = useRouter()
  const { oderDetail } = useParams()
  const [order, setOrderDetails] = useState({})
  const [productId, setProductId] = useState('')
  const [isInvoice, setIsInvoice] = useState(false)
  const [orderSummaryData, setOrderSummaryData] = useState({
    subtotal: '00',
    discount: '00',
    shipping: '00',
    total: '00',
  })
  // const id = order?.order_item[0]?.product_id

  const Show = () => {
    setIsInvoice((isInvoice) => !isInvoice)
  }

  useEffect(() => {
    if (order?.order_item) {
      let subtotalVal = 0
      let discountVal = 0
      order?.order_item?.forEach((element) => {
        subtotalVal = subtotalVal + element.price
        discountVal = discountVal + element.discount
      })
      setOrderSummaryData({
        ...orderSummaryData,
        discount: discountVal,
        subtotal: subtotalVal,
        total:
          discountedPrice(subtotalVal, discountVal) + orderSummaryData.shipping,
      })
      setProductId(order.order_item[0].product_id)
    }
  }, [order])

  useEffect(() => {
    const seeDetails = async () => {
      try {
        const res = await instance.get(`/orders/my/${oderDetail}`)
        setOrderDetails(res.data.order)
      } catch (err) {
        console.log(err)
      }
    }
    seeDetails()
  }, [])

  return (
    <>
      <div className='px-5 md:px-10'>
        {/* <!-- component --> */}
        <div className='py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto'>
          {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}

          <div className='flex justify-start item-start space-y-2 flex-col'>
            <h1 className='text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray'>
              Order {order.order_code}
            </h1>
            <p className='text-base dark:text-gray-300 font-medium leading-6 text-gray-600'>
              {LocalTime(order.order_at)}
            </p>
          </div>
          <div className='mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0'>
            {/* **********************************order-product***************** */}
            <div className='flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8'>
              <div className='flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full'>
                <p className='text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray'>
                  Customers Cart
                </p>
                {order?.order_item?.map((e, i) => (
                  <div
                    key={i}
                    className='mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full'
                  >
                    <div className='pb-4 md:pb-8 w-full md:w-40'>
                      <img
                        className='w-full hidden md:block'
                        src={e.product_thumbnail_url}
                        alt='dress'
                      />
                    </div>
                    <div className='border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0'>
                      <div className='w-full flex flex-col justify-start items-start space-y-8'>
                        <h3 className='text-xl xl:text-2xl font-semibold leading-6 text-gray-800'>
                          {e.product_name}
                        </h3>
                        <div className='flex justify-start items-start flex-col space-y-2'>
                          <p className='text-sm leading-none text-gray-800'>
                            <span className='dark:text-gray-400 text-gray-300'>
                              Style:{' '}
                            </span>{' '}
                            Italic Minimal Design
                          </p>
                          <p className='text-sm leading-none text-gray-800'>
                            <span className='dark:text-gray-400 text-gray-300'>
                              Size:{' '}
                            </span>{' '}
                            Small
                          </p>
                          <p className='text-sm leading-none text-gray-800'>
                            <span className='dark:text-gray-400 text-gray-300'>
                              Color:{' '}
                            </span>{' '}
                            Light Blue
                          </p>
                        </div>
                      </div>
                      <div className='flex justify-between space-x-8 items-start w-full'>
                        <p className='text-base xl:text-lg leading-6'>
                          &#8377; {e.price}
                          <span className='text-red-300 line-through'>
                            {' '}
                            {e.discount}
                          </span>
                        </p>
                        <p className='text-base xl:text-lg leading-6 text-gray-800'>
                          01
                        </p>
                        <p className='text-base xl:text-lg font-semibold leading-6 text-gray-800'>
                          &#8377;{e.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* ****************************order    Summary*************************** */}
              <div className='flex justify-center flex-col md:flex-row  items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8'>
                <div className='flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-light_gray  space-y-6'>
                  <h3 className='text-xl font-semibold leading-5 text-gray'>
                    Summary
                  </h3>
                  <div className='flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4'>
                    <div className='flex justify-between w-full'>
                      <p className='text-base leading-4 text-gray-800'>
                        Subtotal
                      </p>
                      <p className='text-base  leading-4 '>
                        {orderSummaryData.subtotal}
                      </p>
                    </div>
                    <div className='flex justify-between items-center w-full'>
                      <p className='text-base leading-4 '>
                        Discount{' '}
                        <span className='bg-gray-200 p-1 text-xs font-medium dark:bg-white  leading-3 '>
                          STUDENT
                        </span>
                      </p>
                      <p className='text-base dark:text-gray-300 leading-4 text-gray-600'>
                        {orderSummaryData.discount}
                      </p>
                    </div>
                    <div className='flex justify-between items-center w-full'>
                      <p className='text-base leading-4 text-gray-800'>
                        Shipping
                      </p>
                      <p className='text-base dark:text-gray-300 leading-4 text-gray-600'>
                        {orderSummaryData.shipping}
                      </p>
                    </div>
                  </div>
                  <div className='flex justify-between items-center w-full'>
                    <p className='text-base font-semibold leading-4 text-gray-800'>
                      Total
                    </p>
                    <p className='text-base dark:text-gray-300 font-semibold leading-4 text-gray-600'>
                      {orderSummaryData.total}
                    </p>
                  </div>
                </div>
                {/* *******************************************Payments************************************************************ */}
                <div className='flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-light_gray  space-y-6'>
                  <h3 className='text-xl font-semibold leading-5 '>Payments</h3>
                  <div className='flex justify-between items-start w-full'>
                    <div className='flex justify-center items-center space-x-4'>
                      <div className='w-8 h-8'>
                        <img
                          className='w-full h-full'
                          alt='logo'
                          src='https://i.ibb.co/L8KSdNQ/image-3.png'
                        />
                      </div>
                      <div className='flex flex-col justify-start items-center'>
                        <p className='text-lg leading-6 font-semibold '>
                          payment Mode {order.payment_mode}
                          <br />
                          <span className='font-normal'>
                            {LocalTime(order.payment_link_expires_at)}
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className='text-lg font-semibold leading-6 '>
                      &#8377; {order.total_price}
                    </p>
                  </div>
                  <div className='w-full flex justify-center items-center'>
                    <button
                      // onClick={() => router.push(`/order/invoice/${order.id}`)}
                      onClick={() => Show()}
                      className='bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white'
                    >
                      View Invoice
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* ***************** Customer******************************************** */}
            <div className='bg-gray-50  w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col'>
              <h3 className='text-xl font-semibold leading-5 text-gray-800'>
                Customer
              </h3>
              <div className='flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0'>
                <div className='flex flex-col justify-start items-start flex-shrink-0'>
                  <div className='flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200'>
                    <div className='flex justify-start items-start flex-col space-y-2'>
                      <p className='text-base font-semibold leading-4 text-left text-gray-800'>
                        {order.customer_name}
                      </p>
                      <p className='text-sm dark:text-gray-300 leading-5 text-gray-600'>
                        10 Previous Orders
                      </p>
                    </div>
                  </div>

                  <div className='flex justify-center text-gray-800 md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M3 7L12 13L21 7'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                    <p className='cursor-pointer text-sm leading-5 '>
                      {order.customer_email}
                    </p>
                  </div>
                </div>
                {/* ******************************************* Shipping Address******************************************** */}
                <div className='flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0'>
                  <div className='flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start'>
                    <div className='flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8'>
                      <p className='text-base font-semibold leading-4 text-center md:text-left text-gray-800'>
                        Shipping Address
                      </p>
                      <p className='w-full lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600'>
                        {order.address}
                      </p>
                    </div>
                  </div>
                  {/* <div className='flex w-full justify-center items-center md:justify-start md:items-start'>
                  <button className='mt-6 md:mt-0  py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800  w-96 2xl:w-full text-base font-medium leading-4 text-gray'>
                    Buy Now
                  </button>
                </div> */}
                </div>
              </div>
              {/* ***************************post-Review*********************** */}
            </div>
          </div>
        </div>
        <PostReview oderIt={productId} />
      </div>
      {isInvoice && (
        <div>
          <Invoice data={order} orderSummary={orderSummaryData} />
        </div>
      )}
    </>
  )
}

export default OrderDetail

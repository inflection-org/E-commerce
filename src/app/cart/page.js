'use client'
import React, { useEffect, useState, useContext } from 'react'
import CartCard from '@/components/ui/cards/CartCard'
import { instance } from '@/app/axios/Api'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ProtectedRoute from '@/components/app/ProtectedRoute'
import { MyContext } from '@/context/MyContext'
import { discountedPrice } from '@/components/ui/Discount'
import SimilarCard from '@/components/ui/SimilarCard'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'

const Cart = () => {
  const { myCart, setMyCart } = useContext(MyContext)
  const pathname = usePathname()
  const [refresh, setRefresh] = useState(false)
  const [orderSummaryData, setOrderSummaryData] = useState({
    originalPrice: '00',
    savings: '00',
    shipping: '80',
    total: '00',
  })

  useEffect(() => {
    if (myCart) {
      let originalPriceVal = 0
      let savingsVal = 0
      myCart.forEach((element) => {
        originalPriceVal = originalPriceVal + element.price * element.quantity
        savingsVal = savingsVal + element.discount
      })
      setOrderSummaryData({
        ...orderSummaryData,
        savings: savingsVal,
        originalPrice: originalPriceVal,
        total:
          discountedPrice(originalPriceVal, savingsVal) +
          orderSummaryData.shipping,
      })
    }
  }, [myCart])

  useEffect(() => {
    async function searchCart() {
      try {
        const res = await instance.get('/carts/my')
        setMyCart(res.data.items)
      } catch (err) {
        console.log(err)
      }
    }

    searchCart()
  }, [refresh, setMyCart])

  return (
    <ProtectedRoute>
      <div className='bg-white py-8 antialiased  md:py-10'>
        <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
          <div className='pb-4'>
            <h1 className='text-3xl font-semibold'>My Cart</h1>
          </div>
          <hr></hr>
          {myCart ? (
            <div className='mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8'>
              <div className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'>
                <div className='space-y-6'>
                  {/* ************card components******************* */}
                  {myCart?.map((cart, index) => (
                    <CartCard
                      key={index}
                      pic={cart.product_thumbnail}
                      dis={cart.product_description}
                      price={cart.price}
                      name={cart.product_name}
                      variantId={cart.variant_id}
                      cartId={cart.cart_id}
                      quan={cart.quantity}
                      refresh={() => {
                        setRefresh(!refresh)
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* *******************Order summary******************************* */}
              <div className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'>
                <div className='space-y-4 rounded-lg border  bg-white p-4 shadow-sm sm:p-6'>
                  <p className='text-xl font-semibold'>Order summary</p>

                  <div className='space-y-4'>
                    <div className='space-y-2'>
                      <dl className='flex items-center justify-between gap-4'>
                        <dt className='text-base font-normal'>
                          Original price
                        </dt>
                        <dd className='text-base font-medium  '>
                          {orderSummaryData.originalPrice}
                        </dd>
                      </dl>

                      <dl className='flex items-center justify-between gap-4'>
                        <dt className='text-base font-normal'>Discount</dt>
                        <dd className='text-base font-medium text-green'>
                          {`${orderSummaryData.savings}%`}
                        </dd>
                      </dl>

                      <dl className='flex items-center justify-between gap-4'>
                        <dt className='text-base font-normal'>Store Pickup</dt>
                        <dd className='text-base font-medium'>
                          {orderSummaryData.shipping}
                        </dd>
                      </dl>
                    </div>

                    <dl className='flex items-center justify-between gap-4 border-t pt-2 '>
                      <dt className='text-base font-bold'>Total</dt>
                      <dd className='text-base font-bold'>
                        {orderSummaryData.total}
                      </dd>
                    </dl>
                  </div>

                  <div className='flex justify-center text-center py-3 rounded-md '>
                    <Link
                      href='/checkout'
                      className='bg-orange hover:bg-black duration-1000 text-white w-full rounded-md px-6 py-3'
                    >
                      Place Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='w-full h-[400px] rounded-md shadow-md bg-light_gray mt-4 flex justify-center text-center items-center '>
              <div className=''>
                <div className='flex justify-center py-4'>
                  <MdOutlineRemoveShoppingCart className='size-28 text-orange' />
                </div>
                <p className='text-xl font-semibold'>Your Cart is Empty</p>
                <p className='text-xl'>Add Something to Make Happy!</p>
                <div className='mt-4'>
                  <Link
                    href='/'
                    className='bg-orange hover:bg-black duration-1000  text-white rounded-full px-8 py-2'
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          )}
          {/* ********************************* watch letter******************************* */}
          <div className='hidden xl:mt-8 xl:block'>
            <h3 className='text-2xl font-semibold text-black '>watch letter</h3>
            <div className='mt-10 grid grid-cols-4 gap-5 sm:mt-8'>
              <SimilarCard />
              <SimilarCard />
              <SimilarCard />
              <SimilarCard />
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Cart

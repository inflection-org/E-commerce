'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'

function Payment() {
  const router = useRouter()
  const searchParams = useSearchParams()
  console.log(searchParams.get('razorpay_payment_id'))
  console.log(searchParams.get('razorpay_payment_link_id'))
  console.log(searchParams.get('razorpay_payment_link_reference_id'))
  console.log(searchParams.get('razorpay_payment_link_status'))
  console.log(searchParams.get('razorpay_signature'))

  return (
    <div className='mx-5 md:mx-10 py-5'>
      <p>Current Status: {searchParams.get('razorpay_payment_link_status')}</p>
    </div>
  )
}

export default Payment

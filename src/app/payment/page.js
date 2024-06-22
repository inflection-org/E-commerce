'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import ConfromPayment from '@/components/ui/ConfromPayment'

function Payment() {
  const searchParams = useSearchParams()
  // console.log(searchParams.get('razorpay_payment_id'))
  // console.log(searchParams.get('razorpay_payment_link_id'))
  // console.log(searchParams.get('razorpay_payment_link_reference_id'))
  // console.log(searchParams.get('razorpay_payment_link_status'))
  // console.log(searchParams.get('razorpay_signature'))

  return (
    <div className='mx-5 md:mx-10'>
      <ConfromPayment
        referenceId={searchParams.get('razorpay_payment_link_reference_id')}
        paymentStatus={searchParams.get('razorpay_payment_link_status')}
      />
    </div>
  )
}

export default Payment

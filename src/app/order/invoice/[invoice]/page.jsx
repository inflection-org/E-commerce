'use client'
import React, { useEffect, useState } from 'react'
import Invoice from '../../../../components/ui/Invoice'
import { useParams } from 'next/navigation'
import { instance } from '@/app/axios/Api'

function Page() {
  const { invoice } = useParams()
  const [invoiceDetails, setInvoiceDetails] = useState({})

  useEffect(() => {
    const seeInvoice = async () => {
      try {
        const res = await instance.get(`/orders/my/${invoice}`)
        setInvoiceDetails(res.data.order)
      } catch (err) {
        console.log(err)
      }
    }
    seeInvoice()
  }, [])

  return (
    <div>
      <Invoice data={invoiceDetails} />
    </div>
  )
}

export default Page

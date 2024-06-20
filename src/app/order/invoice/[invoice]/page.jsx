'use client'
import React, { useEffect, useState } from 'react'
import Invoice from '../../../../components/ui/Invoice'
import { useParams } from 'next/navigation'
import { instance } from '@/app/axios/Api'

function Page() {
  const { invoice } = useParams()
  const [invoiceDetails, setInvoiceDetails] = useState({})
  console.log(invoiceDetails)

  console.log(invoice)
  useEffect(() => {
    const seeInvoice = async () => {
      try {
        const res = await instance.get(`/orders/invoice/${invoice}`)
        setInvoiceDetails(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    seeInvoice()
  }, [])

  return (
    <div>
      {invoiceDetails?.data?.map((e, i) => (
        <div key={i}>
          <Invoice data={e} />
        </div>
      ))}
    </div>
  )
}

export default Page

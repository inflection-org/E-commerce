import React from 'react'
import Image from 'next/image'
import logo from '../../../public/product/i.png'
import LocalTime from './LocalTime'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { MdOutlineFileDownload } from 'react-icons/md'

function Invoice({ data }) {
  const downloadPDF = (url = 'invoice') => {
    const input = document.getElementById('pdfContent')

    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4')
        const imgWidth = 210 // Width of A4 in mm
        const pageHeight = 297 // Height of A4 in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width
        let heightLeft = imgHeight
        let position = 0

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight
          pdf.addPage()
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
          heightLeft -= pageHeight
        }

        pdf.save(`${url}.pdf`)
      })
      .catch((err) => {
        console.error('Error generating PDF:', err)
      })
  }

  return (
    <>
      <div
        className='max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10'
        id='pdfContent'
      >
        <div className='sm:w-11/12 lg:w-3/4 mx-auto'>
          <div className='flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl'>
            <div className='flex justify-between'>
              <div>
                <Image src={logo} width={50} height={50} alt='logo' />
                <h1 className='text-lg'>
                  <span className='font-bold'>JITENDRA</span>SHOP
                </h1>
              </div>

              <div className='text-end'>
                <h2 className='text-2xl md:text-3xl font-semibold '>
                  Invoice #
                </h2>
                <span className='mt-1 block '>{data.order_code}</span>

                <p className='mt-4 not-italic '>
                  45 Roker Terrace
                  <br />
                  Latheronwheel
                  <br />
                  KW5 8NW, London
                  <br />
                  United Kingdom
                  <br />
                </p>
              </div>
            </div>
            <div className='mt-8 grid sm:grid-cols-2 gap-3'>
              <div>
                <h3 className='text-lg font-semibold'>Bill to:</h3>
                <h3 className='text-lg font-semibold'>{data.customer_name}</h3>
                <p className='mt-2 not-italic'>{data.address}</p>
              </div>

              <div className='sm:text-end space-y-2'>
                <div className='grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2'>
                  <dl className='grid sm:grid-cols-5 gap-x-3'>
                    <dt className='col-span-3 font-semibold'>Invoice date:</dt>
                    <dd className='col-span-2 text-sm italic'>
                      {LocalTime(data.order_at)}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className='mt-6'>
              <div className='border border-gray-200 p-4 rounded-lg space-y-4'>
                <div className='hidden sm:grid sm:grid-cols-5'>
                  <div className='sm:col-span-2 text-xs font-medium  uppercase'>
                    Item
                  </div>
                  <div className='text-start text-xs font-medium  uppercase'>
                    Quantity
                  </div>
                  <div className='text-start text-xs font-medium  uppercase'>
                    Discount
                  </div>
                  <div className='text-end text-xs font-medium  uppercase'>
                    Amount
                  </div>
                </div>

                <div className='hidden sm:block border-b'></div>
                {data?.order_item?.map((element, i) => (
                  <div
                    key={i}
                    className='grid grid-cols-3 sm:grid-cols-5 gap-2'
                  >
                    <div className='col-span-full sm:col-span-2'>
                      <h5 className='sm:hidden text-xs font-medium text-gray-500 uppercase'>
                        Item
                      </h5>
                      <p className='font-medium text-gray-800'>
                        {element.product_name}
                      </p>
                    </div>
                    <div>
                      <h5 className='sm:hidden text-xs font-medium text-gray-500 uppercase'>
                        Qty
                      </h5>
                      <p className='text-gray-800'>{element.quantity}</p>
                    </div>
                    <div>
                      <h5 className='sm:hidden text-xs font-medium text-gray-500 uppercase'>
                        Discount
                      </h5>
                      <p className='text-gray-800'>{`${element.discount}%`}</p>
                    </div>
                    <div>
                      <h5 className='sm:hidden text-xs font-medium text-gray-500 uppercase'>
                        Amount
                      </h5>
                      <p className='sm:text-end text-gray-800'>
                        {element.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='mt-8 flex sm:justify-end'>
              <div className='w-full max-w-2xl sm:text-end space-y-2'>
                <div className='grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2'>
                  <dl className='grid sm:grid-cols-5 gap-x-3'>
                    <dt className='col-span-3 font-semibold text-gray-800'>
                      Subtotal:
                    </dt>
                    <dd className='col-span-2 text-gray-500'>$2750.00</dd>
                  </dl>

                  <dl className='grid sm:grid-cols-5 gap-x-3'>
                    <dt className='col-span-3 font-semibold text-gray-800'>
                      Total:
                    </dt>
                    <dd className='col-span-2 text-gray-500'>$2750.00</dd>
                  </dl>

                  <dl className='grid sm:grid-cols-5 gap-x-3'>
                    <dt className='col-span-3 font-semibold text-gray-800'>
                      Tax:
                    </dt>
                    <dd className='col-span-2 text-gray-500'>$39.00</dd>
                  </dl>

                  <dl className='grid sm:grid-cols-5 gap-x-3'>
                    <dt className='col-span-3 font-semibold text-gray-800'>
                      Amount paid:
                    </dt>
                    <dd className='col-span-2 text-gray-500'>$2789.00</dd>
                  </dl>

                  <dl className='grid sm:grid-cols-5 gap-x-3'>
                    <dt className='col-span-3 font-semibold text-gray-800'>
                      Due balance:
                    </dt>
                    <dd className='col-span-2 text-gray-500'>$0.00</dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className='mt-8 sm:mt-12'>
              <h4 className='text-lg font-semibold text-gray-800'>
                Thank you!
              </h4>
              <p className='text-gray-500'>
                If you have any questions concerning this invoice, use the
                following contact information:
              </p>
              <div className='mt-2'>
                <p className='block text-sm font-medium text-gray-800'>
                  example@site.com
                </p>
                <p className='block text-sm font-medium text-gray-800'>
                  +1 (062) 109-9222
                </p>
              </div>
            </div>

            <p className='mt-5 text-sm text-gray-500'>
              © 2024 Inflection ORG All Rights Reserve.
            </p>
          </div>
          <div
            className='mt-6 flex justify-end gap-x-3'
            onClick={() => {
              downloadPDF(data.order_code)
            }}
          >
            <button className='py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm'>
              <MdOutlineFileDownload className='size-5' />
              Invoice PDF
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Invoice

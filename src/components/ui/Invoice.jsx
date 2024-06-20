import React from 'react'
import Image from 'next/image'
import logo from '../../../public/product/i.png'
import LocalTime from './LocalTime'

function Invoice({ data }) {
  return (
    <>
      <div className='max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10'>
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
                <h3 className='text-lg font-semibold '>Bill to:</h3>
                <h3 className='text-lg font-semibold '>{data.customer_name}</h3>
                <p className='mt-2 not-italic '>{data.address}</p>
              </div>

              <div className='sm:text-end space-y-2'>
                <div className='grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2'>
                  <dl className='grid sm:grid-cols-5 gap-x-3'>
                    <dt className='col-span-3 font-semibold '>Invoice date:</dt>
                    <dd className='col-span-2 '>{LocalTime(data.order_at)}</dd>
                  </dl>
                  {/* <dl className='grid sm:grid-cols-5 gap-x-3'>
                    <dt className='col-span-3 font-semibold text-gray-800'>
                      Due date:
                    </dt>
                    <dd className='col-span-2 text-gray-500'>03/11/2018</dd>
                  </dl> */}
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
                    Qty
                  </div>
                  <div className='text-start text-xs font-medium  uppercase'>
                    Rate
                  </div>
                  <div className='text-end text-xs font-medium  uppercase'>
                    Amount
                  </div>
                </div>

                <div className='hidden sm:block border-b '></div>

                <div className='grid grid-cols-3 sm:grid-cols-5 gap-2'>
                  <div className='col-span-full sm:col-span-2'>
                    <h5 className='sm:hidden text-xs font-medium text-gray-500 uppercase'>
                      Item
                    </h5>
                    <p className='font-medium text-gray-800'>
                      Design UX and UI
                    </p>
                  </div>
                  <div>
                    <h5 className='sm:hidden text-xs font-medium text-gray-500 uppercase'>
                      Qty
                    </h5>
                    <p className='text-gray-800'>1</p>
                  </div>
                  <div>
                    <h5 className='sm:hidden text-xs font-medium text-gray-500 uppercase'>
                      Rate
                    </h5>
                    <p className='text-gray-800'>5</p>
                  </div>
                  <div>
                    <h5 className='sm:hidden text-xs font-medium text-gray-500 uppercase'>
                      Amount
                    </h5>
                    <p className='sm:text-end text-gray-800'>$500</p>
                  </div>
                </div>

                <div className='sm:hidden border-b '></div>

                <div className='grid grid-cols-3 sm:grid-cols-5 gap-2'>
                  <div className='col-span-full sm:col-span-2'>
                    <h5 className='sm:hidden text-xs font-medium text-gray-500 uppercase'>
                      Item
                    </h5>
                    <p className='font-medium text-gray-800'>Web project</p>
                  </div>
                  <div>
                    <h5 className='sm:hidden text-xs font-medium text-gray-500 uppercase'>
                      Qty
                    </h5>
                    <p className='text-gray-800'>1</p>
                  </div>
                  <div>
                    <h5 className='sm:hidden text-xs font-medium text-gray-500 uppercase'>
                      Rate
                    </h5>
                    <p className='text-gray-800'>24</p>
                  </div>
                  <div>
                    <h5 className='sm:hidden text-xs font-medium text-gray-500 uppercase'>
                      Amount
                    </h5>
                    <p className='sm:text-end text-gray-800'>$1250</p>
                  </div>
                </div>

                <div className='sm:hidden border-b '></div>

                <div className='grid grid-cols-3 sm:grid-cols-5 gap-2'>
                  <div className='col-span-full sm:col-span-2'>
                    <h5 className='sm:hidden text-xs font-medium  uppercase'>
                      Item
                    </h5>
                    <p class='font-medium '>SEO</p>
                  </div>
                  <div>
                    <h5 class='sm:hidden text-xs font-medium  uppercase'>
                      Qty
                    </h5>
                    <p class=''>1</p>
                  </div>
                  <div>
                    <h5 class='sm:hidden text-xs font-medium  uppercase'>
                      Rate
                    </h5>
                    <p class=''>6</p>
                  </div>
                  <div>
                    <h5 class='sm:hidden text-xs font-medium text-gray-500 uppercase'>
                      Amount
                    </h5>
                    <p class='sm:text-end '>$2000</p>
                  </div>
                </div>
              </div>
            </div>

            <div class='mt-8 flex sm:justify-end'>
              <div class='w-full max-w-2xl sm:text-end space-y-2'>
                <div class='grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2'>
                  <dl class='grid sm:grid-cols-5 gap-x-3'>
                    <dt class='col-span-3 font-semibold text-gray-800'>
                      Subtotal:
                    </dt>
                    <dd class='col-span-2 text-gray-500'>$2750.00</dd>
                  </dl>

                  <dl class='grid sm:grid-cols-5 gap-x-3'>
                    <dt class='col-span-3 font-semibold text-gray-800'>
                      Total:
                    </dt>
                    <dd class='col-span-2 text-gray-500'>$2750.00</dd>
                  </dl>

                  <dl class='grid sm:grid-cols-5 gap-x-3'>
                    <dt class='col-span-3 font-semibold text-gray-800'>Tax:</dt>
                    <dd class='col-span-2 text-gray-500'>$39.00</dd>
                  </dl>

                  <dl class='grid sm:grid-cols-5 gap-x-3'>
                    <dt class='col-span-3 font-semibold text-gray-800'>
                      Amount paid:
                    </dt>
                    <dd class='col-span-2 text-gray-500'>$2789.00</dd>
                  </dl>

                  <dl class='grid sm:grid-cols-5 gap-x-3'>
                    <dt class='col-span-3 font-semibold text-gray-800'>
                      Due balance:
                    </dt>
                    <dd class='col-span-2 text-gray-500'>$0.00</dd>
                  </dl>
                </div>
              </div>
            </div>

            <div class='mt-8 sm:mt-12'>
              <h4 class='text-lg font-semibold text-gray-800'>Thank you!</h4>
              <p class='text-gray-500'>
                If you have any questions concerning this invoice, use the
                following contact information:
              </p>
              <div class='mt-2'>
                <p class='block text-sm font-medium text-gray-800'>
                  example@site.com
                </p>
                <p class='block text-sm font-medium text-gray-800'>
                  +1 (062) 109-9222
                </p>
              </div>
            </div>

            <p class='mt-5 text-sm text-gray-500'>
              © 2024 Inflection ORG All Rights Reserve.
            </p>
          </div>
          <div class='mt-6 flex justify-end gap-x-3'>
            <a
              class='py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm'
              href='#'
            >
              <svg
                class='flex-shrink-0 size-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
                <polyline points='7 10 12 15 17 10' />
                <line x1='12' x2='12' y1='15' y2='3' />
              </svg>
              Invoice PDF
            </a>
            <a
              class='py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'
              href='#'
            >
              <svg
                class='flex-shrink-0 size-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <polyline points='6 9 6 2 18 2 18 9' />
                <path d='M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2' />
                <rect width='12' height='8' x='6' y='14' />
              </svg>
              Print
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Invoice

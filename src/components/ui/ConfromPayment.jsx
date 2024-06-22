import Link from 'next/link'
import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { FaCheckCircle } from 'react-icons/fa'
const ConfromPayment = ({ paymentStatus, referenceId }) => {
  return (
    <div>
      <div className=' bg-light_gray h-screen flex justify-center items-center'>
        <div className='text-center bg-light_gray p-6 md:mx-auto'>
          {paymentStatus === 'paid' ? (
            <>
              <FaCheckCircle className='text-green w-20 h-20 mx-auto my-6' />
              <div className='text-center'>
                <h3 className='md:text-2xl text-base text-gray font-semibold text-center'>
                  Payment Done!
                </h3>
                <p className='text-sm text-gray'>{referenceId}</p>
                <p className='text-gray my-2'>
                  Thank you for completing your secure online payment.
                </p>
                <p> Have a great day! </p>
                <div className='py-10 text-center'>
                  <Link
                    href='/order'
                    className='bg-orange hover:bg-black duration-1000 uppercase px-8 rounded-md text-white font-semibold py-3'
                  >
                    GO To Order
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <IoMdCloseCircle className=' text-red w-20 h-20 mx-auto my-6' />
              <div className='text-center'>
                <h3 className='md:text-2xl text-base text-gray font-semibold text-center'>
                  Payment Fail!
                </h3>
                <p className='text-sm text-gray'>{referenceId}</p>
                <p className='text-gray my-2'>
                  {`Don't Worry. we'll try Your Payment Again Over The Some Time !`}
                </p>
                <p href={'#'}> Retry Payment! </p>
                <div className='py-10 text-center'>
                  <Link
                    href='/order'
                    className='bg-orange hover:bg-black duration-1000 uppercase px-8 rounded-md text-white font-semibold py-3'
                  >
                    Pay Again
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ConfromPayment

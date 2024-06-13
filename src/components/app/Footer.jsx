import React from 'react'
import Image from 'next/image'
import logo from '../../../public/product/i.png'
import payPal from '../../../public/Paypal.webp'
import visa from '../../../public/visa.webp'
import mastercard from '../../../public/mastercard.webp'
import cash from '../../../public/cash.webp'
import { GrFacebookOption, GrInstagram } from 'react-icons/gr'
import { FaTwitter, FaSkype } from 'react-icons/fa'
import { AiFillCopyrightCircle } from 'react-icons/ai'
import Link from 'next/link'

function Footer() {
  return (
    <div className='px-10 pb-10 pt-10 bg-black'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  mt-5 text-white '>
        {/* ****1***** */}
        <div>
          <div className='flex items-center gap-1'>
            <Image src={logo} width={50} height={50} alt='logo' />
            <h1 className='text-lg'>
              <span className='font-bold'>JITENDRA</span>SHOP
            </h1>
          </div>
          <div className='mt-5'>
            <h1 className=' hover:text-orange text-gray'>Address</h1>
            <p className='text-sm  hover:text-orange text-gray'>
              3566 Bird Spring Lane, Houston Texs
            </p>
          </div>
          <div className='mt-5'>
            <h1 className='hover:text-orange text-gray'>Phone</h1>
            <p className='text-sm hover:text-orange text-gray'>
              +1 423 208 388
            </p>
          </div>
          <div className='mt-5'>
            <h1 className=' hover:text-orange text-gray'>Email</h1>
            <p className='text-sm hover:text-orange text-gray'>
              hello@metashop.com
            </p>
          </div>
          <div className='mt-5 flex gap-3'>
            <div className='bg-gray rounded-full'>
              <GrFacebookOption className='size-8 p-1' />
            </div>
            <div className='bg-gray rounded-full'>
              <GrInstagram className='size-8 p-2' />
            </div>
            <div className='bg-gray rounded-full'>
              <FaTwitter className='size-8 p-1' />
            </div>
          </div>
        </div>
        {/* ***2**** */}
        <div className='mt-4'>
          <h1 className='text-lg font-semibold'>Quick Links</h1>
          <div className='mt-6'>
            <ul>
              <li href='' className='m-2 hover:text-orange text-gray'>
                About
              </li>
              <li href='' className='m-2 hover:text-orange text-gray'>
                Shop
              </li>
              <li className='m-2 hover:text-orange text-gray'>Special Offer</li>
              <li className='m-2 hover:text-orange text-gray'>New Arrivals</li>
              <li className='m-2 hover:text-orange text-gray'>Blog</li>
              <li className='m-2 hover:text-orange text-gray'>FAQs</li>
              <Link href='/contact' className='m-2 hover:text-orange text-gray'>
                Contact Us
              </Link>
            </ul>
          </div>
        </div>
        {/* *****3*** */}
        <div className='mt-4'>
          <h1 className='text-lg font-semibold'>My Account</h1>
          <ul className='mt-6'>
            <li className='m-2 hover:text-orange text-gray'>My Account</li>
            <li className='m-2 hover:text-orange text-gray'>Order History</li>
            <li className='m-2 hover:text-orange text-gray'>Address Book</li>
            <li className='m-2 hover:text-orange text-gray'>Wishlist</li>
            <li className='m-2 hover:text-orange text-gray'>Coupon Code</li>
            <li className='m-2 hover:text-orange text-gray'>Login</li>
            <li className='m-2 hover:text-orange text-gray'>Registration</li>
          </ul>
        </div>
        {/* ****4*** */}
        <div className='mt-4'>
          <h1 className='text-lg font-semibold'>Support</h1>
          <div className='mt-6'>
            <p className='mt-2 hover:text-orange text-gray'>Help Center</p>
            <p className='mt-2 hover:text-orange text-gray'>How to Buy</p>
            <p className='mt-2 hover:text-orange text-gray'>Track Your Order</p>
            <p className='mt-2 hover:text-orange text-gray'>Store Location</p>
            <p className='mt-2 hover:text-orange text-gray'>
              Return & Refound Policy{' '}
            </p>
            <p className='mt-2 hover:text-orange text-gray'>
              Terms & Condition
            </p>
            <p className='mt-2 hover:text-orange text-gray'>Privacy Policy</p>
          </div>
        </div>
        {/* ****5**** */}
        <div className='mt-4'>
          <h1 className='text-lg font-semibold'> Newsletter</h1>
          <p className='mt-4 hover:text-orange text-gray'>
            Subscribe to our newsletter and get 20% off your first purchase
          </p>
          {/* ******email-box */}
          <div className=' md:w-72 mt-8'>
            <div className='relative  flex w-full flex-wrap items-stretch'>
              <input
                type='search'
                className='relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-full  border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none '
                placeholder='Search'
                aria-label='Search'
                aria-describedby='button-addon1'
              />
              {/* <!--Search button--> */}
              <button
                className='relative z-[2] flex items-center rounded-r-full px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white hover:text-black hover:bg-white bg-orange shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg'
                type='button'
                id='button-addon1'
              >
                Subscrie
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className='text-gray mt-8'></hr>
      <div className='flex justify-center text-center lg:block'>
        <div className='block lg:flex justify-between text-white mt-8'>
          <div className='flex gap-1 items-center'>
            <AiFillCopyrightCircle className='text-white size-5' />
            <h1>2024 Inflection. All Rights Reserve.</h1>
          </div>
          <div className='flex gap-2'>
            <Image src={payPal} width={55} height={55} alt='logo' />
            <Image src={visa} width={55} height={55} alt='logo' />
            <Image src={mastercard} width={55} height={55} alt='logo' />
            <Image src={cash} width={55} height={55} alt='logo' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

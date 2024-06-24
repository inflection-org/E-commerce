'use client'
import React from 'react'
import { IoLocation } from 'react-icons/io5'
import { IoMdCall } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'

function Contact() {
  return (
    <div className='px-5 md:px-10'>
      <div className='flex justify-center md:mt-10'>
        <div className='w-[100%] '>
          <div className='flex justify-center m-2'>
            <h1 className='text-4xl font-medium'>Contact With Us</h1>
          </div>
          {/* card */}
          <div className='flex justify-center mt-10 my-2'>
            <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 place-items-center items-center lg:gap-10 mt-5'>
              {/* *****1***** */}
              <div className='w-full h-40 md:w-96 md:h-40 border-2 border-gray hover:border-red bg-white rounded-md group'>
                <div className='flex ml-10 items-center mt-12 gap-3'>
                  <div>
                    <IoLocation className='w-12 h-12 p-2 border-2 group-hover:bg-red rounded-full text-gray  group-hover:text-white' />
                  </div>
                  <div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p>Inflection ORG</p>
                  </div>
                </div>
              </div>
              {/* ******2***** */}
              <div className='w-full h-40 md:w-96 md:h-40 border-2 border-gray hover:border-red bg-white rounded-md group'>
                <div className='flex ml-10 items-center mt-12 gap-3'>
                  <div>
                    <IoMdCall className='w-12 h-12 p-2 border-2 group-hover:bg-red rounded-full text-gray  group-hover:text-white' />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <a href='tel:+088 078 968 745'>+088 078 968 745</a>
                    <a href='tel:+088 088 968 845'>+088 088 968 845</a>
                  </div>
                </div>
              </div>
              {/* *****3****** */}
              <div className='w-full h-40 md:w-96 md:h-40 border-2 border-gray hover:border-red bg-white rounded-md group'>
                <div className='flex ml-10 items-center mt-12 gap-3'>
                  <div>
                    <MdEmail className='w-12 h-12 p-2 border-2 group-hover:bg-red rounded-full text-gray  group-hover:text-white' />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <a href='mailto:exam@gmail.com'>exam@gmail.com</a>
                    <a href='mailto:exam@gmail.com'>exam@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* *********form*********** */}
          <div className='flex justify-center pb-10'>
            <div className='block md:flex justify-center w-[100%]  gap-4'>
              {/* ******1******* */}
              <div className='w-full md:w-[50%]'>
                <div className='relative h-12 w-full min-w-[300px] mt-8'>
                  <label className='relative block rounded-md border border-gray shadow-sm focus-within:border-red focus-within:ring-1 focus-within:ring-red'>
                    <input
                      type='text'
                      id='Username'
                      className='peer h-12 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0'
                      placeholder='Username'
                    />
                    <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
                      Username
                    </span>
                  </label>
                </div>
                <div className='relative h-12 w-full min-w-[300px] mt-10'>
                  <label className='relative block rounded-md border border-gray shadow-sm focus-within:border-red focus-within:ring-1 focus-within:ring-red'>
                    <input
                      type='text'
                      id='email'
                      className='peer  h-12 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0'
                      placeholder='email'
                    />
                    <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
                      Email
                    </span>
                  </label>
                </div>
                <div className='relative h-20 w-full min-w-[300px] mt-10'>
                  <label className='relative block rounded-md border border-gray shadow-sm focus-within:border-red focus-within:ring-1 focus-within:ring-red'>
                    <input
                      type='text'
                      id='number'
                      className='peer  h-12 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0'
                      placeholder='number'
                    />

                    <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
                      Number
                    </span>
                  </label>
                </div>
              </div>
              {/* ******2****** */}
              <div className='w-full md:w-[50%]'>
                <div className='relative h-40 w-full min-w-[200px] mt-8'>
                  <label className='relative h-full w-full block rounded-md border border-gray shadow-sm focus-within:border-red focus-within:ring-1 focus-within:ring-red'>
                    <input
                      type='text'
                      id='Comment'
                      className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0'
                      placeholder='Comment'
                    />

                    <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2  peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
                      Comment
                    </span>
                  </label>
                </div>
                <button className='w-full border rounded-[7px] mt-3.5 py-3.5 text-white bg-orange'>
                  Send Massage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* *******map***** */}
      <div className='flex justify-center h-56 md:h-96 w-full mt-10'>
        <div className='w-[100%]'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227822.60371495236!2d80.77770113613681!3d26.848596484270367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1708524359275!5m2!1sen!2sin'
            width='100%'
            height='100%'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact

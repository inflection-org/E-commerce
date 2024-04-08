import React from 'react'
import { IoLocation } from 'react-icons/io5'
import { IoMdCall } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'

function Contact() {
  return (
    <div className='px-10'>
      <div className='h-44 my-5 bg-light_gray'>
        <h1>hello</h1>
      </div>
      <div className='flex justify-center  mt-20  '>
        <div className='w-[100%] mt-5'>
          <div className='flex justify-center m-2'>
            <div>
              <h1 className='text-4xl font-medium'>Contact With Us</h1>
              <div className='flex items-center gap-4 mt-2 justify-center'></div>
            </div>
          </div>
          {/* card */}
          <div className='flex justify-center my-2  '>
            <div className='grid  w-[100%] grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:ml-10 lg:gap-10 mt-5'>
              {/* *****1***** */}
              <div className='w-full h-40 md:w-96 md:h-40  border bg-white rounded-md group shadow-md'>
                <div className='flex ml-10 items-center mt-12 gap-3'>
                  <div>
                    <IoLocation className='w-12 h-12 p-2 border-2 group-hover:bg-red rounded-full text-gray  group-hover:text-white' />
                  </div>
                  <div>
                    <p className=''>Road-12, Block-D, Ulipur</p>
                    <p>Kurigram, Dhaka</p>
                  </div>
                </div>
              </div>
              {/* ******2***** */}
              <div className='w-full h-40 md:w-96 md:h-40  border bg-white rounded-md group shadow-md mt-2'>
                <div className='flex ml-10 items-center mt-12 gap-3'>
                  <div>
                    <IoMdCall className='w-12 h-12 p-2 border-2 group-hover:bg-red rounded-full text-gray  group-hover:text-white' />
                  </div>
                  <div>
                    <p className=''>+088 078 968 745</p>
                    <p>+088 088 968 845</p>
                  </div>
                </div>
              </div>
              {/* *****3****** */}
              <div className='w-full h-40 md:w-96 md:h-40  border bg-white rounded-md group shadow-md mt-2'>
                <div className='flex ml-10 items-center mt-12 gap-3'>
                  <div>
                    <MdEmail className='w-12 h-12 p-2 border-2 group-hover:bg-red rounded-full text-gray  group-hover:text-white' />
                  </div>
                  <div>
                    <p className=''>exam@gmail.com</p>
                    <p>exam@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* *********form*********** */}
          <div className=' flex justify-center pb-10'>
            <div className=' block md:flex justify-center w-[100%]  gap-4'>
              {/* ******1******* */}
              <div className='w-full md:w-[50%]'>
                <div class='relative h-12 w-full min-w-[300px] mt-8'>
                  <input
                    className='peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-gray focus:border-2 focus:border-red focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray'
                    placeholder=' '
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray">
                    Enter Name
                  </label>
                </div>
                <div className='relative h-12 w-full min-w-[300px] mt-10'>
                  <input
                    className='peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-gray focus:border-2 focus:border-red focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray'
                    placeholder=' '
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray">
                    Enter Email
                  </label>
                </div>
                <div className='relative h-12 w-full min-w-[300px] mt-10'>
                  <input
                    className='peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-gray focus:border-2 focus:border-red focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray'
                    placeholder=' '
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray">
                    Number
                  </label>
                </div>
              </div>
              {/* ******2****** */}
              <div className='w-full md:w-[50%]'>
                <div className='relative h-40 w-full min-w-[200px] mt-8'>
                  <input
                    className='peer h-full w-full rounded-[7px] border border-gray bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray placeholder-shown:border-t-gray focus:border-2 focus:border-red focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray'
                    placeholder=' '
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray">
                    Your Comment
                  </label>
                </div>
                <button className='w-full border rounded-[7px] mt-4 h-12 text-white bg-orange '>
                  Send Massage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* *******map***** */}
      <div className='flex justify-center h-60  md:h-96 w-full  mt-10'>
        <div className='w-[100%]'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227822.60371495236!2d80.77770113613681!3d26.848596484270367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1708524359275!5m2!1sen!2sin'
            width='100%'
            height='100%'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact

import React from 'react'

const page = () => {
  return (
    // <!-- source: https://gist.github.com/nraloux/bce10c4148380061781b928cdab9b193 -->
    // <!-- I have added support for dark mode and improved UI -->

    <div className='h-full bg-light_gray '>
      {/* <!-- Container --> */}
      <div className='mx-auto'>
        <div className='flex justify-center px-6 py-12'>
          {/* <!-- Row --> */}
          <div className='w-full xl:w-3/4 lg:w-11/12 flex'>
            {/* <!-- Col --> */}
            <div className=' bg-light_gray hidden lg:block lg:w-5/12 bg-cover rounded-l-lg'>
              <img
                src={'/signUp.jpg'}
                alt='Picture of the author'
                className='w-full h-full rounded-l-lg'
              />
            </div>
            {/* <!-- Col --> */}
            <div className='w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none'>
              <h3 className='py-4 text-2xl text-center text-gray-800 '>
                Create an Account!
              </h3>
              <form className='px-8 pt-6 pb-8 mb-4 bg-white  rounded'>
                <div className='mb-4 md:flex md:justify-between'>
                  <div className='mb-4 md:mr-2 md:mb-0'>
                    <label
                      className='block mb-2 text-sm font-bold text-black'
                      for='firstName'
                    >
                      First Name
                    </label>
                    <input
                      className='w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='firstName'
                      type='text'
                      placeholder='First Name'
                    />
                  </div>
                  <div className='md:ml-2'>
                    <label
                      className='block mb-2 text-sm font-bold text-black '
                      for='lastName'
                    >
                      Last Name
                    </label>
                    <input
                      className='w-full px-3 py-2 text-sm leading-tight text-gray  border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='lastName'
                      type='text'
                      placeholder='Last Name'
                    />
                  </div>
                </div>
                <div className='mb-4'>
                  <label
                    className='block mb-2 text-sm font-bold text-black '
                    for='email'
                  >
                    Email
                  </label>
                  <input
                    className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    id='email'
                    type='email'
                    placeholder='Email'
                  />
                </div>
                <div className='mb-4 md:flex md:justify-between'>
                  <div className='mb-4 md:mr-2 md:mb-0'>
                    <label
                      className='block mb-2 text-sm font-bold text-black '
                      for='password'
                    >
                      Password
                    </label>
                    <input
                      className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray  border border-red rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='password'
                      type='password'
                      placeholder='******************'
                    />
                    <p className='text-xs italic text-red'>
                      Please choose a password.
                    </p>
                  </div>
                  <div className='md:ml-2'>
                    <label
                      className='block mb-2 text-sm font-bold text-black '
                      for='c_password'
                    >
                      Confirm Password
                    </label>
                    <input
                      className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='c_password'
                      type='password'
                      placeholder='******************'
                    />
                  </div>
                </div>
                <div className='mb-6 text-center'>
                  <button
                    className='w-full px-4 py-2 font-bold text-white bg-blue rounded-full hover:bg-green  focus:outline-none focus:shadow-outline'
                    type='button'
                  >
                    Register Account
                  </button>
                </div>
                <hr className='mb-6 border-t' />
                <div className='text-center'>
                  <a
                    className='inline-block text-sm text-blue align-baseline hover:underline'
                    href='#'
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className='text-center'>
                  <a
                    className='inline-block text-sm text-blue  align-baseline hover:underline'
                    href='/login'
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

'use client'
import React from 'react'
import { useState } from 'react'
import { instance } from '../axios/Api'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const SignUp = () => {
  const router = useRouter()
  const [state, setState] = useState({
    name: '',
    email: '',
  })
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setState({
      name: '',
      email: '',
    })
    try {
      const res = await instance.post('/users/signup', {
        reset_password_ui_url: 'http://localhost:3000/reset_password',
        full_name: state.name,
        email: state.email,
      })
      // toast.success('signUp successfully')

      setIsOpen(true)
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message)
      } else {
        toast.error(error.message)
      }
    }
  }

  return (
    <div className='font-[sans-serif]  bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4'>
      <div className='grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden'>
        <div className='max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-black to-light_black lg:px-8 px-4 py-4'>
          <div>
            <h4 className='text-white text-lg font-semibold'>
              Create Your Account
            </h4>
            <p className='text-[13px] text-white mt-2'>
              Welcome to our registration page! Get started by creating your
              account.
            </p>
          </div>
          <div>
            <h4 className='text-white text-lg font-semibold'>
              Simple & Secure Registration
            </h4>
            <p className='text-[13px] text-white mt-2'>
              Our registration process is designed to be straightforward and
              secure. We prioritize your privacy and data security.
            </p>
          </div>
        </div>
        <form className='md:col-span-2 w-full py-6 px-6 sm:px-16'>
          <div className='mb-6'>
            <h3 className='text-2xl font-bold'>Create an account</h3>
          </div>
          <div className='space-y-5'>
            <div>
              <label className='text-sm mb-2 block'>Name</label>
              <div className='relative flex items-center'>
                <input
                  type='text'
                  name='name'
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                  required
                  className='bg-white border border-gray w-full text-sm px-4 py-2.5 rounded-md outline-blue'
                  placeholder='Enter name'
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#bbb'
                  stroke='#bbb'
                  className='w-4 h-4 absolute right-4'
                  viewBox='0 0 24 24'
                >
                  <circle cx='10' cy='7' r='6' data-original='#000000'></circle>
                  <path
                    d='M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z'
                    data-original='#000000'
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <label className='text-sm mb-2 block'>Email Id</label>
              <div className='relative flex items-center'>
                <input
                  name='email'
                  type='email'
                  value={state.email}
                  onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                  }
                  required
                  className='bg-white border border-black w-full text-sm px-4 py-2.5 rounded-md outline-blue'
                  placeholder='Enter email'
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#bbb'
                  stroke='#bbb'
                  className='w-4 h-4 absolute right-4'
                  viewBox='0 0 682.667 682.667'
                >
                  <defs>
                    <clipPath id='a' clipPathUnits='userSpaceOnUse'>
                      <path d='M0 512h512V0H0Z' data-original='#000000'></path>
                    </clipPath>
                  </defs>
                  <g
                    clipPath='url(#a)'
                    transform='matrix(1.33 0 0 -1.33 0 682.667)'
                  >
                    <path
                      fill='none'
                      strokeMiterlimit='10'
                      strokeWidth='40'
                      d='M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z'
                      data-original='#000000'
                    ></path>
                    <path
                      d='M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z'
                      data-original='#000000'
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            {/* <div>
              <label className='text-sm mb-2 block'>Password</label>
              <div className='relative flex items-center'>
                <input
                  name='password'
                  type='password'
                  value={state.password}
                  onChange={(e) =>
                    setState({ ...state, password: e.target.value })
                  }
                  required
                  className='bg-white border border-gray w-full text-sm px-4 py-2.5 rounded-md outline-blue-500'
                  placeholder='Enter password'
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#bbb'
                  stroke='#bbb'
                  className='w-4 h-4 absolute right-4 cursor-pointer'
                  viewBox='0 0 128 128'
                >
                  <path
                    d='M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z'
                    data-original='#000000'
                  ></path>
                </svg>
              </div>
            </div> */}
          </div>
          <div className='!mt-10'>
            <button
              type='button'
              onClick={handleSubmit}
              className='w-full py-3 px-4 text-sm font-semibold rounded text-white bg-black hover:bg-light_black focus:outline-none'
            >
              Create an account
            </button>
          </div>
          <p className='text-sm mt-6 text-center'>
            Already have an account?
            <a
              href='/login'
              className='text-blue font-semibold hover:underline ml-1'
            >
              Login here
            </a>
          </p>
        </form>
      </div>
      {/* **************************************** */}
      {isOpen && (
        <div
          className='relative z-10 '
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'
        >
          <div
            className='fixed inset-0 bg-black bg-opacity-75 transition-opacity'
            aria-hidden='true'
          ></div>

          <div className='fixed inset-0 z-10 w-screen  overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                      <svg
                        className='h-6 w-6 text-red'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                        />
                      </svg>
                    </div>
                    <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                      <h3
                        className='text-base font-semibold leading-6 text-gray-900'
                        id='modal-title'
                      >
                        Check Your Email
                      </h3>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>
                          GoTo Mail and Set Your Password after Login Here !
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 flex justify-center sm:px-6'>
                  <button
                    onClick={() => router.push('/login')}
                    className='text-sm bg-orange md:mt-0 hover:bg-black duration-1000 text-white px-6 py-2 rounded-md '
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SignUp

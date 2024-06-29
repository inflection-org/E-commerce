'use client'
import React from 'react'
import { useState, useContext } from 'react'
import Link from 'next/link'
import { instance, setToken } from '../axios/Api'
import { MdOutlinePermDeviceInformation } from 'react-icons/md'
import { setCookie } from '../axios/CookieConfig'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { MyContext } from '@/context/MyContext'

const Login = () => {
  const { setIsLogin } = useContext(MyContext)
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)
  const [forgetPasswordEmail, setForgetPasswordEmail] = useState('')
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setState({
      email: '',
      password: '',
    })
    try {
      const res = await instance.post('/users/login', {
        email: state.email,
        password: state.password,
      })
      const accessTokenExpiresAt = Date.parse(res.data.access_token_expires_at)
      const refreshTokenExpiresAt = Date.parse(
        res.data.refresh_token_expires_at
      )
      const currentMilies = Date.now()

      const access_token = res.data.access_token
      const refresh_token = res.data.refresh_token
      setCookie(
        'access_token',
        access_token,
        parseInt((accessTokenExpiresAt - currentMilies) / 1000)
      )
      setCookie(
        'refresh_token',
        refresh_token,
        parseInt((refreshTokenExpiresAt - currentMilies) / 1000)
      )
      setToken('access_token')
      setIsLogin(true)
      router.push('/')
    } catch (error) {
      console.log(error)
      if (error.response?.data?.message) {
        toast.error(error.response?.data?.message)
      } else {
        toast.error(error.message)
      }
    }
  }

  // forget Password********************
  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await instance.post('/users/forgot_password', {
        reset_password_ui_url: 'http://localhost:3000/reset_password',
        email: forgetPasswordEmail,
      })
      router.push('/')
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response?.data?.message)
      } else {
        toast.error(error.message)
      }
    }
  }

  return (
    <div className='py-16 bg-light_gray'>
      <div className='flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl'>
        <img
          src={'/login.jpg'}
          width={500}
          height={400}
          className='hidden lg:block'
          alt='Picture of the author'
        ></img>
        {/* *****login form***** */}
        <div className='w-full p-8 lg:w-1/2'>
          <h2 className='text-2xl font-semibold text-black text-center'>
            Brand
          </h2>

          <p className='text-xl text-black text-center'>Welcome back!</p>
          <a
            href='#'
            className='flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-light_gray'
          >
            <div className='px-4 py-3'>
              <svg className='h-6 w-6' viewBox='0 0 40 40'>
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#FFC107'
                />
                <path
                  d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                  fill='#FF3D00'
                />
                <path
                  d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                  fill='#4CAF50'
                />
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#1976D2'
                />
              </svg>
            </div>
            <h1 className='px-4 py-3 w-5/6 text-center text-black font-bold'>
              Sign in with Google
            </h1>
          </a>
          <div className='mt-4 flex items-center justify-between'>
            <span className='border-b w-1/5 lg:w-1/4'></span>
            <a href='#' className='text-xs text-center text-gray uppercase'>
              or login with email
            </a>
            <span className='border-b w-1/5 lg:w-1/4'></span>
          </div>
          <div className='mt-4'>
            <label className='block text-black text-sm font-bold mb-2'>
              Email Address
            </label>
            <input
              className='bg-light_gray text-gray focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none'
              type='email'
              value={state.email}
              name='email'
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>
          <div className='mt-4'>
            <div className='flex justify-between'>
              <label className='block text-black text-sm font-bold mb-2'>
                Password
              </label>
              <Link
                href='#'
                onClick={() => {
                  setIsOpen(false)
                }}
                className='text-xs hover:text-blue hover:underline text-black'
              >
                Forget Password?
              </Link>
            </div>
            <input
              className='bg-light_gray text-gray focus:outline-none focus:shadow-outline border border-gray rounded py-2 px-4 block w-full appearance-none'
              type='password'
              name='password'
              value={state.password}
              onChange={(e) => setState({ ...state, password: e.target.value })}
            />
          </div>
          <div className='mt-8'>
            <button
              type='submit'
              onClick={handleSubmit}
              className='bg-blue text-white font-bold py-2 px-4 w-full rounded hover:bg-green'
            >
              Login
            </button>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <span className='border-b w-1/5 md:w-1/4'></span>
            <a
              href='/sign_up'
              className='text-xs text-gray hover:underline hover:text-blue uppercase'
            >
              or sign up
            </a>
            <span className='border-b w-1/5 md:w-1/4'></span>
          </div>
        </div>
      </div>
      {/* ******forget password */}
      {!isOpen && (
        <div className='top-0 z-50 bg-opacity-80 fixed  h-full w-full bg-black'>
          <div className='flex justify-center h-screen items-center '>
            <div className='flex justify-center bg-[#ffff] w-[90%]  md:w-[60%] rounded-md h-96 '>
              <div>
                <MdOutlinePermDeviceInformation className='size-20 md:size-32 m-auto mt-6 text-red' />
                <h1 className='text-2xl mt-4 font-semibold text-blue'>
                  Forget Password
                </h1>
                <div className='mt-4'>
                  <input
                    className='bg-light_gray text-gray focus:outline-none focus:shadow-outline border border-gray rounded py-2 px-4 md:px-8 block w-full appearance-none'
                    type='email'
                    name='email'
                    placeholder='Enter Email'
                    onChange={(e) => setForgetPasswordEmail(e.target.value)}
                  />
                </div>
                {/* *******button***** */}
                <div className='flex gap-4'>
                  <button
                    onClick={onSubmit}
                    className='bg-blue hover:bg-green mt-5 py-2 px-4  rounded-md text-white '
                  >
                    Forget Password
                  </button>
                  <button
                    type='button'
                    className='bg-blue hover:bg-green mt-5 py-2 px-8  rounded-md text-white '
                    onClick={() => {
                      setIsOpen(true)
                    }}
                  >
                    Cancel
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
export default Login

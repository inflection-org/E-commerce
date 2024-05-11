import React from 'react'
import { CiLock } from 'react-icons/ci'
const page = () => {
  return (
    <div className='flex  justify-center items-center w-full h-full py-5 bg-light_gray'>
      <div className='flex justify-center text-center  bg-white  w-[60%] rounded-md shadow-md h-96'>
        <div>
          <CiLock className='size-32 m-auto mt-6 text-red' />
          <h1 className='text-2xl mt-4 font-semibold text-blue'>
            Reset Password
          </h1>
          <div className='mt-4'>
            {/* <div className='flex justify-between'>
              <label className='block text-black text-sm font-bold mb-2'>
                New Password
              </label>
            </div> */}
            <input
              className='bg-light_gray text-gray focus:outline-none focus:shadow-outline border border-gray rounded py-2 px-8 block w-full appearance-none'
              type='password'
              name='password'
              placeholder='New Password'
              //   onChange={(e) => setState({ ...state, password: e.target.value })}
            />
          </div>
          <button className='bg-blue hover:bg-green mt-5 py-2 px-8 w-full rounded-md text-white '>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default page

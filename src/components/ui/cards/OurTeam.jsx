import React from 'react'
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGooglePlusSquare,
} from 'react-icons/ai'
const OurTeam = (props) => {
  return (
    <div className='relative group  w-[100%] h-[350px] overflow-hidden shadow-lg rounded-md '>
      <div className=''>
        <img src={props.img} className='w-80 h-[350px]' alt='img' />
      </div>

      <div className='absolute w-full h-52 -mt-40 bg-light_gray   group-hover:translate-y-[0%] group-hover:transition-all group-hover:ease-in group-hover:duration-[0.5s] translate-y-[48%] transition-all ease-in duration-[0.5s] '>
        <div>
          <div className='flex justify-center text-center mt-2'>
            <div>
              <h1 className='text-xl'>{props.name}</h1>
              <p className='mt-1 '>{props.title}</p>

              <div className='flex justify-center m-2'>
                <AiFillFacebook className='bg-light_gray text-red w-10 h-10' />
                <AiFillTwitterSquare className='bg-light_gray text-red w-10 h-10' />
                <AiFillGooglePlusSquare className=' bg-light_gray text-red w-10 h-10' />
                <AiFillLinkedin className='bg-light_gray text-red w-10 h-10' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam

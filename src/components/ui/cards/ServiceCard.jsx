import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className='p-2'>
      <div className='border-2 group border-light_gray hover:shadow-lg rounded-lg h-48 w-80'>
        <div className='flex justify-center mt-5 '>{props.children}</div>
        <div className='text-center  mt-5'>
          <h1 className='group-hover:text-orange text-lg'>{props.title}</h1>
          <p className='text-sm text-gray mt-2'>{props.disc}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard

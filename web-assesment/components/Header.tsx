'use client'
import React from 'react'
import Image from 'next/image'
import images from '../public/assets/images.png'
const header = () => {
  return (
    <div className='p-12'>
      <div className='flex justify-between'>

      <div>
  <Image
    src="/assets/images.png"
    alt="logo"
    width={100}
    height={100}
  />
</div>

        <div className='flex justify-between gap-8 py-8'>
        <p>Home</p>
        <p>Teams</p>
        <p>Sucess Stories</p>
        <p>About Us</p>
        <p>Blogs</p>
        <p>Get involved</p>
        </div>

        <div className='flex justify-between gap-6 py-6'>
            <p className='py-3'>Login</p>
            <button className='bg-indigo-800 rounded-md text-white font-bold h-10'> <p className='px-6'> Donate </p></button>
        </div>

      </div>

    </div>

  )
}

export default header

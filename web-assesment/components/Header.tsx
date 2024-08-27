'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import images from '../public/assets/images.png'
const header = () => {
  const [activeLink, setActiveLink] = useState('Home');
  
  const menuItems = [
    'Home',
    'Teams',
    'Sucess Stories',
    'About Us',
    'Blogs',
    'Get involved',
  ];

  const handleLinkClick = (link:any) => {
    setActiveLink(link);
  };
  return (
    <div className='pb-12 pt-8 px-12'>
      <div className='flex justify-between'>

      <div>
  <Image
    src="/assets/images.png"
    alt="logo"
    width={100}
    height={100}
  />
</div>

<div className="flex justify-between gap-8 py-8">
      {menuItems.map((item, index) => (
        <p
          key={index}
          className={`cursor-pointer ${
            activeLink === item
              ? 'text-indigo-800 font-bold border-b-4 border-indigo-800'
              : 'text-gray-700 hover:text-gray-500'
          }`}
          onClick={() => handleLinkClick(item)}
        >
          {item}
        </p>
      ))}
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

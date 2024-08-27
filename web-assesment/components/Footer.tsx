import React from 'react'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter , faFacebookSquare, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className='pt-24 pb-12 px-12'>
      <div className=' flex justify-between'>
        <div>
        <Image
    src="/assets/footerPic.png"
    alt="logo"
    width={100}
    height={100}
  />
        </div>
        <div  className=''>
          <p className='font-bold text-xl py-6'>
            Get involved in improving tech education in Africa!
          </p>
          <button className='bg-indigo-800 rounded-md text-white font-bold h-10'> <p className='px-12'> Support Us </p></button>
        </div>
        <div>
          <p className='font-bold py-3'>Links</p>
          <p className='py-2'>Home</p>
          <p className='py-2'>Success Stories</p>
          <p className='py-2'>About Us</p>
          <p className='py-2'>Get Involved</p>
          
        </div>
        <div>
          <p className='font-bold py-3'>Teams</p>
          <p className='py-2'>Board Members</p>
          <p className='py-2'>Advisors/Mentors</p>
          <p className='py-2'>Executives</p>
          <p className='py-2'>Staffs</p>
          
        </div>
        <div>
          <p className='font-bold py-3'>Blogs</p>
          <p className='py-2'>Recent Blogs</p>
          <p className='py-2'>New Blog</p>
        </div>
      </div>
      <div className="border-b-2 border-blue-950 my-4 opacity-20"></div>
      <div className='flex justify-between px-6'>
        <p className='py-4'>©  2020 Africa to Silicon Valley, Inc. All right reserved</p>
        <div className='flex gap-6 py-4'>
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebookSquare}/>
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  )
}

export default Footer

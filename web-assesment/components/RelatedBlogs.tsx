import React from 'react'
import Image from 'next/image'
const RelatedBlogs = () => {
  return (
    <div className='p-8 items-center max-w-[400px]'>
         <div className='flex justify-center' >
         <Image
                          src='/assets/blogslists.png'
                          alt="Author Image"
                          width={100}
                          height={100}
                          className='w-64 h-64 object-cover'
                        /> 
         
         </div>
         <p className='p-4 px-10'> Design Liberalized Exchange Rate Management</p>
        <div className='flex justify-start py-4 pb-12 px-8'>

        <div className='py-4'>
            <Image
                              src='/assets/blogslists.png'
                              alt="Author Image"
                              width={100}
                              height={100}
                              className='w-10 h-8 object-cover rounded-full '
                            />
        </div>
        <p className='px-4 py-4'>by</p>
          <div className='flex py-3'>
            <p className='mr-4 border-r border-gray-300 pr-4 font-bold opacity-65'>Fred Boone</p>

            <p>Jan 10,2020</p>
          </div>
          </div>
        <div className='flex py-6 px-8 gap-3'>
            <p className='bg-gray-200 rounded-full'> <p className='text-sm px-4 py-1'> UI/UX</p></p>
            <p className='bg-gray-200 rounded-full'><p className='text-sm px-4 py-1'> Development</p></p>
        </div>
        <p className='px-8 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio voluptatum, voluptatibus hic molestiae, harum dolore possimus expedita iusto quod qui officia laborum, tenetur animi asperiores ratione velit. Praesentium, dolores.
        </p>
        <div className="border-b-2 border-blue-950 my-4 opacity-20 py-4 mx-8"></div>
        <div className='flex justify-between px-8 py-4'>
            <p className='text-gray-600'> 2.3k Likes</p>
            <p className='text-indigo-600'>Read More</p>
        </div>
        </div>
  )
}

export default RelatedBlogs


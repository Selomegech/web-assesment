// components/BlogList.tsx
'use client';
import BlogList from '@/components/BlogList';
import { useEffect } from 'react';
import { useAppDispatch ,useAppSelector } from '@/store/hooks';
import Link from 'next/link';

import { fetchBlogs } from '@/store/blogsSlice';

const Bloglist = () => {
  const dispatch = useAppDispatch();
  const { blogs, status, error } = useAppSelector((state:any) => state.blogs);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);

  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'succeeded' && (
        <div className='px-20 p-6'>
        <div className='flex justify-start px-10 gap-x-96'>
          <div><p className='pr-24 font-bold text-2xl'>Blogs</p></div>
          <div className='gap-4 flex'>
              <input type="text" placeholder='Search' className='border-2 opacity-80 border-gray-300 rounded-full placeholder:px-4 '/>
              <button className='bg-indigo-800 rounded-full text-white font-bold h-10 text-sm'> <p className='px-6'>  New Blog </p></button>
          </div>
        </div>
       <BlogList/>

        </div>
      )}
      {status === 'failed' && <div>Error: {error}</div>}
    </div>
  );
};

export default Bloglist;
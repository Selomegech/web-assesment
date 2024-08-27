import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchBlogs } from '@/store/blogsSlice';
import Pagination from './pagination';


interface Blog {
    _id: string;
    image: string;
    title: string;
    description: string;
    author: {
      _id: string;
      name: string;
      email: string;
      image: string;
      role: string;
    } | null;
    isPending: boolean;
    tags: string[];
    likes: number;
    relatedBlogs: string[];
    skills: string[];
    createdAt: string;
    updatedAt: string;
  // Add any other properties your blog has
}


const BlogList = () => {
  const dispatch = useAppDispatch();
  const { blogs, status, error } = useAppSelector((state) => state.blogs);
  const [page, setPage] = React.useState(1);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);


  const startIndex = (page - 1) * 5;
  const endIndex = startIndex + 5;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };


  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'succeeded' && (

        
            <div className='p-12 py-12'>

              {paginatedBlogs.map((blog: Blog) => (
                <Link href={`/${blog._id}`} key={blog._id}>
                <div>
                    <div key={blog._id} className='flex gap-4 py-3 px-8'>
                      <div className='py-1'>
                        <Image
                          src='/assets/blogslists.png'
                          alt="Author Image"
                          width={100}
                          height={100}
                          className='w-14 h-14 object-cover rounded-full'
                        />
                      </div>
                      <div>
                        <p className='text-xl font-bold py-1'>{blog.author?.name || 'Anonymous'}</p>
                        <p className='opacity-50 text-sm'>{blog.author?.role || 'SOFTWARE ENGINEER'}</p>
                      </div>
                      <div className='py-3'>
                        <p className='opacity-50 text-sm'>{new Date(blog.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div  className='flex justify-between px-8'>
                      <div className='max-w-[800px]'>
                        <p className='text-2xl font-bold py-1'>{blog.title}</p>
                        <p className='text-sm opacity-65 py-4'>{blog.description}</p>
                        <div className='flex py-6  gap-3'>
            <p className='bg-gray-200 rounded-full opacity-85'> <p className='text-sm px-4 py-1 opacity-55'> UI/UX</p></p>
            <p className='bg-gray-200 rounded-full opacity-85'><p className='text-sm px-4 py-1 opacity-55'> Development</p></p>
        </div>
                      </div>
                      
                      <div>
                        <Image
                          src={blog.image || '/assets/blogslists.png'}
                          alt="Blog Image"
                          width={100}
                          height={100}
                          className='w-40 h-40 object-cover rounded-md'
                        />
                      </div>
                    </div>
                </div>
            
            </Link>
                ))}
                </div>
        
      )}
      {status === 'failed' && <div>Error: {error}</div>}
      <Pagination
        currentPage={page}
        totalItems={blogs.length}
        itemsPerPage={5}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default BlogList
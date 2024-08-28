import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
}

const BlogList = () => {
  const dispatch = useAppDispatch();
  const { blogs, status, error } = useAppSelector((state) => state.blogs);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs()); // This will now load from the JSON file
    }
  }, [status, dispatch]);

  const startIndex = (page - 1) * 5;
  const endIndex = startIndex + 5;
  const paginatedBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(1); // Reset to the first page when searching
  };

  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'succeeded' && (
        <div>
          <div className='gap-4 flex justify-center'>
            <input
              type="text"
              placeholder='Search'
              value={searchTerm}
              className='border-2 opacity-80 border-gray-300 rounded-full placeholder:px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={handleSearch}
            />
            <Link href="/new">
              <button className='bg-indigo-800 rounded-full text-white font-bold h-10 text-sm'>
                <p className='px-6'>New Blog</p>
              </button>
            </Link>
          </div>
          <div className='p-12 py-12'>
            {paginatedBlogs.map((blog: Blog) => (
              <Link href={`/${blog._id}`} key={blog._id}>
                <div>
                  <div className='flex gap-4 py-3 px-8'>
                    <div className='py-1'>
                      <Image
                        src={blog.author?.image || '/assets/blogslists.png'}
                        alt="Author Image"
                        width={100}
                        height={100}
                        className='w-14 h-14 object-cover rounded-full'
                      />
                    </div>
                    <div>
                      <p className='text-xl font-bold py-1'>{blog.author?.name || 'Anonymous'}</p>
                      <p className='opacity-50 text-sm'>{blog.author?.role || 'Unknown Role'}</p>
                    </div>
                    <div className='py-3'>
                      <p className='opacity-50 text-sm'>{new Date(blog.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className='flex justify-between px-8'>
                    <div className='max-w-[800px]'>
                      <p className='text-2xl font-bold py-1'>{blog.title}</p>
                      <p className='text-sm opacity-65 py-4'>{blog.description}</p>
                      <div className='flex py-6 gap-3'>
                        {blog.tags.map((tag, index) => (
                          <p key={index} className='bg-gray-200 rounded-full opacity-85'>
                            <span className='text-sm px-4 py-1 opacity-55'>{tag}</span>
                          </p>
                        ))}
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
  );
};

export default BlogList;
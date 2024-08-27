// components/BlogPost.tsx
'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Image from 'next/image';
import { fetchBlog } from '@/store/blogSlice';
import RelatedBlogs from '@/components/RelatedBlogs';
interface BlogPostProp {
  params: { id?: string };
}
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


const BlogPost = ({ params }: BlogPostProp) => {


  const dispatch = useAppDispatch();
  const { blog, status, error } = useAppSelector((state:any) => state.blog);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlog(params.id || ''));
    }
  }, [status, dispatch, params.id]);

  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'succeeded' && blog && (
        <div className='p-12 items-center'>
         <div className='flex justify-center' >
          <div className=''>
            <img src={blog.image} alt={blog.title} className='max-h-[400px] object-contain' />
          </div>
         
         </div>
        <div className='flex flex-col  items-center py-8 pb-12 '>
        <Image
                          src='/assets/blogslists.png'
                          alt="Author Image"
                          width={100}
                          height={100}
                          className='w-14 h-14 object-cover rounded-full'
                        /> 
          <div className='flex py-3'>
            <p className='mr-4 border-r border-gray-300 pr-4 text-sm'> {blog.author?.name || 'Anonymous'}</p>

            <p className='text-sm' >SOFTWARE ENGINEER</p>
          </div>
        <p className='text-sm'>{blog.author?.email || 'no email address'}</p>

        </div>

        <div className='max-w-[1100px] mx-auto '>
          <p className='text-xl  pb-16 font-semibold'>
            {blog.description}
          </p>
        <p className='pb-8 '>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum officia laborum consectetur temporibus voluptates dolorum, quibusdam ratione accusantium quas similique quos suscipit voluptas blanditiis nihil natus, repellendus ducimus. Ad, facere?
        </p>
        <p className='pb-8 '>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum officia laborum consectetur temporibus voluptates dolorum, quibusdam ratione accusantium quas similique quos suscipit voluptas blanditiis nihil natus, repellendus ducimus. Ad, facere?
        </p>
        <p className='pb-16'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum officia laborum consectetur temporibus voluptates dolorum, quibusdam ratione accusantium quas similique quos suscipit voluptas blanditiis nihil natus, repellendus ducimus. Ad, facere?
        </p>
        </div>
        </div>
      )}
      <div className='py-16'>
        <p className='px-44 font-bold'>Related Blogs</p>
      <div className='flex justify-evenly py-8'>
      <RelatedBlogs/>
      <RelatedBlogs/>
      <RelatedBlogs/>
      </div>
      </div>
      
      {status === 'failed' && <div>Error: {error}</div>}
    </div>
  );
};

export default BlogPost;
// components/BlogPost.tsx
'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { fetchBlog } from '@/store/blogSlice';

const BlogPost = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const { blog, status, error } = useAppSelector((state:any) => state.blog);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlog(id));
    }
  }, [status, dispatch, id]);

  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'succeeded' && blog && (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
      )}
      {status === 'failed' && <div>Error: {error}</div>}
    </div>
  );
};

export default BlogPost;
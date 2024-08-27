// components/BlogList.tsx
import { useEffect } from 'react';
import { useAppDispatch ,useAppSelector } from '@/store/hooks';


import { fetchBlogs } from '@/store/blogsSlice';

const BlogList = () => {
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
        <ul>
          {/* {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))} */}
        </ul>
      )}
      {status === 'failed' && <div>Error: {error}</div>}
    </div>
  );
};

export default BlogList;
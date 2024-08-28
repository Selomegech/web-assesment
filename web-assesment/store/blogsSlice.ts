// store/blogsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '.';
import data from './data.json'; // Adjust the path to your JSON file

// Define the shape of your blog data
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

// Define the shape of the blogs state
interface BlogsState {
  blogs: Blog[];
  selectedBlog: Blog | null; // For the individual blog
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BlogsState = {
  blogs: [],
  selectedBlog: null, // Initialize selectedBlog as null
  status: 'idle',
  error: null,
};

// Fetch all blogs
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  return new Promise<Blog[]>((resolve) => {
    setTimeout(() => {
      resolve(data as Blog[]);
    }, 1000);
  });
});

// Fetch a single blog by ID
export const fetchBlogById = createAsyncThunk('blogs/fetchBlogById', async (id: string) => {
  return new Promise<Blog | null>((resolve) => {
    setTimeout(() => {
      const blog = (data as Blog[]).find((blog) => blog._id === id) || null;
      resolve(blog);
    }, 1000);
  });
});

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(fetchBlogById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedBlog = action.payload; // Set the selected blog
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch blog';
      });
  },
});

export default blogsSlice.reducer;
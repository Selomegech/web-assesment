import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Author {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}

interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: Author;
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: string[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
}

interface BlogState {
  blog: Blog | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BlogState = {
  blog: null,
  status: 'idle',
  error: null,
};

export const fetchBlog = createAsyncThunk('blog/fetchBlog', async (id: string) => {
  const response = await fetch(`https://a2sv-backend.onrender.com/api/blogs/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
});

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlog.fulfilled, (state, action: PayloadAction<Blog>) => {
        state.status = 'succeeded';
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default blogSlice.reducer;
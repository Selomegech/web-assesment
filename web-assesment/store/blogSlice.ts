// store/blogSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '.';

interface BlogState {
  blog: Blog | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

interface Blog {
  id: string;
  title: string;
  content: string;
  // Add any other properties your blog has
}

const initialState: BlogState = {
  blog: null,
  status: 'idle',
  error: null,
};

export const fetchBlog = createAsyncThunk('blog/fetchBlog', async (id: string) => {
  const response = await fetch(`https://a2sv-backend.onrender.com/api/blogs/${id}`);
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
      .addCase(fetchBlog.fulfilled, (state, action) => {
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
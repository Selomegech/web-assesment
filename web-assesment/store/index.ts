import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from './blogsSlice';
import blogReducer from './blogSlice';


const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
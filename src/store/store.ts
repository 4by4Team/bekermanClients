import { configureStore } from '@reduxjs/toolkit';
import testimonialSlice from './testimonialSlice';

export const store = configureStore({
  reducer: {
    testimonials: testimonialSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

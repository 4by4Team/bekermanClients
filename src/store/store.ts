import { configureStore } from "@reduxjs/toolkit";
import testimonialSlice from "./testimonialSlice";
import articleReducer from "./articleSlice";

export const store = configureStore({
  reducer: {
    testimonials: testimonialSlice,
    articles: articleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import testimonialSlice from "./testimonialSlice";
import articleReducer from "./articleSlice";
import courseReducer from "./coursesSlice";
export const store = configureStore({
  reducer: {
    testimonials: testimonialSlice,
    articles: articleReducer,
    courses: courseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

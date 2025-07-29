import { configureStore } from "@reduxjs/toolkit";
import testimonialSlice from "./testimonialSlice";
import articleReducer from "./articleSlice";
import courseReducer from "./coursesSlice";
import applicantReducer from "./applicantSlice";
import userReducer from "./userSlice";
import authReducer from "./authSlice";
export const store = configureStore({
  reducer: {
    testimonials: testimonialSlice,
    articles: articleReducer,
    courses: courseReducer,
    applicants: applicantReducer,
    users: userReducer,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

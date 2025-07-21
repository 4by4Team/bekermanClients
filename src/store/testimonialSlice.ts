// store/slices/testimonialSlice.ts
import { Testimonial } from "@/types/Testimonial";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchTestimonials = createAsyncThunk(
  "testimonials/fetch",
  async () => {
    const res = await axios.get<Testimonial[]>(`${BASE_URL}/testimonies`);
    return res.data;
  }
);

interface TestimonialsState {
  data: Testimonial[];
  loading: boolean;
  error: string | null;
}

const initialState: TestimonialsState = {
  data: [],
  loading: false,
  error: null,
};

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "שגיאה בעת שליפת נתונים";
      });
  },
});

export default testimonialSlice.reducer;

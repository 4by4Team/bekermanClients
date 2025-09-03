// src/store/testimonialSlice.ts
import { Testimonial } from "@/types/TestimonialType";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

// --- CRUD Thunks --- //
export const fetchTestimonials = createAsyncThunk(
  "testimonials/fetch",
  async () => {
    const res = await axios.get<Testimonial[]>(`${BASE_URL}/testimonies`);
    return res.data;
  }
);

export const addTestimonial = createAsyncThunk(
  "testimonials/add",
  async (testimonial: Partial<Testimonial>) => {
    console.log("Adding testimonial:", testimonial);
    const res = await axios.post<Testimonial>(
      `${BASE_URL}/testimonies`,
      testimonial
    );
    return res.data;
  }
);

export const updateTestimonial = createAsyncThunk(
  "testimonials/update",
  async (testimonial: Partial<Testimonial>) => {
    console.log("Updating testimonial:", testimonial);

    const res = await axios.put<Testimonial>(
      `${BASE_URL}/testimonies/${testimonial.id}`,
      testimonial
    );
    return res.data;
  }
);

export const deleteTestimonial = createAsyncThunk(
  "testimonials/delete",
  async (id: string) => {
    await axios.delete(`${BASE_URL}/testimonies/${id}`);
    return id;
  }
);

// --- Slice --- //
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
        // console.log("AFTER FETCH", state.data);
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "שגיאה בעת שליפת נתונים";
      })

      // --- ADD --- //
      .addCase(addTestimonial.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })

      // --- UPDATE --- //
      .addCase(updateTestimonial.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (t) => t.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
        state.loading = false;

      })
      .addCase(deleteTestimonial.fulfilled, (state, action) => {
        console.log("BEFORE DELETE", state.data);
        state.loading = false;
        state.data = state.data.filter((t) => String(t.id) !== String(action.payload));
        console.log("AFTER DELETE", state.data);

      });


  },
});

export default testimonialSlice.reducer;

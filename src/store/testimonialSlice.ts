import { Testimonial } from '@/types/TestimonialType';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchTestimonials = createAsyncThunk(
  "testimonials/fetch",
  async () => {
    const res = await axios.get<Testimonial[]>(`${BASE_URL}/testimonies`);
    return res.data;
  }
);

export const createTestimonial = createAsyncThunk(
  'testimonials/create',
  async (newTestimony: Omit<Testimonial, 'id' | 'createdAt' | 'updatedAt'>) => {
    const res = await axios.post<Testimonial>(`${BASE_URL}/testimonies`, newTestimony);
    return res.data;
  }
);

export const updateTestimonial = createAsyncThunk(
  'testimonials/update',
  async ({ id, data }: { id: number; data: Partial<Testimonial> }) => {
    const res = await axios.put<Testimonial>(`${BASE_URL}/testimonies/${id}`, data);
    return res.data;
  }
);

export const deleteTestimonial = createAsyncThunk(
  'testimonials/delete',
  async (id: number) => {
    await axios.delete(`${BASE_URL}/testimonies/${id}`);
    return id;
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
      }).addCase(createTestimonial.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTestimonial.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(createTestimonial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "שגיאה בעת יצירה";
      })

      .addCase(updateTestimonial.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTestimonial.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.data.findIndex(t => t.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(updateTestimonial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "שגיאה בעת עדכון";
      })

      .addCase(deleteTestimonial.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTestimonial.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter(t => t.id !== action.payload);
      })
      .addCase(deleteTestimonial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "שגיאה בעת מחיקה";
      });
  },
});

export default testimonialSlice.reducer;

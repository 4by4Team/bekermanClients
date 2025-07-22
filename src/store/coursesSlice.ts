import { Course } from '@/types/CoursesType';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchCourses = createAsyncThunk(
  'courses/fetchAll',
  async () => {
    const res = await axios.get<Course[]>(`${BASE_URL}/courses`);
    return res.data;
  }
);

export const fetchCourseById = createAsyncThunk(
  'courses/fetchById',
  async (id: string) => {
    const res = await axios.get<Course>(`${BASE_URL}/courses/${id}`);
    return res.data;
  }
);

interface CoursesState {
  data: Course[];
  selectedCourse: Course | null;
  loading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  data: [],
  selectedCourse: null,
  loading: false,
  error: null,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'שגיאה בעת שליפת קורסים';
      })
      .addCase(fetchCourseById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedCourse = null;
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCourse = action.payload;
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'שגיאה בעת שליפת קורס';
        state.selectedCourse = null;
      });
  },
});

export default coursesSlice.reducer;
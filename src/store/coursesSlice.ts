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
    console.log(id, BASE_URL);
    const res = await axios.get<Course>(`${BASE_URL}/courses/${id}`);
    return res.data;
  }
);

export const createCourse = createAsyncThunk(
  'courses/create',
  async (newCourse: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>) => {
    const res = await axios.post<Course>(`${BASE_URL}/courses`, newCourse);
    return res.data;
  }
);

export const updateCourse = createAsyncThunk(
  'courses/update',
  async ({ id, data }: { id: number; data: Partial<Course> }) => {
    const res = await axios.put<Course>(`${BASE_URL}/courses/${id}`, data);
    return res.data;
  }
);

export const deleteCourse = createAsyncThunk(
  'courses/delete',
  async (id: number) => {
    await axios.delete(`${BASE_URL}/courses/${id}`);
    return id;
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
      })
      .addCase(createCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'שגיאה בעת יצירת קורס';
      })// Update course
      .addCase(updateCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.data.findIndex(c => c.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
        // optional: also update selectedCourse if it's the same
        if (state.selectedCourse?.id === action.payload.id) {
          state.selectedCourse = action.payload;
        }
      })
      .addCase(updateCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'שגיאה בעת עדכון קורס';
      })
      .addCase(deleteCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter(course => course.id !== action.payload);
        if (state.selectedCourse?.id === action.payload) {
          state.selectedCourse = null;
        }
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'שגיאה בעת מחיקת קורס';
      });
    ;
  },
});

export default coursesSlice.reducer;
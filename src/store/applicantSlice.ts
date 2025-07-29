import { Applicant } from '@/types/applicantType';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchApplicants = createAsyncThunk(
  'applicants/fetchAll',
  async () => {
    const res = await axios.get<Applicant[]>(`${BASE_URL}/applicants`);
    return res.data;
  }
);

export const createApplicant = createAsyncThunk(
  'applicants/create',
  async (newApplicant: Omit<Applicant, 'id' | 'appliedAt' | 'updatedAt' | 'user' | 'course'>) => {
    const res = await axios.post<Applicant>(`${BASE_URL}/applicants`, newApplicant);
    return res.data;
  }
);

export const updateApplicant = createAsyncThunk(
  'applicants/update',
  async ({ id, data }: { id: number; data: Partial<Applicant> }) => {
    const res = await axios.put<Applicant>(`${BASE_URL}/applicants/${id}`, data);
    return res.data;
  }
);

export const deleteApplicant = createAsyncThunk(
  'applicants/delete',
  async (id: number) => {
    await axios.delete(`${BASE_URL}/applicants/${id}`);
    return id;
  }
);

interface ApplicantsState {
  data: Applicant[];
  loading: boolean;
  error: string | null;
}

const initialState: ApplicantsState = {
  data: [],
  loading: false,
  error: null,
};

const applicantSlice = createSlice({
  name: 'applicants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplicants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApplicants.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchApplicants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch applicants';
      })
      .addCase(createApplicant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createApplicant.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(createApplicant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create applicant';
      })
      .addCase(updateApplicant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateApplicant.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.data.findIndex(app => app.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(updateApplicant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update applicant';
      })
      .addCase(deleteApplicant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteApplicant.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter(app => app.id !== action.payload);
      })
      .addCase(deleteApplicant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete applicant';
      });
  },
});

export default applicantSlice.reducer;

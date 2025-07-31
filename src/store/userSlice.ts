import { User } from '@/types/userType';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async () => {
        const res = await axios.get<User[]>(`${BASE_URL}/users`);
        return res.data;
    }
);

export const fetchUserById = createAsyncThunk(
    'users/fetchById',
    async (id: number) => {
        const res = await axios.get<User>(`${BASE_URL}/users/${id}`);
        return res.data;
    }
);

export const updateUser = createAsyncThunk(
    'users/update',
    async ({ id, data }: { id: number; data: Partial<User> }) => {
        const res = await axios.put<User>(`${BASE_URL}/users/${id}`, data);
        return res.data;
    }
);

export const deleteUser = createAsyncThunk(
    'users/delete',
    async (id: number) => {
        await axios.delete(`${BASE_URL}/users/${id}`);
        return id;
    }
);

interface UsersState {
    data: User[];
    selectedUser: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    data: [],
    selectedUser: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch users';
            })
            .addCase(fetchUserById.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.selectedUser = null;
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedUser = action.payload;
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch user';
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                const idx = state.data.findIndex(u => u.id === action.payload.id);
                if (idx !== -1) {
                    state.data[idx] = action.payload;
                }
                if (state.selectedUser?.id === action.payload.id) {
                    state.selectedUser = action.payload;
                }
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to update user';
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = state.data.filter(user => user.id !== action.payload);
                if (state.selectedUser?.id === action.payload) {
                    state.selectedUser = null;
                }
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to delete user';
            });
    },
});

export default userSlice.reducer;

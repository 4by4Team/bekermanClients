import { User } from '@/types/userType';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const register = createAsyncThunk(
    'auth/register',
    async (userData: Partial<User>) => {
        const res = await axios.post<User>(`${BASE_URL}/auth/register`, userData);
        return res.data;
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }: { email: string; password: string }) => {
        const res = await axios.post<User>(`${BASE_URL}/auth/login`, { email, password });
        return res.data;
    }
);

export const changePassword = createAsyncThunk(
    'auth/changePassword',
    async ({
        id,
        currentPassword,
        newPassword,
    }: {
        id: number;
        currentPassword: string;
        newPassword: string;
    }) => {
        await axios.put(`${BASE_URL}/auth/change-password/${id}`, {
            currentPassword,
            newPassword,
        });
        return true;
    }
);

interface AuthState {
    currentUser: User | null;
    loading: boolean;
    error: string | null;
    passwordChanged: boolean;
}

const initialState: AuthState = {
    currentUser: null,
    loading: false,
    error: null,
    passwordChanged: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.currentUser = null;
        },
        resetAuthError(state) {
            state.error = null;
        },
        resetPasswordChange(state) {
            state.passwordChanged = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.currentUser = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Registration failed';
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.currentUser = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Login failed';
            })
            .addCase(changePassword.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.passwordChanged = false;
            })
            .addCase(changePassword.fulfilled, (state) => {
                state.loading = false;
                state.passwordChanged = true;
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Password change failed';
            });
    },
});

export const { logout, resetAuthError, resetPasswordChange } = authSlice.actions;
export default authSlice.reducer;

import { User } from '@/types/userType';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { log } from 'console';

const BASE_URL = import.meta.env.VITE_API_URL;

export const register = createAsyncThunk(
    'auth/register',
    async (userData: Partial<User>) => {
        console.log("Registering user with data:", userData);
        const res = await axios.post<User>(`${BASE_URL}/auth/register`, userData);
        console.log("res.data: ", res.data);
        if (res.data && (res.data as any).token) {
            sessionStorage.setItem('token', (res.data as any).token);
        }
        const firstName = (res.data as any).user?.firstName;
        if (firstName) {
            sessionStorage.setItem('firstName', firstName);
        }
        return res.data;
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }: { email: string; password: string }) => {
        const res = await axios.post<User>(`${BASE_URL}/auth/login`, { email, password });
        console.log("res.data: ", res.data);
        if (res.data && (res.data as any).token) {
            sessionStorage.setItem('token', (res.data as any).token);
        }
        const firstName = (res.data as any).user?.firstName;
        if (firstName) {
            sessionStorage.setItem('firstName', firstName);
        }
        return res.data;
    }
);

// Google login - redirect flow
export const googleLoginRedirect = () => {
    window.location.href = `${BASE_URL.replace('/api', '')}/api/auth/google`;
};

// Google login - callback handler (to be called after redirect)
export const googleLoginCallback = createAsyncThunk(
    "auth/googleLoginCallback",
    async (data: { token: string; user: User }, thunkAPI) => {
        try {
            // שמור את כל נתוני המשתמש והטוקן
            if (data.token) {
                sessionStorage.setItem("token", data.token);
            }
            if (data.user) {
                Object.entries(data.user).forEach(([key, value]) => {
                    if (typeof value === "string" || typeof value === "number") {
                        sessionStorage.setItem(key, value.toString());
                    }
                });
            }
            return { token: data.token, user: data.user };
        } catch (err: any) {
            return thunkAPI.rejectWithValue("Google login failed");
        }
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
                console.log('Redux: User set after login:', action.payload);
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Login failed';
            })
            .addCase(googleLoginCallback.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(googleLoginCallback.fulfilled, (state, action) => {
                state.loading = false;
                state.currentUser = action.payload.user;
            })
            .addCase(googleLoginCallback.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Google login failed';
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

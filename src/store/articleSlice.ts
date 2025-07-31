import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Article, Category } from "../types/article.type";
import axios from "axios";


const BASE_URL = import.meta.env.VITE_API_URL;
interface ArticlesState {
  articles: Article[];
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: ArticlesState = {
  articles: [],
  categories: [],
  loading: false,
  error: null,
};

export const fetchArticles = createAsyncThunk<Article[]>(
  "articles/fetchArticles",
  async () => {
    const response = await axios.get(`${BASE_URL}/articles`);
    return response.data;
  }
);

export const fetchCategories = createAsyncThunk<Category[]>(
  "articles/fetchCategories",
  async () => {
    const response = await axios.get(`${BASE_URL}/categories`);
    return response.data;
  }
);

export const createArticle = createAsyncThunk(
  'articles/create',
  async (newArticle: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>) => {
    const response = await axios.post<Article>(`${BASE_URL}/articles`, newArticle);
    return response.data;
  }
);

export const updateArticle = createAsyncThunk(
  'articles/update',
  async ({ id, data }: { id: number; data: Partial<Article> }) => {
    const response = await axios.put<Article>(`${BASE_URL}/articles/${id}`, data);
    return response.data;
  }
);

export const deleteArticle = createAsyncThunk(
  'articles/delete',
  async (id: number) => {
    await axios.delete(`${BASE_URL}/articles/${id}`);
    return id; // מחזירים רק את ה-id כדי להסיר מהסטייט
  }
);


const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch articles";
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch categories";
      })
      .addCase(createArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.articles.push(action.payload);
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'שגיאה ביצירת מאמר';
      })
      .addCase(updateArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateArticle.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.articles.findIndex(a => a.id === action.payload.id);
        if (index !== -1) {
          state.articles[index] = action.payload;
        }
      })
      .addCase(updateArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'שגיאה בעדכון מאמר';
      })
      .addCase(deleteArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = state.articles.filter(article => article.id !== action.payload);
      })
      .addCase(deleteArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'שגיאה במחיקת מאמר';
      });
  },
});

export default articleSlice.reducer;


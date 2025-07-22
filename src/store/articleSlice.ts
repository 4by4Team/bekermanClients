import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "../types/article.type";
import axios from "axios";
import { Category } from "@/types/category.type";


const BASE_URL = import.meta.env.VITE_API_URL;
interface ArticlesState {
  articles: Article[];
  articleById: Article;
  articlesByCategory: Article[];
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: ArticlesState = {
  articles: [],
  articleById: null,
  articlesByCategory: [],
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
export const fetchArticleById = createAsyncThunk<Article, number>(
  "articles/fetchArticleById",
  async (id: number) => {
    const response = await axios.get(`${BASE_URL}/articles/${id}`);
    return response.data;
  }
);
export const fetchArticleByCategory = createAsyncThunk<Article[], number>(
  "articles/fetchArticleByCategory",
  async (id: number) => {
    const response = await axios.get(`${BASE_URL}/articles/by-category/${id}`);
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
      .addCase(fetchArticleByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticleByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.articlesByCategory = action.payload;
      })
      .addCase(fetchArticleByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch categories";
      })
      .addCase(fetchArticleById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.loading = false;
        state.articleById = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch categories";
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
      });
  },
});

export default articleSlice.reducer;


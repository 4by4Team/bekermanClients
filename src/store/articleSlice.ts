import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Article, Category } from "../types/article.type";
import axios from "axios";

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
    const response = await axios.get("/api/articles");
    return response.data;
  }
);

export const fetchCategories = createAsyncThunk<Category[]>(
  "articles/fetchCategories",
  async () => {
    const response = await axios.get("/api/categories");
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


import React, { useState, memo, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Clock,
  User,
  ArrowLeft,
  BookOpen,
  Utensils,
  Dumbbell,
  Brain,
  Baby,
  Users,
  Shield,
  Eye,
  Heart,
  Activity,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Article, Category } from "@/types/article.type";
import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "../store/store";
import { fetchArticles, fetchCategories } from "@/store/articleSlice";
import { getArticles, getCategories } from "@/lib/utils";

const BackgroundElements = memo(() => (
  <div className="absolute inset-0">
    <div
      className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-float"
      style={{ animationDelay: "0s" }}
    />
    <div
      className="absolute bottom-32 left-20 w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-3xl animate-float"
      style={{ animationDelay: "3s" }}
    />
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-500/5 rounded-full blur-3xl animate-float"
      style={{ animationDelay: "6s" }}
    />
    <div
      className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-bounce-subtle"
      style={{ animationDelay: "1s" }}
    />
    <div
      className="absolute top-3/4 right-1/4 w-3 h-3 bg-violet-400 rounded-full animate-bounce-subtle"
      style={{ animationDelay: "2s" }}
    />
    <div
      className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gray-400 rounded-full animate-bounce-subtle"
      style={{ animationDelay: "4s" }}
    />
  </div>
));

const HeroSection = memo(() => (
  <section className="py-16 bg-gradient-to-br from-emerald-50/40 via-white/60 to-violet-50/40 relative z-10">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-emerald-500/80 via-violet-500/80 to-gray-600/80 bg-clip-text text-transparent">
            מאמרים מקצועיים
          </span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          גלה מאמרים מקצועיים בתחום התזונה והפיזיותרפיה, שנכתבו על ידי מומחים
          מובילים
        </p>
      </div>
    </div>
  </section>
));

interface SidebarProps {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  allArticlesCount: number;
}

const Sidebar = memo(
  ({
    categories,
    selectedCategory,
    setSelectedCategory,
    allArticlesCount,
  }: SidebarProps) => (
    <div className="bg-gradient-to-br from-white/85 via-gray-50/70 to-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 sticky top-24 border border-white/60">
      <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
        <BookOpen className="w-5 h-5 ml-2 text-violet-600" />
        נושאים
      </h3>
      <div className="space-y-3">
        <button
          onClick={() => setSelectedCategory("כל הנושאים")}
          className={`w-full text-right p-4 rounded-xl transition-all duration-500 flex justify-between items-center group transform hover:scale-[1.02] ${
            selectedCategory === "כל הנושאים"
              ? "bg-gradient-to-r from-violet-400/60 to-emerald-400/60 text-white shadow-lg shadow-violet-200/50"
              : "hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-violet-50/40 text-gray-700 hover:text-violet-700 bg-gradient-to-r from-gray-50/50 to-white/80 border border-gray-100/60"
          }`}
        >
          <span className="text-sm font-medium bg-white/20 rounded-full px-2 py-1">
            {allArticlesCount}
          </span>
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <BookOpen className="w-4 h-4" />
            <span className="font-medium">כל הנושאים</span>
          </div>
        </button>
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`w-full text-right p-4 rounded-xl transition-all duration-500 flex justify-between items-center group transform hover:scale-[1.02] ${
                selectedCategory === category.name
                  ? "bg-gradient-to-r from-violet-400/60 to-emerald-400/60 text-white shadow-lg shadow-violet-200/50"
                  : "hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-violet-50/40 text-gray-700 hover:text-violet-700 bg-gradient-to-r from-gray-50/50 to-white/80 border border-gray-100/60"
              }`}
            >
              <span className="text-sm font-medium bg-white/20 rounded-full px-2 py-1">
                {category.count}
              </span>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                {/* <IconComponent className="w-4 h-4" /> */}
                <span className="font-medium">{category.name}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  )
);

interface ArticlesGridProps {
  articles: Article[];
  selectedCategory: string;
}

const ArticlesGrid = memo(
  ({ articles, selectedCategory }: ArticlesGridProps) => (
    <div className="lg:w-3/4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {selectedCategory === "כל הנושאים" ? "כל המאמרים" : selectedCategory}
        </h2>
        <p className="text-gray-600">{articles.length} מאמרים נמצאו</p>
      </div>
      <div className="space-y-6">
        {articles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} />
        ))}
      </div>
    </div>
  )
);

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState("כל הנושאים");
  const [categories, setCategories] = useState<Category[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  // const dispatch = useDispatch<AppDispatch>();
  // const { articles, categories, loading, error } = useSelector(
  //   (state: RootState) => state.articles
  // );

  useEffect(() => {
    getCategories().then(setCategories);
    getArticles().then(setArticles);
    console.log(articles);
    console.log(categories);
  }, []);

  const filteredArticles =
    selectedCategory === "כל הנושאים"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50/70 via-white to-gray-100/70">
      {/* <BackgroundElements /> */}
      <HeroSection />
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <Sidebar
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                allArticlesCount={articles.length}
              />
            </div>
            <ArticlesGrid
              articles={filteredArticles}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;

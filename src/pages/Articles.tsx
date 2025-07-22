import { useState, memo, useEffect } from "react";
import {
  BookOpen,
} from "lucide-react";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Article } from "@/types/article.type";
import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "../store/store";
import { fetchArticleByCategory, fetchArticles, fetchCategories } from "@/store/articleSlice";
import { Category } from "@/types/category.type";


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
  selectedCategory: number;
  handleCategoryClick: (id: number) => void;
  allArticlesCount: number;
}

const Sidebar = memo(
  ({
    categories,
    selectedCategory,
    allArticlesCount,
    handleCategoryClick,
  }: SidebarProps) => (
    <div className="bg-gradient-to-br from-white/85 via-gray-50/70 to-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 sticky top-24 border border-white/60">
      <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
        <BookOpen className="w-5 h-5 ml-2 text-violet-600" />
        נושאים
      </h3>
      <div className="space-y-3">
        <button onClick={() => handleCategoryClick(0)}
          className={`w-full text-right p-4 rounded-xl transition-all duration-500 flex justify-between items-center group transform hover:scale-[1.02] ${selectedCategory === 0
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
        {categories.map((category:Category) => {
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`w-full text-right p-4 rounded-xl transition-all duration-500 flex justify-between items-center group transform hover:scale-[1.02] ${selectedCategory === category.id
                ? "bg-gradient-to-r from-violet-400/60 to-emerald-400/60 text-white shadow-lg shadow-violet-200/50"
                : "hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-violet-50/40 text-gray-700 hover:text-violet-700 bg-gradient-to-r from-gray-50/50 to-white/80 border border-gray-100/60"
                }`}
            >
              {/* <span className="text-sm font-medium bg-white/20 rounded-full px-2 py-1">
                {category.count}
              </span> */}
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="font-medium">{category.categoryName}</span>
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
  selectedCategory: {
    id: number;
    name: string;
  };
}


const ArticlesGrid = memo(
  ({ articles, selectedCategory }: ArticlesGridProps) => (
    <div className="lg:w-3/4">
      <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedCategory.name}
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
  const [selectedCategory, setSelectedCategory] = useState<{ id: number; name: string }>({
    id: 0,
    name: "כל הנושאים",
  });
  const dispatch = useDispatch<AppDispatch>();
  const { articles, categories, articlesByCategory } = useSelector(
    (state: RootState) => state.articles
  );
  useEffect(() => {
    dispatch(fetchArticles());
    dispatch(fetchCategories());
  }, [dispatch]);
const handleCategoryClick = (id: number) => {
  if (id === 0) {
    setSelectedCategory({ id: 0, name: "כל הנושאים" });
    dispatch(fetchArticles());
  } else {
    // אם עדיין אין קטגוריות - חכה רגע
    if (!categories || categories.length === 0) return;

    const selected = categories.find((c) => c.id === id);
    if (selected) {
      setSelectedCategory({ id: selected.id, name: selected.categoryName });
      dispatch(fetchArticleByCategory(id));
    }
  }
};


  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50/70 via-white to-gray-100/70">
      <HeroSection />
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <Sidebar
                categories={categories}
                selectedCategory={selectedCategory.id}
                handleCategoryClick={handleCategoryClick}
                allArticlesCount={articles.length}
              />
            </div>
            <ArticlesGrid
              articles={selectedCategory.id === 0 ? articles : articlesByCategory}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;

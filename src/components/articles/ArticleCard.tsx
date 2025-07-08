import React, { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export interface ArticleType {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
}

interface ArticleCardProps {
  article: ArticleType;
  index: number;
}

const ArticleImage = memo(
  ({
    image,
    title,
    category,
  }: {
    image: string;
    title: string;
    category: string;
  }) => (
    <div className="md:w-1/3 relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full md:h-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-4 right-4 bg-gradient-to-r from-white/95 via-gray-50/98 to-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-violet-700 border border-violet-200/60">
        {category}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/70 to-violet-500/70"></div>
    </div>
  )
);

const ArticleTitle = memo(({ title }: { title: string }) => (
  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-violet-700 transition-colors line-clamp-2 leading-tight">
    {title}
  </h3>
));

const ArticleExcerpt = memo(({ excerpt }: { excerpt: string }) => (
  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
    {excerpt}
  </p>
));

const ArticleMeta = memo(
  ({ author, readTime }: { author: string; readTime: string }) => (
    <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pt-3 border-t border-gray-100/60">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <User className="w-4 h-4 text-violet-500" />
        <span className="font-medium">{author}</span>
      </div>
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <Clock className="w-4 h-4 text-violet-500" />
        <span>{readTime}</span>
      </div>
    </div>
  )
);

const ArticleReadButton = memo(({ id }: { id: number }) => (
  <Link to={`/article/${id}`}>
    <Button className="w-full bg-gradient-to-r from-violet-400/80 to-emerald-400/80 hover:from-violet-500/80 hover:to-emerald-500/80 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
      קרא מאמר מלא
      <ArrowLeft className="w-4 h-4 mr-2" />
    </Button>
  </Link>
));

export const ArticleCard = memo(({ article, index }: ArticleCardProps) => (
  <Card
    className="group hover:shadow-2xl transition-all duration-500 animate-fade-in-up border-0 shadow-lg hover:scale-[1.01] overflow-hidden bg-gradient-to-r from-white/90 via-gray-50/50 to-white/90 backdrop-blur-sm border border-white/60"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="flex flex-col md:flex-row h-full">
      <ArticleImage
        image={article.image}
        title={article.title}
        category={article.category}
      />
      <div className="md:w-2/3 flex flex-col justify-between">
        <CardContent className="p-6 bg-gradient-to-br from-white/80 via-gray-50/30 to-white/80 flex-1">
          <ArticleTitle title={article.title} />
          <ArticleExcerpt excerpt={article.excerpt} />
          <ArticleMeta author={article.author} readTime={article.readTime} />
          <ArticleReadButton id={article.id} />
        </CardContent>
      </div>
    </div>
  </Card>
));

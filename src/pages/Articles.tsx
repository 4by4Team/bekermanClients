
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, User, ArrowLeft, BookOpen, Utensils, Dumbbell, Brain, Baby, Users, Shield, Eye, Heart, Activity, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState('כל הנושאים');

  const categories = [
    { id: 1, name: 'תזונה בסיסית', count: 12, icon: Utensils },
    { id: 2, name: 'תזונת ספורט', count: 10, icon: Dumbbell },
    { id: 3, name: 'בריאות נפשית', count: 8, icon: Brain },
    { id: 4, name: 'תזונת ילדים', count: 9, icon: Baby },
    { id: 5, name: 'תזונת קשישים', count: 7, icon: Users },
    { id: 6, name: 'מערכת חיסון', count: 11, icon: Shield },
    { id: 7, name: 'בריאות העיניים', count: 6, icon: Eye },
    { id: 8, name: 'בריאות הלב', count: 13, icon: Heart },
    { id: 9, name: 'פיזיותרפיה', count: 15, icon: Activity },
    { id: 10, name: 'שיקום ותרגול', count: 10, icon: Stethoscope }
  ];

  const allArticles = [
    // תזונה בסיסית
    { id: 1, title: 'המדריך השלם לתזונה בריאה', excerpt: 'כל מה שצריך לדעת על תזונה נכונה ואיך להתחיל את המסע לאורח חיים בריא', author: 'ד"ר שרה כהן', readTime: '8 דקות', category: 'תזונה בסיסית', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop' },
    { id: 2, title: 'חשיבות שתיית מים לבריאות', excerpt: 'למה שתיית מים חיונית לגופנו ואיך לשמור על לחות נכונה', author: 'דיאטנית מיכל לוי', readTime: '5 דקות', category: 'תזונה בסיסית', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=250&fit=crop' },
    { id: 3, title: 'ויטמינים ומינרלים חיוניים', excerpt: 'מדריך מקיף לויטamins ומינרלים שהגוף שלנו זקוק להם', author: 'פרופ\' דן רוזן', readTime: '12 דקות', category: 'תזונה בסיסית', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=250&fit=crop' },
    
    // תזונת ספורט
    { id: 4, title: 'תזונה לספורטאים - מדריך מלא', excerpt: 'איך להתאים את התזונה לפעילות ספורטיבית ולהשיג ביצועים מיטביים', author: 'דיאטנית ספורט רונית שמיר', readTime: '15 דקות', category: 'תזונת ספורט', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=250&fit=crop' },
    { id: 5, title: 'מתי לאכול לפני ואחרי אימון', excerpt: 'הזמנים הנכונים לאכילה סביב האימון לביצועים מיטביים', author: 'מאמן כושר אמיר כהן', readTime: '7 דקות', category: 'תזונת ספורט', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=250&fit=crop' },
    
    // בריאות נפשית
    { id: 6, title: 'הקשר בין תזונה לבריאות הנפש', excerpt: 'איך המזון שאנו אוכלים משפיע על מצב הרוח והבריאות הנפשית', author: 'פסיכולוגית ד"ר ענת גולד', readTime: '10 דקות', category: 'בריאות נפשית', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop' },
    
    // פיזיותרפיה
    { id: 7, title: 'פיזיותרפיה למתחילים - כל מה שחשוב לדעת', excerpt: 'גלה איך פיזיותרפיה יכולה לשפר את איכות החיים שלך ולמנוע פציעות', author: 'פיזיותרפיסט דן לוי', readTime: '12 דקות', category: 'פיזיותרפיה', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop' },
    { id: 8, title: '10 תרגילים פשוטים לחיזוק הליבה', excerpt: 'תרגילים יעילים שאפשר לעשות בבית ללא ציוד מיוחד', author: 'מאמן כושר אור משה', readTime: '6 דקות', category: 'פיזיותרפיה', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=250&fit=crop' }
  ];

  const filteredArticles = selectedCategory === 'כל הנושאים' 
    ? allArticles 
    : allArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50/70 via-white to-gray-100/70">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-32 left-20 w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-500/5 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '6s' }} />
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-bounce-subtle" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-violet-400 rounded-full animate-bounce-subtle" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gray-400 rounded-full animate-bounce-subtle" 
             style={{ animationDelay: '4s' }} />
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50/40 via-white/60 to-violet-50/40 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-500/80 via-violet-500/80 to-gray-600/80 bg-clip-text text-transparent">
                מאמרים מקצועיים
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              גלה מאמרים מקצועיים בתחום התזונה והפיזיותרפיה, שנכתבו על ידי מומחים מובילים
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Categories */}
            <div className="lg:w-1/4">
              <div className="bg-gradient-to-br from-white/85 via-gray-50/70 to-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 sticky top-24 border border-white/60">
                <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                  <BookOpen className="w-5 h-5 ml-2 text-violet-600" />
                  נושאים
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedCategory('כל הנושאים')}
                    className={`w-full text-right p-4 rounded-xl transition-all duration-500 flex justify-between items-center group transform hover:scale-[1.02] ${
                      selectedCategory === 'כל הנושאים'
                        ? 'bg-gradient-to-r from-violet-400/60 to-emerald-400/60 text-white shadow-lg shadow-violet-200/50'
                        : 'hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-violet-50/40 text-gray-700 hover:text-violet-700 bg-gradient-to-r from-gray-50/50 to-white/80 border border-gray-100/60'
                    }`}
                  >
                    <span className="text-sm font-medium bg-white/20 rounded-full px-2 py-1">{allArticles.length}</span>
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
                            ? 'bg-gradient-to-r from-violet-400/60 to-emerald-400/60 text-white shadow-lg shadow-violet-200/50'
                            : 'hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-violet-50/40 text-gray-700 hover:text-violet-700 bg-gradient-to-r from-gray-50/50 to-white/80 border border-gray-100/60'
                        }`}
                      >
                        <span className="text-sm font-medium bg-white/20 rounded-full px-2 py-1">{category.count}</span>
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                          <IconComponent className="w-4 h-4" />
                          <span className="font-medium">{category.name}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:w-3/4">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedCategory === 'כל הנושאים' ? 'כל המאמרים' : selectedCategory}
                </h2>
                <p className="text-gray-600">
                  {filteredArticles.length} מאמרים נמצאו
                </p>
              </div>

              <div className="space-y-6">
                {filteredArticles.map((article, index) => (
                  <Card key={article.id} className="group hover:shadow-2xl transition-all duration-500 animate-fade-in-up border-0 shadow-lg hover:scale-[1.01] overflow-hidden bg-gradient-to-r from-white/90 via-gray-50/50 to-white/90 backdrop-blur-sm border border-white/60"
                        style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Image Section */}
                      <div className="md:w-1/3 relative overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full md:h-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-white/95 via-gray-50/98 to-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-violet-700 border border-violet-200/60">
                          {article.category}
                        </div>
                        {/* Softer gradient accent bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/70 to-violet-500/70"></div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="md:w-2/3 flex flex-col justify-between">
                        <CardContent className="p-6 bg-gradient-to-br from-white/80 via-gray-50/30 to-white/80 flex-1">
                          <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-violet-700 transition-colors line-clamp-2 leading-tight">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pt-3 border-t border-gray-100/60">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                              <User className="w-4 h-4 text-violet-500" />
                              <span className="font-medium">{article.author}</span>
                            </div>
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                              <Clock className="w-4 h-4 text-violet-500" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                          
                          {/* Softer gradient for buttons */}
                          <Link to={`/article/${article.id}`}>
                            <Button className="w-full bg-gradient-to-r from-violet-400/80 to-emerald-400/80 hover:from-violet-500/80 hover:to-emerald-500/80 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                              קרא מאמר מלא
                              <ArrowLeft className="w-4 h-4 mr-2" />
                            </Button>
                          </Link>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;

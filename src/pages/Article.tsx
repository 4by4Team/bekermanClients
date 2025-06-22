
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Clock, User, Share2, BookOpen } from 'lucide-react';

const Article = () => {
  const { id } = useParams();

  // Mock article data - in real app this would come from API
  const allArticles = [
    // תזונה בסיסית
    { id: 1, title: 'המדריך השלם לתזונה בריאה', excerpt: 'כל מה שצריך לדעת על תזונה נכונה ואיך להתחיל את המסע לאורח חיים בריא', author: 'ד"ר שרה כהן', readTime: '8 דקות', category: 'תזונה בסיסית', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop' },
    { id: 2, title: 'חשיבות שתיית מים לבריאות', excerpt: 'למה שתיית מים חיונית לגופנו ואיך לשמור על לחות נכונה', author: 'דיאטנית מיכל לוי', readTime: '5 דקות', category: 'תזונה בסיסית', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=250&fit=crop' },
    { id: 3, title: 'ויטמינים ומינרלים חיוניים', excerpt: 'מדריך מקיף לויטמינים ומינרלים שהגוף שלנו זקוק להם', author: 'פרופ\' דן רוזן', readTime: '12 דקות', category: 'תזונה בסיסית', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=250&fit=crop' },
    
    // תזונת ספורט
    { id: 4, title: 'תזונה לספורטאים - מדריך מלא', excerpt: 'איך להתאים את התזונה לפעילות ספורטיבית ולהשיג ביצועים מיטביים', author: 'דיאטנית ספורט רונית שמיר', readTime: '15 דקות', category: 'תזונת ספורט', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=250&fit=crop' },
    { id: 5, title: 'מתי לאכול לפני ואחרי אימון', excerpt: 'הזמנים הנכונים לאכילה סביב האימון לביצועים מיטביים', author: 'מאמן כושר אמיר כהן', readTime: '7 דקות', category: 'תזונת ספורט', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=250&fit=crop' },
    
    // בריאות נפשית
    { id: 6, title: 'הקשר בין תזונה לבריאות הנפש', excerpt: 'איך המזון שאנו אוכלים משפיע על מצב הרוח והבריאות הנפשית', author: 'פסיכולוגית ד"ר ענת גולד', readTime: '10 דקות', category: 'בריאות נפשית', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop' },
    
    // פיזיותרפיה
    { id: 7, title: 'פיזיותרפיה למתחילים - כל מה שחשוב לדעת', excerpt: 'גלה איך פיזיותרפיה יכולה לשפר את איכות החיים שלך ולמנוע פציעות', author: 'פיזיותרפיסט דן לוי', readTime: '12 דקות', category: 'פיזיותרפיה', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop' },
    { id: 8, title: '10 תרגילים פשוטים לחיזוק הליבה', excerpt: 'תרגילים יעילים שאפשר לעשות בבית ללא ציוד מיוחד', author: 'מאמן כושר אור משה', readTime: '6 דקות', category: 'פיזיותרפיה', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=250&fit=crop' }
  ];

  const currentArticle = allArticles.find(article => article.id === parseInt(id || '1')) || allArticles[0];
  
  // Find articles in the same category for navigation
  const categoryArticles = allArticles.filter(article => article.category === currentArticle.category);
  const currentIndex = categoryArticles.findIndex(article => article.id === currentArticle.id);
  const prevArticle = currentIndex > 0 ? categoryArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < categoryArticles.length - 1 ? categoryArticles[currentIndex + 1] : null;

  const article = {
    id: currentArticle.id,
    title: currentArticle.title,
    content: `
      <h2>מבוא לתזונה בריאה</h2>
      <p>תזונה בריאה היא אחד מהמפתחות החשובים ביותר לחיים איכותיים וארוכים. במדריך זה נלמד על העקרונות הבסיסיים של תזונה נכונה ואיך ליישם אותם בחיי היומיום.</p>
      
      <h3>עקרונות יסוד בתזונה בריאה</h3>
      <p>תזונה בריאה מבוססת על מספר עקרונות מרכזיים:</p>
      <ul>
        <li><strong>איזון תזונתי:</strong> צריכה מגוונת של כל קבוצות המזון</li>
        <li><strong>כמויות מתאימות:</strong> אכילה במידה ולא להפרזה</li>
        <li><strong>טיב המזון:</strong> בחירה במזון טרי ומעובד כמה שפחות</li>
        <li><strong>קביעות:</strong> שמירה על שעות אכילה קבועות</li>
      </ul>

      <h3>חבילת המזון המומלצת</h3>
      <p>בתזונה בריאה חשוב לכלול:</p>
      <ul>
        <li>פירות וירקות - לפחות 5 מנות ביום</li>
        <li>דגנים מלאים - כמקור אנרגיה עיקרי</li>
        <li>חלבונים איכותיים - דגים, עוף, קטניות</li>
        <li>שומנים בריאים - אגוזים, זיתים, אבוקדו</li>
        <li>מוצרי חלב דלי שומן</li>
      </ul>

      <h3>טיפים מעשיים ליישום</h3>
      <p>כדי להתחיל במסע התזונה הבריאה, מומלץ:</p>
      <ol>
        <li>להתחיל בשינויים קטנים והדרגתיים</li>
        <li>לתכנן ארוחות מראש</li>
        <li>לקרוא תוויות מזון</li>
        <li>לשתות הרבה מים</li>
        <li>להקשיב לגוף ולסימני הרעב והשובע</li>
      </ol>

      <h3>מתכונים קלים ובריאים</h3>
      <p>בהמשך המאמר תמצאו מתכונים פשוטים וטעימים שיעזרו לכם להתחיל:</p>
      
      <h4>סלט קינואה צבעוני</h4>
      <p>מתכון מהיר ומזין למי שרוצה ארוחה קלה ומשביעה...</p>

      <h3>סיכום</h3>
      <p>תזונה בריאה אינה דיאטה זמנית אלא אורח חיים. היא מביאה עמה יתרונות בריאותיים רבים כמו חיזוק מערכת החיסון, שיפור רמות האנרגיה, ושמירה על משקל תקין. החל בשינויים קטנים והדרגתיים, ותראה את ההבדל במהרה.</p>
    `,
    author: currentArticle.author,
    readTime: currentArticle.readTime,
    publishDate: '15 ביוני 2024',
    category: currentArticle.category,
    image: currentArticle.image,
    tags: ['תזונה', 'בריאות', 'אורח חיים', 'מדריך']
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-32 left-20 w-[500px] h-[500px] bg-violet-500/8 rounde[d-full blur-3xl animate-float" 
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

      {/* Back Button */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Link to="/articles">
          <Button variant="outline" className="mb-6 hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-violet-50/40 bg-gradient-to-r from-white/90 to-gray-50/80 backdrop-blur-sm border border-white/60">
            <ArrowLeft className="w-4 h-4 ml-2" />
            חזרה למאמרים
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <section className="container mx-auto px-4 mb-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/90 via-gray-50/80 to-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/60">
            <div className="relative h-64 md:h-80">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 right-6 bg-gradient-to-r from-white/95 via-gray-50/98 to-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-emerald-600 border border-emerald-200/60">
                {article.category}
              </div>
              {/* Green-Purple gradient accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 to-violet-600"></div>
            </div>
            
            <div className="p-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{article.author}</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Clock className="w-5 h-5" />
                  <span>{article.readTime} קריאה</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <BookOpen className="w-5 h-5" />
                  <span>{article.publishDate}</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t pt-6">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="bg-gradient-to-r from-gray-100/80 to-gray-50/90 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200/60">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-violet-50/40 bg-gradient-to-r from-white/90 to-gray-50/80 backdrop-blur-sm border border-white/60">
                  <Share2 className="w-4 h-4 ml-2" />
                  שתף
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container mx-auto px-4 mb-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/90 via-gray-50/80 to-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 border border-white/60">
            <div 
              className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                direction: 'rtl',
                textAlign: 'right'
              }}
            />
          </div>
        </div>
      </section>

      {/* Next/Previous Article Navigation */}
      {(prevArticle || nextArticle) && (
        <section className="container mx-auto px-4 mb-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/90 via-gray-50/80 to-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/60">
              <h3 className="text-xl font-bold mb-6 text-gray-800 text-center">ניווט במאמרים - {article.category}</h3>
              <div className="flex justify-between items-center gap-4">
                {/* Previous Article */}
                <div className="flex-1">
                  {prevArticle ? (
                    <Link to={`/article/${prevArticle.id}`}>
                      <Button variant="outline" className="w-full h-auto p-4 text-right hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-violet-50/40 group bg-gradient-to-r from-white/90 to-gray-50/80 backdrop-blur-sm border border-white/60">
                        <div className="flex items-center justify-between w-full">
                          <ArrowRight className="w-5 h-5 text-violet-600 group-hover:translate-x-1 transition-transform" />
                          <div className="text-right">
                            <div className="text-sm text-gray-500 mb-1">המאמר הקודם</div>
                            <div className="font-medium text-gray-800 line-clamp-2">{prevArticle.title}</div>
                          </div>
                        </div>
                      </Button>
                    </Link>
                  ) : (
                    <div className="w-full h-auto p-4 text-center text-gray-400 bg-gradient-to-r from-gray-50/50 to-white/80 rounded-lg border border-gray-200/60">
                      זה המאמר הראשון בקטגוריה
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="w-px h-16 bg-gray-200"></div>

                {/* Next Article */}
                <div className="flex-1">
                  {nextArticle ? (
                    <Link to={`/article/${nextArticle.id}`}>
                      <Button variant="outline" className="w-full h-auto p-4 text-left hover:bg-gradient-to-r hover:from-violet-50/40 hover:to-gray-50/80 group bg-gradient-to-r from-white/90 to-gray-50/80 backdrop-blur-sm border border-white/60">
                        <div className="flex items-center justify-between w-full">
                          <div className="text-left">
                            <div className="text-sm text-gray-500 mb-1">המאמר הבא</div>
                            <div className="font-medium text-gray-800 line-clamp-2">{nextArticle.title}</div>
                          </div>
                          <ArrowLeft className="w-5 h-5 text-violet-600 group-hover:-translate-x-1 transition-transform" />
                        </div>
                      </Button>
                    </Link>
                  ) : (
                    <div className="w-full h-auto p-4 text-center text-gray-400 bg-gradient-to-r from-gray-50/50 to-white/80 rounded-lg border border-gray-200/60">
                      זה המאמר האחרון בקטגוריה
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Article;

import React, { useState } from 'react';
import { Play, Pause, Calendar, MapPin, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const testimonials = [
    {
      id: 1,
      name: 'שרה כהן',
      age: 35,
      location: 'תל אביב',
      category: 'הרזיה',
      title: 'איך הצלחתי לרדת 15 ק״ג בחצי שנה',
      quote: 'המסע שלי החל כשהבנתי שאני צריכה לעשות שינוי אמיתי בחיי. עם הליווי המקצועי והתמיכה שקיבלתי, הצלחתי להגיע ליעדים שלי ויותר מזה.',
      videoUrl: '/testimonials/video1.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=300&fit=crop',
      date: '2024-01-15',
      colorTheme: 'emerald'
    },
    {
      id: 2,
      name: 'דוד לוי',
      age: 42,
      location: 'חיפה',
      category: 'פיזיותרפיה',
      title: 'התגברתי על כאבי גב כרוניים',
      quote: 'אחרי שנים של כאבי גב שפגעו בכל תחום בחיי, הקורס נתן לי לא רק הקלה אלא פתרון לטווח הארוך. היום אני יכול לחזור לעשות דברים שאהבתי.',
      videoUrl: '/testimonials/video2.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop',
      date: '2024-02-20',
      colorTheme: 'violet'
    },
    {
      id: 3,
      name: 'מיכל אברהם',
      age: 28,
      location: 'ירושלים',
      category: 'תזונה',
      title: 'מסע להתחזקות ובניית ביטחון עצמי',
      quote: 'הבנתי שתזונה נכונה זה לא רק מה שאוכלים, אלא כל הגישה לחיים. השינוי שעברתי הוא לא רק פיזי אלא נפשי ורגשי.',
      videoUrl: '/testimonials/video3.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop',
      date: '2024-03-10',
      colorTheme: 'emerald'
    },
    {
      id: 4,
      name: 'אבי גרין',
      age: 50,
      location: 'באר שבע',
      category: 'שיקום',
      title: 'השיקום שלי אחרי פציעה ספורטיבית',
      quote: 'חשבתי שלא אוכל לחזור לספורט שאהבתי. הצוות המקצועי הוכיח לי שעם הגישה הנכונה והסבלנות, אפשר להגיע לכל מקום.',
      videoUrl: '/testimonials/video4.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      date: '2024-01-25',
      colorTheme: 'violet'
    },
    {
      id: 5,
      name: 'רותי בן דוד',
      age: 38,
      location: 'פתח תקווה',
      category: 'הרזיה',
      title: 'איך שיניתי את אורח החיים שלי לחלוטין',
      quote: 'זה לא היה רק קורס, זה היה שינוי אמיתי בכל מה שקשור לאורח החיים שלי. היום אני חיה חיים בריאים יותר ומרגישה טוב עם עצמי.',
      videoUrl: '/testimonials/video5.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop',
      date: '2024-02-05',
      colorTheme: 'emerald'
    },
    {
      id: 6,
      name: 'יוסי מזרחי',
      age: 45,
      location: 'אשדוד',
      category: 'פיזיותרפיה',
      title: 'טיפול בכאבי כתפיים שלא עזרו לי בשום מקום',
      quote: 'ניסיתי הכל - רופאים, פיזיותרפיסטים פרטיים, תרופות. רק כאן מצאתי את הפתרון האמיתי שעובד לטווח הארוך.',
      videoUrl: '/testimonials/video6.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop',
      date: '2024-03-01',
      colorTheme: 'violet'
    },
    {
      id: 7,
      name: 'נועה שמואל',
      age: 29,
      location: 'רמת גן',
      category: 'תזונה',
      title: 'מהמשקל העודף לביטחון עצמי מלא',
      quote: 'תמיד נלחמתי עם המשקל שלי. הקורס לא רק עזר לי לרדת במשקל אלא גם ללמוד לאהוב את עצמי.',
      videoUrl: '/testimonials/video7.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=300&fit=crop',
      date: '2024-03-15',
      colorTheme: 'emerald'
    },
    {
      id: 8,
      name: 'אילן כץ',
      age: 55,
      location: 'נתניה',
      category: 'שיקום',
      title: 'חזרה לפעילות אחרי ניתוח ברך',
      quote: 'הרופאים אמרו שאולי לא אוכל לחזור לפעילות מלאה. הקורס הוכיח שהם טעו וגרם לי לחזור חזק יותר מאי פעם.',
      videoUrl: '/testimonials/video8.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1559548331-f9cb98001426?w=400&h=300&fit=crop',
      date: '2024-02-28',
      colorTheme: 'violet'
    },
    {
      id: 9,
      name: 'טל אבני',
      age: 33,
      location: 'חולון',
      category: 'הרזיה',
      title: 'מאמא עייפה לאישה בטוחה בעצמה',
      quote: 'בתור אמא לשלושה, תמיד שמתי את עצמי אחרונה. הקורס לימד אותי שכדי לטפל באחרים, אני צריכה קודם לטפל בעצמי.',
      videoUrl: '/testimonials/video9.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=300&fit=crop',
      date: '2024-01-30',
      colorTheme: 'emerald'
    },
    {
      id: 10,
      name: 'רון פרידמן',
      age: 47,
      location: 'הרצליה',
      category: 'פיזיותרפיה',
      title: 'הקלה בכאבי צוואר כרוניים',
      quote: 'שנים של עבודה מול מחשב גרמו לי לכאבי צוואר נוראים. הטכניקות שלמדתי בקורס שינו לי את החיים.',
      videoUrl: '/testimonials/video10.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      date: '2024-03-05',
      colorTheme: 'violet'
    },
    {
      id: 11,
      name: 'לימור כהן',
      age: 26,
      location: 'כפר סבא',
      category: 'תזונה',
      title: 'מהפרעת אכילה לחיים בריאים',
      quote: 'הקורס עזר לי ליצור מערכת יחסים בריאה עם האוכל ועם הגוף שלי. היום אני חיה חיים מאוזנים ושמחים.',
      videoUrl: '/testimonials/video11.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop',
      date: '2024-02-12',
      colorTheme: 'emerald'
    },
    {
      id: 12,
      name: 'עמית רוזן',
      age: 39,
      location: 'ראשון לציון',
      category: 'שיקום',
      title: 'החלמה מפציעת ריצה כרונית',
      quote: 'כרצה מקצועי, פציעה כרונית איימה לסיים את הקריירה שלי. הקורס החזיר אותי למסלול ועזר לי להבין איך למנוע פציעות.',
      videoUrl: '/testimonials/video12.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=300&fit=crop',
      date: '2024-01-20',
      colorTheme: 'violet'
    }
  ];

  // Calculate pagination
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  const toggleVideo = (videoId: number) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(videoId);
    }
  };

  const toggleExpanded = (testimonialId: number) => {
    if (expandedTestimonial === testimonialId) {
      setExpandedTestimonial(null);
    } else {
      setExpandedTestimonial(testimonialId);
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  const getColorClasses = (colorTheme: string) => {
    if (colorTheme === 'emerald') {
      return {
        gradient: 'from-emerald-50/30 to-emerald-100/20',
        border: 'border-emerald-100/40',
        badge: 'from-emerald-400/80 to-emerald-500/80'
      };
    } else {
      return {
        gradient: 'from-violet-50/30 to-violet-100/20',
        border: 'border-violet-100/40',
        badge: 'from-violet-400/80 to-violet-500/80'
      };
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
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

      {/* Hero Section - Enhanced with cloudy background and elegant borders */}
      <section className="py-20 relative overflow-hidden">
        {/* Enhanced cloud-like gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-white to-violet-100/50"></div>
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-emerald-200/40 to-emerald-100/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-gradient-to-tl from-violet-200/40 to-violet-100/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-br from-gray-200/30 to-gray-100/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-150/30 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-violet-150/30 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-emerald-500/80 to-violet-500/80 bg-clip-text text-transparent">
              סיפורי הצלחה
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            שמע מאנשים אמיתיים שהצליחו לשנות את חייהם בעזרת הקורסים שלנו.
            כל סיפור הוא הוכחה שגם אתה יכול להגיע לשם.
          </p>
        </div>
      </section>

      {/* Main Testimonials Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {currentTestimonials.map((testimonial, index) => {
              const colorClasses = getColorClasses(testimonial.colorTheme);
              return (
                <div key={testimonial.id} 
                     className={`bg-gradient-to-br from-white/90 ${colorClasses.gradient} to-gray-50/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-up border ${colorClasses.border}`}
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  
                  {/* Video Section */}
                  <div className="relative">
                    <div className="relative aspect-video lg:h-64">
                      <img 
                        src={testimonial.thumbnail} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <button
                          onClick={() => toggleVideo(testimonial.id)}
                          className="w-16 h-16 bg-gradient-to-r from-white/95 via-gray-50/98 to-white/95 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl backdrop-blur-sm border border-white/60"
                        >
                          {playingVideo === testimonial.id ? (
                            <Pause className="w-8 h-8 text-gray-800" />
                          ) : (
                            <Play className="w-8 h-8 text-gray-800 mr-1" />
                          )}
                        </button>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`bg-gradient-to-r ${colorClasses.badge} text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg backdrop-blur-sm`}>
                          {testimonial.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 lg:p-8">
                    <Quote className={`w-6 h-6 ${testimonial.colorTheme === 'emerald' ? 'text-emerald-500' : 'text-violet-500'} mb-4`} />
                    
                    <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 leading-tight">{testimonial.title}</h3>
                    
                    <div className="mb-4">
                      <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-3">
                        {expandedTestimonial === testimonial.id 
                          ? `"${testimonial.quote}"`
                          : `"${truncateText(testimonial.quote, 80)}"`
                        }
                        {testimonial.quote.length > 80 && (
                          <button
                            onClick={() => toggleExpanded(testimonial.id)}
                            className={`${testimonial.colorTheme === 'emerald' ? 'text-emerald-600' : 'text-violet-600'} font-medium mr-2 hover:underline text-sm`}
                          >
                            {expandedTestimonial === testimonial.id ? 'הסתר' : 'קרא עוד'}
                          </button>
                        )}
                      </p>
                    </div>
                    
                    {/* Person Info */}
                    <div className="flex items-center justify-between border-t pt-4 border-gray-100/60">
                      <div className="flex items-center">
                        <img 
                          src={testimonial.thumbnail} 
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">{testimonial.name}</h4>
                          <div className="flex items-center text-xs text-gray-600">
                            <span>גיל {testimonial.age}</span>
                            <span className="mx-1">•</span>
                            <MapPin className="w-3 h-3 mr-1" />
                            <span>{testimonial.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Date */}
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{new Date(testimonial.date).toLocaleDateString('he-IL')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center mt-12 gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 bg-gradient-to-r from-white/90 to-gray-50/80 backdrop-blur-sm border border-white/60 hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-violet-50/40"
              >
                <ChevronRight className="w-4 h-4" />
                הקודם
              </Button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full transition-all duration-300 backdrop-blur-sm ${
                      currentPage === page
                        ? 'bg-gradient-to-r from-emerald-400/80 to-violet-400/80 text-white shadow-lg'
                        : 'bg-gradient-to-r from-white/90 to-gray-50/80 border border-gray-300/60 text-gray-600 hover:border-emerald-400 hover:text-emerald-600'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 bg-gradient-to-r from-white/90 to-gray-50/80 backdrop-blur-sm border border-white/60 hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-violet-50/40"
              >
                הבא
                <ChevronLeft className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-400/80 to-violet-400/80 text-white relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            מוכן להיות הסיפור הבא?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            הצטרף לאלפי אנשים שכבר שינו את חייהם והתחיל את המסע שלך היום
          </p>
          <button className="bg-gradient-to-r from-white/95 via-gray-50/98 to-white/95 text-emerald-600 hover:bg-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm border border-white/60">
            התחל את המסע שלך
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

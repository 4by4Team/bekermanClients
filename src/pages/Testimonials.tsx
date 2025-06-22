import React, { useState } from 'react';
import {  Calendar, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Testimonials = () => {
  const [activeYoutubeId, setActiveYoutubeId] = useState<string | null>(null);
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: 'שרה כהן',
      age: 35,
      location: 'תל אביב',
      category: 'הרזיה',
      title: 'איך הצלחתי לרדת 15 ק״ג בחצי שנה',
      quote: 'המסע שלי החל כשהבנתי שאני צריכה לעשות שינוי אמיתי בחיי. עם הליווי המקצועי והתמיכה שקיבלתי, הצלחתי להגיע ליעדים שלי ויותר מזה.',
      youtubeId: 'JU9qI0cM1Xo',
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
      youtubeId: 'zogAnLOTdKE',
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
      youtubeId: 'JU9qI0cM1Xo',
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
      youtubeId: 'zogAnLOTdKE',
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
      youtubeId: 'JU9qI0cM1Xo',
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
      youtubeId: 'JU9qI0cM1Xo',
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
      youtubeId: 'VIDEO_ID_7',
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
      youtubeId: 'VIDEO_ID_8',
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
      youtubeId: 'VIDEO_ID_9',
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
      youtubeId: 'VIDEO_ID_10',
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
      youtubeId: 'VIDEO_ID_11',
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
      youtubeId: 'VIDEO_ID_12',
      date: '2024-01-20',
      colorTheme: 'violet'
    },
    {
      id: 13,
      name: 'רונית מלכה',
      age: 41,
      location: 'אשקלון',
      category: 'הרזיה',
      title: 'איך שיפרתי את איכות החיים שלי',
      quote: 'הקורס נתן לי כלים פרקטיים להתמודדות יומיומית ואנרגיה חדשה. היום אני מרגישה שונה לגמרי.',
      youtubeId: 'VIDEO_ID_13',
      date: '2024-04-02',
      colorTheme: 'emerald'
    },
    {
      id: 14,
      name: 'גדי ברק',
      age: 48,
      location: 'רחובות',
      category: 'פיזיותרפיה',
      title: 'התמודדות עם פציעה כרונית',
      quote: 'לא האמנתי שאוכל לחזור לספורט, אך הקורס הוכיח אחרת ושינה לי את החיים.',
      youtubeId: 'VIDEO_ID_14',
      date: '2024-03-22',
      colorTheme: 'violet'
    },
    {
      id: 15,
      name: 'מיה לוי',
      age: 31,
      location: 'הרצליה',
      category: 'תזונה',
      title: 'שינוי אורח חיים באמצעות תזונה נכונה',
      quote: 'למדתי כיצד לאזן את התזונה שלי והשינויים ניכרים בגוף ובנפש.',
      youtubeId: 'VIDEO_ID_15',
      date: '2024-04-05',
      colorTheme: 'emerald'
    },
    {
      id: 16,
      name: 'יואב שלו',
      age: 53,
      location: 'קריית גת',
      category: 'שיקום',
      title: 'החלמה מלאה מפציעה ספורטיבית',
      quote: 'תודה לצוות המדהים שהוביל אותי להחלמה מהירה ומוצלחת.',
      youtubeId: 'VIDEO_ID_16',
      date: '2024-03-18',
      colorTheme: 'violet'
    },
  ];

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  const toggleExpanded = (testimonialId: number) => {
    setExpandedTestimonial(expandedTestimonial === testimonialId ? null : testimonialId);
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
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {currentTestimonials.map((testimonial, index) => {
              const colorClasses = getColorClasses(testimonial.colorTheme);
              return (
                <div
                  key={testimonial.id}
                  className={`bg-gradient-to-br from-white/90 ${colorClasses.gradient} to-gray-50/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-up border ${colorClasses.border}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* וידאו עם לחיצה לפתיחת מודל */}
                  <div
                    onClick={() => setActiveYoutubeId(testimonial.youtubeId)}
                    className="relative aspect-video cursor-pointer rounded-t-3xl overflow-hidden block group"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveYoutubeId(testimonial.youtubeId);
                      }
                    }}
                    aria-label={`צפה בסרטון של ${testimonial.name}`}
                  >
                    <div
                      className="relative aspect-video cursor-pointer rounded-t-3xl overflow-hidden group"
                      aria-label={`צפה בסרטון של ${testimonial.name}`}
                    >
                      {/* תמונה */}
                      <img
                        src={`https://img.youtube.com/vi/${testimonial.youtubeId}/hqdefault.jpg`}
                        alt={`${testimonial.name} - סרטון`}
                        className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                        draggable={false}
                      />

                      {/* וידאו – מופעל רק ב-hover */}
                      <iframe
                        className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        src={`https://www.youtube.com/embed/${testimonial.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${testimonial.youtubeId}&controls=0&modestbranding=1&showinfo=0`}
                        title={`YouTube video של ${testimonial.name}`}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        draggable={false}
                      />

                    </div>
                  </div>

                  <div className="p-6 lg:p-8">
                    <Quote className={`w-6 h-6 ${testimonial.colorTheme === 'emerald' ? 'text-emerald-500' : 'text-violet-500'} mb-4`} />

                    <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 leading-tight">{testimonial.title}</h3>

                    <div className="mb-4">
                      <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-3">
                        {expandedTestimonial === testimonial.id
                          ? `"${testimonial.quote}"`
                          : `"${testimonial.quote.length > 80 ? testimonial.quote.substr(0, 80) + '...' : testimonial.quote}"`
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

                    <div className="flex items-center justify-between border-t pt-4 border-gray-100/60">
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 ml-1" />
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
                    className={`w-10 h-10 rounded-full transition-all duration-300 backdrop-blur-sm ${currentPage === page
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
          <button
            onClick={() => navigate('/courses')}
            className="bg-gradient-to-r from-white/95 via-gray-50/98 to-white/95 text-emerald-600 hover:bg-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm border border-white/60"
          >
            התחל את המסע שלך
          </button>
        </div>
      </section>

      {/* Modal להצגת וידאו */}
      {activeYoutubeId && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeYoutubeId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={() => setActiveYoutubeId(null)}
              aria-label="Close video"
              className="absolute top-3 right-3 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 transition"
            >
              &#10005;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;

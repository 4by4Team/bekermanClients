
import {  Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

import { Testimonial } from '@/types/Testimonial';
import { TestimonialCard } from './TestimonialCard';
import VideoModal from './VideoModal';
import { useTestimonials } from '@/hooks/useTestimonials';

interface TestimonialsProps {
  testimonials: Testimonial[];
  itemsPerPage?: number;
}

const renderTestimonialsList = (
  testimonials: Testimonial[],
  expandedTestimonial: number | null,
  onToggleExpanded: (id: number) => void,
  onPlayVideo: (youtubeId: string) => void
) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
    {testimonials.map((testimonial, index) => (
      <TestimonialCard
        key={testimonial.id}
        testimonial={testimonial}
        expanded={expandedTestimonial === testimonial.id}
        onToggleExpanded={onToggleExpanded}
        onPlayVideo={onPlayVideo}
      />
    ))}
  </div>
);

const renderPagination = (
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void
) => (
  totalPages > 1 && (
    <div className="flex items-center justify-center mt-12 gap-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
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
            onClick={() => onPageChange(page)}
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
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 bg-gradient-to-r from-white/90 to-gray-50/80 backdrop-blur-sm border border-white/60 hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-violet-50/40"
      >
        הבא
        <ChevronLeft className="w-4 h-4" />
      </Button>
    </div>
  )
);

const renderJoinToCourse = (navigate: ReturnType<typeof useNavigate>) => (
  <section className="py-20 bg-gradient-to-r from-emerald-400/80 to-violet-400/80 text-white relative">
    <div className="container mx-auto px-4 text-center relative z-10">
      <h2 className="text-4xl font-bold mb-6">מוכן להיות הסיפור הבא?</h2>
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
);

const renderVideoModal = (youtubeId: string | null, onClose: () => void) => {
  if (!youtubeId) return null;
  return <VideoModal youtubeId={youtubeId} onClose={onClose} />;
};

// const Testimonials = ({ testimonials, itemsPerPage = 6 }: TestimonialsProps) => {
//   //get all the data first here or on another place check it and add theme to each one
//   testimonials=[{
//     id: 1,
//     category: 'הרזיה',
//     title: 'איך הצלחתי לרדת 15 ק״ג בחצי שנה',
//     quote: 'המסע שלי החל כשהבנתי שאני צריכה לעשות שינוי אמיתי בחיי. עם הליווי המקצועי והתמיכה שקיבלתי, הצלחתי להגיע ליעדים שלי ויותר מזה.',
//     youtubeId: 'JU9qI0cM1Xo',
//     colorTheme: 'emerald'
//   },
//   {
//     id: 2,
//     category: 'פיזיותרפיה',
//     title: 'התגברתי על כאבי גב כרוניים',
//     quote: 'אחרי שנים של כאבי גב שפגעו בכל תחום בחיי, הקורס נתן לי לא רק הקלה אלא פתרון לטווח הארוך. היום אני יכול לחזור לעשות דברים שאהבתי.',
//     youtubeId: 'zogAnLOTdKE',
//     colorTheme: 'violet'
//   },
//   {
//     id: 3,
//     category: 'פיזיותרפיה',
//     title: 'התגברתי על כאבי גב כרוניים',
//     quote: 'אחרי שנים של כאבי גב שפגעו בכל תחום בחיי, הקורס נתן לי לא רק הקלה אלא פתרון לטווח הארוך. היום אני יכול לחזור לעשות דברים שאהבתי.',
//     youtubeId: 'zogAnLOTdKE',
//     colorTheme: 'violet'
//   }
// ,{
//   id: 4,
//   category: 'פיזיותרפיה',
//   title: 'התגברתי על כאבי גב כרוניים',
//   quote: 'אחרי שנים של כאבי גב שפגעו בכל תחום בחיי, הקורס נתן לי לא רק הקלה אלא פתרון לטווח הארוך. היום אני יכול לחזור לעשות דברים שאהבתי.',
//   youtubeId: 'zogAnLOTdKE',
//   colorTheme: 'violet'
// },{
//   id: 5,
//   category: 'פיזיותרפיה',
//   title: 'התגברתי על כאבי גב כרוניים',
//   quote: 'אחרי שנים של כאבי גב שפגעו בכל תחום בחיי, הקורס נתן לי לא רק הקלה אלא פתרון לטווח הארוך. היום אני יכול לחזור לעשות דברים שאהבתי.',
//   youtubeId: 'zogAnLOTdKE',
//   colorTheme: 'violet'
// }
// ,{
//   id: 6,
//   category: 'פיזיותרפיה',
//   title: 'התגברתי על כאבי גב כרוניים',
//   quote: 'אחרי שנים של כאבי גב שפגעו בכל תחום בחיי, הקורס נתן לי לא רק הקלה אלא פתרון לטווח הארוך. היום אני יכול לחזור לעשות דברים שאהבתי.',
//   youtubeId: 'zogAnLOTdKE',
//   colorTheme: 'violet'
// },{
//   id: 7,
//   category: 'פיזיותרפיה',
//   title: 'התגברתי על כאבי גב כרוניים',
//   quote: 'אחרי שנים של כאבי גב שפגעו בכל תחום בחיי, הקורס נתן לי לא רק הקלה אלא פתרון לטווח הארוך. היום אני יכול לחזור לעשות דברים שאהבתי.',
//   youtubeId: 'zogAnLOTdKE',
//   colorTheme: 'violet'
// }
// ]
//   const {
//     activeYoutubeId,
//     setActiveYoutubeId,
//     expandedTestimonial,
//     toggleExpanded,
//     currentPage,
//     setCurrentPage,
//     totalPages,
//     currentTestimonials
//   } = useTestimonials(itemsPerPage);
//   //for loop which will choose a theme


//   const navigate = useNavigate();
//   const startIndex = (currentPage - 1) * itemsPerPage;


//   return (
//     <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
//       <section className="py-20 relative z-10 container mx-auto px-4 max-w-7xl">
//         {renderTestimonialsList(currentTestimonials, expandedTestimonial, toggleExpanded, setActiveYoutubeId)}
//         {renderPagination(currentPage, totalPages, setCurrentPage)}
//       </section>

//       {renderJoinToCourse(navigate)}
//       {renderVideoModal(activeYoutubeId, () => setActiveYoutubeId(null))}
//     </div>
//   );
  
// };

// export default Testimonials;
const Testimonials = () => {
  const {
    activeYoutubeId,
    setActiveYoutubeId,
    expandedTestimonial,
    toggleExpanded,
    currentPage,
    setCurrentPage,
    totalPages,
    currentTestimonials,
    loading,
  } = useTestimonials();

  const navigate = useNavigate();

  if (loading) {
    return <div className="text-center py-32 text-xl">טוען עדויות...</div>;
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
      <section className="py-20 relative z-10 container mx-auto px-4 max-w-7xl">
        {renderTestimonialsList(currentTestimonials, expandedTestimonial, toggleExpanded, setActiveYoutubeId)}
        {renderPagination(currentPage, totalPages, setCurrentPage)}
      </section>

      {renderJoinToCourse(navigate)}
      {renderVideoModal(activeYoutubeId, () => setActiveYoutubeId(null))}
    </div>
  );
};

export default Testimonials;

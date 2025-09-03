// import { Calendar, Quote, Edit, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Testimonial } from '@/types/Testimonial';
import { Quote, Edit, Trash } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Partial<Testimonial>;
  expanded: boolean;
  onToggleExpanded: (id: number) => void;
  onPlayVideo: (youtubeId: string) => void;
  onEdit: (testimonial: Partial<Testimonial>) => void;
  onDelete: (id: number) => void;
}

export const TestimonialCard = ({
  testimonial,
  expanded,
  onToggleExpanded,
  onPlayVideo,
  onEdit,
  onDelete,
}: TestimonialCardProps) => {
  const getColorClasses = (colorTheme: Testimonial['colorTheme']) => {
    if (colorTheme === 'emerald') {
      return {
        gradient: 'from-emerald-50/30 to-emerald-100/20',
        border: 'border-emerald-100/40',
        badge: 'from-emerald-400/80 to-emerald-500/80',
        text: 'text-emerald-600',
      };
    } else {
      return {
        gradient: 'from-violet-50/30 to-violet-100/20',
        border: 'border-violet-100/40',
        badge: 'from-violet-400/80 to-violet-500/80',
        text: 'text-violet-600',
      };
    }
  };

  const colorClasses = getColorClasses(testimonial.colorTheme);

  return (
    <div
      className={`bg-gradient-to-br from-white/90 ${colorClasses.gradient} to-gray-50/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-up border ${colorClasses.border}`}
    >
      {/* וידאו */}
      <div
        onClick={() => onPlayVideo(testimonial.youtubeId)}
        className="relative aspect-video cursor-pointer rounded-t-3xl overflow-hidden group"
      >
        <img
          src={`https://img.youtube.com/vi/${testimonial.youtubeId}/hqdefault.jpg`}
          alt={`סרטון עדות ${testimonial.id}`}
          className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
        />
        <iframe
          className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          src={`https://www.youtube.com/embed/${testimonial.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${testimonial.youtubeId}&controls=0&modestbranding=1`}
          title={`YouTube video ${testimonial.id}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* תוכן */}
      <div className="p-6 lg:p-8">
        <Quote className={`w-6 h-6 ${colorClasses.text} mb-4`} />
        <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">
          {testimonial.title}
        </h3>

        <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-3">
          {expanded
            ? `"${testimonial.summary}"`
            : `"${testimonial.summary.length > 80 ? testimonial.summary.substr(0, 80) + '...' : testimonial.summary}"`}
          {testimonial.summary.length > 80 && (
            <button
              onClick={() => onToggleExpanded(testimonial.id)}
              className={`${colorClasses.text} font-medium mr-2 hover:underline text-sm`}
            >
              {expanded ? 'הסתר' : 'קרא עוד'}
            </button>
          )}
        </p>

        {/* כפתורי עריכה/מחיקה */}
        <div className="flex justify-end gap-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(testimonial)}
            className="flex items-center gap-1"
          >
            <Edit className="w-4 h-4" /> עריכה
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(testimonial.id)}
            className="flex items-center gap-1"
          >
            <Trash className="w-4 h-4" /> מחיקה
          </Button>
        </div>
      </div>
    </div>
  );
};

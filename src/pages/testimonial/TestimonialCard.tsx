import { Testimonial } from '@/types/Testimonial';
import { Calendar, Quote } from 'lucide-react';

interface TestimonialCardProps {
    testimonial: Testimonial;
    expanded: boolean;
    onToggleExpanded: (id: number) => void;
    onPlayVideo: (youtubeId: string) => void;
}

export const TestimonialCard = ({ testimonial, expanded, onToggleExpanded, onPlayVideo }: TestimonialCardProps) => {

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
            <div
                onClick={() => onPlayVideo(testimonial.youtubeId)}
                className="relative aspect-video cursor-pointer rounded-t-3xl overflow-hidden block group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        onPlayVideo(testimonial.youtubeId);
                    }
                }}
                aria-label={`צפה בסרטון של עדות מספר ${testimonial.id}`}
            >
                <img
                    src={`https://img.youtube.com/vi/${testimonial.youtubeId}/hqdefault.jpg`}
                    alt={`סרטון עדות מספר ${testimonial.id}`}
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                    draggable={false}
                />
                <iframe
                    className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    src={`https://www.youtube.com/embed/${testimonial.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${testimonial.youtubeId}&controls=0&modestbranding=1&showinfo=0`}
                    title={`YouTube video מספר ${testimonial.id}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    draggable={false}
                />
            </div>

            <div className="p-6 lg:p-8">
                <Quote className={`w-6 h-6 ${colorClasses.text} mb-4`} />
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 leading-tight">{testimonial.title}</h3>

                <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-3">
                    {expanded ? `"${testimonial.summary}"` : `"${testimonial.summary.length > 80 ? testimonial.summary.substr(0, 80) + '...' : testimonial.summary}"`}
                    {testimonial.summary.length > 80 && (
                        <button
                            onClick={() => onToggleExpanded(testimonial.id)}
                            className={`${colorClasses.text} font-medium mr-2 hover:underline text-sm`}
                        >
                            {expanded ? 'הסתר' : 'קרא עוד'}
                        </button>
                    )}
                </p>

            </div>
        </div>
    );
};

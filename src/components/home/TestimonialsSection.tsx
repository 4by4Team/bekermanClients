
import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const TestimonialsSection = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: 'שרה כהן',
      age: 35,
      location: 'תל אביב',
      preview: 'איך הצלחתי לרדת 15 ק״ג בחצי שנה',
      videoUrl: '/testimonials/video1.mp4', // placeholder
      thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'דוד לוי',
      age: 42,
      location: 'חיפה',
      preview: 'התגברתי על כאבי גב כרוניים',
      videoUrl: '/testimonials/video2.mp4', // placeholder
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'מיכל אברהם',
      age: 28,
      location: 'ירושלים',
      preview: 'מסע להתחזקות ובניית ביטחון עצמי',
      videoUrl: '/testimonials/video3.mp4', // placeholder
      thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop'
    }
  ];

  const toggleVideo = (videoId: number) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(videoId);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">סיפורי הצלחה</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            שמע מאנשים אמיתיים שהצליחו לשנות את חייהם בעזרת הקורסים שלנו
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} 
                 className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 animate-fade-in-up"
                 style={{ animationDelay: `${index * 0.2}s` }}>
              
              {/* Video Section */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={testimonial.thumbnail} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button
                    onClick={() => toggleVideo(testimonial.id)}
                    className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    {playingVideo === testimonial.id ? (
                      <Pause className="w-8 h-8 text-gray-800" />
                    ) : (
                      <Play className="w-8 h-8 text-gray-800 mr-1" />
                    )}
                  </button>
                </div>

                {/* Video Preview Text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm font-medium">
                    {testimonial.preview}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {testimonial.name}
                </h3>
                <div className="flex items-center text-gray-300 text-sm mb-4">
                  <span>גיל {testimonial.age}</span>
                  <span className="mx-2">•</span>
                  <span>{testimonial.location}</span>
                </div>
                
                {/* Star Rating */}
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            מוכן להיות הסיפור הבא?
          </p>
          <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            התחל עכשיו
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

// HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50/30 via-white to-violet-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-violet-400/5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-500/80 via-violet-500/80 to-gray-600/80 bg-clip-text text-transparent">
            השנה את חייך
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            קורסים מקצועיים בתזונה ובריאות שיעניקו לך כלים מעשיים לחיים טובים יותר
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
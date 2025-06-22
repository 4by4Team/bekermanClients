
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50/50 via-white to-gray-100/50">
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;

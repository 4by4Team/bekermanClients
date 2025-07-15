import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-400/70 to-violet-400/70 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">מוכן להתחיל את המסע?</h2>
          <p className="text-xl mb-8 opacity-90">הצטרף לאלפי הבוגרים שכבר שינו את חייהם</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-full text-base font-semibold">
              בחר את הקורס שלך
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

import React from 'react';
import { CheckCircle2, Play, Users } from 'lucide-react';
import { Benefit } from '@/types/CoursesType';
import { useCourses } from '@/hooks/useCourses';

const BenefitsSection: React.FC = () => {
const benefits:Benefit[]= useCourses().benefits;

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50/30 to-violet-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">למה לבחור בנו?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אנחנו מעניקים חוויית למידה מקצועית ומותאמת אישית
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-gradient-to-br from-white to-gray-50/70 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="bg-gradient-to-r from-emerald-400/70 to-violet-400/70 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
import React from 'react';
import { Award, Calendar, Shield } from 'lucide-react';

const stats = [
  { number: '5,000+', label: 'בוגרי קורסים', icon: Award },
  { number: '15+', label: 'קורסים פעילים', icon: Calendar },
  { number: '24/7', label: 'תמיכה', icon: Shield },
];

const StatsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <stat.icon className="w-8 h-8 mx-auto mb-3 text-emerald-500" />
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500/80 to-violet-500/80 bg-clip-text text-transparent mb-1">
              {stat.number}
            </div>
            <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;

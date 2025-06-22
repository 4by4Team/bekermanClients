
import React from 'react';
import { ArrowDown, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-32 left-20 w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-500/5 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '6s' }} />
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-bounce-subtle" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-violet-400 rounded-full animate-bounce-subtle" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gray-400 rounded-full animate-bounce-subtle" 
             style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg animate-scale-in">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span className="text-gray-700 font-medium">הפלטפורמה המובילה בישראל לחיים בריאים</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="text-gradient block mb-4">חיים בריאים</span>
              <span className="text-gray-800 block">מתחילים כאן</span>
            </h1>

            {/* Subheadline */}
            <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
              גלה את הכוח שבתוכך עם קורסים מקצועיים 
              <br />
              <span className="font-semibold text-emerald-600">המשלבים תזונה נכונה ופיזיותרפיה מתקדמת</span>
              <br />
              <strong className="text-violet-600 font-bold">הזמן שלך לשינוי הוא עכשיו.</strong>
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 my-16">
            {[
              { number: '2000+', label: 'תלמידים מאושרים' },
              { number: '15+', label: 'קורסים מקצועיים' },
              { number: '95%', label: 'שביעות רצון' },
              { number: '5+', label: 'שנות ניסיון' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
            {[
              { title: 'מקצועיות', icon: '🎯', description: 'מומחים מובילים בתחום' },
              { title: 'תוצאות מוכחות', icon: '📈', description: 'שיטות בדוקות ויעילות' },
              { title: 'ליווי אישי', icon: '🤝', description: 'תמיכה צמודה לאורך הדרך' },
              { title: 'גישה הוליסטית', icon: '🌱', description: 'טיפול שלם ומקיף' }
            ].map((value, index) => (
              <div key={index} className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in border border-white/50"
                   style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="font-bold text-gray-800 text-xl mb-2 group-hover:text-emerald-600 transition-colors">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-violet-600 hover:from-emerald-700 hover:to-violet-700 text-white font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 group">
              <Play className="w-6 h-6 ml-2 group-hover:ml-3 transition-all duration-300" />
              התחל את המסע שלך
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-emerald-400 hover:text-emerald-600 font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg">
              צפה בקורסים
            </Button>
          </div>

          {/* Video Preview Section */}
          <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="relative max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-r from-emerald-100 to-violet-100 p-1">
                <div className="bg-white rounded-3xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl relative overflow-hidden group cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop" 
                      alt="תצוגה מקדימה של הקורס"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <Play className="w-10 h-10 text-emerald-600 mr-1" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">צפה בסרטון ההיכרות שלנו</h3>
                    <p className="text-gray-600">גלה איך אנחנו יכולים לעזור לך להגיע למטרות שלך</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-gray-500 text-sm font-medium">גלה עוד</span>
              <ArrowDown className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

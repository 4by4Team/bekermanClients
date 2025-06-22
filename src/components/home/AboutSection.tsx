
import React from 'react';
import { Target, Users, Award, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: 'מטרה ברורה',
      description: 'לעזור לך להגיע לגרסה הכי בריאה ומאושרת של עצמך',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'קהילה תומכת',
      description: 'הצטרף לאלפי אנשים שכבר החלו את המסע שלהם',
      color: 'from-violet-500 to-violet-600'
    },
    {
      icon: Award,
      title: 'מקצועיות גבוהה',
      description: 'צוות מומחים בתחום התזונה והפיזיותרפיה',
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: Heart,
      title: 'גישה אישית',
      description: 'כל אדם הוא עולם ואנחנו מתאימים עבורו פתרון אישי',
      color: 'from-emerald-500 to-violet-600'
    }
  ];

  const benefits = [
    'שיפור הרגשה כללית ורמת האנרגיה',
    'ירידה במשקל בצורה בריאה ובטוחה',
    'חיזוק הגוף ושיפור כושר הלב',
    'הקלה על כאבים כרוניים',
    'שיפור איכות השינה',
    'עלייה בביטחון העצמי',
    'ליווי מקצועי לאורך כל התהליך',
    'כלים פpraktיים ליישום יומיומי'
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative">
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-emerald-100 rounded-full px-6 py-2 mb-6">
            <Heart className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-700 font-semibold">מי אנחנו</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-gradient">המסע שלך לחיים בריאים</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            אנחנו מאמינים שכל אדם זכאי לחיות חיים בריאים ומאושרים. 
            <br />
            <span className="font-semibold text-gray-700">האתר שלנו מביא לך את השילוב המושלם בין תזונה מדעית לפיזיותרפיה מתקדמת</span>
            <br />
            עם ליווי מקצועי ואישי לאורך כל הדרך.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="group text-center animate-scale-in"
                 style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative mb-8">
                <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl group-hover:shadow-emerald-500/25`}>
                  <feature.icon className="w-12 h-12 text-white" />
                </div>
                <div className={`absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-br ${feature.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Side - Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop" 
                alt="צוות מקצועי"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-emerald-500 to-violet-600 rounded-3xl flex items-center justify-center shadow-2xl animate-float">
              <Heart className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                מה תקבל מהתוכניות שלנו?
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                התוכניות שלנו בנויות על בסיס מדעי מוכח ומותאמות אישית לכל משתתף. 
                הנה חלק מהיתרונות שתחווה:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 rtl:space-x-reverse p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-violet-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-emerald-600 to-violet-600 hover:from-emerald-700 hover:to-violet-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl group">
              למד עוד עלינו
              <ArrowRight className="w-5 h-5 mr-2 group-hover:mr-3 transition-all duration-300" />
            </Button>
          </div>
        </div>

        {/* Stats Section Enhanced */}
        <div className="bg-gradient-to-r from-emerald-50 via-white to-violet-50 rounded-3xl shadow-2xl p-12 md:p-16 animate-scale-in">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">המספרים מדברים בעד עצמם</h3>
            <p className="text-xl text-gray-600">תוצאות מוכחות ומדידות</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { number: '2000+', label: 'משתתפים מאושרים', sublabel: 'שכבר שינו את חייהם' },
              { number: '15+', label: 'קורסים מקצועיים', sublabel: 'בתחומים שונים' },
              { number: '95%', label: 'שביעות רצון', sublabel: 'מהמשתתפים שלנו' }
            ].map((stat, index) => (
              <div key={index} className="space-y-4 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-6xl md:text-7xl font-bold text-gradient">{stat.number}</div>
                <div className="text-2xl font-bold text-gray-800">{stat.label}</div>
                <div className="text-gray-600 text-lg">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

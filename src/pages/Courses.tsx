import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Clock, Users, Star, Award, Calendar, MapPin, CheckCircle2, Play, TrendingUp, Zap, Target, Shield, ArrowLeft, ArrowRight, Plus, Minus, CreditCard, FileText, Headphones, Utensils, Activity, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [selectedPath, setSelectedPath] = useState('nutrition');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Course data organized by learning paths
  const learningPaths = {
    nutrition: {
      title: 'מסלול תזונה בריאה',
      description: 'הפוך למומחה בתזונה עם המסלול המקיף שלנו',
      icon: Utensils,
      color: 'from-emerald-400/20 to-emerald-500/30',
      borderColor: 'border-emerald-300/40',
      courses: [
        {
          id: 1,
          title: 'יסודות התזונה הבריאה',
          level: 'מתחילים',
          duration: '4 שבועות',
          price: 299,
          originalPrice: 399,
          students: 1250,
          rating: 4.9,
          image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop'
        },
        {
          id: 2,
          title: 'תזונה ספורטיבית מתקדמת',
          level: 'מתקדם',
          duration: '6 שבועות',
          price: 449,
          originalPrice: 599,
          students: 890,
          rating: 4.8,
          image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=250&fit=crop'
        }
      ]
    },
    therapy: {
      title: 'מסלול פיזיותרפיה',
      description: 'טכניקות מתקדמות לטיפול ושיקום',
      icon: Activity,
      color: 'from-violet-400/20 to-violet-500/30',
      borderColor: 'border-violet-300/40',
      courses: [
        {
          id: 3,
          title: 'פיזיותרפיה וטיפול בכאבי גב',
          level: 'בינוני',
          duration: '5 שבועות',
          price: 399,
          originalPrice: 499,
          students: 650,
          rating: 4.9,
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop'
        }
      ]
    },
    wellness: {
      title: 'מסלול בריאות כוללת',
      description: 'גישה הוליסטית לבריאות הגוף והנפש',
      icon: Heart,
      color: 'from-gray-400/20 to-gray-500/30',
      borderColor: 'border-gray-300/40',
      courses: [
        {
          id: 4,
          title: 'בריאות נפשית ואורח חיים',
          level: 'כל הרמות',
          duration: '4 שבועות',
          price: 349,
          originalPrice: 449,
          students: 980,
          rating: 4.7,
          image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop'
        }
      ]
    }
  };

  const testimonials = [
    {
      name: 'מיכל כהן',
      role: 'בוגרת קורס תזונה',
      content: 'הקורס שינה לי את החיים! ירדתי 15 קילו ורכשתי ידע לכל החיים',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c265?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'דוד לוי',
      role: 'בוגר קורס פיזיותרפיה',
      content: 'הטכניקות שלמדתי עזרו לי להיפטר מכאבי הגב שליוו אותי שנים',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'שרה אברהם',
      role: 'בוגרת קורס בריאות כוללת',
      content: 'למדתי איך לאזן בין עבודה, משפחה ובריאות. הקורס הכי מומלץ!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face'
    }
  ];

  const stats = [
    { number: '5,000+', label: 'בוגרי קורסים', icon: Award },
    { number: '98%', label: 'שביעות רצון', icon: Star },
    { number: '15+', label: 'קורסים פעילים', icon: Calendar },
    { number: '24/7', label: 'תמיכה', icon: Shield }
  ];

  const benefits = [
    { icon: CheckCircle2, title: 'ליווי אישי מקצועי', desc: 'מרצים מומחים זמינים לכל שאלה' },
    { icon: Play, title: 'גישה לכל החיים', desc: 'חומרי הלימוד יישארו איתך לתמיד' },
    { icon: Award, title: 'תעודה מוכרת', desc: 'תעודת גמר מוכרת בתעשייה' },
    { icon: Users, title: 'קהילה תומכת', desc: 'הצטרף לקהילת בוגרים פעילה' }
  ];

  const faqs = [
    {
      question: 'איך אני משלם עבור הקורס?',
      answer: 'אנחנו מקבלים תשלום בכרטיס אשראי, העברה בנקאית או ביט. התשלום מאובטח ב-100% עם הצפנה מתקדמת.'
    },
    {
      question: 'מתי אקבל גישה לחומרי הקורס?',
      answer: 'תקבל גישה מיידית לחומרי הקורס מיד לאחר ההרשמה והתשלום. כל החומרים זמינים 24/7.'
    },
    {
      question: 'האם יש תקופת ניסיון?',
      answer: 'כן! אנחנו מציעים החזר כספי מלא בתוך 14 יום מההרשמה אם הקורס לא מתאים לך.'
    },
    {
      question: 'איך מקבלים את התעודה?',
      answer: 'בסיום הקורס ועמידה בדרישות, תקבל תעודה דיגיטלית מוכרת ישירות למייל שלך.'
    },
    {
      question: 'האם יש תמיכה טכנית?',
      answer: 'כן, יש לנו צוות תמיכה זמין 24/7 דרך צ\'אט, מייל או טלפון לכל בעיה טכנית.'
    },
    {
      question: 'האם אפשר ללמוד בקצב שלי?',
      answer: 'בהחלט! הקורסים מתוכננים ללמידה עצמאית ואתה יכול להתקדם בקצב שנוח לך.'
    },
    {
      question: 'מה קורה אם אני לא מספיק לסיים בזמן?',
      answer: 'אין בעיה! הגישה לחומרים היא לכל החיים, אז תוכל לחזור ולהשלים מתי שנוח לך.'
    },
    {
      question: 'האם יש הנחות לקבוצות?',
      answer: 'כן, אנחנו מציעים הנחות מיוחדות לרישום קבוצתי של 3 אנשים ויותר. צור קשר לפרטים.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-emerald-50/30 via-white to-violet-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-violet-400/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-500/80 via-violet-500/80 to-gray-600/80 bg-clip-text text-transparent">
                  השנה את חייך
                </span>
              </h1>
              <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                קורסים מקצועיים בתזונה ובריאות שיעניקו לך כלים מעשיים לחיים טובים יותר
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-gradient-to-r from-emerald-400/80 to-violet-400/80 hover:from-emerald-500/80 hover:to-violet-500/80 text-white px-6 py-3 rounded-full text-base font-semibold">
                  התחל עכשיו - מבצע מיוחד!
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-emerald-400 px-6 py-3 rounded-full text-base font-semibold">
                  צפה בסרטון הדגמה
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
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
          </div>
        </div>
      </section>

      {/* Purchase Information Section */}
      <section className="py-16 bg-gradient-to-br from-white to-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">איך זה עובד?</h2>
            <p className="text-xl text-gray-600 mb-8">
              תהליך פשוט ומהיר להתחלת המסע שלך
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-emerald-50/50 to-violet-50/50 rounded-2xl p-6">
                <div className="bg-gradient-to-r from-emerald-400/70 to-violet-400/70 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">1. בחר וקנה</h3>
                <p className="text-gray-600">בחר את הקורס המתאים לך ושלם בצורה מאובטחת</p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50/50 to-violet-50/50 rounded-2xl p-6">
                <div className="bg-gradient-to-r from-emerald-400/70 to-violet-400/70 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">2. קבל גישה</h3>
                <p className="text-gray-600">קבל גישה מיידית לכל חומרי הקורס והפלטפורמה</p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50/50 to-violet-50/50 rounded-2xl p-6">
                <div className="bg-gradient-to-r from-emerald-400/70 to-violet-400/70 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">3. למד וקבל ליווי</h3>
                <p className="text-gray-600">למד בקצב שלך עם ליווי מקצועי וקהילה תומכת</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section - Updated with Tabs */}
      <section className="py-20 bg-gradient-to-br from-gray-50/70 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">מסלולי הלמידה שלנו</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              בחר את המסלול המתאים לך והתחל את המסע שלך לבריאות טובה יותר
            </p>
          </div>

          {/* Learning Paths as Tabs */}
          <div className="max-w-6xl mx-auto">
            <Tabs value={selectedPath} onValueChange={setSelectedPath} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
                {Object.entries(learningPaths).map(([key, path]) => {
                  const IconComponent = path.icon;
                  return (
                    <TabsTrigger 
                      key={key} 
                      value={key}
                      className="flex items-center gap-3 py-4 px-6 rounded-xl text-base font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-400/10 data-[state=active]:to-violet-400/10 data-[state=active]:shadow-md"
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="hidden sm:inline">{path.title}</span>
                      <span className="sm:hidden">{path.title.split(' ')[1]}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {Object.entries(learningPaths).map(([key, path]) => (
                <TabsContent key={key} value={key} className="animate-fade-in">
                  <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold mb-4 text-gray-800">
                      {path.title}
                    </h3>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      {path.description}
                    </p>
                  </div>

                  {/* Courses Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {path.courses.map((course, index) => (
                      <Card key={course.id} className="group hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in-up border-0 shadow-lg hover:scale-105 overflow-hidden"
                            style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="relative overflow-hidden">
                          <img 
                            src={course.image} 
                            alt={course.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${learningPaths[selectedPath].color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-emerald-600">
                            {course.level}
                          </div>
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-400/80 to-violet-400/80 text-white rounded-full px-3 py-1 text-sm font-bold">
                            ₪{course.price}
                            <span className="line-through text-xs opacity-75 mr-1">₪{course.originalPrice}</span>
                          </div>
                        </div>
                        
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{course.rating}</span>
                            </div>
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500">
                              <Users className="w-4 h-4" />
                              <span>{course.students}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-emerald-600 transition-colors">
                            {course.title}
                          </h3>
                          
                          <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                              <Clock className="w-4 h-4" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                              חסכון ₪{course.originalPrice - course.price}
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Link to={`/course/${course.id}`}>
                              <Button className="w-full bg-gradient-to-r from-emerald-400/80 to-violet-400/80 hover:from-emerald-500/80 hover:to-violet-500/80 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 text-sm py-2">
                                פרטים נוספים
                              </Button>
                            </Link>
                            <Link to={`/course/${course.id}/register`}>
                              <Button variant="outline" className="w-full border-2 border-emerald-400/60 text-emerald-600 hover:bg-emerald-50 font-semibold rounded-full transition-all duration-300 text-sm py-2">
                                הירשם עכשיו
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced cloud gradient */}
      <section className="py-20 relative overflow-hidden">
        {/* Enhanced cloud-like gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-white to-violet-100/50"></div>
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-emerald-200/40 to-emerald-100/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-gradient-to-tl from-violet-200/40 to-violet-100/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-br from-gray-200/30 to-gray-100/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-150/30 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-violet-150/30 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-gray-800">שאלות נפוצות</h2>
              <p className="text-xl text-gray-600">
                מצא תשובות לכל השאלות שלך על הקורסים והתהליך
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className={`bg-white/70 backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-300 ${
                  openFaq === index 
                    ? 'border-emerald-300/60 shadow-xl shadow-emerald-100/50 ring-1 ring-emerald-200/50' 
                    : 'border-gray-200/60 shadow-lg hover:shadow-xl'
                }`}>
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-right flex items-center justify-between hover:bg-white/30 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-emerald-600 flex-shrink-0 mr-4" />
                    ) : (
                      <Plus className="w-5 h-5 text-emerald-600 flex-shrink-0 mr-4" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">מה אומרים הבוגרים שלנו</h2>
            <p className="text-xl text-gray-600">
              הצלחות אמיתיות של אנשים אמיתיים
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-gradient-to-br from-white to-gray-50/70 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover ml-4"
                    />
                    <div>
                      <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-400/70 to-violet-400/70 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">מוכן להתחיל את המסע?</h2>
            <p className="text-xl mb-8 opacity-90">
              הצטרף לאלפי הבוגרים שכבר שינו את חייהם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-full text-base font-semibold">
                בחר את הקור
 שלך
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-6 py-3 rounded-full text-base font-semibold">
                קבל ייעוץ חינם
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;


import React from 'react';
import { Heart, Target, Users, Award, CheckCircle, Star, ArrowRight, Sparkles, Handshake, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'אהבה למקצוע',
      description: 'אנחנו אוהבים מה שאנחנו עושים ורואים בכל משתתף הזדמנות לשנות חיים. הוותק והניסיון שלנו מאפשרים לנו לתת מענה מקצועי ואישי לכל אדם.'
    },
    {
      icon: Target,
      title: 'מיקוד בתוצאות',
      description: 'כל קורס נבנה עם מטרה ברורה ונתונים מדידים להצלחה. אנחנו מאמינים בגישה מבוססת מדע ובמעקב רציף אחר התקדמות כל משתתף.'
    },
    {
      icon: Users,
      title: 'קהילה חזקה',
      description: 'בונים רשת תמיכה של אנשים עם חזון משותף. הקהילה שלנו היא חלק בלתי נפרד מההצלחה - כאן תמצא תמיכה, עידוד והשראה.'
    },
    {
      icon: Award,
      title: 'איכות ללא פשרות',
      description: 'מחויבים לרמה הגבוהה ביותר של מקצועיות ותוכן. כל המרצים שלנו הם מומחים מובילים בתחומם עם רישיון מקצועי ושנות ניסיון רבות.'
    }
  ];

  const achievements = [
    'למעלה מ-2000 משתתפים מאושרים בקורסים השונים',
    '15+ קורסים מקצועיים פעילים בתחומי התזונה והפיזיותרפיה',
    '95% שביעות רצון ממשתתפים - נתון שנמדד ברבעון',
    'צוות של 20+ מומחים מובילים בתחומם',
    'שיתופי פעולה עם מרכזים רפואיים מובילים בארץ',
    'הכרה מקצועית מהמכון הישראלי לתזונה',
    'תעודות והסמכות מהמועצה לפיזיותרפיה',
    'פרסים על חדשנות בתחום הבריאות הדיגיטלית'
  ];

  // Updated team members - only 2 experts with collaboration focus
  const teamMembers = [
    {
      name: 'ד"ר שרה כהן',
      role: 'מומחית תזונה קלינית',
      experience: '15+ שנות ניסיון',
      specialization: 'תזונה טיפולית ושיקום תזונתי',
      collaborationFocus: 'מתמחה בשילוב תזונה עם טיפול פיזי לתוצאות מיטביות',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'פיזיותרפיסט דן לוי',
      role: 'מומחה פיזיותרפיה אורthופדית',
      experience: '12+ שנות ניסיון',
      specialization: 'שיקום וטיפול בכאבי גב ופציעות ספורט',
      collaborationFocus: 'מוביל גישה משולבת של פיזיותרפיה ותזונה לריפוי מהיר',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50/50 via-white to-violet-50/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-32 left-20 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-8 animate-scale-in">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700 font-medium">הסיפור שלנו</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-fade-in-up">
              <span className="text-gradient">המסע שהחל מחלום</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed mb-12 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              התחלנו מחלום פשוט - להנגיש לכל אדם בישראל את הכלים והידע 
              <br />
              <span className="font-semibold text-emerald-600">לחיות חיים בריאים יותר, מאושרים יותר ומלאי אנרגיה.</span>
              <br />
              היום, אחרי שנים של עבודה מסורה, אנחנו גאים להיות הפלטפורמה המובילה בתחום.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section Enhanced */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-emerald-100/70 rounded-full px-6 py-2 mb-6">
                <Target className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">המשימה שלנו</span>
              </div>
              
              <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                לא רק בריאות - 
                <br />
                <span className="text-gradient">אורח חיים שלם</span>
              </h2>
              
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-800">אנחנו מאמינים שבריאות היא לא רק היעדר מחלה</strong>, אלא מצב של רווחה פיזית, 
                  נפשית וחברתית מלאה. המטרה שלנו היא לתת לכל אדם את הכלים לבנות 
                  אורח חיים בריא ובר-קיימא שמתאים בדיוק אליו.
                </p>
                <p>
                  <strong className="text-emerald-600">השילוב הייחודי שלנו</strong> בין תזונה מדעית לפיזיותרפיה מתקדמת יוצר 
                  גישה הוליסטית שמתייחסת לאדם כשלם - לא רק לסימפטומים או לבעיות נקודתיות, 
                  אלא למכלול החיים שלו.
                </p>
                <p>
                  <strong className="text-violet-600">אנחנו כאן בשבילך</strong> - גאים להיות חלק מהמסע האישי של כל משתתף, 
                  ולתת לו את התמיכה, הכלים והביטחון להגיע ליעדים שלו ולחיות את החיים שהוא חולם עליהם.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                {[
                  { label: 'שנות ניסיון', value: '8+' },
                  { label: 'תחומי מומחיות', value: '12+' },
                  { label: 'הצלחות מתועדות', value: '2000+' },
                  { label: 'שביעות רצון', value: '95%' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50/70 to-white rounded-2xl shadow-lg animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=500&fit=crop" 
                  alt="צוות מקצועי"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-emerald-500 to-violet-600 rounded-3xl flex items-center justify-center shadow-2xl animate-float">
                <Heart className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-24 relative overflow-hidden">
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
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-violet-100/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Handshake className="w-5 h-5 text-violet-600" />
              <span className="text-violet-700 font-semibold">השיתוף שלנו</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">כשתזונה פוגשת פיזיותרפיה</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              הקורסים שלנו הם פרי שיתוף פעולה ייחודי בין שני מומחים מובילים בתחומם,
              <br />
              שיחד יצרו גישה חדשנית המשלבת תזונה ופיזיותרפיה לתוצאות מרביות
            </p>
          </div>

          {/* Collaboration Benefits - Enhanced with frames */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Zap,
                title: 'שיקום מהיר יותר',
                description: 'השילוב בין תזונה נכונה לטיפול פיזי מאיץ את תהליכי הריפוי והשיקום'
              },
              {
                icon: Target,
                title: 'תוצאות מדויקות',
                description: 'גישה מותאמת אישית שלוקחת בחשבון את כל הגורמים המשפיעים על הבריאות'
              },
              {
                icon: CheckCircle,
                title: 'יעילות מוכחת',
                description: 'מאות מקרי הצלחה שמוכיחים את יעילות השילוב הייחודי הזה'
              }
            ].map((benefit, index) => (
              <div key={index} className={`bg-white/70 backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-300 border-emerald-300/60 shadow-xl shadow-emerald-100/50 ring-1 ring-emerald-200/50 hover:shadow-2xl animate-scale-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="p-8 text-center">
                  <div className="bg-gradient-to-br from-emerald-400/80 via-violet-400/80 to-emerald-500/80 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-emerald-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Updated with cloudy background and elegant borders */}
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced cloud-like gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 via-white to-emerald-100/50"></div>
          <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-violet-200/40 to-violet-100/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-emerald-200/40 to-emerald-100/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-gray-200/30 to-gray-100/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-violet-150/30 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-emerald-150/30 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-violet-100/70 rounded-full px-6 py-2 mb-6">
              <Users className="w-5 h-5 text-violet-600" />
              <span className="text-violet-700 font-semibold">הצוות שלנו</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">המומחים המובילים שלנו</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              פגש את שני המומחים שיובילו אותך בדרך לשינוי - יחד הם יוצרים שילוב מנצח
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-3xl border overflow-hidden transition-all duration-500 border-violet-300/60 shadow-xl shadow-violet-100/50 ring-1 ring-violet-200/50 hover:shadow-2xl hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="p-10 text-center">
                  <div className="relative mb-8">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg transition-shadow duration-300"
                    />
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-emerald-500 to-violet-600 text-white rounded-full px-6 py-2 text-sm font-bold shadow-lg">
                        מומחה מוביל
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-800 mb-3 hover:text-emerald-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-violet-600 font-semibold text-lg mb-2">{member.role}</p>
                  <p className="text-gray-500 mb-4">{member.experience}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{member.specialization}</p>
                  
                  {/* Collaboration Focus */}
                  <div className="bg-gradient-to-r from-emerald-50/70 to-violet-50/70 rounded-2xl p-6 border border-emerald-200/50">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center justify-center">
                      <Handshake className="w-5 h-5 ml-2 text-emerald-600" />
                      השיתוף שלנו
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.collaborationFocus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Collaboration Highlight */}
          <div className="bg-gradient-to-r from-emerald-50/50 via-white to-violet-50/50 rounded-3xl shadow-2xl p-12 text-center animate-scale-in">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-violet-600 w-20 h-20 rounded-full flex items-center justify-center">
                  <Handshake className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                יחד אנחנו חזקים יותר
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                השילוב הייחודי בין הידע העמוק בתזונה והמומחיות בפיזיותרפיה מאפשר לנו להציע פתרונות מקיפים וחדשניים. 
                כל קורס בנוי על הבנה עמוקה של הקשר בין תזונה נכונה לבריאות פיזית, 
                ומתואם בקפידה בין שני המומחים כדי לתת לך את הכלים הטובים ביותר להצלחה.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-emerald-600 to-violet-600 hover:from-emerald-700 hover:to-violet-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl group">
                  גלה את הקורסים שלנו
                  <ArrowRight className="w-5 h-5 mr-2 group-hover:mr-3 transition-all duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section Enhanced with cloudy background and elegant borders */}
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced cloud-like gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-white to-violet-100/50"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-emerald-200/40 to-emerald-100/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-gradient-to-tl from-violet-200/40 to-violet-100/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-br from-gray-200/30 to-gray-100/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-violet-150/30 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-emerald-150/30 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-emerald-100/70 rounded-full px-6 py-2 mb-6">
              <Award className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">הערכים שלנו</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">מה מניע אותנו</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              הערכים שמנחים אותנו בכל מה שאנחנו עושים ובכל החלטה שאנחנו מקבלים
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-3xl border overflow-hidden transition-all duration-500 border-emerald-300/60 shadow-xl shadow-emerald-100/50 ring-1 ring-emerald-200/50 hover:shadow-2xl hover:scale-105 animate-fade-in-up"
                   style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="p-10">
                  <div className="flex items-start space-x-6 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-violet-600 rounded-2xl flex items-center justify-center transition-transform duration-300 shadow-lg">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-emerald-600 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section - Enhanced with cloudy background and elegant borders */}
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced cloud-like gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 via-white to-emerald-100/50"></div>
          <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-violet-200/40 to-violet-100/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-emerald-200/40 to-emerald-100/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-gray-200/30 to-gray-100/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-violet-150/30 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-emerald-150/30 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-emerald-100/80 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">ההישגים שלנו</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-gray-800">
              המספרים מספרים את הסיפור
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              תוצאות מוכחות ונתונים אמיתיים מהשטח
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-300 border-emerald-300/60 shadow-xl shadow-emerald-100/50 ring-1 ring-emerald-200/50 hover:shadow-2xl animate-fade-in-up"
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start space-x-4 rtl:space-x-reverse p-6">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-emerald-500 transition-colors" />
                  </div>
                  <span className="text-lg text-gray-700 transition-colors font-medium leading-relaxed">{achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Redesigned with modern, clean style */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-violet-500/5 to-emerald-600/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-emerald-100/80 rounded-full px-6 py-3 mb-6">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">הצטרף אלינו</span>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-800 animate-fade-in-up">
              מוכן להצטרף למהפכה?
            </h2>
            <p className="text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              בוא נבנה יחד את המסע שלך לחיים בריאים יותר, מאושרים יותר ומלאי אנרגיה.
              <br />
              <strong className="text-gray-800">זה הזמן שלך לשינוי - אנחנו כאן כדי לעזור לך להגיע לשם.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-gradient-to-r from-emerald-500 to-violet-600 hover:from-emerald-600 hover:to-violet-700 text-white font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg group">
                התחל עכשיו
                <ArrowRight className="w-6 h-6 mr-2 group-hover:mr-3 transition-all duration-300" />
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600 font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 hover:scale-105">
                צור קשר
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

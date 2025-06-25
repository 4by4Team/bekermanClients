import { ArrowLeft, Sparkles, Heart, Target, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


function CloudsBackgroundSection() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute top-10 left-10 w-80 h-80 bg-emerald-500/25 rounded-full blur-3xl animate-float" />
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-8 right-12 w-72 h-72 bg-emerald-600/28 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 left-16 w-[400px] h-[400px] bg-violet-600/26 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-emerald-400/32 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      <div className="absolute top-2/5 right-20 w-[380px] h-[380px] bg-violet-500/28 rounded-full blur-3xl animate-float" style={{ animationDelay: "5s" }} />
      <div className="absolute bottom-32 left-12 w-[350px] h-[350px] bg-emerald-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "6s" }} />
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[420px] h-[420px] bg-violet-400/29 rounded-full blur-3xl animate-float" style={{ animationDelay: "7s" }} />
      <div className="absolute bottom-28 right-16 w-[340px] h-[340px] bg-emerald-600/27 rounded-full blur-3xl animate-float" style={{ animationDelay: "8s" }} />
      <div className="absolute top-3/5 left-1/4 w-[320px] h-[320px] bg-violet-600/25 rounded-full blur-3xl animate-float" style={{ animationDelay: "9s" }} />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="text-center max-w-5xl mx-auto mb-20">
      <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-white/90 via-gray-50/95 to-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-8 animate-fade-in-up border border-white/30">
        <Sparkles className="w-5 h-5 text-emerald-600" />
        <span className="text-gray-700 font-medium">הפלטפורמה המובילה בישראל לחיים בריאים</span>
      </div>
      <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <span className="text-gradient block mb-4">חיים בריאים</span>
        <span className="text-gray-800 block">מתחילים כאן</span>
      </h1>
      <div className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 space-y-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <p className="max-w-4xl mx-auto">
          <strong className="text-emerald-600">ברוכים הבאים לבית הספר המוביל בישראל לבריאות ורווחה.</strong>
          <br />
          כאן תמצאו מסלולי למידה מקצועיים ומעמיקים שיעניקו לכם את הכלים הנחוצים לשינוי אמיתי ומתמשך בחייכם.
        </p>
        <p className="max-w-4xl mx-auto">
          המומחים שלנו פיתחו תוכניות לימוד ייחודיות המבוססות על המחקרים העדכניים ביותר בתחומי התזונה, הפיזיותרפיה והבריאות הכוללת.
          <span className="font-semibold text-violet-600"> אנחנו מאמינים שכל אדם זכאי לחיים בריאים ומלאים.</span>
        </p>
        <p className="max-w-4xl mx-auto">
          הקהילה שלנו מונה אלפי בוגרים שכבר חוו שינוי משמעותי בחייהם - הם הוכיחו שעם הידע הנכון, הנחיה מקצועית וקהילה תומכת,
          <strong className="text-gray-800"> כל מטרה בריאותית ניתנת להשגה.</strong>
        </p>
      </div>
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
        <Link to="/about">
          <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-violet-600 hover:from-emerald-700 hover:to-violet-700 text-white font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 group">
            <ArrowLeft className="w-6 h-6 ml-2 group-hover:ml-3 transition-all duration-300" />
            למד עלינו יותר
          </Button>
        </Link>
      </div>
    </section>
  );
}

function StatsSection({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      {stats.map((stat, index) => (
        <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
          <div className="bg-gradient-to-br from-white/80 via-gray-50/90 to-white/85 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/40">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturesSection({ features }) {
  return (
    <section className="max-w-7xl mx-auto relative py-20">
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-white to-violet-100/50"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-200/40 to-emerald-100/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-violet-200/40 to-violet-100/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-gray-200/30 to-gray-100/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-emerald-150/30 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-violet-150/30 to-transparent rounded-full blur-2xl"></div>
      </div>
      <div className="relative z-10">
        <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">למה לבחור בנו?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אנחנו מציעים חוויית למידה ייחודית המשלבת מקצועיות, חדשנות ותמיכה אישית
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-3xl border overflow-hidden transition-all duration-500 border-emerald-300/60 shadow-xl shadow-emerald-100/50 ring-1 ring-emerald-200/50 hover:shadow-2xl hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${1.4 + index * 0.2}s` }}
            >
              <div className="p-8 text-center">
                <div className="bg-gradient-to-r from-emerald-500 to-violet-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToActionSection() {
  return (
    <section className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: "2.2s" }}>
      <div className="bg-gradient-to-br from-emerald-50/80 via-white/70 to-violet-50/80 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto border border-white/40 shadow-xl">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          מוכן להתחיל את המסע שלך?
        </h3>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          הצטרף לאלפי האנשים שכבר בחרו להשקיע בבריאות שלהם ולשנות את חייהם לטובה
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/courses">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-violet-600 hover:from-emerald-700 hover:to-violet-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
              צפה בקורסים
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
              קבל מידע נוסף
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
const features = [
  {
    icon: Heart,
    title: "אהבה לבריאות",
    description: "גישה חמה ואישית לכל תלמיד, עם דגש על בריאות הגוף והנפש",
  },
  {
    icon: Target,
    title: "מטרה ברורה",
    description: "מסלולי למידה מובנים שמובילים להשגת יעדים בריאותיים מדויקים",
  },
  {
    icon: Shield,
    title: "מהימנות מקצועית",
    description: "מידע מבוסס מחקר ומדע, בהנחיית מומחים מוכרים בישראל",
  },
  {
    icon: Users,
    title: "קהילה תומכת",
    description: "רשת של אנשים שחושבים כמוך ותומכים במסע השינוי שלך",
  },
];
const stats = [
  { number: "5,000+", label: "בוגרים מאושרים" },
  { number: "98%", label: "שביעות רצון" },
  { number: "15+", label: "קורסים מקצועיים" },
  { number: "5+", label: "שנות ניסיון" },
];

function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <CloudsBackgroundSection />
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <HeroSection />
        <StatsSection stats={stats} />
        <FeaturesSection features={features} />
        <CallToActionSection />
      </div>
    </div>
  );
}

export default Home;
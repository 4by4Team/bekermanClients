import { CreditCard, FileText, Headphones, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import CoursesGrid from "./CourseGrid";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchCourses } from "@/store/coursesSlice";
import { useEffect } from "react";
import { useCourses } from "@/hooks/useCourses";
import { Benefit } from "@/types/CoursesType";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50/30 via-white to-violet-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-violet-400/5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-500/80 via-violet-500/80 to-gray-600/80 bg-clip-text text-transparent">
            מסלולי לימוד את חייך
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            קורסים מקצועיים בתזונה ובריאות שיעניקו לך כלים מעשיים לחיים טובים
            יותר
          </p>
        </div>
      </div>
    </section>
  );
};

const HowItWorkSection = () => {
  const steps = [
    {
      icon: CreditCard,
      title: "1. בחר וקנה",
      desc: "בחר את הקורס המתאים לך ושלם בצורה מאובטחת",
    },
    {
      icon: FileText,
      title: "2. קבל גישה",
      desc: "קבל גישה מיידית לכל חומרי הקורס והפלטפורמה",
    },
    {
      icon: Headphones,
      title: "3. למד וקבל ליווי",
      desc: "למד בקצב שלך עם ליווי מקצועי וקהילה תומכת",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            איך זה עובד?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            תהליך פשוט ומהיר להתחלת המסע שלך
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50/50 to-violet-50/50 rounded-2xl p-6"
              >
                <div className="bg-gradient-to-r from-emerald-400/70 to-violet-400/70 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-400/70 to-violet-400/70 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">מוכן להתחיל את המסע?</h2>
          <p className="text-xl mb-8 opacity-90">
            הצטרף לאלפי הבוגרים שכבר שינו את חייהם
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-full text-base font-semibold"
            >
              בחר את הקורס שלך
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits: Benefit[] = useCourses().benefits;

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50/30 to-violet-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            למה לבחור בנו?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אנחנו מעניקים חוויית למידה מקצועית ומותאמת אישית
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-white to-gray-50/70 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="bg-gradient-to-r from-emerald-400/70 to-violet-400/70 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqSection = () => {
  const { faqs, openFaq, setOpenFaq } = useCourses();

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              שאלות נפוצות
            </h2>
            <p className="text-lg text-gray-600">
              תשובות לשאלות הנפוצות ביותר על הקורסים שלנו
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white/70 backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-300 ${
                  openFaq === index
                    ? "border-emerald-300/60 shadow-xl shadow-emerald-100/50 ring-1 ring-emerald-200/50"
                    : "border-gray-200/60 shadow-lg hover:shadow-xl"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-right flex items-center justify-between hover:bg-white/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-emerald-600 flex-shrink-0 mr-4" />
                  ) : (
                    <Plus className="w-5 h-5 text-emerald-600 flex-shrink-0 mr-4" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Courses = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    data: courses,
    loading,
    error,
  } = useSelector((state: RootState) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <HeroSection />
      <HowItWorkSection />

      {loading && <div className="text-center my-4">טוען קורסים...</div>}
      {error && <div className="text-center text-red-500 my-4">{error}</div>}
      {!loading && !error && (
        <CoursesGrid courses={courses} themeColor="emerald" />
      )}

      <CtaSection />
      <FaqSection />
      <BenefitsSection />
    </div>
  );
};

export default Courses;

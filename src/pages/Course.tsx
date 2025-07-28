import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Clock,
  Users,
  Star,
  CheckCircle2,
  Calendar,
  Award,
  Play,
} from "lucide-react";
import { fetchCourseById } from "@/store/coursesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";

const Course = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const {
    selectedCourse: course,
    loading,
    error,
  } = useSelector((state: RootState) => state.courses);

  useEffect(() => {
    if (id) {
      dispatch(fetchCourseById(id));
    }
  }, [dispatch, id]);

  if (loading) return <div>טוען...</div>;
  if (error) return <div>שגיאה: {error}</div>;
  if (!course) return <div>קורס לא נמצא</div>;

  // Mock course data - in real app this would come from API
  const mockCourse = {
    id: 1,
    title: "קורס יסודות התזונה הבריאה",
    subtitle: "למד את העקרונות הבסיסיים לתזונה בריאה ואורח חיים פעיל",
    description:
      "קורס מקיף שמעניק כלים מעשיים לשינוי הרגלי תזונה ויצירת אורח חיים בריא. הקורס מתאים לכל מי שמעוניין להשפיע על בריאותו בצורה חיובית.",
    price: 799,
    originalPrice: 999,
    duration: "8 שבועות",
    lessons: 24,
    level: "מתחילים",
    students: 1250,
    rating: 4.9,
    reviews: 189,
    instructor: 'ד"ר שרה כהן',
    instructorTitle: "דיאטנית קלינית ומומחית תזונה",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop",
    features: [
      "ליווי אישי מקצועי",
      "חומרי לימוד דיגיטליים",
      "תכניות תזונה מותאמות אישית",
      "גישה לקהילת התלמידים",
      "תמיכה 24/7",
      "תעודת גמר",
    ],
    curriculum: [
      {
        week: 1,
        title: "יסודות התזונה",
        topics: [
          "מקרו ומיקרו נוטריינטים",
          "חישוב צרכים קלוריים",
          "קריאת תוויות מזון",
        ],
      },
      {
        week: 2,
        title: "תכנון ארוחות",
        topics: [
          "בניית תפריט שבועי",
          "הכנת רשימת קניות",
          "ארוחות מהירות ובריאות",
        ],
      },
      {
        week: 3,
        title: "הרגלי אכילה",
        topics: ["זיהוי הרגלים שליליים", "יצירת שגרה בריאה", "התמודדות עם לחץ"],
      },
      {
        week: 4,
        title: "פעילות גופנית",
        topics: ["שילוב תנועה בשגרה", "תרגילים בבית", "מתיחות ויוגה"],
      },
    ],
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/courses">
          <Button variant="outline" className="mb-6 hover:bg-gray-50">
            <ArrowLeft className="w-4 h-4 ml-2" />
            חזרה לקורסים
          </Button>
        </Link>
      </div>

      {/* Course Header */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64 md:h-80">
                  <img
                    src={mockCourse.image}
                    alt={mockCourse.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-emerald-600">
                    {mockCourse.level}
                  </div>
                </div>

                <div className="p-8">
                  <h1 className="text-4xl font-bold mb-4 text-gray-800 leading-tight">
                    {mockCourse.title}
                  </h1>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {mockCourse.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Clock className="w-5 h-5" />
                      <span>{mockCourse.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Users className="w-5 h-5" />
                      <span>{mockCourse.students} תלמידים</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span>
                        {mockCourse.rating}/5 ({mockCourse.reviews} ביקורות)
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    {mockCourse.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar - Course Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-800">
                      ₪{mockCourse.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ₪{mockCourse.originalPrice}
                    </span>
                  </div>
                  <span className="bg-gradient-to-r from-emerald-100 to-violet-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                    חסכון של ₪{mockCourse.originalPrice - mockCourse.price}
                  </span>
                </div>

                <Link to={`/course/${mockCourse.id}/register`}>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-violet-600 hover:from-emerald-700 hover:to-violet-700 text-white font-semibold py-4 text-lg mb-6">
                    הירשם לקורס
                  </Button>
                </Link>

                <h3 className="font-bold text-gray-800 mb-4">מה כלול בקורס:</h3>
                <div className="space-y-3">
                  {mockCourse.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 ml-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-violet-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">המרצה</h4>
                  <p className="font-medium text-gray-700">
                    {mockCourse.instructor}
                  </p>
                  <p className="text-sm text-gray-600">
                    {mockCourse.instructorTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;

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

// Back Navigation Component
const BackNavigation = () => (
  <div className="container mx-auto px-4 py-8">
    <Link to="/courses">
      <Button variant="outline" className="mb-6 hover:bg-gray-50">
        <ArrowLeft className="w-4 h-4 ml-2" />
        חזרה לקורסים
      </Button>
    </Link>
  </div>
);

// Course Header Image Component
const CourseHeaderImage = ({
  backgroundUrl,
  title,
}: {
  backgroundUrl: string;
  title: string;
}) => (
  <div className="relative h-64 md:h-80">
    <img
      src={backgroundUrl}
      alt={title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-emerald-600">
      מתחילים
    </div>
  </div>
);

// Course Stats Component
const CourseStats = ({ students }: { students: number }) => (
  <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <Users className="w-5 h-5" />
      <span>{students} תלמידים</span>
    </div>
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <Star className="w-5 h-5 text-yellow-400 fill-current" />
      <span>4.9/5 (189 ביקורות)</span>
    </div>
  </div>
);

// Course Features List Component
const CourseFeatures = () => (
  <div className="space-y-3">
    {[
      "ליווי אישי מקצועי",
      "חומרי לימוד דיגיטליים",
      "תכניות תזונה מותאמות אישית",
      "גישה לקהילת התלמידים",
    ].map((feature, index) => (
      <div key={index} className="flex items-center text-gray-700">
        <CheckCircle2 className="w-5 h-5 text-emerald-500 ml-2 flex-shrink-0" />
        <span>{feature}</span>
      </div>
    ))}
  </div>
);

// Instructor Info Component
const InstructorInfo = () => (
  <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-violet-50 rounded-lg">
    <h4 className="font-semibold text-gray-800 mb-2">המרצה</h4>
    <p className="font-medium text-gray-700">ד"ר שרה כהן</p>
    <p className="text-sm text-gray-600">דיאטנית קלינית ומומחית תזונה</p>
  </div>
);

// Course Sidebar Component
const CourseSidebar = ({ course }: { course: any }) => (
  <div className="lg:col-span-1">
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-3xl font-bold text-gray-800">
            ₪{course.price}
          </span>
        </div>
      </div>

      <Link to={`/course/${course.id}/register`}>
        <Button className="w-full bg-gradient-to-r from-emerald-600 to-violet-600 hover:from-emerald-700 hover:to-violet-700 text-white font-semibold py-4 text-lg mb-6">
          הירשם לקורס
        </Button>
      </Link>

      <h3 className="font-bold text-gray-800 mb-4">מה כלול בקורס:</h3>
      <CourseFeatures />
      <InstructorInfo />
    </div>
  </div>
);

// Course Main Content Component
const CourseMainContent = ({ course }: { course: any }) => (
  <div className="lg:col-span-2">
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <CourseHeaderImage
        backgroundUrl={course.backgroundUrl}
        title={course.title}
      />

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 leading-tight">
          {course.title}
        </h1>
        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          קורס מקיף שמעניק כלים מעשיים לשינוי הרגלי תזונה ויצירת אורח חיים בריא
        </p>

        <CourseStats students={course.students} />

        <p className="text-gray-700 leading-relaxed text-lg">
          {course.description}
        </p>
      </div>
    </div>
  </div>
);

// Main Course Component
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

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <BackNavigation />

      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CourseMainContent course={course} />
            <CourseSidebar course={course} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;

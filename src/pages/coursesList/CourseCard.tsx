import React, { memo } from "react";
import { Clock, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Course } from "@/types/CoursesType";

interface CourseCardProps {
  course: Course;
  themeColor: string;
  delay?: number;
}

const CourseImage = memo(
  ({
    backgroundUrl,
    title,
    themeColor,
    price,
  }: {
    backgroundUrl: string;
    title: string;
    themeColor: string;
    price: number;
  }) => (
    <div className="relative overflow-hidden">
      <img
        src={backgroundUrl}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${themeColor} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
      />
      <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-400/80 to-violet-400/80 text-white rounded-full px-3 py-1 text-sm font-bold">
        ₪{price}
      </div>
    </div>
  )
);

const CourseMetadata = memo(() => (
  <div className="flex items-center justify-between mb-3">
    <div className="flex items-center space-x-1 rtl:space-x-reverse">
      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    </div>
    <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500">
      <Users className="w-4 h-4" />
    </div>
  </div>
));

const CourseTitle = memo(({ title }: { title: string }) => (
  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-emerald-600 transition-colors">
    {title}
  </h3>
));

const ActionButtons = memo(({ courseId }: { courseId: number }) => (
  <div className="space-y-2">
    <Link to={`/course/${courseId}`}>
      <Button className="w-full bg-gradient-to-r from-emerald-400/80 to-violet-400/80 hover:from-emerald-500/80 hover:to-violet-500/80 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 text-sm py-2">
        פרטים נוספים
      </Button>
    </Link>
    <Link to={`/course/${courseId}/register`}>
      <Button
        variant="outline"
        className="w-full border-2 border-emerald-400/60 text-emerald-600 hover:bg-emerald-50 font-semibold rounded-full transition-all duration-300 text-sm py-2"
      >
        הירשם עכשיו
      </Button>
    </Link>
  </div>
));

const CourseCard: React.FC<CourseCardProps> = memo(
  ({ course, themeColor, delay = 0 }) => {
    const { id, title, price, backgroundUrl } = course;

    return (
      <Card
        className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 shadow-lg hover:scale-105 overflow-hidden animate-fade-in-up"
        style={{ animationDelay: `${delay}s` }}
      >
        <CourseImage
          backgroundUrl={backgroundUrl}
          title={title}
          themeColor={themeColor}
          price={price}
        />
        <CardContent className="p-6">
          <CourseMetadata />
          <CourseTitle title={title} />
          <ActionButtons courseId={id} />
        </CardContent>
      </Card>
    );
  }
);

CourseCard.displayName = "CourseCard";

export default CourseCard;

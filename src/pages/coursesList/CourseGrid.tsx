import { Course } from '@/types/CoursesType';
import React from 'react';
import CourseCard from './CourseCard';

interface CoursesGridProps {
  courses: Course[];
  themeColor: string;
}

const CoursesGrid: React.FC<CoursesGridProps> = ({ courses, themeColor }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {courses.map((course, index) => (
        <CourseCard key={course.id} course={course} themeColor={themeColor} delay={index * 0.1} />
      ))}
    </div>
  );
};

export default CoursesGrid;

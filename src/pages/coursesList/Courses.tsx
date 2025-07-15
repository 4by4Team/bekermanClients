

// // export default Courses;
// מבנה קבצים מומלץ (לפי הכללים שלך):
// src/components/Courses/
// ├── Courses.tsx ← קומפוננטת עמוד ראשית
// ├── LearningPathsTabs.tsx ← Tabs של מסלולי לימוד
// ├── CoursesGrid.tsx ← גריד של קורסים
// ├── CourseCard.tsx ← כרטיס בודד
// ├── StatsSection.tsx ← אזור סטטיסטיקות
// ├── HeroSection.tsx ← אזור ההירו העליון
// ├── PurchaseInfoSection.tsx ← איך זה עובד
// ├── BenefitsSection.tsx ← למה לבחור בנו
// ├── FaqSection.tsx ← שאלות ותשובות
// ├── CtaSection.tsx ← CTA אחרון
// └── hooks/useCoursesLogic.ts ← ניהול state + פונקציות
// types/
// └── course.types.ts ← טיפוסים

// נתחיל מ-Courses.tsx – הרכיב הראשי שמזמן את כל הסקשנים

import BenefitsSection from './BenefitsSection';
import CtaSection from './CtaSection';
import HeroSection from './HeroSection';
import PurchaseInfoSection from './PurchaseInfoSection';
import { useCourses } from '@/hooks/useCourses';
import LearningPaths from './LearningPaths';

const Courses = () => {
  const {
    selectedPath,
    setSelectedPath,
    learningPaths,
  } = useCourses();

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <HeroSection />
      <PurchaseInfoSection />
      <LearningPaths
        selectedPath={selectedPath}
        setSelectedPath={setSelectedPath} learningPaths={learningPaths}        
      />
      <CtaSection />
      <BenefitsSection/>
    </div>
  );
};

export default Courses;

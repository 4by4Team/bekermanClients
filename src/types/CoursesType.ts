// export type LearningPathKey = 'nutrition' | 'fitness' | 'wellness';

import { LucideIcon } from "lucide-react";

// export interface Course {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   duration: string;
//   price: number;
//   isFree?: boolean;
// }

// export interface LearningPath {
//   id:number;
//   title: string;
//   description: string;
//   color: string;
//   courses: Course[];
// }

// export type LearningPathsMap = Record<LearningPathKey, LearningPath>;
// סוגי מסלולים אפשריים – אופציונלי אם יש לך מפתחות קבועים
export type LearningPathKey = "nutrition" | "therapy" | "wellness";

export interface Course {
  id: number;
  title: string;
  description: string;
  backgroundUrl: string;
  price: number;
  linkToCourse: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  students: number;
}

export interface LearningPath {
  id: number;
  title: string;
  description: string;
  color: string;
  courses: Course[];
}

// מיפוי לפי מפתחות קבועים (אם את משתמשת בזה ב-Tabs)
export type LearningPathsMap = Record<LearningPathKey, LearningPath>;

// סטטיסטיקות לדוגמה – לדשבורד או עמוד קורסים
export interface StatItem {
  number: string;
  label: string;
  icon: string; // שם האייקון מ-lucide-react
}

// שאלה נפוצה
export interface FaqItem {
  question: string;
  answer: string;
}

// יתרון בולט של הקורסים
export interface Benefit {
  title: string;
  desc: string;
  icon: LucideIcon;
}

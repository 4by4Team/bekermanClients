// src/hooks/useCourses.ts
import { StatItem, LearningPath, FaqItem, Benefit, LearningPathKey, LearningPathsMap } from '@/types/CoursesType';
import { set } from 'date-fns';
import { Award, CheckCircle2, Play, Users } from 'lucide-react';
import { useState } from 'react';

export function useCourses() {
  const [selectedPath, setSelectedPath] = useState<LearningPathKey>('nutrition');
  // סטטיסטיקות כלליות
  const stats: StatItem[] = [
    { number: '5,000+', label: 'בוגרי קורסים', icon: 'Award' },
    { number: '98%', label: 'שביעות רצון', icon: 'Star' },
    { number: '15+', label: 'קורסים פעילים', icon: 'Calendar' },
    { number: '24/7', label: 'תמיכה', icon: 'Shield' }
  ];

  // // מסלולי לימוד עם קורסים
  // const learningPaths: LearningPathsMap = {
  //   nutrition: {
  //     id:1,
  //     title: 'מסלול תזונה בריאה',
  //     description: 'הפוך למומחה בתזונה עם המסלול המקיף שלנו',
  //     color: 'from-emerald-400/20 to-emerald-500/30',
  //     courses: [
  //       {
  //         id: 1,
  //         title: 'יסודות התזונה הבריאה',
  //         description:"ggjhgkgkkkkkkkkkkk",
  //         duration: '4 שבועות',
  //         price: 299,
  //         image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop'
  //       },
  //       {
  //         id: 2,
  //         title: 'תזונה ספורטיבית מתקדמת',
  //         description:"ggjhgkgkkkkkkkkkkk",
  //         duration: '6 שבועות',
  //         price: 449,
  //         image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=250&fit=crop'
  //       }
  //     ]
  //   },
  //   therapy: {
  //     id:2,
  //     title: 'מסלול פיזיותרפיה',
  //     description: 'טכניקות מתקדמות לטיפול ושיקום',
  //     color: 'from-violet-400/20 to-violet-500/30',
  //     courses: [
  //       {
  //         id: 3,
  //         title: 'פיזיותרפיה וטיפול בכאבי גב',
  //         duration: '5 שבועות',
  //         price: 399,
  //         description:"jhjh",
  //         image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop'
  //       }
  //     ]
  //   },
  //   wellness: {
  //     id:3,
  //     title: 'מסלול בריאות כוללת',
  //     description: 'גישה הוליסטית לבריאות הגוף והנפש',
  //     color: 'from-gray-400/20 to-gray-500/30',
  //     courses: [
  //       {
  //         id: 4,
  //         title: 'בריאות נפשית ואורח חיים',
  //         description:"הקודבחלחלח",
  //         duration: '4 שבועות',
  //         price: 349,
  //         image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop'
  //       }
  //     ]
  //   }
  // };

  // שאלות נפוצות
  const faqs : FaqItem[] = [
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

 

  // יתרונות הקורסים
  const benefits: Benefit[] = [
    { icon: CheckCircle2, title: 'ליווי אישי מקצועי', desc: 'מרצים מומחים זמינים לכל שאלה' },
    { icon: Play, title: 'גישה לכל החיים', desc: 'חומרי הלימוד יישארו איתך לתמיד' },
    { icon: Award, title: 'תעודה מוכרת', desc: 'תעודת גמר מוכרת בתעשייה' },
    { icon: Users, title: 'קהילה תומכת', desc: 'הצטרף לקהילת בוגרים פעילה' }
  ];

  // אפשר גם כאן להחזיר state או פונקציות אם צריך, למשל לפקח על FAQ פתוח
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return {
    selectedPath,
    setSelectedPath,
    stats,
   // learningPaths,
    faqs,
    benefits,
    openFaq,
    setOpenFaq
  };
}


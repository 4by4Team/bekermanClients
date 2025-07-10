import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

// Mock data (move your arrays here)
const categories = [
  { id: 1, name: "תזונה בסיסית", count: 12, icon: "Utensils" },
  { id: 2, name: "תזונת ספורט", count: 10, icon: "Dumbbell" },
  { id: 3, name: "בריאות נפשית", count: 8, icon: "Brain" },
  { id: 4, name: "תזונת ילדים", count: 9, icon: "Baby" },
  { id: 5, name: "תזונת קשישים", count: 7, icon: "Users" },
];

const articles = [
  {
    id: 1,
    title: "המדריך השלם לתזונה בריאה",
    excerpt:
      "כל מה שצריך לדעת על תזונה נכונה ואיך להתחיל את המסע לאורח חיים בריא",
    author: 'ד"ר שרה כהן',
    readTime: "8 דקות",
    category: "תזונה בסיסית",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "חשיבות שתיית מים לבריאות",
    excerpt: "למה שתיית מים חיונית לגופנו ואיך לשמור על לחות נכונה",
    author: "דיאטנית מיכל לוי",
    readTime: "5 דקות",
    category: "תזונה בסיסית",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "ויטמינים ומינרלים חיוניים",
    excerpt: "מדריך מקיף לויטamins ומינרלים שהגוף שלנו זקוק להם",
    author: "פרופ' דן רוזן",
    readTime: "12 דקות",
    category: "תזונה בסיסית",
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "תזונה לספורטאים - מדריך מלא",
    excerpt: "איך להתאים את התזונה לפעילות ספורטיבית ולהשיג ביצועים מיטביים",
    author: "דיאטנית ספורט רונית שמיר",
    readTime: "15 דקות",
    category: "תזונת ספורט",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=250&fit=crop",
  },
  {
    id: 5,
    title: "מתי לאכול לפני ואחרי אימון",
    excerpt: "הזמנים הנכונים לאכילה סביב האימון לביצועים מיטביים",
    author: "מאמן כושר אמיר כהן",
    readTime: "7 דקות",
    category: "תזונת ספורט",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=250&fit=crop",
  },
  {
    id: 6,
    title: "הקשר בין תזונה לבריאות הנפש",
    excerpt: "איך המזון שאנו אוכלים משפיע על מצב הרוח והבריאות הנפשית",
    author: 'פסיכולוגית ד"ר ענת גולד',
    readTime: "10 דקות",
    category: "בריאות נפשית",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop",
  },
  {
    id: 7,
    title: "פיזיותרפיה למתחילים - כל מה שחשוב לדעת",
    excerpt: "גלה איך פיזיותרפיה יכולה לשפר את איכות החיים שלך ולמנוע פציעות",
    author: "פיזיותרפיסט דן לוי",
    readTime: "12 דקות",
    category: "פיזיותרפיה",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
  },
  {
    id: 8,
    title: "10 תרגילים פשוטים לחיזוק הליבה",
    excerpt: "תרגילים יעילים שאפשר לעשות בבית ללא ציוד מיוחד",
    author: "מאמן כושר אור משה",
    readTime: "6 דקות",
    category: "פיזיותרפיה",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=250&fit=crop",
  },
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getCategories() {
  return (await axios.get("http://localhost:3000/api/categories")).data;
  ///return categories;
}

export async function getArticles() {
  return (await axios.get("http://localhost:3000/api/articles")).data;
  // return articles;
}

export interface Category {
  id: number;
  name: string;
  count: number;
  icon?: string; // icon will be handled as a string name or URL from backend, not as a component
}

// export interface Article {
//   id: number;
//   title: string;
//   excerpt: string;
//   author: string;
//   readTime: string;
//   category: string;
//   image: string;
// }

export interface Article {
  id: number;
  title: string;
  backgroundUrl: string;
  content: string;
  readTime: number;
  categoryId: number;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

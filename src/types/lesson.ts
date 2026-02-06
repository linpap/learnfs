export interface Question {
  id: string;
  type: 'mcq' | 'descriptive';
  question: string;
  options?: string[];
  correctAnswer?: string;
  keywords?: string[];
  explanation: string;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  content: string;
  questions: Question[];
  // LearnFS-specific fields
  month: number;
  week: number;
  category: string;
  prerequisites?: number[];
}

export interface LessonProgress {
  viewed: boolean;
  completed: boolean;
  score?: number;
  completedAt?: string;
}

export interface UserProgress {
  [lessonId: number]: LessonProgress;
}

export type Month = 1 | 2 | 3 | 4 | 5 | 6;

export interface MonthInfo {
  month: Month;
  title: string;
  description: string;
  categories: string[];
}

export const MONTHS: MonthInfo[] = [
  {
    month: 1,
    title: 'Web Fundamentals',
    description: 'HTML foundations, forms, CSS layouts, and modern features',
    categories: ['HTML', 'CSS', 'Forms', 'Responsive Design'],
  },
  {
    month: 2,
    title: 'JavaScript Mastery',
    description: 'JS fundamentals to advanced patterns, plus TypeScript',
    categories: ['JavaScript', 'TypeScript', 'ES6+', 'Async'],
  },
  {
    month: 3,
    title: 'React Complete',
    description: 'From basics to advanced hooks, patterns, and architecture',
    categories: ['React Basics', 'Hooks', 'State Management', 'Patterns'],
  },
  {
    month: 4,
    title: 'Next.js Full-Stack',
    description: 'App Router, data fetching, server actions, and deployment',
    categories: ['Next.js', 'Tailwind CSS', 'Full-Stack', 'Deployment'],
  },
  {
    month: 5,
    title: 'Backend & Databases',
    description: 'Node.js, REST APIs, SQL/NoSQL, and authentication',
    categories: ['Node.js', 'Databases', 'APIs', 'Authentication'],
  },
  {
    month: 6,
    title: 'Production & Career',
    description: 'Testing, DevOps, security, and career preparation',
    categories: ['Testing', 'DevOps', 'Security', 'Career'],
  },
];

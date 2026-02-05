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
    description: 'HTML, CSS, and JavaScript basics',
    categories: ['HTML', 'CSS', 'JavaScript Basics'],
  },
  {
    month: 2,
    title: 'JavaScript Deep Dive',
    description: 'Advanced JS, TypeScript, and APIs',
    categories: ['JavaScript', 'TypeScript', 'APIs'],
  },
  {
    month: 3,
    title: 'React Fundamentals',
    description: 'Component architecture and state management',
    categories: ['React Basics', 'State Management', 'Hooks'],
  },
  {
    month: 4,
    title: 'Full-Stack with Next.js',
    description: 'Server-side rendering and API routes',
    categories: ['Next.js', 'Tailwind CSS', 'Full-Stack'],
  },
  {
    month: 5,
    title: 'Backend & Databases',
    description: 'Node.js, databases, and authentication',
    categories: ['Node.js', 'Databases', 'Authentication'],
  },
  {
    month: 6,
    title: 'Production & DevOps',
    description: 'Testing, deployment, and best practices',
    categories: ['Testing', 'DevOps', 'Best Practices'],
  },
];

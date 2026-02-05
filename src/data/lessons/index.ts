import { Lesson } from '@/types/lesson';
import { month1Lessons } from './month1-web-fundamentals';
import { month2Lessons } from './month2-javascript';
import { month3Lessons } from './month3-react';
import { month4Lessons } from './month4-nextjs';
import { month5Lessons } from './month5-backend';
import { month6Lessons } from './month6-production';

export const lessons: Lesson[] = [
  ...month1Lessons,
  ...month2Lessons,
  ...month3Lessons,
  ...month4Lessons,
  ...month5Lessons,
  ...month6Lessons,
];

export function getLessonById(id: number): Lesson | undefined {
  return lessons.find(l => l.id === id);
}

export function getLessonsByMonth(month: number): Lesson[] {
  return lessons.filter(l => l.month === month);
}

export function getAdjacentLessons(id: number): { prev: Lesson | null; next: Lesson | null } {
  const currentIndex = lessons.findIndex(l => l.id === id);
  return {
    prev: currentIndex > 0 ? lessons[currentIndex - 1] : null,
    next: currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null,
  };
}

export type { Question } from '@/types/lesson';

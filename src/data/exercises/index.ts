import { PracticeExercise } from '@/types/exercise';
import { htmlCssExercises } from './html-css-exercises';
import { javascriptExercises } from './javascript-exercises';
import { reactExercises } from './react-exercises';
import { backendExercises } from './backend-exercises';

export const exercises: PracticeExercise[] = [
  ...htmlCssExercises,
  ...javascriptExercises,
  ...reactExercises,
  ...backendExercises,
];

export function getExerciseById(id: number): PracticeExercise | undefined {
  return exercises.find(e => e.id === id);
}

export function getExercisesByCategory(category: string): PracticeExercise[] {
  return exercises.filter(e => e.category.toLowerCase() === category.toLowerCase());
}

export function getExercisesByDifficulty(difficulty: string): PracticeExercise[] {
  return exercises.filter(e => e.difficulty === difficulty);
}

export function getExercisesByTag(tag: string): PracticeExercise[] {
  return exercises.filter(e => e.tags.includes(tag.toLowerCase()));
}

// Get unique categories from exercises
export const EXERCISE_CATEGORIES: string[] = [...new Set(exercises.map(e => e.category))];

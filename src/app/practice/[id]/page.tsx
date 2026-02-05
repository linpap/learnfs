'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo';
import PracticeExercise from '@/components/PracticeExercise';
import { useAuth } from '@/context/AuthContext';
import { getExerciseById } from '@/data/exercises';
import { PracticeExercise as ExerciseType } from '@/types/exercise';

export default function ExercisePage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [exercise, setExercise] = useState<ExerciseType | null>(null);

  const exerciseId = typeof params.id === 'string' ? parseInt(params.id) : 0;

  useEffect(() => {
    if (exerciseId) {
      const foundExercise = getExerciseById(exerciseId);
      if (foundExercise) {
        setExercise(foundExercise);
      } else {
        router.push('/practice');
      }
    }
  }, [exerciseId, router]);

  if (!exercise) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading exercise...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Logo size="sm" />
            </Link>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <Link href="/practice" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">
              Practice
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className={`px-2 py-1 text-xs rounded-full ${
              exercise.difficulty === 'beginner'
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                : exercise.difficulty === 'intermediate'
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              {exercise.difficulty}
            </span>
            {user && (
              <Link href="/dashboard" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Exercise Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm text-gray-500">#{exercise.id}</span>
            <span className="text-sm text-gray-500">{exercise.category}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {exercise.title}
          </h1>
        </div>

        {/* Practice Exercise Component */}
        <PracticeExercise exercise={exercise} />

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/practice"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to Exercises
          </Link>
          {exercise.relatedLessons && exercise.relatedLessons.length > 0 && (
            <Link
              href={`/lesson/${exercise.relatedLessons[0]}`}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              Related Lesson
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo';
import Quiz from '@/components/Quiz';
import CodeBlock from '@/components/CodeBlock';
import { useAuth } from '@/context/AuthContext';
import { getLessonById, getAdjacentLessons } from '@/data/lessons';
import { Lesson } from '@/types/lesson';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const { user, isPremium, loading } = useAuth();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [adjacentLessons, setAdjacentLessons] = useState<{ prev: Lesson | null; next: Lesson | null }>({ prev: null, next: null });
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const lessonId = typeof params.id === 'string' ? parseInt(params.id) : 0;

  useEffect(() => {
    if (lessonId) {
      const foundLesson = getLessonById(lessonId);
      if (foundLesson) {
        setLesson(foundLesson);
        setAdjacentLessons(getAdjacentLessons(lessonId));
        setShowQuiz(false);
        setQuizCompleted(false);
        setScore(0);
      }
    }
  }, [lessonId]);

  // Check access
  useEffect(() => {
    if (!loading && lesson) {
      const isFreeLesson = lesson.month === 1;
      if (!isFreeLesson && !isPremium) {
        router.push('/premium');
      }
    }
  }, [loading, lesson, isPremium, router]);

  const handleQuizComplete = (finalScore: number, totalQuestions: number) => {
    setScore(finalScore);
    setQuizCompleted(true);
  };

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading lesson...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Logo size="sm" />
            </Link>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <Link href="/curriculum" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">
              Curriculum
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              Lesson {lesson.id} of 65
            </span>
            {user && (
              <Link href="/dashboard" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="h-1 bg-gray-200 dark:bg-gray-700">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-blue-600 transition-all duration-500"
              style={{ width: `${(lesson.id / 65) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Lesson Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
              Month {lesson.month}
            </span>
            <span className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
              {lesson.category}
            </span>
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${
              lesson.difficulty === 'Beginner'
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                : lesson.difficulty === 'Intermediate'
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              {lesson.difficulty}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {lesson.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {lesson.description}
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              {lesson.duration}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              {lesson.questions.length} questions
            </span>
          </div>
        </div>

        {/* Main Content or Quiz */}
        {!showQuiz ? (
          <>
            {/* Lesson Content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8">
              <div
                className="prose prose-lg dark:prose-invert max-w-none
                  prose-headings:text-gray-900 dark:prose-headings:text-white
                  prose-p:text-gray-600 dark:prose-p:text-gray-300
                  prose-a:text-blue-600 dark:prose-a:text-blue-400
                  prose-strong:text-gray-900 dark:prose-strong:text-white
                  prose-code:text-pink-600 dark:prose-code:text-pink-400
                  prose-code:bg-gray-100 dark:prose-code:bg-gray-900
                  prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                  prose-pre:bg-gray-900 prose-pre:text-gray-100"
                dangerouslySetInnerHTML={{ __html: lesson.content }}
              />
            </div>

            {/* Take Quiz Button */}
            <div className="text-center mb-8">
              <button
                onClick={() => setShowQuiz(true)}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Take Quiz ({lesson.questions.length} questions)
              </button>
            </div>
          </>
        ) : quizCompleted ? (
          /* Quiz Results */
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Quiz Completed!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              You scored {score} out of {lesson.questions.length}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setShowQuiz(false);
                  setQuizCompleted(false);
                  setScore(0);
                }}
                className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Review Lesson
              </button>
              {adjacentLessons.next && (
                <Link
                  href={`/lesson/${adjacentLessons.next.id}`}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
                >
                  Next Lesson
                </Link>
              )}
            </div>
          </div>
        ) : (
          /* Quiz Component */
          <Quiz
            questions={lesson.questions}
            onComplete={handleQuizComplete}
          />
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          {adjacentLessons.prev ? (
            <Link
              href={`/lesson/${adjacentLessons.prev.id}`}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-500">Previous</div>
                <div className="font-medium">{adjacentLessons.prev.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {adjacentLessons.next ? (
            <Link
              href={`/lesson/${adjacentLessons.next.id}`}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600"
            >
              <div className="text-right">
                <div className="text-xs text-gray-500">Next</div>
                <div className="font-medium">{adjacentLessons.next.title}</div>
              </div>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          ) : (
            <Link
              href="/curriculum"
              className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700"
            >
              <div className="text-right">
                <div className="text-xs">Congratulations!</div>
                <div className="font-medium">Course Completed</div>
              </div>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}

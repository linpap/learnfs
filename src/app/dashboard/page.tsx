'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { useAuth } from '@/context/AuthContext';
import { lessons, getLessonsByMonth } from '@/data/lessons';
import { MONTHS } from '@/types/lesson';

export default function DashboardPage() {
  const { user, loading, isPremium, signOut } = useAuth();
  const router = useRouter();
  const [progress, setProgress] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  // Load progress from localStorage (in production, this would be from Supabase)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('learnfs_progress');
      if (saved) {
        setProgress(JSON.parse(saved));
      }
    }
  }, []);

  const completedLessons = Object.values(progress).filter(Boolean).length;
  const totalLessons = lessons.length;
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

  // Calculate month-by-month progress
  const monthProgress = MONTHS.map((month) => {
    const monthLessons = getLessonsByMonth(month.month);
    const completed = monthLessons.filter((l) => progress[l.id]).length;
    return {
      ...month,
      completed,
      total: monthLessons.length,
      percentage: Math.round((completed / monthLessons.length) * 100) || 0,
    };
  });

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Logo size="md" />
          </Link>
          <div className="flex items-center gap-4">
            {isPremium && (
              <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full">
                Premium
              </span>
            )}
            <button
              onClick={signOut}
              className="text-sm text-gray-500 hover:text-red-500"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {user.email}
          </p>
        </div>

        {/* Overall Progress */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Overall Progress
            </h2>
            <span className="text-2xl font-bold text-blue-600">
              {progressPercentage}%
            </span>
          </div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-blue-600 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{completedLessons} of {totalLessons} lessons completed</span>
            <span>{totalLessons - completedLessons} lessons remaining</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Link
            href="/curriculum"
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">View Curriculum</h3>
            <p className="text-sm text-gray-500">Browse all 65 lessons</p>
          </Link>

          <Link
            href="/practice"
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Practice Coding</h3>
            <p className="text-sm text-gray-500">150+ exercises</p>
          </Link>

          {!isPremium ? (
            <Link
              href="/premium"
              className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-white"
            >
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Upgrade to Premium</h3>
              <p className="text-sm opacity-90">Unlock all content</p>
            </Link>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Premium Active</h3>
              <p className="text-sm text-gray-500">Full access enabled</p>
            </div>
          )}
        </div>

        {/* Month Progress */}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Progress by Month
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {monthProgress.map((month) => {
            const isLocked = month.month > 1 && !isPremium;
            return (
              <div
                key={month.month}
                className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm ${
                  isLocked ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    Month {month.month}
                    {isLocked && (
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </h3>
                  <span className="text-sm font-medium text-blue-600">
                    {month.percentage}%
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {month.title}
                </p>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-blue-600 transition-all duration-500"
                    style={{ width: `${month.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500">
                  {month.completed} of {month.total} lessons
                </p>
              </div>
            );
          })}
        </div>

        {/* Continue Learning */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Continue Learning
          </h2>
          <div className="space-y-3">
            {lessons.slice(0, 5).map((lesson) => {
              const isCompleted = progress[lesson.id];
              const isLocked = lesson.month > 1 && !isPremium;
              return (
                <Link
                  key={lesson.id}
                  href={isLocked ? '/premium' : `/lesson/${lesson.id}`}
                  className={`flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors ${
                    isLocked ? 'opacity-60' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      isCompleted
                        ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {isCompleted ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        lesson.id
                      )}
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{lesson.title}</h4>
                      <p className="text-sm text-gray-500">{lesson.duration}</p>
                    </div>
                  </div>
                  {isLocked ? (
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

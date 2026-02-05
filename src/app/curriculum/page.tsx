'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import CurriculumRoadmap from '@/components/CurriculumRoadmap';
import { useAuth } from '@/context/AuthContext';
import { lessons, getLessonsByMonth } from '@/data/lessons';
import { MONTHS } from '@/types/lesson';

export default function CurriculumPage() {
  const { user, loading, isPremium } = useAuth();
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'roadmap' | 'list'>('roadmap');

  const monthLessons = selectedMonth ? getLessonsByMonth(selectedMonth) : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Logo size="md" />
          </Link>
          <div className="flex items-center gap-4">
            {!loading && (
              user ? (
                <div className="flex items-center gap-3">
                  <Link href="/dashboard" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">
                    Dashboard
                  </Link>
                  {isPremium && (
                    <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full">
                      Premium
                    </span>
                  )}
                </div>
              ) : (
                <Link href="/auth/login" className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Log In
                </Link>
              )
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Full-Stack Curriculum
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            65 comprehensive lessons across 6 months. Master web development from HTML basics to production deployment.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
            <button
              onClick={() => setViewMode('roadmap')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                viewMode === 'roadmap'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Roadmap View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              List View
            </button>
          </div>
        </div>

        {viewMode === 'roadmap' ? (
          <CurriculumRoadmap lessons={lessons} isPremium={isPremium} />
        ) : (
          <>
            {/* Month Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setSelectedMonth(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedMonth === null
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                All Months
              </button>
              {MONTHS.map((month) => (
                <button
                  key={month.month}
                  onClick={() => setSelectedMonth(month.month)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedMonth === month.month
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  Month {month.month}
                </button>
              ))}
            </div>

            {/* Lessons List */}
            <div className="space-y-8">
              {selectedMonth === null ? (
                // Show all months
                MONTHS.map((monthInfo) => {
                  const monthLessons = getLessonsByMonth(monthInfo.month);
                  const isLocked = monthInfo.month > 1 && !isPremium;

                  return (
                    <div key={monthInfo.month} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                      <div className={`p-6 border-b border-gray-200 dark:border-gray-700 ${
                        isLocked ? 'bg-gray-50 dark:bg-gray-900' : ''
                      }`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                              Month {monthInfo.month}: {monthInfo.title}
                              {monthInfo.month === 1 && (
                                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                                  Free
                                </span>
                              )}
                              {isLocked && (
                                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">{monthInfo.description}</p>
                          </div>
                          <span className="text-sm text-gray-500">{monthLessons.length} lessons</span>
                        </div>
                      </div>
                      <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {monthLessons.map((lesson) => (
                          <Link
                            key={lesson.id}
                            href={isLocked ? '/premium' : `/lesson/${lesson.id}`}
                            className={`block p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                              isLocked ? 'opacity-60' : ''
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <span className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-300">
                                  {lesson.id}
                                </span>
                                <div>
                                  <h3 className="font-medium text-gray-900 dark:text-white">{lesson.title}</h3>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">{lesson.description}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className={`px-2 py-1 text-xs rounded-full ${
                                  lesson.difficulty === 'Beginner'
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                    : lesson.difficulty === 'Intermediate'
                                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                }`}>
                                  {lesson.difficulty}
                                </span>
                                <span className="text-sm text-gray-500">{lesson.duration}</span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })
              ) : (
                // Show selected month
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {monthLessons.map((lesson) => {
                      const isLocked = selectedMonth > 1 && !isPremium;
                      return (
                        <Link
                          key={lesson.id}
                          href={isLocked ? '/premium' : `/lesson/${lesson.id}`}
                          className={`block p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                            isLocked ? 'opacity-60' : ''
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <span className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-sm font-medium text-blue-600 dark:text-blue-400">
                                {lesson.id}
                              </span>
                              <div>
                                <h3 className="font-medium text-gray-900 dark:text-white">{lesson.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{lesson.description}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-gray-500">{lesson.category}</span>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                lesson.difficulty === 'Beginner'
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                  : lesson.difficulty === 'Intermediate'
                                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                  : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                              }`}>
                                {lesson.difficulty}
                              </span>
                              <span className="text-sm text-gray-500">{lesson.duration}</span>
                              {isLocked && (
                                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* Premium CTA */}
        {!isPremium && (
          <div className="mt-12 bg-gradient-to-r from-emerald-500 via-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Unlock All 65 Lessons</h2>
            <p className="text-lg opacity-90 mb-6">
              Get full access to Months 2-6 and become a full-stack developer.
            </p>
            <Link
              href="/premium"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Upgrade to Premium
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}

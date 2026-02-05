'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Lesson, MONTHS } from '@/types/lesson';

interface CurriculumRoadmapProps {
  lessons: Lesson[];
  userProgress?: Record<number, { completed: boolean }>;
  isPremium?: boolean;
}

export default function CurriculumRoadmap({ lessons, userProgress = {}, isPremium = false }: CurriculumRoadmapProps) {
  const [expandedMonth, setExpandedMonth] = useState<number | null>(1);

  const getLessonsByMonth = (month: number) => {
    return lessons.filter(l => l.month === month);
  };

  const getMonthProgress = (month: number) => {
    const monthLessons = getLessonsByMonth(month);
    const completed = monthLessons.filter(l => userProgress[l.id]?.completed).length;
    return { completed, total: monthLessons.length };
  };

  const monthColors = [
    { bg: 'bg-blue-500', light: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400' },
    { bg: 'bg-purple-500', light: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400' },
    { bg: 'bg-emerald-500', light: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-600 dark:text-emerald-400' },
    { bg: 'bg-orange-500', light: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400' },
    { bg: 'bg-pink-500', light: 'bg-pink-100 dark:bg-pink-900/30', text: 'text-pink-600 dark:text-pink-400' },
    { bg: 'bg-indigo-500', light: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-600 dark:text-indigo-400' },
  ];

  const getDifficultyBadge = (difficulty: string) => {
    const colors = {
      Beginner: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
      Advanced: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    };
    return colors[difficulty as keyof typeof colors] || colors.Beginner;
  };

  return (
    <div className="curriculum-roadmap space-y-6">
      {MONTHS.map((monthInfo, idx) => {
        const monthLessons = getLessonsByMonth(monthInfo.month);
        const progress = getMonthProgress(monthInfo.month);
        const colors = monthColors[idx];
        const isExpanded = expandedMonth === monthInfo.month;
        const isFreeMonth = monthInfo.month === 1;
        const isLocked = !isFreeMonth && !isPremium;

        return (
          <div
            key={monthInfo.month}
            className={`roadmap-month rounded-xl border ${isLocked ? 'border-gray-300 dark:border-gray-700' : 'border-gray-200 dark:border-gray-700'} overflow-hidden transition-all duration-300`}
          >
            {/* Month Header */}
            <button
              onClick={() => setExpandedMonth(isExpanded ? null : monthInfo.month)}
              className={`w-full px-6 py-4 flex items-center justify-between ${colors.light} hover:opacity-90 transition-opacity`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${colors.bg} text-white flex items-center justify-center font-bold text-lg`}>
                  {monthInfo.month}
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    Month {monthInfo.month}: {monthInfo.title}
                    {isLocked && (
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    {isFreeMonth && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded">
                        FREE
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {monthInfo.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {progress.completed}/{progress.total} lessons
                  </div>
                  <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${colors.bg} transition-all duration-300`}
                      style={{ width: `${(progress.completed / progress.total) * 100}%` }}
                    />
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Lessons List */}
            {isExpanded && (
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {monthLessons.map((lesson) => {
                  const isCompleted = userProgress[lesson.id]?.completed;
                  const lessonLocked = isLocked;

                  return (
                    <Link
                      key={lesson.id}
                      href={lessonLocked ? '/premium' : `/lesson/${lesson.id}`}
                      className={`block px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors ${lessonLocked ? 'cursor-not-allowed opacity-60' : ''}`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Lesson Number */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          isCompleted
                            ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                            : `${colors.light} ${colors.text}`
                        }`}>
                          {isCompleted ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            lesson.id
                          )}
                        </div>

                        {/* Lesson Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 dark:text-white truncate">
                            {lesson.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                            {lesson.description}
                          </p>
                        </div>

                        {/* Meta */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className={`px-2 py-0.5 text-xs font-medium rounded ${getDifficultyBadge(lesson.difficulty)}`}>
                            {lesson.difficulty}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {lesson.duration}
                          </span>
                          {lessonLocked ? (
                            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

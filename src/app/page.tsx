'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';
import { useAuth } from '@/context/AuthContext';
import { lessons } from '@/data/lessons';
import { MONTHS } from '@/types/lesson';

export default function Home() {
  const { user, loading, isPremium, signOut } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const totalLessons = lessons.length;
  const totalHours = Math.round(lessons.reduce((acc, l) => acc + parseInt(l.duration), 0) / 60);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Logo size="md" showTagline />
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
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
                  <button onClick={signOut} className="text-sm text-gray-500 hover:text-red-500">
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link href="/auth/login" className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">
                    Log In
                  </Link>
                  <Link href="/auth/register" className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Sign Up
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Master Full-Stack Development
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Go from zero to full-stack developer in 6 months with our comprehensive curriculum.
            Learn HTML, CSS, JavaScript, React, Next.js, Node.js, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600">{totalLessons}</div>
              <div className="text-sm text-gray-500">Lessons</div>
            </div>
            <div className="px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="text-3xl font-bold text-emerald-600">6</div>
              <div className="text-sm text-gray-500">Months</div>
            </div>
            <div className="px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="text-3xl font-bold text-purple-600">{totalHours}+</div>
              <div className="text-sm text-gray-500">Hours</div>
            </div>
            <div className="px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="text-3xl font-bold text-orange-600">400+</div>
              <div className="text-sm text-gray-500">Exercises</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/curriculum"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              View Curriculum
            </Link>
            <Link
              href="/lesson/1"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all"
            >
              Start Learning Free
            </Link>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            6-Month Learning Path
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MONTHS.map((month, idx) => {
              const monthLessons = lessons.filter(l => l.month === month.month);
              const colors = [
                'from-blue-500 to-blue-600',
                'from-purple-500 to-purple-600',
                'from-emerald-500 to-emerald-600',
                'from-orange-500 to-orange-600',
                'from-pink-500 to-pink-600',
                'from-indigo-500 to-indigo-600',
              ];
              return (
                <div key={month.month} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[idx]} text-white flex items-center justify-center font-bold text-xl mb-4`}>
                    {month.month}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{month.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{month.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {monthLessons.length} lessons
                  </div>
                  {month.month === 1 && (
                    <span className="inline-block mt-3 px-3 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                      Free Access
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Everything You Need to Succeed
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'Interactive Lessons',
                description: 'Learn through comprehensive lessons with real code examples and explanations.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: 'Hands-On Practice',
                description: '150+ coding exercises with instant feedback and test validation.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'AI-Powered Quizzes',
                description: 'Test your knowledge with smart quizzes that adapt to your answers.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                ),
                title: 'Voice Input',
                description: 'Answer questions using your voice for a natural learning experience.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Live Code Preview',
                description: 'See your HTML, CSS, and JavaScript changes in real-time.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Progress Tracking',
                description: 'Track your learning journey with detailed progress analytics.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-500 via-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Month 1 is completely free. No credit card required.
          </p>
          <Link
            href={user ? "/lesson/1" : "/auth/register"}
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            {user ? "Continue Learning" : "Get Started Free"}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

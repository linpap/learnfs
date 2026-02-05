import Link from 'next/link';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us - LearnFS',
  description: 'Learn about LearnFS and our mission to make full-stack web development accessible to everyone.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Logo size="md" />
          </Link>
          <Link href="/auth/login" className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About LearnFS</h1>
            <p className="text-xl opacity-90">
              Empowering the next generation of full-stack developers through structured, hands-on learning.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              LearnFS was created with a simple goal: to make full-stack web development accessible,
              structured, and practical for everyone. We believe that anyone can become a proficient
              developer with the right guidance and hands-on practice.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our 6-month curriculum takes you from the fundamentals of HTML and CSS all the way to
              deploying production-ready applications. Every lesson is designed to build upon the last,
              ensuring you develop a strong foundation before tackling advanced concepts.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Structured Curriculum</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    65 carefully ordered lessons that build upon each other, taking you from beginner to job-ready.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Hands-On Practice</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    150+ coding exercises and 6 major projects to apply what you learn in real-world scenarios.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Modern Tech Stack</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Learn the technologies companies actually use: React, Next.js, TypeScript, and more.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Career Ready</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Build a portfolio of projects and gain the skills needed to land your first developer job.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Start Learning?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of students who are building their future with LearnFS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/curriculum"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Curriculum
              </Link>
              <Link
                href="/auth/register"
                className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Create Free Account
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { useAuth } from '@/context/AuthContext';
import { challenges, PHASES } from '@/data/challenges';

export default function ChallengesPage() {
  const { user, isPremium } = useAuth();
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

  const filteredChallenges = selectedPhase
    ? challenges.filter(c => c.phase === selectedPhase)
    : challenges;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Logo size="md" />
            </Link>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Challenges</span>
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <Link href="/dashboard" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">
                Dashboard
              </Link>
            ) : (
              <Link href="/auth/login" className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Log In
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Challenges
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Build real-world projects to solidify your skills. Submit your code and get instant feedback.
          </p>
        </div>

        {/* Phase Timeline */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedPhase(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedPhase === null
                  ? 'bg-pink-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              All Phases
            </button>
            {PHASES.map((phase) => (
              <button
                key={phase.phase}
                onClick={() => setSelectedPhase(phase.phase)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedPhase === phase.phase
                    ? 'bg-pink-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                Phase {phase.phase}: {phase.title}
              </button>
            ))}
          </div>

          {/* Phase Info */}
          {selectedPhase && (
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-6 text-white text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">
                Phase {selectedPhase}: {PHASES.find(p => p.phase === selectedPhase)?.title}
              </h2>
              <p className="opacity-90">
                {PHASES.find(p => p.phase === selectedPhase)?.description}
              </p>
              <p className="text-sm opacity-75 mt-2">
                Month {PHASES.find(p => p.phase === selectedPhase)?.month}
              </p>
            </div>
          )}
        </div>

        {/* Challenge Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((challenge) => {
            const isLocked = challenge.phase > 1 && !isPremium;

            return (
              <Link
                key={challenge.id}
                href={isLocked ? '/premium' : `/challenges/${challenge.id}`}
                className={`group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all ${
                  isLocked ? 'opacity-70' : ''
                }`}
              >
                {/* Challenge Header */}
                <div className={`p-4 ${
                  challenge.phase === 1 ? 'bg-green-500' :
                  challenge.phase === 2 ? 'bg-blue-500' :
                  challenge.phase === 3 ? 'bg-yellow-500' :
                  challenge.phase === 4 ? 'bg-purple-500' :
                  challenge.phase === 5 ? 'bg-orange-500' :
                  'bg-pink-500'
                } text-white`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium opacity-90">
                      Phase {challenge.phase}
                    </span>
                    {isLocked && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold">{challenge.title}</h3>
                </div>

                {/* Challenge Body */}
                <div className="p-5">
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {challenge.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-2 py-1 text-xs rounded-full capitalize ${
                      challenge.difficulty === 'beginner'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : challenge.difficulty === 'intermediate'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {challenge.difficulty}
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                      {challenge.type.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      {challenge.estimatedTime}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {challenge.totalPoints} pts
                    </span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {challenge.requirements.length} requirements
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredChallenges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No challenges found for this phase.
            </p>
          </div>
        )}

        {/* Premium CTA */}
        {!isPremium && (
          <div className="mt-12 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Unlock All Challenges</h2>
            <p className="text-lg opacity-90 mb-6">
              Get access to all 6 phases of project challenges and build your portfolio.
            </p>
            <Link
              href="/premium"
              className="inline-block px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Upgrade to Premium
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}

'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';

export default function PaymentFailedPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Logo size="md" />
          </Link>
          <Link href="/dashboard" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">
            Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Payment Unsuccessful
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Your payment could not be processed. No charges have been made to your account.
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md mx-auto mb-8">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Common reasons for payment failure:</h3>
          <ul className="text-left text-gray-600 dark:text-gray-400 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              Insufficient funds in your account
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              Card declined by your bank
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              Transaction cancelled or timed out
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              Network connectivity issues
            </li>
          </ul>
        </div>
        <div className="flex justify-center gap-4">
          <Link
            href="/premium"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
          >
            Try Again
          </Link>
          <Link
            href="mailto:support@learnfs.dev"
            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Contact Support
          </Link>
        </div>
      </main>
    </div>
  );
}

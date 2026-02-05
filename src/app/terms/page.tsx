import Link from 'next/link';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - LearnFS',
  description: 'Terms of Service for LearnFS - Full-Stack Web Development Course Platform',
};

export default function TermsPage() {
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

      <main className="flex-1 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: February 2026</p>

          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By accessing and using LearnFS (&quot;the Service&quot;), you accept and agree to be bound by the terms
                and conditions of this agreement. If you do not agree to abide by these terms, please do not
                use this Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Description of Service</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                LearnFS provides an online learning platform for full-stack web development education.
                The Service includes access to lessons, coding exercises, project challenges, and related
                educational content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. User Accounts</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To access certain features of the Service, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Provide accurate and complete information when creating your account</li>
                <li>Maintain the security of your password and account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Subscription and Payments</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Some features of the Service require a paid subscription. By subscribing to a premium plan:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>You agree to pay all fees associated with your subscription</li>
                <li>Subscriptions are billed in advance on a monthly or annual basis</li>
                <li>You may cancel your subscription at any time</li>
                <li>Refunds are provided in accordance with our refund policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All content on the Service, including lessons, exercises, and code examples, is the property
                of LearnFS and is protected by copyright laws. You may not reproduce, distribute, or create
                derivative works from this content without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. User Conduct</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Share your account credentials with others</li>
                <li>Use the Service for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to the Service</li>
                <li>Interfere with the proper operation of the Service</li>
                <li>Redistribute or resell course content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Service is provided &quot;as is&quot; without warranties of any kind, either express or implied.
                We do not guarantee that the Service will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                LearnFS shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages resulting from your use of or inability to use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material
                changes by posting the new terms on this page. Your continued use of the Service after such
                changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about these Terms, please contact us at{' '}
                <a href="mailto:support@learnfs.com" className="text-blue-600 hover:underline">
                  support@learnfs.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

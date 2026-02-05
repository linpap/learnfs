import Link from 'next/link';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - LearnFS',
  description: 'Privacy Policy for LearnFS - How we collect, use, and protect your data',
};

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: February 2026</p>

          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                LearnFS (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you use our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Personal Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may collect personal information that you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>Name and email address when you create an account</li>
                <li>Payment information when you subscribe to a premium plan</li>
                <li>Profile information you choose to provide</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Usage Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We automatically collect certain information when you use the Service:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Pages viewed and features used</li>
                <li>Learning progress and exercise submissions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Provide and maintain the Service</li>
                <li>Process payments and manage subscriptions</li>
                <li>Track your learning progress</li>
                <li>Send you important updates and notifications</li>
                <li>Improve and personalize your experience</li>
                <li>Analyze usage patterns to enhance the Service</li>
                <li>Respond to your inquiries and support requests</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Data Sharing</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Service providers who assist in operating the Service (e.g., payment processors, hosting providers)</li>
                <li>Analytics partners to help us understand usage patterns</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Data Security</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure authentication mechanisms</li>
                <li>Regular security assessments</li>
                <li>Access controls and monitoring</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Your Rights</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your account and data</li>
                <li>Opt out of marketing communications</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Keep you signed in</li>
                <li>Remember your preferences</li>
                <li>Track your learning progress</li>
                <li>Analyze how the Service is used</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                You can control cookies through your browser settings, but disabling them may affect
                the functionality of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Service is not intended for children under 13 years of age. We do not knowingly collect
                personal information from children under 13. If you believe we have collected information
                from a child under 13, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by
                posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
                <a href="mailto:privacy@learnfs.com" className="text-blue-600 hover:underline">
                  privacy@learnfs.com
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

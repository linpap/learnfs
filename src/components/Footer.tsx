import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎓</span>
              <span className="text-xl font-bold text-white">LearnFS</span>
            </Link>
            <p className="text-sm text-gray-400">
              Master full-stack web development in 6 months with hands-on projects and real-world skills.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-white font-semibold mb-4">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/curriculum" className="hover:text-white transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="/practice" className="hover:text-white transition-colors">
                  Practice
                </Link>
              </li>
              <li>
                <Link href="/challenges" className="hover:text-white transition-colors">
                  Challenges
                </Link>
              </li>
              <li>
                <Link href="/premium" className="hover:text-white transition-colors">
                  Premium
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} LearnFS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LearnFS - Full-Stack Web Development Course",
  description: "Master full-stack web development in 6 months with 65 comprehensive lessons. Learn HTML, CSS, JavaScript, React, Next.js, Node.js, databases, and deployment.",
  keywords: ["full-stack", "web development", "JavaScript", "React", "Next.js", "Node.js", "TypeScript", "learn coding", "programming course", "web dev tutorial"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "LearnFS - Full-Stack Web Development Course",
    description: "Master full-stack web development in 6 months with 65 comprehensive lessons. From HTML basics to production deployment.",
    type: "website",
    locale: "en_US",
    siteName: "LearnFS",
  },
  twitter: {
    card: "summary_large_image",
    title: "LearnFS - Full-Stack Web Development Course",
    description: "Master full-stack web development in 6 months with 65 comprehensive lessons.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('theme');
                  if (mode === 'dark' || (!mode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

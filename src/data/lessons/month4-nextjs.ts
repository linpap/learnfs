import { Lesson } from '@/types/lesson';

export const month4Lessons: Lesson[] = [
  {
    id: 61,
    title: "Introduction to Next.js",
    description: "Learn what Next.js is, its core features, and how it enhances React development",
    duration: "45 min",
    difficulty: "Intermediate",
    month: 4,
    week: 1,
    category: "Next.js",
    content: `
      <h2>Welcome to Next.js</h2>
      <p>Next.js is a powerful React framework that provides a complete solution for building production-ready web applications. It extends React with features like server-side rendering, static site generation, and file-based routing.</p>

      <h3>Why Next.js?</h3>
      <p>While React is excellent for building user interfaces, it's just a library. Next.js provides the missing pieces:</p>
      <ul>
        <li><strong>Server-Side Rendering (SSR)</strong> - Pages render on the server for better SEO and performance</li>
        <li><strong>Static Site Generation (SSG)</strong> - Pre-render pages at build time</li>
        <li><strong>File-based Routing</strong> - Create routes by adding files to the pages/app directory</li>
        <li><strong>API Routes</strong> - Build backend endpoints within your Next.js app</li>
        <li><strong>Built-in Optimizations</strong> - Automatic code splitting, image optimization, and more</li>
      </ul>

      <h3>Creating a Next.js Project</h3>
      <div class="code-block">
        <pre># Create a new Next.js project
npx create-next-app@latest my-app

# With TypeScript (recommended)
npx create-next-app@latest my-app --typescript

# Navigate to project
cd my-app

# Start development server
npm run dev</pre>
      </div>

      <h3>Project Structure (App Router)</h3>
      <div class="code-block">
        <pre>my-app/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page (/)
│   ├── globals.css     # Global styles
│   ├── about/
│   │   └── page.tsx    # About page (/about)
│   └── blog/
│       ├── page.tsx    # Blog listing (/blog)
│       └── [slug]/
│           └── page.tsx # Dynamic blog post (/blog/my-post)
├── components/         # Reusable components
├── lib/               # Utility functions
├── public/            # Static assets
├── next.config.js     # Next.js configuration
├── package.json
└── tsconfig.json</pre>
      </div>

      <h3>App Router vs Pages Router</h3>
      <p>Next.js 13+ introduced the App Router. Here's a comparison:</p>
      <div class="highlight">
        <p><strong>App Router (Recommended):</strong></p>
        <ul>
          <li>Uses <code>app/</code> directory</li>
          <li>React Server Components by default</li>
          <li>Layouts, loading states, error handling built-in</li>
          <li>More powerful data fetching patterns</li>
        </ul>
        <p><strong>Pages Router (Legacy):</strong></p>
        <ul>
          <li>Uses <code>pages/</code> directory</li>
          <li>Client Components by default</li>
          <li>Uses getServerSideProps/getStaticProps</li>
        </ul>
      </div>

      <h3>Your First Next.js Page</h3>
      <div class="code-block">
        <pre>// app/page.tsx
export default function Home() {
  return (
    &lt;main&gt;
      &lt;h1&gt;Welcome to My Next.js App&lt;/h1&gt;
      &lt;p&gt;This is the home page.&lt;/p&gt;
    &lt;/main&gt;
  );
}</pre>
      </div>

      <h3>Server Components vs Client Components</h3>
      <div class="code-block">
        <pre>// Server Component (default in App Router)
// Can fetch data directly, access backend resources
// Cannot use useState, useEffect, or browser APIs

export default async function ServerComponent() {
  // This runs on the server
  const data = await fetch('https://api.example.com/data');
  const posts = await data.json();

  return (
    &lt;ul&gt;
      {posts.map(post =&gt; (
        &lt;li key={post.id}&gt;{post.title}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

// Client Component - add 'use client' directive
'use client';

import { useState } from 'react';

export default function ClientComponent() {
  const [count, setCount] = useState(0);

  return (
    &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
      Count: {count}
    &lt;/button&gt;
  );
}</pre>
      </div>

      <h3>Key Concepts</h3>
      <ul>
        <li><strong>Hydration</strong> - Process of attaching event handlers to server-rendered HTML</li>
        <li><strong>Streaming</strong> - Progressively sending HTML chunks to the browser</li>
        <li><strong>Partial Rendering</strong> - Only re-rendering parts of the page that changed</li>
        <li><strong>Edge Runtime</strong> - Running code closer to users for lower latency</li>
      </ul>
    `,
    questions: [
      {
        id: "61-1",
        type: "mcq",
        question: "What directive do you add to make a component a Client Component in Next.js App Router?",
        options: ["'use server'", "'use client'", "'client only'", "export const client = true"],
        correctAnswer: "'use client'",
        explanation: "The 'use client' directive at the top of a file marks it as a Client Component, enabling the use of React hooks, event handlers, and browser APIs."
      },
      {
        id: "61-2",
        type: "mcq",
        question: "Which directory does the Next.js App Router use for routing?",
        options: ["pages/", "routes/", "app/", "views/"],
        correctAnswer: "app/",
        explanation: "The App Router uses the app/ directory for file-based routing. The pages/ directory is used by the older Pages Router."
      },
      {
        id: "61-3",
        type: "mcq",
        question: "What is a key advantage of Server Components?",
        options: [
          "They can use useState and useEffect",
          "They can access browser APIs directly",
          "They can fetch data without sending JavaScript to the client",
          "They automatically handle form submissions"
        ],
        correctAnswer: "They can fetch data without sending JavaScript to the client",
        explanation: "Server Components run on the server and can fetch data directly without sending the component's JavaScript to the browser, resulting in smaller bundle sizes and better performance."
      },
      {
        id: "61-4",
        type: "descriptive",
        question: "Explain the difference between Server Components and Client Components in Next.js.",
        keywords: ["server", "client", "use client", "fetch", "useState", "useEffect", "bundle", "hydration", "browser"],
        explanation: "Server Components run on the server, can fetch data directly, and don't send their JavaScript to the browser. Client Components use the 'use client' directive and can use React hooks and browser APIs but add to the JavaScript bundle sent to the client."
      }
    ]
  },
  {
    id: 62,
    title: "Pages, Layouts & Navigation",
    description: "Master Next.js file-based routing, layouts, and navigation patterns",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 4,
    week: 1,
    category: "Next.js",
    content: `
      <h2>File-Based Routing in Next.js</h2>
      <p>Next.js uses the file system for routing. Each file in the app directory becomes a route.</p>

      <h3>Special Files in App Router</h3>
      <div class="code-block">
        <pre>app/
├── layout.tsx      # Shared layout for this segment and children
├── page.tsx        # Unique UI for a route (makes route accessible)
├── loading.tsx     # Loading UI (uses React Suspense)
├── error.tsx       # Error UI (uses React Error Boundary)
├── not-found.tsx   # Not found UI
├── template.tsx    # Similar to layout, but remounts on navigation
└── default.tsx     # Fallback for parallel routes</pre>
      </div>

      <h3>Creating Routes</h3>
      <div class="code-block">
        <pre>// app/page.tsx -> /
export default function Home() {
  return &lt;h1&gt;Home Page&lt;/h1&gt;;
}

// app/about/page.tsx -> /about
export default function About() {
  return &lt;h1&gt;About Page&lt;/h1&gt;;
}

// app/blog/page.tsx -> /blog
export default function Blog() {
  return &lt;h1&gt;Blog Page&lt;/h1&gt;;
}

// app/blog/[slug]/page.tsx -> /blog/my-post (dynamic)
export default function BlogPost({ params }: { params: { slug: string } }) {
  return &lt;h1&gt;Post: {params.slug}&lt;/h1&gt;;
}</pre>
      </div>

      <h3>Root Layout</h3>
      <div class="code-block">
        <pre>// app/layout.tsx - Required at the root
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My App',
  description: 'A Next.js application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    &lt;html lang="en"&gt;
      &lt;body className={inter.className}&gt;
        &lt;header&gt;
          &lt;nav&gt;{/* Navigation */}&lt;/nav&gt;
        &lt;/header&gt;
        &lt;main&gt;{children}&lt;/main&gt;
        &lt;footer&gt;{/* Footer */}&lt;/footer&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  );
}</pre>
      </div>

      <h3>Nested Layouts</h3>
      <div class="code-block">
        <pre>// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    &lt;div className="dashboard"&gt;
      &lt;aside&gt;
        &lt;nav&gt;
          &lt;a href="/dashboard"&gt;Overview&lt;/a&gt;
          &lt;a href="/dashboard/settings"&gt;Settings&lt;/a&gt;
          &lt;a href="/dashboard/analytics"&gt;Analytics&lt;/a&gt;
        &lt;/nav&gt;
      &lt;/aside&gt;
      &lt;section&gt;{children}&lt;/section&gt;
    &lt;/div&gt;
  );
}

// app/dashboard/page.tsx -> /dashboard
export default function Dashboard() {
  return &lt;h1&gt;Dashboard Overview&lt;/h1&gt;;
}

// app/dashboard/settings/page.tsx -> /dashboard/settings
export default function Settings() {
  return &lt;h1&gt;Settings&lt;/h1&gt;;
}</pre>
      </div>

      <h3>Navigation with Link Component</h3>
      <div class="code-block">
        <pre>import Link from 'next/link';

export default function Navigation() {
  return (
    &lt;nav&gt;
      {/* Basic link */}
      &lt;Link href="/"&gt;Home&lt;/Link&gt;

      {/* Link with dynamic route */}
      &lt;Link href="/blog/my-first-post"&gt;My Post&lt;/Link&gt;

      {/* Link with query params */}
      &lt;Link href="/search?q=nextjs"&gt;Search&lt;/Link&gt;

      {/* Link with object */}
      &lt;Link
        href={{
          pathname: '/blog/[slug]',
          query: { slug: 'hello-world' },
        }}
      &gt;
        Hello World
      &lt;/Link&gt;

      {/* Replace history instead of push */}
      &lt;Link href="/about" replace&gt;About&lt;/Link&gt;

      {/* Prefetch disabled */}
      &lt;Link href="/heavy-page" prefetch={false}&gt;Heavy Page&lt;/Link&gt;
    &lt;/nav&gt;
  );
}</pre>
      </div>

      <h3>Programmatic Navigation</h3>
      <div class="code-block">
        <pre>'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function NavigationExample() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent) =&gt; {
    e.preventDefault();
    // Navigate programmatically
    router.push('/dashboard');
  };

  const handleBack = () =&gt; {
    router.back();
  };

  const handleRefresh = () =&gt; {
    router.refresh(); // Refresh server components
  };

  return (
    &lt;div&gt;
      &lt;p&gt;Current path: {pathname}&lt;/p&gt;
      &lt;p&gt;Query: {searchParams.get('q')}&lt;/p&gt;
      &lt;button onClick={() =&gt; router.push('/about')}&gt;Go to About&lt;/button&gt;
      &lt;button onClick={handleBack}&gt;Go Back&lt;/button&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Loading States</h3>
      <div class="code-block">
        <pre>// app/dashboard/loading.tsx
export default function Loading() {
  return (
    &lt;div className="loading"&gt;
      &lt;div className="spinner"&gt;&lt;/div&gt;
      &lt;p&gt;Loading dashboard...&lt;/p&gt;
    &lt;/div&gt;
  );
}

// The loading.tsx file uses React Suspense under the hood
// It automatically wraps the page in a Suspense boundary</pre>
      </div>

      <h3>Error Handling</h3>
      <div class="code-block">
        <pre>// app/dashboard/error.tsx
'use client'; // Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () =&gt; void;
}) {
  return (
    &lt;div&gt;
      &lt;h2&gt;Something went wrong!&lt;/h2&gt;
      &lt;p&gt;{error.message}&lt;/p&gt;
      &lt;button onClick={() =&gt; reset()}&gt;Try again&lt;/button&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>
    `,
    questions: [
      {
        id: "62-1",
        type: "mcq",
        question: "What file makes a route segment publicly accessible in Next.js App Router?",
        options: ["index.tsx", "route.tsx", "page.tsx", "main.tsx"],
        correctAnswer: "page.tsx",
        explanation: "A page.tsx file makes a route segment publicly accessible. Without it, the folder only serves as a organizational container or for layouts."
      },
      {
        id: "62-2",
        type: "mcq",
        question: "Which hook do you use for programmatic navigation in Next.js App Router?",
        options: ["useHistory", "useNavigate", "useRouter from 'next/navigation'", "useRouter from 'next/router'"],
        correctAnswer: "useRouter from 'next/navigation'",
        explanation: "In the App Router, you import useRouter from 'next/navigation'. The 'next/router' import is for the older Pages Router."
      },
      {
        id: "62-3",
        type: "mcq",
        question: "What is the purpose of layout.tsx?",
        options: [
          "To define loading states",
          "To define shared UI that wraps child routes",
          "To handle errors",
          "To define API endpoints"
        ],
        correctAnswer: "To define shared UI that wraps child routes",
        explanation: "layout.tsx defines UI that is shared between multiple pages. It wraps its children and preserves state during navigation, unlike template.tsx which remounts."
      },
      {
        id: "62-4",
        type: "descriptive",
        question: "Explain how nested layouts work in Next.js and why they're useful.",
        keywords: ["layout", "nested", "children", "shared", "UI", "state", "navigation", "wrap", "persist"],
        explanation: "Nested layouts allow you to create UI that is shared across multiple pages. Each segment can have its own layout that wraps its children. Layouts preserve state during navigation, making them perfect for sidebars, navigation, and dashboards."
      }
    ]
  },
  {
    id: 63,
    title: "Data Fetching in Next.js",
    description: "Learn server-side and client-side data fetching patterns in Next.js",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 4,
    week: 1,
    category: "Next.js",
    content: `
      <h2>Data Fetching in Next.js</h2>
      <p>Next.js provides multiple ways to fetch data depending on your needs: server components, client components, and various caching strategies.</p>

      <h3>Fetching in Server Components</h3>
      <div class="code-block">
        <pre>// app/posts/page.tsx
// Server Component - fetches data on the server

interface Post {
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise&lt;Post[]&gt; {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    &lt;div&gt;
      &lt;h1&gt;Posts&lt;/h1&gt;
      &lt;ul&gt;
        {posts.map(post =&gt; (
          &lt;li key={post.id}&gt;
            &lt;h2&gt;{post.title}&lt;/h2&gt;
            &lt;p&gt;{post.body}&lt;/p&gt;
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Caching and Revalidation</h3>
      <div class="code-block">
        <pre>// Default: Cached indefinitely (static)
const data = await fetch('https://api.example.com/data');

// Revalidate every 60 seconds
const data = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 }
});

// Never cache (always fresh)
const data = await fetch('https://api.example.com/data', {
  cache: 'no-store'
});

// Opt out of caching for entire route segment
export const revalidate = 0; // Dynamic route
export const dynamic = 'force-dynamic';</pre>
      </div>

      <h3>Parallel Data Fetching</h3>
      <div class="code-block">
        <pre>// Fetch data in parallel for better performance
async function getUser(id: string) {
  const res = await fetch(\`https://api.example.com/users/\${id}\`);
  return res.json();
}

async function getPosts(userId: string) {
  const res = await fetch(\`https://api.example.com/users/\${userId}/posts\`);
  return res.json();
}

export default async function UserProfile({ params }: { params: { id: string } }) {
  // Fetch in parallel using Promise.all
  const [user, posts] = await Promise.all([
    getUser(params.id),
    getPosts(params.id),
  ]);

  return (
    &lt;div&gt;
      &lt;h1&gt;{user.name}&lt;/h1&gt;
      &lt;h2&gt;Posts&lt;/h2&gt;
      {posts.map(post =&gt; (
        &lt;article key={post.id}&gt;{post.title}&lt;/article&gt;
      ))}
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Sequential Data Fetching (When Needed)</h3>
      <div class="code-block">
        <pre>// When one request depends on another
export default async function UserPage({ params }: { params: { id: string } }) {
  // First fetch user
  const user = await getUser(params.id);

  // Then fetch posts using user data
  const posts = await getPostsByCategory(user.favoriteCategory);

  return (
    &lt;div&gt;
      &lt;h1&gt;{user.name}&lt;/h1&gt;
      &lt;h2&gt;Posts in {user.favoriteCategory}&lt;/h2&gt;
      {/* ... */}
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Client-Side Data Fetching</h3>
      <div class="code-block">
        <pre>'use client';

import { useState, useEffect } from 'react';

export default function ClientFetchExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =&gt; {
    fetch('/api/data')
      .then(res =&gt; res.json())
      .then(data =&gt; {
        setData(data);
        setLoading(false);
      })
      .catch(err =&gt; {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return &lt;div&gt;Loading...&lt;/div&gt;;
  if (error) return &lt;div&gt;Error: {error}&lt;/div&gt;;

  return &lt;div&gt;{JSON.stringify(data)}&lt;/div&gt;;
}</pre>
      </div>

      <h3>Using SWR for Client-Side Fetching</h3>
      <div class="code-block">
        <pre>'use client';

import useSWR from 'swr';

const fetcher = (url: string) =&gt; fetch(url).then(res =&gt; res.json());

export default function Profile() {
  const { data, error, isLoading, mutate } = useSWR('/api/user', fetcher);

  if (isLoading) return &lt;div&gt;Loading...&lt;/div&gt;;
  if (error) return &lt;div&gt;Error loading user&lt;/div&gt;;

  return (
    &lt;div&gt;
      &lt;h1&gt;{data.name}&lt;/h1&gt;
      &lt;button onClick={() =&gt; mutate()}&gt;Refresh&lt;/button&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Streaming with Suspense</h3>
      <div class="code-block">
        <pre>import { Suspense } from 'react';

// Slow component that fetches data
async function SlowComponent() {
  const data = await fetch('https://api.example.com/slow-data', {
    cache: 'no-store',
  });
  return &lt;div&gt;{/* render data */}&lt;/div&gt;;
}

// Fast component
function FastComponent() {
  return &lt;div&gt;This loads immediately&lt;/div&gt;;
}

// Parent page
export default function Page() {
  return (
    &lt;div&gt;
      &lt;FastComponent /&gt;

      {/* Stream in slow content */}
      &lt;Suspense fallback={&lt;div&gt;Loading slow content...&lt;/div&gt;}&gt;
        &lt;SlowComponent /&gt;
      &lt;/Suspense&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>generateStaticParams for Static Generation</h3>
      <div class="code-block">
        <pre>// app/blog/[slug]/page.tsx
// Generate static pages at build time

export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res =&gt; res.json());

  return posts.map((post: { slug: string }) =&gt; ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`).then(
    res =&gt; res.json()
  );

  return (
    &lt;article&gt;
      &lt;h1&gt;{post.title}&lt;/h1&gt;
      &lt;p&gt;{post.content}&lt;/p&gt;
    &lt;/article&gt;
  );
}</pre>
      </div>
    `,
    questions: [
      {
        id: "63-1",
        type: "mcq",
        question: "How do you disable caching for a fetch request in Next.js?",
        options: [
          "fetch(url, { cached: false })",
          "fetch(url, { cache: 'no-store' })",
          "fetch(url, { noCache: true })",
          "fetch(url).noCache()"
        ],
        correctAnswer: "fetch(url, { cache: 'no-store' })",
        explanation: "Using cache: 'no-store' tells Next.js to fetch fresh data on every request without caching. This is equivalent to getServerSideProps behavior from the Pages Router."
      },
      {
        id: "63-2",
        type: "mcq",
        question: "What is the purpose of Promise.all in data fetching?",
        options: [
          "To ensure requests happen one after another",
          "To fetch multiple resources in parallel for better performance",
          "To cache all requests together",
          "To handle errors from all requests"
        ],
        correctAnswer: "To fetch multiple resources in parallel for better performance",
        explanation: "Promise.all executes multiple promises concurrently, allowing independent data fetches to happen in parallel rather than sequentially, significantly improving page load times."
      },
      {
        id: "63-3",
        type: "mcq",
        question: "What does next: { revalidate: 60 } do in a fetch call?",
        options: [
          "Retries the request 60 times",
          "Waits 60ms before fetching",
          "Caches data and revalidates every 60 seconds",
          "Limits response size to 60KB"
        ],
        correctAnswer: "Caches data and revalidates every 60 seconds",
        explanation: "The revalidate option implements Incremental Static Regeneration (ISR), caching the response and automatically revalidating in the background after the specified number of seconds."
      },
      {
        id: "63-4",
        type: "descriptive",
        question: "Explain the difference between server-side and client-side data fetching in Next.js and when to use each.",
        keywords: ["server", "client", "SEO", "performance", "initial", "interactive", "SWR", "useEffect", "async"],
        explanation: "Server-side fetching in Server Components is better for SEO, initial page load, and sensitive data. Client-side fetching (useEffect, SWR) is better for real-time updates, user interactions, and data that changes frequently after initial load."
      }
    ]
  },
  {
    id: 64,
    title: "API Routes & Server Actions",
    description: "Build backend APIs and handle form submissions with Server Actions",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 4,
    week: 2,
    category: "Next.js",
    content: `
      <h2>API Routes in Next.js</h2>
      <p>Next.js allows you to create API endpoints within your application using Route Handlers in the App Router.</p>

      <h3>Creating API Routes</h3>
      <div class="code-block">
        <pre>// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello, World!' });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ received: body }, { status: 201 });
}</pre>
      </div>

      <h3>HTTP Methods</h3>
      <div class="code-block">
        <pre>// app/api/users/route.ts
import { NextResponse } from 'next/server';

// GET /api/users
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';

  // Fetch users from database
  const users = await db.user.findMany({
    skip: (parseInt(page) - 1) * 10,
    take: 10,
  });

  return NextResponse.json(users);
}

// POST /api/users
export async function POST(request: Request) {
  const body = await request.json();

  const user = await db.user.create({
    data: body,
  });

  return NextResponse.json(user, { status: 201 });
}

// PUT, PATCH, DELETE are also supported
export async function PUT(request: Request) { /* ... */ }
export async function PATCH(request: Request) { /* ... */ }
export async function DELETE(request: Request) { /* ... */ }</pre>
      </div>

      <h3>Dynamic API Routes</h3>
      <div class="code-block">
        <pre>// app/api/users/[id]/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await db.user.findUnique({
    where: { id: params.id },
  });

  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await db.user.delete({
    where: { id: params.id },
  });

  return new NextResponse(null, { status: 204 });
}</pre>
      </div>

      <h3>Working with Headers and Cookies</h3>
      <div class="code-block">
        <pre>import { NextResponse } from 'next/server';
import { headers, cookies } from 'next/headers';

export async function GET() {
  // Read headers
  const headersList = headers();
  const authToken = headersList.get('authorization');

  // Read cookies
  const cookieStore = cookies();
  const sessionId = cookieStore.get('session_id');

  // Set response headers
  const response = NextResponse.json({ data: 'success' });
  response.headers.set('X-Custom-Header', 'custom-value');

  // Set cookies
  response.cookies.set('visited', 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 day
  });

  return response;
}</pre>
      </div>

      <h3>Server Actions</h3>
      <p>Server Actions allow you to run server-side code directly from your components without creating API routes.</p>
      <div class="code-block">
        <pre>// app/actions.ts
'use server';

import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  // Validate
  if (!title || !content) {
    return { error: 'Title and content are required' };
  }

  // Save to database
  await db.post.create({
    data: { title, content },
  });

  // Revalidate the posts page
  revalidatePath('/posts');

  return { success: true };
}</pre>
      </div>

      <h3>Using Server Actions in Forms</h3>
      <div class="code-block">
        <pre>// app/posts/new/page.tsx
import { createPost } from '@/app/actions';

export default function NewPostPage() {
  return (
    &lt;form action={createPost}&gt;
      &lt;label htmlFor="title"&gt;Title&lt;/label&gt;
      &lt;input type="text" id="title" name="title" required /&gt;

      &lt;label htmlFor="content"&gt;Content&lt;/label&gt;
      &lt;textarea id="content" name="content" required /&gt;

      &lt;button type="submit"&gt;Create Post&lt;/button&gt;
    &lt;/form&gt;
  );
}</pre>
      </div>

      <h3>Server Actions with useFormState</h3>
      <div class="code-block">
        <pre>'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createPost } from '@/app/actions';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    &lt;button type="submit" disabled={pending}&gt;
      {pending ? 'Creating...' : 'Create Post'}
    &lt;/button&gt;
  );
}

export default function NewPostForm() {
  const [state, formAction] = useFormState(createPost, null);

  return (
    &lt;form action={formAction}&gt;
      {state?.error &amp;&amp; (
        &lt;div className="error"&gt;{state.error}&lt;/div&gt;
      )}

      &lt;input type="text" name="title" required /&gt;
      &lt;textarea name="content" required /&gt;

      &lt;SubmitButton /&gt;
    &lt;/form&gt;
  );
}</pre>
      </div>

      <h3>Server Actions with Mutations</h3>
      <div class="code-block">
        <pre>'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deletePost(postId: string) {
  await db.post.delete({ where: { id: postId } });

  // Revalidate specific path
  revalidatePath('/posts');

  // Or revalidate by tag
  revalidateTag('posts');

  // Or redirect after action
  redirect('/posts');
}

// Using in a component
export function DeleteButton({ postId }: { postId: string }) {
  const deletePostWithId = deletePost.bind(null, postId);

  return (
    &lt;form action={deletePostWithId}&gt;
      &lt;button type="submit"&gt;Delete&lt;/button&gt;
    &lt;/form&gt;
  );
}</pre>
      </div>
    `,
    questions: [
      {
        id: "64-1",
        type: "mcq",
        question: "Where do you create API route handlers in Next.js App Router?",
        options: [
          "In pages/api folder with .js files",
          "In app/api folder with route.ts files",
          "In routes folder with handler.ts files",
          "In any folder with api.ts files"
        ],
        correctAnswer: "In app/api folder with route.ts files",
        explanation: "In the App Router, API routes are created in the app/api directory using route.ts (or route.js) files. Each route.ts exports functions named after HTTP methods (GET, POST, etc.)."
      },
      {
        id: "64-2",
        type: "mcq",
        question: "What directive marks a function as a Server Action?",
        options: ["'use client'", "'use server'", "export const server = true", "'server action'"],
        correctAnswer: "'use server'",
        explanation: "The 'use server' directive at the top of a file or function marks it as a Server Action, allowing it to run on the server and be called from client components or form actions."
      },
      {
        id: "64-3",
        type: "mcq",
        question: "What does revalidatePath('/posts') do after a Server Action?",
        options: [
          "Deletes the posts page cache",
          "Redirects to the posts page",
          "Invalidates cached data for that path so it refetches",
          "Validates form data for the posts page"
        ],
        correctAnswer: "Invalidates cached data for that path so it refetches",
        explanation: "revalidatePath invalidates the cached data for a specific path, causing Next.js to refetch and regenerate that page with fresh data on the next request."
      },
      {
        id: "64-4",
        type: "descriptive",
        question: "Explain when you would use API Routes versus Server Actions in Next.js.",
        keywords: ["API", "route", "server action", "form", "mutation", "external", "client", "webhook", "REST"],
        explanation: "Use API Routes when you need REST endpoints for external clients, webhooks, or when building a traditional API. Use Server Actions for form submissions and mutations within your Next.js app, as they integrate seamlessly with React and eliminate the need for separate API endpoints."
      }
    ]
  },
  {
    id: 65,
    title: "Dynamic Routes & Middleware",
    description: "Master dynamic routing patterns and request middleware in Next.js",
    duration: "50 min",
    difficulty: "Advanced",
    month: 4,
    week: 2,
    category: "Next.js",
    content: `
      <h2>Dynamic Routes in Next.js</h2>
      <p>Dynamic routes allow you to create pages with variable URL segments, perfect for blogs, products, user profiles, and more.</p>

      <h3>Dynamic Route Segments</h3>
      <div class="code-block">
        <pre>// File structure:
app/
├── blog/
│   └── [slug]/
│       └── page.tsx     // /blog/my-post, /blog/another-post
├── users/
│   └── [id]/
│       └── page.tsx     // /users/123, /users/456
└── shop/
    └── [category]/
        └── [product]/
            └── page.tsx // /shop/electronics/laptop</pre>
      </div>

      <h3>Accessing Dynamic Params</h3>
      <div class="code-block">
        <pre>// app/blog/[slug]/page.tsx
interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function BlogPost({ params, searchParams }: PageProps) {
  return (
    &lt;div&gt;
      &lt;h1&gt;Post: {params.slug}&lt;/h1&gt;
      &lt;p&gt;Preview mode: {searchParams.preview}&lt;/p&gt;
    &lt;/div&gt;
  );
}

// With data fetching
export default async function BlogPost({ params }: PageProps) {
  const post = await getPost(params.slug);

  return (
    &lt;article&gt;
      &lt;h1&gt;{post.title}&lt;/h1&gt;
      &lt;div&gt;{post.content}&lt;/div&gt;
    &lt;/article&gt;
  );
}</pre>
      </div>

      <h3>Catch-All Routes</h3>
      <div class="code-block">
        <pre>// app/docs/[...slug]/page.tsx
// Matches: /docs/a, /docs/a/b, /docs/a/b/c

interface PageProps {
  params: { slug: string[] };
}

export default function DocsPage({ params }: PageProps) {
  // /docs/getting-started/installation
  // params.slug = ['getting-started', 'installation']

  return &lt;div&gt;Docs: {params.slug.join(' > ')}&lt;/div&gt;;
}

// Optional catch-all (also matches /docs)
// app/docs/[[...slug]]/page.tsx
export default function DocsPage({ params }: PageProps) {
  // /docs -> params.slug = undefined
  // /docs/intro -> params.slug = ['intro']
  return &lt;div&gt;{params.slug ? params.slug.join('/') : 'Docs Home'}&lt;/div&gt;;
}</pre>
      </div>

      <h3>Route Groups</h3>
      <div class="code-block">
        <pre>// Route groups don't affect URL, just organization
app/
├── (marketing)/
│   ├── layout.tsx      // Marketing layout
│   ├── page.tsx        // /
│   └── about/
│       └── page.tsx    // /about
├── (shop)/
│   ├── layout.tsx      // Shop layout
│   ├── products/
│   │   └── page.tsx    // /products
│   └── cart/
│       └── page.tsx    // /cart
└── (auth)/
    ├── layout.tsx      // Auth layout
    ├── login/
    │   └── page.tsx    // /login
    └── register/
        └── page.tsx    // /register</pre>
      </div>

      <h3>Parallel Routes</h3>
      <div class="code-block">
        <pre>// Render multiple pages in the same layout simultaneously
app/
├── layout.tsx
├── page.tsx
├── @dashboard/
│   └── page.tsx
└── @analytics/
    └── page.tsx

// app/layout.tsx
export default function Layout({
  children,
  dashboard,
  analytics,
}: {
  children: React.ReactNode;
  dashboard: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    &lt;div&gt;
      {children}
      &lt;div className="grid grid-cols-2"&gt;
        {dashboard}
        {analytics}
      &lt;/div&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Middleware</h3>
      <div class="code-block">
        <pre>// middleware.ts (in project root)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get pathname
  const pathname = request.nextUrl.pathname;

  // Check authentication
  const token = request.cookies.get('auth-token');

  // Redirect if not authenticated
  if (pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Add custom headers
  const response = NextResponse.next();
  response.headers.set('x-custom-header', 'my-value');

  return response;
}

// Configure which paths middleware runs on
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/:path*',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};</pre>
      </div>

      <h3>Middleware Use Cases</h3>
      <div class="code-block">
        <pre>// Authentication
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');

  if (!token && request.nextUrl.pathname.startsWith('/protected')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Geolocation-based routing
export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'US';

  if (country === 'UK') {
    return NextResponse.rewrite(new URL('/uk', request.url));
  }

  return NextResponse.next();
}

// A/B Testing
export function middleware(request: NextRequest) {
  const bucket = request.cookies.get('ab-test-bucket');

  if (!bucket) {
    const newBucket = Math.random() < 0.5 ? 'a' : 'b';
    const response = NextResponse.next();
    response.cookies.set('ab-test-bucket', newBucket);
    return response;
  }

  return NextResponse.next();
}

// Rate limiting
const rateLimitMap = new Map();

export function middleware(request: NextRequest) {
  const ip = request.ip || 'unknown';
  const limit = 10; // requests
  const window = 60 * 1000; // 1 minute

  const current = rateLimitMap.get(ip) || { count: 0, lastReset: Date.now() };

  if (Date.now() - current.lastReset > window) {
    current.count = 0;
    current.lastReset = Date.now();
  }

  current.count++;
  rateLimitMap.set(ip, current);

  if (current.count > limit) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    );
  }

  return NextResponse.next();
}</pre>
      </div>

      <h3>Intercepting Routes</h3>
      <div class="code-block">
        <pre>// Intercept routes to show modals while preserving URL
app/
├── feed/
│   └── page.tsx
├── photo/
│   └── [id]/
│       └── page.tsx      // Full page: /photo/123
└── @modal/
    └── (.)photo/
        └── [id]/
            └── page.tsx  // Modal: when clicking from /feed

// (.) - same level
// (..) - one level up
// (..)(..) - two levels up
// (...) - from root app directory</pre>
      </div>
    `,
    questions: [
      {
        id: "65-1",
        type: "mcq",
        question: "What's the difference between [slug] and [...slug] in Next.js routing?",
        options: [
          "No difference, they're aliases",
          "[slug] matches one segment, [...slug] matches one or more segments",
          "[slug] is for strings, [...slug] is for numbers",
          "[slug] is static, [...slug] is dynamic"
        ],
        correctAnswer: "[slug] matches one segment, [...slug] matches one or more segments",
        explanation: "[slug] is a dynamic segment matching exactly one URL segment. [...slug] is a catch-all route that matches one or more segments as an array. [[...slug]] is optional catch-all that also matches the base path."
      },
      {
        id: "65-2",
        type: "mcq",
        question: "Where should middleware.ts be placed in a Next.js project?",
        options: [
          "In the app folder",
          "In the lib folder",
          "In the project root (same level as app folder)",
          "In the api folder"
        ],
        correctAnswer: "In the project root (same level as app folder)",
        explanation: "middleware.ts must be placed in the project root directory, at the same level as the app folder. It runs before every request that matches the configured paths."
      },
      {
        id: "65-3",
        type: "mcq",
        question: "What do parentheses around a folder name (e.g., (marketing)) indicate?",
        options: [
          "It's a dynamic route",
          "It's a route group that doesn't affect the URL",
          "It's a private folder",
          "It's a catch-all route"
        ],
        correctAnswer: "It's a route group that doesn't affect the URL",
        explanation: "Route groups, created with parentheses, allow you to organize routes and layouts without affecting the URL structure. They're useful for applying different layouts to different sections."
      },
      {
        id: "65-4",
        type: "descriptive",
        question: "Explain three common use cases for Next.js middleware.",
        keywords: ["authentication", "redirect", "geolocation", "A/B testing", "rate limiting", "headers", "cookies", "rewrite"],
        explanation: "Common middleware use cases include: 1) Authentication - checking tokens and redirecting unauthenticated users, 2) Geolocation - serving different content based on user location, 3) A/B testing - assigning users to test buckets, 4) Rate limiting - preventing abuse of API endpoints."
      }
    ]
  },
  {
    id: 66,
    title: "Tailwind CSS Deep Dive",
    description: "Master utility-first CSS with Tailwind for rapid UI development",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 4,
    week: 2,
    category: "Tailwind CSS",
    content: `
      <h2>Tailwind CSS Deep Dive</h2>
      <p>Tailwind CSS is a utility-first CSS framework that lets you build designs directly in your markup using utility classes.</p>

      <h3>Setting Up Tailwind in Next.js</h3>
      <div class="code-block">
        <pre># Install Tailwind
npm install -D tailwindcss postcss autoprefixer

# Initialize config files
npx tailwindcss init -p</pre>
      </div>

      <h3>Configuration</h3>
      <div class="code-block">
        <pre>// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};</pre>
      </div>

      <h3>Layout and Spacing</h3>
      <div class="code-block">
        <pre>&lt;!-- Padding and Margin --&gt;
&lt;div class="p-4"&gt;padding: 1rem&lt;/div&gt;
&lt;div class="px-4 py-2"&gt;horizontal: 1rem, vertical: 0.5rem&lt;/div&gt;
&lt;div class="pt-4 pb-2 pl-6 pr-8"&gt;individual sides&lt;/div&gt;
&lt;div class="m-4"&gt;margin: 1rem&lt;/div&gt;
&lt;div class="mx-auto"&gt;center horizontally&lt;/div&gt;
&lt;div class="space-y-4"&gt;vertical space between children&lt;/div&gt;

&lt;!-- Width and Height --&gt;
&lt;div class="w-full"&gt;100% width&lt;/div&gt;
&lt;div class="w-1/2"&gt;50% width&lt;/div&gt;
&lt;div class="w-64"&gt;16rem width&lt;/div&gt;
&lt;div class="max-w-md"&gt;max-width: 28rem&lt;/div&gt;
&lt;div class="h-screen"&gt;100vh height&lt;/div&gt;
&lt;div class="min-h-screen"&gt;minimum 100vh&lt;/div&gt;</pre>
      </div>

      <h3>Flexbox and Grid</h3>
      <div class="code-block">
        <pre>&lt;!-- Flexbox --&gt;
&lt;div class="flex items-center justify-between"&gt;
  &lt;div&gt;Left&lt;/div&gt;
  &lt;div&gt;Right&lt;/div&gt;
&lt;/div&gt;

&lt;div class="flex flex-col gap-4"&gt;
  &lt;div&gt;Item 1&lt;/div&gt;
  &lt;div&gt;Item 2&lt;/div&gt;
&lt;/div&gt;

&lt;div class="flex flex-wrap gap-2"&gt;
  {items.map(item =&gt; (
    &lt;div class="flex-shrink-0"&gt;{item}&lt;/div&gt;
  ))}
&lt;/div&gt;

&lt;!-- Grid --&gt;
&lt;div class="grid grid-cols-3 gap-4"&gt;
  &lt;div&gt;1&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
&lt;/div&gt;

&lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"&gt;
  &lt;!-- Responsive grid --&gt;
&lt;/div&gt;

&lt;div class="grid grid-cols-12 gap-4"&gt;
  &lt;div class="col-span-8"&gt;Main content&lt;/div&gt;
  &lt;div class="col-span-4"&gt;Sidebar&lt;/div&gt;
&lt;/div&gt;</pre>
      </div>

      <h3>Typography</h3>
      <div class="code-block">
        <pre>&lt;h1 class="text-4xl font-bold text-gray-900"&gt;Heading&lt;/h1&gt;
&lt;p class="text-lg text-gray-600 leading-relaxed"&gt;Paragraph text&lt;/p&gt;
&lt;span class="text-sm font-medium text-blue-600"&gt;Link&lt;/span&gt;

&lt;!-- Font sizes: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl... --&gt;
&lt;!-- Font weights: font-thin, font-light, font-normal, font-medium, font-semibold, font-bold --&gt;
&lt;!-- Text alignment: text-left, text-center, text-right, text-justify --&gt;
&lt;!-- Line height: leading-none, leading-tight, leading-normal, leading-relaxed --&gt;

&lt;p class="truncate"&gt;Long text that gets truncated...&lt;/p&gt;
&lt;p class="line-clamp-3"&gt;Text limited to 3 lines...&lt;/p&gt;</pre>
      </div>

      <h3>Colors and Backgrounds</h3>
      <div class="code-block">
        <pre>&lt;!-- Text colors --&gt;
&lt;p class="text-gray-900"&gt;Dark text&lt;/p&gt;
&lt;p class="text-blue-600"&gt;Blue text&lt;/p&gt;
&lt;p class="text-red-500/75"&gt;Red with 75% opacity&lt;/p&gt;

&lt;!-- Background colors --&gt;
&lt;div class="bg-white"&gt;White background&lt;/div&gt;
&lt;div class="bg-gray-100"&gt;Light gray&lt;/div&gt;
&lt;div class="bg-gradient-to-r from-blue-500 to-purple-500"&gt;Gradient&lt;/div&gt;

&lt;!-- Border colors --&gt;
&lt;div class="border border-gray-300"&gt;Gray border&lt;/div&gt;
&lt;div class="border-2 border-blue-500"&gt;Blue border&lt;/div&gt;</pre>
      </div>

      <h3>Responsive Design</h3>
      <div class="code-block">
        <pre>&lt;!-- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px) --&gt;

&lt;div class="
  w-full          {/* default: mobile */}
  sm:w-3/4        {/* 640px and up */}
  md:w-1/2        {/* 768px and up */}
  lg:w-1/3        {/* 1024px and up */}
"&gt;
  Responsive width
&lt;/div&gt;

&lt;nav class="
  flex flex-col   {/* mobile: vertical */}
  md:flex-row     {/* tablet+: horizontal */}
  gap-4
"&gt;
  &lt;a href="/"&gt;Home&lt;/a&gt;
  &lt;a href="/about"&gt;About&lt;/a&gt;
&lt;/nav&gt;

&lt;div class="hidden md:block"&gt;Only on tablet and up&lt;/div&gt;
&lt;div class="md:hidden"&gt;Only on mobile&lt;/div&gt;</pre>
      </div>

      <h3>States and Interactions</h3>
      <div class="code-block">
        <pre>&lt;button class="
  bg-blue-500
  hover:bg-blue-600
  focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  active:bg-blue-700
  disabled:opacity-50 disabled:cursor-not-allowed
  transition-colors duration-200
"&gt;
  Click me
&lt;/button&gt;

&lt;!-- Group hover --&gt;
&lt;div class="group"&gt;
  &lt;img class="group-hover:scale-105 transition-transform" /&gt;
  &lt;p class="group-hover:text-blue-600"&gt;Title&lt;/p&gt;
&lt;/div&gt;

&lt;!-- Dark mode --&gt;
&lt;div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"&gt;
  Supports dark mode
&lt;/div&gt;</pre>
      </div>

      <h3>Common Component Patterns</h3>
      <div class="code-block">
        <pre>&lt;!-- Card --&gt;
&lt;div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"&gt;
  &lt;h3 class="text-lg font-semibold mb-2"&gt;Card Title&lt;/h3&gt;
  &lt;p class="text-gray-600"&gt;Card content&lt;/p&gt;
&lt;/div&gt;

&lt;!-- Button --&gt;
&lt;button class="
  inline-flex items-center justify-center
  px-4 py-2
  bg-blue-600 hover:bg-blue-700
  text-white font-medium
  rounded-md
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  transition-colors
"&gt;
  Button
&lt;/button&gt;

&lt;!-- Input --&gt;
&lt;input class="
  w-full px-4 py-2
  border border-gray-300 rounded-md
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
  placeholder-gray-400
" placeholder="Enter text..." /&gt;

&lt;!-- Badge --&gt;
&lt;span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"&gt;
  Active
&lt;/span&gt;</pre>
      </div>
    `,
    questions: [
      {
        id: "66-1",
        type: "mcq",
        question: "What does the class 'md:flex-row' do?",
        options: [
          "Makes element flex-row only on mobile",
          "Makes element flex-row on medium screens (768px) and above",
          "Makes element flex-row on all screens",
          "Makes element flex-row only on medium screens exactly"
        ],
        correctAnswer: "Makes element flex-row on medium screens (768px) and above",
        explanation: "Tailwind's responsive prefixes (sm:, md:, lg:, xl:, 2xl:) apply styles at that breakpoint and above. md:flex-row applies flex-row from 768px width and up."
      },
      {
        id: "66-2",
        type: "mcq",
        question: "How do you apply a hover style in Tailwind?",
        options: [
          "onHover:bg-blue-600",
          ":hover-bg-blue-600",
          "hover:bg-blue-600",
          "hover={bg-blue-600}"
        ],
        correctAnswer: "hover:bg-blue-600",
        explanation: "Tailwind uses variant prefixes like hover:, focus:, active:, disabled: before the utility class. hover:bg-blue-600 applies bg-blue-600 on hover."
      },
      {
        id: "66-3",
        type: "mcq",
        question: "What is the purpose of the 'group' class in Tailwind?",
        options: [
          "To group elements visually",
          "To create a context for group-hover, group-focus states on child elements",
          "To apply styles to multiple elements at once",
          "To create component groups"
        ],
        correctAnswer: "To create a context for group-hover, group-focus states on child elements",
        explanation: "The 'group' class creates a context that allows child elements to use group-hover:, group-focus:, etc. to style themselves based on the parent's state."
      },
      {
        id: "66-4",
        type: "descriptive",
        question: "Explain the mobile-first approach in Tailwind CSS and how breakpoints work.",
        keywords: ["mobile", "first", "breakpoint", "sm", "md", "lg", "responsive", "min-width", "default"],
        explanation: "Tailwind is mobile-first: unprefixed utilities apply to all screen sizes. Prefixed utilities (sm:, md:, lg:) apply at that breakpoint and above using min-width media queries. Start with mobile styles, then add larger screen overrides."
      }
    ]
  },
  {
    id: 67,
    title: "Building Accessible UI Components",
    description: "Create inclusive interfaces with proper accessibility patterns and ARIA",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 4,
    week: 3,
    category: "Full-Stack",
    content: `
      <h2>Building Accessible UI Components</h2>
      <p>Accessibility (a11y) ensures your application is usable by everyone, including people with disabilities. It's not just ethical - it's often legally required and improves UX for all users.</p>

      <h3>Why Accessibility Matters</h3>
      <ul>
        <li><strong>Inclusion</strong> - Over 1 billion people worldwide have disabilities</li>
        <li><strong>Legal</strong> - Many countries require accessible websites (ADA, WCAG)</li>
        <li><strong>SEO</strong> - Accessible sites rank better in search engines</li>
        <li><strong>UX</strong> - Accessibility improvements benefit all users</li>
      </ul>

      <h3>Semantic HTML Foundation</h3>
      <div class="code-block">
        <pre>&lt;!-- Bad: Divs for everything --&gt;
&lt;div class="header"&gt;
  &lt;div class="nav"&gt;
    &lt;div onclick="navigate()"&gt;Home&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Good: Semantic elements --&gt;
&lt;header&gt;
  &lt;nav aria-label="Main navigation"&gt;
    &lt;a href="/"&gt;Home&lt;/a&gt;
  &lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;
  &lt;article&gt;
    &lt;h1&gt;Page Title&lt;/h1&gt;
    &lt;section aria-labelledby="intro-heading"&gt;
      &lt;h2 id="intro-heading"&gt;Introduction&lt;/h2&gt;
    &lt;/section&gt;
  &lt;/article&gt;
&lt;/main&gt;
&lt;footer&gt;&lt;/footer&gt;</pre>
      </div>

      <h3>Accessible Button Component</h3>
      <div class="code-block">
        <pre>// components/Button.tsx
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt; {
  variant?: 'primary' | 'secondary' | 'danger';
  isLoading?: boolean;
}

export const Button = forwardRef&lt;HTMLButtonElement, ButtonProps&gt;(
  ({ children, variant = 'primary', isLoading, disabled, ...props }, ref) =&gt; {
    return (
      &lt;button
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        aria-disabled={disabled}
        className={\`btn btn-\${variant}\`}
        {...props}
      &gt;
        {isLoading ? (
          &lt;&gt;
            &lt;span className="sr-only"&gt;Loading&lt;/span&gt;
            &lt;Spinner aria-hidden="true" /&gt;
          &lt;/&gt;
        ) : (
          children
        )}
      &lt;/button&gt;
    );
  }
);

Button.displayName = 'Button';</pre>
      </div>

      <h3>Form Accessibility</h3>
      <div class="code-block">
        <pre>// Accessible form with proper labeling and error handling
export function ContactForm() {
  const [errors, setErrors] = useState({});

  return (
    &lt;form aria-label="Contact form"&gt;
      {/* Always use labels */}
      &lt;div&gt;
        &lt;label htmlFor="name"&gt;Name &lt;span aria-hidden="true"&gt;*&lt;/span&gt;&lt;/label&gt;
        &lt;input
          type="text"
          id="name"
          name="name"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        /&gt;
        {errors.name &amp;&amp; (
          &lt;p id="name-error" role="alert" className="error"&gt;
            {errors.name}
          &lt;/p&gt;
        )}
      &lt;/div&gt;

      {/* Group related fields */}
      &lt;fieldset&gt;
        &lt;legend&gt;Contact Preference&lt;/legend&gt;
        &lt;div&gt;
          &lt;input type="radio" id="email-pref" name="preference" value="email" /&gt;
          &lt;label htmlFor="email-pref"&gt;Email&lt;/label&gt;
        &lt;/div&gt;
        &lt;div&gt;
          &lt;input type="radio" id="phone-pref" name="preference" value="phone" /&gt;
          &lt;label htmlFor="phone-pref"&gt;Phone&lt;/label&gt;
        &lt;/div&gt;
      &lt;/fieldset&gt;

      &lt;button type="submit"&gt;Send Message&lt;/button&gt;
    &lt;/form&gt;
  );
}</pre>
      </div>

      <h3>Accessible Modal/Dialog</h3>
      <div class="code-block">
        <pre>'use client';

import { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () =&gt; void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const modalRef = useRef&lt;HTMLDivElement&gt;(null);
  const previousActiveElement = useRef&lt;HTMLElement | null&gt;(null);

  useEffect(() =&gt; {
    if (isOpen) {
      // Store current focus
      previousActiveElement.current = document.activeElement as HTMLElement;
      // Focus modal
      modalRef.current?.focus();
      // Trap focus
      document.body.style.overflow = 'hidden';
    } else {
      // Restore focus
      previousActiveElement.current?.focus();
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() =&gt; {
    const handleKeyDown = (e: KeyboardEvent) =&gt; {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () =&gt; document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    &lt;div
      className="modal-overlay"
      onClick={onClose}
      aria-hidden="true"
    &gt;
      &lt;div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        onClick={e =&gt; e.stopPropagation()}
        className="modal"
      &gt;
        &lt;h2 id="modal-title"&gt;{title}&lt;/h2&gt;
        {children}
        &lt;button onClick={onClose} aria-label="Close modal"&gt;
          &lt;span aria-hidden="true"&gt;&amp;times;&lt;/span&gt;
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Skip Links</h3>
      <div class="code-block">
        <pre>// components/SkipLink.tsx
export function SkipLink() {
  return (
    &lt;a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
                 bg-white px-4 py-2 z-50"
    &gt;
      Skip to main content
    &lt;/a&gt;
  );
}

// In layout.tsx
export default function Layout({ children }) {
  return (
    &lt;html&gt;
      &lt;body&gt;
        &lt;SkipLink /&gt;
        &lt;header&gt;...&lt;/header&gt;
        &lt;main id="main-content" tabIndex={-1}&gt;
          {children}
        &lt;/main&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  );
}</pre>
      </div>

      <h3>Screen Reader Only Content</h3>
      <div class="code-block">
        <pre>{/* Tailwind's sr-only class */}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

{/* Usage */}
&lt;button aria-label="Remove item"&gt;
  &lt;TrashIcon aria-hidden="true" /&gt;
  &lt;span className="sr-only"&gt;Remove item&lt;/span&gt;
&lt;/button&gt;

{/* Announce dynamic content */}
&lt;div aria-live="polite" aria-atomic="true" className="sr-only"&gt;
  {notification}
&lt;/div&gt;</pre>
      </div>

      <h3>Focus Management</h3>
      <div class="code-block">
        <pre>// Visible focus styles (never remove outlines without replacement!)
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      ringColor: {
        DEFAULT: '#3b82f6',
      },
    },
  },
};

// CSS approach
button:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

// Focus trap for modals (using focus-trap-react)
import FocusTrap from 'focus-trap-react';

function Modal({ isOpen, children }) {
  if (!isOpen) return null;

  return (
    &lt;FocusTrap&gt;
      &lt;div role="dialog" aria-modal="true"&gt;
        {children}
      &lt;/div&gt;
    &lt;/FocusTrap&gt;
  );
}</pre>
      </div>

      <h3>Testing Accessibility</h3>
      <div class="code-block">
        <pre>// Using axe-core for automated testing
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('form is accessible', async () =&gt; {
  const { container } = render(&lt;ContactForm /&gt;);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

// Manual testing checklist:
// 1. Navigate with keyboard only (Tab, Shift+Tab, Enter, Space, Escape)
// 2. Test with screen reader (VoiceOver, NVDA)
// 3. Check color contrast (4.5:1 for text, 3:1 for large text)
// 4. Test at 200% zoom
// 5. Disable CSS and check content order</pre>
      </div>
    `,
    questions: [
      {
        id: "67-1",
        type: "mcq",
        question: "What does aria-live='polite' do?",
        options: [
          "Makes the element hidden from screen readers",
          "Announces changes to screen readers when the user is idle",
          "Makes the content always visible",
          "Adds a polite animation"
        ],
        correctAnswer: "Announces changes to screen readers when the user is idle",
        explanation: "aria-live='polite' creates a live region that announces content changes to screen readers when the user is not actively doing something. Use 'assertive' for urgent announcements."
      },
      {
        id: "67-2",
        type: "mcq",
        question: "Why should you never use outline: none without a replacement?",
        options: [
          "It breaks the layout",
          "It removes keyboard focus visibility, making navigation impossible",
          "It's not valid CSS",
          "It slows down the page"
        ],
        correctAnswer: "It removes keyboard focus visibility, making navigation impossible",
        explanation: "Focus indicators are essential for keyboard users to know which element is focused. If you remove the outline, you must provide an alternative visible focus style."
      },
      {
        id: "67-3",
        type: "mcq",
        question: "What is the purpose of aria-labelledby?",
        options: [
          "To add a tooltip",
          "To associate an element with a visible label element by ID",
          "To make text bold",
          "To create a link between pages"
        ],
        correctAnswer: "To associate an element with a visible label element by ID",
        explanation: "aria-labelledby references another element's ID to use its text content as the accessible name. It's useful when a visual label exists but isn't programmatically associated."
      },
      {
        id: "67-4",
        type: "descriptive",
        question: "Explain three key requirements for making a modal dialog accessible.",
        keywords: ["focus", "trap", "escape", "aria-modal", "role", "label", "restore", "keyboard", "overlay"],
        explanation: "Accessible modals need: 1) Focus trapping - focus stays within the modal, 2) Keyboard support - Escape closes it, Tab cycles through focusable elements, 3) Proper ARIA - role='dialog', aria-modal='true', aria-labelledby for title, 4) Focus management - focus moves to modal on open, returns to trigger on close."
      }
    ]
  },
  {
    id: 68,
    title: "Environment Variables & Configuration",
    description: "Manage configuration and secrets securely in Next.js applications",
    duration: "40 min",
    difficulty: "Intermediate",
    month: 4,
    week: 3,
    category: "Full-Stack",
    content: `
      <h2>Environment Variables in Next.js</h2>
      <p>Environment variables allow you to configure your application differently for development, staging, and production environments, and to keep sensitive information secure.</p>

      <h3>Environment File Types</h3>
      <div class="code-block">
        <pre># .env - Default environment variables
DATABASE_URL=postgresql://localhost:5432/myapp
API_KEY=default_key

# .env.local - Local overrides (git-ignored)
DATABASE_URL=postgresql://localhost:5432/myapp_dev
API_KEY=my_secret_key

# .env.development - Development-specific
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# .env.production - Production-specific
NEXT_PUBLIC_API_URL=https://api.myapp.com

# .env.test - Test environment
DATABASE_URL=postgresql://localhost:5432/myapp_test

# Load order (highest to lowest priority):
# 1. .env.[environment].local
# 2. .env.local (not in test environment)
# 3. .env.[environment]
# 4. .env</pre>
      </div>

      <h3>Server vs Client Variables</h3>
      <div class="code-block">
        <pre># .env.local

# Server-only (secure, not exposed to browser)
DATABASE_URL=postgresql://user:password@host:5432/db
API_SECRET_KEY=super_secret_key_123
STRIPE_SECRET_KEY=sk_live_xxx

# Client-side (exposed to browser)
# Must have NEXT_PUBLIC_ prefix
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA-123456
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx</pre>
      </div>

      <h3>Accessing Environment Variables</h3>
      <div class="code-block">
        <pre>// Server-side (Server Components, API Routes, Server Actions)
// Can access ALL environment variables
const dbUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_SECRET_KEY;

export async function getUsers() {
  const res = await fetch(process.env.INTERNAL_API_URL + '/users', {
    headers: {
      'Authorization': \`Bearer \${process.env.API_SECRET_KEY}\`
    }
  });
  return res.json();
}

// Client-side (Client Components)
// Can ONLY access NEXT_PUBLIC_ variables
'use client';

export function AnalyticsScript() {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    &lt;script
      async
      src={\`https://www.googletagmanager.com/gtag/js?id=\${gaId}\`}
    /&gt;
  );
}</pre>
      </div>

      <h3>Type-Safe Environment Variables</h3>
      <div class="code-block">
        <pre>// lib/env.ts
import { z } from 'zod';

const envSchema = z.object({
  // Server
  DATABASE_URL: z.string().url(),
  API_SECRET_KEY: z.string().min(1),
  NODE_ENV: z.enum(['development', 'production', 'test']),

  // Client (NEXT_PUBLIC_)
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXT_PUBLIC_APP_NAME: z.string().default('My App'),
});

// Validate at build time
const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('Invalid environment variables:', parsed.error.format());
  throw new Error('Invalid environment variables');
}

export const env = parsed.data;

// Usage
import { env } from '@/lib/env';

const dbUrl = env.DATABASE_URL; // Type-safe!</pre>
      </div>

      <h3>Environment Variables with TypeScript</h3>
      <div class="code-block">
        <pre>// types/env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    API_SECRET_KEY: string;
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_APP_NAME?: string;
  }
}

// Now process.env is typed
const url = process.env.DATABASE_URL; // string
const env = process.env.NODE_ENV; // 'development' | 'production' | 'test'</pre>
      </div>

      <h3>next.config.js Configuration</h3>
      <div class="code-block">
        <pre>// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Environment variables (alternative to .env files)
  env: {
    CUSTOM_VAR: 'value',
  },

  // Expose server env vars to client (use with caution!)
  // publicRuntimeConfig: {
  //   apiUrl: process.env.API_URL,
  // },

  // Images
  images: {
    domains: ['images.example.com', 'cdn.example.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
      },
    ],
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true, // 308 status code
      },
    ];
  },

  // Rewrites (proxy)
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: \`\${process.env.BACKEND_URL}/:path*\`,
      },
    ];
  },

  // Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;</pre>
      </div>

      <h3>Runtime Configuration</h3>
      <div class="code-block">
        <pre>// For values that need to be different at runtime (not build time)
// next.config.js
module.exports = {
  serverRuntimeConfig: {
    // Only available on server side
    mySecret: process.env.MY_SECRET,
  },
  publicRuntimeConfig: {
    // Available on both server and client
    staticFolder: '/static',
  },
};

// Usage
import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
// serverRuntimeConfig only available in server-side code</pre>
      </div>

      <h3>Best Practices</h3>
      <div class="highlight">
        <ul>
          <li><strong>Never commit .env.local</strong> - Add to .gitignore</li>
          <li><strong>Use NEXT_PUBLIC_ sparingly</strong> - Only for truly public values</li>
          <li><strong>Validate environment variables</strong> - Catch missing vars at build time</li>
          <li><strong>Document required variables</strong> - Create .env.example</li>
          <li><strong>Use secrets managers</strong> - For production (Vercel, AWS Secrets Manager)</li>
          <li><strong>Rotate secrets regularly</strong> - Especially after team changes</li>
        </ul>
      </div>

      <h3>Example .env.example File</h3>
      <div class="code-block">
        <pre># .env.example - Commit this file!
# Copy to .env.local and fill in values

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/myapp

# Authentication
NEXTAUTH_SECRET=generate-with-openssl-rand-base64-32
NEXTAUTH_URL=http://localhost:3000

# Third-party APIs
STRIPE_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx

# Feature flags
NEXT_PUBLIC_ENABLE_NEW_FEATURE=false</pre>
      </div>
    `,
    questions: [
      {
        id: "68-1",
        type: "mcq",
        question: "Which prefix makes an environment variable accessible in client-side code?",
        options: ["PUBLIC_", "CLIENT_", "NEXT_PUBLIC_", "BROWSER_"],
        correctAnswer: "NEXT_PUBLIC_",
        explanation: "Only environment variables prefixed with NEXT_PUBLIC_ are exposed to the browser. All other variables are only available in server-side code for security."
      },
      {
        id: "68-2",
        type: "mcq",
        question: "Which .env file has the highest priority and overrides others?",
        options: [".env", ".env.local", ".env.production", ".env.development.local"],
        correctAnswer: ".env.development.local",
        explanation: "The load priority is: .env.[environment].local > .env.local > .env.[environment] > .env. Local files have higher priority and environment-specific files are loaded based on NODE_ENV."
      },
      {
        id: "68-3",
        type: "mcq",
        question: "Why should you NOT commit .env.local to Git?",
        options: [
          "It's too large",
          "It contains sensitive secrets that shouldn't be shared",
          "Next.js ignores it",
          "It only works on Mac"
        ],
        correctAnswer: "It contains sensitive secrets that shouldn't be shared",
        explanation: ".env.local typically contains sensitive information like API keys, database passwords, and secrets. Committing these would expose them to anyone with access to the repository."
      },
      {
        id: "68-4",
        type: "descriptive",
        question: "Explain the difference between server-only and client-side environment variables in Next.js.",
        keywords: ["NEXT_PUBLIC_", "server", "client", "browser", "secure", "secret", "exposed", "process.env"],
        explanation: "Server-only variables (without NEXT_PUBLIC_ prefix) are only available in Server Components, API routes, and server actions - never sent to the browser. Client-side variables (with NEXT_PUBLIC_ prefix) are inlined at build time and visible in the browser, so they should never contain secrets."
      }
    ]
  },
  {
    id: 69,
    title: "Image Optimization & Static Assets",
    description: "Optimize images and manage static assets for better performance",
    duration: "45 min",
    difficulty: "Intermediate",
    month: 4,
    week: 3,
    category: "Full-Stack",
    content: `
      <h2>Image Optimization in Next.js</h2>
      <p>Images often account for the largest portion of page weight. Next.js provides the Image component for automatic optimization, serving the right size and format to each device.</p>

      <h3>The Next.js Image Component</h3>
      <div class="code-block">
        <pre>import Image from 'next/image';

// Basic usage with local image
import profilePic from '../public/profile.jpg';

export default function Avatar() {
  return (
    &lt;Image
      src={profilePic}
      alt="Profile picture"
      // Width and height inferred from import
      placeholder="blur" // Built-in blur placeholder
    /&gt;
  );
}

// With explicit dimensions
export function ProductImage() {
  return (
    &lt;Image
      src="/products/shoe.jpg"
      alt="Running shoe"
      width={400}
      height={300}
      priority // Load eagerly (for above-the-fold images)
    /&gt;
  );
}</pre>
      </div>

      <h3>Remote Images</h3>
      <div class="code-block">
        <pre>// next.config.js - Configure allowed domains
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
    ],
    // Legacy way (still works)
    domains: ['example.com', 'cdn.example.com'],
  },
};

// Usage
export function RemoteImage() {
  return (
    &lt;Image
      src="https://images.unsplash.com/photo-xxx"
      alt="Landscape"
      width={1200}
      height={800}
    /&gt;
  );
}</pre>
      </div>

      <h3>Responsive Images</h3>
      <div class="code-block">
        <pre>// Fill parent container
export function HeroImage() {
  return (
    &lt;div className="relative h-[400px] w-full"&gt;
      &lt;Image
        src="/hero.jpg"
        alt="Hero image"
        fill
        style={{ objectFit: 'cover' }}
        priority
      /&gt;
    &lt;/div&gt;
  );
}

// Responsive sizes
export function ResponsiveImage() {
  return (
    &lt;Image
      src="/photo.jpg"
      alt="Photo"
      fill
      sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
      // Generates optimal srcset based on sizes
    /&gt;
  );
}

// Fixed sizes at breakpoints
export function CardImage() {
  return (
    &lt;Image
      src="/card.jpg"
      alt="Card image"
      width={400}
      height={300}
      sizes="(max-width: 640px) 100vw, 400px"
      className="rounded-lg"
    /&gt;
  );
}</pre>
      </div>

      <h3>Image Properties</h3>
      <div class="code-block">
        <pre>&lt;Image
  src="/image.jpg"
  alt="Description"  // Required for accessibility

  // Sizing (one of these approaches required)
  width={400}
  height={300}
  // OR
  fill  // Fills parent container

  // Loading behavior
  priority    // Preload, disable lazy loading (for LCP images)
  loading="lazy" // Default: lazy load

  // Placeholder while loading
  placeholder="blur"  // Show blur while loading
  blurDataURL="data:image/jpeg;base64,..." // Custom blur placeholder

  // Styling
  className="rounded-lg shadow"
  style={{ objectFit: 'cover' }}

  // Responsive
  sizes="(max-width: 768px) 100vw, 50vw"

  // Quality
  quality={85} // 1-100, default 75

  // Event handlers
  onLoad={() =&gt; console.log('loaded')}
  onError={() =&gt; console.log('error')}
/&gt;</pre>
      </div>

      <h3>Static Assets (public folder)</h3>
      <div class="code-block">
        <pre># File structure
public/
├── images/
│   ├── logo.svg
│   └── hero.jpg
├── fonts/
│   └── custom-font.woff2
├── favicon.ico
├── robots.txt
└── sitemap.xml

# Access in code
&lt;img src="/images/logo.svg" alt="Logo" /&gt;
&lt;link rel="icon" href="/favicon.ico" /&gt;

# Note: Files in public are served at root
# public/images/logo.svg -> /images/logo.svg</pre>
      </div>

      <h3>Font Optimization</h3>
      <div class="code-block">
        <pre>// app/layout.tsx
import { Inter, Roboto_Mono } from 'next/font/google';

// Variable font (recommended)
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Specific weights
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export default function RootLayout({ children }) {
  return (
    &lt;html lang="en" className={\`\${inter.variable} \${robotoMono.variable}\`}&gt;
      &lt;body className={inter.className}&gt;{children}&lt;/body&gt;
    &lt;/html&gt;
  );
}

// In Tailwind config
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
};</pre>
      </div>

      <h3>Local Fonts</h3>
      <div class="code-block">
        <pre>import localFont from 'next/font/local';

const myFont = localFont({
  src: [
    {
      path: '../public/fonts/font-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/font-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-custom',
});

export default function Layout({ children }) {
  return (
    &lt;html className={myFont.variable}&gt;
      &lt;body&gt;{children}&lt;/body&gt;
    &lt;/html&gt;
  );
}</pre>
      </div>

      <h3>Image Optimization Best Practices</h3>
      <div class="highlight">
        <ul>
          <li><strong>Use next/image</strong> - Automatic WebP/AVIF conversion, lazy loading, responsive sizing</li>
          <li><strong>Add priority to LCP images</strong> - Hero images, above-the-fold content</li>
          <li><strong>Specify sizes</strong> - Helps browser choose optimal image size</li>
          <li><strong>Use blur placeholders</strong> - Better perceived performance</li>
          <li><strong>Optimize originals</strong> - Don't rely only on Next.js optimization</li>
          <li><strong>Use SVG for icons/logos</strong> - Scalable without quality loss</li>
          <li><strong>Consider CDN</strong> - Use image CDN like Cloudinary for user-uploaded content</li>
        </ul>
      </div>

      <h3>Metadata Images</h3>
      <div class="code-block">
        <pre>// app/layout.tsx or page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My App',
  description: 'App description',
  openGraph: {
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

// Or generate dynamic OG images
// app/api/og/route.tsx
import { ImageResponse } from 'next/og';

export async function GET(request: Request) {
  return new ImageResponse(
    (
      &lt;div style={{ fontSize: 48, background: 'white', padding: 50 }}&gt;
        Hello, World!
      &lt;/div&gt;
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}</pre>
      </div>
    `,
    questions: [
      {
        id: "69-1",
        type: "mcq",
        question: "When should you use the 'priority' prop on a Next.js Image?",
        options: [
          "On all images",
          "On images that should load lazily",
          "On the Largest Contentful Paint (LCP) image, like hero images",
          "Only on remote images"
        ],
        correctAnswer: "On the Largest Contentful Paint (LCP) image, like hero images",
        explanation: "The priority prop should be used on images that are above the fold and contribute to LCP, like hero images. It preloads the image and disables lazy loading to improve performance metrics."
      },
      {
        id: "69-2",
        type: "mcq",
        question: "What does the 'fill' prop do on a Next.js Image?",
        options: [
          "Fills the image with a solid color",
          "Makes the image fill its parent container",
          "Adds padding around the image",
          "Fills in missing alt text"
        ],
        correctAnswer: "Makes the image fill its parent container",
        explanation: "The fill prop makes the image fill its parent container completely. The parent must have position: relative, and you typically use object-fit to control how the image scales."
      },
      {
        id: "69-3",
        type: "mcq",
        question: "Why should you specify 'sizes' on responsive images?",
        options: [
          "It's required by Next.js",
          "It helps the browser select the optimal image size from the srcset",
          "It determines the file format",
          "It sets the maximum file size"
        ],
        correctAnswer: "It helps the browser select the optimal image size from the srcset",
        explanation: "The sizes attribute tells the browser how wide the image will be at different viewport widths, allowing it to select the optimal image from the srcset before layout is calculated."
      },
      {
        id: "69-4",
        type: "descriptive",
        question: "Explain the benefits of using the Next.js Image component over a regular img tag.",
        keywords: ["optimization", "WebP", "AVIF", "lazy", "responsive", "srcset", "blur", "placeholder", "automatic", "performance"],
        explanation: "The Next.js Image component provides automatic optimization (WebP/AVIF conversion, resizing), lazy loading by default, responsive srcsets, blur placeholders, prevents Cumulative Layout Shift with required dimensions, and serves optimally sized images based on the viewer's device."
      }
    ]
  },
  {
    id: 70,
    title: "Metadata & SEO",
    description: "Optimize your Next.js app for search engines with the Metadata API",
    duration: "40 min",
    difficulty: "Intermediate",
    month: 4,
    week: 2,
    category: "Next.js SEO",
    content: `
      <h2>Metadata & SEO</h2>
      <p>Next.js provides a powerful Metadata API to define your application's metadata for SEO and web shareability. Good metadata helps search engines understand and rank your pages.</p>

      <h3>Static Metadata</h3>
      <div class="code-block">
        <pre>// app/layout.tsx - Root metadata
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My App',
  description: 'A great application built with Next.js',
  keywords: ['nextjs', 'react', 'web development'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Company',
};

// app/about/page.tsx - Page-specific metadata
export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our company and mission',
};</pre>
      </div>

      <h3>Title Templates</h3>
      <div class="code-block">
        <pre>// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'My App',      // Fallback title
    template: '%s | My App', // Template for child pages
  },
};

// app/about/page.tsx
export const metadata: Metadata = {
  title: 'About', // Renders as "About | My App"
};

// app/contact/page.tsx
export const metadata: Metadata = {
  title: {
    absolute: 'Contact Us', // Ignores template
  },
};</pre>
      </div>

      <h3>Dynamic Metadata</h3>
      <div class="code-block">
        <pre>// app/products/[id]/page.tsx
import type { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise&lt;Metadata&gt; {
  const product = await getProduct(params.id);

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default function ProductPage({ params }: Props) {
  // ...
}</pre>
      </div>

      <h3>Open Graph & Social Sharing</h3>
      <div class="code-block">
        <pre>export const metadata: Metadata = {
  openGraph: {
    title: 'My Awesome App',
    description: 'The best app ever',
    url: 'https://myapp.com',
    siteName: 'My App',
    images: [
      {
        url: 'https://myapp.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My App Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Awesome App',
    description: 'The best app ever',
    images: ['https://myapp.com/twitter-image.jpg'],
    creator: '@yourhandle',
  },
};</pre>
      </div>

      <h3>Icons and Favicon</h3>
      <div class="code-block">
        <pre>// app/layout.tsx
export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
};

// Or use file convention:
// app/favicon.ico
// app/icon.png
// app/apple-icon.png</pre>
      </div>

      <h3>Robots and Indexing</h3>
      <div class="code-block">
        <pre>export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// For private pages
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};</pre>
      </div>

      <h3>Sitemap Generation</h3>
      <div class="code-block">
        <pre>// app/sitemap.ts
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise&lt;MetadataRoute.Sitemap&gt; {
  const products = await getProducts();

  const productUrls = products.map((product) =&gt; ({
    url: \`https://myapp.com/products/\${product.id}\`,
    lastModified: product.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://myapp.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://myapp.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...productUrls,
  ];
}</pre>
      </div>

      <h3>robots.txt</h3>
      <div class="code-block">
        <pre>// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/private/'],
    },
    sitemap: 'https://myapp.com/sitemap.xml',
  };
}</pre>
      </div>

      <h3>Canonical URLs</h3>
      <div class="code-block">
        <pre>// Prevent duplicate content issues
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://myapp.com/products/widget',
    languages: {
      'en-US': 'https://myapp.com/en-US/products/widget',
      'es-ES': 'https://myapp.com/es-ES/products/widget',
    },
  },
};</pre>
      </div>

      <h3>JSON-LD Structured Data</h3>
      <div class="code-block">
        <pre>// app/products/[id]/page.tsx
export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
    },
  };

  return (
    &lt;&gt;
      &lt;script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /&gt;
      &lt;ProductDetails product={product} /&gt;
    &lt;/&gt;
  );
}</pre>
      </div>
    `,
    questions: [
      {
        id: "70-1",
        type: "mcq",
        question: "How do you create dynamic metadata based on page content?",
        options: [
          "Use the metadata constant",
          "Export a generateMetadata async function",
          "Import metadata from a JSON file",
          "Use the useMetadata hook"
        ],
        correctAnswer: "Export a generateMetadata async function",
        explanation: "The generateMetadata function allows you to fetch data and return metadata dynamically based on route params or database content."
      },
      {
        id: "70-2",
        type: "mcq",
        question: "What does the title template '%s | My App' do?",
        options: [
          "Sets all page titles to 'My App'",
          "Replaces %s with the child page's title",
          "Creates a random title",
          "Removes the title"
        ],
        correctAnswer: "Replaces %s with the child page's title",
        explanation: "The template option creates consistent page titles. %s is replaced with the title from child pages, so title: 'About' becomes 'About | My App'."
      },
      {
        id: "70-3",
        type: "mcq",
        question: "What file do you create for a sitemap in the App Router?",
        options: [
          "public/sitemap.xml",
          "app/sitemap.ts",
          "pages/sitemap.tsx",
          "src/sitemap.json"
        ],
        correctAnswer: "app/sitemap.ts",
        explanation: "Next.js automatically generates sitemap.xml from app/sitemap.ts. The function returns an array of URLs with metadata like lastModified and priority."
      },
      {
        id: "70-4",
        type: "descriptive",
        question: "Explain how to add structured data (JSON-LD) to a Next.js page for better SEO.",
        keywords: ["script", "application/ld+json", "schema.org", "dangerouslySetInnerHTML", "JSON.stringify"],
        explanation: "Add a script tag with type='application/ld+json' containing your structured data as JSON. Use dangerouslySetInnerHTML to inject the serialized JSON. Follow schema.org specifications for the data format."
      }
    ]
  },
  {
    id: 71,
    title: "API Routes Basics",
    description: "Build backend API endpoints directly in your Next.js application",
    duration: "45 min",
    difficulty: "Intermediate",
    month: 4,
    week: 3,
    category: "Next.js Backend",
    content: `
      <h2>API Routes Basics</h2>
      <p>Next.js allows you to create API endpoints as part of your application. In the App Router, these are called Route Handlers and live in the app directory.</p>

      <h3>Creating a Route Handler</h3>
      <div class="code-block">
        <pre>// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello, World!' });
}

// Access at: GET /api/hello</pre>
      </div>

      <h3>HTTP Methods</h3>
      <div class="code-block">
        <pre>// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

// GET /api/users
export async function GET(request: NextRequest) {
  const users = await db.users.findMany();
  return NextResponse.json(users);
}

// POST /api/users
export async function POST(request: NextRequest) {
  const body = await request.json();
  const user = await db.users.create({ data: body });
  return NextResponse.json(user, { status: 201 });
}

// Also supported: PUT, PATCH, DELETE, HEAD, OPTIONS</pre>
      </div>

      <h3>Dynamic Route Handlers</h3>
      <div class="code-block">
        <pre>// app/api/users/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

type Params = { params: { id: string } };

export async function GET(request: NextRequest, { params }: Params) {
  const user = await db.users.findUnique({
    where: { id: params.id }
  });

  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}

export async function DELETE(request: NextRequest, { params }: Params) {
  await db.users.delete({ where: { id: params.id } });
  return new NextResponse(null, { status: 204 });
}</pre>
      </div>

      <h3>Reading Request Data</h3>
      <div class="code-block">
        <pre>export async function POST(request: NextRequest) {
  // JSON body
  const body = await request.json();

  // Form data
  const formData = await request.formData();
  const name = formData.get('name');

  // URL search params
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');

  // Headers
  const authHeader = request.headers.get('authorization');

  // Cookies
  const token = request.cookies.get('token');

  return NextResponse.json({ received: body });
}</pre>
      </div>

      <h3>Setting Response Headers & Cookies</h3>
      <div class="code-block">
        <pre>export async function GET() {
  const response = NextResponse.json({ data: 'hello' });

  // Set headers
  response.headers.set('X-Custom-Header', 'my-value');
  response.headers.set('Cache-Control', 'max-age=3600');

  // Set cookies
  response.cookies.set('session', 'abc123', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  return response;
}

// Delete a cookie
export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('session');
  return response;
}</pre>
      </div>

      <h3>Handling Errors</h3>
      <div class="code-block">
        <pre>import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.email || !body.password) {
      return NextResponse.json(
        { error: 'Email and password required' },
        { status: 400 }
      );
    }

    const user = await createUser(body);
    return NextResponse.json(user, { status: 201 });

  } catch (error) {
    console.error('Error creating user:', error);

    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}</pre>
      </div>

      <h3>Streaming Responses</h3>
      <div class="code-block">
        <pre>// Stream a large response
export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 0; i &lt; 10; i++) {
        const chunk = encoder.encode(\`data: \${i}\\n\\n\`);
        controller.enqueue(chunk);
        await new Promise(r =&gt; setTimeout(r, 1000));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}</pre>
      </div>

      <h3>CORS Headers</h3>
      <div class="code-block">
        <pre>export async function GET(request: NextRequest) {
  const response = NextResponse.json({ data: 'hello' });

  // Allow specific origin
  response.headers.set('Access-Control-Allow-Origin', 'https://example.com');
  // Or allow all origins (be careful!)
  // response.headers.set('Access-Control-Allow-Origin', '*');

  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  return response;
}

// Handle preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}</pre>
      </div>

      <h3>Caching Route Handlers</h3>
      <div class="code-block">
        <pre>// Static: cached by default (no request object used)
export async function GET() {
  const data = await fetchData();
  return NextResponse.json(data);
}

// Dynamic: not cached (uses request)
export async function GET(request: NextRequest) {
  const data = await fetchData();
  return NextResponse.json(data);
}

// Force dynamic
export const dynamic = 'force-dynamic';

// Revalidate every 60 seconds
export const revalidate = 60;</pre>
      </div>
    `,
    questions: [
      {
        id: "71-1",
        type: "mcq",
        question: "Where do you create API route handlers in the App Router?",
        options: [
          "pages/api folder",
          "app/api folder with route.ts files",
          "src/routes folder",
          "api folder at root"
        ],
        correctAnswer: "app/api folder with route.ts files",
        explanation: "In the App Router, API routes are created as route.ts files inside the app directory. The path determines the API endpoint URL."
      },
      {
        id: "71-2",
        type: "mcq",
        question: "How do you read JSON from a request body?",
        options: [
          "request.body",
          "request.json()",
          "await request.json()",
          "JSON.parse(request)"
        ],
        correctAnswer: "await request.json()",
        explanation: "The request.json() method returns a Promise that resolves to the parsed JSON body. You must await it to get the data."
      },
      {
        id: "71-3",
        type: "mcq",
        question: "How do you return a 404 response?",
        options: [
          "return null",
          "throw new Error('Not Found')",
          "NextResponse.json({ error: 'Not found' }, { status: 404 })",
          "return 404"
        ],
        correctAnswer: "NextResponse.json({ error: 'Not found' }, { status: 404 })",
        explanation: "NextResponse.json() accepts a second argument for options including the status code. Return the response object with status 404."
      },
      {
        id: "71-4",
        type: "descriptive",
        question: "Explain how to create a route handler that accepts both GET and POST requests.",
        keywords: ["export", "async", "function", "GET", "POST", "NextRequest", "NextResponse"],
        explanation: "Export separate async functions named GET and POST from the same route.ts file. Each function receives the NextRequest and returns a NextResponse. Next.js automatically routes requests to the correct handler based on the HTTP method."
      }
    ]
  },
  {
    id: 72,
    title: "Server Actions",
    description: "Handle form submissions and mutations directly from React Server Components",
    duration: "50 min",
    difficulty: "Advanced",
    month: 4,
    week: 3,
    category: "Next.js Backend",
    content: `
      <h2>Server Actions</h2>
      <p>Server Actions let you define server-side functions that can be called directly from your React components. They're perfect for form submissions, data mutations, and any server-side logic.</p>

      <h3>Defining a Server Action</h3>
      <div class="code-block">
        <pre>// app/actions.ts
'use server';

export async function createTodo(formData: FormData) {
  const title = formData.get('title') as string;

  await db.todos.create({
    data: { title, completed: false }
  });

  revalidatePath('/todos');
}</pre>
      </div>

      <h3>Using in a Form</h3>
      <div class="code-block">
        <pre>// app/todos/page.tsx
import { createTodo } from './actions';

export default function TodoPage() {
  return (
    &lt;form action={createTodo}&gt;
      &lt;input name="title" placeholder="New todo" required /&gt;
      &lt;button type="submit"&gt;Add Todo&lt;/button&gt;
    &lt;/form&gt;
  );
}

// The form works WITHOUT JavaScript!
// Progressive enhancement by default</pre>
      </div>

      <h3>With Validation</h3>
      <div class="code-block">
        <pre>'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const TodoSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
});

export async function createTodo(formData: FormData) {
  const result = TodoSchema.safeParse({
    title: formData.get('title'),
  });

  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors,
    };
  }

  await db.todos.create({
    data: { title: result.data.title }
  });

  revalidatePath('/todos');
  return { success: true };
}</pre>
      </div>

      <h3>Using useFormState for Validation Feedback</h3>
      <div class="code-block">
        <pre>'use client';

import { useFormState } from 'react-dom';
import { createTodo } from './actions';

const initialState = { error: null, success: false };

export function TodoForm() {
  const [state, formAction] = useFormState(createTodo, initialState);

  return (
    &lt;form action={formAction}&gt;
      &lt;input name="title" placeholder="New todo" /&gt;
      {state.error?.title && (
        &lt;p className="error"&gt;{state.error.title}&lt;/p&gt;
      )}
      &lt;SubmitButton /&gt;
      {state.success && &lt;p&gt;Todo created!&lt;/p&gt;}
    &lt;/form&gt;
  );
}</pre>
      </div>

      <h3>Pending States with useFormStatus</h3>
      <div class="code-block">
        <pre>'use client';

import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    &lt;button type="submit" disabled={pending}&gt;
      {pending ? 'Submitting...' : 'Submit'}
    &lt;/button&gt;
  );
}

function TodoForm() {
  return (
    &lt;form action={createTodo}&gt;
      &lt;input name="title" /&gt;
      &lt;SubmitButton /&gt; {/* Must be inside the form */}
    &lt;/form&gt;
  );
}</pre>
      </div>

      <h3>Server Actions with Arguments</h3>
      <div class="code-block">
        <pre>'use server';

export async function updateTodo(id: string, formData: FormData) {
  const title = formData.get('title') as string;

  await db.todos.update({
    where: { id },
    data: { title }
  });

  revalidatePath('/todos');
}

// In component - use bind
function EditForm({ todo }) {
  const updateWithId = updateTodo.bind(null, todo.id);

  return (
    &lt;form action={updateWithId}&gt;
      &lt;input name="title" defaultValue={todo.title} /&gt;
      &lt;button&gt;Update&lt;/button&gt;
    &lt;/form&gt;
  );
}</pre>
      </div>

      <h3>Calling Actions from Event Handlers</h3>
      <div class="code-block">
        <pre>'use client';

import { deleteTodo, toggleTodo } from './actions';
import { useTransition } from 'react';

function TodoItem({ todo }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () =&gt; {
    startTransition(async () =&gt; {
      await deleteTodo(todo.id);
    });
  };

  const handleToggle = () =&gt; {
    startTransition(() =&gt; {
      toggleTodo(todo.id);
    });
  };

  return (
    &lt;li style={{ opacity: isPending ? 0.5 : 1 }}&gt;
      &lt;input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      /&gt;
      {todo.title}
      &lt;button onClick={handleDelete} disabled={isPending}&gt;
        Delete
      &lt;/button&gt;
    &lt;/li&gt;
  );
}</pre>
      </div>

      <h3>Optimistic Updates</h3>
      <div class="code-block">
        <pre>'use client';

import { useOptimistic } from 'react';
import { toggleTodo } from './actions';

function TodoList({ todos }) {
  const [optimisticTodos, addOptimistic] = useOptimistic(
    todos,
    (state, todoId) =&gt;
      state.map((t) =&gt;
        t.id === todoId ? { ...t, completed: !t.completed } : t
      )
  );

  const handleToggle = async (id: string) =&gt; {
    addOptimistic(id); // Update UI immediately
    await toggleTodo(id); // Then update server
  };

  return (
    &lt;ul&gt;
      {optimisticTodos.map((todo) =&gt; (
        &lt;li key={todo.id}&gt;
          &lt;input
            type="checkbox"
            checked={todo.completed}
            onChange={() =&gt; handleToggle(todo.id)}
          /&gt;
          {todo.title}
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</pre>
      </div>

      <h3>Revalidating Data</h3>
      <div class="code-block">
        <pre>'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPost(formData: FormData) {
  const post = await db.posts.create({
    data: { title: formData.get('title') }
  });

  // Revalidate specific path
  revalidatePath('/posts');

  // Or revalidate by tag
  revalidateTag('posts');

  // Optionally redirect
  redirect(\`/posts/\${post.id}\`);
}</pre>
      </div>

      <h3>Error Handling</h3>
      <div class="code-block">
        <pre>'use server';

export async function createUser(formData: FormData) {
  try {
    const user = await db.users.create({
      data: {
        email: formData.get('email'),
        name: formData.get('name'),
      }
    });

    revalidatePath('/users');
    return { success: true, user };

  } catch (error) {
    if (error.code === 'P2002') {
      return { error: 'Email already exists' };
    }
    return { error: 'Something went wrong' };
  }
}</pre>
      </div>
    `,
    questions: [
      {
        id: "72-1",
        type: "mcq",
        question: "What directive marks a function as a Server Action?",
        options: [
          "'use client'",
          "'use server'",
          "'use action'",
          "export server"
        ],
        correctAnswer: "'use server'",
        explanation: "The 'use server' directive at the top of a file or function marks it as a Server Action, allowing it to run on the server and be called from client components."
      },
      {
        id: "72-2",
        type: "mcq",
        question: "How do forms with Server Actions work without JavaScript?",
        options: [
          "They don't work",
          "They use the native form action attribute for progressive enhancement",
          "They require a polyfill",
          "They use AJAX"
        ],
        correctAnswer: "They use the native form action attribute for progressive enhancement",
        explanation: "Server Actions use the native HTML form action, so they work even with JavaScript disabled. This provides progressive enhancement - enhanced with JS, but functional without."
      },
      {
        id: "72-3",
        type: "mcq",
        question: "Which hook shows the pending state of a form submission?",
        options: [
          "useState",
          "useFormState",
          "useFormStatus",
          "useTransition"
        ],
        correctAnswer: "useFormStatus",
        explanation: "useFormStatus returns a pending boolean that indicates if the parent form is currently submitting, allowing you to show loading states on submit buttons."
      },
      {
        id: "72-4",
        type: "descriptive",
        question: "Explain how to implement optimistic updates with Server Actions.",
        keywords: ["useOptimistic", "addOptimistic", "UI", "immediately", "server", "revert"],
        explanation: "Use useOptimistic to track optimistic state. Call the addOptimistic function before the server action to update UI immediately. If the server action fails, React automatically reverts to the actual state."
      }
    ]
  },
  {
    id: 73,
    title: "Middleware & Edge Functions",
    description: "Run code at the edge before requests reach your application",
    duration: "45 min",
    difficulty: "Advanced",
    month: 4,
    week: 3,
    category: "Next.js Backend",
    content: `
      <h2>Middleware & Edge Functions</h2>
      <p>Next.js Middleware runs before requests are completed, allowing you to modify responses, redirect, rewrite, or add headers at the edge - close to your users for maximum speed.</p>

      <h3>Creating Middleware</h3>
      <div class="code-block">
        <pre>// middleware.ts (in project root)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Runs on every matched request
  console.log('Request to:', request.nextUrl.pathname);

  // Continue to the actual page
  return NextResponse.next();
}

// Only run on specific paths
export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'],
};</pre>
      </div>

      <h3>Redirects</h3>
      <div class="code-block">
        <pre>import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Redirect old URLs to new ones
  if (request.nextUrl.pathname === '/old-page') {
    return NextResponse.redirect(new URL('/new-page', request.url));
  }

  // Redirect based on condition
  const country = request.geo?.country || 'US';
  if (country === 'DE') {
    return NextResponse.redirect(new URL('/de', request.url));
  }

  return NextResponse.next();
}</pre>
      </div>

      <h3>Rewrites</h3>
      <div class="code-block">
        <pre>export function middleware(request: NextRequest) {
  // Rewrite URL (URL stays same, content changes)
  if (request.nextUrl.pathname === '/blog') {
    // Show /news content but keep /blog URL
    return NextResponse.rewrite(new URL('/news', request.url));
  }

  // A/B testing with rewrites
  const bucket = request.cookies.get('bucket')?.value || 'a';
  if (request.nextUrl.pathname === '/pricing') {
    return NextResponse.rewrite(
      new URL(\`/pricing-\${bucket}\`, request.url)
    );
  }

  return NextResponse.next();
}</pre>
      </div>

      <h3>Authentication Check</h3>
      <div class="code-block">
        <pre>import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';

export async function middleware(request: NextRequest) {
  // Protected routes
  const protectedPaths = ['/dashboard', '/profile', '/settings'];
  const isProtected = protectedPaths.some(path =&gt;
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtected) {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('from', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }

    try {
      await verifyToken(token);
    } catch {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*'],
};</pre>
      </div>

      <h3>Setting Headers</h3>
      <div class="code-block">
        <pre>export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Add custom headers
  response.headers.set('X-Request-Id', crypto.randomUUID());

  // CORS headers
  response.headers.set('Access-Control-Allow-Origin', '*');

  return response;
}</pre>
      </div>

      <h3>Rate Limiting</h3>
      <div class="code-block">
        <pre>import { NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'), // 10 requests per 10 seconds
});

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api')) {
    const ip = request.ip ?? '127.0.0.1';
    const { success, limit, reset, remaining } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString(),
          }
        }
      );
    }
  }

  return NextResponse.next();
}</pre>
      </div>

      <h3>Geolocation & Personalization</h3>
      <div class="code-block">
        <pre>export function middleware(request: NextRequest) {
  // Access geolocation data (Vercel provides this)
  const country = request.geo?.country || 'US';
  const city = request.geo?.city || 'Unknown';

  // Set cookie for client-side use
  const response = NextResponse.next();
  response.cookies.set('user-country', country);

  // Redirect to country-specific version
  if (country === 'FR' && !request.nextUrl.pathname.startsWith('/fr')) {
    return NextResponse.redirect(
      new URL(\`/fr\${request.nextUrl.pathname}\`, request.url)
    );
  }

  return response;
}</pre>
      </div>

      <h3>Bot Detection</h3>
      <div class="code-block">
        <pre>export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';

  // Simple bot detection
  const isBot = /bot|crawler|spider|crawling/i.test(userAgent);

  if (isBot) {
    // Serve cached/static version to bots
    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'noindex');
    return response;
  }

  return NextResponse.next();
}</pre>
      </div>

      <h3>Matcher Configuration</h3>
      <div class="code-block">
        <pre>// Match specific paths
export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'],
};

// Match all except static files
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

// Match specific methods (not directly supported, check in middleware)
export function middleware(request: NextRequest) {
  if (request.method !== 'POST') {
    return NextResponse.next();
  }
  // Handle POST...
}</pre>
      </div>

      <h3>Edge Runtime Limitations</h3>
      <div class="code-block">
        <pre>// Middleware runs on Edge Runtime
// Can use:
// - fetch, Response, Request
// - URL, Headers, URLSearchParams
// - TextEncoder, TextDecoder
// - crypto, atob, btoa

// Cannot use:
// - Node.js APIs (fs, path, child_process)
// - npm packages that require Node.js
// - Large dependencies (bundle size limited)

// Tip: Keep middleware lightweight!
// Heavy operations should be in API routes</pre>
      </div>
    `,
    questions: [
      {
        id: "73-1",
        type: "mcq",
        question: "Where should the middleware.ts file be placed?",
        options: [
          "In the app folder",
          "In the pages folder",
          "In the project root (same level as app)",
          "In the public folder"
        ],
        correctAnswer: "In the project root (same level as app)",
        explanation: "The middleware.ts file must be placed in the project root, at the same level as the app or pages directory. There can only be one middleware file per project."
      },
      {
        id: "73-2",
        type: "mcq",
        question: "What's the difference between redirect and rewrite?",
        options: [
          "They're the same",
          "Redirect changes the URL in browser, rewrite keeps it the same",
          "Rewrite is faster than redirect",
          "Redirect only works with external URLs"
        ],
        correctAnswer: "Redirect changes the URL in browser, rewrite keeps it the same",
        explanation: "Redirect sends the user to a new URL (URL changes in browser). Rewrite serves different content but keeps the original URL visible to the user."
      },
      {
        id: "73-3",
        type: "mcq",
        question: "What runtime does Next.js middleware use?",
        options: [
          "Node.js runtime",
          "Browser runtime",
          "Edge runtime",
          "Deno runtime"
        ],
        correctAnswer: "Edge runtime",
        explanation: "Middleware runs on the Edge runtime, which is a lightweight runtime based on Web APIs. It runs close to users but has limited Node.js compatibility."
      },
      {
        id: "73-4",
        type: "descriptive",
        question: "Explain how to implement authentication protection for routes using middleware.",
        keywords: ["cookie", "token", "redirect", "login", "verify", "protected", "matcher"],
        explanation: "Check for an auth token in cookies. If missing or invalid, redirect to login page with the original URL as a query parameter. Use the matcher config to only run on protected paths. Verify the token and allow the request to continue if valid."
      }
    ]
  },
  {
    id: 74,
    title: "Authentication Setup",
    description: "Implement secure authentication in Next.js with NextAuth.js",
    duration: "55 min",
    difficulty: "Advanced",
    month: 4,
    week: 3,
    category: "Next.js Auth",
    content: `
      <h2>Authentication Setup</h2>
      <p>NextAuth.js (now Auth.js) is the standard authentication solution for Next.js. It supports various providers, database adapters, and works seamlessly with the App Router.</p>

      <h3>Installation</h3>
      <div class="code-block">
        <pre>npm install next-auth@beta

# For database sessions
npm install @auth/prisma-adapter @prisma/client</pre>
      </div>

      <h3>Basic Configuration</h3>
      <div class="code-block">
        <pre>// auth.ts
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
});</pre>
      </div>

      <h3>Route Handler</h3>
      <div class="code-block">
        <pre>// app/api/auth/[...nextauth]/route.ts
import { handlers } from '@/auth';

export const { GET, POST } = handlers;</pre>
      </div>

      <h3>Credentials Provider</h3>
      <div class="code-block">
        <pre>import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
});</pre>
      </div>

      <h3>Getting Session in Server Components</h3>
      <div class="code-block">
        <pre>// app/dashboard/page.tsx
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    &lt;div&gt;
      &lt;h1&gt;Welcome, {session.user?.name}!&lt;/h1&gt;
      &lt;p&gt;Email: {session.user?.email}&lt;/p&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Client-Side Session</h3>
      <div class="code-block">
        <pre>// app/providers.tsx
'use client';

import { SessionProvider } from 'next-auth/react';

export function Providers({ children }) {
  return &lt;SessionProvider&gt;{children}&lt;/SessionProvider&gt;;
}

// app/layout.tsx
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    &lt;html&gt;
      &lt;body&gt;
        &lt;Providers&gt;{children}&lt;/Providers&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  );
}

// In any client component
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export function AuthButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') return &lt;div&gt;Loading...&lt;/div&gt;;

  if (session) {
    return (
      &lt;div&gt;
        &lt;p&gt;Signed in as {session.user?.email}&lt;/p&gt;
        &lt;button onClick={() =&gt; signOut()}&gt;Sign out&lt;/button&gt;
      &lt;/div&gt;
    );
  }

  return &lt;button onClick={() =&gt; signIn()}&gt;Sign in&lt;/button&gt;;
}</pre>
      </div>

      <h3>Sign In/Out with Server Actions</h3>
      <div class="code-block">
        <pre>// app/login/page.tsx
import { signIn } from '@/auth';

export default function LoginPage() {
  return (
    &lt;div&gt;
      &lt;form
        action={async () =&gt; {
          'use server';
          await signIn('github');
        }}
      &gt;
        &lt;button type="submit"&gt;Sign in with GitHub&lt;/button&gt;
      &lt;/form&gt;

      &lt;form
        action={async () =&gt; {
          'use server';
          await signIn('google');
        }}
      &gt;
        &lt;button type="submit"&gt;Sign in with Google&lt;/button&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Database Adapter</h3>
      <div class="code-block">
        <pre>// auth.ts
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/lib/prisma';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [...],
  session: {
    strategy: 'database', // or 'jwt'
  },
});

// prisma/schema.prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
}

model Account {
  // ... NextAuth required fields
}

model Session {
  // ... NextAuth required fields
}</pre>
      </div>

      <h3>Protecting API Routes</h3>
      <div class="code-block">
        <pre>// app/api/protected/route.ts
import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  return NextResponse.json({
    message: 'Protected data',
    user: session.user,
  });
}</pre>
      </div>

      <h3>Middleware Protection</h3>
      <div class="code-block">
        <pre>// middleware.ts
import { auth } from '@/auth';

export default auth((req) =&gt; {
  const isLoggedIn = !!req.auth;
  const isOnDashboard = req.nextUrl.pathname.startsWith('/dashboard');

  if (isOnDashboard && !isLoggedIn) {
    return Response.redirect(new URL('/login', req.nextUrl));
  }
});

export const config = {
  matcher: ['/dashboard/:path*'],
};</pre>
      </div>

      <h3>Callbacks for Custom Logic</h3>
      <div class="code-block">
        <pre>export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [...],
  callbacks: {
    // Control if user can sign in
    async signIn({ user, account, profile }) {
      // Allow only verified emails
      if (account?.provider === 'google') {
        return profile?.email_verified === true;
      }
      return true;
    },

    // Customize JWT token
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    // Customize session object
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
});</pre>
      </div>
    `,
    questions: [
      {
        id: "74-1",
        type: "mcq",
        question: "Where do you create the NextAuth route handler?",
        options: [
          "app/auth/route.ts",
          "app/api/auth/[...nextauth]/route.ts",
          "pages/api/auth.ts",
          "middleware.ts"
        ],
        correctAnswer: "app/api/auth/[...nextauth]/route.ts",
        explanation: "NextAuth uses a catch-all route at app/api/auth/[...nextauth]/route.ts to handle all authentication endpoints like signin, signout, and callbacks."
      },
      {
        id: "74-2",
        type: "mcq",
        question: "How do you get the session in a Server Component?",
        options: [
          "useSession() hook",
          "await auth()",
          "getServerSession()",
          "session.get()"
        ],
        correctAnswer: "await auth()",
        explanation: "In the App Router with NextAuth v5, you call the auth() function exported from your auth config. It returns the session or null."
      },
      {
        id: "74-3",
        type: "mcq",
        question: "What's needed to use useSession() in client components?",
        options: [
          "Nothing, it works automatically",
          "Wrap the app with SessionProvider",
          "Import from @auth/react",
          "Set up middleware"
        ],
        correctAnswer: "Wrap the app with SessionProvider",
        explanation: "The useSession hook requires SessionProvider as a parent. Typically, you wrap your app in a providers component that includes SessionProvider."
      },
      {
        id: "74-4",
        type: "descriptive",
        question: "Explain how to protect routes using NextAuth middleware.",
        keywords: ["auth", "middleware", "req.auth", "redirect", "matcher", "isLoggedIn"],
        explanation: "Export the auth function as default middleware. Check req.auth to see if user is logged in. If accessing a protected route without auth, redirect to login. Use matcher config to specify which routes the middleware should run on."
      }
    ]
  },
  {
    id: 75,
    title: "Tailwind CSS Deep Dive",
    description: "Master Tailwind CSS for rapid, responsive UI development in Next.js",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 4,
    week: 4,
    category: "Styling",
    content: `
      <h2>Tailwind CSS Deep Dive</h2>
      <p>Tailwind CSS is a utility-first CSS framework that works perfectly with Next.js. It provides low-level utility classes that let you build custom designs without leaving your HTML.</p>

      <h3>Setup in Next.js</h3>
      <div class="code-block">
        <pre># Already included in create-next-app
# Or install manually:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</pre>
      </div>

      <h3>Configuration</h3>
      <div class="code-block">
        <pre>// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;</pre>
      </div>

      <h3>Layout Utilities</h3>
      <div class="code-block">
        <pre>&lt;!-- Flexbox --&gt;
&lt;div className="flex items-center justify-between gap-4"&gt;
  &lt;div className="flex-1"&gt;Flexible&lt;/div&gt;
  &lt;div className="flex-shrink-0"&gt;Fixed&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid --&gt;
&lt;div className="grid grid-cols-3 gap-4"&gt;
  &lt;div className="col-span-2"&gt;Wide&lt;/div&gt;
  &lt;div&gt;Normal&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Container --&gt;
&lt;div className="container mx-auto px-4"&gt;
  Centered content
&lt;/div&gt;</pre>
      </div>

      <h3>Responsive Design</h3>
      <div class="code-block">
        <pre>&lt;!-- Mobile-first approach --&gt;
&lt;div className="
  grid grid-cols-1        {/* Mobile: 1 column */}
  md:grid-cols-2          {/* Tablet: 2 columns */}
  lg:grid-cols-4          {/* Desktop: 4 columns */}
  gap-4
"&gt;
  &lt;Card /&gt;
&lt;/div&gt;

&lt;!-- Hide/Show at breakpoints --&gt;
&lt;nav className="hidden md:flex"&gt;Desktop nav&lt;/nav&gt;
&lt;button className="md:hidden"&gt;Mobile menu&lt;/button&gt;

{/* Breakpoints:
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
*/}</pre>
      </div>

      <h3>States and Variants</h3>
      <div class="code-block">
        <pre>&lt;button className="
  bg-blue-500
  hover:bg-blue-600
  active:bg-blue-700
  focus:ring-2 focus:ring-blue-300
  disabled:opacity-50 disabled:cursor-not-allowed
"&gt;
  Click me
&lt;/button&gt;

&lt;!-- Group hover --&gt;
&lt;div className="group"&gt;
  &lt;h3 className="group-hover:text-blue-500"&gt;Title&lt;/h3&gt;
  &lt;p className="group-hover:underline"&gt;Subtitle&lt;/p&gt;
&lt;/div&gt;

&lt;!-- Peer states --&gt;
&lt;input className="peer" /&gt;
&lt;span className="peer-invalid:text-red-500"&gt;
  Please enter valid email
&lt;/span&gt;</pre>
      </div>

      <h3>Dark Mode</h3>
      <div class="code-block">
        <pre>// tailwind.config.ts
module.exports = {
  darkMode: 'class', // or 'media'
};

// Component
&lt;div className="
  bg-white dark:bg-gray-900
  text-gray-900 dark:text-white
"&gt;
  Adapts to dark mode
&lt;/div&gt;

// Toggle dark mode
function ThemeToggle() {
  const toggleDark = () =&gt; {
    document.documentElement.classList.toggle('dark');
  };

  return &lt;button onClick={toggleDark}&gt;Toggle&lt;/button&gt;;
}</pre>
      </div>

      <h3>Custom Components with @apply</h3>
      <div class="code-block">
        <pre>/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-medium transition-colors;
  }

  .btn-primary {
    @apply btn bg-blue-500 text-white hover:bg-blue-600;
  }

  .btn-secondary {
    @apply btn bg-gray-200 text-gray-800 hover:bg-gray-300;
  }

  .card {
    @apply bg-white rounded-xl shadow-lg p-6;
  }
}</pre>
      </div>

      <h3>Animations</h3>
      <div class="code-block">
        <pre>&lt;!-- Built-in animations --&gt;
&lt;div className="animate-spin"&gt;Spinner&lt;/div&gt;
&lt;div className="animate-pulse"&gt;Loading...&lt;/div&gt;
&lt;div className="animate-bounce"&gt;Bouncing!&lt;/div&gt;

&lt;!-- Transitions --&gt;
&lt;div className="
  transition-all duration-300 ease-in-out
  hover:scale-105 hover:shadow-xl
"&gt;
  Hover me
&lt;/div&gt;

&lt;!-- Custom animation --&gt;
// tailwind.config.ts
theme: {
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.5s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
  },
}</pre>
      </div>

      <h3>Spacing and Sizing</h3>
      <div class="code-block">
        <pre>&lt;!-- Padding: p-{size} --&gt;
&lt;div className="p-4"&gt;All sides&lt;/div&gt;
&lt;div className="px-4 py-2"&gt;Horizontal, Vertical&lt;/div&gt;
&lt;div className="pt-4 pb-2 pl-6 pr-3"&gt;Individual&lt;/div&gt;

&lt;!-- Margin: m-{size} --&gt;
&lt;div className="mt-4 mb-8"&gt;Top, Bottom&lt;/div&gt;
&lt;div className="mx-auto"&gt;Centered&lt;/div&gt;

&lt;!-- Width and Height --&gt;
&lt;div className="w-full md:w-1/2 lg:w-1/3"&gt;Responsive width&lt;/div&gt;
&lt;div className="h-screen"&gt;Full viewport height&lt;/div&gt;
&lt;div className="max-w-md"&gt;Max width container&lt;/div&gt;

{/* Scale: 1 = 0.25rem = 4px
4 = 1rem = 16px
8 = 2rem = 32px */}</pre>
      </div>

      <h3>Typography</h3>
      <div class="code-block">
        <pre>&lt;h1 className="text-4xl font-bold tracking-tight"&gt;
  Heading
&lt;/h1&gt;

&lt;p className="text-gray-600 leading-relaxed"&gt;
  Body text with relaxed line height
&lt;/p&gt;

&lt;span className="text-sm font-medium uppercase tracking-wide"&gt;
  Label
&lt;/span&gt;

&lt;!-- Truncate text --&gt;
&lt;p className="truncate"&gt;Long text that gets cut off...&lt;/p&gt;
&lt;p className="line-clamp-3"&gt;Multi-line truncation after 3 lines&lt;/p&gt;</pre>
      </div>

      <h3>cn() Utility for Conditional Classes</h3>
      <div class="code-block">
        <pre>// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Usage
function Button({ variant, className, ...props }) {
  return (
    &lt;button
      className={cn(
        'px-4 py-2 rounded-lg font-medium',
        variant === 'primary' && 'bg-blue-500 text-white',
        variant === 'secondary' && 'bg-gray-200 text-gray-800',
        className // Allow overrides
      )}
      {...props}
    /&gt;
  );
}</pre>
      </div>
    `,
    questions: [
      {
        id: "75-1",
        type: "mcq",
        question: "What is the mobile-first approach in Tailwind?",
        options: [
          "Design for mobile screens first, add breakpoints for larger screens",
          "Use 'mobile:' prefix for all styles",
          "Hide everything on mobile",
          "Load different CSS for mobile"
        ],
        correctAnswer: "Design for mobile screens first, add breakpoints for larger screens",
        explanation: "Tailwind's unprefixed utilities apply to all screen sizes. Breakpoint prefixes (md:, lg:) add styles at that breakpoint and above, building up from mobile."
      },
      {
        id: "75-2",
        type: "mcq",
        question: "How do you enable dark mode in Tailwind?",
        options: [
          "It's always enabled",
          "Set darkMode: 'class' in config and use dark: prefix",
          "Import dark theme separately",
          "Use @dark directive"
        ],
        correctAnswer: "Set darkMode: 'class' in config and use dark: prefix",
        explanation: "Configure darkMode as 'class' or 'media' in tailwind.config.ts. Then use the dark: prefix on utilities. With 'class' mode, toggle the 'dark' class on the html element."
      },
      {
        id: "75-3",
        type: "mcq",
        question: "What does @apply do in Tailwind CSS?",
        options: [
          "Applies external CSS",
          "Applies Tailwind utilities inside custom CSS classes",
          "Applies styles conditionally",
          "Applies animations"
        ],
        correctAnswer: "Applies Tailwind utilities inside custom CSS classes",
        explanation: "@apply lets you create reusable component classes by combining Tailwind utilities. Use it sparingly for truly repeated patterns."
      },
      {
        id: "75-4",
        type: "descriptive",
        question: "Explain how to create a responsive card grid that shows 1 column on mobile, 2 on tablet, and 4 on desktop.",
        keywords: ["grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap", "responsive"],
        explanation: "Use 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'. The base grid-cols-1 applies to mobile, md: adds 2 columns at tablet breakpoint (768px+), lg: adds 4 columns at desktop (1024px+)."
      }
    ]
  },
  {
    id: 76,
    title: "CSS Modules & Styling Options",
    description: "Explore different styling approaches in Next.js including CSS Modules",
    duration: "40 min",
    difficulty: "Intermediate",
    month: 4,
    week: 4,
    category: "Styling",
    content: `
      <h2>CSS Modules & Styling Options</h2>
      <p>Next.js supports multiple styling approaches out of the box. Understanding each helps you choose the right tool for your project.</p>

      <h3>CSS Modules</h3>
      <div class="code-block">
        <pre>/* Button.module.css */
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
}

.primary {
  background-color: #3b82f6;
  color: white;
}

.secondary {
  background-color: #e5e7eb;
  color: #374151;
}

// Button.tsx
import styles from './Button.module.css';

export function Button({ variant = 'primary', children }) {
  return (
    &lt;button className={\`\${styles.button} \${styles[variant]}\`}&gt;
      {children}
    &lt;/button&gt;
  );
}

// Generates unique class names like: Button_button__x7d3k</pre>
      </div>

      <h3>CSS Modules with clsx</h3>
      <div class="code-block">
        <pre>import clsx from 'clsx';
import styles from './Button.module.css';

function Button({ variant, disabled, className }) {
  return (
    &lt;button
      className={clsx(
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        className
      )}
    &gt;
      Click me
    &lt;/button&gt;
  );
}</pre>
      </div>

      <h3>Global CSS</h3>
      <div class="code-block">
        <pre>/* app/globals.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #3b82f6;
  --background: #ffffff;
  --text: #1f2937;
}

body {
  font-family: system-ui, sans-serif;
  background-color: var(--background);
  color: var(--text);
}

/* app/layout.tsx */
import './globals.css';

export default function RootLayout({ children }) {
  return (
    &lt;html&gt;
      &lt;body&gt;{children}&lt;/body&gt;
    &lt;/html&gt;
  );
}</pre>
      </div>

      <h3>CSS-in-JS with styled-components</h3>
      <div class="code-block">
        <pre>// With App Router, use 'use client'
'use client';

import styled from 'styled-components';

const Button = styled.button&lt;{ $primary?: boolean }&gt;\`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  background: \${props =&gt; props.$primary ? '#3b82f6' : '#e5e7eb'};
  color: \${props =&gt; props.$primary ? 'white' : '#374151'};

  &amp;:hover {
    opacity: 0.9;
  }
\`;

export default function Page() {
  return (
    &lt;div&gt;
      &lt;Button $primary&gt;Primary&lt;/Button&gt;
      &lt;Button&gt;Secondary&lt;/Button&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Sass/SCSS Support</h3>
      <div class="code-block">
        <pre># Install Sass
npm install -D sass

/* styles/components.scss */
$primary-color: #3b82f6;
$border-radius: 0.5rem;

@mixin button-base {
  padding: 0.5rem 1rem;
  border-radius: $border-radius;
  font-weight: 500;
  cursor: pointer;
}

.button {
  @include button-base;

  &amp;--primary {
    background: $primary-color;
    color: white;

    &amp;:hover {
      background: darken($primary-color, 10%);
    }
  }
}

// Works with CSS Modules too
// Button.module.scss</pre>
      </div>

      <h3>Inline Styles</h3>
      <div class="code-block">
        <pre>// Good for dynamic values
function ProgressBar({ progress }) {
  return (
    &lt;div
      style={{
        width: '100%',
        height: '8px',
        backgroundColor: '#e5e7eb',
        borderRadius: '4px',
      }}
    &gt;
      &lt;div
        style={{
          width: \`\${progress}%\`,
          height: '100%',
          backgroundColor: '#3b82f6',
          borderRadius: '4px',
          transition: 'width 0.3s ease',
        }}
      /&gt;
    &lt;/div&gt;
  );
}

// Note: No pseudo-classes, media queries, or animations
// Use CSS Modules or Tailwind for those</pre>
      </div>

      <h3>Comparison of Approaches</h3>
      <div class="code-block">
        <pre>// CSS Modules
// + Scoped by default
// + Zero runtime
// + Works with Server Components
// - Separate file per component
// - No dynamic styles

// Tailwind CSS
// + Utility classes = fast development
// + No CSS files needed
// + Great responsive support
// - Learning curve
// - Long class strings

// styled-components / Emotion
// + Dynamic styles
// + Component-scoped
// + Full CSS power
// - Runtime overhead
// - Requires 'use client'

// Sass/SCSS
// + Variables, mixins, nesting
// + Works with CSS Modules
// + Industry standard
// - Additional build step
// - Global by default</pre>
      </div>

      <h3>Best Practices</h3>
      <div class="code-block">
        <pre>// 1. Use CSS Modules for component-specific styles
// components/Card/Card.module.css
.card { /* ... */ }

// 2. Use Tailwind for utility and rapid prototyping
&lt;div className="flex items-center gap-4 p-4"&gt;

// 3. Use CSS variables for theming
:root {
  --primary: #3b82f6;
}
.button { background: var(--primary); }

// 4. Keep styles close to components
components/
  Button/
    Button.tsx
    Button.module.css
  Card/
    Card.tsx
    Card.module.css

// 5. Use Tailwind with CSS Modules together
import styles from './Card.module.css';

&lt;div className={\`\${styles.card} p-4 hover:shadow-lg\`}&gt;</pre>
      </div>

      <h3>CSS Modules Composition</h3>
      <div class="code-block">
        <pre>/* base.module.css */
.buttonBase {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

/* Button.module.css */
.primary {
  composes: buttonBase from './base.module.css';
  background: blue;
  color: white;
}

.secondary {
  composes: buttonBase from './base.module.css';
  background: gray;
  color: black;
}</pre>
      </div>
    `,
    questions: [
      {
        id: "76-1",
        type: "mcq",
        question: "What makes CSS Modules unique compared to regular CSS?",
        options: [
          "They're faster",
          "They generate unique scoped class names automatically",
          "They support Sass syntax",
          "They work only in React"
        ],
        correctAnswer: "They generate unique scoped class names automatically",
        explanation: "CSS Modules generate unique class names (like .Button_primary__x7d3k) ensuring styles don't conflict between components."
      },
      {
        id: "76-2",
        type: "mcq",
        question: "Which styling approach requires 'use client' in Next.js App Router?",
        options: [
          "CSS Modules",
          "Tailwind CSS",
          "styled-components",
          "Global CSS"
        ],
        correctAnswer: "styled-components",
        explanation: "CSS-in-JS solutions like styled-components require JavaScript at runtime, so they need 'use client' and can't be used in Server Components."
      },
      {
        id: "76-3",
        type: "mcq",
        question: "How do you import SCSS in Next.js?",
        options: [
          "It's not supported",
          "Install sass package and import .scss files directly",
          "Use a special loader",
          "Convert to CSS first"
        ],
        correctAnswer: "Install sass package and import .scss files directly",
        explanation: "Next.js has built-in Sass support. Just install the 'sass' package and import .scss files like regular CSS files."
      },
      {
        id: "76-4",
        type: "descriptive",
        question: "Compare CSS Modules and Tailwind CSS for styling React components.",
        keywords: ["scoped", "utility", "file", "class", "runtime", "responsive"],
        explanation: "CSS Modules provide scoped styles in separate files with no runtime cost. Tailwind uses utility classes inline for rapid development. CSS Modules suit complex custom designs, Tailwind suits consistent utility-based styling. Both work with Server Components."
      }
    ]
  },
  {
    id: 77,
    title: "Environment Variables & Config",
    description: "Manage configuration and secrets in Next.js applications",
    duration: "35 min",
    difficulty: "Intermediate",
    month: 4,
    week: 4,
    category: "Next.js Config",
    content: `
      <h2>Environment Variables & Config</h2>
      <p>Next.js has built-in support for environment variables, making it easy to manage different configurations for development, staging, and production.</p>

      <h3>Environment Files</h3>
      <div class="code-block">
        <pre># .env.local - Local development (git ignored)
DATABASE_URL=postgresql://localhost:5432/mydb
API_SECRET=my-super-secret-key

# .env.development - Development environment
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# .env.production - Production environment
NEXT_PUBLIC_API_URL=https://api.myapp.com

# .env - Default values (all environments)
NEXT_PUBLIC_APP_NAME=My App

# Load order (later overrides earlier):
# .env → .env.local → .env.{environment} → .env.{environment}.local</pre>
      </div>

      <h3>Server-Side Variables</h3>
      <div class="code-block">
        <pre>// These are ONLY available on the server
// app/api/users/route.ts
export async function GET() {
  const dbUrl = process.env.DATABASE_URL;
  const apiKey = process.env.API_SECRET;

  // Safe - these never reach the client
  const users = await fetchFromDB(dbUrl);
  return Response.json(users);
}

// Server Component
export default async function Page() {
  // Also safe - runs on server
  const secret = process.env.API_SECRET;
  const data = await fetchWithSecret(secret);

  return &lt;div&gt;{data.message}&lt;/div&gt;;
}</pre>
      </div>

      <h3>Client-Side Variables (NEXT_PUBLIC_)</h3>
      <div class="code-block">
        <pre># .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GA_ID=UA-12345678-1

// Client Component
'use client';

function Analytics() {
  // ✅ Available - prefixed with NEXT_PUBLIC_
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // ❌ Undefined on client - no prefix
  const secret = process.env.API_SECRET; // undefined!

  return &lt;Script id="analytics" /&gt;;
}

// IMPORTANT: NEXT_PUBLIC_ vars are embedded at build time
// Changing them requires a rebuild</pre>
      </div>

      <h3>Runtime Configuration</h3>
      <div class="code-block">
        <pre>// For values that need to change without rebuild
// next.config.js
module.exports = {
  serverRuntimeConfig: {
    // Only available on server
    apiSecret: process.env.API_SECRET,
  },
  publicRuntimeConfig: {
    // Available on client (don't put secrets here!)
    apiUrl: process.env.API_URL,
  },
};

// Usage
import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

// Note: This approach is mostly for Pages Router
// App Router prefers environment variables</pre>
      </div>

      <h3>Type-Safe Environment Variables</h3>
      <div class="code-block">
        <pre>// env.ts
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_SECRET: z.string().min(32),
  NEXT_PUBLIC_API_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'production', 'test']),
});

// Validate at startup
const env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  API_SECRET: process.env.API_SECRET,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NODE_ENV: process.env.NODE_ENV,
});

export default env;

// Usage
import env from '@/env';

const dbUrl = env.DATABASE_URL; // Type-safe!</pre>
      </div>

      <h3>next.config.js Options</h3>
      <div class="code-block">
        <pre>// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,

  // Custom environment variables
  env: {
    CUSTOM_VAR: 'value', // Available as process.env.CUSTOM_VAR
  },

  // Image optimization domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.example.com',
      },
    ],
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },

  // Rewrites
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ];
  },

  // Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;</pre>
      </div>

      <h3>Vercel Environment Variables</h3>
      <div class="code-block">
        <pre># On Vercel, set environment variables in:
# Project Settings &gt; Environment Variables

# Types:
# - Plain text: Regular values
# - Secret: Encrypted, hidden in logs

# Scopes:
# - Production: Only production deployments
# - Preview: Preview/PR deployments
# - Development: vercel dev locally

# Vercel auto-injects:
VERCEL=1
VERCEL_ENV=production|preview|development
VERCEL_URL=your-deployment-url.vercel.app
VERCEL_GIT_COMMIT_SHA=abc123...</pre>
      </div>

      <h3>Development vs Production</h3>
      <div class="code-block">
        <pre>// Check environment
if (process.env.NODE_ENV === 'development') {
  // Development-only code
  console.log('Debug info');
}

if (process.env.NODE_ENV === 'production') {
  // Production-only code
}

// Common pattern for API URLs
const API_URL = process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === 'production'
    ? 'https://api.myapp.com'
    : 'http://localhost:3001');</pre>
      </div>

      <h3>Best Practices</h3>
      <div class="code-block">
        <pre>// 1. Never commit secrets
# .gitignore
.env*.local
.env.production

// 2. Use .env.example for documentation
# .env.example
DATABASE_URL=postgresql://user:pass@host:5432/db
API_SECRET=your-secret-here

// 3. Validate environment at startup
// See type-safe example above

// 4. Use descriptive names
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

// 5. Separate concerns
.env.development   # Dev-specific
.env.production    # Prod-specific
.env.local         # Local overrides (never committed)</pre>
      </div>
    `,
    questions: [
      {
        id: "77-1",
        type: "mcq",
        question: "What prefix makes environment variables available on the client?",
        options: [
          "PUBLIC_",
          "CLIENT_",
          "NEXT_PUBLIC_",
          "BROWSER_"
        ],
        correctAnswer: "NEXT_PUBLIC_",
        explanation: "Variables prefixed with NEXT_PUBLIC_ are embedded in the JavaScript bundle and available on the client. All other variables are server-only."
      },
      {
        id: "77-2",
        type: "mcq",
        question: "When do NEXT_PUBLIC_ variables get their values?",
        options: [
          "At runtime when the page loads",
          "At build time, embedded in the bundle",
          "When the server starts",
          "When the component renders"
        ],
        correctAnswer: "At build time, embedded in the bundle",
        explanation: "NEXT_PUBLIC_ variables are replaced with their actual values at build time. Changing them requires a rebuild of the application."
      },
      {
        id: "77-3",
        type: "mcq",
        question: "Which .env file should never be committed to git?",
        options: [
          ".env",
          ".env.development",
          ".env.local",
          ".env.example"
        ],
        correctAnswer: ".env.local",
        explanation: ".env.local contains local overrides and secrets. It should be in .gitignore. Use .env.example to document required variables."
      },
      {
        id: "77-4",
        type: "descriptive",
        question: "Explain how to validate environment variables at application startup.",
        keywords: ["zod", "schema", "parse", "startup", "validate", "type-safe"],
        explanation: "Create a schema using zod or similar validation library. Define expected types and constraints for each variable. Parse process.env values against the schema at startup. Export the validated config for type-safe usage throughout the app."
      }
    ]
  },
  {
    id: 78,
    title: "Deploying to Vercel",
    description: "Deploy your Next.js application to production on Vercel",
    duration: "40 min",
    difficulty: "Intermediate",
    month: 4,
    week: 4,
    category: "Deployment",
    content: `
      <h2>Deploying to Vercel</h2>
      <p>Vercel is the company behind Next.js and offers the best deployment experience. Zero-config deployments, preview URLs, and edge functions are built-in.</p>

      <h3>Initial Deployment</h3>
      <div class="code-block">
        <pre># Option 1: Via CLI
npm i -g vercel
vercel

# Option 2: Via Git integration
# 1. Push code to GitHub/GitLab/Bitbucket
# 2. Go to vercel.com
# 3. Import your repository
# 4. Click Deploy

# That's it! Vercel auto-detects Next.js</pre>
      </div>

      <h3>Project Configuration</h3>
      <div class="code-block">
        <pre>// vercel.json (optional - most things are auto-detected)
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1", "sfo1"], // Deploy to specific regions
  "crons": [
    {
      "path": "/api/cron",
      "schedule": "0 5 * * *"  // Daily at 5 AM
    }
  ]
}</pre>
      </div>

      <h3>Environment Variables</h3>
      <div class="code-block">
        <pre># In Vercel Dashboard:
# Settings &gt; Environment Variables

# Add your variables:
DATABASE_URL = postgresql://...
API_SECRET = your-secret-key
NEXT_PUBLIC_API_URL = https://api.yourapp.com

# Choose scope:
# - Production: Live site
# - Preview: PR previews
# - Development: vercel dev

# Or via CLI:
vercel env add DATABASE_URL</pre>
      </div>

      <h3>Preview Deployments</h3>
      <div class="code-block">
        <pre># Every push creates a preview URL
# main branch → production
# feature-branch → preview URL

# PR workflow:
# 1. Create PR
# 2. Vercel creates preview: feature-xyz-abc123.vercel.app
# 3. Share with team for review
# 4. Merge to main
# 5. Auto-deploys to production

# Preview comments: Enable in project settings
# Team members can leave comments on preview deploys</pre>
      </div>

      <h3>Custom Domains</h3>
      <div class="code-block">
        <pre># In Dashboard: Settings &gt; Domains

# Add your domain:
myapp.com
www.myapp.com

# Vercel provides:
# - Free SSL certificates
# - Automatic renewal
# - Edge CDN

# DNS Configuration:
# A Record: @ → 76.76.21.21
# CNAME: www → cname.vercel-dns.com</pre>
      </div>

      <h3>Build Optimization</h3>
      <div class="code-block">
        <pre>// next.config.js
module.exports = {
  // Enable experimental features
  experimental: {
    // Optimize packages for faster builds
    optimizePackageImports: ['@iconify/react', 'lodash'],
  },

  // Reduce bundle size
  modularizeImports: {
    'lodash': {
      transform: 'lodash/{{member}}',
    },
  },
};

# Check build output
# Vercel shows bundle analysis in deployment logs
# Look for large chunks and optimize</pre>
      </div>

      <h3>Edge and Serverless Functions</h3>
      <div class="code-block">
        <pre>// API routes run as Serverless Functions
// app/api/hello/route.ts runs on Node.js runtime

// Force Edge Runtime for faster cold starts
export const runtime = 'edge';

export async function GET() {
  return Response.json({ hello: 'world' });
}

// Middleware always runs on Edge
// middleware.ts

// Function configuration
export const config = {
  maxDuration: 60, // Max execution time in seconds
};</pre>
      </div>

      <h3>Caching and ISR</h3>
      <div class="code-block">
        <pre>// Static pages are cached on Vercel's CDN
// ISR pages revalidate as configured

// app/products/page.tsx
export const revalidate = 3600; // Revalidate every hour

// On-demand revalidation
// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  const { path } = await request.json();
  revalidatePath(path);
  return Response.json({ revalidated: true });
}

// Trigger via webhook when CMS updates</pre>
      </div>

      <h3>Analytics and Monitoring</h3>
      <div class="code-block">
        <pre>// Enable Vercel Analytics
// 1. Dashboard &gt; Analytics &gt; Enable

// Add to your app
npm install @vercel/analytics

// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    &lt;html&gt;
      &lt;body&gt;
        {children}
        &lt;Analytics /&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  );
}

// Web Vitals tracking (built-in)
// Speed Insights shows: LCP, FID, CLS, TTFB</pre>
      </div>

      <h3>Database Connections</h3>
      <div class="code-block">
        <pre>// Vercel offers integrations:
// - Vercel Postgres
// - Vercel KV (Redis)
// - Vercel Blob Storage

// Or connect external databases:
// Supabase, PlanetScale, Neon, etc.

// Connection pooling for serverless:
// Use Prisma with Data Proxy
// Or use connection string with ?pgbouncer=true

// Vercel Postgres example
import { sql } from '@vercel/postgres';

export async function GET() {
  const { rows } = await sql\`SELECT * FROM users\`;
  return Response.json(rows);
}</pre>
      </div>

      <h3>Troubleshooting Deployments</h3>
      <div class="code-block">
        <pre># Common issues:

# 1. Build fails
# - Check build logs in dashboard
# - Ensure dependencies are in package.json
# - Check Node.js version (set in package.json engines)

# 2. Environment variables missing
# - Verify they're set for the right scope
# - Rebuild after adding new variables

# 3. Function timeouts
# - Default: 10s (Hobby), 60s (Pro)
# - Optimize slow queries
# - Use streaming for long responses

# 4. 404 on routes
# - Check output in .next/server
# - Verify dynamic routes are generated

# Debug locally:
vercel dev          # Run with Vercel features
vercel build        # Test production build
vercel deploy       # Deploy preview</pre>
      </div>
    `,
    questions: [
      {
        id: "78-1",
        type: "mcq",
        question: "What happens when you push to a non-main branch on Vercel?",
        options: [
          "Nothing, only main deploys",
          "It creates a preview deployment with a unique URL",
          "It updates the production site",
          "It fails with an error"
        ],
        correctAnswer: "It creates a preview deployment with a unique URL",
        explanation: "Vercel creates preview deployments for every push to non-production branches. Each gets a unique URL for testing and review."
      },
      {
        id: "78-2",
        type: "mcq",
        question: "How do you make an API route run on the Edge runtime?",
        options: [
          "Add edge: true to config",
          "Export const runtime = 'edge'",
          "Use a different file extension",
          "Deploy to a specific region"
        ],
        correctAnswer: "Export const runtime = 'edge'",
        explanation: "Export runtime = 'edge' from your route file to run on the Edge runtime, which provides faster cold starts and runs closer to users."
      },
      {
        id: "78-3",
        type: "mcq",
        question: "Where do you set environment variables for Vercel deployments?",
        options: [
          "Only in .env.local",
          "In vercel.json",
          "In the Vercel Dashboard under Settings > Environment Variables",
          "In next.config.js"
        ],
        correctAnswer: "In the Vercel Dashboard under Settings > Environment Variables",
        explanation: "Set environment variables in the Vercel Dashboard. You can specify which environments (production, preview, development) should have access."
      },
      {
        id: "78-4",
        type: "descriptive",
        question: "Explain the difference between preview and production deployments on Vercel.",
        keywords: ["branch", "main", "URL", "preview", "production", "domain", "environment"],
        explanation: "Production deployments occur on the main/master branch and serve your custom domain. Preview deployments occur on other branches and get unique URLs. Each can have different environment variable scopes. Preview URLs allow testing before merging to production."
      }
    ]
  }
];

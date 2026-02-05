import { Lesson } from '@/types/lesson';

export const month6Lessons: Lesson[] = [
  {
    id: 52,
    title: "Testing Fundamentals",
    description: "Learn the basics of software testing and test-driven development",
    duration: "45 min",
    difficulty: "Intermediate",
    month: 6,
    week: 1,
    category: "Testing",
    content: `
      <h2>Testing Fundamentals</h2>
      <p>Testing is crucial for building reliable software. Learn the types of tests and testing strategies.</p>

      <h3>Why Test?</h3>
      <p>Tests catch bugs early, enable confident refactoring, serve as documentation, and improve code quality.</p>

      <h3>Types of Tests</h3>
      <div class="code-block">
        <pre>// Unit Tests - Test individual functions/components
function add(a, b) { return a + b; }
test('add returns sum', () => {
  expect(add(2, 3)).toBe(5);
});

// Integration Tests - Test how parts work together
test('user can login', async () => {
  const response = await login('user', 'pass');
  expect(response.success).toBe(true);
});

// E2E Tests - Test complete user flows
test('checkout flow', async () => {
  await page.click('Add to Cart');
  await page.click('Checkout');
  expect(page).toHaveURL('/confirmation');
});</pre>
      </div>

      <h3>Testing Pyramid</h3>
      <p>Many unit tests (fast, cheap), fewer integration tests, fewest E2E tests (slow, expensive).</p>
    `,
    questions: [
      {
        id: "52-1",
        type: "mcq",
        question: "What is the main purpose of unit tests?",
        options: [
          "Test the entire application",
          "Test individual functions or components in isolation",
          "Test user interface",
          "Test database queries"
        ],
        correctAnswer: "Test individual functions or components in isolation",
        explanation: "Unit tests focus on testing the smallest testable parts of an application - individual functions, methods, or components - in isolation from the rest of the system."
      },
      {
        id: "52-2",
        type: "descriptive",
        question: "Explain the testing pyramid and why it's structured that way.",
        keywords: ["unit", "integration", "e2e", "fast", "slow", "cheap", "expensive", "pyramid"],
        explanation: "The testing pyramid suggests having many unit tests (fast/cheap), fewer integration tests, and fewest E2E tests (slow/expensive). This structure optimizes for quick feedback while still covering all layers."
      }
    ]
  },
  {
    id: 53,
    title: "Testing React with Jest",
    description: "Master React component testing with Jest and React Testing Library",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 6,
    week: 1,
    category: "Testing",
    content: `
      <h2>Testing React Components</h2>
      <p>Use Jest and React Testing Library for reliable component tests.</p>

      <h3>Setup</h3>
      <div class="code-block">
        <pre>npm install -D jest @testing-library/react @testing-library/jest-dom</pre>
      </div>

      <h3>Basic Component Test</h3>
      <div class="code-block">
        <pre>import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments counter on click', () => {
  render(&lt;Counter /&gt;);

  const button = screen.getByRole('button', { name: /increment/i });
  const count = screen.getByText('0');

  fireEvent.click(button);

  expect(screen.getByText('1')).toBeInTheDocument();
});</pre>
      </div>

      <h3>Testing Async Behavior</h3>
      <div class="code-block">
        <pre>import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';

test('loads and displays user', async () => {
  render(&lt;UserProfile userId="1" /&gt;);

  expect(screen.getByText('Loading...')).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});</pre>
      </div>
    `,
    questions: [
      {
        id: "53-1",
        type: "mcq",
        question: "What is the role of React Testing Library?",
        options: [
          "Style components",
          "Test components as users would interact with them",
          "Bundle React apps",
          "Manage state"
        ],
        correctAnswer: "Test components as users would interact with them",
        explanation: "React Testing Library encourages testing components the way users interact with them - finding elements by role, text, or labels rather than implementation details."
      }
    ]
  },
  {
    id: 54,
    title: "API & Integration Testing",
    description: "Test your APIs and backend services effectively",
    duration: "50 min",
    difficulty: "Advanced",
    month: 6,
    week: 1,
    category: "Testing",
    content: `
      <h2>API Testing</h2>
      <p>Ensure your APIs work correctly with integration tests.</p>

      <h3>Testing with Supertest</h3>
      <div class="code-block">
        <pre>import request from 'supertest';
import app from './app';

describe('GET /api/users', () => {
  it('returns users list', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toHaveLength(3);
  });
});</pre>
      </div>
    `,
    questions: [
      {
        id: "54-1",
        type: "mcq",
        question: "What does supertest help with?",
        options: [
          "Testing browser UI",
          "Making HTTP requests to test APIs",
          "Database migrations",
          "CSS styling"
        ],
        correctAnswer: "Making HTTP requests to test APIs",
        explanation: "Supertest is a library for testing HTTP servers by making requests and asserting responses."
      }
    ]
  },
  {
    id: 55,
    title: "Git Essentials",
    description: "Master version control with Git fundamentals",
    duration: "50 min",
    difficulty: "Beginner",
    month: 6,
    week: 2,
    category: "DevOps",
    content: `
      <h2>Git Basics</h2>
      <p>Git is essential for tracking changes and collaborating on code.</p>

      <h3>Essential Commands</h3>
      <div class="code-block">
        <pre># Initialize repo
git init

# Stage and commit
git add .
git commit -m "Initial commit"

# Branching
git branch feature
git checkout feature
# or: git checkout -b feature

# Merging
git checkout main
git merge feature</pre>
      </div>
    `,
    questions: [
      {
        id: "55-1",
        type: "mcq",
        question: "What does 'git add .' do?",
        options: [
          "Commits all files",
          "Stages all changes for commit",
          "Creates a new branch",
          "Pushes to remote"
        ],
        correctAnswer: "Stages all changes for commit",
        explanation: "git add . stages all changes in the current directory for the next commit."
      }
    ]
  },
  {
    id: 56,
    title: "GitHub & Collaboration",
    description: "Learn collaborative development workflows with GitHub",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 6,
    week: 2,
    category: "DevOps",
    content: `
      <h2>GitHub Workflows</h2>
      <p>GitHub enables team collaboration through pull requests and code reviews.</p>

      <h3>Pull Request Workflow</h3>
      <div class="code-block">
        <pre># Create feature branch
git checkout -b feature/new-feature

# Make changes and push
git add .
git commit -m "Add new feature"
git push origin feature/new-feature

# Open PR on GitHub, get reviews, merge</pre>
      </div>
    `,
    questions: [
      {
        id: "56-1",
        type: "mcq",
        question: "What is the purpose of a pull request?",
        options: [
          "Download code",
          "Propose changes for review before merging",
          "Delete branches",
          "Create issues"
        ],
        correctAnswer: "Propose changes for review before merging",
        explanation: "Pull requests let you propose changes and get feedback before merging into main."
      }
    ]
  },
  {
    id: 57,
    title: "Deploying to Vercel",
    description: "Deploy Next.js applications to Vercel",
    duration: "45 min",
    difficulty: "Intermediate",
    month: 6,
    week: 2,
    category: "DevOps",
    content: `
      <h2>Vercel Deployment</h2>
      <p>Vercel provides seamless deployment for Next.js apps.</p>

      <h3>Deployment Steps</h3>
      <ol>
        <li>Push code to GitHub</li>
        <li>Connect repository to Vercel</li>
        <li>Configure environment variables</li>
        <li>Deploy automatically on push</li>
      </ol>
    `,
    questions: [
      {
        id: "57-1",
        type: "mcq",
        question: "What triggers automatic deployments on Vercel?",
        options: [
          "Manual button click",
          "Push to connected Git branch",
          "Scheduled timer",
          "Email notification"
        ],
        correctAnswer: "Push to connected Git branch",
        explanation: "Vercel automatically deploys when you push to connected Git branches."
      }
    ]
  },
  {
    id: 58,
    title: "CI/CD Pipelines",
    description: "Automate testing and deployment with CI/CD",
    duration: "55 min",
    difficulty: "Advanced",
    month: 6,
    week: 2,
    category: "DevOps",
    content: `
      <h2>CI/CD with GitHub Actions</h2>
      <p>Automate your development workflow.</p>

      <h3>Basic Workflow</h3>
      <div class="code-block">
        <pre>name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm test</pre>
      </div>
    `,
    questions: [
      {
        id: "58-1",
        type: "mcq",
        question: "What is Continuous Integration (CI)?",
        options: [
          "Deploying once a year",
          "Automatically testing code on every change",
          "Manual code review",
          "Writing documentation"
        ],
        correctAnswer: "Automatically testing code on every change",
        explanation: "CI automatically runs tests when code changes to catch issues early."
      }
    ]
  },
  {
    id: 59,
    title: "Monitoring & Error Tracking",
    description: "Monitor your production applications",
    duration: "50 min",
    difficulty: "Advanced",
    month: 6,
    week: 3,
    category: "DevOps",
    content: `
      <h2>Production Monitoring</h2>
      <p>Track errors and performance in production.</p>

      <h3>Error Tracking with Sentry</h3>
      <div class="code-block">
        <pre>import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});</pre>
      </div>
    `,
    questions: [
      {
        id: "59-1",
        type: "mcq",
        question: "Why is error tracking important?",
        options: [
          "To make code run faster",
          "To catch and fix production errors users encounter",
          "To reduce bundle size",
          "To style components"
        ],
        correctAnswer: "To catch and fix production errors users encounter",
        explanation: "Error tracking helps you identify and fix issues that real users encounter."
      }
    ]
  },
  {
    id: 60,
    title: "Building a Portfolio Project",
    description: "Create a showcase project for your portfolio",
    duration: "60 min",
    difficulty: "Intermediate",
    month: 6,
    week: 3,
    category: "Best Practices",
    content: `
      <h2>Portfolio Project Guide</h2>
      <p>Build a project that demonstrates your skills.</p>

      <h3>Key Elements</h3>
      <ul>
        <li>Clean code and architecture</li>
        <li>Good documentation (README)</li>
        <li>Responsive design</li>
        <li>Proper error handling</li>
        <li>Tests</li>
      </ul>
    `,
    questions: [
      {
        id: "60-1",
        type: "descriptive",
        question: "What makes a good portfolio project?",
        keywords: ["clean", "code", "documentation", "readme", "tests", "responsive", "deployed"],
        explanation: "Good portfolio projects have clean code, documentation, tests, responsive design, and are deployed publicly."
      }
    ]
  },
  {
    id: 61,
    title: "Code Quality & Best Practices",
    description: "Write maintainable, high-quality code",
    duration: "45 min",
    difficulty: "Intermediate",
    month: 6,
    week: 3,
    category: "Best Practices",
    content: `
      <h2>Code Quality</h2>
      <p>Best practices for maintainable code.</p>

      <h3>ESLint & Prettier</h3>
      <div class="code-block">
        <pre>npm install -D eslint prettier
npx eslint --init</pre>
      </div>

      <h3>Principles</h3>
      <ul>
        <li>DRY - Don't Repeat Yourself</li>
        <li>KISS - Keep It Simple</li>
        <li>Single Responsibility</li>
      </ul>
    `,
    questions: [
      {
        id: "61-1",
        type: "mcq",
        question: "What does DRY stand for?",
        options: [
          "Do Repeat Yourself",
          "Don't Repeat Yourself",
          "Delete Repeated Yields",
          "Document Regular YAML"
        ],
        correctAnswer: "Don't Repeat Yourself",
        explanation: "DRY means avoiding code duplication by abstracting repeated logic."
      }
    ]
  },
  {
    id: 62,
    title: "Web Performance Optimization",
    description: "Optimize your web applications for speed",
    duration: "55 min",
    difficulty: "Advanced",
    month: 6,
    week: 3,
    category: "Best Practices",
    content: `
      <h2>Performance Optimization</h2>
      <p>Make your apps fast and efficient.</p>

      <h3>Key Metrics</h3>
      <ul>
        <li>LCP - Largest Contentful Paint</li>
        <li>FID - First Input Delay</li>
        <li>CLS - Cumulative Layout Shift</li>
      </ul>

      <h3>Optimization Techniques</h3>
      <ul>
        <li>Code splitting</li>
        <li>Image optimization</li>
        <li>Lazy loading</li>
        <li>Caching</li>
      </ul>
    `,
    questions: [
      {
        id: "62-1",
        type: "mcq",
        question: "What does LCP measure?",
        options: [
          "Time to first byte",
          "Time to render the largest content element",
          "JavaScript execution time",
          "Network latency"
        ],
        correctAnswer: "Time to render the largest content element",
        explanation: "LCP measures when the largest content element becomes visible."
      }
    ]
  },
  {
    id: 63,
    title: "Security Best Practices",
    description: "Secure your web applications",
    duration: "50 min",
    difficulty: "Advanced",
    month: 6,
    week: 4,
    category: "Best Practices",
    content: `
      <h2>Web Security</h2>
      <p>Protect your apps from common vulnerabilities.</p>

      <h3>OWASP Top 10</h3>
      <ul>
        <li>Injection (SQL, XSS)</li>
        <li>Broken Authentication</li>
        <li>Sensitive Data Exposure</li>
        <li>Security Misconfiguration</li>
      </ul>

      <h3>Prevention</h3>
      <div class="code-block">
        <pre>// Sanitize user input
const sanitized = DOMPurify.sanitize(userInput);

// Use parameterized queries
const result = await db.query(
  'SELECT * FROM users WHERE id = $1',
  [userId]
);</pre>
      </div>
    `,
    questions: [
      {
        id: "63-1",
        type: "mcq",
        question: "How do you prevent SQL injection?",
        options: [
          "Use string concatenation",
          "Use parameterized queries",
          "Disable the database",
          "Use inline styles"
        ],
        correctAnswer: "Use parameterized queries",
        explanation: "Parameterized queries prevent SQL injection by separating code from data."
      }
    ]
  },
  {
    id: 64,
    title: "Interview Preparation",
    description: "Prepare for technical interviews",
    duration: "60 min",
    difficulty: "Intermediate",
    month: 6,
    week: 4,
    category: "Best Practices",
    content: `
      <h2>Interview Prep</h2>
      <p>Common topics and strategies for technical interviews.</p>

      <h3>Key Topics</h3>
      <ul>
        <li>Data structures & algorithms</li>
        <li>System design basics</li>
        <li>JavaScript fundamentals</li>
        <li>React concepts</li>
        <li>Behavioral questions</li>
      </ul>

      <h3>Practice Strategy</h3>
      <ul>
        <li>LeetCode for algorithms</li>
        <li>Build projects</li>
        <li>Mock interviews</li>
        <li>Explain your thought process</li>
      </ul>
    `,
    questions: [
      {
        id: "64-1",
        type: "descriptive",
        question: "How should you prepare for a technical interview?",
        keywords: ["practice", "algorithms", "projects", "mock", "explain", "study"],
        explanation: "Practice algorithms, build projects, do mock interviews, and learn to explain your thinking clearly."
      }
    ]
  },
  {
    id: 65,
    title: "Building Full-Stack Projects",
    description: "Apply everything you've learned in a capstone project",
    duration: "60 min",
    difficulty: "Advanced",
    month: 6,
    week: 4,
    category: "Best Practices",
    content: `
      <h2>Capstone Project</h2>
      <p>Bring together all your skills in a full-stack application.</p>

      <h3>Project Structure</h3>
      <ul>
        <li>Next.js frontend with React</li>
        <li>API routes or separate backend</li>
        <li>Database with Supabase/PostgreSQL</li>
        <li>Authentication</li>
        <li>Deployment on Vercel</li>
      </ul>

      <h3>Checklist</h3>
      <ul>
        <li>Responsive design</li>
        <li>Error handling</li>
        <li>Loading states</li>
        <li>Tests</li>
        <li>Documentation</li>
      </ul>

      <p>Congratulations on completing the LearnFS curriculum! You now have the skills to build production-ready full-stack applications.</p>
    `,
    questions: [
      {
        id: "65-1",
        type: "descriptive",
        question: "What are the key components of a full-stack application?",
        keywords: ["frontend", "backend", "database", "authentication", "API", "deployment"],
        explanation: "A full-stack app includes a frontend (React/Next.js), backend (API routes/Express), database, authentication, and deployment infrastructure."
      }
    ]
  }
];

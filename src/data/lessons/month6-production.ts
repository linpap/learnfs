import { Lesson } from '@/types/lesson';

export const month6Lessons: Lesson[] = [
  {
    id: 52,
    title: "Testing Fundamentals",
    description: "Learn the principles of software testing and why testing matters",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 6,
    week: 21,
    category: "Testing",
    content: `
      <h2>Why Testing Matters</h2>
      <p>Testing is essential for building reliable software. It catches bugs early, enables confident refactoring, and serves as documentation for how code should behave.</p>

      <h3>Types of Tests</h3>
      <ul>
        <li><strong>Unit Tests</strong> - Test individual functions or components in isolation</li>
        <li><strong>Integration Tests</strong> - Test how multiple units work together</li>
        <li><strong>End-to-End (E2E) Tests</strong> - Test complete user workflows</li>
        <li><strong>Snapshot Tests</strong> - Capture output and compare against future runs</li>
      </ul>

      <h3>The Testing Pyramid</h3>
      <p>A healthy test suite follows the testing pyramid:</p>
      <ol>
        <li><strong>Base (Many):</strong> Unit tests - fast, isolated, numerous</li>
        <li><strong>Middle (Some):</strong> Integration tests - test component interactions</li>
        <li><strong>Top (Few):</strong> E2E tests - slow but comprehensive</li>
      </ol>

      <h3>Test-Driven Development (TDD)</h3>
      <p>TDD follows a simple cycle:</p>
      <ol>
        <li><strong>Red:</strong> Write a failing test first</li>
        <li><strong>Green:</strong> Write minimal code to pass the test</li>
        <li><strong>Refactor:</strong> Improve the code while keeping tests green</li>
      </ol>

      <h3>Writing Good Tests</h3>
      <div class="code-block">
        <pre>// Good test structure: Arrange, Act, Assert
describe('Calculator', () => {
  test('adds two numbers correctly', () => {
    // Arrange
    const a = 5;
    const b = 3;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(8);
  });
});

// Test naming convention
test('should return null when user is not found', () => {
  const result = findUser('nonexistent');
  expect(result).toBeNull();
});

// Testing edge cases
describe('divide', () => {
  test('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });

  test('handles negative numbers', () => {
    expect(divide(-10, 2)).toBe(-5);
  });
});</pre>
      </div>

      <h3>Testing Best Practices</h3>
      <ul>
        <li><strong>Test behavior, not implementation</strong> - Tests should verify what code does, not how it does it</li>
        <li><strong>Keep tests independent</strong> - Each test should run in isolation</li>
        <li><strong>Use descriptive names</strong> - Test names should describe the expected behavior</li>
        <li><strong>Follow DRY carefully</strong> - Some duplication in tests is acceptable for clarity</li>
        <li><strong>Test edge cases</strong> - Empty inputs, null values, boundaries</li>
      </ul>

      <h3>Code Coverage</h3>
      <div class="code-block">
        <pre>// package.json
{
  "scripts": {
    "test": "jest",
    "test:coverage": "jest --coverage"
  }
}

// Coverage metrics:
// - Statements: % of statements executed
// - Branches: % of if/else branches covered
// - Functions: % of functions called
// - Lines: % of lines executed

// Aim for 80%+ coverage, but quality matters more than quantity</pre>
      </div>
    `,
    questions: [
      {
        id: "52-1",
        type: "mcq",
        question: "What is the correct order of the TDD cycle?",
        options: ["Green, Red, Refactor", "Red, Green, Refactor", "Refactor, Red, Green", "Red, Refactor, Green"],
        correctAnswer: "Red, Green, Refactor",
        explanation: "TDD follows Red (write failing test), Green (write code to pass), Refactor (improve code while tests pass). This ensures tests drive development."
      },
      {
        id: "52-2",
        type: "mcq",
        question: "According to the testing pyramid, which type of tests should you have the most of?",
        options: ["E2E tests", "Integration tests", "Unit tests", "Manual tests"],
        correctAnswer: "Unit tests",
        explanation: "The testing pyramid suggests having many unit tests (base), some integration tests (middle), and few E2E tests (top). Unit tests are fast and cheap to run."
      },
      {
        id: "52-3",
        type: "descriptive",
        question: "Explain the difference between unit tests and integration tests.",
        keywords: ["unit", "integration", "isolation", "together", "components", "functions", "dependencies", "mock"],
        explanation: "Unit tests test individual functions or components in isolation, often mocking dependencies. Integration tests verify that multiple units work correctly together, testing the interactions between components."
      },
      {
        id: "52-4",
        type: "mcq",
        question: "What does the 'Arrange, Act, Assert' pattern represent?",
        options: ["Three types of tests", "Test file organization", "Structure of a single test", "Testing frameworks"],
        correctAnswer: "Structure of a single test",
        explanation: "Arrange-Act-Assert is a pattern for structuring individual tests: Arrange sets up test data, Act performs the action being tested, Assert verifies the expected outcome."
      }
    ]
  },
  {
    id: 53,
    title: "Testing React with Jest",
    description: "Learn to test React components using Jest and React Testing Library",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 6,
    week: 21,
    category: "Testing",
    content: `
      <h2>Testing React Applications</h2>
      <p>React Testing Library and Jest provide everything needed to test React components effectively.</p>

      <h3>Setting Up Jest with React</h3>
      <div class="code-block">
        <pre>// Install dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['&lt;rootDir&gt;/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '&lt;rootDir&gt;/src/$1',
  },
};

// jest.setup.js
import '@testing-library/jest-dom';</pre>
      </div>

      <h3>Basic Component Testing</h3>
      <div class="code-block">
        <pre>// Button.tsx
export function Button({ onClick, children }) {
  return (
    &lt;button onClick={onClick} className="btn"&gt;
      {children}
    &lt;/button&gt;
  );
}

// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('renders button with text', () => {
    render(&lt;Button onClick={() =&gt; {}}&gt;Click me&lt;/Button&gt;);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(&lt;Button onClick={handleClick}&gt;Click me&lt;/Button&gt;);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});</pre>
      </div>

      <h3>Testing Library Queries</h3>
      <div class="code-block">
        <pre>// Priority order (most to least preferred):
// 1. Accessible queries (best for testing user experience)
screen.getByRole('button', { name: /submit/i });
screen.getByLabelText('Email');
screen.getByPlaceholderText('Enter email');
screen.getByText('Welcome');

// 2. Semantic queries
screen.getByAltText('Profile picture');
screen.getByTitle('Close');

// 3. Test IDs (last resort)
screen.getByTestId('custom-element');

// Query variants:
// getBy - throws if not found
// queryBy - returns null if not found
// findBy - returns promise, waits for element</pre>
      </div>

      <h3>Testing User Interactions</h3>
      <div class="code-block">
        <pre>import userEvent from '@testing-library/user-event';

test('form submission', async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();

  render(&lt;LoginForm onSubmit={handleSubmit} /&gt;);

  await user.type(screen.getByLabelText('Email'), 'test@example.com');
  await user.type(screen.getByLabelText('Password'), 'password123');
  await user.click(screen.getByRole('button', { name: /submit/i }));

  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123',
  });
});</pre>
      </div>

      <h3>Testing Async Components</h3>
      <div class="code-block">
        <pre>test('displays user after loading', async () => {
  jest.spyOn(api, 'fetchUser').mockResolvedValue({ name: 'John' });

  render(&lt;UserProfile userId="123" /&gt;);

  // Initially shows loading
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Wait for user to appear
  expect(await screen.findByText('John')).toBeInTheDocument();
});</pre>
      </div>

      <h3>Mocking in Jest</h3>
      <div class="code-block">
        <pre>// Mock a module
jest.mock('./api', () => ({
  fetchUser: jest.fn(),
}));

// Mock implementation
fetchUser.mockResolvedValue({ id: 1, name: 'Test' });

// Spy on existing function
const consoleSpy = jest.spyOn(console, 'log');
expect(consoleSpy).toHaveBeenCalledWith('expected message');</pre>
      </div>
    `,
    questions: [
      {
        id: "53-1",
        type: "mcq",
        question: "Which query should you prefer when testing React components?",
        options: ["getByTestId", "getByClassName", "getByRole", "querySelector"],
        correctAnswer: "getByRole",
        explanation: "getByRole queries elements by their accessible role, which tests your app the way users interact with it and encourages accessible markup."
      },
      {
        id: "53-2",
        type: "mcq",
        question: "What is the difference between getBy and findBy queries?",
        options: ["getBy is newer", "findBy returns a promise and waits for the element", "They are identical", "getBy is for forms only"],
        correctAnswer: "findBy returns a promise and waits for the element",
        explanation: "findBy queries return a promise and will wait for the element to appear. Use them for testing async operations where elements appear after data loads."
      },
      {
        id: "53-3",
        type: "descriptive",
        question: "How would you test a component that makes an API call on mount?",
        keywords: ["mock", "jest.mock", "mockResolvedValue", "findBy", "async", "await", "loading", "state"],
        explanation: "Mock the API module with jest.mock(), set up the mock to return test data with mockResolvedValue(), render the component, verify loading state, then use findBy queries to wait for and verify the loaded content."
      },
      {
        id: "53-4",
        type: "mcq",
        question: "What does jest.fn() create?",
        options: ["A real function", "A mock function that tracks calls", "A test file", "An error handler"],
        correctAnswer: "A mock function that tracks calls",
        explanation: "jest.fn() creates a mock function that tracks how many times it was called, with what arguments, and what it returned. Essential for testing callbacks and event handlers."
      }
    ]
  },
  {
    id: 54,
    title: "API & Integration Testing",
    description: "Test API endpoints and component integration",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 6,
    week: 21,
    category: "Testing",
    content: `
      <h2>API Testing</h2>
      <p>Testing APIs ensures your backend endpoints work correctly and return expected responses.</p>

      <h3>Testing API Routes with Supertest</h3>
      <div class="code-block">
        <pre>// Install
npm install --save-dev supertest

// api/users.test.ts
import request from 'supertest';
import app from '../app';

describe('GET /api/users', () => {
  test('returns list of users', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toHaveLength(3);
    expect(response.body[0]).toHaveProperty('name');
  });

  test('returns 401 without authentication', async () => {
    const response = await request(app)
      .get('/api/users/protected')
      .expect(401);

    expect(response.body.error).toBe('Unauthorized');
  });
});

describe('POST /api/users', () => {
  test('creates a new user', async () => {
    const newUser = { name: 'John', email: 'john@test.com' };

    const response = await request(app)
      .post('/api/users')
      .send(newUser)
      .expect(201);

    expect(response.body.name).toBe('John');
    expect(response.body.id).toBeDefined();
  });
});</pre>
      </div>

      <h3>Testing Next.js API Routes</h3>
      <div class="code-block">
        <pre>// __tests__/api/hello.test.ts
import { createMocks } from 'node-mocks-http';
import handler from '@/pages/api/hello';

describe('/api/hello', () => {
  test('returns hello message', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ message: 'Hello' });
  });
});</pre>
      </div>

      <h3>Mocking External APIs with MSW</h3>
      <div class="code-block">
        <pre>// Using MSW (Mock Service Worker)
npm install --save-dev msw

// mocks/handlers.ts
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
      ])
    );
  }),
];

// mocks/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);

// jest.setup.js
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());</pre>
      </div>

      <h3>Database Testing</h3>
      <div class="code-block">
        <pre>describe('User Repository', () => {
  beforeAll(async () => {
    await db.connect(process.env.TEST_DATABASE_URL);
  });

  beforeEach(async () => {
    await db.query('DELETE FROM users');
  });

  afterAll(async () => {
    await db.disconnect();
  });

  test('creates user in database', async () => {
    const user = await createUser({ name: 'Test', email: 'test@test.com' });

    expect(user.id).toBeDefined();

    const found = await findUserById(user.id);
    expect(found.name).toBe('Test');
  });
});</pre>
      </div>
    `,
    questions: [
      {
        id: "54-1",
        type: "mcq",
        question: "What is MSW (Mock Service Worker) used for?",
        options: ["Styling components", "Mocking API requests at the network level", "Managing state", "Running tests in parallel"],
        correctAnswer: "Mocking API requests at the network level",
        explanation: "MSW intercepts requests at the network level, allowing you to mock API responses without changing your application code."
      },
      {
        id: "54-2",
        type: "mcq",
        question: "Why should you use a separate test database?",
        options: ["It's faster", "To avoid affecting production data", "Tests require specific database versions", "It's required by Jest"],
        correctAnswer: "To avoid affecting production data",
        explanation: "A separate test database ensures tests don't modify production data, allows tests to run independently, and lets you reset the database between tests."
      },
      {
        id: "54-3",
        type: "descriptive",
        question: "Explain how to test error handling in API calls.",
        keywords: ["mock", "error", "status", "500", "catch", "display", "message", "handler"],
        explanation: "Mock the API to return an error status (e.g., 500), render the component, then verify the error message is displayed. With MSW, use server.use() to override handlers for specific tests."
      }
    ]
  },
  {
    id: 55,
    title: "Git Essentials",
    description: "Master version control with Git fundamentals",
    duration: "45 min",
    difficulty: "Beginner",
    month: 6,
    week: 22,
    category: "DevOps",
    content: `
      <h2>Introduction to Git</h2>
      <p>Git is a distributed version control system that tracks changes in your code and enables collaboration.</p>

      <h3>Git Configuration</h3>
      <div class="code-block">
        <pre># Set your identity
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Set default branch name
git config --global init.defaultBranch main

# View configuration
git config --list</pre>
      </div>

      <h3>Basic Git Workflow</h3>
      <div class="code-block">
        <pre># Initialize repository
git init

# Clone existing repository
git clone https://github.com/user/repo.git

# Check status
git status

# Stage changes
git add filename.js       # Stage specific file
git add .                 # Stage all changes

# Commit changes
git commit -m "Add new feature"

# View commit history
git log --oneline</pre>
      </div>

      <h3>Understanding Git States</h3>
      <ul>
        <li><strong>Working Directory</strong> - Your actual files</li>
        <li><strong>Staging Area</strong> - Changes ready to commit</li>
        <li><strong>Repository</strong> - Committed history</li>
      </ul>

      <h3>Branching</h3>
      <div class="code-block">
        <pre># List branches
git branch

# Create branch
git branch feature-name

# Switch branch
git checkout feature-name
git switch feature-name   # Modern alternative

# Create and switch
git checkout -b feature-name

# Delete branch
git branch -d feature-name</pre>
      </div>

      <h3>Merging</h3>
      <div class="code-block">
        <pre># Merge branch into current branch
git checkout main
git merge feature-name

# Abort merge if conflicts
git merge --abort</pre>
      </div>

      <h3>Undoing Changes</h3>
      <div class="code-block">
        <pre># Discard working directory changes
git restore filename.js

# Unstage changes
git restore --staged filename.js

# Amend last commit
git commit --amend -m "New message"

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Revert a commit (creates new commit)
git revert abc123</pre>
      </div>

      <h3>Stashing</h3>
      <div class="code-block">
        <pre># Save changes temporarily
git stash

# List stashes
git stash list

# Apply most recent stash
git stash pop

# Apply specific stash
git stash apply stash@{1}</pre>
      </div>

      <h3>.gitignore</h3>
      <div class="code-block">
        <pre># .gitignore
node_modules/
.env
.env.local
*.log
.DS_Store
dist/
.next/</pre>
      </div>
    `,
    questions: [
      {
        id: "55-1",
        type: "mcq",
        question: "What is the staging area in Git?",
        options: ["The remote server", "A place to prepare changes before committing", "The main branch", "A backup location"],
        correctAnswer: "A place to prepare changes before committing",
        explanation: "The staging area is where you prepare changes before committing. It allows you to selectively choose which changes to include in the next commit."
      },
      {
        id: "55-2",
        type: "mcq",
        question: "How do you create and switch to a new branch in one command?",
        options: ["git branch new-branch", "git checkout -b new-branch", "git create new-branch", "git new-branch"],
        correctAnswer: "git checkout -b new-branch",
        explanation: "git checkout -b creates a new branch and switches to it in one command. The modern alternative is git switch -c new-branch."
      },
      {
        id: "55-3",
        type: "descriptive",
        question: "Explain the difference between git reset and git revert.",
        keywords: ["reset", "revert", "history", "commit", "undo", "new commit", "rewrite", "safe"],
        explanation: "git reset moves the branch pointer back, effectively removing commits (can rewrite history). git revert creates a new commit that undoes changes, preserving history. Use revert for shared branches."
      },
      {
        id: "55-4",
        type: "mcq",
        question: "What does git stash do?",
        options: ["Deletes all changes", "Temporarily saves uncommitted changes", "Creates a new branch", "Merges branches"],
        correctAnswer: "Temporarily saves uncommitted changes",
        explanation: "git stash temporarily saves your uncommitted changes, allowing you to switch branches or pull updates. You can later restore the changes with git stash pop."
      }
    ]
  },
  {
    id: 56,
    title: "GitHub & Collaboration",
    description: "Learn to collaborate effectively using GitHub",
    duration: "50 min",
    difficulty: "Beginner",
    month: 6,
    week: 22,
    category: "DevOps",
    content: `
      <h2>Working with GitHub</h2>
      <p>GitHub is a platform for hosting Git repositories and collaborating with others.</p>

      <h3>Remote Repositories</h3>
      <div class="code-block">
        <pre># Add remote
git remote add origin https://github.com/user/repo.git

# View remotes
git remote -v

# Push to remote
git push origin main

# Push and set upstream
git push -u origin main

# Pull from remote
git pull origin main

# Fetch without merging
git fetch origin</pre>
      </div>

      <h3>Pull Request Workflow</h3>
      <ol>
        <li>Create a feature branch</li>
        <li>Make changes and commit</li>
        <li>Push branch to GitHub</li>
        <li>Open a Pull Request</li>
        <li>Request code review</li>
        <li>Address feedback</li>
        <li>Merge when approved</li>
      </ol>

      <div class="code-block">
        <pre># Feature branch workflow
git checkout -b feature/add-login
# ... make changes ...
git add .
git commit -m "Add login functionality"
git push -u origin feature/add-login
# Then open PR on GitHub</pre>
      </div>

      <h3>Code Review Best Practices</h3>
      <ul>
        <li><strong>Review promptly</strong> - Don't block teammates</li>
        <li><strong>Be constructive</strong> - Suggest improvements, not just criticisms</li>
        <li><strong>Check for:</strong> Logic errors, security issues, code style, test coverage</li>
        <li><strong>Use suggestions</strong> - GitHub allows inline code suggestions</li>
      </ul>

      <h3>Rebasing</h3>
      <div class="code-block">
        <pre># Rebase feature branch on main
git checkout feature-branch
git rebase main

# Interactive rebase (squash commits)
git rebase -i HEAD~3

# After rebasing, force push
git push --force-with-lease</pre>
      </div>

      <h3>Conventional Commits</h3>
      <div class="code-block">
        <pre># Format: type(scope): description

feat: add user authentication
fix: resolve login redirect issue
docs: update API documentation
style: format code with prettier
refactor: simplify user service
test: add unit tests for auth
chore: update dependencies

# Breaking changes
feat!: remove deprecated API</pre>
      </div>
    `,
    questions: [
      {
        id: "56-1",
        type: "mcq",
        question: "What is the purpose of a Pull Request?",
        options: ["To download code", "To propose and review changes before merging", "To delete a branch", "To create a backup"],
        correctAnswer: "To propose and review changes before merging",
        explanation: "Pull Requests allow you to propose changes, get code reviews, discuss modifications, and merge changes into the main branch in a controlled way."
      },
      {
        id: "56-2",
        type: "mcq",
        question: "What does git rebase do?",
        options: ["Creates a backup", "Moves commits to a new base", "Deletes old commits", "Merges branches"],
        correctAnswer: "Moves commits to a new base",
        explanation: "Rebase replays your commits on top of another branch, creating a linear history. It's useful for keeping feature branches up to date with main."
      },
      {
        id: "56-3",
        type: "descriptive",
        question: "Describe the GitHub Flow workflow and its benefits.",
        keywords: ["main", "branch", "feature", "pull request", "review", "merge", "deploy", "simple"],
        explanation: "GitHub Flow: branch from main, make changes, open PR, get review, merge to main. Benefits: simple, main is always deployable, encourages small frequent changes, built-in code review."
      }
    ]
  },
  {
    id: 57,
    title: "Deploying to Vercel",
    description: "Deploy your Next.js applications to Vercel",
    duration: "45 min",
    difficulty: "Beginner",
    month: 6,
    week: 22,
    category: "DevOps",
    content: `
      <h2>Deploying to Vercel</h2>
      <p>Vercel is the platform built by the creators of Next.js, offering seamless deployment for frontend applications.</p>

      <h3>Why Vercel?</h3>
      <ul>
        <li><strong>Zero configuration</strong> - Works out of the box with Next.js</li>
        <li><strong>Automatic deployments</strong> - Deploy on every push</li>
        <li><strong>Preview deployments</strong> - Every PR gets a unique URL</li>
        <li><strong>Edge network</strong> - Global CDN for fast loading</li>
        <li><strong>Serverless functions</strong> - API routes scale automatically</li>
      </ul>

      <h3>Deploying via GitHub</h3>
      <ol>
        <li>Push your code to GitHub</li>
        <li>Go to vercel.com and sign in with GitHub</li>
        <li>Click "Import Project"</li>
        <li>Select your repository</li>
        <li>Configure settings (usually defaults work)</li>
        <li>Click "Deploy"</li>
      </ol>

      <h3>Deploying via CLI</h3>
      <div class="code-block">
        <pre># Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod</pre>
      </div>

      <h3>Environment Variables</h3>
      <div class="code-block">
        <pre># In Vercel Dashboard:
# Project Settings > Environment Variables

# Types:
# - Production: only production deployment
# - Preview: only preview deployments
# - Development: for local development

# Access in code
const apiKey = process.env.API_KEY;

# Client-side (prefix with NEXT_PUBLIC_)
const publicKey = process.env.NEXT_PUBLIC_STRIPE_KEY;</pre>
      </div>

      <h3>vercel.json Configuration</h3>
      <div class="code-block">
        <pre>{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/old-page",
      "destination": "/new-page",
      "permanent": true
    }
  ]
}</pre>
      </div>

      <h3>Domain Configuration</h3>
      <div class="code-block">
        <pre># Add custom domain in Vercel Dashboard:
# Project Settings > Domains

# DNS Configuration:
# A Record: @ -> 76.76.21.21
# CNAME: www -> cname.vercel-dns.com

# Automatic SSL certificates</pre>
      </div>
    `,
    questions: [
      {
        id: "57-1",
        type: "mcq",
        question: "What is a preview deployment on Vercel?",
        options: ["A local development server", "A deployment created for each pull request", "A staging server", "A backup deployment"],
        correctAnswer: "A deployment created for each pull request",
        explanation: "Vercel creates a unique preview deployment for every pull request, allowing you to test changes before merging to production."
      },
      {
        id: "57-2",
        type: "mcq",
        question: "How do you expose environment variables to the browser in Next.js?",
        options: ["Use process.env directly", "Prefix with NEXT_PUBLIC_", "Add to .env.local only", "Use window.env"],
        correctAnswer: "Prefix with NEXT_PUBLIC_",
        explanation: "Environment variables prefixed with NEXT_PUBLIC_ are exposed to the browser. Without the prefix, they are only available server-side for security."
      },
      {
        id: "57-3",
        type: "descriptive",
        question: "Explain the benefits of using Vercel for Next.js deployment.",
        keywords: ["zero config", "automatic", "preview", "CDN", "serverless", "edge", "fast", "scale"],
        explanation: "Vercel offers zero-config deployment for Next.js, automatic deployments on push, preview URLs for PRs, global CDN, serverless functions that auto-scale, and built-in analytics."
      }
    ]
  },
  {
    id: 58,
    title: "CI/CD Pipelines",
    description: "Automate testing and deployment with continuous integration",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 6,
    week: 23,
    category: "DevOps",
    content: `
      <h2>CI/CD Fundamentals</h2>
      <p>CI/CD automates the process of testing, building, and deploying your applications.</p>

      <h3>What is CI/CD?</h3>
      <ul>
        <li><strong>Continuous Integration (CI)</strong> - Automatically test and build code on every commit</li>
        <li><strong>Continuous Delivery</strong> - Automatically prepare releases for deployment</li>
        <li><strong>Continuous Deployment</strong> - Automatically deploy to production</li>
      </ul>

      <h3>GitHub Actions Basics</h3>
      <div class="code-block">
        <pre># .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build</pre>
      </div>

      <h3>Environment Variables and Secrets</h3>
      <div class="code-block">
        <pre># In workflow file
env:
  NODE_ENV: test

jobs:
  test:
    env:
      DATABASE_URL: \${{ secrets.DATABASE_URL }}

# Add secrets in GitHub:
# Repository Settings > Secrets and variables > Actions</pre>
      </div>

      <h3>Matrix Testing</h3>
      <div class="code-block">
        <pre># Test across multiple versions
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18, 20, 22]

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
      - run: npm ci
      - run: npm test</pre>
      </div>

      <h3>Deployment Workflow</h3>
      <div class="code-block">
        <pre>name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test

  deploy:
    needs: test  # Only run if tests pass
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - uses: actions/checkout@v4
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-args: '--prod'</pre>
      </div>
    `,
    questions: [
      {
        id: "58-1",
        type: "mcq",
        question: "What is the difference between Continuous Delivery and Continuous Deployment?",
        options: ["They are the same", "Delivery requires manual approval, Deployment is automatic", "Delivery is for testing, Deployment is for building", "There is no difference"],
        correctAnswer: "Delivery requires manual approval, Deployment is automatic",
        explanation: "Continuous Delivery prepares code for release but requires manual approval to deploy. Continuous Deployment automatically deploys every change that passes tests."
      },
      {
        id: "58-2",
        type: "mcq",
        question: "What does the 'needs' keyword do in GitHub Actions?",
        options: ["Defines required secrets", "Specifies job dependencies", "Lists required packages", "Defines environment variables"],
        correctAnswer: "Specifies job dependencies",
        explanation: "The 'needs' keyword specifies that a job depends on another job completing successfully. The dependent job waits until the required jobs finish."
      },
      {
        id: "58-3",
        type: "descriptive",
        question: "Explain why caching is important in CI/CD pipelines.",
        keywords: ["cache", "dependencies", "speed", "npm", "node_modules", "time", "bandwidth", "fast"],
        explanation: "Caching stores dependencies between runs, avoiding re-downloading packages. This significantly speeds up pipeline execution, saves bandwidth, and reduces costs."
      },
      {
        id: "58-4",
        type: "mcq",
        question: "What triggers a GitHub Actions workflow with 'on: pull_request'?",
        options: ["When code is pushed to main", "When a PR is opened or updated", "When issues are created", "Manual trigger only"],
        correctAnswer: "When a PR is opened or updated",
        explanation: "The pull_request trigger runs the workflow when a PR is opened, synchronized (new commits pushed), or other specified PR events occur."
      }
    ]
  },
  {
    id: 59,
    title: "Monitoring & Error Tracking",
    description: "Monitor application health and track errors in production",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 6,
    week: 23,
    category: "DevOps",
    content: `
      <h2>Production Monitoring</h2>
      <p>Monitoring helps you understand how your application performs and catch issues before users report them.</p>

      <h3>Types of Monitoring</h3>
      <ul>
        <li><strong>Error Tracking</strong> - Capture and analyze runtime errors</li>
        <li><strong>Performance Monitoring</strong> - Track load times, API response times</li>
        <li><strong>Uptime Monitoring</strong> - Ensure your site is accessible</li>
        <li><strong>Log Management</strong> - Collect and analyze application logs</li>
      </ul>

      <h3>Setting Up Sentry</h3>
      <div class="code-block">
        <pre># Install Sentry
npm install @sentry/nextjs

# Run setup wizard
npx @sentry/wizard@latest -i nextjs

// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});</pre>
      </div>

      <h3>Capturing Errors</h3>
      <div class="code-block">
        <pre>import * as Sentry from '@sentry/nextjs';

// Manual capture
try {
  riskyOperation();
} catch (error) {
  Sentry.captureException(error);
}

// Capture with context
Sentry.captureException(error, {
  tags: { section: 'checkout' },
  extra: { orderId: '123' },
});</pre>
      </div>

      <h3>Error Boundaries in React</h3>
      <div class="code-block">
        <pre>class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error, { extra: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}</pre>
      </div>

      <h3>Performance Monitoring</h3>
      <div class="code-block">
        <pre>// Web Vitals tracking
import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);  // Cumulative Layout Shift
getFID(console.log);  // First Input Delay
getLCP(console.log);  // Largest Contentful Paint

// Vercel Analytics
import { Analytics } from '@vercel/analytics/react';
// Add &lt;Analytics /&gt; to layout</pre>
      </div>

      <h3>Health Check Endpoint</h3>
      <div class="code-block">
        <pre>// app/api/health/route.ts
export async function GET() {
  try {
    await db.query('SELECT 1');
    return Response.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return Response.json(
      { status: 'unhealthy', error: error.message },
      { status: 503 }
    );
  }
}</pre>
      </div>
    `,
    questions: [
      {
        id: "59-1",
        type: "mcq",
        question: "What is the purpose of error boundaries in React?",
        options: ["Style error messages", "Catch JavaScript errors in component tree", "Validate form inputs", "Handle API errors"],
        correctAnswer: "Catch JavaScript errors in component tree",
        explanation: "Error boundaries catch JavaScript errors anywhere in the child component tree, log the error, and display a fallback UI instead of crashing the whole app."
      },
      {
        id: "59-2",
        type: "mcq",
        question: "What does LCP (Largest Contentful Paint) measure?",
        options: ["Time to load all JavaScript", "Time until the largest content element is visible", "Total page size", "Number of API calls"],
        correctAnswer: "Time until the largest content element is visible",
        explanation: "LCP measures when the largest content element becomes visible. It's a key metric for perceived loading performance."
      },
      {
        id: "59-3",
        type: "descriptive",
        question: "Explain why structured logging is better than console.log statements.",
        keywords: ["JSON", "structured", "searchable", "parse", "timestamp", "level", "context", "aggregate"],
        explanation: "Structured logging outputs JSON that can be easily parsed, searched, and aggregated. It includes consistent fields like timestamps and levels, making debugging easier."
      }
    ]
  },
  {
    id: 60,
    title: "Building a Portfolio Project",
    description: "Plan and build a portfolio-worthy full-stack project",
    duration: "60 min",
    difficulty: "Intermediate",
    month: 6,
    week: 23,
    category: "Best Practices",
    content: `
      <h2>Building Portfolio Projects</h2>
      <p>A strong portfolio project demonstrates your skills and helps you stand out to employers.</p>

      <h3>What Makes a Good Portfolio Project?</h3>
      <ul>
        <li><strong>Solves a real problem</strong> - Not just a tutorial clone</li>
        <li><strong>Shows technical depth</strong> - Authentication, database, API integration</li>
        <li><strong>Clean code</strong> - Well-organized, documented, tested</li>
        <li><strong>Polished UI</strong> - Attention to design details</li>
        <li><strong>Deployed and accessible</strong> - Live demo anyone can try</li>
      </ul>

      <h3>Project Ideas</h3>
      <div class="code-block">
        <pre>// Beginner Projects
- Personal blog with CMS
- Task manager with categories
- Weather dashboard

// Intermediate Projects
- E-commerce store with cart
- Project management tool
- Real-time chat application

// Advanced Projects
- SaaS application with subscriptions
- Analytics dashboard
- Collaborative document editor</pre>
      </div>

      <h3>Project Planning</h3>
      <div class="code-block">
        <pre>// 1. Define the MVP
Features for v1:
- User authentication
- Core functionality (CRUD)
- Basic responsive design

// 2. Create user stories
"As a user, I can..."
- Sign up and log in
- Create, edit, delete items
- View my dashboard

// 3. Plan the tech stack
Frontend: Next.js, Tailwind CSS
Backend: Next.js API Routes
Database: PostgreSQL with Prisma
Auth: NextAuth.js
Deployment: Vercel</pre>
      </div>

      <h3>Documentation</h3>
      <div class="code-block">
        <pre># README.md Template

# Project Name

Brief description.

## Features
- Feature 1
- Feature 2

## Tech Stack
- Next.js 14
- TypeScript
- Tailwind CSS

## Getting Started
git clone https://github.com/you/project.git
npm install
npm run dev

## Environment Variables
DATABASE_URL=...
NEXTAUTH_SECRET=...

## Live Demo
https://your-project.vercel.app</pre>
      </div>

      <h3>Code Quality Checklist</h3>
      <div class="code-block">
        <pre>// Before submitting:
[ ] TypeScript with strict mode
[ ] ESLint and Prettier configured
[ ] No console.logs in production
[ ] Error handling throughout
[ ] Loading states for async operations
[ ] Responsive design tested
[ ] At least some test coverage
[ ] README with setup instructions
[ ] Live demo deployed</pre>
      </div>
    `,
    questions: [
      {
        id: "60-1",
        type: "mcq",
        question: "What is an MVP in project development?",
        options: ["Most Valuable Player", "Minimum Viable Product", "Maximum Version Product", "Main Version Plan"],
        correctAnswer: "Minimum Viable Product",
        explanation: "MVP (Minimum Viable Product) is the simplest version of your product with just enough features to be usable. It helps validate ideas quickly before building more."
      },
      {
        id: "60-2",
        type: "mcq",
        question: "What should a portfolio project README include?",
        options: ["Only the project name", "Setup instructions, features, and tech stack", "Just a link to the demo", "Personal information only"],
        correctAnswer: "Setup instructions, features, and tech stack",
        explanation: "A good README includes project description, features list, tech stack, setup instructions, environment variables, and a live demo link."
      },
      {
        id: "60-3",
        type: "descriptive",
        question: "What makes a portfolio project stand out to employers?",
        keywords: ["real problem", "clean code", "tested", "deployed", "documented", "polished", "technical", "unique"],
        explanation: "Standout projects solve real problems, have clean documented code, include tests, are deployed with a live demo, show technical depth, and have a polished UI."
      }
    ]
  },
  {
    id: 61,
    title: "Code Quality & Best Practices",
    description: "Write maintainable, clean code that others can understand",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 6,
    week: 24,
    category: "Best Practices",
    content: `
      <h2>Writing Clean Code</h2>
      <p>Clean code is code that is easy to read, understand, and maintain.</p>

      <h3>Naming Conventions</h3>
      <div class="code-block">
        <pre>// Bad names
const d = new Date();
const fn = (x) => x * 2;

// Good names
const currentDate = new Date();
const doubleValue = (number) => number * 2;

// Naming patterns
const userProfile = {};       // Variables: camelCase
function calculateTotal() {}  // Functions: verb + noun
const MAX_RETRIES = 3;        // Constants: UPPER_SNAKE
function UserCard() {}        // Components: PascalCase</pre>
      </div>

      <h3>Function Best Practices</h3>
      <div class="code-block">
        <pre>// Single Responsibility
// Bad
function processUser(user) {
  validateUser(user);
  saveToDatabase(user);
  sendWelcomeEmail(user);
}

// Good - separate concerns
async function createUser(userData) {
  const validatedUser = validateUser(userData);
  const savedUser = await saveUser(validatedUser);
  await queueWelcomeEmail(savedUser);
  return savedUser;
}

// Early returns for cleaner logic
// Bad
function process(order) {
  if (order) {
    if (order.items.length > 0) {
      if (order.isPaid) {
        // Process...
      }
    }
  }
}

// Good
function process(order) {
  if (!order) return;
  if (order.items.length === 0) return;
  if (!order.isPaid) return;
  // Process...
}</pre>
      </div>

      <h3>DRY (Don't Repeat Yourself)</h3>
      <div class="code-block">
        <pre>// Bad - repeated logic
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateUserEmail(user) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(user.email);
}

// Good - reusable function
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email) {
  return EMAIL_REGEX.test(email);
}</pre>
      </div>

      <h3>Comments and Documentation</h3>
      <div class="code-block">
        <pre>// Bad - explains WHAT
// Increment counter by 1
counter++;

// Good - explains WHY
// Using 2-second delay to avoid rate limiting
await delay(2000);

// JSDoc for functions
/**
 * Calculates total price including tax
 * @param items - Cart items with price
 * @param discountCode - Optional discount
 * @returns Total price in cents
 */
function calculateTotal(items, discountCode) {}</pre>
      </div>

      <h3>Error Handling</h3>
      <div class="code-block">
        <pre>// Bad
try {
  await fetchData();
} catch (e) {
  console.log(e);
}

// Good
try {
  await fetchData();
} catch (error) {
  if (error instanceof NetworkError) {
    showNotification('Check your connection');
  } else if (error instanceof AuthError) {
    redirectToLogin();
  } else {
    logger.error('Unexpected error', error);
    showNotification('Something went wrong');
  }
}</pre>
      </div>
    `,
    questions: [
      {
        id: "61-1",
        type: "mcq",
        question: "What does the DRY principle stand for?",
        options: ["Do Repeat Yourself", "Don't Repeat Yourself", "Direct Response Yield", "Data Retrieval Yield"],
        correctAnswer: "Don't Repeat Yourself",
        explanation: "DRY means avoiding code duplication by extracting common logic into reusable functions, components, or modules."
      },
      {
        id: "61-2",
        type: "mcq",
        question: "When should you add comments to code?",
        options: ["For every line", "To explain WHAT the code does", "To explain WHY the code exists", "Never"],
        correctAnswer: "To explain WHY the code exists",
        explanation: "Good code should be self-explanatory about WHAT it does. Comments should explain WHY certain decisions were made."
      },
      {
        id: "61-3",
        type: "descriptive",
        question: "Explain the Single Responsibility Principle and why it matters.",
        keywords: ["one thing", "responsibility", "function", "maintainable", "testable", "change", "reason"],
        explanation: "Single Responsibility means each function/class should do one thing well and have only one reason to change. This makes code more maintainable and testable."
      },
      {
        id: "61-4",
        type: "mcq",
        question: "What is a good maximum number of parameters for a function?",
        options: ["10", "3", "Unlimited", "0"],
        correctAnswer: "3",
        explanation: "Functions should ideally have 3 or fewer parameters. If more are needed, consider using an options object."
      }
    ]
  },
  {
    id: 62,
    title: "Web Performance Optimization",
    description: "Optimize your web applications for speed and efficiency",
    duration: "55 min",
    difficulty: "Advanced",
    month: 6,
    week: 24,
    category: "Best Practices",
    content: `
      <h2>Web Performance Optimization</h2>
      <p>Fast websites provide better user experience and rank higher in search results.</p>

      <h3>Core Web Vitals</h3>
      <ul>
        <li><strong>LCP (Largest Contentful Paint)</strong> - Under 2.5s</li>
        <li><strong>FID (First Input Delay)</strong> - Under 100ms</li>
        <li><strong>CLS (Cumulative Layout Shift)</strong> - Under 0.1</li>
      </ul>

      <h3>Image Optimization</h3>
      <div class="code-block">
        <pre>// Next.js Image component
import Image from 'next/image';

&lt;Image
  src="/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority  // Load immediately for above-fold
  placeholder="blur"
/&gt;

// Responsive images
&lt;Image
  src="/photo.jpg"
  alt="Photo"
  sizes="(max-width: 768px) 100vw, 50vw"
  fill
  style={{ objectFit: 'cover' }}
/&gt;</pre>
      </div>

      <h3>Code Splitting</h3>
      <div class="code-block">
        <pre>// Dynamic imports
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => &lt;ChartSkeleton /&gt;,
  ssr: false,
});

// Conditional loading
{showChart && &lt;HeavyChart data={data} /&gt;}</pre>
      </div>

      <h3>Caching Strategies</h3>
      <div class="code-block">
        <pre>// Next.js caching
export const revalidate = 60; // ISR every 60 seconds

// API route caching
export async function GET() {
  const data = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 }  // Cache for 1 hour
  });
  return Response.json(data);
}</pre>
      </div>

      <h3>Bundle Size Optimization</h3>
      <div class="code-block">
        <pre># Analyze bundle
npm install @next/bundle-analyzer
ANALYZE=true npm run build

// Import only what you need
// Bad
import _ from 'lodash';

// Good
import debounce from 'lodash/debounce';</pre>
      </div>

      <h3>Font Optimization</h3>
      <div class="code-block">
        <pre>// Next.js font optimization
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

// Use in layout
&lt;html className={inter.className}&gt;</pre>
      </div>
    `,
    questions: [
      {
        id: "62-1",
        type: "mcq",
        question: "What is the recommended threshold for Largest Contentful Paint (LCP)?",
        options: ["Under 1 second", "Under 2.5 seconds", "Under 5 seconds", "Under 10 seconds"],
        correctAnswer: "Under 2.5 seconds",
        explanation: "Google recommends LCP under 2.5 seconds for a good user experience."
      },
      {
        id: "62-2",
        type: "mcq",
        question: "What is the benefit of dynamic imports in Next.js?",
        options: ["Better TypeScript support", "Load components only when needed", "Faster build times", "Better SEO"],
        correctAnswer: "Load components only when needed",
        explanation: "Dynamic imports enable code splitting, loading components only when needed, reducing initial bundle size."
      },
      {
        id: "62-3",
        type: "descriptive",
        question: "Explain what Cumulative Layout Shift (CLS) is and how to minimize it.",
        keywords: ["layout", "shift", "movement", "dimensions", "placeholder", "skeleton", "image", "size"],
        explanation: "CLS measures unexpected layout shifts during page load. Minimize it by setting explicit dimensions on images, using skeleton loaders, and reserving space for dynamic content."
      }
    ]
  },
  {
    id: 63,
    title: "Security Best Practices",
    description: "Protect your web applications from common security vulnerabilities",
    duration: "55 min",
    difficulty: "Advanced",
    month: 6,
    week: 24,
    category: "Best Practices",
    content: `
      <h2>Web Application Security</h2>
      <p>Security is critical for protecting user data and maintaining trust.</p>

      <h3>OWASP Top 10 Overview</h3>
      <ul>
        <li>Injection (SQL, XSS)</li>
        <li>Broken Authentication</li>
        <li>Sensitive Data Exposure</li>
        <li>Security Misconfiguration</li>
        <li>Cross-Site Scripting (XSS)</li>
      </ul>

      <h3>Preventing XSS</h3>
      <div class="code-block">
        <pre>// React automatically escapes content
&lt;div&gt;{userInput}&lt;/div&gt;  // Safe

// DANGER: dangerouslySetInnerHTML
// Sanitize first
import DOMPurify from 'dompurify';

const sanitizedHTML = DOMPurify.sanitize(userInput);
&lt;div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} /&gt;</pre>
      </div>

      <h3>Preventing SQL Injection</h3>
      <div class="code-block">
        <pre>// NEVER concatenate user input
// Bad (vulnerable)
const query = \`SELECT * FROM users WHERE id = \${userId}\`;

// Good - use parameterized queries
// Prisma (safe by default)
const user = await prisma.user.findUnique({
  where: { id: userId }
});

// Raw queries with parameters
const users = await prisma.$queryRaw\`
  SELECT * FROM users WHERE email = \${email}
\`;</pre>
      </div>

      <h3>Authentication Security</h3>
      <div class="code-block">
        <pre>// Password hashing
import bcrypt from 'bcrypt';

const saltRounds = 12;
const hashedPassword = await bcrypt.hash(password, saltRounds);

// Verify password
const isValid = await bcrypt.compare(inputPassword, hashedPassword);</pre>
      </div>

      <h3>Security Headers</h3>
      <div class="code-block">
        <pre>// next.config.js
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
];</pre>
      </div>

      <h3>Input Validation</h3>
      <div class="code-block">
        <pre>import { z } from 'zod';

const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
  name: z.string().min(1).max(100),
});

export async function POST(request) {
  const body = await request.json();
  const result = createUserSchema.safeParse(body);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: 400 });
  }
  // Safe to use result.data
}</pre>
      </div>
    `,
    questions: [
      {
        id: "63-1",
        type: "mcq",
        question: "How does React help prevent XSS attacks?",
        options: ["It doesn't", "By automatically escaping rendered content", "By blocking all JavaScript", "By using HTTPS"],
        correctAnswer: "By automatically escaping rendered content",
        explanation: "React automatically escapes values embedded in JSX, converting special characters to HTML entities, preventing malicious scripts from executing."
      },
      {
        id: "63-2",
        type: "mcq",
        question: "What is the secure way to store user passwords?",
        options: ["Plain text", "Encrypted with AES", "Hashed with bcrypt", "Base64 encoded"],
        correctAnswer: "Hashed with bcrypt",
        explanation: "Passwords should be hashed with a slow algorithm like bcrypt. Even if the database is breached, passwords can't be easily recovered."
      },
      {
        id: "63-3",
        type: "descriptive",
        question: "Explain SQL injection and how to prevent it.",
        keywords: ["input", "query", "parameterized", "prepared", "escape", "user", "malicious", "database"],
        explanation: "SQL injection occurs when user input is directly concatenated into SQL queries. Prevent it by using parameterized queries or ORMs like Prisma that automatically escape inputs."
      },
      {
        id: "63-4",
        type: "mcq",
        question: "What does the HttpOnly cookie flag do?",
        options: ["Makes cookies faster", "Prevents JavaScript from accessing the cookie", "Encrypts the cookie", "Makes it work only on HTTP"],
        correctAnswer: "Prevents JavaScript from accessing the cookie",
        explanation: "HttpOnly prevents client-side JavaScript from accessing the cookie, protecting session tokens from XSS attacks."
      }
    ]
  },
  {
    id: 64,
    title: "Interview Preparation",
    description: "Prepare for technical interviews with common questions and strategies",
    duration: "60 min",
    difficulty: "Intermediate",
    month: 6,
    week: 25,
    category: "Best Practices",
    content: `
      <h2>Technical Interview Preparation</h2>
      <p>Preparing well for interviews increases your confidence and success rate.</p>

      <h3>Types of Technical Interviews</h3>
      <ul>
        <li><strong>Coding Challenges</strong> - Solve problems live or take-home</li>
        <li><strong>System Design</strong> - Design scalable systems</li>
        <li><strong>Technical Discussion</strong> - Discuss projects and concepts</li>
        <li><strong>Behavioral</strong> - Past experiences and soft skills</li>
      </ul>

      <h3>Common JavaScript Questions</h3>
      <div class="code-block">
        <pre>// 1. What's the difference between == and ===?
5 == '5'   // true (type coercion)
5 === '5'  // false (strict equality)

// 2. Explain closures
function outer() {
  const secret = 'hidden';
  return function inner() {
    return secret; // inner accesses outer's scope
  };
}

// 3. What is the event loop?
// JavaScript is single-threaded but non-blocking
// Call stack executes sync code
// Callback queue holds async callbacks
// Event loop moves callbacks to stack when empty

// 4. Promise vs async/await
async function fetchData() {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}</pre>
      </div>

      <h3>Common React Questions</h3>
      <div class="code-block">
        <pre>// 1. What are hooks?
// Functions to use state/lifecycle in functional components
useState, useEffect, useContext, useMemo, useCallback

// 2. Explain useEffect dependencies
useEffect(() => {}, []);    // Runs once on mount
useEffect(() => {}, [dep]); // Runs when dep changes

// 3. What is the virtual DOM?
// Lightweight copy of the real DOM
// React compares virtual DOMs (diffing)
// Only updates changed parts (reconciliation)

// 4. How do you optimize React performance?
// - React.memo for component memoization
// - useMemo for expensive calculations
// - useCallback for stable function references
// - Code splitting with dynamic imports</pre>
      </div>

      <h3>Behavioral Questions (STAR Method)</h3>
      <div class="code-block">
        <pre>// STAR Method
// Situation - Context
// Task - What you needed to do
// Action - What you did
// Result - Outcome and learnings

// Example: "Tell me about a challenging project"
// S: "Team needed to migrate a legacy system to React"
// T: "I was responsible for the auth module"
// A: "Researched options, proposed NextAuth, created POC"
// R: "Migrated with zero downtime, improved login by 40%"</pre>
      </div>

      <h3>Coding Interview Tips</h3>
      <ul>
        <li><strong>Clarify requirements</strong> - Ask questions before coding</li>
        <li><strong>Think out loud</strong> - Explain your thought process</li>
        <li><strong>Start with brute force</strong> - Then optimize</li>
        <li><strong>Test your solution</strong> - Walk through with examples</li>
        <li><strong>Handle edge cases</strong> - Empty input, boundaries</li>
      </ul>

      <h3>Questions to Ask Interviewers</h3>
      <ul>
        <li>What does the tech stack look like?</li>
        <li>How does the team handle code reviews?</li>
        <li>What are the biggest challenges right now?</li>
        <li>How do you support professional growth?</li>
      </ul>
    `,
    questions: [
      {
        id: "64-1",
        type: "mcq",
        question: "What is the STAR method used for?",
        options: ["Rating code quality", "Structuring behavioral interview answers", "System design", "Code review"],
        correctAnswer: "Structuring behavioral interview answers",
        explanation: "STAR (Situation, Task, Action, Result) is a method for structuring behavioral interview answers to clearly communicate your experiences."
      },
      {
        id: "64-2",
        type: "mcq",
        question: "In a coding interview, what should you do first?",
        options: ["Start coding immediately", "Ask clarifying questions", "Write tests", "Optimize the solution"],
        correctAnswer: "Ask clarifying questions",
        explanation: "Always clarify requirements before coding. This shows good communication skills and ensures you solve the right problem."
      },
      {
        id: "64-3",
        type: "descriptive",
        question: "Explain what closures are in JavaScript and give an example use case.",
        keywords: ["function", "scope", "outer", "inner", "access", "variable", "private", "data"],
        explanation: "A closure is a function that retains access to its outer scope's variables even after the outer function has returned. Use cases include creating private variables and maintaining state in callbacks."
      }
    ]
  },
  {
    id: 65,
    title: "Building Full-Stack Projects",
    description: "Bring together all your skills to build complete applications",
    duration: "60 min",
    difficulty: "Advanced",
    month: 6,
    week: 25,
    category: "Best Practices",
    content: `
      <h2>Full-Stack Development Mastery</h2>
      <p>Bringing together frontend, backend, database, and DevOps skills to build complete applications.</p>

      <h3>Full-Stack Architecture</h3>
      <div class="code-block">
        <pre>// Modern Full-Stack Application

Client (React/Next.js + TypeScript + Tailwind)
        |
        v
API Layer (Next.js API Routes / tRPC)
        |
        v
Business Logic (Services, Validation, Auth)
        |
        v
Data Layer (Prisma ORM + PostgreSQL)</pre>
      </div>

      <h3>Project Setup</h3>
      <div class="code-block">
        <pre># Initialize project
npx create-next-app@latest my-app --typescript --tailwind --eslint

# Add dependencies
npm install prisma @prisma/client next-auth zod

# Set up Prisma
npx prisma init

# Folder structure
src/
├── app/
├── components/
├── lib/
├── hooks/
├── types/
└── services/</pre>
      </div>

      <h3>Database Design</h3>
      <div class="code-block">
        <pre>// prisma/schema.prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String
  role      Role     @default(USER)
  projects  Project[]
  createdAt DateTime @default(now())
}

model Project {
  id          String   @id @default(cuid())
  title       String
  description String?
  status      Status   @default(DRAFT)
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  tasks       Task[]
}

enum Role {
  USER
  ADMIN
}</pre>
      </div>

      <h3>API Layer with Type Safety</h3>
      <div class="code-block">
        <pre>// lib/validations.ts
import { z } from 'zod';

export const createProjectSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().optional(),
});

// app/api/projects/route.ts
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { createProjectSchema } from '@/lib/validations';

export async function POST(request: Request) {
  const session = await getServerSession();
  if (!session?.user) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const result = createProjectSchema.safeParse(body);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: 400 });
  }

  const project = await prisma.project.create({
    data: { ...result.data, userId: session.user.id },
  });

  return Response.json(project, { status: 201 });
}</pre>
      </div>

      <h3>Deployment Checklist</h3>
      <div class="code-block">
        <pre>// Pre-deployment checklist
[ ] Environment variables configured
[ ] Database migrated
[ ] Build succeeds locally
[ ] Tests passing
[ ] No console.logs in production
[ ] Error tracking set up
[ ] Security headers configured
[ ] Performance optimized
[ ] README documentation complete

// Deploy command
git push origin main  // Auto-deploys to Vercel</pre>
      </div>

      <h3>Continuing Your Journey</h3>
      <ul>
        <li><strong>Build more projects</strong> - Practice makes perfect</li>
        <li><strong>Contribute to open source</strong> - Learn from others</li>
        <li><strong>Stay updated</strong> - Follow tech blogs and newsletters</li>
        <li><strong>Teach others</strong> - Best way to solidify knowledge</li>
        <li><strong>Specialize</strong> - Go deep in areas that interest you</li>
      </ul>

      <p><strong>Congratulations on completing the LearnFS curriculum!</strong> You now have the skills to build production-ready full-stack applications.</p>
    `,
    questions: [
      {
        id: "65-1",
        type: "mcq",
        question: "What is the benefit of using an ORM like Prisma?",
        options: ["Faster database", "Type-safe database queries and easier migrations", "Better frontend performance", "Automatic caching"],
        correctAnswer: "Type-safe database queries and easier migrations",
        explanation: "ORMs like Prisma provide type-safe database queries with TypeScript, automatic migrations, and a clean API for database operations."
      },
      {
        id: "65-2",
        type: "mcq",
        question: "Why use Zod for validation?",
        options: ["It's required by Next.js", "Runtime validation with TypeScript type inference", "It's faster than other libraries", "It's built into React"],
        correctAnswer: "Runtime validation with TypeScript type inference",
        explanation: "Zod provides runtime validation while also inferring TypeScript types, giving you both compile-time and runtime safety."
      },
      {
        id: "65-3",
        type: "descriptive",
        question: "Describe the complete flow of a user creating a new project in a full-stack application.",
        keywords: ["frontend", "form", "API", "validation", "database", "prisma", "response", "auth", "session"],
        explanation: "User fills form -> Frontend validates -> POST request to API -> Server checks auth -> Validates with Zod -> Prisma creates record -> Returns response -> Frontend updates UI."
      },
      {
        id: "65-4",
        type: "mcq",
        question: "What should you check before deploying a full-stack application?",
        options: ["Only that the code compiles", "Environment variables, migrations, tests, and security", "Just the frontend appearance", "Database size"],
        correctAnswer: "Environment variables, migrations, tests, and security",
        explanation: "Before deployment, verify environment variables are set, database migrations run, tests pass, security headers are configured, and there are no console.logs exposed."
      }
    ]
  }
];

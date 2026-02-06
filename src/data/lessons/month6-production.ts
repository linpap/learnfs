import { Lesson } from '@/types/lesson';

export const month6Lessons: Lesson[] = [
  {
    id: 99,
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
        id: "99-1",
        type: "mcq",
        question: "What is the correct order of the TDD cycle?",
        options: ["Green, Red, Refactor", "Red, Green, Refactor", "Refactor, Red, Green", "Red, Refactor, Green"],
        correctAnswer: "Red, Green, Refactor",
        explanation: "TDD follows Red (write failing test), Green (write code to pass), Refactor (improve code while tests pass). This ensures tests drive development."
      },
      {
        id: "99-2",
        type: "mcq",
        question: "According to the testing pyramid, which type of tests should you have the most of?",
        options: ["E2E tests", "Integration tests", "Unit tests", "Manual tests"],
        correctAnswer: "Unit tests",
        explanation: "The testing pyramid suggests having many unit tests (base), some integration tests (middle), and few E2E tests (top). Unit tests are fast and cheap to run."
      },
      {
        id: "99-3",
        type: "descriptive",
        question: "Explain the difference between unit tests and integration tests.",
        keywords: ["unit", "integration", "isolation", "together", "components", "functions", "dependencies", "mock"],
        explanation: "Unit tests test individual functions or components in isolation, often mocking dependencies. Integration tests verify that multiple units work correctly together, testing the interactions between components."
      },
      {
        id: "99-4",
        type: "mcq",
        question: "What does the 'Arrange, Act, Assert' pattern represent?",
        options: ["Three types of tests", "Test file organization", "Structure of a single test", "Testing frameworks"],
        correctAnswer: "Structure of a single test",
        explanation: "Arrange-Act-Assert is a pattern for structuring individual tests: Arrange sets up test data, Act performs the action being tested, Assert verifies the expected outcome."
      }
    ]
  },
  {
    id: 100,
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
        id: "100-1",
        type: "mcq",
        question: "Which query should you prefer when testing React components?",
        options: ["getByTestId", "getByClassName", "getByRole", "querySelector"],
        correctAnswer: "getByRole",
        explanation: "getByRole queries elements by their accessible role, which tests your app the way users interact with it and encourages accessible markup."
      },
      {
        id: "100-2",
        type: "mcq",
        question: "What is the difference between getBy and findBy queries?",
        options: ["getBy is newer", "findBy returns a promise and waits for the element", "They are identical", "getBy is for forms only"],
        correctAnswer: "findBy returns a promise and waits for the element",
        explanation: "findBy queries return a promise and will wait for the element to appear. Use them for testing async operations where elements appear after data loads."
      },
      {
        id: "100-3",
        type: "descriptive",
        question: "How would you test a component that makes an API call on mount?",
        keywords: ["mock", "jest.mock", "mockResolvedValue", "findBy", "async", "await", "loading", "state"],
        explanation: "Mock the API module with jest.mock(), set up the mock to return test data with mockResolvedValue(), render the component, verify loading state, then use findBy queries to wait for and verify the loaded content."
      },
      {
        id: "100-4",
        type: "mcq",
        question: "What does jest.fn() create?",
        options: ["A real function", "A mock function that tracks calls", "A test file", "An error handler"],
        correctAnswer: "A mock function that tracks calls",
        explanation: "jest.fn() creates a mock function that tracks how many times it was called, with what arguments, and what it returned. Essential for testing callbacks and event handlers."
      }
    ]
  },
  {
    id: 101,
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
        id: "101-1",
        type: "mcq",
        question: "What is MSW (Mock Service Worker) used for?",
        options: ["Styling components", "Mocking API requests at the network level", "Managing state", "Running tests in parallel"],
        correctAnswer: "Mocking API requests at the network level",
        explanation: "MSW intercepts requests at the network level, allowing you to mock API responses without changing your application code."
      },
      {
        id: "101-2",
        type: "mcq",
        question: "Why should you use a separate test database?",
        options: ["It's faster", "To avoid affecting production data", "Tests require specific database versions", "It's required by Jest"],
        correctAnswer: "To avoid affecting production data",
        explanation: "A separate test database ensures tests don't modify production data, allows tests to run independently, and lets you reset the database between tests."
      },
      {
        id: "101-3",
        type: "descriptive",
        question: "Explain how to test error handling in API calls.",
        keywords: ["mock", "error", "status", "500", "catch", "display", "message", "handler"],
        explanation: "Mock the API to return an error status (e.g., 500), render the component, then verify the error message is displayed. With MSW, use server.use() to override handlers for specific tests."
      }
    ]
  },
  {
    id: 102,
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
        id: "102-1",
        type: "mcq",
        question: "What is the staging area in Git?",
        options: ["The remote server", "A place to prepare changes before committing", "The main branch", "A backup location"],
        correctAnswer: "A place to prepare changes before committing",
        explanation: "The staging area is where you prepare changes before committing. It allows you to selectively choose which changes to include in the next commit."
      },
      {
        id: "102-2",
        type: "mcq",
        question: "How do you create and switch to a new branch in one command?",
        options: ["git branch new-branch", "git checkout -b new-branch", "git create new-branch", "git new-branch"],
        correctAnswer: "git checkout -b new-branch",
        explanation: "git checkout -b creates a new branch and switches to it in one command. The modern alternative is git switch -c new-branch."
      },
      {
        id: "102-3",
        type: "descriptive",
        question: "Explain the difference between git reset and git revert.",
        keywords: ["reset", "revert", "history", "commit", "undo", "new commit", "rewrite", "safe"],
        explanation: "git reset moves the branch pointer back, effectively removing commits (can rewrite history). git revert creates a new commit that undoes changes, preserving history. Use revert for shared branches."
      },
      {
        id: "102-4",
        type: "mcq",
        question: "What does git stash do?",
        options: ["Deletes all changes", "Temporarily saves uncommitted changes", "Creates a new branch", "Merges branches"],
        correctAnswer: "Temporarily saves uncommitted changes",
        explanation: "git stash temporarily saves your uncommitted changes, allowing you to switch branches or pull updates. You can later restore the changes with git stash pop."
      }
    ]
  },
  {
    id: 103,
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
        id: "103-1",
        type: "mcq",
        question: "What is the purpose of a Pull Request?",
        options: ["To download code", "To propose and review changes before merging", "To delete a branch", "To create a backup"],
        correctAnswer: "To propose and review changes before merging",
        explanation: "Pull Requests allow you to propose changes, get code reviews, discuss modifications, and merge changes into the main branch in a controlled way."
      },
      {
        id: "103-2",
        type: "mcq",
        question: "What does git rebase do?",
        options: ["Creates a backup", "Moves commits to a new base", "Deletes old commits", "Merges branches"],
        correctAnswer: "Moves commits to a new base",
        explanation: "Rebase replays your commits on top of another branch, creating a linear history. It's useful for keeping feature branches up to date with main."
      },
      {
        id: "103-3",
        type: "descriptive",
        question: "Describe the GitHub Flow workflow and its benefits.",
        keywords: ["main", "branch", "feature", "pull request", "review", "merge", "deploy", "simple"],
        explanation: "GitHub Flow: branch from main, make changes, open PR, get review, merge to main. Benefits: simple, main is always deployable, encourages small frequent changes, built-in code review."
      }
    ]
  },
  {
    id: 104,
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
        id: "104-1",
        type: "mcq",
        question: "What is a preview deployment on Vercel?",
        options: ["A local development server", "A deployment created for each pull request", "A staging server", "A backup deployment"],
        correctAnswer: "A deployment created for each pull request",
        explanation: "Vercel creates a unique preview deployment for every pull request, allowing you to test changes before merging to production."
      },
      {
        id: "104-2",
        type: "mcq",
        question: "How do you expose environment variables to the browser in Next.js?",
        options: ["Use process.env directly", "Prefix with NEXT_PUBLIC_", "Add to .env.local only", "Use window.env"],
        correctAnswer: "Prefix with NEXT_PUBLIC_",
        explanation: "Environment variables prefixed with NEXT_PUBLIC_ are exposed to the browser. Without the prefix, they are only available server-side for security."
      },
      {
        id: "104-3",
        type: "descriptive",
        question: "Explain the benefits of using Vercel for Next.js deployment.",
        keywords: ["zero config", "automatic", "preview", "CDN", "serverless", "edge", "fast", "scale"],
        explanation: "Vercel offers zero-config deployment for Next.js, automatic deployments on push, preview URLs for PRs, global CDN, serverless functions that auto-scale, and built-in analytics."
      }
    ]
  },
  {
    id: 105,
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
        id: "105-1",
        type: "mcq",
        question: "What is the difference between Continuous Delivery and Continuous Deployment?",
        options: ["They are the same", "Delivery requires manual approval, Deployment is automatic", "Delivery is for testing, Deployment is for building", "There is no difference"],
        correctAnswer: "Delivery requires manual approval, Deployment is automatic",
        explanation: "Continuous Delivery prepares code for release but requires manual approval to deploy. Continuous Deployment automatically deploys every change that passes tests."
      },
      {
        id: "105-2",
        type: "mcq",
        question: "What does the 'needs' keyword do in GitHub Actions?",
        options: ["Defines required secrets", "Specifies job dependencies", "Lists required packages", "Defines environment variables"],
        correctAnswer: "Specifies job dependencies",
        explanation: "The 'needs' keyword specifies that a job depends on another job completing successfully. The dependent job waits until the required jobs finish."
      },
      {
        id: "105-3",
        type: "descriptive",
        question: "Explain why caching is important in CI/CD pipelines.",
        keywords: ["cache", "dependencies", "speed", "npm", "node_modules", "time", "bandwidth", "fast"],
        explanation: "Caching stores dependencies between runs, avoiding re-downloading packages. This significantly speeds up pipeline execution, saves bandwidth, and reduces costs."
      },
      {
        id: "105-4",
        type: "mcq",
        question: "What triggers a GitHub Actions workflow with 'on: pull_request'?",
        options: ["When code is pushed to main", "When a PR is opened or updated", "When issues are created", "Manual trigger only"],
        correctAnswer: "When a PR is opened or updated",
        explanation: "The pull_request trigger runs the workflow when a PR is opened, synchronized (new commits pushed), or other specified PR events occur."
      }
    ]
  },
  {
    id: 106,
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
        id: "106-1",
        type: "mcq",
        question: "What is the purpose of error boundaries in React?",
        options: ["Style error messages", "Catch JavaScript errors in component tree", "Validate form inputs", "Handle API errors"],
        correctAnswer: "Catch JavaScript errors in component tree",
        explanation: "Error boundaries catch JavaScript errors anywhere in the child component tree, log the error, and display a fallback UI instead of crashing the whole app."
      },
      {
        id: "106-2",
        type: "mcq",
        question: "What does LCP (Largest Contentful Paint) measure?",
        options: ["Time to load all JavaScript", "Time until the largest content element is visible", "Total page size", "Number of API calls"],
        correctAnswer: "Time until the largest content element is visible",
        explanation: "LCP measures when the largest content element becomes visible. It's a key metric for perceived loading performance."
      },
      {
        id: "106-3",
        type: "descriptive",
        question: "Explain why structured logging is better than console.log statements.",
        keywords: ["JSON", "structured", "searchable", "parse", "timestamp", "level", "context", "aggregate"],
        explanation: "Structured logging outputs JSON that can be easily parsed, searched, and aggregated. It includes consistent fields like timestamps and levels, making debugging easier."
      }
    ]
  },
  {
    id: 107,
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
        id: "107-1",
        type: "mcq",
        question: "What is an MVP in project development?",
        options: ["Most Valuable Player", "Minimum Viable Product", "Maximum Version Product", "Main Version Plan"],
        correctAnswer: "Minimum Viable Product",
        explanation: "MVP (Minimum Viable Product) is the simplest version of your product with just enough features to be usable. It helps validate ideas quickly before building more."
      },
      {
        id: "107-2",
        type: "mcq",
        question: "What should a portfolio project README include?",
        options: ["Only the project name", "Setup instructions, features, and tech stack", "Just a link to the demo", "Personal information only"],
        correctAnswer: "Setup instructions, features, and tech stack",
        explanation: "A good README includes project description, features list, tech stack, setup instructions, environment variables, and a live demo link."
      },
      {
        id: "107-3",
        type: "descriptive",
        question: "What makes a portfolio project stand out to employers?",
        keywords: ["real problem", "clean code", "tested", "deployed", "documented", "polished", "technical", "unique"],
        explanation: "Standout projects solve real problems, have clean documented code, include tests, are deployed with a live demo, show technical depth, and have a polished UI."
      }
    ]
  },
  {
    id: 108,
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
        id: "108-1",
        type: "mcq",
        question: "What does the DRY principle stand for?",
        options: ["Do Repeat Yourself", "Don't Repeat Yourself", "Direct Response Yield", "Data Retrieval Yield"],
        correctAnswer: "Don't Repeat Yourself",
        explanation: "DRY means avoiding code duplication by extracting common logic into reusable functions, components, or modules."
      },
      {
        id: "108-2",
        type: "mcq",
        question: "When should you add comments to code?",
        options: ["For every line", "To explain WHAT the code does", "To explain WHY the code exists", "Never"],
        correctAnswer: "To explain WHY the code exists",
        explanation: "Good code should be self-explanatory about WHAT it does. Comments should explain WHY certain decisions were made."
      },
      {
        id: "108-3",
        type: "descriptive",
        question: "Explain the Single Responsibility Principle and why it matters.",
        keywords: ["one thing", "responsibility", "function", "maintainable", "testable", "change", "reason"],
        explanation: "Single Responsibility means each function/class should do one thing well and have only one reason to change. This makes code more maintainable and testable."
      },
      {
        id: "108-4",
        type: "mcq",
        question: "What is a good maximum number of parameters for a function?",
        options: ["10", "3", "Unlimited", "0"],
        correctAnswer: "3",
        explanation: "Functions should ideally have 3 or fewer parameters. If more are needed, consider using an options object."
      }
    ]
  },
  {
    id: 109,
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
        id: "109-1",
        type: "mcq",
        question: "What is the recommended threshold for Largest Contentful Paint (LCP)?",
        options: ["Under 1 second", "Under 2.5 seconds", "Under 5 seconds", "Under 10 seconds"],
        correctAnswer: "Under 2.5 seconds",
        explanation: "Google recommends LCP under 2.5 seconds for a good user experience."
      },
      {
        id: "109-2",
        type: "mcq",
        question: "What is the benefit of dynamic imports in Next.js?",
        options: ["Better TypeScript support", "Load components only when needed", "Faster build times", "Better SEO"],
        correctAnswer: "Load components only when needed",
        explanation: "Dynamic imports enable code splitting, loading components only when needed, reducing initial bundle size."
      },
      {
        id: "109-3",
        type: "descriptive",
        question: "Explain what Cumulative Layout Shift (CLS) is and how to minimize it.",
        keywords: ["layout", "shift", "movement", "dimensions", "placeholder", "skeleton", "image", "size"],
        explanation: "CLS measures unexpected layout shifts during page load. Minimize it by setting explicit dimensions on images, using skeleton loaders, and reserving space for dynamic content."
      }
    ]
  },
  {
    id: 110,
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
        id: "110-1",
        type: "mcq",
        question: "How does React help prevent XSS attacks?",
        options: ["It doesn't", "By automatically escaping rendered content", "By blocking all JavaScript", "By using HTTPS"],
        correctAnswer: "By automatically escaping rendered content",
        explanation: "React automatically escapes values embedded in JSX, converting special characters to HTML entities, preventing malicious scripts from executing."
      },
      {
        id: "110-2",
        type: "mcq",
        question: "What is the secure way to store user passwords?",
        options: ["Plain text", "Encrypted with AES", "Hashed with bcrypt", "Base64 encoded"],
        correctAnswer: "Hashed with bcrypt",
        explanation: "Passwords should be hashed with a slow algorithm like bcrypt. Even if the database is breached, passwords can't be easily recovered."
      },
      {
        id: "110-3",
        type: "descriptive",
        question: "Explain SQL injection and how to prevent it.",
        keywords: ["input", "query", "parameterized", "prepared", "escape", "user", "malicious", "database"],
        explanation: "SQL injection occurs when user input is directly concatenated into SQL queries. Prevent it by using parameterized queries or ORMs like Prisma that automatically escape inputs."
      },
      {
        id: "110-4",
        type: "mcq",
        question: "What does the HttpOnly cookie flag do?",
        options: ["Makes cookies faster", "Prevents JavaScript from accessing the cookie", "Encrypts the cookie", "Makes it work only on HTTP"],
        correctAnswer: "Prevents JavaScript from accessing the cookie",
        explanation: "HttpOnly prevents client-side JavaScript from accessing the cookie, protecting session tokens from XSS attacks."
      }
    ]
  },
  {
    id: 111,
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
        id: "111-1",
        type: "mcq",
        question: "What is the STAR method used for?",
        options: ["Rating code quality", "Structuring behavioral interview answers", "System design", "Code review"],
        correctAnswer: "Structuring behavioral interview answers",
        explanation: "STAR (Situation, Task, Action, Result) is a method for structuring behavioral interview answers to clearly communicate your experiences."
      },
      {
        id: "111-2",
        type: "mcq",
        question: "In a coding interview, what should you do first?",
        options: ["Start coding immediately", "Ask clarifying questions", "Write tests", "Optimize the solution"],
        correctAnswer: "Ask clarifying questions",
        explanation: "Always clarify requirements before coding. This shows good communication skills and ensures you solve the right problem."
      },
      {
        id: "111-3",
        type: "descriptive",
        question: "Explain what closures are in JavaScript and give an example use case.",
        keywords: ["function", "scope", "outer", "inner", "access", "variable", "private", "data"],
        explanation: "A closure is a function that retains access to its outer scope's variables even after the outer function has returned. Use cases include creating private variables and maintaining state in callbacks."
      }
    ]
  },
  {
    id: 112,
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
        id: "112-1",
        type: "mcq",
        question: "What is the benefit of using an ORM like Prisma?",
        options: ["Faster database", "Type-safe database queries and easier migrations", "Better frontend performance", "Automatic caching"],
        correctAnswer: "Type-safe database queries and easier migrations",
        explanation: "ORMs like Prisma provide type-safe database queries with TypeScript, automatic migrations, and a clean API for database operations."
      },
      {
        id: "112-2",
        type: "mcq",
        question: "Why use Zod for validation?",
        options: ["It's required by Next.js", "Runtime validation with TypeScript type inference", "It's faster than other libraries", "It's built into React"],
        correctAnswer: "Runtime validation with TypeScript type inference",
        explanation: "Zod provides runtime validation while also inferring TypeScript types, giving you both compile-time and runtime safety."
      },
      {
        id: "112-3",
        type: "descriptive",
        question: "Describe the complete flow of a user creating a new project in a full-stack application.",
        keywords: ["frontend", "form", "API", "validation", "database", "prisma", "response", "auth", "session"],
        explanation: "User fills form -> Frontend validates -> POST request to API -> Server checks auth -> Validates with Zod -> Prisma creates record -> Returns response -> Frontend updates UI."
      },
      {
        id: "112-4",
        type: "mcq",
        question: "What should you check before deploying a full-stack application?",
        options: ["Only that the code compiles", "Environment variables, migrations, tests, and security", "Just the frontend appearance", "Database size"],
        correctAnswer: "Environment variables, migrations, tests, and security",
        explanation: "Before deployment, verify environment variables are set, database migrations run, tests pass, security headers are configured, and there are no console.logs exposed."
      }
    ]
  },
  {
    id: 113,
    title: "E2E Testing with Playwright",
    description: "Write end-to-end tests that simulate real user interactions",
    duration: "50 min",
    difficulty: "Advanced",
    month: 6,
    week: 1,
    category: "Testing",
    content: `
      <h2>E2E Testing with Playwright</h2>
      <p>End-to-end (E2E) tests verify your application works correctly from the user's perspective, testing the complete flow across frontend, backend, and database.</p>

      <h3>Installation</h3>
      <div class="code-block">
        <pre>npm init playwright@latest

# Creates:
# - playwright.config.ts
# - tests/ folder
# - tests-examples/ folder</pre>
      </div>

      <h3>Configuration</h3>
      <div class="code-block">
        <pre>// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});</pre>
      </div>

      <h3>Basic Test</h3>
      <div class="code-block">
        <pre>// tests/home.spec.ts
import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) =&gt; {
  await page.goto('/');

  await expect(page).toHaveTitle(/My App/);
  await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
});

test('navigation works', async ({ page }) =&gt; {
  await page.goto('/');

  await page.getByRole('link', { name: 'About' }).click();

  await expect(page).toHaveURL('/about');
  await expect(page.getByRole('heading', { name: 'About Us' })).toBeVisible();
});</pre>
      </div>

      <h3>Form Testing</h3>
      <div class="code-block">
        <pre>test('contact form submission', async ({ page }) =&gt; {
  await page.goto('/contact');

  // Fill form
  await page.getByLabel('Name').fill('John Doe');
  await page.getByLabel('Email').fill('john@example.com');
  await page.getByLabel('Message').fill('Hello, this is a test message.');

  // Submit
  await page.getByRole('button', { name: 'Send' }).click();

  // Verify success
  await expect(page.getByText('Message sent successfully')).toBeVisible();
});

test('form validation', async ({ page }) =&gt; {
  await page.goto('/contact');

  // Submit empty form
  await page.getByRole('button', { name: 'Send' }).click();

  // Check validation errors
  await expect(page.getByText('Name is required')).toBeVisible();
  await expect(page.getByText('Email is required')).toBeVisible();
});</pre>
      </div>

      <h3>Authentication Flow</h3>
      <div class="code-block">
        <pre>test.describe('authentication', () =&gt; {
  test('successful login', async ({ page }) =&gt; {
    await page.goto('/login');

    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Log in' }).click();

    // Should redirect to dashboard
    await expect(page).toHaveURL('/dashboard');
    await expect(page.getByText('Welcome back')).toBeVisible();
  });

  test('failed login shows error', async ({ page }) =&gt; {
    await page.goto('/login');

    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Password').fill('wrongpassword');
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.getByText('Invalid credentials')).toBeVisible();
    await expect(page).toHaveURL('/login');
  });
});</pre>
      </div>

      <h3>Authenticated Tests</h3>
      <div class="code-block">
        <pre>// tests/auth.setup.ts
import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) =&gt; {
  await page.goto('/login');
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page).toHaveURL('/dashboard');

  // Save auth state
  await page.context().storageState({ path: authFile });
});

// playwright.config.ts
projects: [
  { name: 'setup', testMatch: /.*\\.setup\\.ts/ },
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      storageState: 'playwright/.auth/user.json',
    },
    dependencies: ['setup'],
  },
],</pre>
      </div>

      <h3>API Mocking</h3>
      <div class="code-block">
        <pre>test('displays products from API', async ({ page }) =&gt; {
  // Mock API response
  await page.route('/api/products', async (route) =&gt; {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        { id: 1, name: 'Product A', price: 29.99 },
        { id: 2, name: 'Product B', price: 49.99 },
      ]),
    });
  });

  await page.goto('/products');

  await expect(page.getByText('Product A')).toBeVisible();
  await expect(page.getByText('$29.99')).toBeVisible();
});

test('handles API error', async ({ page }) =&gt; {
  await page.route('/api/products', async (route) =&gt; {
    await route.fulfill({ status: 500 });
  });

  await page.goto('/products');

  await expect(page.getByText('Error loading products')).toBeVisible();
});</pre>
      </div>

      <h3>Visual Regression Testing</h3>
      <div class="code-block">
        <pre>test('homepage visual', async ({ page }) =&gt; {
  await page.goto('/');

  // Compare screenshot
  await expect(page).toHaveScreenshot('homepage.png');
});

test('button hover state', async ({ page }) =&gt; {
  await page.goto('/');

  const button = page.getByRole('button', { name: 'Get Started' });
  await button.hover();

  await expect(button).toHaveScreenshot('button-hover.png');
});

// Update snapshots: npx playwright test --update-snapshots</pre>
      </div>

      <h3>Running Tests</h3>
      <div class="code-block">
        <pre># Run all tests
npx playwright test

# Run specific file
npx playwright test tests/home.spec.ts

# Run in UI mode (great for debugging)
npx playwright test --ui

# Run in headed mode (see browser)
npx playwright test --headed

# Run specific project
npx playwright test --project=chromium

# Debug mode
npx playwright test --debug

# View report
npx playwright show-report</pre>
      </div>
    `,
    questions: [
      {
        id: "113-1",
        type: "mcq",
        question: "What does E2E testing verify?",
        options: [
          "Individual function behavior",
          "Component rendering in isolation",
          "Complete user flows across the entire application",
          "API response times"
        ],
        correctAnswer: "Complete user flows across the entire application",
        explanation: "E2E tests simulate real users interacting with your app, testing the full stack including frontend, backend, and database integration."
      },
      {
        id: "113-2",
        type: "mcq",
        question: "What is the purpose of storageState in Playwright?",
        options: [
          "To store test data",
          "To save and reuse authentication state across tests",
          "To cache API responses",
          "To manage test fixtures"
        ],
        correctAnswer: "To save and reuse authentication state across tests",
        explanation: "storageState saves cookies and localStorage after login, allowing subsequent tests to reuse the authenticated state without logging in again."
      },
      {
        id: "113-3",
        type: "mcq",
        question: "How do you mock API responses in Playwright?",
        options: [
          "Using jest.mock()",
          "Using page.route() to intercept and fulfill requests",
          "Modifying the server code",
          "Using environment variables"
        ],
        correctAnswer: "Using page.route() to intercept and fulfill requests",
        explanation: "page.route() intercepts network requests matching a pattern, allowing you to return mock responses without hitting the real API."
      },
      {
        id: "113-4",
        type: "descriptive",
        question: "Explain how to test an authentication flow with Playwright.",
        keywords: ["goto", "fill", "click", "expect", "URL", "cookie", "storageState"],
        explanation: "Navigate to login page, fill email and password fields using getByLabel, click login button, expect redirect to dashboard, verify user is shown. For authenticated tests, save storageState after login and configure project to reuse it."
      }
    ]
  },
  {
    id: 114,
    title: "Docker Basics",
    description: "Containerize your applications with Docker for consistent deployments",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 6,
    week: 2,
    category: "DevOps",
    content: `
      <h2>Docker Basics</h2>
      <p>Docker packages your application with all its dependencies into a container, ensuring it runs consistently across development, testing, and production.</p>

      <h3>Key Concepts</h3>
      <div class="code-block">
        <pre>// Image: A template containing your app and dependencies
// - Built from a Dockerfile
// - Immutable, versioned
// - Like a class in OOP

// Container: A running instance of an image
// - Isolated from host and other containers
// - Has its own filesystem, network
// - Like an object (instance of class)

// Dockerfile: Instructions to build an image
// Registry: Storage for images (Docker Hub, GitHub Container Registry)</pre>
      </div>

      <h3>Basic Dockerfile for Next.js</h3>
      <div class="code-block">
        <pre># Dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]</pre>
      </div>

      <h3>Building and Running</h3>
      <div class="code-block">
        <pre># Build image
docker build -t my-nextjs-app .

# Run container
docker run -p 3000:3000 my-nextjs-app

# Run in background (detached)
docker run -d -p 3000:3000 --name myapp my-nextjs-app

# View running containers
docker ps

# View logs
docker logs myapp
docker logs -f myapp  # Follow logs

# Stop container
docker stop myapp

# Remove container
docker rm myapp</pre>
      </div>

      <h3>Docker Compose</h3>
      <div class="code-block">
        <pre># docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - '3000:3000'
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/mydb
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - '5432:5432'

volumes:
  postgres_data:</pre>
      </div>

      <h3>Docker Compose Commands</h3>
      <div class="code-block">
        <pre># Start all services
docker-compose up

# Start in background
docker-compose up -d

# Rebuild and start
docker-compose up --build

# Stop all services
docker-compose down

# Stop and remove volumes
docker-compose down -v

# View logs
docker-compose logs
docker-compose logs app

# Execute command in container
docker-compose exec app sh</pre>
      </div>

      <h3>Environment Variables</h3>
      <div class="code-block">
        <pre># Option 1: In docker-compose.yml
services:
  app:
    environment:
      - NODE_ENV=production
      - API_KEY=secret

# Option 2: Using .env file
services:
  app:
    env_file:
      - .env.production

# Option 3: At runtime
docker run -e API_KEY=secret my-app</pre>
      </div>

      <h3>Volumes for Persistence</h3>
      <div class="code-block">
        <pre># Named volume (managed by Docker)
volumes:
  postgres_data:

services:
  db:
    volumes:
      - postgres_data:/var/lib/postgresql/data

# Bind mount (local directory)
services:
  app:
    volumes:
      - ./src:/app/src  # Hot reload during development

# Read-only volume
services:
  app:
    volumes:
      - ./config:/app/config:ro</pre>
      </div>

      <h3>Multi-Stage Builds</h3>
      <div class="code-block">
        <pre># Multi-stage builds reduce final image size

# Stage 1: Install all dependencies (including dev)
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Stage 2: Build the app
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production image (only production deps)
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production
CMD ["node", "dist/index.js"]

# Result: Small final image without build tools/dev deps</pre>
      </div>

      <h3>.dockerignore</h3>
      <div class="code-block">
        <pre># .dockerignore
node_modules
.next
.git
.env*.local
*.md
Dockerfile*
docker-compose*
.dockerignore
npm-debug.log*</pre>
      </div>

      <h3>Best Practices</h3>
      <div class="code-block">
        <pre># 1. Use specific versions
FROM node:20.10.0-alpine  # Not just node:alpine

# 2. Run as non-root user
RUN adduser -D appuser
USER appuser

# 3. Use multi-stage builds
# Smaller images, no build tools in production

# 4. Minimize layers
# BAD:
RUN npm install
RUN npm run build
RUN npm prune
# GOOD:
RUN npm install && npm run build && npm prune

# 5. Order commands by change frequency
# Least changing first (base image, deps)
# Most changing last (source code)</pre>
      </div>
    `,
    questions: [
      {
        id: "114-1",
        type: "mcq",
        question: "What is the difference between a Docker image and container?",
        options: [
          "They are the same thing",
          "Image is a template, container is a running instance",
          "Container is a template, image is a running instance",
          "Images run on servers, containers run locally"
        ],
        correctAnswer: "Image is a template, container is a running instance",
        explanation: "An image is an immutable template containing your app and dependencies. A container is a running instance of that image with its own isolated filesystem and network."
      },
      {
        id: "114-2",
        type: "mcq",
        question: "What is the purpose of multi-stage Docker builds?",
        options: [
          "To run multiple apps",
          "To reduce final image size by excluding build dependencies",
          "To build for multiple platforms",
          "To enable parallel builds"
        ],
        correctAnswer: "To reduce final image size by excluding build dependencies",
        explanation: "Multi-stage builds use separate stages for building and running. Only necessary files are copied to the final stage, excluding build tools and dev dependencies."
      },
      {
        id: "114-3",
        type: "mcq",
        question: "What does docker-compose do?",
        options: [
          "Compresses Docker images",
          "Manages multiple containers as a single application",
          "Compiles code faster",
          "Connects to Docker Hub"
        ],
        correctAnswer: "Manages multiple containers as a single application",
        explanation: "docker-compose defines and runs multi-container applications. It manages services, networks, and volumes from a single YAML file."
      },
      {
        id: "114-4",
        type: "descriptive",
        question: "Explain how to set up a Next.js app with PostgreSQL using docker-compose.",
        keywords: ["services", "depends_on", "volumes", "environment", "ports", "build"],
        explanation: "Define two services: app and db. App builds from Dockerfile, exposes port 3000, uses DATABASE_URL pointing to db service. Db uses postgres image, sets credentials via environment, persists data with volume. App depends_on db to start after database."
      }
    ]
  },
  {
    id: 115,
    title: "Accessibility (A11y)",
    description: "Build inclusive web applications that work for everyone",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 6,
    week: 3,
    category: "Best Practices",
    content: `
      <h2>Accessibility (A11y)</h2>
      <p>Web accessibility ensures your application is usable by everyone, including people with disabilities. It's not just ethical—it's often legally required and improves UX for all users.</p>

      <h3>Why Accessibility Matters</h3>
      <ul>
        <li><strong>Inclusion:</strong> ~15% of people have disabilities</li>
        <li><strong>Legal:</strong> Required by laws like ADA, WCAG compliance</li>
        <li><strong>SEO:</strong> Accessible sites rank better</li>
        <li><strong>UX:</strong> Benefits everyone (captions, keyboard nav)</li>
      </ul>

      <h3>Semantic HTML</h3>
      <div class="code-block">
        <pre>// BAD: Divs for everything
&lt;div class="header"&gt;
  &lt;div class="nav"&gt;
    &lt;div onclick="navigate()"&gt;Home&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

// GOOD: Semantic elements
&lt;header&gt;
  &lt;nav&gt;
    &lt;a href="/"&gt;Home&lt;/a&gt;
  &lt;/nav&gt;
&lt;/header&gt;

// Use semantic elements:
// header, nav, main, article, section, aside, footer
// button (not div with onclick)
// a (for links)
// h1-h6 in order (don't skip levels)</pre>
      </div>

      <h3>ARIA Labels</h3>
      <div class="code-block">
        <pre>// When semantic HTML isn't enough, use ARIA

// aria-label: Describes an element
&lt;button aria-label="Close menu"&gt;
  &lt;XIcon /&gt;
&lt;/button&gt;

// aria-labelledby: References another element's text
&lt;h2 id="billing"&gt;Billing Information&lt;/h2&gt;
&lt;section aria-labelledby="billing"&gt;...&lt;/section&gt;

// aria-describedby: Additional description
&lt;input
  id="email"
  aria-describedby="email-hint"
/&gt;
&lt;p id="email-hint"&gt;We'll never share your email&lt;/p&gt;

// aria-hidden: Hide decorative elements from screen readers
&lt;span aria-hidden="true"&gt;🔒&lt;/span&gt;

// aria-live: Announce dynamic content
&lt;div aria-live="polite"&gt;{statusMessage}&lt;/div&gt;</pre>
      </div>

      <h3>Keyboard Navigation</h3>
      <div class="code-block">
        <pre>// Ensure all interactive elements are keyboard accessible

// Use native elements (automatically focusable)
&lt;button&gt;Click me&lt;/button&gt;
&lt;a href="/page"&gt;Link&lt;/a&gt;
&lt;input type="text" /&gt;

// Custom components need tabIndex
&lt;div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) =&gt; {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
&gt;
  Custom Button
&lt;/div&gt;

// Focus management for modals
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() =&gt; {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  return isOpen ? (
    &lt;div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    &gt;
      {children}
      &lt;button onClick={onClose}&gt;Close&lt;/button&gt;
    &lt;/div&gt;
  ) : null;
}</pre>
      </div>

      <h3>Images and Alt Text</h3>
      <div class="code-block">
        <pre>// Meaningful images need descriptive alt text
&lt;img
  src="chart.png"
  alt="Bar chart showing sales increased 50% in Q4"
/&gt;

// Decorative images should have empty alt
&lt;img src="decoration.png" alt="" /&gt;

// Complex images need long descriptions
&lt;figure&gt;
  &lt;img
    src="infographic.png"
    alt="Company growth infographic"
    aria-describedby="infographic-desc"
  /&gt;
  &lt;figcaption id="infographic-desc"&gt;
    Detailed description of the infographic...
  &lt;/figcaption&gt;
&lt;/figure&gt;

// Icon buttons need labels
&lt;button aria-label="Delete item"&gt;
  &lt;TrashIcon aria-hidden="true" /&gt;
&lt;/button&gt;</pre>
      </div>

      <h3>Forms</h3>
      <div class="code-block">
        <pre>// Always associate labels with inputs
&lt;label htmlFor="email"&gt;Email&lt;/label&gt;
&lt;input id="email" type="email" /&gt;

// Required fields
&lt;label htmlFor="name"&gt;
  Name &lt;span aria-hidden="true"&gt;*&lt;/span&gt;
&lt;/label&gt;
&lt;input id="name" required aria-required="true" /&gt;

// Error messages
&lt;input
  id="email"
  type="email"
  aria-invalid={hasError}
  aria-describedby={hasError ? 'email-error' : undefined}
/&gt;
{hasError && (
  &lt;p id="email-error" role="alert"&gt;
    Please enter a valid email
  &lt;/p&gt;
)}

// Fieldsets for groups
&lt;fieldset&gt;
  &lt;legend&gt;Shipping Address&lt;/legend&gt;
  {/* form fields */}
&lt;/fieldset&gt;</pre>
      </div>

      <h3>Color and Contrast</h3>
      <div class="code-block">
        <pre>// Minimum contrast ratios (WCAG 2.1):
// Normal text: 4.5:1
// Large text (18px+): 3:1
// UI components: 3:1

// Don't rely on color alone
// BAD:
&lt;span style={{ color: 'red' }}&gt;Error&lt;/span&gt;

// GOOD:
&lt;span style={{ color: 'red' }}&gt;
  &lt;ErrorIcon aria-hidden="true" /&gt;
  Error: Please fix the following issues
&lt;/span&gt;

// Tools:
// - Chrome DevTools color contrast checker
// - axe DevTools extension
// - WebAIM Contrast Checker</pre>
      </div>

      <h3>Skip Links</h3>
      <div class="code-block">
        <pre>// Allow users to skip repetitive content
function Layout({ children }) {
  return (
    &lt;&gt;
      &lt;a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute"
      &gt;
        Skip to main content
      &lt;/a&gt;
      &lt;header&gt;{/* navigation */}&lt;/header&gt;
      &lt;main id="main-content"&gt;{children}&lt;/main&gt;
    &lt;/&gt;
  );
}

// CSS for screen-reader-only
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}</pre>
      </div>

      <h3>Testing Accessibility</h3>
      <div class="code-block">
        <pre># Tools and techniques:

# 1. Keyboard testing
# - Tab through entire page
# - Enter/Space to activate buttons
# - Escape to close modals
# - Arrow keys in menus

# 2. Screen reader testing
# - VoiceOver (Mac): Cmd + F5
# - NVDA (Windows): Free download
# - ChromeVox (Chrome extension)

# 3. Automated testing
npm install @axe-core/react

// In development
import React from 'react';
import ReactDOM from 'react-dom';

if (process.env.NODE_ENV !== 'production') {
  import('@axe-core/react').then(axe =&gt; {
    axe.default(React, ReactDOM, 1000);
  });
}

# 4. Browser extensions
# - axe DevTools
# - WAVE
# - Lighthouse</pre>
      </div>
    `,
    questions: [
      {
        id: "115-1",
        type: "mcq",
        question: "What is the purpose of aria-label?",
        options: [
          "To add a visible label",
          "To provide an accessible name for screen readers",
          "To style the element",
          "To add a tooltip"
        ],
        correctAnswer: "To provide an accessible name for screen readers",
        explanation: "aria-label provides an accessible name that screen readers announce, especially useful for icon buttons and elements without visible text."
      },
      {
        id: "115-2",
        type: "mcq",
        question: "What should you use instead of a div with onClick for a clickable element?",
        options: [
          "span with onClick",
          "A button element",
          "A link element",
          "div with role='link'"
        ],
        correctAnswer: "A button element",
        explanation: "The button element has built-in keyboard support and proper ARIA roles. Using div requires manually adding tabIndex, role, and keyboard handlers."
      },
      {
        id: "115-3",
        type: "mcq",
        question: "What alt attribute should decorative images have?",
        options: [
          "A detailed description",
          "The image filename",
          "Empty alt=\"\"",
          "No alt attribute"
        ],
        correctAnswer: "Empty alt=\"\"",
        explanation: "Decorative images should have alt=\"\" so screen readers skip them. Omitting alt entirely makes screen readers read the filename."
      },
      {
        id: "115-4",
        type: "descriptive",
        question: "Explain how to make a custom dropdown menu accessible.",
        keywords: ["role", "aria-expanded", "keyboard", "focus", "arrow keys", "tabIndex"],
        explanation: "Use role='menu' on container, role='menuitem' on options. Add aria-expanded to trigger. Handle keyboard: Enter opens, Escape closes, arrow keys navigate options. Manage focus when opened. Provide aria-label if no visible label."
      }
    ]
  },
  {
    id: 116,
    title: "OWASP Top 10 Security Risks",
    description: "Understand and prevent the most critical web security vulnerabilities",
    duration: "55 min",
    difficulty: "Advanced",
    month: 6,
    week: 3,
    category: "Security",
    content: `
      <h2>OWASP Top 10 Security Risks</h2>
      <p>The OWASP Top 10 is a list of the most critical security risks to web applications. Understanding these helps you build secure applications.</p>

      <h3>A01: Broken Access Control</h3>
      <div class="code-block">
        <pre>// Users accessing resources they shouldn't

// BAD: No authorization check
app.get('/api/users/:id', async (req, res) =&gt; {
  const user = await User.findById(req.params.id);
  res.json(user); // Anyone can view any user!
});

// GOOD: Check authorization
app.get('/api/users/:id', async (req, res) =&gt; {
  const requestedId = req.params.id;
  const currentUserId = req.user.id;

  // Only allow access to own profile or if admin
  if (requestedId !== currentUserId && !req.user.isAdmin) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const user = await User.findById(requestedId);
  res.json(user);
});</pre>
      </div>

      <h3>A02: Cryptographic Failures</h3>
      <div class="code-block">
        <pre>// Failing to properly protect sensitive data

// BAD: Storing passwords in plain text
await db.users.create({ password: req.body.password });

// GOOD: Hash passwords
import bcrypt from 'bcryptjs';
const hash = await bcrypt.hash(req.body.password, 12);
await db.users.create({ password: hash });

// BAD: Sensitive data in URL
&lt;a href="/reset?email=user@example.com"&gt;Reset&lt;/a&gt;

// GOOD: Use POST and tokens
&lt;form action="/reset" method="POST"&gt;...&lt;/form&gt;

// Always use HTTPS
// Encrypt sensitive data at rest</pre>
      </div>

      <h3>A03: Injection</h3>
      <div class="code-block">
        <pre>// SQL Injection
// BAD:
const query = \`SELECT * FROM users WHERE email = '\${email}'\`;
// Attacker input: '; DROP TABLE users; --

// GOOD: Parameterized queries
const user = await db.query(
  'SELECT * FROM users WHERE email = $1',
  [email]
);

// Or use an ORM
const user = await prisma.user.findUnique({
  where: { email }
});

// NoSQL Injection
// BAD:
const user = await User.findOne({ email: req.body.email });
// Attacker: { "email": { "$ne": null } }

// GOOD: Validate input type
if (typeof req.body.email !== 'string') {
  return res.status(400).json({ error: 'Invalid email' });
}</pre>
      </div>

      <h3>A04: Insecure Design</h3>
      <div class="code-block">
        <pre>// Security flaws in the design itself

// BAD: Security questions for password reset
// "What's your pet's name?" - Easily guessable

// GOOD: Secure reset flow
// 1. Generate random token
// 2. Send to verified email
// 3. Token expires in 1 hour
// 4. One-time use only

// BAD: Unlimited login attempts
// Enables brute force attacks

// GOOD: Rate limiting + account lockout
const attempts = await getLoginAttempts(email);
if (attempts &gt;= 5) {
  throw new Error('Account locked. Try again in 15 minutes.');
}</pre>
      </div>

      <h3>A05: Security Misconfiguration</h3>
      <div class="code-block">
        <pre>// Default credentials, unnecessary features enabled

// BAD: Exposing stack traces
app.use((err, req, res, next) =&gt; {
  res.status(500).json({
    error: err.message,
    stack: err.stack // Exposes internals!
  });
});

// GOOD: Generic error messages in production
app.use((err, req, res, next) =&gt; {
  console.error(err);
  res.status(500).json({
    error: process.env.NODE_ENV === 'production'
      ? 'Internal server error'
      : err.message
  });
});

// Security headers
// next.config.js
headers: [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
]</pre>
      </div>

      <h3>A06: Vulnerable Components</h3>
      <div class="code-block">
        <pre># Using packages with known vulnerabilities

# Check for vulnerabilities
npm audit

# Fix automatically
npm audit fix

# Use tools like Snyk or Dependabot
# for continuous monitoring

# Keep dependencies updated
npm outdated
npm update

# Lock dependency versions
# package-lock.json (commit it!)

# Review what you're installing
npm info &lt;package&gt;</pre>
      </div>

      <h3>A07: Identification Failures</h3>
      <div class="code-block">
        <pre>// Weak authentication mechanisms

// BAD: Weak passwords allowed
if (password.length &lt; 4) throw new Error('Too short');

// GOOD: Strong password requirements
const passwordSchema = z.string()
  .min(12, 'At least 12 characters')
  .regex(/[A-Z]/, 'At least one uppercase letter')
  .regex(/[a-z]/, 'At least one lowercase letter')
  .regex(/[0-9]/, 'At least one number')
  .regex(/[^A-Za-z0-9]/, 'At least one special character');

// Implement MFA for sensitive operations
// Use secure session management
// Don't expose whether email exists on login failure</pre>
      </div>

      <h3>A08: Software/Data Integrity Failures</h3>
      <div class="code-block">
        <pre>// Trusting unverified data or code

// BAD: Loading scripts from CDN without integrity check
&lt;script src="https://cdn.example.com/lib.js"&gt;&lt;/script&gt;

// GOOD: Subresource Integrity (SRI)
&lt;script
  src="https://cdn.example.com/lib.js"
  integrity="sha384-abc123..."
  crossorigin="anonymous"
&gt;&lt;/script&gt;

// Verify downloaded packages
// Use package-lock.json
// Sign your releases</pre>
      </div>

      <h3>A09: Security Logging Failures</h3>
      <div class="code-block">
        <pre>// Log security events for detection and forensics

// What to log:
// - Login attempts (success and failure)
// - Access control failures
// - Input validation failures
// - Server-side errors

// Example logging
async function login(email, password) {
  const user = await validateCredentials(email, password);

  if (!user) {
    logger.warn('Failed login attempt', {
      email,
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      timestamp: new Date().toISOString()
    });
    throw new AuthError('Invalid credentials');
  }

  logger.info('Successful login', {
    userId: user.id,
    ip: req.ip
  });
}</pre>
      </div>

      <h3>A10: Server-Side Request Forgery (SSRF)</h3>
      <div class="code-block">
        <pre>// Attacker tricks server into making requests

// BAD: Fetching arbitrary URLs
app.post('/fetch', async (req, res) =&gt; {
  const response = await fetch(req.body.url);
  res.json(await response.json());
});
// Attacker: { url: 'http://internal-service/admin' }

// GOOD: Validate and allowlist URLs
const ALLOWED_HOSTS = ['api.example.com', 'cdn.example.com'];

app.post('/fetch', async (req, res) =&gt; {
  const url = new URL(req.body.url);

  if (!ALLOWED_HOSTS.includes(url.host)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  const response = await fetch(url);
  res.json(await response.json());
});</pre>
      </div>
    `,
    questions: [
      {
        id: "116-1",
        type: "mcq",
        question: "What is the most common way to prevent SQL injection?",
        options: [
          "Input validation only",
          "Using HTTPS",
          "Parameterized queries/prepared statements",
          "Escaping special characters"
        ],
        correctAnswer: "Parameterized queries/prepared statements",
        explanation: "Parameterized queries separate SQL code from data, making it impossible to inject malicious SQL. The database treats parameters as data, not executable code."
      },
      {
        id: "116-2",
        type: "mcq",
        question: "What is broken access control?",
        options: [
          "CORS errors",
          "Users accessing resources without proper authorization checks",
          "Slow database queries",
          "Invalid API keys"
        ],
        correctAnswer: "Users accessing resources without proper authorization checks",
        explanation: "Broken access control allows users to access data or perform actions outside their intended permissions, like viewing other users' data or performing admin actions."
      },
      {
        id: "116-3",
        type: "mcq",
        question: "Why shouldn't you expose stack traces in production?",
        options: [
          "It's slow",
          "It reveals internal details attackers can exploit",
          "It's not useful",
          "It increases bandwidth"
        ],
        correctAnswer: "It reveals internal details attackers can exploit",
        explanation: "Stack traces expose file paths, library versions, and code structure that attackers can use to find vulnerabilities. Show generic errors in production."
      },
      {
        id: "116-4",
        type: "descriptive",
        question: "Explain how to prevent SSRF attacks in an application that fetches external URLs.",
        keywords: ["allowlist", "validate", "URL", "host", "internal", "private", "block"],
        explanation: "Validate URLs before fetching. Maintain an allowlist of permitted hosts. Block requests to internal/private IP ranges (127.0.0.1, 10.x.x.x, 192.168.x.x). Parse URLs and verify the hostname. Don't follow redirects to disallowed hosts."
      }
    ]
  },
  {
    id: 117,
    title: "Scalability Patterns",
    description: "Design systems that handle growth in users and data",
    duration: "50 min",
    difficulty: "Advanced",
    month: 6,
    week: 3,
    category: "Architecture",
    content: `
      <h2>Scalability Patterns</h2>
      <p>Scalable systems handle increased load by adding resources. Understanding scalability patterns helps you design systems that grow with your users.</p>

      <h3>Horizontal vs Vertical Scaling</h3>
      <div class="code-block">
        <pre>// Vertical Scaling (Scale Up)
// - Add more CPU, RAM to existing server
// - Simple, no code changes
// - Has limits (biggest available server)
// - Single point of failure

// Horizontal Scaling (Scale Out)
// - Add more servers
// - Requires code designed for distribution
// - Nearly unlimited scaling
// - More complex but more resilient

// Modern apps should design for horizontal scaling</pre>
      </div>

      <h3>Load Balancing</h3>
      <div class="code-block">
        <pre>// Distribute traffic across multiple servers

// Load balancer algorithms:
// - Round Robin: Cycle through servers
// - Least Connections: Send to server with fewest connections
// - IP Hash: Same client always goes to same server
// - Weighted: Send more traffic to powerful servers

// With nginx
upstream app_servers {
    server server1:3000;
    server server2:3000;
    server server3:3000;
}

server {
    listen 80;
    location / {
        proxy_pass http://app_servers;
    }
}

// Health checks
upstream app_servers {
    server server1:3000 max_fails=3 fail_timeout=30s;
    server server2:3000 max_fails=3 fail_timeout=30s;
}</pre>
      </div>

      <h3>Caching Strategies</h3>
      <div class="code-block">
        <pre>// Cache layers (fastest to slowest):
// 1. Browser cache (HTTP headers)
// 2. CDN (static assets, edge)
// 3. Application cache (Redis)
// 4. Database query cache

// Redis caching example
import Redis from 'ioredis';
const redis = new Redis();

async function getUser(id: string) {
  const cacheKey = \`user:\${id}\`;

  // Check cache first
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);

  // Cache miss - query database
  const user = await db.users.findUnique({ where: { id } });

  // Store in cache (expire in 1 hour)
  await redis.setex(cacheKey, 3600, JSON.stringify(user));

  return user;
}

// Cache invalidation (hard problem!)
async function updateUser(id: string, data: any) {
  await db.users.update({ where: { id }, data });
  await redis.del(\`user:\${id}\`); // Invalidate cache
}</pre>
      </div>

      <h3>Database Scaling</h3>
      <div class="code-block">
        <pre>// Read Replicas
// - Master handles writes
// - Replicas handle reads
// - Most apps are read-heavy (90%+)

// Connection pooling
// Don't create new connections per request
const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Database sharding
// Split data across multiple databases
// - By user ID: users 1-1M in DB1, 1M-2M in DB2
// - By region: US users in US DB, EU in EU DB
// - By feature: Posts in DB1, Comments in DB2

// Shard key selection is critical!
// Bad key = hot spots, uneven distribution</pre>
      </div>

      <h3>Async Processing</h3>
      <div class="code-block">
        <pre>// Don't make users wait for slow operations

// BAD: Synchronous email sending
app.post('/signup', async (req, res) =&gt; {
  const user = await createUser(req.body);
  await sendWelcomeEmail(user.email); // User waits!
  res.json({ success: true });
});

// GOOD: Queue for background processing
import { Queue } from 'bullmq';
const emailQueue = new Queue('emails');

app.post('/signup', async (req, res) =&gt; {
  const user = await createUser(req.body);
  await emailQueue.add('welcome', { email: user.email });
  res.json({ success: true }); // Immediate response
});

// Worker processes the queue
const worker = new Worker('emails', async (job) =&gt; {
  if (job.name === 'welcome') {
    await sendWelcomeEmail(job.data.email);
  }
});</pre>
      </div>

      <h3>CDN and Edge Computing</h3>
      <div class="code-block">
        <pre>// CDN: Serve static assets from edge locations

// Benefits:
// - Lower latency (closer to users)
// - Reduced server load
// - DDoS protection

// What to put on CDN:
// - Images, videos, fonts
// - CSS, JavaScript bundles
// - Static HTML

// Next.js + Vercel: Automatic edge deployment
// Images optimized and served from edge

// Edge functions: Run code at edge
export const runtime = 'edge';

export async function GET(request: Request) {
  // Runs at edge, low latency
  return Response.json({ location: request.geo?.city });
}</pre>
      </div>

      <h3>Microservices vs Monolith</h3>
      <div class="code-block">
        <pre>// Monolith
// - Single deployable unit
// - Simpler to develop, test, deploy
// - Scales entire app together
// - Good for: startups, small teams

// Microservices
// - Multiple independent services
// - Scale services independently
// - Different tech stacks per service
// - Complex: networking, coordination
// - Good for: large teams, specific scaling needs

// Start with monolith, extract services when needed
// Don't prematurely optimize!

// Service communication:
// - HTTP/REST: Simple, well understood
// - gRPC: Efficient, typed contracts
// - Message queues: Async, decoupled</pre>
      </div>

      <h3>Rate Limiting</h3>
      <div class="code-block">
        <pre>// Protect your system from overload

import rateLimit from 'express-rate-limit';

// Basic rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: 'Too many requests, try again later',
});

app.use('/api', limiter);

// Different limits for different endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // Only 5 login attempts
});

app.use('/api/login', authLimiter);

// Distributed rate limiting with Redis
// (for multiple server instances)</pre>
      </div>

      <h3>Monitoring and Auto-scaling</h3>
      <div class="code-block">
        <pre>// Key metrics to monitor:
// - Response time (p50, p95, p99)
// - Error rate
// - CPU/Memory usage
// - Request rate
// - Database connections

// Auto-scaling rules:
// - Scale up when CPU &gt; 70% for 5 minutes
// - Scale down when CPU &lt; 30% for 10 minutes
// - Min: 2 instances, Max: 10

// Tools:
// - AWS Auto Scaling
// - Kubernetes HPA
// - Vercel (automatic)</pre>
      </div>
    `,
    questions: [
      {
        id: "117-1",
        type: "mcq",
        question: "What is the main advantage of horizontal scaling over vertical?",
        options: [
          "It's simpler to implement",
          "It's cheaper initially",
          "Near unlimited scaling potential and no single point of failure",
          "It requires no code changes"
        ],
        correctAnswer: "Near unlimited scaling potential and no single point of failure",
        explanation: "Horizontal scaling adds more servers, providing virtually unlimited scaling and redundancy. Vertical scaling is limited by the biggest available server and still has one failure point."
      },
      {
        id: "117-2",
        type: "mcq",
        question: "Why use message queues for sending emails in a web app?",
        options: [
          "Emails are faster through queues",
          "To not make users wait for slow email operations",
          "Queues are more secure",
          "Email servers require queues"
        ],
        correctAnswer: "To not make users wait for slow email operations",
        explanation: "Email sending can take seconds. Using a queue lets the API respond immediately while a background worker handles the email. Better user experience and system resilience."
      },
      {
        id: "117-3",
        type: "mcq",
        question: "What is the hardest problem in caching?",
        options: [
          "Storing data",
          "Reading data",
          "Cache invalidation",
          "Cache size"
        ],
        correctAnswer: "Cache invalidation",
        explanation: "Knowing when to invalidate (clear) cached data is notoriously difficult. Stale data causes bugs, but invalidating too often defeats the purpose of caching."
      },
      {
        id: "117-4",
        type: "descriptive",
        question: "Explain how to implement a caching layer with cache invalidation for user profiles.",
        keywords: ["redis", "get", "set", "expire", "invalidate", "update", "delete", "cache key"],
        explanation: "On read: check Redis cache first, return if found, else query DB and cache result with expiry. On update: update DB then delete cache key (or update it). Use consistent cache keys like 'user:{id}'. Consider cache-aside or write-through patterns."
      }
    ]
  },
  {
    id: 118,
    title: "Open Source Contribution",
    description: "Learn to contribute to open source projects and build your reputation",
    duration: "40 min",
    difficulty: "Intermediate",
    month: 6,
    week: 4,
    category: "Career",
    content: `
      <h2>Open Source Contribution</h2>
      <p>Contributing to open source is one of the best ways to learn, build your portfolio, and connect with the developer community.</p>

      <h3>Why Contribute?</h3>
      <ul>
        <li><strong>Learn:</strong> Read and write production code</li>
        <li><strong>Portfolio:</strong> Public proof of your skills</li>
        <li><strong>Network:</strong> Connect with developers worldwide</li>
        <li><strong>Give back:</strong> Improve tools you use daily</li>
        <li><strong>Career:</strong> Many jobs value OSS contributors</li>
      </ul>

      <h3>Finding Projects</h3>
      <div class="code-block">
        <pre># Good starting points:

# 1. Projects you already use
# - Found a bug? Fix it!
# - Missing a feature? Add it!

# 2. First-timer friendly labels
# - "good first issue"
# - "help wanted"
# - "beginner friendly"
# - "first-timers-only"

# 3. Websites
# - github.com/explore
# - goodfirstissue.dev
# - up-for-grabs.net
# - firstcontributions.github.io

# 4. Hacktoberfest (October)
# - Great for first contributions</pre>
      </div>

      <h3>Types of Contributions</h3>
      <div class="code-block">
        <pre># Not just code!

# Documentation
- Fix typos
- Add examples
- Improve clarity
- Translate docs

# Code
- Bug fixes
- New features
- Tests
- Performance improvements

# Community
- Answer questions
- Review PRs
- Report bugs with details
- Write tutorials

# Start with docs - low barrier, high impact!</pre>
      </div>

      <h3>Making Your First Contribution</h3>
      <div class="code-block">
        <pre># Step 1: Fork the repository
# Click "Fork" on GitHub

# Step 2: Clone your fork
git clone https://github.com/YOUR_USERNAME/project.git
cd project

# Step 3: Add upstream remote
git remote add upstream https://github.com/ORIGINAL_OWNER/project.git

# Step 4: Create a branch
git checkout -b fix-typo-in-readme

# Step 5: Make changes
# Edit files...

# Step 6: Commit with good message
git add .
git commit -m "docs: fix typo in README installation section"

# Step 7: Push to your fork
git push origin fix-typo-in-readme

# Step 8: Open Pull Request
# Go to GitHub, click "Compare & pull request"</pre>
      </div>

      <h3>Writing Good Commit Messages</h3>
      <div class="code-block">
        <pre># Follow Conventional Commits

# Format: type(scope): description

# Types:
feat: new feature
fix: bug fix
docs: documentation
style: formatting (no code change)
refactor: code restructuring
test: adding tests
chore: maintenance

# Examples:
git commit -m "feat(auth): add Google OAuth support"
git commit -m "fix(api): handle null user in profile endpoint"
git commit -m "docs(readme): add installation instructions"

# Good commit message:
# - Imperative mood ("add" not "added")
# - Under 72 characters
# - Explain what and why, not how</pre>
      </div>

      <h3>Writing Good Pull Requests</h3>
      <div class="code-block">
        <pre># PR Title
# Clear and descriptive
"Fix: Handle edge case in user validation"

# PR Description
## What
Brief description of changes

## Why
Context and motivation

## How
Implementation details if complex

## Testing
- [ ] Added tests
- [ ] Manual testing steps

## Screenshots (if UI changes)
Before: [image]
After: [image]

## Related Issues
Fixes #123</pre>
      </div>

      <h3>Syncing Your Fork</h3>
      <div class="code-block">
        <pre># Keep your fork updated with upstream

# Fetch upstream changes
git fetch upstream

# Switch to main branch
git checkout main

# Merge upstream changes
git merge upstream/main

# Push to your fork
git push origin main

# Rebase your feature branch (if needed)
git checkout my-feature-branch
git rebase main</pre>
      </div>

      <h3>Code Review Etiquette</h3>
      <div class="code-block">
        <pre># As a contributor:
- Be patient (maintainers are volunteers)
- Respond to feedback constructively
- Thank reviewers for their time
- Make requested changes promptly
- Ask questions if unclear

# Responding to feedback:
"Thanks for the review! I've made the changes you suggested."
"I'm not sure I understand this comment. Could you clarify?"
"I chose this approach because X. Would you prefer Y instead?"

# Don't take criticism personally
# Focus on improving the code</pre>
      </div>

      <h3>Building Your Open Source Profile</h3>
      <div class="code-block">
        <pre># Consistency matters more than size

# Start small:
1. Fix typos in docs
2. Add missing tests
3. Fix small bugs
4. Add features

# Be consistent:
- Contribute regularly (even if small)
- Follow up on your PRs
- Help other contributors

# Create your own projects:
- Solve a problem you have
- Document it well
- Be responsive to issues

# Good profile:
- Pinned repositories
- Contribution graph (green squares!)
- README.md on profile
- Clear commit messages</pre>
      </div>

      <h3>Common Mistakes to Avoid</h3>
      <div class="code-block">
        <pre># Don't:
- Submit PRs without reading CONTRIBUTING.md
- Make huge changes without discussing first
- Ignore the project's code style
- Get upset if PR is rejected
- Submit work-in-progress as ready

# Do:
- Read project guidelines first
- Start with small changes
- Follow existing patterns
- Communicate early and often
- Test your changes</pre>
      </div>
    `,
    questions: [
      {
        id: "118-1",
        type: "mcq",
        question: "What is the best type of first contribution to open source?",
        options: [
          "A major new feature",
          "Rewriting core functionality",
          "Documentation fixes or small bug fixes",
          "Performance optimizations"
        ],
        correctAnswer: "Documentation fixes or small bug fixes",
        explanation: "Starting small lets you learn the contribution process with low risk. Docs fixes are always appreciated, help you understand the project, and have high acceptance rates."
      },
      {
        id: "118-2",
        type: "mcq",
        question: "What should you do before making significant changes?",
        options: [
          "Just submit the PR",
          "Discuss with maintainers via issue or discussion",
          "Fork and work in secret",
          "Wait for permission"
        ],
        correctAnswer: "Discuss with maintainers via issue or discussion",
        explanation: "Discussing first prevents wasted effort on unwanted features or duplicate work. Maintainers can provide guidance and context you might miss."
      },
      {
        id: "118-3",
        type: "mcq",
        question: "How should you respond to critical code review feedback?",
        options: [
          "Argue why your approach is better",
          "Ignore the feedback",
          "Thank the reviewer and address concerns constructively",
          "Close the PR immediately"
        ],
        correctAnswer: "Thank the reviewer and address concerns constructively",
        explanation: "Constructive response builds relationships and improves code. Reviewers volunteer their time. If you disagree, explain your reasoning calmly and be open to compromise."
      },
      {
        id: "118-4",
        type: "descriptive",
        question: "Describe the process of making your first pull request to an open source project.",
        keywords: ["fork", "clone", "branch", "commit", "push", "pull request", "upstream"],
        explanation: "Fork the repo on GitHub. Clone your fork locally. Add upstream remote. Create a feature branch. Make changes, commit with good message. Push to your fork. Open PR on GitHub with clear description. Respond to feedback and make changes if needed."
      }
    ]
  },
  {
    id: 119,
    title: "System Design Basics",
    description: "Learn to design scalable systems for technical interviews",
    duration: "55 min",
    difficulty: "Advanced",
    month: 6,
    week: 4,
    category: "Career",
    content: `
      <h2>System Design Basics</h2>
      <p>System design involves designing the architecture of complex systems. It's crucial for senior roles and tests your ability to think at scale.</p>

      <h3>System Design Interview Process</h3>
      <div class="code-block">
        <pre># 45-60 minute interview structure:

# 1. Requirements Clarification (5 min)
- Functional: What features?
- Non-functional: Scale, latency, availability?

# 2. Estimations (5 min)
- Users, requests/second, storage

# 3. High-Level Design (10 min)
- Main components
- How they interact

# 4. Deep Dive (20 min)
- Database schema
- API design
- Specific algorithms

# 5. Bottlenecks & Improvements (10 min)
- What could fail?
- How to scale?</pre>
      </div>

      <h3>Gathering Requirements</h3>
      <div class="code-block">
        <pre># Good questions to ask:

# Functional
"What features are most important?"
"Who are the users?"
"What operations: read, write, or both?"
"Should it support real-time updates?"

# Non-functional
"How many users?"
"What's the acceptable latency?"
"What availability is needed? (99.9%?)"
"Should we prioritize consistency or availability?"

# Constraints
"What's the expected growth?"
"Any geographic distribution?"
"What's the budget/timeline?"

# Example: Design Twitter
# - Can users post tweets? (yes)
# - Can users follow others? (yes)
# - Do we need a timeline? (yes)
# - How many users? (500M)
# - Tweets per second? (50K writes, 500K reads)</pre>
      </div>

      <h3>Back of Envelope Calculations</h3>
      <div class="code-block">
        <pre># Common numbers to know:
1 KB = 1,000 bytes
1 MB = 1,000 KB
1 GB = 1,000 MB
1 TB = 1,000 GB

# Time:
1 day = 86,400 seconds ≈ 100K seconds
1 month ≈ 2.5M seconds
1 year ≈ 30M seconds

# Example: Twitter storage
# 500M users, 20% active daily
# 2 tweets per active user per day
# Tweet: 280 chars + metadata ≈ 1 KB

# Daily tweets: 500M * 0.2 * 2 = 200M tweets
# Daily storage: 200M * 1KB = 200 GB
# Yearly storage: 200 GB * 365 = 73 TB</pre>
      </div>

      <h3>Common Components</h3>
      <div class="code-block">
        <pre># Web Servers
- Handle HTTP requests
- Stateless for horizontal scaling

# Load Balancer
- Distribute traffic
- Health checks
- SSL termination

# Application Servers
- Business logic
- API endpoints

# Database
- SQL: Structured, ACID, relationships
- NoSQL: Flexible, scalable, eventual consistency

# Cache (Redis/Memcached)
- Reduce database load
- Session storage
- Rate limiting

# Message Queue (Kafka/RabbitMQ)
- Async processing
- Decouple services

# CDN
- Static content
- Global distribution</pre>
      </div>

      <h3>Database Design</h3>
      <div class="code-block">
        <pre># SQL vs NoSQL decision:
# SQL when:
- Complex queries needed
- Strong consistency required
- Relationships are important

# NoSQL when:
- Flexible schema needed
- Massive scale (millions of ops/sec)
- Eventual consistency acceptable

# Example: URL Shortener
# Table: urls
# - id (auto-generated)
# - short_code (indexed, unique)
# - original_url
# - user_id (optional)
# - created_at
# - click_count

# Indexing strategy:
# - Primary key on id
# - Unique index on short_code (for redirects)
# - Index on user_id (for user's URLs)</pre>
      </div>

      <h3>API Design</h3>
      <div class="code-block">
        <pre># RESTful API example: URL Shortener

# Create short URL
POST /api/urls
Body: { "url": "https://example.com/very/long/path" }
Response: { "short_code": "abc123", "short_url": "https://short.ly/abc123" }

# Redirect (called when user visits short URL)
GET /:short_code
Response: 301 Redirect to original URL

# Get URL stats
GET /api/urls/:short_code/stats
Response: { "clicks": 1000, "created_at": "2024-01-01" }

# Pagination
GET /api/users/:id/urls?page=1&limit=20

# Rate limiting headers
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1699900000</pre>
      </div>

      <h3>Example: Design a URL Shortener</h3>
      <div class="code-block">
        <pre># Requirements:
# - Shorten URLs
# - Redirect short URLs
# - Track click analytics
# - 100M URLs/month, 10:1 read:write ratio

# High-level design:
User -> Load Balancer -> Web Servers -> Database
                      -> Cache (for popular URLs)
                      -> Analytics Queue

# Short code generation:
# Option 1: Counter + Base62 encoding
# Option 2: Random + collision check
# Option 3: Hash + take first N chars

# Database:
# - PostgreSQL for URL storage
# - Redis for caching hot URLs
# - ClickHouse for analytics

# Scaling:
# - Cache frequently accessed URLs
# - Database read replicas
# - Geo-distributed servers
# - CDN for static content</pre>
      </div>

      <h3>Trade-offs to Discuss</h3>
      <div class="code-block">
        <pre># CAP Theorem
# Can only have 2 of 3:
# - Consistency
# - Availability
# - Partition tolerance

# Latency vs Consistency
# - Eventual consistency is faster
# - Strong consistency has higher latency

# Cost vs Performance
# - More servers = more cost
# - Caching reduces cost but adds complexity

# Simplicity vs Features
# - Start simple, add complexity when needed
# - Every feature has a cost

# Always articulate trade-offs!
"We could use X which gives us A but costs B.
Alternatively, Y gives us C but costs D.
Given our requirements, I'd recommend X because..."</pre>
      </div>
    `,
    questions: [
      {
        id: "119-1",
        type: "mcq",
        question: "What should you do FIRST in a system design interview?",
        options: [
          "Start drawing components",
          "Ask clarifying questions about requirements",
          "Calculate storage requirements",
          "Discuss trade-offs"
        ],
        correctAnswer: "Ask clarifying questions about requirements",
        explanation: "Always clarify requirements first. Different assumptions lead to different designs. Understanding scale, features, and constraints is essential before designing."
      },
      {
        id: "119-2",
        type: "mcq",
        question: "According to the CAP theorem, what can a distributed system NOT have?",
        options: [
          "Caching and persistence",
          "All three: Consistency, Availability, and Partition Tolerance",
          "Multiple servers",
          "Load balancing"
        ],
        correctAnswer: "All three: Consistency, Availability, and Partition Tolerance",
        explanation: "CAP theorem states distributed systems can only guarantee 2 of 3 properties. During a network partition, you must choose between consistency (reject requests) or availability (serve potentially stale data)."
      },
      {
        id: "119-3",
        type: "mcq",
        question: "Why use a cache in front of your database?",
        options: [
          "To store more data",
          "To reduce database load and improve read latency",
          "To make writes faster",
          "To improve security"
        ],
        correctAnswer: "To reduce database load and improve read latency",
        explanation: "Caches store frequently accessed data in memory, which is much faster than disk. This reduces database queries and latency, especially for read-heavy workloads."
      },
      {
        id: "119-4",
        type: "descriptive",
        question: "Design a high-level architecture for a URL shortening service.",
        keywords: ["load balancer", "web servers", "database", "cache", "short code", "redirect", "analytics"],
        explanation: "Load balancer distributes traffic to stateless web servers. Servers handle create (POST) and redirect (GET) requests. Database stores URL mappings with short_code index. Redis cache stores hot URLs. Generate unique short codes via counter/hash. Queue analytics events for async processing. Consider CDN for global distribution."
      }
    ]
  },
  {
    id: 120,
    title: "Technical Interview Preparation",
    description: "Prepare effectively for technical interviews at top companies",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 6,
    week: 4,
    category: "Career",
    content: `
      <h2>Technical Interview Preparation</h2>
      <p>Technical interviews test your problem-solving, coding skills, and ability to communicate. Good preparation significantly improves your chances.</p>

      <h3>Interview Types</h3>
      <div class="code-block">
        <pre># 1. Coding/Algorithm
- Data structures
- Algorithms
- Problem solving
- Platform: LeetCode, HackerRank

# 2. System Design
- Architecture
- Scalability
- Trade-offs
- Senior roles mostly

# 3. Frontend Specific
- DOM manipulation
- React concepts
- CSS challenges
- Browser APIs

# 4. Behavioral
- Past experiences
- Teamwork
- Conflict resolution
- Leadership

# 5. Take-Home
- Build a project
- 4-8 hours typically
- Code quality matters</pre>
      </div>

      <h3>Coding Interview Framework</h3>
      <div class="code-block">
        <pre># UMPIRE Framework:

# U - Understand
- Restate the problem
- Ask clarifying questions
- Identify inputs/outputs
- Note edge cases

# M - Match
- What patterns apply?
- Similar problems you've seen?
- Data structures to use?

# P - Plan
- Outline your approach
- Walk through with example
- Get interviewer buy-in

# I - Implement
- Write clean code
- Talk through as you code
- Use meaningful names

# R - Review
- Trace through your code
- Check edge cases
- Analyze complexity

# E - Evaluate
- Time complexity
- Space complexity
- Can we optimize?</pre>
      </div>

      <h3>Common Data Structures</h3>
      <div class="code-block">
        <pre># Arrays
- Access: O(1)
- Search: O(n)
- Insert/Delete: O(n)

# Hash Maps
- Access/Insert/Delete: O(1) average
- Use for: counting, lookups, caching

# Linked Lists
- Insert/Delete: O(1) if you have the node
- Access: O(n)
- Use for: queues, undo functionality

# Stacks (LIFO)
- Push/Pop: O(1)
- Use for: parentheses matching, undo

# Queues (FIFO)
- Enqueue/Dequeue: O(1)
- Use for: BFS, task scheduling

# Trees/Graphs
- Search/Insert: O(log n) for balanced trees
- Use for: hierarchical data, networks

# Know when to use each!</pre>
      </div>

      <h3>Problem-Solving Patterns</h3>
      <div class="code-block">
        <pre># Two Pointers
// Finding pairs in sorted array
function twoSum(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left &lt; right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum &lt; target) left++;
    else right--;
  }
  return [];
}

# Sliding Window
// Max sum of subarray of size k
function maxSubarraySum(arr, k) {
  let maxSum = 0, windowSum = 0;
  for (let i = 0; i &lt; arr.length; i++) {
    windowSum += arr[i];
    if (i &gt;= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[i - k + 1];
    }
  }
  return maxSum;
}</pre>
      </div>

      <h3>Frontend Interview Topics</h3>
      <div class="code-block">
        <pre># JavaScript Concepts
- Closures
- this keyword
- Prototypes
- Event loop
- Promises/async-await
- ES6+ features

# React Concepts
- Virtual DOM
- Component lifecycle
- Hooks (useState, useEffect, useMemo)
- State management
- Performance optimization

# CSS
- Box model
- Flexbox
- Grid
- Responsive design
- Specificity

# DOM/Browser
- Event delegation
- Local storage
- Web APIs
- Performance optimization</pre>
      </div>

      <h3>Behavioral Interview (STAR Method)</h3>
      <div class="code-block">
        <pre># STAR Format:
S - Situation: Context
T - Task: Your responsibility
A - Action: What you did
R - Result: Outcome (quantify if possible)

# Example Question:
"Tell me about a time you had a conflict with a teammate."

# Example Answer:
S: "On my last project, a senior developer and I disagreed
    about whether to use GraphQL or REST for our API."

T: "I needed to make a technical decision that the whole
    team would commit to."

A: "I scheduled a meeting, prepared pros/cons for each
    approach based on our specific needs, and facilitated
    a discussion. I acknowledged his concerns and
    suggested we prototype both."

R: "We chose REST because it fit our use case better,
    but incorporated some GraphQL principles. The senior
    developer appreciated being heard, and we shipped
    on time with a well-documented API."</pre>
      </div>

      <h3>Questions to Ask Interviewers</h3>
      <div class="code-block">
        <pre># About the Role
"What does a typical day look like?"
"What are the biggest challenges for this role?"
"What does success look like in 6 months?"

# About the Team
"How is the team structured?"
"What's the code review process like?"
"How do you handle technical disagreements?"

# About Growth
"What learning opportunities are available?"
"How are engineers promoted here?"
"Can you share an example of someone who grew here?"

# About the Company
"What's the company's biggest challenge right now?"
"What do you enjoy most about working here?"
"What would you change if you could?"</pre>
      </div>

      <h3>Practice Resources</h3>
      <div class="code-block">
        <pre># Coding
- LeetCode (start with Easy, move to Medium)
- NeetCode.io (curated lists with videos)
- AlgoExpert
- HackerRank

# System Design
- "Designing Data-Intensive Applications" book
- System Design Primer (GitHub)
- ByteByteGo

# Mock Interviews
- Pramp (free peer practice)
- Interviewing.io
- Practice with friends

# Daily Practice Schedule
Week 1-2: Easy problems (2/day)
Week 3-4: Medium problems (1-2/day)
Week 5-6: Mix + system design
Week 7-8: Mock interviews + review</pre>
      </div>
    `,
    questions: [
      {
        id: "120-1",
        type: "mcq",
        question: "What is the FIRST step when solving a coding problem?",
        options: [
          "Start coding immediately",
          "Understand the problem and ask clarifying questions",
          "Optimize for performance",
          "Write test cases"
        ],
        correctAnswer: "Understand the problem and ask clarifying questions",
        explanation: "Understanding prevents solving the wrong problem. Ask about inputs, outputs, constraints, and edge cases before coding. Interviewers often intentionally leave things ambiguous."
      },
      {
        id: "120-2",
        type: "mcq",
        question: "What does STAR stand for in behavioral interviews?",
        options: [
          "Strategy, Tactics, Action, Result",
          "Situation, Task, Action, Result",
          "Story, Theme, Action, Reflection",
          "Setup, Timeline, Approach, Resolution"
        ],
        correctAnswer: "Situation, Task, Action, Result",
        explanation: "STAR structures your behavioral answers: describe the Situation (context), your Task (responsibility), the Action you took, and the Result (preferably quantified)."
      },
      {
        id: "120-3",
        type: "mcq",
        question: "Which data structure is best for O(1) lookups?",
        options: [
          "Array",
          "Linked List",
          "Hash Map",
          "Binary Tree"
        ],
        correctAnswer: "Hash Map",
        explanation: "Hash maps provide O(1) average-case lookup, insert, and delete operations. They're ideal when you need to quickly check if something exists or retrieve associated values."
      },
      {
        id: "120-4",
        type: "descriptive",
        question: "Explain the two-pointer technique and when to use it.",
        keywords: ["sorted", "array", "left", "right", "O(n)", "pairs", "sum", "pointers"],
        explanation: "Two pointers start at different positions (often start and end) and move toward each other based on conditions. Use for: finding pairs in sorted arrays, reversing, detecting cycles. Reduces O(n²) to O(n). Example: two sum in sorted array - if sum too small, move left pointer right; if too big, move right pointer left."
      }
    ]
  },
  {
    id: 121,
    title: "Capstone Project Part 1: Planning & Architecture",
    description: "Design and plan a full-stack SaaS application from scratch",
    duration: "60 min",
    difficulty: "Advanced",
    month: 6,
    week: 4,
    category: "Projects",
    content: `
      <h2>Capstone Project Part 1: Planning & Architecture</h2>
      <p>Build a production-ready SaaS application that demonstrates all your full-stack skills. This lesson covers planning, architecture, and initial setup.</p>

      <h3>Project: TaskFlow - Project Management SaaS</h3>
      <div class="code-block">
        <pre># Features:
- User authentication (email + OAuth)
- Create/manage projects
- Create/assign/track tasks
- Team collaboration
- Real-time updates
- Notifications
- Dashboard with analytics

# Tech Stack:
- Frontend: Next.js 14 (App Router)
- Styling: Tailwind CSS + shadcn/ui
- Database: PostgreSQL (Supabase)
- Auth: Supabase Auth
- Real-time: Supabase Realtime
- Deployment: Vercel</pre>
      </div>

      <h3>Database Schema Design</h3>
      <div class="code-block">
        <pre>-- Users (handled by Supabase Auth)
-- Extended profile in public schema
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Organizations/Workspaces
CREATE TABLE organizations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  owner_id UUID REFERENCES profiles(id) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Organization Members
CREATE TABLE org_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member')),
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(org_id, user_id)
);

-- Projects
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'active',
  created_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tasks
CREATE TABLE tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'todo' CHECK (status IN ('todo', 'in_progress', 'review', 'done')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  assignee_id UUID REFERENCES profiles(id),
  due_date DATE,
  created_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);</pre>
      </div>

      <h3>Project Structure</h3>
      <div class="code-block">
        <pre>taskflow/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── page.tsx (dashboard home)
│   │   ├── projects/
│   │   │   ├── page.tsx (list)
│   │   │   ├── [id]/page.tsx (detail)
│   │   │   └── new/page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   ├── api/
│   │   └── webhooks/
│   ├── layout.tsx
│   └── page.tsx (landing)
├── components/
│   ├── ui/ (shadcn components)
│   ├── auth/
│   ├── dashboard/
│   ├── projects/
│   └── tasks/
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   ├── utils.ts
│   └── validations.ts
├── hooks/
├── types/
└── middleware.ts</pre>
      </div>

      <h3>Initial Setup</h3>
      <div class="code-block">
        <pre># Create Next.js app
npx create-next-app@latest taskflow --typescript --tailwind --app

# Install dependencies
npm install @supabase/supabase-js @supabase/ssr
npm install zod react-hook-form @hookform/resolvers
npm install date-fns lucide-react

# Add shadcn/ui
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input form dialog

# Environment variables (.env.local)
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000</pre>
      </div>

      <h3>Supabase Client Setup</h3>
      <div class="code-block">
        <pre>// lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// lib/supabase/server.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =&gt;
            cookieStore.set(name, value, options)
          );
        },
      },
    }
  );
}</pre>
      </div>

      <h3>Type Definitions</h3>
      <div class="code-block">
        <pre>// types/database.ts
export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  owner_id: string;
  created_at: string;
}

export interface Project {
  id: string;
  org_id: string;
  name: string;
  description: string | null;
  status: string;
  created_by: string;
  created_at: string;
}

export interface Task {
  id: string;
  project_id: string;
  title: string;
  description: string | null;
  status: 'todo' | 'in_progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignee_id: string | null;
  due_date: string | null;
  created_by: string;
  created_at: string;
}</pre>
      </div>

      <h3>Authentication Middleware</h3>
      <div class="code-block">
        <pre>// middleware.ts
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll(); },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =&gt; {
            request.cookies.set(name, value);
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  // Protected routes
  if (!user && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirect logged-in users from auth pages
  if (user && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup'],
};</pre>
      </div>

      <h3>Row Level Security</h3>
      <div class="code-block">
        <pre>-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE org_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can read any profile, update own
CREATE POLICY "Profiles are viewable by everyone"
ON profiles FOR SELECT USING (true);

CREATE POLICY "Users can update own profile"
ON profiles FOR UPDATE USING (auth.uid() = id);

-- Organizations: Members can view their orgs
CREATE POLICY "Org members can view organization"
ON organizations FOR SELECT
USING (id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid()));

-- Tasks: Project members can manage tasks
CREATE POLICY "Project members can view tasks"
ON tasks FOR SELECT
USING (
  project_id IN (
    SELECT p.id FROM projects p
    JOIN org_members om ON p.org_id = om.org_id
    WHERE om.user_id = auth.uid()
  )
);</pre>
      </div>
    `,
    questions: [
      {
        id: "121-1",
        type: "mcq",
        question: "Why use Row Level Security (RLS) instead of checking permissions in application code?",
        options: [
          "It's faster",
          "Security at the database level can't be bypassed by application bugs",
          "It's easier to implement",
          "It works offline"
        ],
        correctAnswer: "Security at the database level can't be bypassed by application bugs",
        explanation: "RLS policies are enforced by the database itself. Even if application code has bugs or is bypassed, the database prevents unauthorized access. Defense in depth."
      },
      {
        id: "121-2",
        type: "mcq",
        question: "What's the purpose of the org_members junction table?",
        options: [
          "To store organization settings",
          "To model the many-to-many relationship between users and organizations",
          "To cache user data",
          "To handle authentication"
        ],
        correctAnswer: "To model the many-to-many relationship between users and organizations",
        explanation: "Users can belong to multiple organizations, and organizations have multiple members. A junction table with foreign keys to both tables models this relationship and can store additional data like role."
      },
      {
        id: "121-3",
        type: "mcq",
        question: "Why separate auth routes into (auth) group folder?",
        options: [
          "It's required by Next.js",
          "To share a different layout without the dashboard sidebar",
          "For better performance",
          "To hide them from users"
        ],
        correctAnswer: "To share a different layout without the dashboard sidebar",
        explanation: "Route groups (folders in parentheses) allow sharing layouts without affecting URL structure. Auth pages need a different layout than the dashboard - no sidebar, different styling."
      },
      {
        id: "121-4",
        type: "descriptive",
        question: "Explain the database schema design for a multi-tenant project management app.",
        keywords: ["organizations", "members", "projects", "tasks", "foreign key", "role", "RLS"],
        explanation: "Organizations are top-level tenants. org_members links users to orgs with roles. Projects belong to orgs. Tasks belong to projects. RLS policies check org membership through joins to ensure users only access their organization's data."
      }
    ]
  },
  {
    id: 122,
    title: "Capstone Project Part 2: Implementation & Deployment",
    description: "Build and deploy your full-stack SaaS application",
    duration: "60 min",
    difficulty: "Advanced",
    month: 6,
    week: 4,
    category: "Projects",
    content: `
      <h2>Capstone Project Part 2: Implementation & Deployment</h2>
      <p>Implement the core features and deploy your TaskFlow application to production.</p>

      <h3>Authentication Components</h3>
      <div class="code-block">
        <pre>// app/(auth)/login/page.tsx
'use client';

import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/dashboard');
      router.refresh();
    }
  }

  async function handleGoogleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: \`\${window.location.origin}/auth/callback\`,
      },
    });
  }

  return (
    &lt;form onSubmit={handleLogin} className="space-y-4"&gt;
      {error && &lt;p className="text-red-500"&gt;{error}&lt;/p&gt;}
      &lt;input
        type="email"
        value={email}
        onChange={e =&gt; setEmail(e.target.value)}
        placeholder="Email"
        required
      /&gt;
      &lt;input
        type="password"
        value={password}
        onChange={e =&gt; setPassword(e.target.value)}
        placeholder="Password"
        required
      /&gt;
      &lt;button type="submit" disabled={loading}&gt;
        {loading ? 'Signing in...' : 'Sign In'}
      &lt;/button&gt;
      &lt;button type="button" onClick={handleGoogleLogin}&gt;
        Sign in with Google
      &lt;/button&gt;
    &lt;/form&gt;
  );
}</pre>
      </div>

      <h3>Dashboard Layout</h3>
      <div class="code-block">
        <pre>// app/(dashboard)/layout.tsx
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Sidebar } from '@/components/dashboard/sidebar';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  return (
    &lt;div className="flex h-screen"&gt;
      &lt;Sidebar user={profile} /&gt;
      &lt;main className="flex-1 overflow-auto p-6"&gt;
        {children}
      &lt;/main&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Project List with Server Actions</h3>
      <div class="code-block">
        <pre>// app/(dashboard)/projects/actions.ts
'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const createProjectSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().optional(),
});

export async function createProject(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) throw new Error('Not authenticated');

  const validated = createProjectSchema.parse({
    name: formData.get('name'),
    description: formData.get('description'),
  });

  const { error } = await supabase.from('projects').insert({
    ...validated,
    org_id: formData.get('org_id'),
    created_by: user.id,
  });

  if (error) throw error;

  revalidatePath('/projects');
}

// app/(dashboard)/projects/page.tsx
import { createClient } from '@/lib/supabase/server';
import { ProjectCard } from '@/components/projects/project-card';
import { CreateProjectDialog } from '@/components/projects/create-dialog';

export default async function ProjectsPage() {
  const supabase = await createClient();

  const { data: projects } = await supabase
    .from('projects')
    .select('*, tasks(count)')
    .order('created_at', { ascending: false });

  return (
    &lt;div&gt;
      &lt;div className="flex justify-between items-center mb-6"&gt;
        &lt;h1 className="text-2xl font-bold"&gt;Projects&lt;/h1&gt;
        &lt;CreateProjectDialog /&gt;
      &lt;/div&gt;
      &lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"&gt;
        {projects?.map(project =&gt; (
          &lt;ProjectCard key={project.id} project={project} /&gt;
        ))}
      &lt;/div&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Kanban Board for Tasks</h3>
      <div class="code-block">
        <pre>// components/tasks/kanban-board.tsx
'use client';

import { Task } from '@/types/database';
import { TaskCard } from './task-card';
import { updateTaskStatus } from '@/app/(dashboard)/projects/[id]/actions';

const columns = ['todo', 'in_progress', 'review', 'done'] as const;

export function KanbanBoard({ tasks }: { tasks: Task[] }) {
  const handleDrop = async (taskId: string, newStatus: string) =&gt; {
    await updateTaskStatus(taskId, newStatus);
  };

  return (
    &lt;div className="grid grid-cols-4 gap-4"&gt;
      {columns.map(status =&gt; (
        &lt;div
          key={status}
          className="bg-gray-100 rounded-lg p-4"
          onDragOver={e =&gt; e.preventDefault()}
          onDrop={e =&gt; {
            const taskId = e.dataTransfer.getData('taskId');
            handleDrop(taskId, status);
          }}
        &gt;
          &lt;h3 className="font-semibold mb-4 capitalize"&gt;
            {status.replace('_', ' ')}
          &lt;/h3&gt;
          &lt;div className="space-y-2"&gt;
            {tasks
              .filter(task =&gt; task.status === status)
              .map(task =&gt; (
                &lt;TaskCard key={task.id} task={task} /&gt;
              ))}
          &lt;/div&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Real-time Updates</h3>
      <div class="code-block">
        <pre>// hooks/use-realtime-tasks.ts
'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';
import { Task } from '@/types/database';

export function useRealtimeTasks(projectId: string, initialTasks: Task[]) {
  const [tasks, setTasks] = useState(initialTasks);
  const supabase = createClient();

  useEffect(() =&gt; {
    const channel = supabase
      .channel(\`project:\${projectId}\`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'tasks',
          filter: \`project_id=eq.\${projectId}\`,
        },
        (payload) =&gt; {
          if (payload.eventType === 'INSERT') {
            setTasks(prev =&gt; [...prev, payload.new as Task]);
          } else if (payload.eventType === 'UPDATE') {
            setTasks(prev =&gt;
              prev.map(t =&gt; t.id === payload.new.id ? payload.new as Task : t)
            );
          } else if (payload.eventType === 'DELETE') {
            setTasks(prev =&gt; prev.filter(t =&gt; t.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () =&gt; {
      supabase.removeChannel(channel);
    };
  }, [projectId]);

  return tasks;
}</pre>
      </div>

      <h3>Deployment Checklist</h3>
      <div class="code-block">
        <pre># Pre-deployment checklist

# 1. Environment Variables (Vercel)
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app

# 2. Supabase Configuration
- Add production URL to allowed redirect URLs
- Enable email confirmations if needed
- Configure OAuth providers with production URLs

# 3. Database
- Run all migrations
- Verify RLS policies
- Add indexes for performance

# 4. Testing
npm run build  # Check for errors
npm run lint   # Check code quality

# 5. Deploy
git push origin main  # Auto-deploys to Vercel

# Post-deployment
- Test all auth flows
- Test CRUD operations
- Verify real-time updates
- Check mobile responsiveness</pre>
      </div>

      <h3>Performance Optimizations</h3>
      <div class="code-block">
        <pre>// Optimize data fetching with parallel queries
export default async function ProjectPage({ params }) {
  const supabase = await createClient();

  // Parallel data fetching
  const [projectResult, tasksResult, membersResult] = await Promise.all([
    supabase.from('projects').select('*').eq('id', params.id).single(),
    supabase.from('tasks').select('*').eq('project_id', params.id),
    supabase.from('org_members').select('*, profiles(*)').eq('org_id', params.orgId),
  ]);

  return &lt;ProjectDashboard
    project={projectResult.data}
    tasks={tasksResult.data}
    members={membersResult.data}
  /&gt;;
}

// Add loading states
// app/(dashboard)/projects/loading.tsx
export default function Loading() {
  return (
    &lt;div className="grid grid-cols-3 gap-4"&gt;
      {[1, 2, 3, 4, 5, 6].map(i =&gt; (
        &lt;div key={i} className="h-40 bg-gray-200 animate-pulse rounded-lg" /&gt;
      ))}
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Final Project Structure</h3>
      <div class="code-block">
        <pre># Completed TaskFlow features:

✅ Authentication
  - Email/password login
  - Google OAuth
  - Protected routes

✅ Organizations
  - Create/join organizations
  - Role-based access (owner, admin, member)
  - Member management

✅ Projects
  - Create/edit/delete projects
  - Project dashboard
  - Activity feed

✅ Tasks
  - Kanban board view
  - Drag and drop status updates
  - Assignees and due dates
  - Priority levels

✅ Real-time
  - Live task updates
  - Presence indicators

✅ Polish
  - Loading states
  - Error handling
  - Responsive design
  - Dark mode</pre>
      </div>

      <h3>Next Steps</h3>
      <ul>
        <li><strong>Add notifications:</strong> Email and in-app notifications</li>
        <li><strong>Implement search:</strong> Full-text search across tasks</li>
        <li><strong>Add file uploads:</strong> Attach files to tasks</li>
        <li><strong>Build mobile app:</strong> React Native version</li>
        <li><strong>Add billing:</strong> Stripe integration for premium features</li>
      </ul>

      <p><strong>Congratulations!</strong> You've built a production-ready full-stack SaaS application using modern technologies. This project demonstrates your ability to design, build, and deploy complex applications.</p>
    `,
    questions: [
      {
        id: "122-1",
        type: "mcq",
        question: "Why use Promise.all for multiple database queries?",
        options: [
          "It's required by Supabase",
          "Queries run in parallel, reducing total wait time",
          "It prevents errors",
          "It uses less memory"
        ],
        correctAnswer: "Queries run in parallel, reducing total wait time",
        explanation: "Promise.all executes queries simultaneously instead of sequentially. If each query takes 100ms, sequential takes 300ms total, but parallel completes in ~100ms."
      },
      {
        id: "122-2",
        type: "mcq",
        question: "What's the benefit of the loading.tsx file in Next.js?",
        options: [
          "It's required for the app to work",
          "Shows instant loading UI while data fetches via Suspense",
          "It speeds up data fetching",
          "It caches the page"
        ],
        correctAnswer: "Shows instant loading UI while data fetches via Suspense",
        explanation: "Next.js automatically wraps page content in Suspense. The loading.tsx provides the fallback UI shown while the page's async data is fetching."
      },
      {
        id: "122-3",
        type: "mcq",
        question: "Why revalidatePath after a mutation in a Server Action?",
        options: [
          "To clear the browser cache",
          "To trigger a re-fetch and update the UI with new data",
          "To validate the path exists",
          "To improve security"
        ],
        correctAnswer: "To trigger a re-fetch and update the UI with new data",
        explanation: "After creating/updating data, revalidatePath marks the cached page data as stale. Next.js then re-fetches and re-renders, showing the updated data."
      },
      {
        id: "122-4",
        type: "descriptive",
        question: "Describe how real-time updates work in this application.",
        keywords: ["Supabase", "channel", "subscribe", "postgres_changes", "INSERT", "UPDATE", "DELETE", "useState"],
        explanation: "Create a Supabase channel and subscribe to postgres_changes events filtered by project_id. On INSERT, add new task to state. On UPDATE, replace the task in state. On DELETE, remove from state. Cleanup by removing channel on unmount."
      }
    ]
  }
];

import { Lesson } from '@/types/lesson';

export const month5Lessons: Lesson[] = [
  {
    id: 79,
    title: "Introduction to Node.js",
    description: "Learn what Node.js is, how it works, and set up your first server-side JavaScript environment",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 5,
    week: 1,
    category: "Node.js",
    content: `
      <h2>Welcome to Node.js</h2>
      <p>Node.js is a JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server. This opens up a whole new world of possibilities for JavaScript developers.</p>

      <h3>What is Node.js?</h3>
      <p>Node.js is not a programming language or framework - it's a runtime environment that executes JavaScript code outside of a web browser. Key characteristics include:</p>
      <ul>
        <li><strong>Event-driven:</strong> Uses an event loop for non-blocking operations</li>
        <li><strong>Non-blocking I/O:</strong> Asynchronous by default, highly efficient</li>
        <li><strong>Single-threaded:</strong> Uses one thread with event loop for concurrency</li>
        <li><strong>NPM ecosystem:</strong> Access to millions of packages</li>
      </ul>

      <h3>Installing Node.js</h3>
      <p>Download from nodejs.org or use a version manager like nvm:</p>
      <div class="code-block">
        <pre># Using nvm (recommended)
nvm install 20
nvm use 20

# Verify installation
node --version
npm --version</pre>
      </div>

      <h3>Your First Node.js Program</h3>
      <div class="code-block">
        <pre>// hello.js
console.log('Hello from Node.js!');

// Run with: node hello.js</pre>
      </div>

      <h3>Node.js vs Browser JavaScript</h3>
      <div class="code-block">
        <pre>// Browser has: window, document, DOM APIs
// Node.js has: process, fs, http, path, os

// Node.js global object
console.log(process.version);     // Node version
console.log(process.platform);    // Operating system
console.log(process.cwd());       // Current working directory
console.log(process.env.PATH);    // Environment variables

// Command line arguments
// node app.js arg1 arg2
console.log(process.argv);        // ['node', 'app.js', 'arg1', 'arg2']</pre>
      </div>

      <h3>The Module System (CommonJS)</h3>
      <div class="code-block">
        <pre>// math.js - Exporting
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };
// or
exports.multiply = (a, b) => a * b;

// app.js - Importing
const { add, subtract } = require('./math');
console.log(add(5, 3));  // 8</pre>
      </div>

      <h3>ES Modules in Node.js</h3>
      <div class="code-block">
        <pre>// package.json - Enable ES modules
{
  "type": "module"
}

// math.mjs (or .js with type: module)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default { add, subtract };

// app.mjs
import { add, subtract } from './math.mjs';
import math from './math.mjs';
console.log(add(5, 3));</pre>
      </div>

      <h3>Built-in Modules</h3>
      <div class="code-block">
        <pre>// File System (fs)
const fs = require('fs');

// Read file synchronously
const data = fs.readFileSync('file.txt', 'utf8');

// Read file asynchronously (preferred)
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Promise-based fs
const fsPromises = require('fs').promises;
const content = await fsPromises.readFile('file.txt', 'utf8');

// Path module
const path = require('path');
path.join(__dirname, 'folder', 'file.txt');
path.resolve('./folder/file.txt');
path.extname('file.txt');  // '.txt'
path.basename('/path/to/file.txt');  // 'file.txt'</pre>
      </div>

      <h3>Creating a Simple HTTP Server</h3>
      <div class="code-block">
        <pre>const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});</pre>
      </div>

      <h3>NPM - Node Package Manager</h3>
      <div class="code-block">
        <pre># Initialize a new project
npm init -y

# Install dependencies
npm install express        # Production dependency
npm install -D nodemon     # Development dependency

# package.json scripts
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}

# Run scripts
npm run start
npm run dev</pre>
      </div>
    `,
    questions: [
      {
        id: "79-1",
        type: "mcq",
        question: "What is Node.js?",
        options: ["A JavaScript framework", "A JavaScript runtime environment", "A database", "A web browser"],
        correctAnswer: "A JavaScript runtime environment",
        explanation: "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run outside the browser, enabling server-side development."
      },
      {
        id: "79-2",
        type: "mcq",
        question: "Which module system is native to Node.js?",
        options: ["AMD", "UMD", "CommonJS", "SystemJS"],
        correctAnswer: "CommonJS",
        explanation: "CommonJS (using require/module.exports) is the native module system in Node.js, though ES Modules (import/export) are also supported with configuration."
      },
      {
        id: "79-3",
        type: "mcq",
        question: "What does the fs module do?",
        options: ["Handles HTTP requests", "Manages file system operations", "Formats strings", "Creates servers"],
        correctAnswer: "Manages file system operations",
        explanation: "The fs (file system) module provides APIs for interacting with the file system, including reading, writing, and manipulating files and directories."
      },
      {
        id: "79-4",
        type: "descriptive",
        question: "Explain why Node.js is considered non-blocking and how this benefits server applications.",
        keywords: ["non-blocking", "asynchronous", "event loop", "callback", "concurrent", "I/O", "performance", "scalable"],
        explanation: "Node.js uses an event-driven, non-blocking I/O model where operations like file reads or database queries don't block the main thread. Instead, callbacks are executed when operations complete. This allows handling many concurrent connections efficiently without creating threads for each request."
      }
    ]
  },
  {
    id: 80,
    title: "Building REST APIs with Express",
    description: "Learn to build robust RESTful APIs using the Express.js framework",
    duration: "60 min",
    difficulty: "Intermediate",
    month: 5,
    week: 1,
    category: "Node.js",
    content: `
      <h2>Express.js - The Web Framework for Node.js</h2>
      <p>Express is a minimal and flexible Node.js web framework that provides a robust set of features for building web applications and APIs.</p>

      <h3>Setting Up Express</h3>
      <div class="code-block">
        <pre># Initialize project
npm init -y
npm install express

# Development dependencies
npm install -D nodemon typescript @types/express</pre>
      </div>

      <h3>Basic Express Server</h3>
      <div class="code-block">
        <pre>const express = require('express');
const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});</pre>
      </div>

      <h3>HTTP Methods and Routes</h3>
      <div class="code-block">
        <pre>// GET - Retrieve data
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET with parameter
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// POST - Create data
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT - Update entire resource
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.name = req.body.name;
  user.email = req.body.email;
  res.json(user);
});

// PATCH - Partial update
app.patch('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });

  if (req.body.name) user.name = req.body.name;
  if (req.body.email) user.email = req.body.email;
  res.json(user);
});

// DELETE - Remove data
app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'User not found' });

  users.splice(index, 1);
  res.status(204).send();
});</pre>
      </div>

      <h3>Query Parameters</h3>
      <div class="code-block">
        <pre>// GET /api/users?page=1&limit=10&sort=name
app.get('/api/users', (req, res) => {
  const { page = 1, limit = 10, sort } = req.query;

  let result = [...users];

  if (sort) {
    result.sort((a, b) => a[sort].localeCompare(b[sort]));
  }

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  res.json({
    data: result.slice(startIndex, endIndex),
    page: parseInt(page),
    totalPages: Math.ceil(result.length / limit)
  });
});</pre>
      </div>

      <h3>Middleware</h3>
      <div class="code-block">
        <pre>// Application-level middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.path} - \${new Date().toISOString()}\`);
  next();
});

// Route-specific middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // Verify token...
  next();
};

app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: 'Protected data' });
});

// Error handling middleware (must have 4 parameters)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});</pre>
      </div>

      <h3>Router for Modular Routes</h3>
      <div class="code-block">
        <pre>// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  // Get single user
});

router.post('/', (req, res) => {
  // Create user
});

module.exports = router;

// app.js
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);</pre>
      </div>

      <h3>Request and Response Objects</h3>
      <div class="code-block">
        <pre>app.post('/api/example', (req, res) => {
  // Request object
  console.log(req.body);        // POST body (needs middleware)
  console.log(req.params);      // URL parameters
  console.log(req.query);       // Query string
  console.log(req.headers);     // Request headers
  console.log(req.method);      // HTTP method
  console.log(req.path);        // Request path

  // Response methods
  res.status(200);              // Set status code
  res.json({ data: 'json' });   // Send JSON
  res.send('text');             // Send text
  res.redirect('/other');       // Redirect
  res.sendFile('/path/to/file'); // Send file
  res.set('Header', 'value');   // Set header
});</pre>
      </div>

      <h3>Complete REST API Example</h3>
      <div class="code-block">
        <pre>const express = require('express');
const app = express();

app.use(express.json());

let todos = [
  { id: 1, title: 'Learn Express', completed: false }
];

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Get single todo
app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json(todo);
});

// Create todo
app.post('/api/todos', (req, res) => {
  const todo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: false
  };
  todos.push(todo);
  res.status(201).json(todo);
});

// Update todo
app.put('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });

  todo.title = req.body.title ?? todo.title;
  todo.completed = req.body.completed ?? todo.completed;
  res.json(todo);
});

// Delete todo
app.delete('/api/todos/:id', (req, res) => {
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(3000);</pre>
      </div>
    `,
    questions: [
      {
        id: "80-1",
        type: "mcq",
        question: "What HTTP method should be used to create a new resource?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: "POST",
        explanation: "POST is used to create new resources. GET retrieves data, PUT updates existing resources, and DELETE removes resources."
      },
      {
        id: "80-2",
        type: "mcq",
        question: "What is middleware in Express?",
        options: ["A database connector", "Functions that execute during the request-response cycle", "A template engine", "A routing library"],
        correctAnswer: "Functions that execute during the request-response cycle",
        explanation: "Middleware functions have access to the request and response objects and can execute code, modify req/res, end the request-response cycle, or call the next middleware."
      },
      {
        id: "80-3",
        type: "mcq",
        question: "Which status code indicates a resource was created successfully?",
        options: ["200", "201", "204", "301"],
        correctAnswer: "201",
        explanation: "201 Created indicates that a new resource has been successfully created. 200 is general success, 204 is success with no content, and 301 is a redirect."
      },
      {
        id: "80-4",
        type: "descriptive",
        question: "Explain the difference between PUT and PATCH HTTP methods.",
        keywords: ["PUT", "PATCH", "update", "replace", "partial", "entire", "resource", "idempotent"],
        explanation: "PUT replaces the entire resource with the provided data - if you omit a field, it gets removed. PATCH performs a partial update, only modifying the fields you provide. Both are idempotent (multiple identical requests have the same effect as a single one)."
      }
    ]
  },
  {
    id: 81,
    title: "SQL Fundamentals",
    description: "Master the basics of SQL for querying and manipulating relational databases",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 5,
    week: 2,
    category: "Databases",
    content: `
      <h2>Introduction to SQL</h2>
      <p>SQL (Structured Query Language) is the standard language for interacting with relational databases. Understanding SQL is essential for any full-stack developer.</p>

      <h3>What is a Relational Database?</h3>
      <p>Relational databases store data in tables with rows and columns. Tables can be related to each other through keys.</p>
      <ul>
        <li><strong>Table:</strong> Collection of related data (like a spreadsheet)</li>
        <li><strong>Row:</strong> A single record in the table</li>
        <li><strong>Column:</strong> A field/attribute of the record</li>
        <li><strong>Primary Key:</strong> Unique identifier for each row</li>
        <li><strong>Foreign Key:</strong> Reference to a primary key in another table</li>
      </ul>

      <h3>Creating Tables</h3>
      <div class="code-block">
        <pre>-- Create a users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create a posts table with foreign key
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  content TEXT,
  author_id INTEGER REFERENCES users(id),
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Common data types
-- INTEGER, BIGINT, SERIAL (auto-increment)
-- VARCHAR(n), TEXT, CHAR(n)
-- BOOLEAN
-- DATE, TIME, TIMESTAMP
-- DECIMAL(precision, scale), FLOAT
-- JSON, JSONB (PostgreSQL)</pre>
      </div>

      <h3>INSERT - Adding Data</h3>
      <div class="code-block">
        <pre>-- Insert single row
INSERT INTO users (username, email, password_hash)
VALUES ('johndoe', 'john@example.com', 'hashed_password');

-- Insert multiple rows
INSERT INTO users (username, email, password_hash)
VALUES
  ('janedoe', 'jane@example.com', 'hash1'),
  ('bobsmith', 'bob@example.com', 'hash2');

-- Insert with returning (get the created row)
INSERT INTO users (username, email, password_hash)
VALUES ('alice', 'alice@example.com', 'hash3')
RETURNING id, username, email;</pre>
      </div>

      <h3>SELECT - Querying Data</h3>
      <div class="code-block">
        <pre>-- Select all columns
SELECT * FROM users;

-- Select specific columns
SELECT username, email FROM users;

-- Filtering with WHERE
SELECT * FROM users WHERE username = 'johndoe';

-- Multiple conditions
SELECT * FROM posts
WHERE published = true AND author_id = 1;

SELECT * FROM posts
WHERE published = true OR author_id = 1;

-- Comparison operators
SELECT * FROM users WHERE id > 5;
SELECT * FROM users WHERE id BETWEEN 1 AND 10;
SELECT * FROM users WHERE email LIKE '%@gmail.com';
SELECT * FROM users WHERE username IN ('john', 'jane', 'bob');
SELECT * FROM users WHERE bio IS NULL;

-- Sorting
SELECT * FROM posts ORDER BY created_at DESC;
SELECT * FROM users ORDER BY username ASC;

-- Limiting results
SELECT * FROM posts LIMIT 10;
SELECT * FROM posts LIMIT 10 OFFSET 20; -- Pagination

-- Distinct values
SELECT DISTINCT author_id FROM posts;</pre>
      </div>

      <h3>UPDATE - Modifying Data</h3>
      <div class="code-block">
        <pre>-- Update single field
UPDATE users SET email = 'newemail@example.com'
WHERE id = 1;

-- Update multiple fields
UPDATE posts
SET title = 'Updated Title', published = true
WHERE id = 5;

-- Update with returning
UPDATE users SET email = 'new@example.com'
WHERE id = 1
RETURNING *;

-- BE CAREFUL: Without WHERE, updates ALL rows!
-- UPDATE users SET email = 'same@example.com';  -- DANGEROUS!</pre>
      </div>

      <h3>DELETE - Removing Data</h3>
      <div class="code-block">
        <pre>-- Delete specific rows
DELETE FROM posts WHERE id = 5;

-- Delete with condition
DELETE FROM posts WHERE published = false;

-- Delete all rows (keeps table structure)
DELETE FROM posts;

-- TRUNCATE - faster for deleting all rows
TRUNCATE TABLE posts;</pre>
      </div>

      <h3>JOINs - Combining Tables</h3>
      <div class="code-block">
        <pre>-- INNER JOIN - Only matching rows from both tables
SELECT posts.title, users.username
FROM posts
INNER JOIN users ON posts.author_id = users.id;

-- LEFT JOIN - All rows from left table, matching from right
SELECT users.username, posts.title
FROM users
LEFT JOIN posts ON users.id = posts.author_id;

-- RIGHT JOIN - All rows from right table, matching from left
SELECT users.username, posts.title
FROM users
RIGHT JOIN posts ON users.id = posts.author_id;

-- Using aliases for cleaner queries
SELECT p.title, u.username
FROM posts p
JOIN users u ON p.author_id = u.id
WHERE p.published = true;</pre>
      </div>

      <h3>Aggregate Functions</h3>
      <div class="code-block">
        <pre>-- COUNT
SELECT COUNT(*) FROM users;
SELECT COUNT(*) FROM posts WHERE published = true;

-- SUM, AVG, MIN, MAX
SELECT SUM(views) FROM posts;
SELECT AVG(views) FROM posts;
SELECT MIN(created_at), MAX(created_at) FROM users;

-- GROUP BY
SELECT author_id, COUNT(*) as post_count
FROM posts
GROUP BY author_id;

-- HAVING (filter groups)
SELECT author_id, COUNT(*) as post_count
FROM posts
GROUP BY author_id
HAVING COUNT(*) > 5;</pre>
      </div>

      <h3>Subqueries</h3>
      <div class="code-block">
        <pre>-- Subquery in WHERE
SELECT * FROM users
WHERE id IN (SELECT author_id FROM posts WHERE published = true);

-- Subquery in FROM
SELECT avg_posts.author_id, avg_posts.post_count
FROM (
  SELECT author_id, COUNT(*) as post_count
  FROM posts
  GROUP BY author_id
) as avg_posts
WHERE avg_posts.post_count > 3;</pre>
      </div>
    `,
    questions: [
      {
        id: "81-1",
        type: "mcq",
        question: "What does a PRIMARY KEY constraint ensure?",
        options: ["Values can be null", "Values are unique and not null", "Values are sorted", "Values are encrypted"],
        correctAnswer: "Values are unique and not null",
        explanation: "A PRIMARY KEY constraint ensures that each value in the column is unique and cannot be NULL. It uniquely identifies each row in the table."
      },
      {
        id: "81-2",
        type: "mcq",
        question: "Which JOIN returns all rows from the left table even if there's no match?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"],
        correctAnswer: "LEFT JOIN",
        explanation: "LEFT JOIN returns all rows from the left table and matching rows from the right table. If there's no match, NULL values are returned for right table columns."
      },
      {
        id: "81-3",
        type: "mcq",
        question: "What is the purpose of the GROUP BY clause?",
        options: ["To sort results", "To filter rows", "To combine rows with same values into summary rows", "To join tables"],
        correctAnswer: "To combine rows with same values into summary rows",
        explanation: "GROUP BY groups rows that have the same values in specified columns into summary rows, often used with aggregate functions like COUNT, SUM, AVG."
      },
      {
        id: "81-4",
        type: "descriptive",
        question: "Explain the difference between WHERE and HAVING clauses in SQL.",
        keywords: ["WHERE", "HAVING", "filter", "aggregate", "GROUP BY", "before", "after", "condition"],
        explanation: "WHERE filters individual rows before grouping and cannot use aggregate functions. HAVING filters groups after GROUP BY and can use aggregate functions. For example, WHERE filters rows before COUNT(), while HAVING can filter based on COUNT() > 5."
      }
    ]
  },
  {
    id: 82,
    title: "PostgreSQL & Supabase",
    description: "Learn PostgreSQL and how to use Supabase as a backend-as-a-service",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 5,
    week: 2,
    category: "Databases",
    content: `
      <h2>PostgreSQL - The World's Most Advanced Open Source Database</h2>
      <p>PostgreSQL (Postgres) is a powerful, open-source relational database known for reliability, feature robustness, and performance.</p>

      <h3>PostgreSQL Features</h3>
      <ul>
        <li><strong>ACID compliance:</strong> Ensures data integrity</li>
        <li><strong>JSON/JSONB support:</strong> Store and query JSON data</li>
        <li><strong>Full-text search:</strong> Built-in search capabilities</li>
        <li><strong>Extensions:</strong> Add functionality like UUID, PostGIS</li>
        <li><strong>Row-level security:</strong> Fine-grained access control</li>
      </ul>

      <h3>PostgreSQL-Specific Features</h3>
      <div class="code-block">
        <pre>-- UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

-- JSONB columns
CREATE TABLE settings (
  user_id INTEGER PRIMARY KEY,
  preferences JSONB DEFAULT '{}'
);

INSERT INTO settings (user_id, preferences)
VALUES (1, '{"theme": "dark", "notifications": true}');

-- Query JSONB
SELECT * FROM settings WHERE preferences->>'theme' = 'dark';
SELECT preferences->'notifications' FROM settings;

-- Update JSONB
UPDATE settings
SET preferences = preferences || '{"language": "en"}'
WHERE user_id = 1;

-- Array columns
CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  post_id INTEGER,
  tag_list TEXT[]
);

INSERT INTO tags (post_id, tag_list)
VALUES (1, ARRAY['javascript', 'nodejs', 'express']);

SELECT * FROM tags WHERE 'javascript' = ANY(tag_list);</pre>
      </div>

      <h3>Introduction to Supabase</h3>
      <p>Supabase is an open-source Firebase alternative that provides a PostgreSQL database with instant APIs, authentication, storage, and real-time subscriptions.</p>

      <h3>Setting Up Supabase</h3>
      <div class="code-block">
        <pre># Install Supabase client
npm install @supabase/supabase-js

# Create client
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);</pre>
      </div>

      <h3>CRUD Operations with Supabase</h3>
      <div class="code-block">
        <pre>// SELECT - Fetch data
const { data, error } = await supabase
  .from('posts')
  .select('*');

// Select specific columns
const { data } = await supabase
  .from('posts')
  .select('id, title, content');

// Select with relationships
const { data } = await supabase
  .from('posts')
  .select(\`
    id,
    title,
    author:users(username, email)
  \`);

// Filtering
const { data } = await supabase
  .from('posts')
  .select('*')
  .eq('published', true)
  .gte('views', 100)
  .order('created_at', { ascending: false })
  .limit(10);

// INSERT - Create data
const { data, error } = await supabase
  .from('posts')
  .insert([
    { title: 'New Post', content: 'Content here', author_id: 1 }
  ])
  .select();

// UPDATE - Modify data
const { data, error } = await supabase
  .from('posts')
  .update({ published: true })
  .eq('id', 1)
  .select();

// DELETE - Remove data
const { error } = await supabase
  .from('posts')
  .delete()
  .eq('id', 1);</pre>
      </div>

      <h3>Advanced Queries</h3>
      <div class="code-block">
        <pre>// Full-text search
const { data } = await supabase
  .from('posts')
  .select('*')
  .textSearch('title', 'javascript');

// Pattern matching
const { data } = await supabase
  .from('users')
  .select('*')
  .like('email', '%@gmail.com');

// OR conditions
const { data } = await supabase
  .from('posts')
  .select('*')
  .or('published.eq.true,views.gt.1000');

// Pagination
const { data, count } = await supabase
  .from('posts')
  .select('*', { count: 'exact' })
  .range(0, 9);  // First 10 rows

// Upsert (insert or update)
const { data } = await supabase
  .from('users')
  .upsert({ id: 1, username: 'updated_name' })
  .select();</pre>
      </div>

      <h3>Real-time Subscriptions</h3>
      <div class="code-block">
        <pre>// Subscribe to changes
const subscription = supabase
  .channel('posts-channel')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'posts' },
    (payload) => {
      console.log('Change received!', payload);
    }
  )
  .subscribe();

// Listen for specific events
const subscription = supabase
  .channel('posts-inserts')
  .on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'posts' },
    (payload) => {
      console.log('New post:', payload.new);
    }
  )
  .subscribe();

// Unsubscribe
await supabase.removeChannel(subscription);</pre>
      </div>

      <h3>Row Level Security (RLS)</h3>
      <div class="code-block">
        <pre>-- Enable RLS on a table
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own posts
CREATE POLICY "Users can view own posts"
ON posts FOR SELECT
USING (auth.uid() = author_id);

-- Policy: Users can insert their own posts
CREATE POLICY "Users can create posts"
ON posts FOR INSERT
WITH CHECK (auth.uid() = author_id);

-- Policy: Users can update their own posts
CREATE POLICY "Users can update own posts"
ON posts FOR UPDATE
USING (auth.uid() = author_id);

-- Policy: Public posts are visible to everyone
CREATE POLICY "Public posts are viewable"
ON posts FOR SELECT
USING (published = true);</pre>
      </div>
    `,
    questions: [
      {
        id: "82-1",
        type: "mcq",
        question: "What is JSONB in PostgreSQL?",
        options: ["A JavaScript library", "A binary JSON storage format with indexing support", "A backup format", "A connection protocol"],
        correctAnswer: "A binary JSON storage format with indexing support",
        explanation: "JSONB is PostgreSQL's binary JSON format that supports indexing and is more efficient for querying than regular JSON. It's ideal for storing flexible, semi-structured data."
      },
      {
        id: "82-2",
        type: "mcq",
        question: "What does Supabase provide out of the box?",
        options: ["Only database hosting", "Database, Auth, Storage, and Real-time APIs", "Only authentication", "Only file storage"],
        correctAnswer: "Database, Auth, Storage, and Real-time APIs",
        explanation: "Supabase provides a complete backend-as-a-service including PostgreSQL database, authentication, file storage, real-time subscriptions, and auto-generated APIs."
      },
      {
        id: "82-3",
        type: "mcq",
        question: "What is Row Level Security (RLS)?",
        options: ["Encrypting database rows", "Limiting number of rows", "Policies that control which rows users can access", "Backing up rows"],
        correctAnswer: "Policies that control which rows users can access",
        explanation: "Row Level Security (RLS) allows you to create policies that control which rows in a table a user can access based on conditions like user ID, role, or other criteria."
      },
      {
        id: "82-4",
        type: "descriptive",
        question: "Explain how Supabase real-time subscriptions work and give a use case.",
        keywords: ["real-time", "subscription", "channel", "postgres_changes", "listen", "websocket", "live", "updates"],
        explanation: "Supabase real-time uses PostgreSQL's replication to broadcast database changes over WebSockets. Clients subscribe to channels and receive INSERT, UPDATE, DELETE events instantly. Use cases include live chat, collaborative editing, notifications, and live dashboards."
      }
    ]
  },
  {
    id: 83,
    title: "NoSQL with MongoDB",
    description: "Learn document-based databases and when to choose NoSQL over SQL",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 5,
    week: 2,
    category: "Databases",
    content: `
      <h2>Introduction to MongoDB</h2>
      <p>MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents. It's designed for scalability and developer productivity.</p>

      <h3>SQL vs NoSQL</h3>
      <table>
        <tr><th>SQL (PostgreSQL)</th><th>NoSQL (MongoDB)</th></tr>
        <tr><td>Tables with rows</td><td>Collections with documents</td></tr>
        <tr><td>Fixed schema</td><td>Flexible schema</td></tr>
        <tr><td>JOINs for relationships</td><td>Embedded documents or references</td></tr>
        <tr><td>ACID transactions</td><td>Eventually consistent (with ACID options)</td></tr>
        <tr><td>Vertical scaling</td><td>Horizontal scaling (sharding)</td></tr>
      </table>

      <h3>When to Use MongoDB</h3>
      <ul>
        <li>Rapidly changing schemas</li>
        <li>Large amounts of unstructured data</li>
        <li>Real-time analytics</li>
        <li>Content management systems</li>
        <li>IoT and logging applications</li>
      </ul>

      <h3>Document Structure</h3>
      <div class="code-block">
        <pre>// A MongoDB document (BSON)
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "username": "johndoe",
  "email": "john@example.com",
  "profile": {
    "firstName": "John",
    "lastName": "Doe",
    "age": 28
  },
  "posts": [
    { "title": "First Post", "likes": 10 },
    { "title": "Second Post", "likes": 25 }
  ],
  "tags": ["developer", "nodejs"],
  "createdAt": ISODate("2024-01-15T10:30:00Z")
}</pre>
      </div>

      <h3>Setting Up MongoDB with Node.js</h3>
      <div class="code-block">
        <pre>npm install mongodb

// Connection
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connect() {
  await client.connect();
  const db = client.db('myapp');
  return db;
}</pre>
      </div>

      <h3>Using Mongoose (ODM)</h3>
      <div class="code-block">
        <pre>npm install mongoose

const mongoose = require('mongoose');

// Connect
mongoose.connect('mongodb://localhost:27017/myapp');

// Define Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    firstName: String,
    lastName: String,
    age: Number
  },
  posts: [{
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now }
});

// Create Model
const User = mongoose.model('User', userSchema);</pre>
      </div>

      <h3>CRUD Operations</h3>
      <div class="code-block">
        <pre>// CREATE
const newUser = new User({
  username: 'johndoe',
  email: 'john@example.com',
  password: 'hashedpassword'
});
await newUser.save();

// Or use create
const user = await User.create({
  username: 'janedoe',
  email: 'jane@example.com',
  password: 'hashedpassword'
});

// READ
// Find all
const users = await User.find();

// Find with conditions
const activeUsers = await User.find({ active: true });

// Find one
const user = await User.findOne({ email: 'john@example.com' });

// Find by ID
const user = await User.findById('507f1f77bcf86cd799439011');

// Select specific fields
const users = await User.find().select('username email');

// Sorting and limiting
const recentUsers = await User.find()
  .sort({ createdAt: -1 })
  .limit(10);

// UPDATE
await User.updateOne(
  { _id: userId },
  { $set: { 'profile.age': 29 } }
);

await User.findByIdAndUpdate(
  userId,
  { email: 'newemail@example.com' },
  { new: true }  // Return updated document
);

// DELETE
await User.deleteOne({ _id: userId });
await User.findByIdAndDelete(userId);</pre>
      </div>

      <h3>Query Operators</h3>
      <div class="code-block">
        <pre>// Comparison
await User.find({ age: { $gt: 18 } });     // Greater than
await User.find({ age: { $gte: 18 } });    // Greater than or equal
await User.find({ age: { $lt: 30 } });     // Less than
await User.find({ age: { $in: [25, 30] } }); // In array
await User.find({ age: { $ne: 25 } });     // Not equal

// Logical
await User.find({ $and: [{ age: { $gt: 18 } }, { active: true }] });
await User.find({ $or: [{ role: 'admin' }, { role: 'moderator' }] });

// Array operators
await User.find({ tags: 'developer' });     // Array contains
await User.find({ tags: { $all: ['js', 'node'] } }); // Contains all
await User.find({ 'posts.1': { $exists: true } });   // Has 2+ posts

// Update operators
await User.updateOne(
  { _id: userId },
  {
    $set: { email: 'new@example.com' },
    $inc: { loginCount: 1 },
    $push: { tags: 'mongodb' },
    $pull: { tags: 'beginner' }
  }
);</pre>
      </div>

      <h3>Indexing</h3>
      <div class="code-block">
        <pre>// Single field index
userSchema.index({ email: 1 });

// Compound index
userSchema.index({ username: 1, createdAt: -1 });

// Text index for search
userSchema.index({ 'profile.bio': 'text', 'posts.content': 'text' });

// Text search
const results = await User.find({ $text: { $search: 'developer' } });</pre>
      </div>

      <h3>Aggregation Pipeline</h3>
      <div class="code-block">
        <pre>const stats = await User.aggregate([
  { $match: { active: true } },
  { $group: {
      _id: '$role',
      count: { $sum: 1 },
      avgAge: { $avg: '$profile.age' }
    }
  },
  { $sort: { count: -1 } }
]);</pre>
      </div>
    `,
    questions: [
      {
        id: "83-1",
        type: "mcq",
        question: "What type of database is MongoDB?",
        options: ["Relational", "Document-oriented", "Graph", "Key-value"],
        correctAnswer: "Document-oriented",
        explanation: "MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents (BSON) rather than tables with rows and columns."
      },
      {
        id: "83-2",
        type: "mcq",
        question: "What is Mongoose?",
        options: ["A MongoDB server", "An Object Document Mapper (ODM)", "A query language", "A database driver"],
        correctAnswer: "An Object Document Mapper (ODM)",
        explanation: "Mongoose is an ODM (Object Document Mapper) for MongoDB and Node.js. It provides schema validation, middleware, and a cleaner API for interacting with MongoDB."
      },
      {
        id: "83-3",
        type: "mcq",
        question: "Which operator adds an element to an array in MongoDB?",
        options: ["$set", "$push", "$add", "$insert"],
        correctAnswer: "$push",
        explanation: "$push adds an element to an array field. $set updates a field's value, $addToSet adds only if not present, and there's no $add or $insert operator for arrays."
      },
      {
        id: "83-4",
        type: "descriptive",
        question: "When would you choose MongoDB over PostgreSQL? Give specific examples.",
        keywords: ["flexible schema", "document", "embedded", "scaling", "unstructured", "rapid", "prototype", "content"],
        explanation: "Choose MongoDB when: 1) Schema changes frequently (startups/prototypes), 2) Data is naturally document-shaped (CMS, product catalogs), 3) Need horizontal scaling for large datasets, 4) Working with unstructured/varied data, 5) Real-time analytics. Choose PostgreSQL for complex relationships, transactions, and strict data integrity."
      }
    ]
  },
  {
    id: 84,
    title: "Authentication Fundamentals",
    description: "Understand authentication concepts, sessions, tokens, and security best practices",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 5,
    week: 3,
    category: "Authentication",
    content: `
      <h2>Understanding Authentication</h2>
      <p>Authentication verifies who a user is, while authorization determines what they can do. Both are crucial for application security.</p>

      <h3>Authentication vs Authorization</h3>
      <ul>
        <li><strong>Authentication (AuthN):</strong> "Who are you?" - Verifying identity</li>
        <li><strong>Authorization (AuthZ):</strong> "What can you do?" - Granting permissions</li>
      </ul>

      <h3>Password Security</h3>
      <div class="code-block">
        <pre>// NEVER store plain text passwords!
// Use bcrypt for hashing

npm install bcrypt

const bcrypt = require('bcrypt');

// Hashing a password
const saltRounds = 10;
const hashedPassword = await bcrypt.hash('userPassword', saltRounds);

// Verifying a password
const isMatch = await bcrypt.compare('userPassword', hashedPassword);

// Example in registration
async function registerUser(username, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.query(
    'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)',
    [username, email, hashedPassword]
  );
}

// Example in login
async function loginUser(email, password) {
  const user = await db.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );

  if (!user) throw new Error('User not found');

  const isValid = await bcrypt.compare(password, user.password_hash);
  if (!isValid) throw new Error('Invalid password');

  return user;
}</pre>
      </div>

      <h3>Session-Based Authentication</h3>
      <div class="code-block">
        <pre>// How sessions work:
// 1. User logs in with credentials
// 2. Server creates a session and stores it
// 3. Server sends session ID in a cookie
// 4. Browser sends cookie with every request
// 5. Server validates session ID

npm install express-session

const session = require('express-session');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,       // HTTPS only
    httpOnly: true,     // No JavaScript access
    maxAge: 24 * 60 * 60 * 1000  // 24 hours
  }
}));

// Login route
app.post('/login', async (req, res) => {
  const user = await authenticateUser(req.body.email, req.body.password);

  if (user) {
    req.session.userId = user.id;
    req.session.role = user.role;
    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Protected route
app.get('/dashboard', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  res.json({ message: 'Welcome to dashboard' });
});

// Logout
app.post('/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});</pre>
      </div>

      <h3>Token-Based Authentication (JWT)</h3>
      <div class="code-block">
        <pre>// How JWTs work:
// 1. User logs in with credentials
// 2. Server creates and signs a JWT
// 3. Client stores token (localStorage/cookie)
// 4. Client sends token in Authorization header
// 5. Server verifies token signature

npm install jsonwebtoken

const jwt = require('jsonwebtoken');

// Create token
function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
}

// Login route
app.post('/login', async (req, res) => {
  const user = await authenticateUser(req.body.email, req.body.password);

  if (user) {
    const token = generateToken(user);
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Middleware to verify token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
}

// Protected route
app.get('/profile', authenticateToken, (req, res) => {
  res.json({ user: req.user });
});</pre>
      </div>

      <h3>JWT Structure</h3>
      <div class="code-block">
        <pre>// JWT has three parts separated by dots:
// header.payload.signature

// Header (algorithm and type)
{
  "alg": "HS256",
  "typ": "JWT"
}

// Payload (claims/data)
{
  "id": 123,
  "email": "user@example.com",
  "role": "admin",
  "iat": 1516239022,   // Issued at
  "exp": 1516325422    // Expiration
}

// Signature
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)</pre>
      </div>

      <h3>Session vs JWT Comparison</h3>
      <table>
        <tr><th>Sessions</th><th>JWT</th></tr>
        <tr><td>Server stores state</td><td>Stateless (no server storage)</td></tr>
        <tr><td>Cookie-based</td><td>Header-based (typically)</td></tr>
        <tr><td>Easy to invalidate</td><td>Harder to invalidate</td></tr>
        <tr><td>Better for server-rendered apps</td><td>Better for APIs/SPAs</td></tr>
        <tr><td>Requires sticky sessions for scaling</td><td>Scales easily</td></tr>
      </table>

      <h3>Security Best Practices</h3>
      <div class="code-block">
        <pre>// 1. Use HTTPS always
// 2. Hash passwords with bcrypt
// 3. Use secure, httpOnly cookies
// 4. Implement rate limiting
// 5. Use refresh tokens for JWTs
// 6. Validate and sanitize all inputs
// 7. Use CSRF protection for sessions

// Refresh token pattern
const accessToken = jwt.sign(payload, secret, { expiresIn: '15m' });
const refreshToken = jwt.sign(payload, refreshSecret, { expiresIn: '7d' });

app.post('/refresh', (req, res) => {
  const { refreshToken } = req.body;

  jwt.verify(refreshToken, refreshSecret, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid refresh token' });

    const newAccessToken = jwt.sign(
      { id: user.id, email: user.email },
      secret,
      { expiresIn: '15m' }
    );

    res.json({ accessToken: newAccessToken });
  });
});</pre>
      </div>
    `,
    questions: [
      {
        id: "84-1",
        type: "mcq",
        question: "What is the difference between authentication and authorization?",
        options: ["They are the same", "Authentication verifies identity, authorization grants permissions", "Authorization verifies identity, authentication grants permissions", "Authentication is for APIs only"],
        correctAnswer: "Authentication verifies identity, authorization grants permissions",
        explanation: "Authentication (AuthN) verifies who a user is (login). Authorization (AuthZ) determines what an authenticated user is allowed to do (permissions/roles)."
      },
      {
        id: "84-2",
        type: "mcq",
        question: "Why should passwords be hashed with bcrypt instead of encrypted?",
        options: ["Hashing is faster", "Hashing is one-way and can't be reversed", "Encryption uses more storage", "There's no difference"],
        correctAnswer: "Hashing is one-way and can't be reversed",
        explanation: "Hashing is one-way - you can't get the original password back. Encryption is two-way and can be decrypted. If your database is compromised, hashed passwords can't be reversed to plain text."
      },
      {
        id: "84-3",
        type: "mcq",
        question: "What does the httpOnly cookie flag prevent?",
        options: ["Cookies from being sent over HTTP", "JavaScript from accessing the cookie", "Cookies from expiring", "Cross-origin requests"],
        correctAnswer: "JavaScript from accessing the cookie",
        explanation: "The httpOnly flag prevents client-side JavaScript from accessing the cookie via document.cookie. This protects against XSS attacks that try to steal session cookies."
      },
      {
        id: "84-4",
        type: "descriptive",
        question: "Explain when you would use session-based auth vs JWT-based auth.",
        keywords: ["session", "JWT", "stateless", "server", "scale", "API", "cookie", "invalidate", "SPA"],
        explanation: "Use sessions for: traditional server-rendered apps, when you need easy logout/invalidation, simpler security model. Use JWTs for: APIs consumed by mobile/SPAs, microservices, stateless scaling requirements. JWTs are harder to invalidate but scale better; sessions require server storage but are easier to manage."
      }
    ]
  },
  {
    id: 85,
    title: "Implementing Auth with Supabase",
    description: "Build complete authentication flows using Supabase Auth",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 5,
    week: 3,
    category: "Authentication",
    content: `
      <h2>Supabase Authentication</h2>
      <p>Supabase provides a complete authentication solution with support for email/password, magic links, OAuth providers, and more.</p>

      <h3>Setting Up Supabase Auth</h3>
      <div class="code-block">
        <pre>// supabase/client.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);</pre>
      </div>

      <h3>Email/Password Authentication</h3>
      <div class="code-block">
        <pre>// Sign Up
async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: 'John',
        last_name: 'Doe'
      }
    }
  });

  if (error) throw error;
  return data;
}

// Sign In
async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) throw error;
  return data;
}

// Sign Out
async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

// Get Current User
const { data: { user } } = await supabase.auth.getUser();

// Get Session
const { data: { session } } = await supabase.auth.getSession();</pre>
      </div>

      <h3>Magic Link (Passwordless)</h3>
      <div class="code-block">
        <pre>// Send magic link
async function sendMagicLink(email: string) {
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: 'http://localhost:3000/auth/callback'
    }
  });

  if (error) throw error;
}</pre>
      </div>

      <h3>OAuth Providers (Google, GitHub, etc.)</h3>
      <div class="code-block">
        <pre>// Sign in with OAuth
async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback'
    }
  });

  if (error) throw error;
}

async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github'
  });
}</pre>
      </div>

      <h3>Auth State Listener</h3>
      <div class="code-block">
        <pre>// Listen for auth changes
useEffect(() => {
  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    (event, session) => {
      console.log('Auth event:', event);
      console.log('Session:', session);

      if (event === 'SIGNED_IN') {
        // User signed in
        router.push('/dashboard');
      }

      if (event === 'SIGNED_OUT') {
        // User signed out
        router.push('/login');
      }

      if (event === 'TOKEN_REFRESHED') {
        // Session token refreshed
      }
    }
  );

  return () => {
    subscription.unsubscribe();
  };
}, []);</pre>
      </div>

      <h3>React Auth Context</h3>
      <div class="code-block">
        <pre>// contexts/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);</pre>
      </div>

      <h3>Protected Routes</h3>
      <div class="code-block">
        <pre>// components/ProtectedRoute.tsx
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}</pre>
      </div>

      <h3>Password Reset</h3>
      <div class="code-block">
        <pre>// Request password reset
async function resetPassword(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:3000/auth/reset-password'
  });
  if (error) throw error;
}

// Update password (on reset page)
async function updatePassword(newPassword: string) {
  const { error } = await supabase.auth.updateUser({
    password: newPassword
  });
  if (error) throw error;
}</pre>
      </div>
    `,
    questions: [
      {
        id: "85-1",
        type: "mcq",
        question: "What is a magic link in Supabase Auth?",
        options: ["A special admin URL", "A passwordless login via email link", "An OAuth redirect URL", "A session token"],
        correctAnswer: "A passwordless login via email link",
        explanation: "Magic links are a passwordless authentication method where users receive an email with a special link that logs them in directly without needing to enter a password."
      },
      {
        id: "85-2",
        type: "mcq",
        question: "What does onAuthStateChange do in Supabase?",
        options: ["Changes the user's password", "Listens for authentication state changes", "Updates user profile", "Logs out the user"],
        correctAnswer: "Listens for authentication state changes",
        explanation: "onAuthStateChange sets up a listener that fires whenever the authentication state changes (sign in, sign out, token refresh), allowing your app to react accordingly."
      },
      {
        id: "85-3",
        type: "mcq",
        question: "Which method is used for email/password sign in with Supabase?",
        options: ["signInWithOAuth", "signInWithOtp", "signInWithPassword", "signIn"],
        correctAnswer: "signInWithPassword",
        explanation: "signInWithPassword is used for traditional email/password authentication. signInWithOAuth is for social providers, and signInWithOtp is for magic links/OTP codes."
      },
      {
        id: "85-4",
        type: "descriptive",
        question: "Explain how to implement protected routes in a React app using Supabase Auth.",
        keywords: ["protected", "route", "user", "session", "redirect", "loading", "context", "useEffect", "authentication"],
        explanation: "Create an AuthContext that provides user/session state. Use useEffect to check auth state and redirect unauthenticated users. Create a ProtectedRoute wrapper component that checks if user exists before rendering children. Show loading state while checking auth to prevent flashing."
      }
    ]
  },
  {
    id: 86,
    title: "Role-Based Access Control",
    description: "Implement authorization with roles and permissions in your application",
    duration: "50 min",
    difficulty: "Advanced",
    month: 5,
    week: 3,
    category: "Authentication",
    content: `
      <h2>Role-Based Access Control (RBAC)</h2>
      <p>RBAC restricts system access based on roles assigned to users. It's a standard approach for managing permissions in applications.</p>

      <h3>RBAC Concepts</h3>
      <ul>
        <li><strong>User:</strong> The person accessing the system</li>
        <li><strong>Role:</strong> A named collection of permissions (admin, editor, viewer)</li>
        <li><strong>Permission:</strong> The ability to perform an action (create, read, update, delete)</li>
        <li><strong>Resource:</strong> What the permission applies to (posts, users, settings)</li>
      </ul>

      <h3>Database Schema for RBAC</h3>
      <div class="code-block">
        <pre>-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(50) DEFAULT 'user'
);

-- Simple role column approach
-- Roles: 'admin', 'editor', 'user'

-- Or more flexible: separate roles table
CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT
);

CREATE TABLE permissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  description TEXT
);

CREATE TABLE role_permissions (
  role_id INTEGER REFERENCES roles(id),
  permission_id INTEGER REFERENCES permissions(id),
  PRIMARY KEY (role_id, permission_id)
);

CREATE TABLE user_roles (
  user_id UUID REFERENCES users(id),
  role_id INTEGER REFERENCES roles(id),
  PRIMARY KEY (user_id, role_id)
);

-- Insert default roles and permissions
INSERT INTO roles (name) VALUES ('admin'), ('editor'), ('user');
INSERT INTO permissions (name) VALUES
  ('posts:create'), ('posts:read'), ('posts:update'), ('posts:delete'),
  ('users:manage'), ('settings:manage');</pre>
      </div>

      <h3>Middleware for Role Checking</h3>
      <div class="code-block">
        <pre>// Simple role check middleware
function requireRole(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    next();
  };
}

// Usage
app.delete('/api/users/:id',
  authenticateToken,
  requireRole('admin'),
  deleteUser
);

app.put('/api/posts/:id',
  authenticateToken,
  requireRole('admin', 'editor'),
  updatePost
);</pre>
      </div>

      <h3>Permission-Based Middleware</h3>
      <div class="code-block">
        <pre>// More granular permission checking
function requirePermission(permission) {
  return async (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const userPermissions = await getUserPermissions(req.user.id);

    if (!userPermissions.includes(permission)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }

    next();
  };
}

// Get user permissions from database
async function getUserPermissions(userId) {
  const result = await db.query(\`
    SELECT p.name FROM permissions p
    JOIN role_permissions rp ON p.id = rp.permission_id
    JOIN user_roles ur ON rp.role_id = ur.role_id
    WHERE ur.user_id = $1
  \`, [userId]);

  return result.rows.map(r => r.name);
}

// Usage
app.post('/api/posts',
  authenticateToken,
  requirePermission('posts:create'),
  createPost
);</pre>
      </div>

      <h3>RBAC in Supabase with RLS</h3>
      <div class="code-block">
        <pre>-- Add role to users
ALTER TABLE auth.users ADD COLUMN role VARCHAR(50) DEFAULT 'user';

-- Or use metadata
-- Access via auth.jwt() -> raw_user_meta_data -> role

-- RLS policy for admin-only access
CREATE POLICY "Admins can manage all users"
ON users
FOR ALL
USING (
  (SELECT role FROM auth.users WHERE id = auth.uid()) = 'admin'
);

-- RLS policy for role-based content access
CREATE POLICY "Editors can update posts"
ON posts
FOR UPDATE
USING (
  (SELECT role FROM auth.users WHERE id = auth.uid()) IN ('admin', 'editor')
);

-- RLS policy: users can only see their role-appropriate data
CREATE POLICY "Role-based data access"
ON sensitive_data
FOR SELECT
USING (
  required_role <= (
    SELECT role_level FROM roles
    WHERE name = (SELECT role FROM auth.users WHERE id = auth.uid())
  )
);</pre>
      </div>

      <h3>Frontend Role Checking</h3>
      <div class="code-block">
        <pre>// hooks/usePermissions.ts
import { useAuth } from '@/contexts/AuthContext';

export function usePermissions() {
  const { user } = useAuth();

  const hasRole = (role: string | string[]) => {
    if (!user) return false;
    const roles = Array.isArray(role) ? role : [role];
    return roles.includes(user.role);
  };

  const isAdmin = () => hasRole('admin');
  const isEditor = () => hasRole(['admin', 'editor']);

  return { hasRole, isAdmin, isEditor };
}

// Component usage
function AdminPanel() {
  const { isAdmin } = usePermissions();

  if (!isAdmin()) {
    return <p>Access denied</p>;
  }

  return <div>Admin content here</div>;
}

// Conditional rendering
function PostActions({ post }) {
  const { hasRole } = usePermissions();
  const { user } = useAuth();

  const canEdit = hasRole(['admin', 'editor']) || post.author_id === user?.id;
  const canDelete = hasRole('admin');

  return (
    <div>
      {canEdit && <button>Edit</button>}
      {canDelete && <button>Delete</button>}
    </div>
  );
}</pre>
      </div>

      <h3>Role-Based UI Components</h3>
      <div class="code-block">
        <pre>// components/RoleGate.tsx
interface RoleGateProps {
  allowedRoles: string[];
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function RoleGate({ allowedRoles, children, fallback = null }: RoleGateProps) {
  const { hasRole } = usePermissions();

  if (!hasRole(allowedRoles)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

// Usage
<RoleGate allowedRoles={['admin']}>
  <AdminDashboard />
</RoleGate>

<RoleGate
  allowedRoles={['admin', 'editor']}
  fallback={<p>You need editor access</p>}
>
  <EditPostButton />
</RoleGate></pre>
      </div>

      <h3>Best Practices</h3>
      <ul>
        <li>Always check permissions on the server, not just client</li>
        <li>Use the principle of least privilege</li>
        <li>Audit role assignments regularly</li>
        <li>Log permission-denied attempts</li>
        <li>Keep role definitions in a central place</li>
      </ul>
    `,
    questions: [
      {
        id: "86-1",
        type: "mcq",
        question: "What is the main purpose of Role-Based Access Control?",
        options: ["To encrypt user data", "To restrict access based on user roles", "To speed up authentication", "To manage passwords"],
        correctAnswer: "To restrict access based on user roles",
        explanation: "RBAC restricts system access based on roles assigned to users. Users are assigned roles, and roles have permissions that define what actions can be performed."
      },
      {
        id: "86-2",
        type: "mcq",
        question: "Why should permission checks happen on the server, not just the client?",
        options: ["It's faster on the server", "Client-side checks can be bypassed", "Servers have more memory", "It's easier to implement"],
        correctAnswer: "Client-side checks can be bypassed",
        explanation: "Client-side code can be modified or bypassed by users. Server-side checks are secure because users can't modify server code. Always validate permissions on the server."
      },
      {
        id: "86-3",
        type: "mcq",
        question: "What HTTP status code should be returned for insufficient permissions?",
        options: ["401 Unauthorized", "403 Forbidden", "404 Not Found", "500 Server Error"],
        correctAnswer: "403 Forbidden",
        explanation: "403 Forbidden indicates the user is authenticated but doesn't have permission. 401 Unauthorized means not authenticated (identity unknown)."
      },
      {
        id: "86-4",
        type: "descriptive",
        question: "Design a simple RBAC system for a blog with admin, editor, and user roles.",
        keywords: ["admin", "editor", "user", "create", "read", "update", "delete", "permission", "role", "posts"],
        explanation: "Admin: full access to all resources (CRUD users, posts, settings). Editor: can create/edit any post, read users, no delete. User: can create posts, edit own posts only, read all posts. Implement via middleware checking user.role against required roles for each route."
      }
    ]
  },
  {
    id: 87,
    title: "RESTful API Design Principles",
    description: "Learn best practices for designing clean, intuitive, and maintainable REST APIs",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 5,
    week: 4,
    category: "Node.js",
    content: `
      <h2>RESTful API Design</h2>
      <p>REST (Representational State Transfer) is an architectural style for designing networked applications. A well-designed API is intuitive, consistent, and easy to use.</p>

      <h3>REST Principles</h3>
      <ul>
        <li><strong>Client-Server:</strong> Separation of concerns</li>
        <li><strong>Stateless:</strong> Each request contains all needed information</li>
        <li><strong>Cacheable:</strong> Responses can be cached</li>
        <li><strong>Uniform Interface:</strong> Consistent resource identification</li>
        <li><strong>Layered System:</strong> Client doesn't know if connected to end server</li>
      </ul>

      <h3>Resource Naming Conventions</h3>
      <div class="code-block">
        <pre>// Good - Use nouns, plural form
GET    /api/users          // Get all users
GET    /api/users/123      // Get user 123
POST   /api/users          // Create user
PUT    /api/users/123      // Update user 123
DELETE /api/users/123      // Delete user 123

// Bad - Using verbs
GET    /api/getUsers
POST   /api/createUser
DELETE /api/deleteUser/123

// Nested resources
GET    /api/users/123/posts        // User's posts
GET    /api/users/123/posts/456    // Specific post
POST   /api/users/123/posts        // Create post for user

// Use hyphens for readability
GET    /api/user-profiles          // Good
GET    /api/user_profiles          // Avoid underscores
GET    /api/userProfiles           // Avoid camelCase</pre>
      </div>

      <h3>HTTP Methods</h3>
      <div class="code-block">
        <pre>// GET - Retrieve (safe, idempotent)
GET /api/posts              // List all
GET /api/posts/123          // Get one

// POST - Create (not idempotent)
POST /api/posts             // Create new post
// Returns 201 Created with Location header

// PUT - Replace entire resource (idempotent)
PUT /api/posts/123          // Replace post 123
// Send complete object

// PATCH - Partial update (idempotent)
PATCH /api/posts/123        // Update some fields
// Send only changed fields

// DELETE - Remove (idempotent)
DELETE /api/posts/123       // Delete post 123
// Returns 204 No Content</pre>
      </div>

      <h3>Status Codes</h3>
      <div class="code-block">
        <pre>// Success (2xx)
200 OK                  // General success
201 Created             // Resource created
204 No Content          // Success with no body (DELETE)

// Client Errors (4xx)
400 Bad Request         // Invalid syntax/validation
401 Unauthorized        // Not authenticated
403 Forbidden           // Authenticated but not allowed
404 Not Found           // Resource doesn't exist
409 Conflict            // Conflict with current state
422 Unprocessable       // Validation errors
429 Too Many Requests   // Rate limit exceeded

// Server Errors (5xx)
500 Internal Error      // Generic server error
503 Service Unavailable // Server temporarily down</pre>
      </div>

      <h3>Query Parameters</h3>
      <div class="code-block">
        <pre>// Filtering
GET /api/posts?status=published
GET /api/posts?author=123&category=tech

// Sorting
GET /api/posts?sort=created_at       // Ascending
GET /api/posts?sort=-created_at      // Descending
GET /api/posts?sort=title,-created_at // Multiple

// Pagination
GET /api/posts?page=2&limit=20
GET /api/posts?offset=40&limit=20
GET /api/posts?cursor=abc123         // Cursor-based

// Field selection
GET /api/posts?fields=id,title,summary

// Searching
GET /api/posts?search=javascript
GET /api/posts?q=javascript</pre>
      </div>

      <h3>Response Format</h3>
      <div class="code-block">
        <pre>// Single resource
{
  "data": {
    "id": 123,
    "title": "Post Title",
    "content": "...",
    "author": {
      "id": 1,
      "name": "John"
    },
    "createdAt": "2024-01-15T10:30:00Z"
  }
}

// Collection with pagination
{
  "data": [...],
  "meta": {
    "total": 100,
    "page": 2,
    "limit": 20,
    "totalPages": 5
  },
  "links": {
    "self": "/api/posts?page=2",
    "first": "/api/posts?page=1",
    "prev": "/api/posts?page=1",
    "next": "/api/posts?page=3",
    "last": "/api/posts?page=5"
  }
}

// Error response
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      { "field": "email", "message": "Invalid email format" },
      { "field": "password", "message": "Must be at least 8 characters" }
    ]
  }
}</pre>
      </div>

      <h3>Versioning</h3>
      <div class="code-block">
        <pre>// URL versioning (most common)
GET /api/v1/users
GET /api/v2/users

// Header versioning
GET /api/users
Accept: application/vnd.myapp.v2+json

// Query parameter
GET /api/users?version=2</pre>
      </div>

      <h3>HATEOAS (Hypermedia)</h3>
      <div class="code-block">
        <pre>// Include links to related actions/resources
{
  "data": {
    "id": 123,
    "title": "My Post",
    "status": "draft"
  },
  "links": {
    "self": "/api/posts/123",
    "author": "/api/users/1",
    "comments": "/api/posts/123/comments",
    "publish": "/api/posts/123/publish"
  },
  "actions": {
    "publish": {
      "href": "/api/posts/123/publish",
      "method": "POST"
    },
    "delete": {
      "href": "/api/posts/123",
      "method": "DELETE"
    }
  }
}</pre>
      </div>

      <h3>Best Practices Summary</h3>
      <ul>
        <li>Use nouns for resources, HTTP methods for actions</li>
        <li>Keep URLs simple and intuitive</li>
        <li>Use proper HTTP status codes</li>
        <li>Version your API from the start</li>
        <li>Provide consistent error responses</li>
        <li>Document your API (OpenAPI/Swagger)</li>
        <li>Use JSON for request/response bodies</li>
        <li>Support filtering, sorting, pagination</li>
      </ul>
    `,
    questions: [
      {
        id: "87-1",
        type: "mcq",
        question: "What is the correct HTTP method for creating a new resource?",
        options: ["GET", "POST", "PUT", "CREATE"],
        correctAnswer: "POST",
        explanation: "POST is used to create new resources. It's not idempotent, meaning multiple identical requests may create multiple resources. PUT is for updating/replacing."
      },
      {
        id: "87-2",
        type: "mcq",
        question: "Which URL pattern follows REST conventions?",
        options: ["/api/getUserById/123", "/api/users/123", "/api/user?id=123", "/api/fetch-user/123"],
        correctAnswer: "/api/users/123",
        explanation: "REST uses resource nouns (users) with IDs in the path. Verbs like 'get' or 'fetch' should not be in URLs - the HTTP method indicates the action."
      },
      {
        id: "87-3",
        type: "mcq",
        question: "What does 'idempotent' mean for HTTP methods?",
        options: ["The request is encrypted", "Multiple identical requests have the same effect as one", "The request is cached", "The request requires authentication"],
        correctAnswer: "Multiple identical requests have the same effect as one",
        explanation: "Idempotent means making the same request multiple times produces the same result. GET, PUT, DELETE are idempotent. POST is not (each POST may create a new resource)."
      },
      {
        id: "87-4",
        type: "descriptive",
        question: "Design REST endpoints for a blog API with posts and comments.",
        keywords: ["GET", "POST", "PUT", "DELETE", "posts", "comments", "nested", "resource", "CRUD"],
        explanation: "Posts: GET /posts (list), GET /posts/:id (single), POST /posts (create), PUT /posts/:id (update), DELETE /posts/:id. Comments: GET /posts/:id/comments (list), POST /posts/:id/comments (create), PUT /comments/:id (update), DELETE /comments/:id. Use proper status codes and consistent response format."
      }
    ]
  },
  {
    id: 88,
    title: "API Security & Rate Limiting",
    description: "Protect your APIs from common security threats and abuse",
    duration: "55 min",
    difficulty: "Advanced",
    month: 5,
    week: 4,
    category: "Node.js",
    content: `
      <h2>API Security Fundamentals</h2>
      <p>Securing your API is critical. An unsecured API can expose sensitive data, enable attacks, and damage your application and users.</p>

      <h3>Common API Security Threats</h3>
      <ul>
        <li><strong>Injection attacks:</strong> SQL, NoSQL, command injection</li>
        <li><strong>Broken authentication:</strong> Weak passwords, exposed tokens</li>
        <li><strong>Excessive data exposure:</strong> Returning too much data</li>
        <li><strong>Rate limiting absence:</strong> DoS, brute force attacks</li>
        <li><strong>BOLA:</strong> Broken Object Level Authorization</li>
        <li><strong>Mass assignment:</strong> Accepting unexpected fields</li>
      </ul>

      <h3>Input Validation</h3>
      <div class="code-block">
        <pre>npm install express-validator

const { body, param, validationResult } = require('express-validator');

// Validation middleware
const validateUser = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Valid email required'),
  body('password')
    .isLength({ min: 8 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/)
    .withMessage('Password must have uppercase, lowercase, and number'),
  body('username')
    .trim()
    .isLength({ min: 3, max: 30 })
    .isAlphanumeric()
    .withMessage('Username must be 3-30 alphanumeric characters'),
];

// Check validation results
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

app.post('/api/users', validateUser, handleValidation, createUser);</pre>
      </div>

      <h3>Rate Limiting</h3>
      <div class="code-block">
        <pre>npm install express-rate-limit

const rateLimit = require('express-rate-limit');

// General API rate limit
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100,                   // 100 requests per window
  message: { error: 'Too many requests, please try again later' },
  standardHeaders: true,      // Return rate limit info in headers
  legacyHeaders: false,
});

app.use('/api/', apiLimiter);

// Stricter limit for auth endpoints
const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,  // 1 hour
  max: 5,                     // 5 attempts
  message: { error: 'Too many login attempts' },
  skipSuccessfulRequests: true,
});

app.post('/api/login', authLimiter, loginHandler);
app.post('/api/register', authLimiter, registerHandler);

// Custom key generator (rate limit by user ID)
const userLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  keyGenerator: (req) => req.user?.id || req.ip,
});</pre>
      </div>

      <h3>CORS (Cross-Origin Resource Sharing)</h3>
      <div class="code-block">
        <pre>npm install cors

const cors = require('cors');

// Allow specific origins
const corsOptions = {
  origin: ['https://myapp.com', 'https://admin.myapp.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,  // Allow cookies
  maxAge: 86400,      // Cache preflight for 24 hours
};

app.use(cors(corsOptions));

// Dynamic origin check
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = ['https://myapp.com'];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};</pre>
      </div>

      <h3>Security Headers</h3>
      <div class="code-block">
        <pre>npm install helmet

const helmet = require('helmet');

app.use(helmet());  // Adds many security headers

// Individual headers
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
  }
}));
app.use(helmet.hsts({ maxAge: 31536000 }));
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet.frameguard({ action: 'deny' }));</pre>
      </div>

      <h3>Preventing SQL Injection</h3>
      <div class="code-block">
        <pre>// BAD - SQL injection vulnerable
const query = \`SELECT * FROM users WHERE id = \${req.params.id}\`;

// GOOD - Parameterized queries
const query = 'SELECT * FROM users WHERE id = $1';
const result = await db.query(query, [req.params.id]);

// With Supabase (automatically safe)
const { data } = await supabase
  .from('users')
  .select('*')
  .eq('id', req.params.id);

// With Mongoose (automatically safe)
const user = await User.findById(req.params.id);</pre>
      </div>

      <h3>Protecting Against Mass Assignment</h3>
      <div class="code-block">
        <pre>// BAD - Accepts any field from request
const user = await User.create(req.body);

// GOOD - Whitelist allowed fields
const { name, email, password } = req.body;
const user = await User.create({ name, email, password });

// Or use a DTO/schema
const allowedFields = ['name', 'email', 'bio'];
const userData = Object.keys(req.body)
  .filter(key => allowedFields.includes(key))
  .reduce((obj, key) => {
    obj[key] = req.body[key];
    return obj;
  }, {});</pre>
      </div>

      <h3>API Key Authentication</h3>
      <div class="code-block">
        <pre>// Generate API keys
const crypto = require('crypto');
const apiKey = crypto.randomBytes(32).toString('hex');

// Store hashed API key in database
const hashedKey = crypto.createHash('sha256').update(apiKey).digest('hex');

// Middleware to validate API key
function validateApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    return res.status(401).json({ error: 'API key required' });
  }

  const hashedKey = crypto.createHash('sha256').update(apiKey).digest('hex');

  // Look up in database
  const client = await db.query(
    'SELECT * FROM api_clients WHERE api_key_hash = $1',
    [hashedKey]
  );

  if (!client) {
    return res.status(403).json({ error: 'Invalid API key' });
  }

  req.client = client;
  next();
}

app.use('/api/external/', validateApiKey);</pre>
      </div>

      <h3>Request Logging for Security</h3>
      <div class="code-block">
        <pre>npm install morgan

const morgan = require('morgan');

// Log all requests
app.use(morgan('combined'));

// Custom logging for security events
function securityLogger(req, res, next) {
  const log = {
    timestamp: new Date().toISOString(),
    ip: req.ip,
    method: req.method,
    path: req.path,
    userId: req.user?.id,
    userAgent: req.headers['user-agent'],
  };

  // Log to security monitoring service
  console.log('Security log:', JSON.stringify(log));

  next();
}

// Log failed auth attempts
app.post('/api/login', (req, res) => {
  // ... auth logic
  if (!authenticated) {
    console.warn('Failed login attempt:', {
      email: req.body.email,
      ip: req.ip,
      timestamp: new Date().toISOString()
    });
  }
});</pre>
      </div>

      <h3>Security Checklist</h3>
      <ul>
        <li>Use HTTPS everywhere</li>
        <li>Validate and sanitize all input</li>
        <li>Implement rate limiting</li>
        <li>Use parameterized queries</li>
        <li>Set proper CORS policies</li>
        <li>Add security headers (Helmet)</li>
        <li>Hash passwords with bcrypt</li>
        <li>Use short-lived tokens</li>
        <li>Log security events</li>
        <li>Keep dependencies updated</li>
      </ul>
    `,
    questions: [
      {
        id: "88-1",
        type: "mcq",
        question: "What is the main purpose of rate limiting?",
        options: ["To speed up the API", "To prevent abuse and DoS attacks", "To encrypt data", "To validate input"],
        correctAnswer: "To prevent abuse and DoS attacks",
        explanation: "Rate limiting restricts the number of requests a client can make in a time window, preventing denial of service attacks, brute force attempts, and API abuse."
      },
      {
        id: "88-2",
        type: "mcq",
        question: "How do you prevent SQL injection attacks?",
        options: ["Use HTTPS", "Use parameterized queries", "Add rate limiting", "Use longer passwords"],
        correctAnswer: "Use parameterized queries",
        explanation: "Parameterized queries (prepared statements) separate SQL code from data, preventing attackers from injecting malicious SQL. Never concatenate user input into queries."
      },
      {
        id: "88-3",
        type: "mcq",
        question: "What does CORS control?",
        options: ["Database access", "Which origins can make cross-origin requests", "Password encryption", "API versioning"],
        correctAnswer: "Which origins can make cross-origin requests",
        explanation: "CORS (Cross-Origin Resource Sharing) controls which domains can make requests to your API from browsers. It prevents unauthorized cross-origin requests while allowing legitimate ones."
      },
      {
        id: "88-4",
        type: "descriptive",
        question: "Explain the security risks of accepting all fields from req.body and how to prevent it.",
        keywords: ["mass assignment", "whitelist", "validate", "fields", "req.body", "security", "privilege", "escalation"],
        explanation: "Mass assignment occurs when accepting all req.body fields directly. Attackers could add fields like 'role: admin' or 'verified: true'. Prevent by whitelisting allowed fields, using DTOs/schemas, or destructuring only expected fields from req.body before creating/updating records."
      }
    ]
  },
  {
    id: 89,
    title: "SQL Fundamentals",
    description: "Master SQL basics for querying and managing relational databases",
    duration: "55 min",
    difficulty: "Beginner",
    month: 5,
    week: 3,
    category: "Databases",
    content: `
      <h2>SQL Fundamentals</h2>
      <p>SQL (Structured Query Language) is the standard language for interacting with relational databases. Understanding SQL is essential for any backend developer.</p>

      <h3>What is a Relational Database?</h3>
      <p>Data is organized in tables with rows and columns. Tables can relate to each other through foreign keys, enabling complex data relationships.</p>

      <h3>Basic SELECT Queries</h3>
      <div class="code-block">
        <pre>-- Select all columns
SELECT * FROM users;

-- Select specific columns
SELECT name, email FROM users;

-- With alias
SELECT name AS username, email AS contact FROM users;

-- Distinct values
SELECT DISTINCT country FROM users;

-- Limit results
SELECT * FROM users LIMIT 10;
SELECT * FROM users LIMIT 10 OFFSET 20; -- Skip first 20</pre>
      </div>

      <h3>WHERE Clause</h3>
      <div class="code-block">
        <pre>-- Equality
SELECT * FROM users WHERE status = 'active';

-- Comparison
SELECT * FROM products WHERE price &gt; 100;
SELECT * FROM products WHERE price BETWEEN 50 AND 100;

-- Multiple conditions
SELECT * FROM users WHERE status = 'active' AND country = 'USA';
SELECT * FROM users WHERE country = 'USA' OR country = 'Canada';

-- NULL checks
SELECT * FROM users WHERE phone IS NULL;
SELECT * FROM users WHERE phone IS NOT NULL;

-- Pattern matching
SELECT * FROM users WHERE email LIKE '%@gmail.com';
SELECT * FROM users WHERE name LIKE 'John%';

-- IN clause
SELECT * FROM users WHERE country IN ('USA', 'Canada', 'Mexico');</pre>
      </div>

      <h3>ORDER BY</h3>
      <div class="code-block">
        <pre>-- Ascending (default)
SELECT * FROM products ORDER BY price;
SELECT * FROM products ORDER BY price ASC;

-- Descending
SELECT * FROM products ORDER BY price DESC;

-- Multiple columns
SELECT * FROM users ORDER BY country ASC, name DESC;

-- Order by expression
SELECT *, price * quantity AS total
FROM order_items
ORDER BY total DESC;</pre>
      </div>

      <h3>Aggregate Functions</h3>
      <div class="code-block">
        <pre>-- Count
SELECT COUNT(*) FROM users;
SELECT COUNT(*) FROM users WHERE status = 'active';
SELECT COUNT(DISTINCT country) FROM users;

-- Sum, Average, Min, Max
SELECT SUM(amount) FROM orders;
SELECT AVG(price) FROM products;
SELECT MIN(price), MAX(price) FROM products;

-- Grouping
SELECT country, COUNT(*) as user_count
FROM users
GROUP BY country;

-- Filter groups with HAVING
SELECT country, COUNT(*) as user_count
FROM users
GROUP BY country
HAVING COUNT(*) &gt; 100;</pre>
      </div>

      <h3>JOINs</h3>
      <div class="code-block">
        <pre>-- INNER JOIN: Only matching rows
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- LEFT JOIN: All left rows + matching right
SELECT users.name, orders.total
FROM users
LEFT JOIN orders ON users.id = orders.user_id;

-- Multiple joins
SELECT
  orders.id,
  users.name AS customer,
  products.name AS product,
  order_items.quantity
FROM orders
JOIN users ON orders.user_id = users.id
JOIN order_items ON orders.id = order_items.order_id
JOIN products ON order_items.product_id = products.id;</pre>
      </div>

      <h3>INSERT</h3>
      <div class="code-block">
        <pre>-- Insert single row
INSERT INTO users (name, email, status)
VALUES ('John Doe', 'john@example.com', 'active');

-- Insert multiple rows
INSERT INTO products (name, price, category)
VALUES
  ('Widget A', 29.99, 'electronics'),
  ('Widget B', 49.99, 'electronics'),
  ('Gadget C', 19.99, 'accessories');

-- Insert with returning (PostgreSQL)
INSERT INTO users (name, email)
VALUES ('Jane Doe', 'jane@example.com')
RETURNING id, created_at;</pre>
      </div>

      <h3>UPDATE</h3>
      <div class="code-block">
        <pre>-- Update specific rows
UPDATE users
SET status = 'inactive'
WHERE last_login &lt; '2024-01-01';

-- Update multiple columns
UPDATE products
SET price = price * 1.1, updated_at = NOW()
WHERE category = 'electronics';

-- Update with subquery
UPDATE products
SET price = (SELECT AVG(price) FROM products WHERE category = 'electronics')
WHERE id = 1;</pre>
      </div>

      <h3>DELETE</h3>
      <div class="code-block">
        <pre>-- Delete specific rows
DELETE FROM users WHERE status = 'deleted';

-- Delete with subquery
DELETE FROM order_items
WHERE order_id IN (
  SELECT id FROM orders WHERE status = 'cancelled'
);

-- Delete all rows (careful!)
DELETE FROM logs WHERE created_at &lt; '2023-01-01';

-- Truncate (faster for all rows)
TRUNCATE TABLE logs;</pre>
      </div>

      <h3>Creating Tables</h3>
      <div class="code-block">
        <pre>CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  total DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_users_email ON users(email);</pre>
      </div>
    `,
    questions: [
      {
        id: "89-1",
        type: "mcq",
        question: "What does SELECT DISTINCT do?",
        options: [
          "Selects the first row",
          "Returns only unique values, removing duplicates",
          "Selects rows distinctly faster",
          "Orders results uniquely"
        ],
        correctAnswer: "Returns only unique values, removing duplicates",
        explanation: "SELECT DISTINCT removes duplicate rows from the result set, returning only unique combinations of the selected columns."
      },
      {
        id: "89-2",
        type: "mcq",
        question: "What's the difference between WHERE and HAVING?",
        options: [
          "They're the same",
          "WHERE filters rows, HAVING filters groups after GROUP BY",
          "HAVING is for joins only",
          "WHERE is deprecated"
        ],
        correctAnswer: "WHERE filters rows, HAVING filters groups after GROUP BY",
        explanation: "WHERE filters individual rows before grouping. HAVING filters groups after GROUP BY and can use aggregate functions like COUNT(*) > 10."
      },
      {
        id: "89-3",
        type: "mcq",
        question: "What does LEFT JOIN return?",
        options: [
          "Only matching rows from both tables",
          "All rows from left table plus matching right rows, NULL for non-matches",
          "All rows from both tables",
          "Only non-matching rows"
        ],
        correctAnswer: "All rows from left table plus matching right rows, NULL for non-matches",
        explanation: "LEFT JOIN returns all rows from the left table. For each left row, it includes matching right rows or NULL values if no match exists."
      },
      {
        id: "89-4",
        type: "descriptive",
        question: "Write a SQL query to find the top 5 countries by number of active users.",
        keywords: ["SELECT", "COUNT", "GROUP BY", "WHERE", "ORDER BY", "LIMIT", "active"],
        explanation: "SELECT country, COUNT(*) as user_count FROM users WHERE status = 'active' GROUP BY country ORDER BY user_count DESC LIMIT 5"
      }
    ]
  },
  {
    id: 90,
    title: "PostgreSQL & Supabase Setup",
    description: "Set up PostgreSQL with Supabase for your Next.js applications",
    duration: "45 min",
    difficulty: "Intermediate",
    month: 5,
    week: 3,
    category: "Databases",
    content: `
      <h2>PostgreSQL & Supabase Setup</h2>
      <p>Supabase is an open-source Firebase alternative built on PostgreSQL. It provides a full backend-as-a-service with database, authentication, storage, and real-time subscriptions.</p>

      <h3>Creating a Supabase Project</h3>
      <div class="code-block">
        <pre># 1. Go to supabase.com and sign up
# 2. Click "New Project"
# 3. Choose organization, name, database password, region
# 4. Wait for project to provision

# Get credentials from Settings &gt; API:
# - Project URL
# - anon (public) key
# - service_role key (server-side only!)</pre>
      </div>

      <h3>Installation</h3>
      <div class="code-block">
        <pre>npm install @supabase/supabase-js

# Environment variables
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key</pre>
      </div>

      <h3>Client Setup</h3>
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
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
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

      <h3>Creating Tables in Supabase</h3>
      <div class="code-block">
        <pre>-- In Supabase SQL Editor
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  author_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT,
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;</pre>
      </div>

      <h3>Row Level Security (RLS)</h3>
      <div class="code-block">
        <pre>-- Users can read all published posts
CREATE POLICY "Public posts are viewable by everyone"
ON posts FOR SELECT
USING (published = true);

-- Users can only update their own posts
CREATE POLICY "Users can update own posts"
ON posts FOR UPDATE
USING (auth.uid() = author_id);

-- Users can only delete their own posts
CREATE POLICY "Users can delete own posts"
ON posts FOR DELETE
USING (auth.uid() = author_id);

-- Users can insert posts as themselves
CREATE POLICY "Users can create posts"
ON posts FOR INSERT
WITH CHECK (auth.uid() = author_id);</pre>
      </div>

      <h3>Querying Data</h3>
      <div class="code-block">
        <pre>// Server Component
import { createClient } from '@/lib/supabase/server';

export default async function PostsPage() {
  const supabase = await createClient();

  const { data: posts, error } = await supabase
    .from('posts')
    .select('*, profiles(username, avatar_url)')
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(10);

  if (error) {
    console.error(error);
    return &lt;div&gt;Error loading posts&lt;/div&gt;;
  }

  return (
    &lt;div&gt;
      {posts.map(post =&gt; (
        &lt;article key={post.id}&gt;
          &lt;h2&gt;{post.title}&lt;/h2&gt;
          &lt;p&gt;By {post.profiles.username}&lt;/p&gt;
        &lt;/article&gt;
      ))}
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Inserting Data</h3>
      <div class="code-block">
        <pre>'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { error } = await supabase
    .from('posts')
    .insert({
      author_id: user.id,
      title: formData.get('title'),
      content: formData.get('content'),
    });

  if (error) throw error;

  revalidatePath('/posts');
}</pre>
      </div>

      <h3>Updating and Deleting</h3>
      <div class="code-block">
        <pre>// Update
const { error } = await supabase
  .from('posts')
  .update({ title: 'New Title', updated_at: new Date() })
  .eq('id', postId);

// Delete
const { error } = await supabase
  .from('posts')
  .delete()
  .eq('id', postId);

// Upsert (insert or update)
const { error } = await supabase
  .from('profiles')
  .upsert({
    id: userId,
    username: 'newusername',
    updated_at: new Date(),
  });</pre>
      </div>

      <h3>Real-time Subscriptions</h3>
      <div class="code-block">
        <pre>'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

export function RealtimePosts() {
  const [posts, setPosts] = useState([]);
  const supabase = createClient();

  useEffect(() =&gt; {
    // Subscribe to changes
    const channel = supabase
      .channel('posts-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'posts' },
        (payload) =&gt; {
          if (payload.eventType === 'INSERT') {
            setPosts(prev =&gt; [payload.new, ...prev]);
          }
          if (payload.eventType === 'DELETE') {
            setPosts(prev =&gt; prev.filter(p =&gt; p.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () =&gt; {
      supabase.removeChannel(channel);
    };
  }, []);

  return &lt;div&gt;{/* render posts */}&lt;/div&gt;;
}</pre>
      </div>
    `,
    questions: [
      {
        id: "90-1",
        type: "mcq",
        question: "What is Row Level Security (RLS) in Supabase?",
        options: [
          "A way to encrypt rows",
          "Policies that control which rows users can access",
          "A backup system",
          "A caching mechanism"
        ],
        correctAnswer: "Policies that control which rows users can access",
        explanation: "RLS lets you define policies that determine which rows a user can SELECT, INSERT, UPDATE, or DELETE based on conditions like user ID matching."
      },
      {
        id: "90-2",
        type: "mcq",
        question: "What key should NEVER be exposed to the client?",
        options: [
          "anon key",
          "service_role key",
          "project URL",
          "project ID"
        ],
        correctAnswer: "service_role key",
        explanation: "The service_role key bypasses RLS and has full database access. It should only be used server-side and never exposed to the client."
      },
      {
        id: "90-3",
        type: "mcq",
        question: "What does auth.uid() return in RLS policies?",
        options: [
          "The table's primary key",
          "The current authenticated user's ID",
          "A random UUID",
          "The session token"
        ],
        correctAnswer: "The current authenticated user's ID",
        explanation: "auth.uid() is a Supabase function that returns the ID of the currently authenticated user, allowing policies to restrict access to user-owned data."
      },
      {
        id: "90-4",
        type: "descriptive",
        question: "Explain how to set up real-time subscriptions in a React component.",
        keywords: ["channel", "subscribe", "postgres_changes", "useEffect", "cleanup", "removeChannel"],
        explanation: "Create a channel with supabase.channel(), use .on('postgres_changes') to listen for INSERT/UPDATE/DELETE events, call .subscribe() to start listening. Clean up by calling removeChannel in useEffect's cleanup function."
      }
    ]
  },
  {
    id: 91,
    title: "Database Schema Design",
    description: "Learn to design efficient and scalable database schemas",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 5,
    week: 3,
    category: "Databases",
    content: `
      <h2>Database Schema Design</h2>
      <p>Good schema design is crucial for application performance, data integrity, and maintainability. Let's learn the principles of designing effective database schemas.</p>

      <h3>Normalization Basics</h3>
      <div class="code-block">
        <pre>-- BAD: Denormalized (data duplication)
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(100),
  customer_email VARCHAR(255),
  customer_phone VARCHAR(20),
  product_name VARCHAR(100),
  product_price DECIMAL(10,2),
  quantity INTEGER
);
-- Customer info duplicated in every order!

-- GOOD: Normalized (separate tables)
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20)
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price_at_time DECIMAL(10,2) NOT NULL -- Snapshot of price
);</pre>
      </div>

      <h3>Primary Keys</h3>
      <div class="code-block">
        <pre>-- Auto-incrementing integer (simple, efficient)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  ...
);

-- UUID (globally unique, no sequence)
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ...
);

-- Use UUID when:
-- - Distributed systems
-- - Need to generate IDs client-side
-- - Merging data from multiple sources

-- Use SERIAL when:
-- - Single database
-- - Need ordered IDs
-- - Better index performance</pre>
      </div>

      <h3>Foreign Keys and Relationships</h3>
      <div class="code-block">
        <pre>-- One-to-Many: User has many posts
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL
);

-- Many-to-Many: Posts have many tags
CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE post_tags (
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- One-to-One: User has one profile
CREATE TABLE profiles (
  id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  bio TEXT,
  avatar_url TEXT
);</pre>
      </div>

      <h3>ON DELETE Actions</h3>
      <div class="code-block">
        <pre>-- CASCADE: Delete child rows when parent deleted
user_id INTEGER REFERENCES users(id) ON DELETE CASCADE

-- SET NULL: Set to NULL when parent deleted
user_id INTEGER REFERENCES users(id) ON DELETE SET NULL

-- RESTRICT: Prevent deletion if children exist
user_id INTEGER REFERENCES users(id) ON DELETE RESTRICT

-- SET DEFAULT: Set to default value
user_id INTEGER DEFAULT 1 REFERENCES users(id) ON DELETE SET DEFAULT</pre>
      </div>

      <h3>Indexes</h3>
      <div class="code-block">
        <pre>-- Single column index
CREATE INDEX idx_users_email ON users(email);

-- Composite index (order matters!)
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);
-- Good for: WHERE user_id = 1 AND created_at > '2024-01-01'
-- Good for: WHERE user_id = 1
-- Not optimal for: WHERE created_at > '2024-01-01' alone

-- Unique index
CREATE UNIQUE INDEX idx_users_username ON users(username);

-- Partial index
CREATE INDEX idx_active_users ON users(email) WHERE status = 'active';

-- When to add indexes:
-- - Columns used in WHERE clauses
-- - Columns used in JOIN conditions
-- - Columns used in ORDER BY
-- - Foreign key columns</pre>
      </div>

      <h3>Data Types</h3>
      <div class="code-block">
        <pre>-- Text
name VARCHAR(100)    -- Variable length, max 100
description TEXT     -- Unlimited length
status CHAR(10)      -- Fixed length, padded

-- Numbers
quantity INTEGER     -- Whole numbers
price DECIMAL(10,2)  -- Exact decimal (money!)
rating REAL          -- Approximate floating point

-- Dates/Times
created_at TIMESTAMP WITH TIME ZONE  -- Full datetime with timezone
birth_date DATE                       -- Just the date
duration INTERVAL                     -- Time spans

-- Boolean
is_active BOOLEAN DEFAULT TRUE

-- JSON (PostgreSQL)
metadata JSONB       -- Binary JSON (faster, indexable)
settings JSON        -- Text JSON

-- Arrays (PostgreSQL)
tags TEXT[]          -- Array of strings</pre>
      </div>

      <h3>Common Patterns</h3>
      <div class="code-block">
        <pre>-- Soft Delete
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  deleted_at TIMESTAMP NULL  -- NULL = not deleted
);
-- Query: WHERE deleted_at IS NULL

-- Audit Trail
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  created_by INTEGER REFERENCES users(id),
  updated_by INTEGER REFERENCES users(id)
);

-- Slugs for SEO-friendly URLs
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL  -- 'my-blog-post'
);

-- Polymorphic associations
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  body TEXT NOT NULL,
  commentable_type VARCHAR(50),  -- 'Post' or 'Photo'
  commentable_id INTEGER
);</pre>
      </div>

      <h3>E-Commerce Schema Example</h3>
      <div class="code-block">
        <pre>CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  stock INTEGER DEFAULT 0,
  category_id UUID REFERENCES categories(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  status VARCHAR(20) DEFAULT 'pending',
  total DECIMAL(10,2) NOT NULL,
  shipping_address JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price_at_time DECIMAL(10,2) NOT NULL
);</pre>
      </div>
    `,
    questions: [
      {
        id: "91-1",
        type: "mcq",
        question: "What is database normalization?",
        options: [
          "Making the database faster",
          "Organizing data to reduce redundancy and dependency",
          "Adding more indexes",
          "Converting to a different database"
        ],
        correctAnswer: "Organizing data to reduce redundancy and dependency",
        explanation: "Normalization organizes tables and columns to minimize data duplication, ensure data integrity, and establish proper relationships between tables."
      },
      {
        id: "91-2",
        type: "mcq",
        question: "What does ON DELETE CASCADE do?",
        options: [
          "Prevents deletion of parent row",
          "Automatically deletes child rows when parent is deleted",
          "Sets child rows to NULL",
          "Logs the deletion"
        ],
        correctAnswer: "Automatically deletes child rows when parent is deleted",
        explanation: "ON DELETE CASCADE automatically removes all child rows that reference the deleted parent row, maintaining referential integrity."
      },
      {
        id: "91-3",
        type: "mcq",
        question: "Why use DECIMAL for money instead of FLOAT?",
        options: [
          "DECIMAL is faster",
          "FLOAT doesn't support decimals",
          "DECIMAL stores exact values without rounding errors",
          "FLOAT takes more storage"
        ],
        correctAnswer: "DECIMAL stores exact values without rounding errors",
        explanation: "FLOAT uses binary floating-point which can have rounding errors (0.1 + 0.2 != 0.3). DECIMAL stores exact decimal values, crucial for financial calculations."
      },
      {
        id: "91-4",
        type: "descriptive",
        question: "Explain how to design a many-to-many relationship between students and courses.",
        keywords: ["junction", "table", "foreign key", "composite", "primary key", "enrollments"],
        explanation: "Create a junction table (e.g., enrollments) with foreign keys to both students and courses. Use a composite primary key of (student_id, course_id) to ensure unique combinations. Add ON DELETE CASCADE to both foreign keys."
      }
    ]
  },
  {
    id: 92,
    title: "Prisma ORM Basics",
    description: "Use Prisma ORM for type-safe database access in Node.js",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 5,
    week: 3,
    category: "Databases",
    content: `
      <h2>Prisma ORM Basics</h2>
      <p>Prisma is a modern ORM that provides type-safe database access, auto-generated queries, and a great developer experience with TypeScript.</p>

      <h3>Installation</h3>
      <div class="code-block">
        <pre>npm install prisma @prisma/client
npx prisma init

# This creates:
# - prisma/schema.prisma
# - .env with DATABASE_URL</pre>
      </div>

      <h3>Schema Definition</h3>
      <div class="code-block">
        <pre>// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  profile   Profile?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Profile {
  id     Int    @id @default(autoincrement())
  bio    String?
  user   User   @relation(fields: [userId], references: [id])
  userId Int    @unique
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  tags      Tag[]
  createdAt DateTime @default(now())
}

model Tag {
  id    Int    @id @default(autoincrement())
  name  String @unique
  posts Post[]
}</pre>
      </div>

      <h3>Migrations</h3>
      <div class="code-block">
        <pre># Create and run migration
npx prisma migrate dev --name init

# Generate Prisma Client
npx prisma generate

# Push schema without migration (development)
npx prisma db push

# View database in browser
npx prisma studio</pre>
      </div>

      <h3>Client Setup</h3>
      <div class="code-block">
        <pre>// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}</pre>
      </div>

      <h3>Basic CRUD Operations</h3>
      <div class="code-block">
        <pre>import { prisma } from '@/lib/prisma';

// Create
const user = await prisma.user.create({
  data: {
    email: 'alice@example.com',
    name: 'Alice',
  },
});

// Read
const users = await prisma.user.findMany();
const user = await prisma.user.findUnique({
  where: { email: 'alice@example.com' },
});
const user = await prisma.user.findFirst({
  where: { name: { contains: 'Ali' } },
});

// Update
const updatedUser = await prisma.user.update({
  where: { id: 1 },
  data: { name: 'Alice Smith' },
});

// Delete
await prisma.user.delete({
  where: { id: 1 },
});</pre>
      </div>

      <h3>Filtering and Sorting</h3>
      <div class="code-block">
        <pre>// Where conditions
const users = await prisma.user.findMany({
  where: {
    email: { contains: '@gmail.com' },
    name: { startsWith: 'A' },
    createdAt: { gte: new Date('2024-01-01') },
  },
});

// OR / AND
const users = await prisma.user.findMany({
  where: {
    OR: [
      { email: { contains: '@gmail.com' } },
      { email: { contains: '@yahoo.com' } },
    ],
  },
});

// Sorting
const users = await prisma.user.findMany({
  orderBy: [
    { createdAt: 'desc' },
    { name: 'asc' },
  ],
});

// Pagination
const users = await prisma.user.findMany({
  skip: 10,
  take: 10,
});</pre>
      </div>

      <h3>Relations</h3>
      <div class="code-block">
        <pre>// Include related data
const userWithPosts = await prisma.user.findUnique({
  where: { id: 1 },
  include: {
    posts: true,
    profile: true,
  },
});

// Nested includes
const userWithPostsAndTags = await prisma.user.findUnique({
  where: { id: 1 },
  include: {
    posts: {
      include: { tags: true },
    },
  },
});

// Select specific fields
const user = await prisma.user.findUnique({
  where: { id: 1 },
  select: {
    email: true,
    name: true,
    posts: {
      select: { title: true },
    },
  },
});</pre>
      </div>

      <h3>Creating Related Records</h3>
      <div class="code-block">
        <pre>// Create with nested relation
const user = await prisma.user.create({
  data: {
    email: 'bob@example.com',
    name: 'Bob',
    profile: {
      create: { bio: 'Developer' },
    },
    posts: {
      create: [
        { title: 'First Post' },
        { title: 'Second Post' },
      ],
    },
  },
  include: { profile: true, posts: true },
});

// Connect to existing record
const post = await prisma.post.create({
  data: {
    title: 'New Post',
    author: { connect: { id: 1 } },
    tags: {
      connect: [{ id: 1 }, { id: 2 }],
    },
  },
});</pre>
      </div>

      <h3>Transactions</h3>
      <div class="code-block">
        <pre>// Sequential transactions
const [user, post] = await prisma.$transaction([
  prisma.user.create({ data: { email: 'new@example.com' } }),
  prisma.post.create({ data: { title: 'Post', authorId: 1 } }),
]);

// Interactive transactions
const result = await prisma.$transaction(async (tx) =&gt; {
  const user = await tx.user.create({
    data: { email: 'new@example.com' },
  });

  const post = await tx.post.create({
    data: { title: 'Post', authorId: user.id },
  });

  return { user, post };
});</pre>
      </div>

      <h3>Aggregations</h3>
      <div class="code-block">
        <pre>// Count
const count = await prisma.user.count({
  where: { email: { contains: '@gmail.com' } },
});

// Aggregate
const stats = await prisma.post.aggregate({
  _count: true,
  _avg: { views: true },
  _max: { views: true },
});

// Group by
const postsByAuthor = await prisma.post.groupBy({
  by: ['authorId'],
  _count: { id: true },
  orderBy: { _count: { id: 'desc' } },
});</pre>
      </div>
    `,
    questions: [
      {
        id: "92-1",
        type: "mcq",
        question: "What command generates the Prisma Client?",
        options: [
          "npx prisma init",
          "npx prisma generate",
          "npx prisma migrate",
          "npx prisma build"
        ],
        correctAnswer: "npx prisma generate",
        explanation: "npx prisma generate reads your schema and generates a type-safe client tailored to your models. Run it after schema changes."
      },
      {
        id: "92-2",
        type: "mcq",
        question: "What does the @unique attribute do in a Prisma schema?",
        options: [
          "Makes the field a primary key",
          "Ensures all values in the column are unique",
          "Makes the field required",
          "Auto-increments the field"
        ],
        correctAnswer: "Ensures all values in the column are unique",
        explanation: "@unique creates a unique constraint on the column, preventing duplicate values. It's different from @id which defines the primary key."
      },
      {
        id: "92-3",
        type: "mcq",
        question: "What is the difference between include and select in Prisma?",
        options: [
          "They're the same",
          "include adds relations, select chooses specific fields",
          "include is faster",
          "select only works with arrays"
        ],
        correctAnswer: "include adds relations, select chooses specific fields",
        explanation: "include fetches related records alongside the main query. select lets you pick specific fields to return. You can't use both at the top level."
      },
      {
        id: "92-4",
        type: "descriptive",
        question: "Explain how to create a user with a profile and posts in a single Prisma query.",
        keywords: ["create", "data", "nested", "profile", "posts", "include"],
        explanation: "Use prisma.user.create with nested create objects: data: { email: '...', profile: { create: { bio: '...' } }, posts: { create: [{ title: '...' }] } }. Use include to return the created relations."
      }
    ]
  },
  {
    id: 93,
    title: "NoSQL with MongoDB",
    description: "Learn MongoDB basics and when to choose NoSQL over SQL",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 5,
    week: 3,
    category: "Databases",
    content: `
      <h2>NoSQL with MongoDB</h2>
      <p>MongoDB is a document-based NoSQL database that stores data in flexible, JSON-like documents. It's great for rapid development, flexible schemas, and horizontal scaling.</p>

      <h3>SQL vs NoSQL</h3>
      <div class="code-block">
        <pre>// SQL (PostgreSQL)
// Tables with fixed schemas
// Rows and columns
// Relationships via foreign keys
// ACID transactions
// Complex queries with JOINs

// NoSQL (MongoDB)
// Collections of documents
// Flexible schema (schemaless)
// Embedded documents or references
// BASE (Basically Available, Soft state, Eventually consistent)
// Simple queries, embed related data

// Choose MongoDB when:
// - Flexible/evolving schema
// - Hierarchical/nested data
// - High write throughput
// - Horizontal scaling needed

// Choose SQL when:
// - Complex relationships
// - ACID transactions required
// - Complex queries/reporting
// - Data integrity is critical</pre>
      </div>

      <h3>MongoDB Setup</h3>
      <div class="code-block">
        <pre># Option 1: MongoDB Atlas (cloud)
# Go to mongodb.com/atlas
# Create cluster, get connection string

# Option 2: Local with Docker
docker run -d -p 27017:27017 --name mongodb mongo

# Install driver
npm install mongodb

# Or use Mongoose ODM
npm install mongoose</pre>
      </div>

      <h3>Connecting with Native Driver</h3>
      <div class="code-block">
        <pre>import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('myapp');
    const users = db.collection('users');

    // Insert
    const result = await users.insertOne({
      name: 'Alice',
      email: 'alice@example.com',
      createdAt: new Date(),
    });

    // Find
    const user = await users.findOne({ email: 'alice@example.com' });
    console.log(user);
  } finally {
    await client.close();
  }
}

run();</pre>
      </div>

      <h3>Mongoose ODM</h3>
      <div class="code-block">
        <pre>import mongoose from 'mongoose';

// Connect
await mongoose.connect(process.env.MONGODB_URI);

// Define Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  profile: {
    bio: String,
    avatar: String,
  },
  createdAt: { type: Date, default: Date.now },
});

// Create Model
const User = mongoose.model('User', userSchema);</pre>
      </div>

      <h3>CRUD with Mongoose</h3>
      <div class="code-block">
        <pre>// Create
const user = new User({
  name: 'Bob',
  email: 'bob@example.com',
});
await user.save();

// Or create directly
const user = await User.create({
  name: 'Bob',
  email: 'bob@example.com',
});

// Read
const users = await User.find(); // All
const user = await User.findOne({ email: 'bob@example.com' });
const user = await User.findById(id);

// Update
await User.updateOne(
  { email: 'bob@example.com' },
  { $set: { name: 'Robert' } }
);
const user = await User.findByIdAndUpdate(
  id,
  { name: 'Robert' },
  { new: true } // Return updated document
);

// Delete
await User.deleteOne({ email: 'bob@example.com' });
await User.findByIdAndDelete(id);</pre>
      </div>

      <h3>Query Operators</h3>
      <div class="code-block">
        <pre>// Comparison
await User.find({ age: { $gt: 18 } });      // Greater than
await User.find({ age: { $gte: 18 } });     // Greater than or equal
await User.find({ age: { $lt: 30 } });      // Less than
await User.find({ age: { $in: [20, 25] } }); // In array

// Logical
await User.find({
  $and: [{ age: { $gte: 18 } }, { age: { $lte: 30 } }]
});
await User.find({
  $or: [{ name: 'Alice' }, { name: 'Bob' }]
});

// Text search
await User.find({ name: { $regex: /^A/i } }); // Starts with A

// Array queries
await User.find({ tags: 'javascript' });      // Contains
await User.find({ tags: { $all: ['js', 'ts'] } }); // Contains all

// Sorting and pagination
await User.find()
  .sort({ createdAt: -1 })
  .skip(10)
  .limit(10);</pre>
      </div>

      <h3>Embedded Documents vs References</h3>
      <div class="code-block">
        <pre>// Embedded: Data together in one document
// Good for: 1:1, 1:few relationships, frequently accessed together
const userSchema = new mongoose.Schema({
  name: String,
  address: {           // Embedded
    street: String,
    city: String,
    zip: String,
  },
  orders: [{           // Embedded array
    product: String,
    quantity: Number,
    date: Date,
  }],
});

// References: Separate documents, linked by ID
// Good for: 1:many, many:many, data accessed independently
const postSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

// Populate references
const posts = await Post.find().populate('author');
// posts[0].author is now the full User document!</pre>
      </div>

      <h3>Indexes</h3>
      <div class="code-block">
        <pre>const userSchema = new mongoose.Schema({
  email: { type: String, unique: true }, // Unique index
  name: String,
  createdAt: Date,
});

// Single field index
userSchema.index({ createdAt: -1 });

// Compound index
userSchema.index({ name: 1, email: 1 });

// Text index for search
userSchema.index({ name: 'text', bio: 'text' });

// Then search with:
await User.find({ $text: { $search: 'developer' } });</pre>
      </div>

      <h3>Aggregation Pipeline</h3>
      <div class="code-block">
        <pre>// Complex queries with aggregation
const result = await Order.aggregate([
  // Stage 1: Filter
  { $match: { status: 'completed' } },

  // Stage 2: Group
  { $group: {
    _id: '$customerId',
    totalSpent: { $sum: '$total' },
    orderCount: { $count: {} },
  }},

  // Stage 3: Sort
  { $sort: { totalSpent: -1 } },

  // Stage 4: Limit
  { $limit: 10 },

  // Stage 5: Lookup (join)
  { $lookup: {
    from: 'customers',
    localField: '_id',
    foreignField: '_id',
    as: 'customer',
  }},
]);</pre>
      </div>
    `,
    questions: [
      {
        id: "93-1",
        type: "mcq",
        question: "When should you choose MongoDB over PostgreSQL?",
        options: [
          "When you need complex JOINs",
          "When schema is flexible and data is hierarchical",
          "When you need ACID transactions",
          "For financial applications"
        ],
        correctAnswer: "When schema is flexible and data is hierarchical",
        explanation: "MongoDB excels with flexible, evolving schemas and hierarchical/nested data. SQL databases are better for complex relationships and strict data integrity."
      },
      {
        id: "93-2",
        type: "mcq",
        question: "What does populate() do in Mongoose?",
        options: [
          "Fills in default values",
          "Replaces ObjectId references with actual documents",
          "Populates an array with new items",
          "Validates the schema"
        ],
        correctAnswer: "Replaces ObjectId references with actual documents",
        explanation: "populate() performs a JOIN-like operation, replacing ObjectId references with the actual referenced documents from other collections."
      },
      {
        id: "93-3",
        type: "mcq",
        question: "When should you embed documents vs use references?",
        options: [
          "Always embed for performance",
          "Always reference for normalization",
          "Embed for closely related, frequently accessed data; reference for independent data",
          "Embed arrays, reference objects"
        ],
        correctAnswer: "Embed for closely related, frequently accessed data; reference for independent data",
        explanation: "Embed when data is accessed together and has a 1:1 or 1:few relationship. Use references for 1:many relationships, when data is accessed independently, or when documents would grow too large."
      },
      {
        id: "93-4",
        type: "descriptive",
        question: "Explain the MongoDB aggregation pipeline and give an example use case.",
        keywords: ["stages", "$match", "$group", "$sort", "pipeline", "transform", "aggregate"],
        explanation: "The aggregation pipeline processes documents through stages, each transforming the data. Example: $match filters orders by date, $group calculates total revenue per product, $sort orders by revenue, $limit returns top 10. It's powerful for analytics and reporting."
      }
    ]
  },
  {
    id: 94,
    title: "Authentication Fundamentals",
    description: "Understand core authentication concepts and security best practices",
    duration: "45 min",
    difficulty: "Intermediate",
    month: 5,
    week: 4,
    category: "Security",
    content: `
      <h2>Authentication Fundamentals</h2>
      <p>Authentication verifies who a user is, while authorization determines what they can do. Understanding these concepts is crucial for building secure applications.</p>

      <h3>Authentication vs Authorization</h3>
      <div class="code-block">
        <pre>// Authentication: "Who are you?"
// - Login with username/password
// - OAuth with Google/GitHub
// - Magic links
// - Biometrics

// Authorization: "What can you do?"
// - Role-based: admin, user, guest
// - Permission-based: read, write, delete
// - Resource-based: can edit own posts only</pre>
      </div>

      <h3>Password Hashing</h3>
      <div class="code-block">
        <pre>import bcrypt from 'bcryptjs';

// NEVER store plain text passwords!
// Hash on registration
async function register(email: string, password: string) {
  const salt = await bcrypt.genSalt(12); // Cost factor
  const hash = await bcrypt.hash(password, salt);

  await db.users.create({
    email,
    password: hash, // Store the hash, not password
  });
}

// Verify on login
async function login(email: string, password: string) {
  const user = await db.users.findByEmail(email);
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;

  return user;
}</pre>
      </div>

      <h3>Session-Based Authentication</h3>
      <div class="code-block">
        <pre>// How it works:
// 1. User logs in with credentials
// 2. Server creates session, stores in database
// 3. Server sends session ID in cookie
// 4. Browser sends cookie with every request
// 5. Server looks up session to identify user

// Pros:
// - Easy to revoke (delete from DB)
// - Can store any data in session
// - Secure with HttpOnly cookies

// Cons:
// - Requires database lookup on every request
// - Harder to scale (session affinity)
// - Server must maintain state

// Session cookie settings
const cookieOptions = {
  httpOnly: true,      // Not accessible via JavaScript
  secure: true,        // HTTPS only in production
  sameSite: 'lax',     // CSRF protection
  maxAge: 60 * 60 * 24 * 7, // 1 week
};</pre>
      </div>

      <h3>Token-Based Authentication (JWT)</h3>
      <div class="code-block">
        <pre>import jwt from 'jsonwebtoken';

// How it works:
// 1. User logs in with credentials
// 2. Server creates JWT with user data
// 3. Client stores token (localStorage, cookie)
// 4. Client sends token in Authorization header
// 5. Server verifies token signature

// Create token
function createToken(user: User) {
  return jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
}

// Verify token
function verifyToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
}

// Usage in middleware
async function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });

  const payload = verifyToken(token);
  if (!payload) return res.status(401).json({ error: 'Invalid token' });

  req.user = payload;
  next();
}</pre>
      </div>

      <h3>JWT Structure</h3>
      <div class="code-block">
        <pre>// JWT has 3 parts: header.payload.signature
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
// eyJ1c2VySWQiOjEsImVtYWlsIjoiam9obkBleGFtcGxlLmNvbSJ9.
// 4tG7DRhT8AxMqpqxK7y2gGNpPmCTHT8v5ZjKfFVnXQE

// Header (algorithm + type)
{
  "alg": "HS256",
  "typ": "JWT"
}

// Payload (claims)
{
  "userId": 1,
  "email": "john@example.com",
  "iat": 1699900000,  // Issued at
  "exp": 1699903600   // Expires at
}

// Signature
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)

// ⚠️ Payload is NOT encrypted - just encoded!
// Anyone can decode it. Don't store secrets!</pre>
      </div>

      <h3>Refresh Tokens</h3>
      <div class="code-block">
        <pre>// Problem: Short-lived tokens expire, requiring re-login
// Solution: Use refresh tokens

// Access token: short-lived (15min), used for API calls
// Refresh token: long-lived (7 days), stored securely, used to get new access tokens

async function login(email: string, password: string) {
  const user = await validateCredentials(email, password);

  const accessToken = createAccessToken(user);  // 15 min
  const refreshToken = createRefreshToken(user); // 7 days

  // Store refresh token in DB (to allow revocation)
  await db.refreshTokens.create({
    token: refreshToken,
    userId: user.id,
    expiresAt: addDays(new Date(), 7),
  });

  return { accessToken, refreshToken };
}

// Refresh endpoint
async function refresh(refreshToken: string) {
  const stored = await db.refreshTokens.findByToken(refreshToken);
  if (!stored || stored.expiresAt &lt; new Date()) {
    throw new Error('Invalid refresh token');
  }

  const user = await db.users.findById(stored.userId);
  const newAccessToken = createAccessToken(user);

  return { accessToken: newAccessToken };
}</pre>
      </div>

      <h3>Security Best Practices</h3>
      <div class="code-block">
        <pre>// 1. Use HTTPS everywhere
// 2. Hash passwords with bcrypt (cost >= 12)
// 3. Use HttpOnly, Secure cookies
// 4. Implement rate limiting on login
// 5. Use short-lived tokens
// 6. Store refresh tokens in DB for revocation
// 7. Validate input, escape output
// 8. Use CSRF tokens for form submissions
// 9. Implement account lockout after failed attempts
// 10. Log authentication events

// Rate limiting example
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: 'Too many login attempts',
});

app.post('/login', loginLimiter, handleLogin);</pre>
      </div>

      <h3>Common Authentication Attacks</h3>
      <div class="code-block">
        <pre>// 1. Brute Force
// Attack: Try many passwords
// Defense: Rate limiting, account lockout, CAPTCHA

// 2. Credential Stuffing
// Attack: Use leaked username/password combos
// Defense: MFA, breach detection, password requirements

// 3. Session Hijacking
// Attack: Steal session cookie
// Defense: HttpOnly, Secure flags, regenerate session on login

// 4. CSRF (Cross-Site Request Forgery)
// Attack: Trick user into making authenticated requests
// Defense: CSRF tokens, SameSite cookies

// 5. JWT Token Theft
// Attack: Steal token from localStorage
// Defense: Use HttpOnly cookies, short expiry</pre>
      </div>
    `,
    questions: [
      {
        id: "94-1",
        type: "mcq",
        question: "What's the difference between authentication and authorization?",
        options: [
          "They're the same thing",
          "Authentication verifies identity, authorization determines permissions",
          "Authentication is for admins, authorization is for users",
          "Authorization comes before authentication"
        ],
        correctAnswer: "Authentication verifies identity, authorization determines permissions",
        explanation: "Authentication answers 'who are you?' (identity). Authorization answers 'what can you do?' (permissions). Authentication must happen before authorization."
      },
      {
        id: "94-2",
        type: "mcq",
        question: "Why use bcrypt instead of SHA-256 for password hashing?",
        options: [
          "bcrypt is faster",
          "bcrypt is intentionally slow and resistant to brute force",
          "SHA-256 is outdated",
          "bcrypt produces shorter hashes"
        ],
        correctAnswer: "bcrypt is intentionally slow and resistant to brute force",
        explanation: "bcrypt has a configurable work factor making it intentionally slow, which protects against brute force attacks. SHA-256 is fast, making it easier to try many passwords."
      },
      {
        id: "94-3",
        type: "mcq",
        question: "What should you NOT store in a JWT payload?",
        options: [
          "User ID",
          "Email",
          "Passwords or sensitive secrets",
          "Expiration time"
        ],
        correctAnswer: "Passwords or sensitive secrets",
        explanation: "JWT payloads are encoded, not encrypted. Anyone can decode them. Never store passwords, API keys, or other secrets in JWTs."
      },
      {
        id: "94-4",
        type: "descriptive",
        question: "Explain how refresh tokens work and why they're used.",
        keywords: ["short-lived", "access token", "long-lived", "refresh", "revoke", "database", "security"],
        explanation: "Access tokens are short-lived (15 min) for security. Refresh tokens are long-lived (days/weeks) and stored in the database. When access token expires, client uses refresh token to get a new one. Storing refresh tokens allows revocation. This balances security with user experience."
      }
    ]
  },
  {
    id: 95,
    title: "Implementing Auth with Supabase",
    description: "Set up complete authentication using Supabase Auth in Next.js",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 5,
    week: 4,
    category: "Security",
    content: `
      <h2>Implementing Auth with Supabase</h2>
      <p>Supabase provides a complete authentication solution with email/password, social logins, and magic links out of the box.</p>

      <h3>Setup</h3>
      <div class="code-block">
        <pre>npm install @supabase/supabase-js @supabase/ssr

# .env.local
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key</pre>
      </div>

      <h3>Client Configuration</h3>
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
import { createServerClient } from '@supabase/ssr';
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

      <h3>Sign Up with Email</h3>
      <div class="code-block">
        <pre>'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export async function signUp(formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      emailRedirectTo: \`\${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback\`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  // User needs to confirm email
  return { success: 'Check your email for confirmation link' };
}</pre>
      </div>

      <h3>Sign In</h3>
      <div class="code-block">
        <pre>'use server';

export async function signIn(formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  if (error) {
    return { error: error.message };
  }

  redirect('/dashboard');
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/');
}</pre>
      </div>

      <h3>Auth Callback Route</h3>
      <div class="code-block">
        <pre>// app/auth/callback/route.ts
import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (code) {
    const supabase = await createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(new URL('/dashboard', request.url));
}</pre>
      </div>

      <h3>OAuth Login</h3>
      <div class="code-block">
        <pre>'use server';

export async function signInWithGoogle() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: \`\${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback\`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  redirect(data.url);
}

// In Supabase Dashboard:
// 1. Authentication &gt; Providers
// 2. Enable Google
// 3. Add Client ID and Secret from Google Cloud Console</pre>
      </div>

      <h3>Getting Current User</h3>
      <div class="code-block">
        <pre>// Server Component
import { createClient } from '@/lib/supabase/server';

export default async function Dashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return &lt;h1&gt;Welcome, {user.email}&lt;/h1&gt;;
}

// Client Component
'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

export function UserInfo() {
  const [user, setUser] = useState(null);
  const supabase = createClient();

  useEffect(() =&gt; {
    supabase.auth.getUser().then(({ data }) =&gt; {
      setUser(data.user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) =&gt; {
        setUser(session?.user ?? null);
      }
    );

    return () =&gt; subscription.unsubscribe();
  }, []);

  return user ? &lt;span&gt;{user.email}&lt;/span&gt; : &lt;span&gt;Not logged in&lt;/span&gt;;
}</pre>
      </div>

      <h3>Protected Routes with Middleware</h3>
      <div class="code-block">
        <pre>// middleware.ts
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll(); },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =&gt; {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  // Redirect unauthenticated users
  if (!user && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
};</pre>
      </div>

      <h3>Password Reset</h3>
      <div class="code-block">
        <pre>'use server';

export async function resetPassword(email: string) {
  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: \`\${process.env.NEXT_PUBLIC_SITE_URL}/auth/update-password\`,
  });

  if (error) return { error: error.message };
  return { success: 'Check your email for reset link' };
}

export async function updatePassword(newPassword: string) {
  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) return { error: error.message };
  redirect('/dashboard');
}</pre>
      </div>
    `,
    questions: [
      {
        id: "95-1",
        type: "mcq",
        question: "What is the auth callback route used for?",
        options: [
          "Displaying login form",
          "Exchanging the auth code for a session after email/OAuth confirmation",
          "Logging out users",
          "Resetting passwords"
        ],
        correctAnswer: "Exchanging the auth code for a session after email/OAuth confirmation",
        explanation: "When users click email confirmation links or complete OAuth, they're redirected to the callback route which exchanges the code for a session."
      },
      {
        id: "95-2",
        type: "mcq",
        question: "Why use 'use server' for auth actions?",
        options: [
          "It's faster",
          "Auth operations should run on the server where secrets are safe",
          "It's required by Next.js",
          "To enable caching"
        ],
        correctAnswer: "Auth operations should run on the server where secrets are safe",
        explanation: "Server actions ensure sensitive operations like login run on the server, keeping credentials and session management secure from client-side tampering."
      },
      {
        id: "95-3",
        type: "mcq",
        question: "How do you protect routes in Next.js with Supabase?",
        options: [
          "Add password to each page",
          "Use middleware to check authentication and redirect",
          "Hide the routes in the file system",
          "Use client-side checks only"
        ],
        correctAnswer: "Use middleware to check authentication and redirect",
        explanation: "Middleware runs before routes, allowing you to check if the user is authenticated and redirect to login if not. This protects routes at the edge."
      },
      {
        id: "95-4",
        type: "descriptive",
        question: "Explain how to implement OAuth login with Google using Supabase.",
        keywords: ["signInWithOAuth", "provider", "google", "redirect", "callback", "dashboard"],
        explanation: "Enable Google in Supabase Auth settings with client ID/secret from Google Cloud. Call signInWithOAuth with provider 'google' and redirectTo for the callback URL. Supabase handles the OAuth flow, then redirects to your callback route which exchanges the code for a session."
      }
    ]
  },
  {
    id: 96,
    title: "OAuth & Social Login",
    description: "Implement social authentication with OAuth providers",
    duration: "45 min",
    difficulty: "Advanced",
    month: 5,
    week: 4,
    category: "Security",
    content: `
      <h2>OAuth & Social Login</h2>
      <p>OAuth 2.0 is the industry standard for authorization, allowing users to sign in with their existing accounts from providers like Google, GitHub, and Facebook.</p>

      <h3>How OAuth 2.0 Works</h3>
      <div class="code-block">
        <pre>// OAuth 2.0 Authorization Code Flow

// 1. User clicks "Sign in with Google"
// 2. Your app redirects to Google's auth page
// 3. User logs in and grants permissions
// 4. Google redirects back with authorization code
// 5. Your server exchanges code for tokens
// 6. Your server uses tokens to get user info
// 7. Create/update user in your database
// 8. Create session for the user

// Key Terms:
// - Client ID: Your app's public identifier
// - Client Secret: Your app's private key (server-only!)
// - Redirect URI: Where provider sends user after auth
// - Scope: Permissions requested (email, profile, etc.)
// - Authorization Code: Temporary code exchanged for tokens
// - Access Token: Token to access user's data
// - Refresh Token: Token to get new access tokens</pre>
      </div>

      <h3>Setting Up Google OAuth</h3>
      <div class="code-block">
        <pre>// 1. Go to Google Cloud Console
// 2. Create project, enable Google+ API
// 3. Create OAuth 2.0 credentials
// 4. Add authorized redirect URIs

// .env.local
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret

// Authorized redirect URIs:
// Development: http://localhost:3000/api/auth/callback/google
// Production: https://yoursite.com/api/auth/callback/google</pre>
      </div>

      <h3>Implementing with NextAuth.js</h3>
      <div class="code-block">
        <pre>// auth.ts
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Additional validation
      if (account?.provider === 'google') {
        return profile?.email_verified === true;
      }
      return true;
    },
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.provider = account.provider;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
});</pre>
      </div>

      <h3>Manual OAuth Implementation</h3>
      <div class="code-block">
        <pre>// Step 1: Redirect to provider
// app/api/auth/google/route.ts
export async function GET() {
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID!,
    redirect_uri: \`\${process.env.SITE_URL}/api/auth/callback/google\`,
    response_type: 'code',
    scope: 'openid email profile',
    access_type: 'offline',
    prompt: 'consent',
  });

  return Response.redirect(
    \`https://accounts.google.com/o/oauth2/v2/auth?\${params}\`
  );
}

// Step 2: Handle callback
// app/api/auth/callback/google/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  // Exchange code for tokens
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: \`\${process.env.SITE_URL}/api/auth/callback/google\`,
    }),
  });

  const tokens = await tokenResponse.json();

  // Get user info
  const userResponse = await fetch(
    'https://www.googleapis.com/oauth2/v2/userinfo',
    { headers: { Authorization: \`Bearer \${tokens.access_token}\` } }
  );

  const googleUser = await userResponse.json();

  // Create or update user in database
  const user = await db.users.upsert({
    where: { email: googleUser.email },
    update: { name: googleUser.name, avatar: googleUser.picture },
    create: {
      email: googleUser.email,
      name: googleUser.name,
      avatar: googleUser.picture,
      provider: 'google',
      providerId: googleUser.id,
    },
  });

  // Create session and redirect
  await createSession(user.id);
  return Response.redirect('/dashboard');
}</pre>
      </div>

      <h3>Linking Multiple Providers</h3>
      <div class="code-block">
        <pre>// Allow users to connect multiple social accounts
CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  provider VARCHAR(50) NOT NULL,      -- 'google', 'github'
  provider_account_id VARCHAR(255) NOT NULL,
  access_token TEXT,
  refresh_token TEXT,
  expires_at TIMESTAMP,
  UNIQUE(provider, provider_account_id)
);

// When user links new provider:
async function linkAccount(userId, provider, profile, tokens) {
  // Check if this provider account is already linked to another user
  const existing = await db.accounts.findUnique({
    where: { provider_account_id: profile.id, provider },
  });

  if (existing && existing.user_id !== userId) {
    throw new Error('This account is already linked to another user');
  }

  await db.accounts.create({
    data: {
      userId,
      provider,
      providerAccountId: profile.id,
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
    },
  });
}</pre>
      </div>

      <h3>Common OAuth Providers</h3>
      <div class="code-block">
        <pre>// Google
// - Most popular for consumer apps
// - Provides email, name, avatar
// - Requires Google Cloud Console setup

// GitHub
// - Popular for developer tools
// - Provides username, email, avatar
// - Can access repos with additional scopes

// Discord
// - Popular for gaming/community apps
// - Provides username, avatar, guilds

// Twitter/X
// - Uses OAuth 1.0a (more complex)
// - Popular for social apps

// Apple
// - Required for iOS apps with social login
// - Privacy-focused (can hide email)

// Microsoft/Azure AD
// - Popular for enterprise apps
// - Provides access to Microsoft 365</pre>
      </div>

      <h3>Security Considerations</h3>
      <div class="code-block">
        <pre>// 1. Always use HTTPS
// OAuth redirects contain sensitive codes

// 2. Validate redirect URIs strictly
const allowedRedirects = ['http://localhost:3000', 'https://yoursite.com'];
if (!allowedRedirects.includes(redirectUri)) {
  throw new Error('Invalid redirect URI');
}

// 3. Use state parameter to prevent CSRF
const state = crypto.randomUUID();
// Store in session, verify on callback

// 4. Never expose client secrets
// Keep in environment variables, server-side only

// 5. Handle token expiration
// Use refresh tokens to get new access tokens

// 6. Validate email verification
// Not all providers verify emails!
if (account.provider === 'google' && !profile.email_verified) {
  return false; // Reject unverified emails
}</pre>
      </div>
    `,
    questions: [
      {
        id: "96-1",
        type: "mcq",
        question: "What is exchanged for access tokens in OAuth 2.0?",
        options: [
          "Username and password",
          "Authorization code",
          "API key",
          "Session cookie"
        ],
        correctAnswer: "Authorization code",
        explanation: "After user grants permission, the provider redirects back with an authorization code. Your server exchanges this code for access and refresh tokens."
      },
      {
        id: "96-2",
        type: "mcq",
        question: "Where should the OAuth client secret be stored?",
        options: [
          "In the frontend code",
          "In localStorage",
          "In environment variables, server-side only",
          "In the database"
        ],
        correctAnswer: "In environment variables, server-side only",
        explanation: "The client secret is sensitive and must never be exposed to clients. Store it in environment variables and only use it in server-side code."
      },
      {
        id: "96-3",
        type: "mcq",
        question: "What is the purpose of the 'state' parameter in OAuth?",
        options: [
          "To store user preferences",
          "To prevent CSRF attacks",
          "To specify the redirect URL",
          "To request permissions"
        ],
        correctAnswer: "To prevent CSRF attacks",
        explanation: "The state parameter is a random value stored in the session and included in the OAuth request. On callback, verify it matches to prevent CSRF attacks."
      },
      {
        id: "96-4",
        type: "descriptive",
        question: "Explain the complete OAuth 2.0 authorization code flow.",
        keywords: ["redirect", "authorization", "code", "exchange", "tokens", "callback", "user info"],
        explanation: "1. User clicks login, app redirects to provider with client_id and redirect_uri. 2. User authenticates with provider. 3. Provider redirects to callback with authorization code. 4. Server exchanges code for access/refresh tokens using client_secret. 5. Server uses access token to fetch user info. 6. Create user session."
      }
    ]
  },
  {
    id: 97,
    title: "Role-Based Access Control",
    description: "Implement RBAC to manage user permissions effectively",
    duration: "45 min",
    difficulty: "Advanced",
    month: 5,
    week: 4,
    category: "Security",
    content: `
      <h2>Role-Based Access Control (RBAC)</h2>
      <p>RBAC is a method of regulating access based on the roles of individual users. It's simpler than managing permissions for each user individually.</p>

      <h3>RBAC Concepts</h3>
      <div class="code-block">
        <pre>// Roles: Named collections of permissions
// - admin: Full access
// - editor: Can create/edit content
// - viewer: Read-only access

// Permissions: Specific actions
// - posts:create, posts:read, posts:update, posts:delete
// - users:read, users:manage
// - settings:manage

// Users are assigned roles
// Roles contain permissions
// Permissions control access</pre>
      </div>

      <h3>Database Schema</h3>
      <div class="code-block">
        <pre>-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(100),
  role VARCHAR(50) DEFAULT 'user'  -- Simple: role as column
);

-- OR more flexible: Many-to-many with roles table
CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT
);

CREATE TABLE permissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,  -- 'posts:create'
  description TEXT
);

CREATE TABLE role_permissions (
  role_id INTEGER REFERENCES roles(id),
  permission_id INTEGER REFERENCES permissions(id),
  PRIMARY KEY (role_id, permission_id)
);

CREATE TABLE user_roles (
  user_id UUID REFERENCES users(id),
  role_id INTEGER REFERENCES roles(id),
  PRIMARY KEY (user_id, role_id)
);</pre>
      </div>

      <h3>Simple Role-Based Middleware</h3>
      <div class="code-block">
        <pre>// Define roles and their permissions
const ROLES = {
  admin: ['*'], // All permissions
  editor: ['posts:read', 'posts:create', 'posts:update'],
  user: ['posts:read', 'profile:update'],
  guest: ['posts:read'],
};

// Middleware to check permission
function requirePermission(permission: string) {
  return async (req, res, next) =&gt; {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const userPermissions = ROLES[user.role] || [];

    // Check wildcard or specific permission
    if (!userPermissions.includes('*') && !userPermissions.includes(permission)) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    next();
  };
}

// Usage
app.delete('/api/posts/:id',
  authenticate,
  requirePermission('posts:delete'),
  deletePost
);</pre>
      </div>

      <h3>React Component for RBAC</h3>
      <div class="code-block">
        <pre>// Context for user permissions
const AuthContext = createContext&lt;{
  user: User | null;
  can: (permission: string) =&gt; boolean;
}&gt;(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const can = useCallback((permission: string) =&gt; {
    if (!user) return false;
    const permissions = ROLES[user.role] || [];
    return permissions.includes('*') || permissions.includes(permission);
  }, [user]);

  return (
    &lt;AuthContext.Provider value={{ user, can }}&gt;
      {children}
    &lt;/AuthContext.Provider&gt;
  );
}

// PermissionGate component
function PermissionGate({ permission, children, fallback = null }) {
  const { can } = useAuth();

  if (!can(permission)) {
    return fallback;
  }

  return children;
}

// Usage
function PostActions({ post }) {
  return (
    &lt;div&gt;
      &lt;PermissionGate permission="posts:update"&gt;
        &lt;button&gt;Edit&lt;/button&gt;
      &lt;/PermissionGate&gt;

      &lt;PermissionGate
        permission="posts:delete"
        fallback={&lt;span&gt;Cannot delete&lt;/span&gt;}
      &gt;
        &lt;button&gt;Delete&lt;/button&gt;
      &lt;/PermissionGate&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Resource-Based Authorization</h3>
      <div class="code-block">
        <pre>// Sometimes roles aren't enough
// Users should only edit THEIR posts

async function canUpdatePost(userId: string, postId: string) {
  const post = await db.posts.findUnique({ where: { id: postId } });

  if (!post) return false;

  // Admin can update any post
  const user = await db.users.findUnique({ where: { id: userId } });
  if (user.role === 'admin') return true;

  // Editors can update published posts
  if (user.role === 'editor' && post.published) return true;

  // Authors can update their own posts
  return post.authorId === userId;
}

// Middleware
async function requirePostUpdatePermission(req, res, next) {
  const canUpdate = await canUpdatePost(req.user.id, req.params.postId);

  if (!canUpdate) {
    return res.status(403).json({ error: 'Cannot update this post' });
  }

  next();
}</pre>
      </div>

      <h3>Supabase Row Level Security</h3>
      <div class="code-block">
        <pre>-- RLS policies for RBAC
-- First, create a function to get user's role
CREATE FUNCTION auth.user_role()
RETURNS TEXT AS $$
  SELECT role FROM public.profiles
  WHERE id = auth.uid()
$$ LANGUAGE SQL SECURITY DEFINER;

-- Admins can do anything
CREATE POLICY "Admins have full access"
ON posts FOR ALL
USING (auth.user_role() = 'admin');

-- Editors can update any post
CREATE POLICY "Editors can update posts"
ON posts FOR UPDATE
USING (auth.user_role() IN ('admin', 'editor'));

-- Users can only update their own posts
CREATE POLICY "Users can update own posts"
ON posts FOR UPDATE
USING (
  auth.user_role() = 'user'
  AND author_id = auth.uid()
);

-- Everyone can read published posts
CREATE POLICY "Published posts are public"
ON posts FOR SELECT
USING (published = true);</pre>
      </div>

      <h3>Role Hierarchy</h3>
      <div class="code-block">
        <pre>// Define role hierarchy
const ROLE_HIERARCHY = {
  admin: ['editor', 'user', 'guest'],
  editor: ['user', 'guest'],
  user: ['guest'],
  guest: [],
};

// Check if role has permission (including inherited)
function hasRole(userRole: string, requiredRole: string): boolean {
  if (userRole === requiredRole) return true;

  const inheritedRoles = ROLE_HIERARCHY[userRole] || [];
  return inheritedRoles.includes(requiredRole);
}

// Usage
hasRole('admin', 'editor'); // true - admin inherits editor
hasRole('user', 'editor');  // false - user doesn't inherit editor</pre>
      </div>

      <h3>Best Practices</h3>
      <div class="code-block">
        <pre>// 1. Default to minimum permissions
// New users get 'guest' or 'user' role

// 2. Check permissions server-side
// Never trust client-side checks alone

// 3. Audit permission changes
await db.auditLogs.create({
  data: {
    action: 'ROLE_CHANGED',
    userId: targetUser.id,
    performedBy: admin.id,
    oldValue: 'user',
    newValue: 'editor',
  },
});

// 4. Use permission constants
const PERMISSIONS = {
  POSTS_CREATE: 'posts:create',
  POSTS_READ: 'posts:read',
  POSTS_UPDATE: 'posts:update',
  POSTS_DELETE: 'posts:delete',
} as const;

// 5. Separate authentication from authorization
// authenticate() -&gt; who is this?
// authorize(permission) -&gt; can they do this?</pre>
      </div>
    `,
    questions: [
      {
        id: "97-1",
        type: "mcq",
        question: "What is the main advantage of RBAC over per-user permissions?",
        options: [
          "It's faster",
          "Easier to manage - assign roles instead of individual permissions",
          "More secure",
          "Requires less database storage"
        ],
        correctAnswer: "Easier to manage - assign roles instead of individual permissions",
        explanation: "RBAC simplifies permission management. Instead of managing permissions for each user, you assign roles. Change a role's permissions, and all users with that role are updated."
      },
      {
        id: "97-2",
        type: "mcq",
        question: "Why should permission checks happen server-side?",
        options: [
          "Client-side is slower",
          "Client-side checks can be bypassed; server is the source of truth",
          "Browsers don't support permission checks",
          "Server-side is easier to implement"
        ],
        correctAnswer: "Client-side checks can be bypassed; server is the source of truth",
        explanation: "Client-side code can be modified by users. Server-side checks ensure security can't be bypassed. Client-side is for UX (hiding buttons), server-side is for security."
      },
      {
        id: "97-3",
        type: "mcq",
        question: "What is resource-based authorization?",
        options: [
          "Limiting server resources",
          "Permissions based on the specific resource being accessed (e.g., own posts only)",
          "Role-based access to resources",
          "API rate limiting"
        ],
        correctAnswer: "Permissions based on the specific resource being accessed (e.g., own posts only)",
        explanation: "Resource-based authorization considers not just the action but the specific resource. Users can edit their own posts but not others', even though both are 'edit' actions."
      },
      {
        id: "97-4",
        type: "descriptive",
        question: "Design a PermissionGate React component that conditionally renders children based on user permissions.",
        keywords: ["useAuth", "can", "permission", "children", "fallback", "context"],
        explanation: "Create a component that takes 'permission' and optional 'fallback' props. Use a useAuth hook to get the 'can' function. If can(permission) is true, render children. Otherwise render fallback or null."
      }
    ]
  },
  {
    id: 98,
    title: "Session Management & Security",
    description: "Implement secure session handling and protect against common attacks",
    duration: "50 min",
    difficulty: "Advanced",
    month: 5,
    week: 4,
    category: "Security",
    content: `
      <h2>Session Management & Security</h2>
      <p>Proper session management is critical for security. A compromised session gives attackers full access to user accounts.</p>

      <h3>Session Storage Options</h3>
      <div class="code-block">
        <pre>// 1. Server-side sessions (database)
// + Can revoke sessions instantly
// + Can track all active sessions
// + More control over session data
// - Requires database lookup on every request
// - Harder to scale

// 2. JWT tokens
// + Stateless, no database lookup
// + Easy to scale
// - Can't revoke without blocklist
// - Payload readable by anyone

// 3. Hybrid: JWT + Refresh tokens in DB
// + Short-lived JWTs for API calls
// + Refresh tokens stored for revocation
// Best of both worlds</pre>
      </div>

      <h3>Secure Cookie Configuration</h3>
      <div class="code-block">
        <pre>// Essential cookie security settings
const sessionCookie = {
  name: 'session',
  value: sessionId,
  options: {
    httpOnly: true,     // Not accessible via JavaScript
    secure: true,       // HTTPS only (set false for localhost)
    sameSite: 'lax',    // CSRF protection
    path: '/',          // Available on all routes
    maxAge: 60 * 60 * 24 * 7, // 1 week in seconds
    // domain: '.example.com', // For subdomains
  }
};

// In Next.js
import { cookies } from 'next/headers';

async function setSession(sessionId: string) {
  const cookieStore = await cookies();
  cookieStore.set('session', sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
  });
}</pre>
      </div>

      <h3>Database Session Storage</h3>
      <div class="code-block">
        <pre>// Session schema
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(255) UNIQUE NOT NULL,
  user_agent TEXT,
  ip_address INET,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL,
  last_active_at TIMESTAMPTZ DEFAULT NOW()
);

// Create index for fast lookups
CREATE INDEX idx_sessions_token ON sessions(token);
CREATE INDEX idx_sessions_user_id ON sessions(user_id);

// Clean up expired sessions periodically
DELETE FROM sessions WHERE expires_at &lt; NOW();</pre>
      </div>

      <h3>Session Management Functions</h3>
      <div class="code-block">
        <pre>import { randomBytes } from 'crypto';

async function createSession(userId: string, req: Request) {
  const token = randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  await db.sessions.create({
    data: {
      userId,
      token,
      userAgent: req.headers.get('user-agent'),
      ipAddress: req.headers.get('x-forwarded-for'),
      expiresAt,
    },
  });

  return token;
}

async function getSession(token: string) {
  const session = await db.sessions.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!session || session.expiresAt &lt; new Date()) {
    return null;
  }

  // Update last active
  await db.sessions.update({
    where: { id: session.id },
    data: { lastActiveAt: new Date() },
  });

  return session;
}

async function deleteSession(token: string) {
  await db.sessions.delete({ where: { token } });
}

async function deleteAllUserSessions(userId: string) {
  await db.sessions.deleteMany({ where: { userId } });
}</pre>
      </div>

      <h3>Session Regeneration</h3>
      <div class="code-block">
        <pre>// Regenerate session ID after privilege changes
// Prevents session fixation attacks

async function regenerateSession(oldToken: string, userId: string) {
  // Delete old session
  await db.sessions.delete({ where: { token: oldToken } });

  // Create new session
  const newToken = await createSession(userId, request);

  // Update cookie with new token
  cookies().set('session', newToken, cookieOptions);

  return newToken;
}

// Regenerate on:
// - Login
// - Logout
// - Password change
// - Privilege escalation (e.g., becoming admin)
// - After 2FA verification</pre>
      </div>

      <h3>Active Sessions Management</h3>
      <div class="code-block">
        <pre>// Show user their active sessions
async function getUserSessions(userId: string) {
  return db.sessions.findMany({
    where: {
      userId,
      expiresAt: { gt: new Date() },
    },
    orderBy: { lastActiveAt: 'desc' },
  });
}

// UI Component
function ActiveSessions({ sessions }) {
  return (
    &lt;ul&gt;
      {sessions.map(session =&gt; (
        &lt;li key={session.id}&gt;
          &lt;div&gt;{session.userAgent}&lt;/div&gt;
          &lt;div&gt;Last active: {formatDate(session.lastActiveAt)}&lt;/div&gt;
          &lt;div&gt;IP: {session.ipAddress}&lt;/div&gt;
          {session.id !== currentSession.id && (
            &lt;button onClick={() =&gt; revokeSession(session.id)}&gt;
              Revoke
            &lt;/button&gt;
          )}
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</pre>
      </div>

      <h3>CSRF Protection</h3>
      <div class="code-block">
        <pre>// CSRF tokens for form submissions
import { randomBytes } from 'crypto';

// Generate token and store in session
function generateCsrfToken() {
  return randomBytes(32).toString('hex');
}

// Validate token on form submission
async function validateCsrfToken(sessionToken: string, csrfToken: string) {
  const session = await getSession(sessionToken);
  return session?.csrfToken === csrfToken;
}

// In form
&lt;form action="/api/update-profile" method="POST"&gt;
  &lt;input type="hidden" name="_csrf" value={csrfToken} /&gt;
  {/* form fields */}
&lt;/form&gt;

// With SameSite=Lax/Strict cookies, CSRF is less critical
// But still recommended for sensitive actions</pre>
      </div>

      <h3>Security Headers</h3>
      <div class="code-block">
        <pre>// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline'",
          },
        ],
      },
    ];
  },
};</pre>
      </div>

      <h3>Rate Limiting Login</h3>
      <div class="code-block">
        <pre>// Protect against brute force
const loginAttempts = new Map&lt;string, { count: number; lastAttempt: Date }&gt;();

async function checkLoginRateLimit(identifier: string) {
  const attempts = loginAttempts.get(identifier);
  const now = new Date();

  if (attempts) {
    // Reset after 15 minutes
    if (now.getTime() - attempts.lastAttempt.getTime() &gt; 15 * 60 * 1000) {
      loginAttempts.delete(identifier);
    } else if (attempts.count &gt;= 5) {
      const waitTime = 15 * 60 * 1000 - (now.getTime() - attempts.lastAttempt.getTime());
      throw new Error(\`Too many attempts. Try again in \${Math.ceil(waitTime / 60000)} minutes\`);
    }
  }
}

function recordLoginAttempt(identifier: string, success: boolean) {
  if (success) {
    loginAttempts.delete(identifier);
  } else {
    const attempts = loginAttempts.get(identifier) || { count: 0, lastAttempt: new Date() };
    loginAttempts.set(identifier, {
      count: attempts.count + 1,
      lastAttempt: new Date(),
    });
  }
}</pre>
      </div>
    `,
    questions: [
      {
        id: "98-1",
        type: "mcq",
        question: "What does the httpOnly cookie flag do?",
        options: [
          "Makes the cookie only work over HTTP",
          "Prevents JavaScript from accessing the cookie",
          "Encrypts the cookie value",
          "Makes the cookie expire faster"
        ],
        correctAnswer: "Prevents JavaScript from accessing the cookie",
        explanation: "httpOnly prevents client-side JavaScript from reading the cookie via document.cookie. This protects against XSS attacks stealing session tokens."
      },
      {
        id: "98-2",
        type: "mcq",
        question: "When should you regenerate a session ID?",
        options: [
          "On every request",
          "Never - it's wasteful",
          "After login, logout, and privilege changes",
          "Only on password change"
        ],
        correctAnswer: "After login, logout, and privilege changes",
        explanation: "Regenerating prevents session fixation attacks. Do it on authentication events (login/logout) and privilege escalation to ensure attackers can't use pre-obtained session IDs."
      },
      {
        id: "98-3",
        type: "mcq",
        question: "What does SameSite=Lax on cookies protect against?",
        options: [
          "XSS attacks",
          "SQL injection",
          "CSRF attacks from cross-origin requests",
          "Session hijacking"
        ],
        correctAnswer: "CSRF attacks from cross-origin requests",
        explanation: "SameSite=Lax prevents cookies from being sent with cross-origin requests (except top-level navigations), blocking most CSRF attacks."
      },
      {
        id: "98-4",
        type: "descriptive",
        question: "Explain how to implement a 'view active sessions' feature where users can see and revoke their sessions.",
        keywords: ["database", "sessions", "user_id", "user_agent", "revoke", "delete", "current"],
        explanation: "Store sessions in database with user_id, token, user_agent, IP, timestamps. Query sessions by user_id to display active ones. Provide a revoke button that deletes the session from database. Identify current session to prevent self-revocation."
      }
    ]
  }
];

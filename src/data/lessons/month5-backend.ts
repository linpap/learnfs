import { Lesson } from '@/types/lesson';

export const month5Lessons: Lesson[] = [
  {
    id: 42,
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
        id: "42-1",
        type: "mcq",
        question: "What is Node.js?",
        options: ["A JavaScript framework", "A JavaScript runtime environment", "A database", "A web browser"],
        correctAnswer: "A JavaScript runtime environment",
        explanation: "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run outside the browser, enabling server-side development."
      },
      {
        id: "42-2",
        type: "mcq",
        question: "Which module system is native to Node.js?",
        options: ["AMD", "UMD", "CommonJS", "SystemJS"],
        correctAnswer: "CommonJS",
        explanation: "CommonJS (using require/module.exports) is the native module system in Node.js, though ES Modules (import/export) are also supported with configuration."
      },
      {
        id: "42-3",
        type: "mcq",
        question: "What does the fs module do?",
        options: ["Handles HTTP requests", "Manages file system operations", "Formats strings", "Creates servers"],
        correctAnswer: "Manages file system operations",
        explanation: "The fs (file system) module provides APIs for interacting with the file system, including reading, writing, and manipulating files and directories."
      },
      {
        id: "42-4",
        type: "descriptive",
        question: "Explain why Node.js is considered non-blocking and how this benefits server applications.",
        keywords: ["non-blocking", "asynchronous", "event loop", "callback", "concurrent", "I/O", "performance", "scalable"],
        explanation: "Node.js uses an event-driven, non-blocking I/O model where operations like file reads or database queries don't block the main thread. Instead, callbacks are executed when operations complete. This allows handling many concurrent connections efficiently without creating threads for each request."
      }
    ]
  },
  {
    id: 43,
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
        id: "43-1",
        type: "mcq",
        question: "What HTTP method should be used to create a new resource?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: "POST",
        explanation: "POST is used to create new resources. GET retrieves data, PUT updates existing resources, and DELETE removes resources."
      },
      {
        id: "43-2",
        type: "mcq",
        question: "What is middleware in Express?",
        options: ["A database connector", "Functions that execute during the request-response cycle", "A template engine", "A routing library"],
        correctAnswer: "Functions that execute during the request-response cycle",
        explanation: "Middleware functions have access to the request and response objects and can execute code, modify req/res, end the request-response cycle, or call the next middleware."
      },
      {
        id: "43-3",
        type: "mcq",
        question: "Which status code indicates a resource was created successfully?",
        options: ["200", "201", "204", "301"],
        correctAnswer: "201",
        explanation: "201 Created indicates that a new resource has been successfully created. 200 is general success, 204 is success with no content, and 301 is a redirect."
      },
      {
        id: "43-4",
        type: "descriptive",
        question: "Explain the difference between PUT and PATCH HTTP methods.",
        keywords: ["PUT", "PATCH", "update", "replace", "partial", "entire", "resource", "idempotent"],
        explanation: "PUT replaces the entire resource with the provided data - if you omit a field, it gets removed. PATCH performs a partial update, only modifying the fields you provide. Both are idempotent (multiple identical requests have the same effect as a single one)."
      }
    ]
  },
  {
    id: 44,
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
        id: "44-1",
        type: "mcq",
        question: "What does a PRIMARY KEY constraint ensure?",
        options: ["Values can be null", "Values are unique and not null", "Values are sorted", "Values are encrypted"],
        correctAnswer: "Values are unique and not null",
        explanation: "A PRIMARY KEY constraint ensures that each value in the column is unique and cannot be NULL. It uniquely identifies each row in the table."
      },
      {
        id: "44-2",
        type: "mcq",
        question: "Which JOIN returns all rows from the left table even if there's no match?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"],
        correctAnswer: "LEFT JOIN",
        explanation: "LEFT JOIN returns all rows from the left table and matching rows from the right table. If there's no match, NULL values are returned for right table columns."
      },
      {
        id: "44-3",
        type: "mcq",
        question: "What is the purpose of the GROUP BY clause?",
        options: ["To sort results", "To filter rows", "To combine rows with same values into summary rows", "To join tables"],
        correctAnswer: "To combine rows with same values into summary rows",
        explanation: "GROUP BY groups rows that have the same values in specified columns into summary rows, often used with aggregate functions like COUNT, SUM, AVG."
      },
      {
        id: "44-4",
        type: "descriptive",
        question: "Explain the difference between WHERE and HAVING clauses in SQL.",
        keywords: ["WHERE", "HAVING", "filter", "aggregate", "GROUP BY", "before", "after", "condition"],
        explanation: "WHERE filters individual rows before grouping and cannot use aggregate functions. HAVING filters groups after GROUP BY and can use aggregate functions. For example, WHERE filters rows before COUNT(), while HAVING can filter based on COUNT() > 5."
      }
    ]
  },
  {
    id: 45,
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
        id: "45-1",
        type: "mcq",
        question: "What is JSONB in PostgreSQL?",
        options: ["A JavaScript library", "A binary JSON storage format with indexing support", "A backup format", "A connection protocol"],
        correctAnswer: "A binary JSON storage format with indexing support",
        explanation: "JSONB is PostgreSQL's binary JSON format that supports indexing and is more efficient for querying than regular JSON. It's ideal for storing flexible, semi-structured data."
      },
      {
        id: "45-2",
        type: "mcq",
        question: "What does Supabase provide out of the box?",
        options: ["Only database hosting", "Database, Auth, Storage, and Real-time APIs", "Only authentication", "Only file storage"],
        correctAnswer: "Database, Auth, Storage, and Real-time APIs",
        explanation: "Supabase provides a complete backend-as-a-service including PostgreSQL database, authentication, file storage, real-time subscriptions, and auto-generated APIs."
      },
      {
        id: "45-3",
        type: "mcq",
        question: "What is Row Level Security (RLS)?",
        options: ["Encrypting database rows", "Limiting number of rows", "Policies that control which rows users can access", "Backing up rows"],
        correctAnswer: "Policies that control which rows users can access",
        explanation: "Row Level Security (RLS) allows you to create policies that control which rows in a table a user can access based on conditions like user ID, role, or other criteria."
      },
      {
        id: "45-4",
        type: "descriptive",
        question: "Explain how Supabase real-time subscriptions work and give a use case.",
        keywords: ["real-time", "subscription", "channel", "postgres_changes", "listen", "websocket", "live", "updates"],
        explanation: "Supabase real-time uses PostgreSQL's replication to broadcast database changes over WebSockets. Clients subscribe to channels and receive INSERT, UPDATE, DELETE events instantly. Use cases include live chat, collaborative editing, notifications, and live dashboards."
      }
    ]
  },
  {
    id: 46,
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
        id: "46-1",
        type: "mcq",
        question: "What type of database is MongoDB?",
        options: ["Relational", "Document-oriented", "Graph", "Key-value"],
        correctAnswer: "Document-oriented",
        explanation: "MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents (BSON) rather than tables with rows and columns."
      },
      {
        id: "46-2",
        type: "mcq",
        question: "What is Mongoose?",
        options: ["A MongoDB server", "An Object Document Mapper (ODM)", "A query language", "A database driver"],
        correctAnswer: "An Object Document Mapper (ODM)",
        explanation: "Mongoose is an ODM (Object Document Mapper) for MongoDB and Node.js. It provides schema validation, middleware, and a cleaner API for interacting with MongoDB."
      },
      {
        id: "46-3",
        type: "mcq",
        question: "Which operator adds an element to an array in MongoDB?",
        options: ["$set", "$push", "$add", "$insert"],
        correctAnswer: "$push",
        explanation: "$push adds an element to an array field. $set updates a field's value, $addToSet adds only if not present, and there's no $add or $insert operator for arrays."
      },
      {
        id: "46-4",
        type: "descriptive",
        question: "When would you choose MongoDB over PostgreSQL? Give specific examples.",
        keywords: ["flexible schema", "document", "embedded", "scaling", "unstructured", "rapid", "prototype", "content"],
        explanation: "Choose MongoDB when: 1) Schema changes frequently (startups/prototypes), 2) Data is naturally document-shaped (CMS, product catalogs), 3) Need horizontal scaling for large datasets, 4) Working with unstructured/varied data, 5) Real-time analytics. Choose PostgreSQL for complex relationships, transactions, and strict data integrity."
      }
    ]
  },
  {
    id: 47,
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
        id: "47-1",
        type: "mcq",
        question: "What is the difference between authentication and authorization?",
        options: ["They are the same", "Authentication verifies identity, authorization grants permissions", "Authorization verifies identity, authentication grants permissions", "Authentication is for APIs only"],
        correctAnswer: "Authentication verifies identity, authorization grants permissions",
        explanation: "Authentication (AuthN) verifies who a user is (login). Authorization (AuthZ) determines what an authenticated user is allowed to do (permissions/roles)."
      },
      {
        id: "47-2",
        type: "mcq",
        question: "Why should passwords be hashed with bcrypt instead of encrypted?",
        options: ["Hashing is faster", "Hashing is one-way and can't be reversed", "Encryption uses more storage", "There's no difference"],
        correctAnswer: "Hashing is one-way and can't be reversed",
        explanation: "Hashing is one-way - you can't get the original password back. Encryption is two-way and can be decrypted. If your database is compromised, hashed passwords can't be reversed to plain text."
      },
      {
        id: "47-3",
        type: "mcq",
        question: "What does the httpOnly cookie flag prevent?",
        options: ["Cookies from being sent over HTTP", "JavaScript from accessing the cookie", "Cookies from expiring", "Cross-origin requests"],
        correctAnswer: "JavaScript from accessing the cookie",
        explanation: "The httpOnly flag prevents client-side JavaScript from accessing the cookie via document.cookie. This protects against XSS attacks that try to steal session cookies."
      },
      {
        id: "47-4",
        type: "descriptive",
        question: "Explain when you would use session-based auth vs JWT-based auth.",
        keywords: ["session", "JWT", "stateless", "server", "scale", "API", "cookie", "invalidate", "SPA"],
        explanation: "Use sessions for: traditional server-rendered apps, when you need easy logout/invalidation, simpler security model. Use JWTs for: APIs consumed by mobile/SPAs, microservices, stateless scaling requirements. JWTs are harder to invalidate but scale better; sessions require server storage but are easier to manage."
      }
    ]
  },
  {
    id: 48,
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
        id: "48-1",
        type: "mcq",
        question: "What is a magic link in Supabase Auth?",
        options: ["A special admin URL", "A passwordless login via email link", "An OAuth redirect URL", "A session token"],
        correctAnswer: "A passwordless login via email link",
        explanation: "Magic links are a passwordless authentication method where users receive an email with a special link that logs them in directly without needing to enter a password."
      },
      {
        id: "48-2",
        type: "mcq",
        question: "What does onAuthStateChange do in Supabase?",
        options: ["Changes the user's password", "Listens for authentication state changes", "Updates user profile", "Logs out the user"],
        correctAnswer: "Listens for authentication state changes",
        explanation: "onAuthStateChange sets up a listener that fires whenever the authentication state changes (sign in, sign out, token refresh), allowing your app to react accordingly."
      },
      {
        id: "48-3",
        type: "mcq",
        question: "Which method is used for email/password sign in with Supabase?",
        options: ["signInWithOAuth", "signInWithOtp", "signInWithPassword", "signIn"],
        correctAnswer: "signInWithPassword",
        explanation: "signInWithPassword is used for traditional email/password authentication. signInWithOAuth is for social providers, and signInWithOtp is for magic links/OTP codes."
      },
      {
        id: "48-4",
        type: "descriptive",
        question: "Explain how to implement protected routes in a React app using Supabase Auth.",
        keywords: ["protected", "route", "user", "session", "redirect", "loading", "context", "useEffect", "authentication"],
        explanation: "Create an AuthContext that provides user/session state. Use useEffect to check auth state and redirect unauthenticated users. Create a ProtectedRoute wrapper component that checks if user exists before rendering children. Show loading state while checking auth to prevent flashing."
      }
    ]
  },
  {
    id: 49,
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
        id: "49-1",
        type: "mcq",
        question: "What is the main purpose of Role-Based Access Control?",
        options: ["To encrypt user data", "To restrict access based on user roles", "To speed up authentication", "To manage passwords"],
        correctAnswer: "To restrict access based on user roles",
        explanation: "RBAC restricts system access based on roles assigned to users. Users are assigned roles, and roles have permissions that define what actions can be performed."
      },
      {
        id: "49-2",
        type: "mcq",
        question: "Why should permission checks happen on the server, not just the client?",
        options: ["It's faster on the server", "Client-side checks can be bypassed", "Servers have more memory", "It's easier to implement"],
        correctAnswer: "Client-side checks can be bypassed",
        explanation: "Client-side code can be modified or bypassed by users. Server-side checks are secure because users can't modify server code. Always validate permissions on the server."
      },
      {
        id: "49-3",
        type: "mcq",
        question: "What HTTP status code should be returned for insufficient permissions?",
        options: ["401 Unauthorized", "403 Forbidden", "404 Not Found", "500 Server Error"],
        correctAnswer: "403 Forbidden",
        explanation: "403 Forbidden indicates the user is authenticated but doesn't have permission. 401 Unauthorized means not authenticated (identity unknown)."
      },
      {
        id: "49-4",
        type: "descriptive",
        question: "Design a simple RBAC system for a blog with admin, editor, and user roles.",
        keywords: ["admin", "editor", "user", "create", "read", "update", "delete", "permission", "role", "posts"],
        explanation: "Admin: full access to all resources (CRUD users, posts, settings). Editor: can create/edit any post, read users, no delete. User: can create posts, edit own posts only, read all posts. Implement via middleware checking user.role against required roles for each route."
      }
    ]
  },
  {
    id: 50,
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
        id: "50-1",
        type: "mcq",
        question: "What is the correct HTTP method for creating a new resource?",
        options: ["GET", "POST", "PUT", "CREATE"],
        correctAnswer: "POST",
        explanation: "POST is used to create new resources. It's not idempotent, meaning multiple identical requests may create multiple resources. PUT is for updating/replacing."
      },
      {
        id: "50-2",
        type: "mcq",
        question: "Which URL pattern follows REST conventions?",
        options: ["/api/getUserById/123", "/api/users/123", "/api/user?id=123", "/api/fetch-user/123"],
        correctAnswer: "/api/users/123",
        explanation: "REST uses resource nouns (users) with IDs in the path. Verbs like 'get' or 'fetch' should not be in URLs - the HTTP method indicates the action."
      },
      {
        id: "50-3",
        type: "mcq",
        question: "What does 'idempotent' mean for HTTP methods?",
        options: ["The request is encrypted", "Multiple identical requests have the same effect as one", "The request is cached", "The request requires authentication"],
        correctAnswer: "Multiple identical requests have the same effect as one",
        explanation: "Idempotent means making the same request multiple times produces the same result. GET, PUT, DELETE are idempotent. POST is not (each POST may create a new resource)."
      },
      {
        id: "50-4",
        type: "descriptive",
        question: "Design REST endpoints for a blog API with posts and comments.",
        keywords: ["GET", "POST", "PUT", "DELETE", "posts", "comments", "nested", "resource", "CRUD"],
        explanation: "Posts: GET /posts (list), GET /posts/:id (single), POST /posts (create), PUT /posts/:id (update), DELETE /posts/:id. Comments: GET /posts/:id/comments (list), POST /posts/:id/comments (create), PUT /comments/:id (update), DELETE /comments/:id. Use proper status codes and consistent response format."
      }
    ]
  },
  {
    id: 51,
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
        id: "51-1",
        type: "mcq",
        question: "What is the main purpose of rate limiting?",
        options: ["To speed up the API", "To prevent abuse and DoS attacks", "To encrypt data", "To validate input"],
        correctAnswer: "To prevent abuse and DoS attacks",
        explanation: "Rate limiting restricts the number of requests a client can make in a time window, preventing denial of service attacks, brute force attempts, and API abuse."
      },
      {
        id: "51-2",
        type: "mcq",
        question: "How do you prevent SQL injection attacks?",
        options: ["Use HTTPS", "Use parameterized queries", "Add rate limiting", "Use longer passwords"],
        correctAnswer: "Use parameterized queries",
        explanation: "Parameterized queries (prepared statements) separate SQL code from data, preventing attackers from injecting malicious SQL. Never concatenate user input into queries."
      },
      {
        id: "51-3",
        type: "mcq",
        question: "What does CORS control?",
        options: ["Database access", "Which origins can make cross-origin requests", "Password encryption", "API versioning"],
        correctAnswer: "Which origins can make cross-origin requests",
        explanation: "CORS (Cross-Origin Resource Sharing) controls which domains can make requests to your API from browsers. It prevents unauthorized cross-origin requests while allowing legitimate ones."
      },
      {
        id: "51-4",
        type: "descriptive",
        question: "Explain the security risks of accepting all fields from req.body and how to prevent it.",
        keywords: ["mass assignment", "whitelist", "validate", "fields", "req.body", "security", "privilege", "escalation"],
        explanation: "Mass assignment occurs when accepting all req.body fields directly. Attackers could add fields like 'role: admin' or 'verified: true'. Prevent by whitelisting allowed fields, using DTOs/schemas, or destructuring only expected fields from req.body before creating/updating records."
      }
    ]
  }
];

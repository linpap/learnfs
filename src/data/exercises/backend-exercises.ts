import { PracticeExercise } from '@/types/exercise';

export const backendExercises: PracticeExercise[] = [
  {
    id: 36,
    title: 'Parse URL Parameters',
    description: 'Extract query parameters from a URL string.',
    difficulty: 'beginner',
    category: 'Node.js',
    estimatedTime: '15 min',
    exerciseType: 'code',
    relatedLessons: [42],
    problemStatement: `Write a function called \`parseUrlParams\` that takes a URL string and returns an object with the query parameters.

**Example:**
\`\`\`javascript
parseUrlParams("https://example.com?name=John&age=25")
// returns { name: "John", age: "25" }

parseUrlParams("https://example.com?search=hello+world&page=1")
// returns { search: "hello world", page: "1" }
\`\`\``,
    hints: [
      'Use the URL constructor or split on "?"',
      'Split parameters by "&"',
      'Split each parameter by "=" for key-value pairs',
    ],
    language: 'javascript',
    starterCode: `function parseUrlParams(url) {
  // Your code here
}`,
    solutionCode: `function parseUrlParams(url) {
  const params = {};
  const queryString = url.split('?')[1];
  if (!queryString) return params;

  queryString.split('&').forEach(param => {
    const [key, value] = param.split('=');
    params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\\+/g, ' '));
  });

  return params;
}`,
    testCases: [
      { id: '1', description: 'Should parse simple params', input: 'JSON.stringify(parseUrlParams("https://example.com?name=John&age=25"))', expectedOutput: '"{\\\"name\\\":\\\"John\\\",\\\"age\\\":\\\"25\\\"}"' },
      { id: '2', description: 'Should return empty object for no params', input: 'JSON.stringify(parseUrlParams("https://example.com"))', expectedOutput: '"{}"' },
    ],
    tags: ['javascript', 'node', 'url', 'beginner'],
  },
  {
    id: 37,
    title: 'Validate Email',
    description: 'Create an email validation function.',
    difficulty: 'beginner',
    category: 'Validation',
    estimatedTime: '10 min',
    exerciseType: 'code',
    relatedLessons: [50],
    problemStatement: `Write a function called \`isValidEmail\` that checks if a string is a valid email format.

**Valid emails should:**
- Contain exactly one "@" symbol
- Have text before and after the "@"
- Have a "." in the domain part
- Have text after the last "."

**Example:**
\`\`\`javascript
isValidEmail("user@example.com") // true
isValidEmail("invalid-email") // false
isValidEmail("user@.com") // false
\`\`\``,
    hints: [
      'Use a regular expression for validation',
      'Or check conditions step by step',
      'Consider edge cases like empty strings',
    ],
    language: 'javascript',
    starterCode: `function isValidEmail(email) {
  // Your code here
}`,
    solutionCode: `function isValidEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}`,
    testCases: [
      { id: '1', description: 'Should validate correct email', input: 'isValidEmail("user@example.com")', expectedOutput: 'true' },
      { id: '2', description: 'Should reject invalid email', input: 'isValidEmail("invalid-email")', expectedOutput: 'false' },
      { id: '3', description: 'Should reject email without domain extension', input: 'isValidEmail("user@example")', expectedOutput: 'false' },
    ],
    tags: ['javascript', 'validation', 'regex', 'beginner'],
  },
  {
    id: 38,
    title: 'HTTP Status Code Checker',
    description: 'Return the meaning of HTTP status codes.',
    difficulty: 'beginner',
    category: 'HTTP',
    estimatedTime: '10 min',
    exerciseType: 'code',
    relatedLessons: [50],
    problemStatement: `Write a function called \`getStatusMessage\` that returns the standard message for HTTP status codes.

**Required status codes:**
- 200: "OK"
- 201: "Created"
- 400: "Bad Request"
- 401: "Unauthorized"
- 403: "Forbidden"
- 404: "Not Found"
- 500: "Internal Server Error"

Return "Unknown Status" for any other code.`,
    hints: [
      'Use an object to map codes to messages',
      'Or use a switch statement',
      'Handle the default case',
    ],
    language: 'javascript',
    starterCode: `function getStatusMessage(code) {
  // Your code here
}`,
    solutionCode: `function getStatusMessage(code) {
  const statusMessages = {
    200: "OK",
    201: "Created",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error"
  };

  return statusMessages[code] || "Unknown Status";
}`,
    testCases: [
      { id: '1', description: 'getStatusMessage(200) should return "OK"', input: 'getStatusMessage(200)', expectedOutput: '"OK"' },
      { id: '2', description: 'getStatusMessage(404) should return "Not Found"', input: 'getStatusMessage(404)', expectedOutput: '"Not Found"' },
      { id: '3', description: 'getStatusMessage(999) should return "Unknown Status"', input: 'getStatusMessage(999)', expectedOutput: '"Unknown Status"' },
    ],
    tags: ['javascript', 'http', 'api', 'beginner'],
  },
  {
    id: 39,
    title: 'JSON Web Token Decoder',
    description: 'Decode the payload from a JWT string.',
    difficulty: 'intermediate',
    category: 'Authentication',
    estimatedTime: '15 min',
    exerciseType: 'code',
    relatedLessons: [47],
    problemStatement: `Write a function called \`decodeJWTPayload\` that extracts and decodes the payload from a JWT token.

A JWT has three parts separated by dots: header.payload.signature

The payload is Base64URL encoded JSON.

**Example:**
\`\`\`javascript
const token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiam9obiJ9.signature";
decodeJWTPayload(token) // { user: "john" }
\`\`\``,
    hints: [
      'Split the token by "."',
      'The payload is the second part',
      'Use atob() or Buffer.from() to decode Base64',
    ],
    language: 'javascript',
    starterCode: `function decodeJWTPayload(token) {
  // Your code here
}`,
    solutionCode: `function decodeJWTPayload(token) {
  const parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error('Invalid JWT format');
  }

  const payload = parts[1];
  // Handle Base64URL encoding (replace - with + and _ with /)
  const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
  const decoded = atob(base64);

  return JSON.parse(decoded);
}`,
    testCases: [
      { id: '1', description: 'Should decode simple JWT payload', input: 'JSON.stringify(decodeJWTPayload("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiam9obiJ9.sig"))', expectedOutput: '"{\\\"user\\\":\\\"john\\\"}"' },
    ],
    tags: ['javascript', 'jwt', 'authentication', 'intermediate'],
  },
  {
    id: 40,
    title: 'Rate Limiter',
    description: 'Implement a simple rate limiter.',
    difficulty: 'intermediate',
    category: 'Security',
    estimatedTime: '20 min',
    exerciseType: 'code',
    relatedLessons: [51],
    problemStatement: `Create a RateLimiter class that limits function calls to a maximum number within a time window.

**Requirements:**
- Constructor takes \`maxRequests\` and \`windowMs\`
- \`tryRequest()\` returns true if allowed, false if rate limited
- Tracks requests within the time window
- Old requests outside the window don't count

**Example:**
\`\`\`javascript
const limiter = new RateLimiter(3, 1000); // 3 requests per second
limiter.tryRequest(); // true
limiter.tryRequest(); // true
limiter.tryRequest(); // true
limiter.tryRequest(); // false (rate limited)
\`\`\``,
    hints: [
      'Store timestamps of requests',
      'Filter out old timestamps on each call',
      'Check if count is under the limit',
    ],
    language: 'javascript',
    starterCode: `class RateLimiter {
  constructor(maxRequests, windowMs) {
    // Initialize
  }

  tryRequest() {
    // Check if request is allowed
  }
}`,
    solutionCode: `class RateLimiter {
  constructor(maxRequests, windowMs) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = [];
  }

  tryRequest() {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    // Remove old requests outside the window
    this.requests = this.requests.filter(time => time > windowStart);

    if (this.requests.length < this.maxRequests) {
      this.requests.push(now);
      return true;
    }

    return false;
  }
}`,
    testCases: [
      { id: '1', description: 'Should allow requests under limit', input: 'const l = new RateLimiter(3, 1000); l.tryRequest() && l.tryRequest() && l.tryRequest()', expectedOutput: 'true' },
      { id: '2', description: 'Should block requests over limit', input: 'const l = new RateLimiter(2, 1000); l.tryRequest(); l.tryRequest(); l.tryRequest()', expectedOutput: 'false' },
    ],
    tags: ['javascript', 'security', 'rate-limiting', 'intermediate'],
  },
  {
    id: 41,
    title: 'Simple SQL Query Builder',
    description: 'Build a basic SQL query builder.',
    difficulty: 'intermediate',
    category: 'SQL',
    estimatedTime: '25 min',
    exerciseType: 'code',
    relatedLessons: [44],
    problemStatement: `Create a QueryBuilder class for building SQL SELECT queries.

**Methods:**
- \`select(columns)\` - specify columns (array or '*')
- \`from(table)\` - specify table name
- \`where(condition)\` - add WHERE clause
- \`orderBy(column, direction)\` - add ORDER BY
- \`build()\` - return the SQL string

**Example:**
\`\`\`javascript
const query = new QueryBuilder()
  .select(['name', 'email'])
  .from('users')
  .where('active = true')
  .orderBy('name', 'ASC')
  .build();

// "SELECT name, email FROM users WHERE active = true ORDER BY name ASC"
\`\`\``,
    hints: [
      'Store each part of the query as instance properties',
      'Return this from each method for chaining',
      'Combine parts in build()',
    ],
    language: 'javascript',
    starterCode: `class QueryBuilder {
  constructor() {
    // Initialize properties
  }

  select(columns) {
    // Implement
  }

  from(table) {
    // Implement
  }

  where(condition) {
    // Implement
  }

  orderBy(column, direction = 'ASC') {
    // Implement
  }

  build() {
    // Return SQL string
  }
}`,
    solutionCode: `class QueryBuilder {
  constructor() {
    this._select = '*';
    this._from = '';
    this._where = '';
    this._orderBy = '';
  }

  select(columns) {
    this._select = Array.isArray(columns) ? columns.join(', ') : columns;
    return this;
  }

  from(table) {
    this._from = table;
    return this;
  }

  where(condition) {
    this._where = condition;
    return this;
  }

  orderBy(column, direction = 'ASC') {
    this._orderBy = \`\${column} \${direction}\`;
    return this;
  }

  build() {
    let query = \`SELECT \${this._select} FROM \${this._from}\`;
    if (this._where) query += \` WHERE \${this._where}\`;
    if (this._orderBy) query += \` ORDER BY \${this._orderBy}\`;
    return query;
  }
}`,
    testCases: [
      { id: '1', description: 'Should build simple query', input: 'new QueryBuilder().select("*").from("users").build()', expectedOutput: '"SELECT * FROM users"' },
      { id: '2', description: 'Should build query with WHERE', input: 'new QueryBuilder().select(["id", "name"]).from("users").where("id = 1").build()', expectedOutput: '"SELECT id, name FROM users WHERE id = 1"' },
    ],
    tags: ['javascript', 'sql', 'query-builder', 'intermediate'],
  },
  {
    id: 42,
    title: 'Validate Password Strength',
    description: 'Check if a password meets security requirements.',
    difficulty: 'beginner',
    category: 'Security',
    estimatedTime: '15 min',
    exerciseType: 'code',
    relatedLessons: [47, 63],
    problemStatement: `Write a function called \`validatePassword\` that checks password strength.

**Requirements:**
- At least 8 characters
- Contains at least one uppercase letter
- Contains at least one lowercase letter
- Contains at least one number
- Contains at least one special character (!@#$%^&*)

Return an object with \`valid\` (boolean) and \`errors\` (array of error messages).`,
    hints: [
      'Use regular expressions to check each requirement',
      'Build an array of error messages',
      'Return valid: true only if no errors',
    ],
    language: 'javascript',
    starterCode: `function validatePassword(password) {
  // Your code here
}`,
    solutionCode: `function validatePassword(password) {
  const errors = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain an uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain a lowercase letter');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain a number');
  }
  if (!/[!@#$%^&*]/.test(password)) {
    errors.push('Password must contain a special character');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}`,
    testCases: [
      { id: '1', description: 'Should validate strong password', input: 'validatePassword("StrongP@ss1").valid', expectedOutput: 'true' },
      { id: '2', description: 'Should reject weak password', input: 'validatePassword("weak").valid', expectedOutput: 'false' },
      { id: '3', description: 'Should return errors for weak password', input: 'validatePassword("weak").errors.length > 0', expectedOutput: 'true' },
    ],
    tags: ['javascript', 'security', 'validation', 'beginner'],
  },
  {
    id: 43,
    title: 'Paginate Array',
    description: 'Implement pagination for an array.',
    difficulty: 'beginner',
    category: 'Utilities',
    estimatedTime: '15 min',
    exerciseType: 'code',
    relatedLessons: [50],
    problemStatement: `Write a function called \`paginate\` that returns a paginated subset of an array.

**Parameters:**
- \`items\` - the array to paginate
- \`page\` - page number (1-indexed)
- \`perPage\` - items per page

**Return object:**
- \`data\` - the items for the current page
- \`page\` - current page number
- \`perPage\` - items per page
- \`total\` - total number of items
- \`totalPages\` - total number of pages

**Example:**
\`\`\`javascript
paginate([1,2,3,4,5,6,7,8,9,10], 2, 3)
// { data: [4,5,6], page: 2, perPage: 3, total: 10, totalPages: 4 }
\`\`\``,
    hints: [
      'Calculate start index: (page - 1) * perPage',
      'Use slice() to get the page items',
      'Calculate totalPages with Math.ceil()',
    ],
    language: 'javascript',
    starterCode: `function paginate(items, page, perPage) {
  // Your code here
}`,
    solutionCode: `function paginate(items, page, perPage) {
  const total = items.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const data = items.slice(start, start + perPage);

  return {
    data,
    page,
    perPage,
    total,
    totalPages
  };
}`,
    testCases: [
      { id: '1', description: 'Should return correct page data', input: 'JSON.stringify(paginate([1,2,3,4,5,6], 2, 2).data)', expectedOutput: '"[3,4]"' },
      { id: '2', description: 'Should calculate totalPages correctly', input: 'paginate([1,2,3,4,5,6,7,8,9,10], 1, 3).totalPages', expectedOutput: '4' },
      { id: '3', description: 'Should return correct total', input: 'paginate([1,2,3,4,5], 1, 2).total', expectedOutput: '5' },
    ],
    tags: ['javascript', 'pagination', 'utilities', 'beginner'],
  },
  {
    id: 44,
    title: 'Sanitize HTML',
    description: 'Remove potentially dangerous HTML tags.',
    difficulty: 'intermediate',
    category: 'Security',
    estimatedTime: '15 min',
    exerciseType: 'code',
    relatedLessons: [63],
    problemStatement: `Write a function called \`sanitizeHTML\` that removes dangerous HTML tags and attributes to prevent XSS attacks.

**Should remove:**
- \`<script>\` tags
- \`onclick\`, \`onerror\`, and other event handlers
- \`javascript:\` URLs

**Should allow:**
- Safe tags like \`<p>\`, \`<b>\`, \`<i>\`, \`<a>\`, \`<img>\`
- Safe attributes like \`href\` (without javascript:), \`src\`, \`alt\`

**Example:**
\`\`\`javascript
sanitizeHTML('<p>Hello</p><script>alert("xss")</script>')
// '<p>Hello</p>'
\`\`\``,
    hints: [
      'Use regular expressions to remove script tags',
      'Remove on* attributes (onclick, onload, etc.)',
      'Remove javascript: from URLs',
    ],
    language: 'javascript',
    starterCode: `function sanitizeHTML(html) {
  // Your code here
}`,
    solutionCode: `function sanitizeHTML(html) {
  // Remove script tags and their content
  let clean = html.replace(/<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi, '');

  // Remove on* event handlers
  clean = clean.replace(/\\s*on\\w+\\s*=\\s*["'][^"']*["']/gi, '');
  clean = clean.replace(/\\s*on\\w+\\s*=\\s*[^\\s>]+/gi, '');

  // Remove javascript: URLs
  clean = clean.replace(/javascript:/gi, '');

  return clean;
}`,
    testCases: [
      { id: '1', description: 'Should remove script tags', input: 'sanitizeHTML("<p>Hi</p><script>alert(1)</script>").includes("<script>")', expectedOutput: 'false' },
      { id: '2', description: 'Should keep safe tags', input: 'sanitizeHTML("<p>Hello</p>").includes("<p>")', expectedOutput: 'true' },
    ],
    tags: ['javascript', 'security', 'xss', 'intermediate'],
  },
  {
    id: 45,
    title: 'Environment Config Parser',
    description: 'Parse environment configuration from a string.',
    difficulty: 'beginner',
    category: 'Node.js',
    estimatedTime: '15 min',
    exerciseType: 'code',
    relatedLessons: [40],
    problemStatement: `Write a function called \`parseEnv\` that parses an environment file string into an object.

**Format:**
- Each line is KEY=VALUE
- Lines starting with # are comments
- Empty lines are ignored
- Values can be quoted (quotes are removed)

**Example:**
\`\`\`javascript
const envString = \`
# Database config
DB_HOST=localhost
DB_PORT=5432
DB_NAME="my_database"
\`;

parseEnv(envString)
// { DB_HOST: "localhost", DB_PORT: "5432", DB_NAME: "my_database" }
\`\`\``,
    hints: [
      'Split by newlines',
      'Skip empty lines and comments',
      'Split each line by first = only',
    ],
    language: 'javascript',
    starterCode: `function parseEnv(envString) {
  // Your code here
}`,
    solutionCode: `function parseEnv(envString) {
  const result = {};

  envString.split('\\n').forEach(line => {
    // Trim whitespace
    line = line.trim();

    // Skip empty lines and comments
    if (!line || line.startsWith('#')) return;

    // Split by first = only
    const eqIndex = line.indexOf('=');
    if (eqIndex === -1) return;

    const key = line.slice(0, eqIndex).trim();
    let value = line.slice(eqIndex + 1).trim();

    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    result[key] = value;
  });

  return result;
}`,
    testCases: [
      { id: '1', description: 'Should parse simple key-value', input: 'parseEnv("KEY=value").KEY', expectedOutput: '"value"' },
      { id: '2', description: 'Should skip comments', input: 'Object.keys(parseEnv("# comment\\nKEY=value")).length', expectedOutput: '1' },
      { id: '3', description: 'Should remove quotes', input: 'parseEnv(\'KEY="quoted"\').KEY', expectedOutput: '"quoted"' },
    ],
    tags: ['javascript', 'node', 'config', 'beginner'],
  },
];

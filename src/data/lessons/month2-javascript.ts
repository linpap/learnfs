import { Lesson } from '@/types/lesson';

export const month2Lessons: Lesson[] = [
  {
    id: 13,
    title: "Arrays & Objects",
    description: "Master JavaScript arrays and objects - the fundamental data structures",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 2,
    week: 1,
    category: "JavaScript",
    content: `
      <h2>Arrays & Objects in JavaScript</h2>
      <p>Arrays and objects are the building blocks of data in JavaScript. Understanding them deeply is essential for any developer.</p>

      <h3>Arrays - Ordered Collections</h3>
      <p>Arrays store ordered lists of values of any type.</p>
      <div class="code-block">
        <pre>// Creating arrays
const numbers = [1, 2, 3, 4, 5];
const mixed = ['hello', 42, true, null];
const empty = [];
const fromConstructor = new Array(3); // [empty x 3]

// Accessing elements (0-indexed)
const fruits = ['apple', 'banana', 'cherry'];
fruits[0];      // 'apple'
fruits[2];      // 'cherry'
fruits[10];     // undefined (no error)
fruits.at(-1);  // 'cherry' (last element)</pre>
      </div>

      <h3>Array Methods - Mutating</h3>
      <p>These methods modify the original array:</p>
      <div class="code-block">
        <pre>const arr = [1, 2, 3];

// Adding elements
arr.push(4);        // [1, 2, 3, 4] - adds to end
arr.unshift(0);     // [0, 1, 2, 3, 4] - adds to start

// Removing elements
arr.pop();          // Returns 4, arr = [0, 1, 2, 3]
arr.shift();        // Returns 0, arr = [1, 2, 3]

// Splice - remove/insert at position
arr.splice(1, 1);           // Remove 1 item at index 1
arr.splice(1, 0, 'new');    // Insert 'new' at index 1
arr.splice(1, 1, 'replace'); // Replace 1 item at index 1

// Sorting
const names = ['Charlie', 'Alice', 'Bob'];
names.sort();       // ['Alice', 'Bob', 'Charlie']

// Sort numbers (need compare function!)
const nums = [10, 5, 40, 25];
nums.sort((a, b) => a - b);  // [5, 10, 25, 40] ascending
nums.sort((a, b) => b - a);  // [40, 25, 10, 5] descending

// Reverse
arr.reverse();      // Reverses in place</pre>
      </div>

      <h3>Array Methods - Non-Mutating</h3>
      <p>These methods return new arrays without modifying the original:</p>
      <div class="code-block">
        <pre>const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter - keep elements that pass test
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// reduce - combine into single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

// find - first element matching condition
const found = numbers.find(n => n > 3);
// 4

// findIndex - index of first match
const index = numbers.findIndex(n => n > 3);
// 3

// some - does any element pass test?
const hasEven = numbers.some(n => n % 2 === 0);
// true

// every - do all elements pass test?
const allPositive = numbers.every(n => n > 0);
// true

// includes - does array contain value?
numbers.includes(3);  // true

// slice - extract portion
numbers.slice(1, 4);  // [2, 3, 4] (indices 1-3)
numbers.slice(-2);    // [4, 5] (last 2)

// concat - combine arrays
const combined = [1, 2].concat([3, 4]); // [1, 2, 3, 4]

// flat - flatten nested arrays
const nested = [1, [2, [3, 4]]];
nested.flat();      // [1, 2, [3, 4]]
nested.flat(2);     // [1, 2, 3, 4]

// flatMap - map then flatten
const words = ['hello world', 'foo bar'];
words.flatMap(w => w.split(' '));
// ['hello', 'world', 'foo', 'bar']</pre>
      </div>

      <h3>Objects - Key-Value Collections</h3>
      <div class="code-block">
        <pre>// Creating objects
const person = {
  name: 'Alice',
  age: 30,
  isStudent: false,
  'has-job': true  // quotes needed for special chars
};

// Accessing properties
person.name;          // 'Alice' (dot notation)
person['age'];        // 30 (bracket notation)
person['has-job'];    // true (must use brackets)

const key = 'name';
person[key];          // 'Alice' (dynamic access)

// Modifying objects
person.city = 'NYC';        // Add property
person.age = 31;            // Update property
delete person.isStudent;    // Remove property

// Check if property exists
'name' in person;           // true
person.hasOwnProperty('name'); // true</pre>
      </div>

      <h3>Object Methods</h3>
      <div class="code-block">
        <pre>const user = { name: 'Bob', age: 25, city: 'LA' };

// Get keys, values, entries
Object.keys(user);    // ['name', 'age', 'city']
Object.values(user);  // ['Bob', 25, 'LA']
Object.entries(user); // [['name', 'Bob'], ['age', 25], ['city', 'LA']]

// Create from entries
const entries = [['a', 1], ['b', 2]];
Object.fromEntries(entries); // { a: 1, b: 2 }

// Merge objects
const defaults = { theme: 'light', lang: 'en' };
const settings = { theme: 'dark' };
const merged = { ...defaults, ...settings };
// { theme: 'dark', lang: 'en' }

// Or with Object.assign
Object.assign({}, defaults, settings);

// Freeze - make immutable
const frozen = Object.freeze({ x: 1 });
frozen.x = 2;  // Silently fails (or throws in strict mode)

// Seal - can modify but not add/remove
const sealed = Object.seal({ x: 1 });
sealed.x = 2;  // Works
sealed.y = 3;  // Fails</pre>
      </div>

      <h3>Iterating Objects</h3>
      <div class="code-block">
        <pre>const obj = { a: 1, b: 2, c: 3 };

// for...in loop
for (const key in obj) {
  console.log(key, obj[key]);
}

// Using Object.keys/values/entries
Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
});

Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});</pre>
      </div>

      <h3>Nested Data Structures</h3>
      <div class="code-block">
        <pre>const data = {
  users: [
    { id: 1, name: 'Alice', tags: ['admin', 'active'] },
    { id: 2, name: 'Bob', tags: ['user'] }
  ],
  meta: {
    total: 2,
    page: 1
  }
};

// Accessing nested data
data.users[0].name;         // 'Alice'
data.users[1].tags[0];      // 'user'
data.meta.total;            // 2

// Optional chaining (safe access)
data.users[5]?.name;        // undefined (not error)
data.missing?.nested?.deep; // undefined

// Nullish coalescing for defaults
const value = data.missing ?? 'default';  // 'default'</pre>
      </div>
    `,
    questions: [
      {
        id: "13-1",
        type: "mcq",
        question: "Which array method would you use to transform each element and return a new array?",
        options: ["forEach", "filter", "map", "reduce"],
        correctAnswer: "map",
        explanation: "map() creates a new array by applying a function to each element. forEach() doesn't return anything, filter() only keeps matching elements, and reduce() combines elements into a single value."
      },
      {
        id: "13-2",
        type: "mcq",
        question: "What does Object.entries() return?",
        options: [
          "An array of keys",
          "An array of values",
          "An array of [key, value] pairs",
          "A new object"
        ],
        correctAnswer: "An array of [key, value] pairs",
        explanation: "Object.entries() returns an array of [key, value] pairs, making it easy to iterate over object properties. Object.keys() returns keys, Object.values() returns values."
      },
      {
        id: "13-3",
        type: "mcq",
        question: "What does arr.splice(1, 2) do?",
        options: [
          "Removes elements at indices 1 and 2",
          "Removes 2 elements starting at index 1",
          "Adds 2 to index 1",
          "Returns elements from index 1 to 2"
        ],
        correctAnswer: "Removes 2 elements starting at index 1",
        explanation: "splice(start, deleteCount) removes deleteCount elements starting at index start. It mutates the original array and returns the removed elements."
      },
      {
        id: "13-4",
        type: "descriptive",
        question: "Explain the difference between map, filter, and reduce with examples of when you'd use each.",
        keywords: ["map", "transform", "filter", "condition", "reduce", "accumulate", "new array", "single value"],
        explanation: "map() transforms each element (e.g., doubling numbers), filter() keeps elements matching a condition (e.g., finding even numbers), reduce() combines all elements into one value (e.g., calculating sum or building an object). Map and filter return arrays; reduce returns any value."
      }
    ]
  },
  {
    id: 14,
    title: "DOM Manipulation",
    description: "Learn to interact with web pages using the Document Object Model",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 2,
    week: 1,
    category: "JavaScript",
    content: `
      <h2>DOM Manipulation</h2>
      <p>The Document Object Model (DOM) is a programming interface that represents HTML as a tree of objects. JavaScript can read, modify, add, and delete HTML elements.</p>

      <h3>Selecting Elements</h3>
      <div class="code-block">
        <pre>// Modern methods (recommended)
const element = document.querySelector('.my-class');     // First match
const elements = document.querySelectorAll('.my-class'); // All matches (NodeList)

// By ID
const header = document.getElementById('header');
const header2 = document.querySelector('#header');

// By class
const items = document.getElementsByClassName('item');   // HTMLCollection (live)
const items2 = document.querySelectorAll('.item');       // NodeList (static)

// By tag
const paragraphs = document.getElementsByTagName('p');
const paragraphs2 = document.querySelectorAll('p');

// Complex selectors
document.querySelector('nav > ul > li:first-child a');
document.querySelectorAll('input[type="text"]');
document.querySelectorAll('.card:not(.hidden)');

// Relative selection
const parent = element.parentElement;
const children = element.children;
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;
const closest = element.closest('.container');  // Nearest ancestor matching selector</pre>
      </div>

      <h3>Modifying Elements</h3>
      <div class="code-block">
        <pre>const element = document.querySelector('.card');

// Text content (safe, no HTML)
element.textContent = 'Hello World';

// HTML content (can include HTML)
element.innerHTML = '&lt;strong&gt;Bold&lt;/strong&gt; text';

// Attributes
element.getAttribute('href');
element.setAttribute('href', '/new-link');
element.removeAttribute('disabled');
element.hasAttribute('data-id');

// Data attributes
element.dataset.userId = '123';    // Sets data-user-id="123"
const id = element.dataset.userId; // Reads data-user-id

// Classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('expanded');
element.classList.contains('active');  // true/false
element.classList.replace('old', 'new');

// Styles (inline)
element.style.color = 'red';
element.style.backgroundColor = 'blue';  // camelCase!
element.style.cssText = 'color: red; padding: 10px;';

// Get computed styles
const styles = getComputedStyle(element);
styles.color;  // 'rgb(255, 0, 0)'</pre>
      </div>

      <h3>Creating & Inserting Elements</h3>
      <div class="code-block">
        <pre>// Create element
const div = document.createElement('div');
div.className = 'card';
div.textContent = 'New card';
div.setAttribute('data-id', '1');

// Insert methods
const container = document.querySelector('.container');

// Append as last child
container.appendChild(div);
container.append(div, 'text', anotherElement);  // Multiple items

// Prepend as first child
container.prepend(div);

// Insert at specific position
container.insertBefore(newElement, referenceElement);

// Modern insertion methods
element.before(newElement);   // Before element
element.after(newElement);    // After element

// insertAdjacentHTML - fast for HTML strings
element.insertAdjacentHTML('beforebegin', '&lt;div&gt;Before&lt;/div&gt;');
element.insertAdjacentHTML('afterbegin', '&lt;div&gt;First child&lt;/div&gt;');
element.insertAdjacentHTML('beforeend', '&lt;div&gt;Last child&lt;/div&gt;');
element.insertAdjacentHTML('afterend', '&lt;div&gt;After&lt;/div&gt;');

// Clone elements
const clone = element.cloneNode(true);  // true = deep clone with children</pre>
      </div>

      <h3>Removing Elements</h3>
      <div class="code-block">
        <pre>// Modern way
element.remove();

// Old way (still works)
parent.removeChild(element);

// Remove all children
element.innerHTML = '';
// Or
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
// Or modern
element.replaceChildren();  // Remove all, optionally add new</pre>
      </div>

      <h3>Event Handling</h3>
      <div class="code-block">
        <pre>const button = document.querySelector('button');

// Add event listener
button.addEventListener('click', function(event) {
  console.log('Clicked!', event.target);
});

// Arrow function
button.addEventListener('click', (e) => {
  console.log('Clicked!');
});

// Named function (can be removed)
function handleClick(event) {
  console.log('Clicked!');
}
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);

// Event object
element.addEventListener('click', (e) => {
  e.target;           // Element that triggered event
  e.currentTarget;    // Element listener is attached to
  e.preventDefault(); // Prevent default behavior
  e.stopPropagation(); // Stop bubbling
});

// Common events
element.addEventListener('click', fn);
element.addEventListener('dblclick', fn);
element.addEventListener('mouseenter', fn);
element.addEventListener('mouseleave', fn);
element.addEventListener('keydown', fn);
element.addEventListener('keyup', fn);
element.addEventListener('submit', fn);
element.addEventListener('change', fn);
element.addEventListener('input', fn);
element.addEventListener('focus', fn);
element.addEventListener('blur', fn);
element.addEventListener('scroll', fn);
element.addEventListener('load', fn);

// Event delegation
document.querySelector('.list').addEventListener('click', (e) => {
  if (e.target.matches('.list-item')) {
    console.log('Item clicked:', e.target.textContent);
  }
});</pre>
      </div>

      <h3>Form Handling</h3>
      <div class="code-block">
        <pre>const form = document.querySelector('form');
const input = document.querySelector('input');

// Get/set values
input.value;          // Current value
input.value = 'new';  // Set value

// Checkbox/radio
checkbox.checked;     // true/false

// Select dropdown
select.value;                    // Selected value
select.selectedIndex;            // Selected index
select.options[0].text;          // Option text

// Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();  // Prevent page reload

  // Get all form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);  // { name: 'value', email: 'value', ... }
});

// Input events
input.addEventListener('input', (e) => {
  console.log('Value changed:', e.target.value);
});

input.addEventListener('change', (e) => {
  console.log('Input lost focus with new value');
});</pre>
      </div>
    `,
    questions: [
      {
        id: "14-1",
        type: "mcq",
        question: "What's the difference between querySelector and querySelectorAll?",
        options: [
          "querySelector is faster",
          "querySelector returns first match, querySelectorAll returns all matches",
          "querySelectorAll only works with classes",
          "There is no difference"
        ],
        correctAnswer: "querySelector returns first match, querySelectorAll returns all matches",
        explanation: "querySelector() returns the first element that matches the selector, or null if none found. querySelectorAll() returns a NodeList of all matching elements."
      },
      {
        id: "14-2",
        type: "mcq",
        question: "Which method would you use to safely set text content without HTML interpretation?",
        options: ["innerHTML", "textContent", "outerHTML", "insertHTML"],
        correctAnswer: "textContent",
        explanation: "textContent sets plain text without parsing HTML, making it safe from XSS attacks. innerHTML parses and renders HTML, which can be a security risk with user input."
      },
      {
        id: "14-3",
        type: "mcq",
        question: "What does event.preventDefault() do?",
        options: [
          "Stops event bubbling",
          "Removes the event listener",
          "Prevents the browser's default action for that event",
          "Prevents any JavaScript from running"
        ],
        correctAnswer: "Prevents the browser's default action for that event",
        explanation: "preventDefault() stops the browser's default behavior (like form submission refreshing the page, or link navigation). stopPropagation() stops event bubbling."
      },
      {
        id: "14-4",
        type: "descriptive",
        question: "Explain event delegation and why it's useful for dynamic content.",
        keywords: ["delegation", "parent", "bubbling", "dynamic", "target", "matches", "performance", "single listener"],
        explanation: "Event delegation attaches a single listener to a parent element instead of many listeners on children. Events bubble up from clicked elements. Check e.target to identify which child was clicked. It works for elements added dynamically and improves performance."
      }
    ]
  },
  {
    id: 15,
    title: "Asynchronous JavaScript",
    description: "Master promises, async/await, and handling asynchronous operations",
    duration: "60 min",
    difficulty: "Intermediate",
    month: 2,
    week: 1,
    category: "JavaScript",
    content: `
      <h2>Asynchronous JavaScript</h2>
      <p>JavaScript is single-threaded but handles async operations through an event loop. Understanding async is crucial for API calls, file operations, and timers.</p>

      <h3>The Event Loop</h3>
      <p>JavaScript uses an event loop to handle async operations:</p>
      <ol>
        <li>Synchronous code runs first (call stack)</li>
        <li>Async callbacks are queued</li>
        <li>When call stack is empty, callbacks are processed</li>
      </ol>
      <div class="code-block">
        <pre>console.log('1');  // Sync - runs first

setTimeout(() => {
  console.log('2');  // Async - queued
}, 0);

console.log('3');  // Sync - runs second

// Output: 1, 3, 2 (not 1, 2, 3!)</pre>
      </div>

      <h3>Callbacks (Old Way)</h3>
      <div class="code-block">
        <pre>// Callbacks - functions passed to async functions
function fetchData(callback) {
  setTimeout(() => {
    callback('Data loaded');
  }, 1000);
}

fetchData((result) => {
  console.log(result);  // 'Data loaded' after 1 second
});

// Callback Hell (pyramid of doom)
fetchUser(userId, (user) => {
  fetchPosts(user.id, (posts) => {
    fetchComments(posts[0].id, (comments) => {
      // Deeply nested, hard to read and maintain
    });
  });
});</pre>
      </div>

      <h3>Promises</h3>
      <p>Promises represent future values - they're either pending, fulfilled, or rejected.</p>
      <div class="code-block">
        <pre>// Creating a promise
const promise = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve('Operation completed!');
    } else {
      reject(new Error('Operation failed'));
    }
  }, 1000);
});

// Using promises
promise
  .then(result => {
    console.log(result);  // 'Operation completed!'
    return 'Next value';  // Can chain
  })
  .then(nextResult => {
    console.log(nextResult);  // 'Next value'
  })
  .catch(error => {
    console.error(error);  // Handle any error in chain
  })
  .finally(() => {
    console.log('Always runs');  // Cleanup
  });

// Promise states
// Pending  -> waiting for result
// Fulfilled -> resolved with value
// Rejected -> rejected with error</pre>
      </div>

      <h3>Promise Static Methods</h3>
      <div class="code-block">
        <pre>// Promise.all - wait for all, fail if any fails
const promises = [fetch('/api/1'), fetch('/api/2'), fetch('/api/3')];

Promise.all(promises)
  .then(results => {
    console.log('All completed:', results);
  })
  .catch(error => {
    console.log('One failed:', error);
  });

// Promise.allSettled - wait for all, never fails
Promise.allSettled(promises)
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log('Success:', result.value);
      } else {
        console.log('Failed:', result.reason);
      }
    });
  });

// Promise.race - first to complete (success or fail)
Promise.race([
  fetch('/api/data'),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), 5000)
  )
]);

// Promise.any - first to succeed
Promise.any(promises)
  .then(firstSuccess => console.log(firstSuccess))
  .catch(error => console.log('All failed'));

// Create resolved/rejected promises
Promise.resolve('immediate value');
Promise.reject(new Error('immediate error'));</pre>
      </div>

      <h3>Async/Await</h3>
      <p>Async/await is syntactic sugar over promises, making async code look synchronous.</p>
      <div class="code-block">
        <pre>// async function always returns a promise
async function fetchData() {
  return 'data';  // Automatically wrapped in Promise.resolve()
}

// await pauses execution until promise resolves
async function loadUser() {
  const response = await fetch('/api/user');
  const user = await response.json();
  return user;
}

// Error handling with try/catch
async function fetchWithError() {
  try {
    const response = await fetch('/api/data');

    if (!response.ok) {
      throw new Error(\`HTTP error: \${response.status}\`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;  // Re-throw or handle
  } finally {
    console.log('Cleanup');
  }
}

// Parallel async operations
async function loadDashboard() {
  // Sequential (slow)
  const user = await fetchUser();
  const posts = await fetchPosts();  // Waits for user

  // Parallel (fast)
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments()
  ]);

  return { user, posts, comments };
}

// Async arrow functions
const getData = async () => {
  const data = await fetch('/api/data');
  return data.json();
};

// Async in loops
async function processItems(items) {
  // Sequential processing
  for (const item of items) {
    await processItem(item);
  }

  // Parallel processing
  await Promise.all(items.map(item => processItem(item)));
}</pre>
      </div>

      <h3>Common Patterns</h3>
      <div class="code-block">
        <pre>// Retry pattern
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
}

// Timeout pattern
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });
    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

// Loading state pattern
async function loadData(setLoading, setData, setError) {
  setLoading(true);
  setError(null);

  try {
    const data = await fetchData();
    setData(data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}</pre>
      </div>
    `,
    questions: [
      {
        id: "15-1",
        type: "mcq",
        question: "What does the await keyword do?",
        options: [
          "Creates a new thread",
          "Pauses async function execution until the promise resolves",
          "Makes code run faster",
          "Converts sync code to async"
        ],
        correctAnswer: "Pauses async function execution until the promise resolves",
        explanation: "await pauses the execution of an async function until the promise it's waiting on settles. It then returns the resolved value or throws the rejected error."
      },
      {
        id: "15-2",
        type: "mcq",
        question: "What happens if one promise in Promise.all() rejects?",
        options: [
          "Other promises continue, rejected one is ignored",
          "The entire Promise.all() rejects immediately",
          "It returns partial results",
          "It retries the failed promise"
        ],
        correctAnswer: "The entire Promise.all() rejects immediately",
        explanation: "Promise.all() fails fast - if any promise rejects, the whole thing rejects. Use Promise.allSettled() if you need all results regardless of individual failures."
      },
      {
        id: "15-3",
        type: "mcq",
        question: "Why does this code output '1, 3, 2'? console.log('1'); setTimeout(() => console.log('2'), 0); console.log('3');",
        options: [
          "setTimeout is broken",
          "The timeout is too short",
          "Async callbacks run after all sync code finishes",
          "There's a bug in the code"
        ],
        correctAnswer: "Async callbacks run after all sync code finishes",
        explanation: "The event loop processes all synchronous code first. Even with a 0ms timeout, the callback goes to the task queue and only runs after the call stack is empty."
      },
      {
        id: "15-4",
        type: "descriptive",
        question: "Explain the difference between using Promise.all() vs awaiting promises sequentially in a loop.",
        keywords: ["parallel", "sequential", "Promise.all", "performance", "concurrent", "loop", "independent", "faster"],
        explanation: "Promise.all() runs promises in parallel, completing in the time of the slowest one. Sequential awaits in a loop wait for each to complete before starting the next. Use Promise.all() for independent operations to improve performance."
      }
    ]
  },
  {
    id: 16,
    title: "ES6+ Features",
    description: "Master modern JavaScript features: destructuring, spread, modules, and more",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 2,
    week: 2,
    category: "JavaScript",
    content: `
      <h2>Modern JavaScript (ES6+)</h2>
      <p>ES6 (2015) and later versions introduced powerful features that make JavaScript more expressive and easier to write.</p>

      <h3>Destructuring</h3>
      <p>Extract values from arrays and objects into variables.</p>
      <div class="code-block">
        <pre>// Array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
// first = 'red', second = 'green', third = 'blue'

// Skip elements
const [, , last] = colors;  // last = 'blue'

// Rest pattern
const [head, ...tail] = colors;
// head = 'red', tail = ['green', 'blue']

// Default values
const [a, b, c = 'yellow'] = ['red', 'green'];
// c = 'yellow' (default used)

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];  // x = 2, y = 1

// Object destructuring
const user = { name: 'Alice', age: 30, city: 'NYC' };
const { name, age } = user;
// name = 'Alice', age = 30

// Rename variables
const { name: userName, age: userAge } = user;
// userName = 'Alice', userAge = 30

// Default values
const { country = 'USA' } = user;
// country = 'USA' (default)

// Nested destructuring
const data = {
  user: { name: 'Bob', address: { city: 'LA' } }
};
const { user: { name, address: { city } } } = data;
// name = 'Bob', city = 'LA'

// Function parameter destructuring
function greet({ name, age = 0 }) {
  return \`Hello \${name}, age \${age}\`;
}
greet({ name: 'Alice', age: 25 });</pre>
      </div>

      <h3>Spread Operator (...)</h3>
      <div class="code-block">
        <pre>// Spread arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]
const copy = [...arr1];  // Shallow copy

// Insert in middle
const withMiddle = [1, ...arr1, 5];  // [1, 1, 2, 3, 5]

// Spread objects
const defaults = { theme: 'light', lang: 'en' };
const settings = { theme: 'dark', fontSize: 16 };
const merged = { ...defaults, ...settings };
// { theme: 'dark', lang: 'en', fontSize: 16 }

// Shallow copy object
const userCopy = { ...user };

// Add/override properties
const updated = { ...user, age: 31, country: 'USA' };

// Function arguments
const numbers = [1, 2, 3];
Math.max(...numbers);  // Same as Math.max(1, 2, 3)

// Convert to array
const nodeList = document.querySelectorAll('div');
const array = [...nodeList];</pre>
      </div>

      <h3>Rest Parameters</h3>
      <div class="code-block">
        <pre>// Collect remaining arguments
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4);  // 10

// First arg + rest
function logWithPrefix(prefix, ...messages) {
  messages.forEach(msg => console.log(\`[\${prefix}] \${msg}\`));
}
logWithPrefix('INFO', 'Starting', 'Processing', 'Done');

// Object rest
const { name, ...rest } = { name: 'Alice', age: 30, city: 'NYC' };
// rest = { age: 30, city: 'NYC' }</pre>
      </div>

      <h3>Template Literals</h3>
      <div class="code-block">
        <pre>const name = 'Alice';
const age = 30;

// String interpolation
const greeting = \`Hello, \${name}! You are \${age} years old.\`;

// Expressions
const calc = \`2 + 2 = \${2 + 2}\`;
const conditional = \`Status: \${age >= 18 ? 'adult' : 'minor'}\`;

// Multiline strings
const html = \`
  &lt;div class="card"&gt;
    &lt;h2&gt;\${name}&lt;/h2&gt;
    &lt;p&gt;Age: \${age}&lt;/p&gt;
  &lt;/div&gt;
\`;

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] !== undefined ? \`&lt;mark&gt;\${values[i]}&lt;/mark&gt;\` : '';
    return result + str + value;
  }, '');
}
highlight\`Hello \${name}, you are \${age}\`;
// "Hello <mark>Alice</mark>, you are <mark>30</mark>"</pre>
      </div>

      <h3>ES Modules</h3>
      <div class="code-block">
        <pre>// math.js - Named exports
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}
export function multiply(a, b) {
  return a * b;
}

// user.js - Default export
const user = { name: 'Alice' };
export default user;

// You can have one default + multiple named
export default function main() {}
export const helper = () => {};

// Importing - Named imports
import { add, multiply } from './math.js';
import { add as sum } from './math.js';  // Rename

// Import all as namespace
import * as math from './math.js';
math.add(1, 2);
math.PI;

// Import default
import user from './user.js';
import myUser from './user.js';  // Any name works

// Mixed imports
import defaultExport, { named1, named2 } from './module.js';

// Re-exporting
export { add, multiply } from './math.js';
export * from './math.js';
export { default as User } from './user.js';

// Dynamic imports (code splitting)
const module = await import('./heavy-module.js');
// Or with .then()
import('./module.js').then(module => {
  module.doSomething();
});</pre>
      </div>

      <h3>Other ES6+ Features</h3>
      <div class="code-block">
        <pre>// Optional chaining
const city = user?.address?.city;  // undefined if any is null/undefined
const first = arr?.[0];            // Safe array access
const result = obj?.method?.();     // Safe method call

// Nullish coalescing
const value = null ?? 'default';    // 'default'
const zero = 0 ?? 'default';        // 0 (only null/undefined trigger default)

// Logical assignment
let a = null;
a ??= 'default';  // a = 'default' (if null/undefined)

let b = false;
b ||= true;       // b = true (if falsy)

let c = true;
c &&= false;      // c = false (if truthy)

// Object shorthand
const name = 'Alice';
const age = 30;
const user = { name, age };  // { name: 'Alice', age: 30 }

// Computed property names
const key = 'dynamic';
const obj = {
  [key]: 'value',
  [\`\${key}2\`]: 'value2'
};
// { dynamic: 'value', dynamic2: 'value2' }

// Method shorthand
const obj = {
  greet() {  // Instead of greet: function()
    return 'Hello';
  }
};</pre>
      </div>
    `,
    questions: [
      {
        id: "16-1",
        type: "mcq",
        question: "What does const { name: userName } = user do?",
        options: [
          "Creates a variable called name",
          "Creates a variable called userName with the value of user.name",
          "Renames user.name to userName in the object",
          "Creates both name and userName variables"
        ],
        correctAnswer: "Creates a variable called userName with the value of user.name",
        explanation: "This is destructuring with renaming. It extracts user.name and assigns it to a new variable called userName. The variable 'name' is not created."
      },
      {
        id: "16-2",
        type: "mcq",
        question: "What's the difference between spread (...) and rest (...)?",
        options: [
          "They're the same thing",
          "Spread expands, rest collects",
          "Rest is for arrays, spread is for objects",
          "Spread is newer than rest"
        ],
        correctAnswer: "Spread expands, rest collects",
        explanation: "Spread expands an array/object into individual elements. Rest collects multiple elements into an array. Context determines which: function parameters use rest, function calls use spread."
      },
      {
        id: "16-3",
        type: "mcq",
        question: "What does ?? (nullish coalescing) return for: 0 ?? 'default'?",
        options: ["'default'", "0", "null", "undefined"],
        correctAnswer: "0",
        explanation: "Nullish coalescing (??) only uses the default for null or undefined, not other falsy values like 0, '', or false. This differs from || which uses default for any falsy value."
      },
      {
        id: "16-4",
        type: "descriptive",
        question: "Explain the benefits of ES modules over script tags and when to use dynamic imports.",
        keywords: ["module", "import", "export", "scope", "dependency", "tree shaking", "dynamic", "code splitting", "lazy"],
        explanation: "ES modules provide clear dependency management, avoid global scope pollution, enable tree shaking (removing unused code), and work with modern bundlers. Dynamic imports enable code splitting and lazy loading - loading modules only when needed, improving initial load time."
      }
    ]
  },
  {
    id: 17,
    title: "Error Handling & Debugging",
    description: "Learn to handle errors gracefully and debug JavaScript effectively",
    duration: "45 min",
    difficulty: "Intermediate",
    month: 2,
    week: 2,
    category: "JavaScript",
    content: `
      <h2>Error Handling & Debugging</h2>
      <p>Proper error handling makes your applications robust. Effective debugging skills make you a more productive developer.</p>

      <h3>Types of Errors</h3>
      <div class="code-block">
        <pre>// SyntaxError - Code won't parse
const x = ;  // Unexpected token

// ReferenceError - Variable doesn't exist
console.log(undefinedVar);

// TypeError - Wrong type operation
null.toString();
const num = 5;
num();  // num is not a function

// RangeError - Value out of range
new Array(-1);
(1).toFixed(200);

// Custom errors
throw new Error('Something went wrong');</pre>
      </div>

      <h3>Try/Catch/Finally</h3>
      <div class="code-block">
        <pre>try {
  // Code that might throw
  const data = JSON.parse(invalidJSON);
  processData(data);
} catch (error) {
  // Handle the error
  console.error('Error:', error.message);
  console.error('Stack:', error.stack);
} finally {
  // Always runs (cleanup)
  cleanup();
}

// Catching specific error types
try {
  riskyOperation();
} catch (error) {
  if (error instanceof TypeError) {
    console.log('Type error:', error.message);
  } else if (error instanceof RangeError) {
    console.log('Range error:', error.message);
  } else {
    throw error;  // Re-throw unknown errors
  }
}

// Nested try/catch
try {
  try {
    throw new Error('Inner error');
  } catch (innerError) {
    console.log('Caught inner');
    throw innerError;  // Re-throw to outer
  }
} catch (outerError) {
  console.log('Caught outer');
}</pre>
      </div>

      <h3>Custom Errors</h3>
      <div class="code-block">
        <pre>// Custom error class
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

// Using custom errors
function validateUser(user) {
  if (!user.email) {
    throw new ValidationError('Email is required', 'email');
  }
  if (!user.email.includes('@')) {
    throw new ValidationError('Invalid email format', 'email');
  }
}

try {
  validateUser({ name: 'Alice' });
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(\`Validation failed: \${error.field} - \${error.message}\`);
  }
}</pre>
      </div>

      <h3>Async Error Handling</h3>
      <div class="code-block">
        <pre>// Promise .catch()
fetch('/api/data')
  .then(response => response.json())
  .then(data => processData(data))
  .catch(error => {
    console.error('Fetch failed:', error);
  });

// Async/await with try/catch
async function fetchData() {
  try {
    const response = await fetch('/api/data');

    if (!response.ok) {
      throw new NetworkError(
        \`HTTP error: \${response.statusText}\`,
        response.status
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof NetworkError) {
      console.error(\`Network error \${error.statusCode}: \${error.message}\`);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;  // Re-throw for caller to handle
  }
}

// Global unhandled promise rejection
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled promise rejection:', event.reason);
  event.preventDefault();  // Prevent default logging
});

// Global error handler
window.addEventListener('error', event => {
  console.error('Global error:', event.error);
});</pre>
      </div>

      <h3>Debugging Techniques</h3>
      <div class="code-block">
        <pre>// Console methods
console.log('Basic log');
console.error('Error message');
console.warn('Warning message');
console.info('Info message');

// Grouped logs
console.group('User Data');
console.log('Name:', user.name);
console.log('Age:', user.age);
console.groupEnd();

// Table for arrays/objects
console.table([
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 }
]);

// Timing
console.time('operation');
expensiveOperation();
console.timeEnd('operation');  // operation: 234ms

// Counting
function processItem() {
  console.count('processItem called');
}

// Stack trace
console.trace('How did we get here?');

// Assertions
console.assert(value > 0, 'Value must be positive');

// Debugger statement
function buggyFunction(data) {
  debugger;  // Pauses execution in DevTools
  return processData(data);
}

// Conditional breakpoints (in DevTools)
// Right-click line number > Add conditional breakpoint
// Enter condition like: user.age > 18</pre>
      </div>

      <h3>Defensive Programming</h3>
      <div class="code-block">
        <pre>// Parameter validation
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Arguments must be numbers');
  }
  if (b === 0) {
    throw new RangeError('Cannot divide by zero');
  }
  return a / b;
}

// Safe property access
const value = obj?.nested?.property ?? 'default';

// Safe array access
const first = array?.[0];

// Safe function call
const result = callback?.();

// Default values
function greet(name = 'Guest') {
  console.log(\`Hello, \${name}\`);
}

// Guard clauses
function processUser(user) {
  if (!user) return null;
  if (!user.isActive) return null;
  if (!user.hasPermission) return null;

  // Main logic
  return processActiveUser(user);
}

// Input sanitization
function sanitizeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}</pre>
      </div>
    `,
    questions: [
      {
        id: "17-1",
        type: "mcq",
        question: "When does the 'finally' block execute?",
        options: [
          "Only when there's no error",
          "Only when there's an error",
          "Always, whether there's an error or not",
          "Only when catch re-throws"
        ],
        correctAnswer: "Always, whether there's an error or not",
        explanation: "The finally block always executes, regardless of whether an error occurred or whether it was caught. It's ideal for cleanup operations like closing connections."
      },
      {
        id: "17-2",
        type: "mcq",
        question: "What's the purpose of extending the Error class for custom errors?",
        options: [
          "It's required by JavaScript",
          "To add custom properties and enable instanceof checks",
          "To make errors visible in the console",
          "To prevent errors from crashing the app"
        ],
        correctAnswer: "To add custom properties and enable instanceof checks",
        explanation: "Custom error classes let you add relevant properties (like statusCode) and use instanceof to handle different error types differently. They also maintain proper stack traces."
      },
      {
        id: "17-3",
        type: "mcq",
        question: "What does console.trace() do?",
        options: [
          "Traces network requests",
          "Prints the call stack showing how the current point was reached",
          "Traces variable changes",
          "Creates a log file"
        ],
        correctAnswer: "Prints the call stack showing how the current point was reached",
        explanation: "console.trace() outputs a stack trace to the console, showing the path of function calls that led to that point. It's useful for understanding how code execution reached a certain point."
      },
      {
        id: "17-4",
        type: "descriptive",
        question: "Explain the difference between throwing errors in sync vs async code and how to handle each.",
        keywords: ["try", "catch", "throw", "async", "await", "promise", "reject", "unhandled", "stack trace"],
        explanation: "In sync code, use try/catch directly around the throwing code. In async code with promises, use .catch() or try/catch with async/await. Unhandled promise rejections need special handling. Async errors may lose stack trace context if not properly chained."
      }
    ]
  },
  {
    id: 18,
    title: "Introduction to TypeScript",
    description: "Learn TypeScript basics: types, interfaces, and type annotations",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 2,
    week: 3,
    category: "TypeScript",
    content: `
      <h2>Introduction to TypeScript</h2>
      <p>TypeScript is JavaScript with static type checking. It catches errors at compile time, improves tooling, and makes code more maintainable.</p>

      <h3>Why TypeScript?</h3>
      <ul>
        <li><strong>Catch errors early</strong> - Find bugs before running code</li>
        <li><strong>Better tooling</strong> - Autocomplete, refactoring, navigation</li>
        <li><strong>Self-documenting</strong> - Types serve as documentation</li>
        <li><strong>Safer refactoring</strong> - Compiler catches breaking changes</li>
      </ul>

      <h3>Basic Types</h3>
      <div class="code-block">
        <pre>// Primitive types
let name: string = 'Alice';
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Type inference (TypeScript figures it out)
let message = 'Hello';  // Inferred as string
let count = 42;         // Inferred as number

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array&lt;string&gt; = ['Alice', 'Bob'];
let mixed: (string | number)[] = [1, 'two', 3];

// Tuples (fixed-length arrays with known types)
let tuple: [string, number] = ['Alice', 30];
let coords: [number, number, number] = [10, 20, 30];

// Object type
let user: { name: string; age: number } = {
  name: 'Alice',
  age: 30
};

// Any - escape hatch (avoid when possible)
let anything: any = 'could be anything';
anything = 42;  // No error

// Unknown - safer than any
let value: unknown = 'something';
// Must narrow type before using
if (typeof value === 'string') {
  console.log(value.toUpperCase());  // OK
}</pre>
      </div>

      <h3>Functions</h3>
      <div class="code-block">
        <pre>// Function with typed parameters and return
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Optional parameters
function greet(name: string, greeting?: string): string {
  return \`\${greeting || 'Hello'}, \${name}!\`;
}

// Default parameters
function greet(name: string, greeting: string = 'Hello'): string {
  return \`\${greeting}, \${name}!\`;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

// Void - function returns nothing
function log(message: string): void {
  console.log(message);
}

// Never - function never returns (throws or infinite loop)
function throwError(message: string): never {
  throw new Error(message);
}

// Function type
type MathOperation = (a: number, b: number) => number;
const subtract: MathOperation = (a, b) => a - b;</pre>
      </div>

      <h3>Interfaces</h3>
      <div class="code-block">
        <pre>// Define object shape
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;  // Optional
  readonly createdAt: Date;  // Cannot be modified
}

const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  createdAt: new Date()
};

// user.createdAt = new Date();  // Error: readonly

// Extending interfaces
interface Employee extends User {
  department: string;
  salary: number;
}

// Interface for functions
interface SearchFunction {
  (query: string, limit?: number): Promise&lt;User[]&gt;;
}

const searchUsers: SearchFunction = async (query, limit = 10) => {
  // Implementation
  return [];
};

// Index signatures (dynamic keys)
interface StringMap {
  [key: string]: string;
}

const translations: StringMap = {
  hello: 'hola',
  goodbye: 'adios'
};</pre>
      </div>

      <h3>Type Aliases</h3>
      <div class="code-block">
        <pre>// Type alias (alternative to interface)
type Point = {
  x: number;
  y: number;
};

// Type alias for primitives and unions
type ID = string | number;
type Status = 'pending' | 'active' | 'completed';

// When to use type vs interface?
// - Interface: objects, can be extended/merged
// - Type: unions, intersections, primitives, tuples

// Union types
type Result = string | number;
let value: Result = 'hello';
value = 42;  // Also valid

// Intersection types
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged;

const person: Person = { name: 'Alice', age: 30 };

// Literal types
type Direction = 'north' | 'south' | 'east' | 'west';
let dir: Direction = 'north';
// dir = 'up';  // Error: not assignable</pre>
      </div>

      <h3>Type Narrowing</h3>
      <div class="code-block">
        <pre>// typeof narrowing
function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase();  // TypeScript knows it's string
  }
  return value.toFixed(2);  // TypeScript knows it's number
}

// Truthiness narrowing
function printName(name: string | null) {
  if (name) {
    console.log(name.toUpperCase());  // string
  } else {
    console.log('No name');  // null
  }
}

// in operator narrowing
interface Dog { bark(): void; }
interface Cat { meow(): void; }

function speak(animal: Dog | Cat) {
  if ('bark' in animal) {
    animal.bark();  // Dog
  } else {
    animal.meow();  // Cat
  }
}

// instanceof narrowing
function formatDate(date: Date | string) {
  if (date instanceof Date) {
    return date.toISOString();  // Date
  }
  return new Date(date).toISOString();  // string
}</pre>
      </div>

      <h3>Enums</h3>
      <div class="code-block">
        <pre>// Numeric enum
enum Direction {
  North,  // 0
  South,  // 1
  East,   // 2
  West    // 3
}

let dir: Direction = Direction.North;

// String enum (recommended)
enum Status {
  Pending = 'PENDING',
  Active = 'ACTIVE',
  Completed = 'COMPLETED'
}

let status: Status = Status.Pending;

// Const enum (inlined at compile time)
const enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}</pre>
      </div>
    `,
    questions: [
      {
        id: "18-1",
        type: "mcq",
        question: "What's the difference between 'any' and 'unknown' types?",
        options: [
          "They're the same",
          "'unknown' requires type checking before use, 'any' doesn't",
          "'any' is for objects, 'unknown' is for primitives",
          "'unknown' is deprecated"
        ],
        correctAnswer: "'unknown' requires type checking before use, 'any' doesn't",
        explanation: "'any' bypasses type checking entirely. 'unknown' is type-safe - you must narrow the type (with typeof, instanceof, etc.) before using the value. Prefer 'unknown' over 'any'."
      },
      {
        id: "18-2",
        type: "mcq",
        question: "How do you make an interface property optional?",
        options: [
          "optional name: string",
          "name?: string",
          "name: string?",
          "name: string | optional"
        ],
        correctAnswer: "name?: string",
        explanation: "Add a question mark (?) after the property name to make it optional. For example: age?: number means age can be a number or undefined."
      },
      {
        id: "18-3",
        type: "mcq",
        question: "What does type Status = 'pending' | 'active' create?",
        options: [
          "An enum",
          "A union of literal types",
          "A string array",
          "A class"
        ],
        correctAnswer: "A union of literal types",
        explanation: "This creates a union type where Status can only be the exact strings 'pending' or 'active'. This is called a string literal union type and is useful for constraining values."
      },
      {
        id: "18-4",
        type: "descriptive",
        question: "Explain the benefits of TypeScript over plain JavaScript and when you might not need it.",
        keywords: ["type", "error", "compile", "tooling", "autocomplete", "refactor", "documentation", "small project", "prototype"],
        explanation: "TypeScript catches type errors at compile time, enables better IDE support (autocomplete, refactoring), and serves as documentation. You might skip it for small scripts, quick prototypes, or when working with a team unfamiliar with types. The compile step adds some overhead."
      }
    ]
  },
  {
    id: 19,
    title: "Advanced TypeScript",
    description: "Master generics, utility types, and advanced TypeScript patterns",
    duration: "60 min",
    difficulty: "Intermediate",
    month: 2,
    week: 3,
    category: "TypeScript",
    content: `
      <h2>Advanced TypeScript</h2>
      <p>Advanced TypeScript features enable you to write more flexible, reusable, and type-safe code.</p>

      <h3>Generics</h3>
      <p>Generics allow you to write functions and types that work with any type while maintaining type safety.</p>
      <div class="code-block">
        <pre>// Generic function
function identity&lt;T&gt;(value: T): T {
  return value;
}

identity&lt;string&gt;('hello');  // Returns string
identity&lt;number&gt;(42);       // Returns number
identity('auto');           // Inferred as string

// Generic array function
function firstElement&lt;T&gt;(arr: T[]): T | undefined {
  return arr[0];
}

const first = firstElement([1, 2, 3]);  // number | undefined

// Multiple type parameters
function pair&lt;T, U&gt;(first: T, second: U): [T, U] {
  return [first, second];
}

const p = pair('hello', 42);  // [string, number]

// Generic constraints
interface HasLength {
  length: number;
}

function logLength&lt;T extends HasLength&gt;(item: T): void {
  console.log(item.length);
}

logLength('hello');      // OK: strings have length
logLength([1, 2, 3]);    // OK: arrays have length
// logLength(42);        // Error: number has no length

// Generic with keyof
function getProperty&lt;T, K extends keyof T&gt;(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: 'Alice', age: 30 };
getProperty(user, 'name');  // string
getProperty(user, 'age');   // number
// getProperty(user, 'invalid');  // Error</pre>
      </div>

      <h3>Generic Interfaces and Types</h3>
      <div class="code-block">
        <pre>// Generic interface
interface Box&lt;T&gt; {
  value: T;
  getValue(): T;
}

const stringBox: Box&lt;string&gt; = {
  value: 'hello',
  getValue() { return this.value; }
};

// Generic type alias
type Result&lt;T&gt; = {
  data: T | null;
  error: string | null;
  loading: boolean;
};

const userResult: Result&lt;User&gt; = {
  data: { id: 1, name: 'Alice' },
  error: null,
  loading: false
};

// Generic class
class Stack&lt;T&gt; {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

const numberStack = new Stack&lt;number&gt;();
numberStack.push(1);
numberStack.push(2);
numberStack.pop();  // Returns number</pre>
      </div>

      <h3>Utility Types</h3>
      <div class="code-block">
        <pre>interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial - all properties optional
type PartialUser = Partial&lt;User&gt;;
const update: PartialUser = { name: 'New Name' };

// Required - all properties required
type RequiredUser = Required&lt;User&gt;;

// Pick - select specific properties
type UserCredentials = Pick&lt;User, 'email' | 'name'&gt;;

// Omit - exclude specific properties
type PublicUser = Omit&lt;User, 'email'&gt;;

// Readonly - all properties readonly
type ImmutableUser = Readonly&lt;User&gt;;

// Record - create object type with specific keys
type UserRoles = Record&lt;string, string[]&gt;;
const roles: UserRoles = {
  alice: ['admin', 'user'],
  bob: ['user']
};

// Exclude - remove types from union
type Numbers = 1 | 2 | 3 | 4 | 5;
type BigNumbers = Exclude&lt;Numbers, 1 | 2&gt;;  // 3 | 4 | 5

// Extract - keep only matching types
type SmallNumbers = Extract&lt;Numbers, 1 | 2 | 3&gt;;  // 1 | 2 | 3

// NonNullable - remove null and undefined
type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable&lt;MaybeString&gt;;  // string

// ReturnType - get function return type
function getUser() {
  return { id: 1, name: 'Alice' };
}
type UserFromFn = ReturnType&lt;typeof getUser&gt;;

// Parameters - get function parameter types
type GetUserParams = Parameters&lt;typeof getUser&gt;;  // []</pre>
      </div>

      <h3>Conditional Types</h3>
      <div class="code-block">
        <pre>// Basic conditional type
type IsString&lt;T&gt; = T extends string ? true : false;

type A = IsString&lt;string&gt;;  // true
type B = IsString&lt;number&gt;;  // false

// Practical example
type ArrayElement&lt;T&gt; = T extends (infer U)[] ? U : never;

type StringElement = ArrayElement&lt;string[]&gt;;  // string
type NumberElement = ArrayElement&lt;number[]&gt;;  // number

// Conditional with unions (distributive)
type ToArray&lt;T&gt; = T extends unknown ? T[] : never;
type StringOrNumberArray = ToArray&lt;string | number&gt;;
// string[] | number[]

// Infer in conditional types
type UnwrapPromise&lt;T&gt; = T extends Promise&lt;infer U&gt; ? U : T;

type Awaited = UnwrapPromise&lt;Promise&lt;string&gt;&gt;;  // string
type NotPromise = UnwrapPromise&lt;number&gt;;         // number</pre>
      </div>

      <h3>Mapped Types</h3>
      <div class="code-block">
        <pre>// Create new type by transforming properties
type Getters&lt;T&gt; = {
  [K in keyof T as \`get\${Capitalize&lt;string & K&gt;}\`]: () => T[K];
};

interface Person {
  name: string;
  age: number;
}

type PersonGetters = Getters&lt;Person&gt;;
// { getName: () => string; getAge: () => number; }

// Optional mapped type
type Optional&lt;T&gt; = {
  [K in keyof T]?: T[K];
};

// Readonly mapped type
type ReadonlyType&lt;T&gt; = {
  readonly [K in keyof T]: T[K];
};

// Remove readonly
type Mutable&lt;T&gt; = {
  -readonly [K in keyof T]: T[K];
};

// Filter keys by type
type StringKeys&lt;T&gt; = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

type PersonStringKeys = StringKeys&lt;Person&gt;;  // 'name'</pre>
      </div>

      <h3>Type Guards</h3>
      <div class="code-block">
        <pre>// User-defined type guard
interface Dog { bark(): void; breed: string; }
interface Cat { meow(): void; color: string; }

function isDog(animal: Dog | Cat): animal is Dog {
  return (animal as Dog).bark !== undefined;
}

function speak(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark();  // TypeScript knows it's Dog
    console.log(animal.breed);
  } else {
    animal.meow();  // TypeScript knows it's Cat
  }
}

// Type guard with classes
class ApiError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}

// Assertion functions
function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('Value must be a string');
  }
}

function process(value: unknown) {
  assertIsString(value);
  // TypeScript knows value is string after this point
  console.log(value.toUpperCase());
}</pre>
      </div>
    `,
    questions: [
      {
        id: "19-1",
        type: "mcq",
        question: "What does <T extends HasLength> mean in a generic function?",
        options: [
          "T must be exactly HasLength",
          "T can be any type that has at least the properties of HasLength",
          "T extends from HasLength class",
          "HasLength must extend T"
        ],
        correctAnswer: "T can be any type that has at least the properties of HasLength",
        explanation: "Generic constraints with 'extends' mean the type must have at least the properties/methods of the constraint. T can have additional properties but must include everything in HasLength."
      },
      {
        id: "19-2",
        type: "mcq",
        question: "What does Partial<User> do?",
        options: [
          "Makes all User properties required",
          "Makes all User properties optional",
          "Removes half of User properties",
          "Creates a partial copy of User"
        ],
        correctAnswer: "Makes all User properties optional",
        explanation: "Partial<T> is a utility type that makes all properties of T optional. It's useful for update functions where you only need to provide the fields being updated."
      },
      {
        id: "19-3",
        type: "mcq",
        question: "What is a type guard function?",
        options: [
          "A function that throws errors for wrong types",
          "A function that returns a type predicate to narrow types",
          "A function that converts between types",
          "A function that validates API responses"
        ],
        correctAnswer: "A function that returns a type predicate to narrow types",
        explanation: "Type guards are functions with a return type like 'value is Type'. When they return true, TypeScript narrows the type in the conditional branch. This helps work with union types safely."
      },
      {
        id: "19-4",
        type: "descriptive",
        question: "Explain when and why you would use generics instead of 'any' type.",
        keywords: ["generic", "type safety", "reusable", "any", "inference", "constraint", "relationship", "preserve type"],
        explanation: "Generics preserve type information across function calls - if you pass a string[], you get string back. 'any' loses all type information. Generics enable type-safe reusable code, enforce relationships between parameters and return types, and provide better tooling support."
      }
    ]
  },
  {
    id: 20,
    title: "Fetch API & HTTP Methods",
    description: "Learn to make HTTP requests with the Fetch API",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 2,
    week: 4,
    category: "APIs",
    content: `
      <h2>Fetch API & HTTP Methods</h2>
      <p>The Fetch API provides a modern way to make HTTP requests. Understanding HTTP methods is essential for working with APIs.</p>

      <h3>HTTP Methods Overview</h3>
      <ul>
        <li><strong>GET</strong> - Retrieve data</li>
        <li><strong>POST</strong> - Create new data</li>
        <li><strong>PUT</strong> - Replace existing data</li>
        <li><strong>PATCH</strong> - Partially update data</li>
        <li><strong>DELETE</strong> - Remove data</li>
      </ul>

      <h3>Basic Fetch (GET)</h3>
      <div class="code-block">
        <pre>// Simple GET request
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// With async/await
async function getUsers() {
  try {
    const response = await fetch('https://api.example.com/users');

    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// With query parameters
const params = new URLSearchParams({
  page: '1',
  limit: '10',
  sort: 'name'
});

fetch(\`https://api.example.com/users?\${params}\`);</pre>
      </div>

      <h3>POST Request</h3>
      <div class="code-block">
        <pre>// Creating new data
async function createUser(userData) {
  const response = await fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }

  return response.json();
}

// Usage
const newUser = await createUser({
  name: 'Alice',
  email: 'alice@example.com'
});

// Form data (file uploads)
async function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('description', 'My file');

  const response = await fetch('https://api.example.com/upload', {
    method: 'POST',
    body: formData  // No Content-Type header needed!
  });

  return response.json();
}</pre>
      </div>

      <h3>PUT and PATCH Requests</h3>
      <div class="code-block">
        <pre>// PUT - Replace entire resource
async function replaceUser(id, userData) {
  const response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  });

  return response.json();
}

// PATCH - Partial update
async function updateUser(id, updates) {
  const response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates)
  });

  return response.json();
}

// Usage
await updateUser(1, { name: 'New Name' });  // Only updates name</pre>
      </div>

      <h3>DELETE Request</h3>
      <div class="code-block">
        <pre>async function deleteUser(id) {
  const response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: 'DELETE'
  });

  if (!response.ok) {
    throw new Error(\`Failed to delete user: \${response.status}\`);
  }

  // Some APIs return 204 No Content
  if (response.status === 204) {
    return null;
  }

  return response.json();
}</pre>
      </div>

      <h3>Request Headers</h3>
      <div class="code-block">
        <pre>// Common headers
const response = await fetch('https://api.example.com/data', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN_HERE',
    'Accept': 'application/json',
    'X-Custom-Header': 'custom-value'
  }
});

// Using Headers object
const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Authorization', 'Bearer token');

fetch(url, { headers });</pre>
      </div>

      <h3>Response Handling</h3>
      <div class="code-block">
        <pre>const response = await fetch(url);

// Response properties
response.ok;         // true if status 200-299
response.status;     // 200, 404, 500, etc.
response.statusText; // 'OK', 'Not Found', etc.
response.headers;    // Headers object
response.url;        // Final URL (after redirects)

// Reading response body (can only read once!)
const json = await response.json();    // Parse as JSON
const text = await response.text();    // Plain text
const blob = await response.blob();    // Binary data
const buffer = await response.arrayBuffer();
const formData = await response.formData();

// Clone to read multiple times
const clone = response.clone();
const json = await response.json();
const text = await clone.text();

// Check headers
response.headers.get('Content-Type');
response.headers.has('Authorization');</pre>
      </div>

      <h3>Error Handling</h3>
      <div class="code-block">
        <pre>// Fetch only rejects on network errors, not HTTP errors!
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);

    // Check for HTTP errors
    if (!response.ok) {
      // Try to get error message from response
      let errorMessage;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || response.statusText;
      } catch {
        errorMessage = response.statusText;
      }

      throw new Error(\`HTTP \${response.status}: \${errorMessage}\`);
    }

    return await response.json();
  } catch (error) {
    if (error.name === 'TypeError') {
      // Network error
      throw new Error('Network error - check your connection');
    }
    throw error;
  }
}

// Abort controller for cancellation
const controller = new AbortController();

fetch(url, { signal: controller.signal })
  .then(response => response.json())
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Request cancelled');
    }
  });

// Cancel after 5 seconds
setTimeout(() => controller.abort(), 5000);</pre>
      </div>

      <h3>Reusable API Client</h3>
      <div class="code-block">
        <pre>// Create a reusable API client
const apiClient = {
  baseURL: 'https://api.example.com',
  token: null,

  async request(endpoint, options = {}) {
    const url = \`\${this.baseURL}\${endpoint}\`;

    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { Authorization: \`Bearer \${this.token}\` }),
        ...options.headers,
      },
    };

    if (options.body && typeof options.body === 'object') {
      config.body = JSON.stringify(options.body);
    }

    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}\`);
    }

    return response.json();
  },

  get(endpoint) {
    return this.request(endpoint);
  },

  post(endpoint, data) {
    return this.request(endpoint, { method: 'POST', body: data });
  },

  put(endpoint, data) {
    return this.request(endpoint, { method: 'PUT', body: data });
  },

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
};

// Usage
apiClient.token = 'your-auth-token';
const users = await apiClient.get('/users');
const newUser = await apiClient.post('/users', { name: 'Alice' });</pre>
      </div>
    `,
    questions: [
      {
        id: "20-1",
        type: "mcq",
        question: "When does a fetch() promise reject?",
        options: [
          "On any HTTP error (4xx, 5xx)",
          "Only on 500 errors",
          "Only on network errors (not HTTP errors)",
          "When the response is not JSON"
        ],
        correctAnswer: "Only on network errors (not HTTP errors)",
        explanation: "Fetch only rejects on network failures, not HTTP errors. A 404 or 500 response still resolves successfully - you must check response.ok or response.status to detect HTTP errors."
      },
      {
        id: "20-2",
        type: "mcq",
        question: "What's the difference between PUT and PATCH?",
        options: [
          "PUT is faster",
          "PUT replaces the entire resource, PATCH partially updates it",
          "PATCH is for creating, PUT is for updating",
          "There is no difference"
        ],
        correctAnswer: "PUT replaces the entire resource, PATCH partially updates it",
        explanation: "PUT replaces the entire resource - you must send all fields. PATCH allows partial updates - you only send the fields you want to change. Use PATCH for most updates."
      },
      {
        id: "20-3",
        type: "mcq",
        question: "Why shouldn't you set Content-Type when uploading FormData?",
        options: [
          "It's not supported",
          "The browser sets it automatically with the correct boundary",
          "FormData doesn't need headers",
          "It causes security issues"
        ],
        correctAnswer: "The browser sets it automatically with the correct boundary",
        explanation: "When sending FormData, the browser automatically sets the Content-Type to 'multipart/form-data' with the correct boundary string. Setting it manually would break the request."
      },
      {
        id: "20-4",
        type: "descriptive",
        question: "Explain how to handle different types of errors when using fetch (network vs HTTP errors).",
        keywords: ["network", "HTTP", "ok", "status", "reject", "catch", "TypeError", "response", "error handling"],
        explanation: "Fetch only rejects on network errors (TypeError). Check response.ok or status for HTTP errors. In catch, check error.name === 'TypeError' for network issues. Parse error response body for API error messages. Consider creating wrapper functions that throw on HTTP errors."
      }
    ]
  },
  {
    id: 21,
    title: "Working with JSON & REST APIs",
    description: "Master JSON data format and RESTful API design principles",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 2,
    week: 4,
    category: "APIs",
    content: `
      <h2>Working with JSON & REST APIs</h2>
      <p>JSON is the standard data format for web APIs. REST is an architectural style for designing networked applications.</p>

      <h3>JSON Basics</h3>
      <div class="code-block">
        <pre>// JSON (JavaScript Object Notation)
// Valid JSON uses double quotes for strings
{
  "name": "Alice",
  "age": 30,
  "isActive": true,
  "email": null,
  "hobbies": ["reading", "coding"],
  "address": {
    "city": "NYC",
    "zip": "10001"
  }
}

// JSON does NOT support:
// - Functions
// - undefined
// - Comments
// - Trailing commas
// - Single quotes</pre>
      </div>

      <h3>JSON Methods</h3>
      <div class="code-block">
        <pre>// Parse JSON string to object
const jsonString = '{"name": "Alice", "age": 30}';
const obj = JSON.parse(jsonString);
console.log(obj.name);  // 'Alice'

// Convert object to JSON string
const user = { name: 'Bob', age: 25 };
const json = JSON.stringify(user);
// '{"name":"Bob","age":25}'

// Pretty print
const pretty = JSON.stringify(user, null, 2);
/*
{
  "name": "Bob",
  "age": 25
}
*/

// Replacer function (transform during stringify)
const withReplacer = JSON.stringify(user, (key, value) => {
  if (key === 'age') return undefined;  // Exclude age
  return value;
});
// '{"name":"Bob"}'

// Replacer array (whitelist properties)
JSON.stringify(user, ['name']);  // '{"name":"Bob"}'

// Reviver function (transform during parse)
const dateString = '{"date": "2024-01-15T10:30:00Z"}';
const withDate = JSON.parse(dateString, (key, value) => {
  if (key === 'date') return new Date(value);
  return value;
});
// withDate.date is a Date object</pre>
      </div>

      <h3>Deep Clone with JSON</h3>
      <div class="code-block">
        <pre>// Quick deep clone (with limitations)
const original = {
  name: 'Alice',
  nested: { city: 'NYC' }
};

const clone = JSON.parse(JSON.stringify(original));

// Limitations:
// - Loses functions, undefined, symbols
// - Loses Date objects (become strings)
// - Doesn't handle circular references

// Better: structuredClone (modern browsers)
const betterClone = structuredClone(original);</pre>
      </div>

      <h3>REST API Principles</h3>
      <p>REST (Representational State Transfer) uses standard HTTP methods with resource-based URLs.</p>
      <div class="code-block">
        <pre>// RESTful URL patterns
GET    /users          - List all users
GET    /users/123      - Get user 123
POST   /users          - Create new user
PUT    /users/123      - Replace user 123
PATCH  /users/123      - Update user 123
DELETE /users/123      - Delete user 123

// Nested resources
GET    /users/123/posts     - Get posts by user 123
POST   /users/123/posts     - Create post for user 123
GET    /users/123/posts/456 - Get specific post

// Query parameters for filtering/pagination
GET /users?role=admin&status=active
GET /users?page=2&limit=10&sort=name
GET /posts?author=123&published=true</pre>
      </div>

      <h3>Working with REST APIs</h3>
      <div class="code-block">
        <pre>// TypeScript interfaces for API responses
interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiResponse&lt;T&gt; {
  data: T;
  meta?: {
    total: number;
    page: number;
    limit: number;
  };
}

// Typed API client
async function fetchUsers(): Promise&lt;User[]&gt; {
  const response = await fetch('/api/users');
  const result: ApiResponse&lt;User[]&gt; = await response.json();
  return result.data;
}

async function fetchUser(id: number): Promise&lt;User&gt; {
  const response = await fetch(\`/api/users/\${id}\`);
  const result: ApiResponse&lt;User&gt; = await response.json();
  return result.data;
}

async function createUser(data: Omit&lt;User, 'id'&gt;): Promise&lt;User&gt; {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const result: ApiResponse&lt;User&gt; = await response.json();
  return result.data;
}</pre>
      </div>

      <h3>Handling Pagination</h3>
      <div class="code-block">
        <pre>interface PaginatedResponse&lt;T&gt; {
  data: T[];
  pagination: {
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
    hasMore: boolean;
  };
}

async function fetchPaginatedUsers(page = 1, limit = 10) {
  const response = await fetch(
    \`/api/users?page=\${page}&limit=\${limit}\`
  );
  return response.json() as Promise&lt;PaginatedResponse&lt;User&gt;&gt;;
}

// Fetch all pages
async function fetchAllUsers(): Promise&lt;User[]&gt; {
  const allUsers: User[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const result = await fetchPaginatedUsers(page);
    allUsers.push(...result.data);
    hasMore = result.pagination.hasMore;
    page++;
  }

  return allUsers;
}</pre>
      </div>

      <h3>Error Response Handling</h3>
      <div class="code-block">
        <pre>// Standard error response format
interface ApiError {
  error: {
    code: string;
    message: string;
    details?: Record&lt;string, string[]&gt;;  // Field errors
  };
}

// Example error response
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request data",
    "details": {
      "email": ["Invalid email format"],
      "name": ["Name is required", "Name must be at least 2 characters"]
    }
  }
}

// Handle errors gracefully
async function createUserWithValidation(data: Partial&lt;User&gt;) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const error: ApiError = await response.json();

    if (error.error.code === 'VALIDATION_ERROR') {
      // Handle validation errors
      return { success: false, errors: error.error.details };
    }

    throw new Error(error.error.message);
  }

  const result = await response.json();
  return { success: true, data: result.data };
}</pre>
      </div>

      <h3>API Best Practices</h3>
      <div class="code-block">
        <pre>// 1. Use consistent error handling
class ApiClient {
  private async handleResponse&lt;T&gt;(response: Response): Promise&lt;T&gt; {
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new ApiError(response.status, error.message || 'Request failed');
    }
    return response.json();
  }
}

// 2. Add request/response interceptors
class ApiClient {
  private requestInterceptors: Function[] = [];
  private responseInterceptors: Function[] = [];

  addRequestInterceptor(fn: Function) {
    this.requestInterceptors.push(fn);
  }

  async request(url: string, options: RequestInit) {
    // Apply request interceptors
    let config = { url, ...options };
    for (const interceptor of this.requestInterceptors) {
      config = await interceptor(config);
    }
    // Make request...
  }
}

// 3. Cache responses when appropriate
const cache = new Map&lt;string, { data: any; timestamp: number }&gt;();
const CACHE_TTL = 5 * 60 * 1000;  // 5 minutes

async function fetchWithCache&lt;T&gt;(url: string): Promise&lt;T&gt; {
  const cached = cache.get(url);

  if (cached && Date.now() - cached.timestamp &lt; CACHE_TTL) {
    return cached.data;
  }

  const response = await fetch(url);
  const data = await response.json();

  cache.set(url, { data, timestamp: Date.now() });
  return data;
}

// 4. Rate limiting
const rateLimiter = {
  requests: 0,
  resetTime: Date.now(),
  limit: 100,
  window: 60000,  // 1 minute

  async throttle() {
    if (Date.now() > this.resetTime + this.window) {
      this.requests = 0;
      this.resetTime = Date.now();
    }

    if (this.requests >= this.limit) {
      const waitTime = this.resetTime + this.window - Date.now();
      await new Promise(r => setTimeout(r, waitTime));
    }

    this.requests++;
  }
};</pre>
      </div>
    `,
    questions: [
      {
        id: "21-1",
        type: "mcq",
        question: "What happens if you try to JSON.stringify an object with a function property?",
        options: [
          "It throws an error",
          "The function is converted to a string",
          "The function property is omitted",
          "The function is converted to null"
        ],
        correctAnswer: "The function property is omitted",
        explanation: "JSON.stringify silently omits functions, undefined values, and symbols. Only JSON-compatible values (strings, numbers, booleans, null, arrays, objects) are included in the output."
      },
      {
        id: "21-2",
        type: "mcq",
        question: "In REST, what HTTP method should be used to partially update a resource?",
        options: ["POST", "PUT", "PATCH", "UPDATE"],
        correctAnswer: "PATCH",
        explanation: "PATCH is used for partial updates - you only send the fields you want to change. PUT replaces the entire resource and requires sending all fields."
      },
      {
        id: "21-3",
        type: "mcq",
        question: "What is the purpose of the 'reviver' parameter in JSON.parse?",
        options: [
          "To validate the JSON syntax",
          "To transform values during parsing",
          "To handle errors",
          "To pretty-print the output"
        ],
        correctAnswer: "To transform values during parsing",
        explanation: "The reviver is a function called for each key-value pair during parsing. It lets you transform values, like converting date strings back to Date objects."
      },
      {
        id: "21-4",
        type: "descriptive",
        question: "Explain RESTful URL design principles and provide examples for a blog API with posts and comments.",
        keywords: ["REST", "resource", "URL", "HTTP method", "GET", "POST", "PUT", "DELETE", "nested", "collection", "endpoint"],
        explanation: "REST uses nouns for resources (not verbs) and HTTP methods for actions. For a blog: GET /posts (list), GET /posts/1 (single), POST /posts (create), PUT /posts/1 (replace), PATCH /posts/1 (update), DELETE /posts/1 (delete). Comments: GET /posts/1/comments, POST /posts/1/comments."
      }
    ]
  }
];

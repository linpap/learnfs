import { Lesson } from '@/types/lesson';

export const month3Lessons: Lesson[] = [
  {
    id: 39,
    title: "Introduction to React",
    description: "Learn what React is, why it's popular, and how to create your first component",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 3,
    week: 1,
    category: "React Basics",
    content: `
      <h2>Welcome to React</h2>
      <p>React is a JavaScript library for building user interfaces, created by Facebook. It's the most popular frontend library, used by companies like Netflix, Airbnb, and Instagram.</p>

      <h3>Why React?</h3>
      <ul>
        <li><strong>Component-Based:</strong> Build encapsulated components that manage their own state</li>
        <li><strong>Declarative:</strong> Describe what your UI should look like, React handles the DOM updates</li>
        <li><strong>Learn Once, Write Anywhere:</strong> Use React for web, mobile (React Native), and desktop</li>
        <li><strong>Large Ecosystem:</strong> Huge community, libraries, and job opportunities</li>
      </ul>

      <h3>How React Works</h3>
      <p>React uses a <strong>Virtual DOM</strong> - a lightweight copy of the actual DOM. When state changes:</p>
      <ol>
        <li>React creates a new Virtual DOM tree</li>
        <li>Compares it with the previous one (diffing)</li>
        <li>Updates only the changed parts in the real DOM (reconciliation)</li>
      </ol>

      <h3>Setting Up a React Project</h3>
      <div class="code-block">
        <pre># Using Vite (recommended for learning)
npm create vite@latest my-react-app -- --template react

# Using Create React App
npx create-react-app my-react-app

# Navigate and start
cd my-react-app
npm install
npm run dev</pre>
      </div>

      <h3>Your First Component</h3>
      <p>Components are the building blocks of React applications. They're JavaScript functions that return JSX.</p>
      <div class="code-block">
        <pre>// Greeting.jsx
function Greeting() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Hello, React!&lt;/h1&gt;
      &lt;p&gt;Welcome to your first component.&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default Greeting;</pre>
      </div>

      <h3>JSX - JavaScript XML</h3>
      <p>JSX lets you write HTML-like syntax in JavaScript. It's not HTML - it's syntactic sugar for React.createElement().</p>
      <div class="code-block">
        <pre>// JSX
const element = &lt;h1 className="title"&gt;Hello&lt;/h1&gt;;

// Compiles to:
const element = React.createElement('h1', { className: 'title' }, 'Hello');</pre>
      </div>

      <h3>JSX Rules</h3>
      <div class="code-block">
        <pre>function MyComponent() {
  const name = "Alice";
  const isLoggedIn = true;

  return (
    // 1. Must return a single parent element (use Fragment if needed)
    &lt;&gt;
      {/* 2. Use className instead of class */}
      &lt;div className="container"&gt;

        {/* 3. Use curly braces for JavaScript expressions */}
        &lt;h1&gt;Hello, {name}!&lt;/h1&gt;

        {/* 4. Inline styles use objects with camelCase */}
        &lt;p style={{ color: 'blue', fontSize: '16px' }}&gt;
          Styled text
        &lt;/p&gt;

        {/* 5. Self-closing tags must have slash */}
        &lt;img src="photo.jpg" alt="Photo" /&gt;
        &lt;input type="text" /&gt;

        {/* 6. Conditional rendering */}
        {isLoggedIn && &lt;span&gt;Welcome back!&lt;/span&gt;}
      &lt;/div&gt;
    &lt;/&gt;
  );
}</pre>
      </div>

      <h3>Props - Passing Data to Components</h3>
      <div class="code-block">
        <pre>// Parent component
function App() {
  return (
    &lt;div&gt;
      &lt;UserCard name="Alice" age={25} isAdmin={true} /&gt;
      &lt;UserCard name="Bob" age={30} isAdmin={false} /&gt;
    &lt;/div&gt;
  );
}

// Child component receiving props
function UserCard({ name, age, isAdmin }) {
  return (
    &lt;div className="card"&gt;
      &lt;h2&gt;{name}&lt;/h2&gt;
      &lt;p&gt;Age: {age}&lt;/p&gt;
      {isAdmin && &lt;span className="badge"&gt;Admin&lt;/span&gt;}
    &lt;/div&gt;
  );
}

// With default props
function Button({ text = "Click me", variant = "primary" }) {
  return &lt;button className={variant}&gt;{text}&lt;/button&gt;;
}</pre>
      </div>

      <h3>Project Structure</h3>
      <div class="code-block">
        <pre>my-react-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Button.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── vite.config.js</pre>
      </div>
    `,
    questions: [
      {
        id: "39-1",
        type: "mcq",
        question: "What is the Virtual DOM in React?",
        options: [
          "A browser feature for faster rendering",
          "A lightweight copy of the real DOM that React uses for efficient updates",
          "A special HTML element",
          "A database for storing component state"
        ],
        correctAnswer: "A lightweight copy of the real DOM that React uses for efficient updates",
        explanation: "The Virtual DOM is a JavaScript representation of the real DOM. React compares changes in the Virtual DOM and only updates the necessary parts of the real DOM, making updates more efficient."
      },
      {
        id: "39-2",
        type: "mcq",
        question: "Why do we use className instead of class in JSX?",
        options: [
          "It's faster",
          "class is a reserved keyword in JavaScript",
          "React doesn't support CSS classes",
          "It's optional, both work the same"
        ],
        correctAnswer: "class is a reserved keyword in JavaScript",
        explanation: "Since JSX is JavaScript, and 'class' is a reserved keyword for defining classes in JavaScript, React uses 'className' for CSS classes to avoid conflicts."
      },
      {
        id: "39-3",
        type: "mcq",
        question: "What are props in React?",
        options: [
          "Internal component variables",
          "CSS properties",
          "Data passed from parent to child components",
          "Browser properties"
        ],
        correctAnswer: "Data passed from parent to child components",
        explanation: "Props (short for properties) are read-only data passed from a parent component to a child component. They allow components to be dynamic and reusable."
      },
      {
        id: "39-4",
        type: "descriptive",
        question: "Explain what JSX is and list three rules you must follow when writing JSX.",
        keywords: ["JavaScript", "XML", "HTML", "className", "curly braces", "single parent", "self-closing", "expressions", "camelCase"],
        explanation: "JSX is a syntax extension that lets you write HTML-like code in JavaScript. Rules include: 1) Return a single parent element, 2) Use className instead of class, 3) Use curly braces for JS expressions, 4) Self-closing tags need a slash, 5) Use camelCase for attributes like onClick."
      }
    ]
  },
  {
    id: 40,
    title: "State Management with useState",
    description: "Learn how to add interactivity to components with React's useState hook",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 3,
    week: 1,
    category: "Hooks",
    content: `
      <h2>Understanding State in React</h2>
      <p>State is data that changes over time in your component. When state changes, React re-renders the component to reflect the new data.</p>

      <h3>Props vs State</h3>
      <ul>
        <li><strong>Props:</strong> Passed from parent, read-only, component can't change them</li>
        <li><strong>State:</strong> Managed within component, can be changed, triggers re-render</li>
      </ul>

      <h3>The useState Hook</h3>
      <div class="code-block">
        <pre>import { useState } from 'react';

function Counter() {
  // useState returns [currentValue, setterFunction]
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Increment
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>useState with Different Types</h3>
      <div class="code-block">
        <pre>// String
const [name, setName] = useState('');

// Number
const [count, setCount] = useState(0);

// Boolean
const [isOpen, setIsOpen] = useState(false);

// Array
const [items, setItems] = useState([]);

// Object
const [user, setUser] = useState({ name: '', email: '' });

// Null (for data that loads later)
const [data, setData] = useState(null);</pre>
      </div>

      <h3>Updating State Correctly</h3>
      <div class="code-block">
        <pre>function Examples() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['apple', 'banana']);
  const [user, setUser] = useState({ name: 'Alice', age: 25 });

  // WRONG: Directly mutating state
  // items.push('orange'); // Don't do this!
  // user.name = 'Bob'; // Don't do this!

  // CORRECT: Create new values
  const addItem = () => {
    setItems([...items, 'orange']); // Spread into new array
  };

  const updateUser = () => {
    setUser({ ...user, name: 'Bob' }); // Spread into new object
  };

  // Using functional update (when new state depends on previous)
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Multiple updates need functional form
  const incrementTwice = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1); // Both will apply
  };

  return (/* ... */);
}</pre>
      </div>

      <h3>Working with Arrays</h3>
      <div class="code-block">
        <pre>function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Build a project', done: false }
  ]);

  // Add item
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  // Remove item
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Update item
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    &lt;ul&gt;
      {todos.map(todo => (
        &lt;li key={todo.id}&gt;
          &lt;span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}&gt;
            {todo.text}
          &lt;/span&gt;
          &lt;button onClick={() => toggleTodo(todo.id)}&gt;Toggle&lt;/button&gt;
          &lt;button onClick={() => removeTodo(todo.id)}&gt;Delete&lt;/button&gt;
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</pre>
      </div>

      <h3>Working with Objects</h3>
      <div class="code-block">
        <pre>function ProfileForm() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    address: {
      city: '',
      country: ''
    }
  });

  // Update top-level field
  const updateName = (e) => {
    setProfile({ ...profile, name: e.target.value });
  };

  // Update nested field
  const updateCity = (e) => {
    setProfile({
      ...profile,
      address: {
        ...profile.address,
        city: e.target.value
      }
    });
  };

  // Generic handler for multiple fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  return (
    &lt;form&gt;
      &lt;input
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Name"
      /&gt;
      &lt;input
        name="email"
        value={profile.email}
        onChange={handleChange}
        placeholder="Email"
      /&gt;
    &lt;/form&gt;
  );
}</pre>
      </div>

      <h3>Lazy Initial State</h3>
      <div class="code-block">
        <pre>// For expensive initial computations
function ExpensiveComponent() {
  // This function only runs once on mount
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('data');
    return savedData ? JSON.parse(savedData) : [];
  });

  return (/* ... */);
}</pre>
      </div>
    `,
    questions: [
      {
        id: "40-1",
        type: "mcq",
        question: "Why shouldn't you mutate state directly in React?",
        options: [
          "It's slower",
          "React won't detect the change and won't re-render",
          "It causes memory leaks",
          "JavaScript doesn't allow it"
        ],
        correctAnswer: "React won't detect the change and won't re-render",
        explanation: "React uses reference comparison to detect state changes. If you mutate the existing object/array, the reference stays the same, so React thinks nothing changed and doesn't re-render."
      },
      {
        id: "40-2",
        type: "mcq",
        question: "When should you use the functional form of setState?",
        options: [
          "Always",
          "When the new state depends on the previous state",
          "Only with objects",
          "Only with arrays"
        ],
        correctAnswer: "When the new state depends on the previous state",
        explanation: "Use setCount(prev => prev + 1) instead of setCount(count + 1) when the new value depends on the previous one. This ensures you're working with the latest state, especially important when multiple updates happen."
      },
      {
        id: "40-3",
        type: "mcq",
        question: "How do you add an item to an array in state?",
        options: [
          "items.push(newItem)",
          "setItems(items.push(newItem))",
          "setItems([...items, newItem])",
          "setItems(items.add(newItem))"
        ],
        correctAnswer: "setItems([...items, newItem])",
        explanation: "Use the spread operator to create a new array with the existing items plus the new one. This creates a new reference, allowing React to detect the change and re-render."
      },
      {
        id: "40-4",
        type: "descriptive",
        question: "Explain how to update a specific property in an object stored in state.",
        keywords: ["spread", "operator", "copy", "immutable", "setState", "previous", "object", "property"],
        explanation: "To update an object in state, spread the existing object into a new one and override the specific property: setUser({ ...user, name: 'New Name' }). This creates a new object reference while preserving other properties."
      }
    ]
  },
  {
    id: 41,
    title: "useEffect & Side Effects",
    description: "Master data fetching, subscriptions, and cleanup with useEffect",
    duration: "60 min",
    difficulty: "Intermediate",
    month: 3,
    week: 1,
    category: "Hooks",
    content: `
      <h2>Understanding Side Effects</h2>
      <p>Side effects are operations that affect something outside the component's render: API calls, subscriptions, timers, DOM manipulation, and logging.</p>

      <h3>The useEffect Hook</h3>
      <div class="code-block">
        <pre>import { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This code runs after the component renders
    console.log('Component rendered!');
  });

  return &lt;div&gt;{data}&lt;/div&gt;;
}</pre>
      </div>

      <h3>Dependency Array</h3>
      <div class="code-block">
        <pre>// Runs after EVERY render
useEffect(() => {
  console.log('Runs every time');
});

// Runs only on MOUNT (once)
useEffect(() => {
  console.log('Runs once on mount');
}, []);

// Runs on mount AND when 'count' changes
useEffect(() => {
  console.log('Count changed:', count);
}, [count]);

// Runs when ANY dependency changes
useEffect(() => {
  console.log('User or items changed');
}, [user, items]);</pre>
      </div>

      <h3>Fetching Data</h3>
      <div class="code-block">
        <pre>function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(\`/api/users/\${userId}\`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]); // Re-fetch when userId changes

  if (loading) return &lt;div&gt;Loading...&lt;/div&gt;;
  if (error) return &lt;div&gt;Error: {error}&lt;/div&gt;;
  if (!user) return null;

  return &lt;div&gt;{user.name}&lt;/div&gt;;
}</pre>
      </div>

      <h3>Cleanup Function</h3>
      <p>The cleanup function runs before the effect runs again and when the component unmounts.</p>
      <div class="code-block">
        <pre>// Timer example
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup: clear interval when component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return &lt;div&gt;Seconds: {seconds}&lt;/div&gt;;
}

// Event listener example
function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup: remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return &lt;div&gt;{size.width} x {size.height}&lt;/div&gt;;
}</pre>
      </div>

      <h3>Avoiding Race Conditions</h3>
      <div class="code-block">
        <pre>function SearchResults({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function search() {
      const response = await fetch(\`/api/search?q=\${query}\`);
      const data = await response.json();

      // Only update state if this effect hasn't been cancelled
      if (!cancelled) {
        setResults(data);
      }
    }

    search();

    // Cleanup: mark this effect as cancelled
    return () => {
      cancelled = true;
    };
  }, [query]);

  return (/* ... */);
}

// Using AbortController (modern approach)
function SearchResults({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function search() {
      try {
        const response = await fetch(\`/api/search?q=\${query}\`, {
          signal: controller.signal
        });
        const data = await response.json();
        setResults(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error(err);
        }
      }
    }

    search();

    return () => {
      controller.abort();
    };
  }, [query]);

  return (/* ... */);
}</pre>
      </div>

      <h3>Common useEffect Patterns</h3>
      <div class="code-block">
        <pre>// Sync with localStorage
useEffect(() => {
  localStorage.setItem('theme', theme);
}, [theme]);

// Document title
useEffect(() => {
  document.title = \`(\${unreadCount}) My App\`;
}, [unreadCount]);

// Focus input on mount
useEffect(() => {
  inputRef.current?.focus();
}, []);

// Debounced effect
useEffect(() => {
  const timeout = setTimeout(() => {
    // Do something after delay
    search(query);
  }, 500);

  return () => clearTimeout(timeout);
}, [query]);</pre>
      </div>
    `,
    questions: [
      {
        id: "41-1",
        type: "mcq",
        question: "What does an empty dependency array [] mean in useEffect?",
        options: [
          "The effect never runs",
          "The effect runs on every render",
          "The effect runs only once on mount",
          "The effect runs only on unmount"
        ],
        correctAnswer: "The effect runs only once on mount",
        explanation: "An empty dependency array tells React the effect doesn't depend on any values, so it only needs to run once when the component mounts. It won't run again on re-renders."
      },
      {
        id: "41-2",
        type: "mcq",
        question: "When does the cleanup function in useEffect run?",
        options: [
          "Only when the component mounts",
          "Before the effect runs again and when the component unmounts",
          "Only when the component unmounts",
          "After every render"
        ],
        correctAnswer: "Before the effect runs again and when the component unmounts",
        explanation: "The cleanup function runs before the effect runs again (to clean up the previous effect) and when the component unmounts. This prevents memory leaks and stale subscriptions."
      },
      {
        id: "41-3",
        type: "mcq",
        question: "Why might you use AbortController with useEffect?",
        options: [
          "To make requests faster",
          "To cancel pending fetch requests when the component unmounts",
          "To handle errors",
          "To cache responses"
        ],
        correctAnswer: "To cancel pending fetch requests when the component unmounts",
        explanation: "AbortController allows you to cancel fetch requests. This is important when a component unmounts before the request completes, preventing attempts to update state on an unmounted component."
      },
      {
        id: "41-4",
        type: "descriptive",
        question: "Explain why cleanup is important in useEffect and give an example of when you'd need it.",
        keywords: ["cleanup", "memory leak", "unmount", "subscription", "timer", "event listener", "interval", "return"],
        explanation: "Cleanup prevents memory leaks by removing subscriptions, timers, and event listeners when a component unmounts. For example, if you set up setInterval, you must clear it in the cleanup function, otherwise it continues running after the component is gone."
      }
    ]
  },
  {
    id: 42,
    title: "Lists, Keys & Conditional Rendering",
    description: "Render dynamic lists and conditionally show/hide content in React",
    duration: "45 min",
    difficulty: "Intermediate",
    month: 3,
    week: 2,
    category: "React Basics",
    content: `
      <h2>Rendering Lists</h2>
      <p>In React, you use JavaScript's map() method to transform arrays into lists of elements.</p>

      <h3>Basic List Rendering</h3>
      <div class="code-block">
        <pre>function FruitList() {
  const fruits = ['Apple', 'Banana', 'Orange'];

  return (
    &lt;ul&gt;
      {fruits.map((fruit, index) => (
        &lt;li key={index}&gt;{fruit}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</pre>
      </div>

      <h3>Why Keys Matter</h3>
      <p>Keys help React identify which items have changed, been added, or removed. They should be stable, predictable, and unique among siblings.</p>
      <div class="code-block">
        <pre>// BAD: Using index as key (can cause issues with reordering)
{items.map((item, index) => (
  &lt;Item key={index} data={item} /&gt;
))}

// GOOD: Using unique ID as key
{items.map(item => (
  &lt;Item key={item.id} data={item} /&gt;
))}

// GOOD: Using a unique string
{users.map(user => (
  &lt;UserCard key={user.email} user={user} /&gt;
))}</pre>
      </div>

      <h3>Rendering Objects</h3>
      <div class="code-block">
        <pre>function UserList() {
  const users = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'User' }
  ];

  return (
    &lt;div className="user-list"&gt;
      {users.map(user => (
        &lt;div key={user.id} className="user-card"&gt;
          &lt;h3&gt;{user.name}&lt;/h3&gt;
          &lt;p&gt;Role: {user.role}&lt;/p&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Conditional Rendering</h3>
      <div class="code-block">
        <pre>function Greeting({ isLoggedIn, user }) {
  // 1. if/else (outside JSX)
  if (isLoggedIn) {
    return &lt;h1&gt;Welcome back, {user.name}!&lt;/h1&gt;;
  }
  return &lt;h1&gt;Please log in.&lt;/h1&gt;;
}

function Dashboard({ user }) {
  return (
    &lt;div&gt;
      {/* 2. Logical AND (&&) - renders if condition is true */}
      {user.isAdmin && &lt;AdminPanel /&gt;}

      {/* 3. Ternary operator - if/else in JSX */}
      {user.isPremium ? (
        &lt;PremiumContent /&gt;
      ) : (
        &lt;FreeContent /&gt;
      )}

      {/* 4. Nullish rendering */}
      {user.bio ?? 'No bio provided'}
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Avoiding Common Pitfalls</h3>
      <div class="code-block">
        <pre>// PITFALL: 0 is rendered with &&
function Notifications({ count }) {
  // BAD: Shows "0" when count is 0
  return &lt;div&gt;{count && &lt;span&gt;{count} notifications&lt;/span&gt;}&lt;/div&gt;;

  // GOOD: Explicitly check for truthy
  return &lt;div&gt;{count > 0 && &lt;span&gt;{count} notifications&lt;/span&gt;}&lt;/div&gt;;
}

// PITFALL: Returning null vs undefined
function MaybeShow({ show }) {
  // GOOD: Return null to render nothing
  if (!show) return null;

  return &lt;div&gt;Content&lt;/div&gt;;
}</pre>
      </div>

      <h3>Rendering Different Components</h3>
      <div class="code-block">
        <pre>function StatusIcon({ status }) {
  const icons = {
    success: &lt;CheckIcon /&gt;,
    error: &lt;ErrorIcon /&gt;,
    loading: &lt;SpinnerIcon /&gt;
  };

  return icons[status] || &lt;DefaultIcon /&gt;;
}

function Feed({ items }) {
  return (
    &lt;div&gt;
      {items.map(item => {
        switch (item.type) {
          case 'post':
            return &lt;PostCard key={item.id} data={item} /&gt;;
          case 'image':
            return &lt;ImageCard key={item.id} data={item} /&gt;;
          case 'video':
            return &lt;VideoCard key={item.id} data={item} /&gt;;
          default:
            return null;
        }
      })}
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Filtering and Transforming</h3>
      <div class="code-block">
        <pre>function FilteredList({ items, filter }) {
  const filteredItems = items
    .filter(item => item.category === filter)
    .sort((a, b) => b.date - a.date);

  if (filteredItems.length === 0) {
    return &lt;p&gt;No items found.&lt;/p&gt;;
  }

  return (
    &lt;ul&gt;
      {filteredItems.map(item => (
        &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</pre>
      </div>
    `,
    questions: [
      {
        id: "42-1",
        type: "mcq",
        question: "Why shouldn't you use array index as a key when items can be reordered?",
        options: [
          "It's slower",
          "It causes React to incorrectly reuse component state",
          "It's not valid syntax",
          "Keys must be strings"
        ],
        correctAnswer: "It causes React to incorrectly reuse component state",
        explanation: "When items are reordered, their indices change but the content doesn't match. React may reuse the wrong component instances, leading to bugs with state and unexpected behavior."
      },
      {
        id: "42-2",
        type: "mcq",
        question: "What happens when you use && with a number that could be 0?",
        options: [
          "It works correctly",
          "It renders 0 instead of nothing",
          "It throws an error",
          "It renders undefined"
        ],
        correctAnswer: "It renders 0 instead of nothing",
        explanation: "In JavaScript, 0 is falsy, so {0 && <Component />} returns 0 (not false). React renders 0 as text. Use {count > 0 && ...} to avoid this."
      },
      {
        id: "42-3",
        type: "mcq",
        question: "What should a component return to render nothing?",
        options: [
          "undefined",
          "false",
          "null",
          "An empty string"
        ],
        correctAnswer: "null",
        explanation: "Return null when a component should render nothing. While false and undefined also work, null is the conventional and explicit way to indicate 'no content'."
      },
      {
        id: "42-4",
        type: "descriptive",
        question: "Explain the importance of keys when rendering lists in React.",
        keywords: ["key", "unique", "identity", "reconciliation", "performance", "reorder", "state", "DOM"],
        explanation: "Keys give elements a stable identity across renders. React uses keys to determine which items changed, were added, or removed. Good keys (unique IDs) help React efficiently update the DOM and maintain correct component state when lists change."
      }
    ]
  },
  {
    id: 43,
    title: "Forms in React",
    description: "Handle form inputs, validation, and submission in React applications",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 3,
    week: 2,
    category: "React Basics",
    content: `
      <h2>Handling Forms in React</h2>
      <p>React offers two approaches to form handling: controlled and uncontrolled components.</p>

      <h3>Controlled Components</h3>
      <p>In controlled components, form data is handled by React state. The input value is always driven by the state.</p>
      <div class="code-block">
        <pre>import { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { name, email });
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      /&gt;
      &lt;input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      /&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}</pre>
      </div>

      <h3>Single State Object for Forms</h3>
      <div class="code-block">
        <pre>function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      /&gt;
      &lt;input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      /&gt;
      &lt;input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      /&gt;
      &lt;button type="submit"&gt;Sign Up&lt;/button&gt;
    &lt;/form&gt;
  );
}</pre>
      </div>

      <h3>Different Input Types</h3>
      <div class="code-block">
        <pre>function AllInputTypes() {
  const [form, setForm] = useState({
    text: '',
    number: 0,
    checkbox: false,
    radio: '',
    select: '',
    textarea: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    &lt;form&gt;
      {/* Text input */}
      &lt;input
        type="text"
        name="text"
        value={form.text}
        onChange={handleChange}
      /&gt;

      {/* Number input */}
      &lt;input
        type="number"
        name="number"
        value={form.number}
        onChange={handleChange}
      /&gt;

      {/* Checkbox */}
      &lt;label&gt;
        &lt;input
          type="checkbox"
          name="checkbox"
          checked={form.checkbox}
          onChange={handleChange}
        /&gt;
        Accept terms
      &lt;/label&gt;

      {/* Radio buttons */}
      &lt;label&gt;
        &lt;input
          type="radio"
          name="radio"
          value="option1"
          checked={form.radio === 'option1'}
          onChange={handleChange}
        /&gt;
        Option 1
      &lt;/label&gt;

      {/* Select dropdown */}
      &lt;select name="select" value={form.select} onChange={handleChange}&gt;
        &lt;option value=""&gt;Choose...&lt;/option&gt;
        &lt;option value="a"&gt;Option A&lt;/option&gt;
        &lt;option value="b"&gt;Option B&lt;/option&gt;
      &lt;/select&gt;

      {/* Textarea */}
      &lt;textarea
        name="textarea"
        value={form.textarea}
        onChange={handleChange}
        rows={4}
      /&gt;
    &lt;/form&gt;
  );
}</pre>
      </div>

      <h3>Form Validation</h3>
      <div class="code-block">
        <pre>function ValidatedForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(validate());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched({ email: true, password: true });

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form is valid!', form);
    }
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;div&gt;
        &lt;input
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
        /&gt;
        {touched.email && errors.email && (
          &lt;span className="error"&gt;{errors.email}&lt;/span&gt;
        )}
      &lt;/div&gt;
      &lt;div&gt;
        &lt;input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Password"
        /&gt;
        {touched.password && errors.password && (
          &lt;span className="error"&gt;{errors.password}&lt;/span&gt;
        )}
      &lt;/div&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}</pre>
      </div>

      <h3>Uncontrolled Components with useRef</h3>
      <div class="code-block">
        <pre>import { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value
    });
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input ref={nameRef} type="text" placeholder="Name" /&gt;
      &lt;input ref={emailRef} type="email" placeholder="Email" /&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}</pre>
      </div>
    `,
    questions: [
      {
        id: "43-1",
        type: "mcq",
        question: "What is a controlled component in React?",
        options: [
          "A component that controls other components",
          "A component where form data is handled by React state",
          "A component with restricted access",
          "A component that can't be modified"
        ],
        correctAnswer: "A component where form data is handled by React state",
        explanation: "In a controlled component, the form input's value is controlled by React state. The input displays the state value and onChange updates the state, giving you full control over the form data."
      },
      {
        id: "43-2",
        type: "mcq",
        question: "Why do we call e.preventDefault() in form submit handlers?",
        options: [
          "To clear the form",
          "To prevent the default browser form submission which reloads the page",
          "To validate the form",
          "To enable submit button"
        ],
        correctAnswer: "To prevent the default browser form submission which reloads the page",
        explanation: "By default, form submission reloads the page. e.preventDefault() stops this behavior, allowing React to handle the submission without a page refresh, which is essential for single-page applications."
      },
      {
        id: "43-3",
        type: "mcq",
        question: "How do you handle checkbox values differently from text inputs?",
        options: [
          "No difference",
          "Use e.target.checked instead of e.target.value",
          "Use a different event",
          "Checkboxes don't work in React"
        ],
        correctAnswer: "Use e.target.checked instead of e.target.value",
        explanation: "Checkboxes use the 'checked' boolean property instead of 'value'. When handling change, check if the input type is 'checkbox' and use e.target.checked for the state value."
      },
      {
        id: "43-4",
        type: "descriptive",
        question: "Explain the difference between controlled and uncontrolled components in React forms.",
        keywords: ["controlled", "uncontrolled", "state", "ref", "value", "DOM", "onChange", "useRef"],
        explanation: "Controlled components store form values in React state, with value and onChange on inputs. Uncontrolled components let the DOM handle form state, accessing values via refs. Controlled components offer more control for validation and dynamic forms."
      }
    ]
  },
  {
    id: 44,
    title: "Component Composition",
    description: "Build flexible, reusable components using composition patterns",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 3,
    week: 2,
    category: "React Basics",
    content: `
      <h2>Component Composition</h2>
      <p>Composition is a pattern where you build complex UIs from smaller, reusable pieces. It's preferred over inheritance in React.</p>

      <h3>Children Prop</h3>
      <div class="code-block">
        <pre>// Card component that accepts any content
function Card({ children }) {
  return (
    &lt;div className="card"&gt;
      {children}
    &lt;/div&gt;
  );
}

// Usage
function App() {
  return (
    &lt;Card&gt;
      &lt;h2&gt;Title&lt;/h2&gt;
      &lt;p&gt;Any content can go here!&lt;/p&gt;
      &lt;button&gt;Click me&lt;/button&gt;
    &lt;/Card&gt;
  );
}</pre>
      </div>

      <h3>Multiple Slots with Props</h3>
      <div class="code-block">
        <pre>function Layout({ header, sidebar, children, footer }) {
  return (
    &lt;div className="layout"&gt;
      &lt;header className="header"&gt;{header}&lt;/header&gt;
      &lt;div className="main-content"&gt;
        &lt;aside className="sidebar"&gt;{sidebar}&lt;/aside&gt;
        &lt;main className="content"&gt;{children}&lt;/main&gt;
      &lt;/div&gt;
      &lt;footer className="footer"&gt;{footer}&lt;/footer&gt;
    &lt;/div&gt;
  );
}

// Usage
function App() {
  return (
    &lt;Layout
      header={&lt;Nav /&gt;}
      sidebar={&lt;Menu /&gt;}
      footer={&lt;Copyright /&gt;}
    &gt;
      &lt;h1&gt;Main Content&lt;/h1&gt;
      &lt;p&gt;This is the main area.&lt;/p&gt;
    &lt;/Layout&gt;
  );
}</pre>
      </div>

      <h3>Specialization Pattern</h3>
      <div class="code-block">
        <pre>// Generic Button
function Button({ variant = 'primary', size = 'medium', children, ...props }) {
  return (
    &lt;button
      className={\`btn btn-\${variant} btn-\${size}\`}
      {...props}
    &gt;
      {children}
    &lt;/button&gt;
  );
}

// Specialized Buttons
function PrimaryButton(props) {
  return &lt;Button variant="primary" {...props} /&gt;;
}

function DangerButton(props) {
  return &lt;Button variant="danger" {...props} /&gt;;
}

function IconButton({ icon, children, ...props }) {
  return (
    &lt;Button {...props}&gt;
      {icon}
      {children && &lt;span&gt;{children}&lt;/span&gt;}
    &lt;/Button&gt;
  );
}</pre>
      </div>

      <h3>Compound Components</h3>
      <div class="code-block">
        <pre>// Compound component pattern for related components
function Tabs({ children, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    &lt;TabsContext.Provider value={{ activeTab, setActiveTab }}&gt;
      &lt;div className="tabs"&gt;{children}&lt;/div&gt;
    &lt;/TabsContext.Provider&gt;
  );
}

function TabList({ children }) {
  return &lt;div className="tab-list"&gt;{children}&lt;/div&gt;;
}

function Tab({ id, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  return (
    &lt;button
      className={\`tab \${activeTab === id ? 'active' : ''}\`}
      onClick={() => setActiveTab(id)}
    &gt;
      {children}
    &lt;/button&gt;
  );
}

function TabPanel({ id, children }) {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== id) return null;
  return &lt;div className="tab-panel"&gt;{children}&lt;/div&gt;;
}

// Attach sub-components
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

// Usage
function App() {
  return (
    &lt;Tabs defaultTab="tab1"&gt;
      &lt;Tabs.List&gt;
        &lt;Tabs.Tab id="tab1"&gt;First&lt;/Tabs.Tab&gt;
        &lt;Tabs.Tab id="tab2"&gt;Second&lt;/Tabs.Tab&gt;
      &lt;/Tabs.List&gt;
      &lt;Tabs.Panel id="tab1"&gt;First panel content&lt;/Tabs.Panel&gt;
      &lt;Tabs.Panel id="tab2"&gt;Second panel content&lt;/Tabs.Panel&gt;
    &lt;/Tabs&gt;
  );
}</pre>
      </div>

      <h3>Render Props Pattern</h3>
      <div class="code-block">
        <pre>// Component that shares logic via render prop
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return render(position);
}

// Usage
function App() {
  return (
    &lt;MouseTracker
      render={({ x, y }) => (
        &lt;div&gt;
          Mouse position: {x}, {y}
        &lt;/div&gt;
      )}
    /&gt;
  );
}

// Alternative: children as a function
function DataFetcher({ url, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return children({ data, loading });
}

// Usage
&lt;DataFetcher url="/api/users"&gt;
  {({ data, loading }) => (
    loading ? &lt;Spinner /&gt; : &lt;UserList users={data} /&gt;
  )}
&lt;/DataFetcher&gt;</pre>
      </div>

      <h3>Higher-Order Components (HOC)</h3>
      <div class="code-block">
        <pre>// HOC that adds loading state
function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return &lt;div&gt;Loading...&lt;/div&gt;;
    }
    return &lt;WrappedComponent {...props} /&gt;;
  };
}

// Usage
const UserListWithLoading = withLoading(UserList);

// In parent
&lt;UserListWithLoading isLoading={loading} users={users} /&gt;</pre>
      </div>
    `,
    questions: [
      {
        id: "44-1",
        type: "mcq",
        question: "What is the children prop in React?",
        options: [
          "A list of child components",
          "Content passed between component's opening and closing tags",
          "Child routes in routing",
          "A reserved keyword for state"
        ],
        correctAnswer: "Content passed between component's opening and closing tags",
        explanation: "The children prop contains whatever content is placed between a component's opening and closing tags. It's a special prop that enables component composition."
      },
      {
        id: "44-2",
        type: "mcq",
        question: "What is the compound components pattern?",
        options: [
          "Combining multiple apps",
          "Related components that work together sharing implicit state",
          "Components with multiple render methods",
          "Components that render other components"
        ],
        correctAnswer: "Related components that work together sharing implicit state",
        explanation: "Compound components are related components (like Tabs, Tab, TabPanel) that share state implicitly through context. They provide a flexible API while keeping components loosely coupled."
      },
      {
        id: "44-3",
        type: "mcq",
        question: "Why is composition preferred over inheritance in React?",
        options: [
          "Composition is faster",
          "React doesn't support inheritance",
          "Composition is more flexible and easier to understand",
          "Inheritance doesn't work with hooks"
        ],
        correctAnswer: "Composition is more flexible and easier to understand",
        explanation: "Composition gives more explicit control over what gets rendered and is easier to reason about. Components can be combined in many ways without tight coupling that inheritance creates."
      },
      {
        id: "44-4",
        type: "descriptive",
        question: "Explain the render props pattern and when you would use it.",
        keywords: ["render", "prop", "function", "children", "share", "logic", "reusable", "state"],
        explanation: "Render props is a pattern where a component receives a function as a prop and calls it to render content. It's used to share stateful logic between components. The function receives data/state and returns JSX. Modern alternative is custom hooks."
      }
    ]
  },
  {
    id: 45,
    title: "useContext & Global State",
    description: "Share state across components without prop drilling using Context API",
    duration: "55 min",
    difficulty: "Intermediate",
    month: 3,
    week: 3,
    category: "State Management",
    content: `
      <h2>The Problem: Prop Drilling</h2>
      <p>Prop drilling is when you pass props through multiple levels of components that don't need them, just to reach a deeply nested component.</p>
      <div class="code-block">
        <pre>// Prop drilling example - theme passed through every level
function App() {
  const [theme, setTheme] = useState('light');
  return &lt;Header theme={theme} setTheme={setTheme} /&gt;;
}

function Header({ theme, setTheme }) {
  return &lt;Nav theme={theme} setTheme={setTheme} /&gt;;
}

function Nav({ theme, setTheme }) {
  return &lt;ThemeToggle theme={theme} setTheme={setTheme} /&gt;;
}

function ThemeToggle({ theme, setTheme }) {
  return &lt;button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}&gt;
    Toggle Theme
  &lt;/button&gt;;
}</pre>
      </div>

      <h3>The Solution: Context API</h3>
      <div class="code-block">
        <pre>import { createContext, useContext, useState } from 'react';

// 1. Create context
const ThemeContext = createContext();

// 2. Create provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    &lt;ThemeContext.Provider value={{ theme, toggleTheme }}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  );
}

// 3. Create custom hook for consuming
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// 4. Wrap app with provider
function App() {
  return (
    &lt;ThemeProvider&gt;
      &lt;Header /&gt;
      &lt;Main /&gt;
    &lt;/ThemeProvider&gt;
  );
}

// 5. Use context anywhere in the tree
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    &lt;button onClick={toggleTheme}&gt;
      Current: {theme}
    &lt;/button&gt;
  );
}</pre>
      </div>

      <h3>Auth Context Example</h3>
      <div class="code-block">
        <pre>// contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    const userData = await response.json();
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    &lt;AuthContext.Provider value={{ user, login, logout, loading }}&gt;
      {children}
    &lt;/AuthContext.Provider&gt;
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

// Usage in components
function Profile() {
  const { user, logout } = useAuth();

  if (!user) return &lt;LoginPrompt /&gt;;

  return (
    &lt;div&gt;
      &lt;h1&gt;Welcome, {user.name}&lt;/h1&gt;
      &lt;button onClick={logout}&gt;Logout&lt;/button&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Multiple Contexts</h3>
      <div class="code-block">
        <pre>// Combine multiple providers
function AppProviders({ children }) {
  return (
    &lt;AuthProvider&gt;
      &lt;ThemeProvider&gt;
        &lt;CartProvider&gt;
          {children}
        &lt;/CartProvider&gt;
      &lt;/ThemeProvider&gt;
    &lt;/AuthProvider&gt;
  );
}

function App() {
  return (
    &lt;AppProviders&gt;
      &lt;Router&gt;
        &lt;Routes /&gt;
      &lt;/Router&gt;
    &lt;/AppProviders&gt;
  );
}</pre>
      </div>

      <h3>Context with TypeScript</h3>
      <div class="code-block">
        <pre>interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise&lt;void&gt;;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext&lt;AuthContextType | undefined&gt;(undefined);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}</pre>
      </div>

      <h3>Performance Considerations</h3>
      <div class="code-block">
        <pre>// Problem: All consumers re-render when any value changes
const AppContext = createContext();

function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState([]);

  // Every consumer re-renders when ANY of these change
  return (
    &lt;AppContext.Provider value={{ user, theme, notifications }}&gt;
      {children}
    &lt;/AppContext.Provider&gt;
  );
}

// Solution: Split into separate contexts
const UserContext = createContext();
const ThemeContext = createContext();
const NotificationContext = createContext();

// Now components only re-render when their specific context changes</pre>
      </div>
    `,
    questions: [
      {
        id: "45-1",
        type: "mcq",
        question: "What problem does Context API solve?",
        options: [
          "Making API calls",
          "Prop drilling - passing props through many levels",
          "Component styling",
          "Form validation"
        ],
        correctAnswer: "Prop drilling - passing props through many levels",
        explanation: "Context provides a way to share values between components without explicitly passing props through every level of the tree, solving the prop drilling problem."
      },
      {
        id: "45-2",
        type: "mcq",
        question: "Why create a custom hook for context consumption?",
        options: [
          "It's required by React",
          "To add error handling and ensure context is used within provider",
          "To make it faster",
          "Custom hooks are deprecated"
        ],
        correctAnswer: "To add error handling and ensure context is used within provider",
        explanation: "A custom hook like useAuth() can check if the context is undefined and throw a helpful error. It also provides a cleaner API than importing both the context and useContext."
      },
      {
        id: "45-3",
        type: "mcq",
        question: "When should you split context into multiple contexts?",
        options: [
          "Always use a single context",
          "When different parts of state change independently and cause unnecessary re-renders",
          "Only for large applications",
          "Never, it's bad practice"
        ],
        correctAnswer: "When different parts of state change independently and cause unnecessary re-renders",
        explanation: "When all state is in one context, all consumers re-render on any change. Splitting contexts means components only re-render when their specific data changes, improving performance."
      },
      {
        id: "45-4",
        type: "descriptive",
        question: "Explain how to create and use a Context in React with the three main steps.",
        keywords: ["createContext", "Provider", "useContext", "value", "children", "consumer", "wrap"],
        explanation: "1) Create context with createContext(). 2) Create a Provider component that wraps children and passes value prop. 3) Consume the context using useContext() in any child component. Optionally create a custom hook for better DX."
      }
    ]
  },
  {
    id: 46,
    title: "useReducer & Complex State",
    description: "Manage complex state logic with useReducer for predictable state updates",
    duration: "55 min",
    difficulty: "Advanced",
    month: 3,
    week: 3,
    category: "State Management",
    content: `
      <h2>When to Use useReducer</h2>
      <p>useReducer is preferable to useState when you have complex state logic, multiple sub-values, or when the next state depends on the previous one.</p>

      <h3>Basic useReducer</h3>
      <div class="code-block">
        <pre>import { useReducer } from 'react';

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    case 'set':
      return { count: action.payload };
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {state.count}&lt;/p&gt;
      &lt;button onClick={() => dispatch({ type: 'increment' })}&gt;+&lt;/button&gt;
      &lt;button onClick={() => dispatch({ type: 'decrement' })}&gt;-&lt;/button&gt;
      &lt;button onClick={() => dispatch({ type: 'reset' })}&gt;Reset&lt;/button&gt;
      &lt;button onClick={() => dispatch({ type: 'set', payload: 100 })}&gt;
        Set to 100
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Todo App with useReducer</h3>
      <div class="code-block">
        <pre>const initialState = {
  todos: [],
  filter: 'all' // 'all' | 'active' | 'completed'
};

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false }
        ]
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        )
      };

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };

    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };

    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState('');

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch({ type: 'ADD_TODO', payload: input.trim() });
      setInput('');
    }
  };

  return (
    &lt;div&gt;
      &lt;form onSubmit={handleSubmit}&gt;
        &lt;input value={input} onChange={e => setInput(e.target.value)} /&gt;
        &lt;button type="submit"&gt;Add&lt;/button&gt;
      &lt;/form&gt;

      &lt;div&gt;
        {['all', 'active', 'completed'].map(f => (
          &lt;button
            key={f}
            onClick={() => dispatch({ type: 'SET_FILTER', payload: f })}
            className={state.filter === f ? 'active' : ''}
          &gt;
            {f}
          &lt;/button&gt;
        ))}
      &lt;/div&gt;

      &lt;ul&gt;
        {filteredTodos.map(todo => (
          &lt;li key={todo.id}&gt;
            &lt;input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            /&gt;
            &lt;span&gt;{todo.text}&lt;/span&gt;
            &lt;button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}&gt;
              Delete
            &lt;/button&gt;
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>useReducer with Context</h3>
      <div class="code-block">
        <pre>// Create context for state and dispatch
const TodoContext = createContext();
const TodoDispatchContext = createContext();

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    &lt;TodoContext.Provider value={state}&gt;
      &lt;TodoDispatchContext.Provider value={dispatch}&gt;
        {children}
      &lt;/TodoDispatchContext.Provider&gt;
    &lt;/TodoContext.Provider&gt;
  );
}

// Custom hooks
function useTodos() {
  return useContext(TodoContext);
}

function useTodosDispatch() {
  return useContext(TodoDispatchContext);
}

// Usage in deep component
function TodoItem({ todo }) {
  const dispatch = useTodosDispatch();

  return (
    &lt;li&gt;
      &lt;span&gt;{todo.text}&lt;/span&gt;
      &lt;button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}&gt;
        Delete
      &lt;/button&gt;
    &lt;/li&gt;
  );
}</pre>
      </div>

      <h3>Action Creators</h3>
      <div class="code-block">
        <pre>// Define action creators for cleaner code
const todoActions = {
  add: (text) => ({ type: 'ADD_TODO', payload: text }),
  toggle: (id) => ({ type: 'TOGGLE_TODO', payload: id }),
  delete: (id) => ({ type: 'DELETE_TODO', payload: id }),
  edit: (id, text) => ({ type: 'EDIT_TODO', payload: { id, text } }),
  setFilter: (filter) => ({ type: 'SET_FILTER', payload: filter }),
  clearCompleted: () => ({ type: 'CLEAR_COMPLETED' })
};

// Usage
dispatch(todoActions.add('New todo'));
dispatch(todoActions.toggle(1));
dispatch(todoActions.delete(1));</pre>
      </div>

      <h3>Lazy Initialization</h3>
      <div class="code-block">
        <pre>// For expensive initial state computation
function init(initialCount) {
  return {
    count: initialCount,
    history: [initialCount]
  };
}

function Counter({ initialCount = 0 }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  // init function only runs once
}</pre>
      </div>
    `,
    questions: [
      {
        id: "46-1",
        type: "mcq",
        question: "When should you use useReducer instead of useState?",
        options: [
          "Always",
          "When state has complex logic with multiple sub-values",
          "Only for counters",
          "When you need faster performance"
        ],
        correctAnswer: "When state has complex logic with multiple sub-values",
        explanation: "useReducer is ideal when state updates are complex, involve multiple sub-values, or when the next state depends on the previous one. It centralizes update logic and makes state changes predictable."
      },
      {
        id: "46-2",
        type: "mcq",
        question: "What should a reducer function always return?",
        options: [
          "undefined",
          "The action",
          "A new state object",
          "null"
        ],
        correctAnswer: "A new state object",
        explanation: "A reducer must always return the new state. It should never mutate the existing state but return a new object. For unhandled actions, return the current state unchanged."
      },
      {
        id: "46-3",
        type: "mcq",
        question: "Why split state and dispatch into separate contexts?",
        options: [
          "It's required",
          "Components that only dispatch don't re-render when state changes",
          "It's faster",
          "To avoid errors"
        ],
        correctAnswer: "Components that only dispatch don't re-render when state changes",
        explanation: "Dispatch is stable (doesn't change between renders). Components that only need dispatch won't re-render when state changes if dispatch is in a separate context."
      },
      {
        id: "46-4",
        type: "descriptive",
        question: "Explain what a reducer function is and how it relates to actions.",
        keywords: ["reducer", "state", "action", "type", "payload", "switch", "dispatch", "pure function"],
        explanation: "A reducer is a pure function that takes current state and an action, then returns new state. Actions are objects with a type (what happened) and optional payload (data). The reducer uses a switch statement to handle different action types and calculate the next state."
      }
    ]
  },
  {
    id: 47,
    title: "Custom Hooks",
    description: "Extract and share component logic with custom React hooks",
    duration: "50 min",
    difficulty: "Advanced",
    month: 3,
    week: 3,
    category: "Hooks",
    content: `
      <h2>What Are Custom Hooks?</h2>
      <p>Custom hooks are functions that start with "use" and can call other hooks. They let you extract component logic into reusable functions.</p>

      <h3>Basic Custom Hook</h3>
      <div class="code-block">
        <pre>// useToggle - manages boolean state
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, toggle, setTrue, setFalse };
}

// Usage
function Modal() {
  const { value: isOpen, toggle, setFalse: close } = useToggle();

  return (
    &lt;&gt;
      &lt;button onClick={toggle}&gt;Toggle Modal&lt;/button&gt;
      {isOpen && (
        &lt;div className="modal"&gt;
          &lt;p&gt;Modal content&lt;/p&gt;
          &lt;button onClick={close}&gt;Close&lt;/button&gt;
        &lt;/div&gt;
      )}
    &lt;/&gt;
  );
}</pre>
      </div>

      <h3>useLocalStorage Hook</h3>
      <div class="code-block">
        <pre>function useLocalStorage(key, initialValue) {
  // Get initial value from localStorage or use provided value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update localStorage when state changes
  const setValue = useCallback((value) => {
    try {
      // Allow value to be a function (like setState)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [fontSize, setFontSize] = useLocalStorage('fontSize', 16);

  return (
    &lt;div&gt;
      &lt;select value={theme} onChange={e => setTheme(e.target.value)}&gt;
        &lt;option value="light"&gt;Light&lt;/option&gt;
        &lt;option value="dark"&gt;Dark&lt;/option&gt;
      &lt;/select&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>useFetch Hook</h3>
      <div class="code-block">
        <pre>function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error('Request failed');
        const json = await response.json();
        setData(json);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);

  if (loading) return &lt;Spinner /&gt;;
  if (error) return &lt;Error message={error} /&gt;;
  return &lt;div&gt;{user.name}&lt;/div&gt;;
}</pre>
      </div>

      <h3>useDebounce Hook</h3>
      <div class="code-block">
        <pre>function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage - search input
function Search() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  const { data: results } = useFetch(
    debouncedQuery ? \`/api/search?q=\${debouncedQuery}\` : null
  );

  return (
    &lt;div&gt;
      &lt;input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      /&gt;
      {results && &lt;SearchResults results={results} /&gt;}
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>useMediaQuery Hook</h3>
      <div class="code-block">
        <pre>function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

// Usage
function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    &lt;div&gt;
      {isMobile ? &lt;MobileNav /&gt; : &lt;DesktopNav /&gt;}
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>usePrevious Hook</h3>
      <div class="code-block">
        <pre>function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

// Usage - compare with previous value
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    &lt;div&gt;
      &lt;p&gt;Current: {count}, Previous: {prevCount}&lt;/p&gt;
      &lt;button onClick={() => setCount(c => c + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>
    `,
    questions: [
      {
        id: "47-1",
        type: "mcq",
        question: "What must custom hook names start with?",
        options: [
          "custom",
          "hook",
          "use",
          "my"
        ],
        correctAnswer: "use",
        explanation: "Custom hooks must start with 'use' (e.g., useToggle, useFetch). This convention lets React check for violations of hooks rules and enables proper linting."
      },
      {
        id: "47-2",
        type: "mcq",
        question: "What can custom hooks contain?",
        options: [
          "Only useState",
          "Any hooks and JavaScript logic",
          "Only custom code, no built-in hooks",
          "Only useEffect"
        ],
        correctAnswer: "Any hooks and JavaScript logic",
        explanation: "Custom hooks can use any built-in hooks (useState, useEffect, etc.), other custom hooks, and any JavaScript logic. They're regular functions that follow hooks rules."
      },
      {
        id: "47-3",
        type: "mcq",
        question: "Do custom hooks share state between components that use them?",
        options: [
          "Yes, always",
          "No, each component gets its own state",
          "Only if you use Context",
          "Only with useRef"
        ],
        correctAnswer: "No, each component gets its own state",
        explanation: "Each component using a custom hook gets its own isolated state. Custom hooks share logic, not state. To share state, combine custom hooks with Context."
      },
      {
        id: "47-4",
        type: "descriptive",
        question: "Explain the benefits of custom hooks and give an example use case.",
        keywords: ["reusable", "logic", "extract", "share", "state", "effects", "composition", "testing"],
        explanation: "Custom hooks let you extract and reuse stateful logic across components. Benefits: 1) Cleaner components, 2) Reusable logic, 3) Easier testing, 4) Better composition. Example: useFetch extracts data fetching logic with loading/error states."
      }
    ]
  },
  {
    id: 48,
    title: "Performance Optimization",
    description: "Optimize React apps with memo, useMemo, and useCallback",
    duration: "60 min",
    difficulty: "Advanced",
    month: 3,
    week: 4,
    category: "React Basics",
    content: `
      <h2>React Performance</h2>
      <p>React is fast by default, but complex apps may need optimization. The key is to avoid unnecessary re-renders and expensive computations.</p>

      <h3>Understanding Re-renders</h3>
      <div class="code-block">
        <pre>// A component re-renders when:
// 1. Its state changes
// 2. Its props change
// 3. Its parent re-renders

function Parent() {
  const [count, setCount] = useState(0);

  // Child re-renders even though it doesn't use count!
  return (
    &lt;div&gt;
      &lt;button onClick={() => setCount(c => c + 1)}&gt;
        Count: {count}
      &lt;/button&gt;
      &lt;Child /&gt; {/* Re-renders on every parent render */}
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>React.memo - Preventing Re-renders</h3>
      <div class="code-block">
        <pre>import { memo } from 'react';

// Without memo - re-renders on every parent render
function ExpensiveChild({ data }) {
  console.log('Rendering ExpensiveChild');
  return &lt;div&gt;{/* complex rendering */}&lt;/div&gt;;
}

// With memo - only re-renders if props change
const MemoizedChild = memo(function ExpensiveChild({ data }) {
  console.log('Rendering ExpensiveChild');
  return &lt;div&gt;{/* complex rendering */}&lt;/div&gt;;
});

// Custom comparison function
const MemoizedWithCompare = memo(
  function MyComponent({ user }) {
    return &lt;div&gt;{user.name}&lt;/div&gt;;
  },
  (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    return prevProps.user.id === nextProps.user.id;
  }
);</pre>
      </div>

      <h3>useMemo - Memoizing Values</h3>
      <div class="code-block">
        <pre>import { useMemo } from 'react';

function FilteredList({ items, filter }) {
  // WITHOUT useMemo - runs on every render
  const filtered = items.filter(item => item.category === filter);

  // WITH useMemo - only recalculates when items or filter change
  const filteredMemo = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => item.category === filter);
  }, [items, filter]);

  // Good for expensive calculations
  const stats = useMemo(() => {
    return {
      total: items.length,
      filtered: filteredMemo.length,
      average: items.reduce((a, b) => a + b.price, 0) / items.length
    };
  }, [items, filteredMemo]);

  return (/* ... */);
}

// DON'T overuse - useMemo has overhead
// Good: Expensive calculations, referential equality
// Bad: Simple operations, primitive values</pre>
      </div>

      <h3>useCallback - Memoizing Functions</h3>
      <div class="code-block">
        <pre>import { useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // WITHOUT useCallback - new function every render
  // Child with memo would still re-render!
  const handleClick = () => {
    console.log('clicked');
  };

  // WITH useCallback - same function reference
  const handleClickMemo = useCallback(() => {
    console.log('clicked');
  }, []);

  // With dependencies
  const addItem = useCallback((item) => {
    setItems(prev => [...prev, item]);
  }, []); // setItems is stable, no dependency needed

  const handleSubmit = useCallback((data) => {
    // Using count - must be in dependencies
    console.log(count, data);
  }, [count]);

  return (
    &lt;div&gt;
      &lt;MemoizedChild onClick={handleClickMemo} /&gt;
      &lt;MemoizedForm onSubmit={handleSubmit} /&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>When to Optimize</h3>
      <div class="code-block">
        <pre>// USE memo/useMemo/useCallback when:
// 1. Component renders often with same props
const HeavyComponent = memo(function Heavy({ data }) {
  return &lt;ExpensiveVisualization data={data} /&gt;;
});

// 2. Expensive calculations
const chartData = useMemo(() => processLargeDataset(data), [data]);

// 3. Passing callbacks to memoized children
const handleChange = useCallback((value) => {
  setValue(value);
}, []);

// 4. Dependencies in other hooks
const debouncedFn = useMemo(
  () => debounce(callback, 300),
  [callback]
);

// DON'T optimize:
// - Simple components
// - Components that rarely re-render
// - Primitive values
// - Functions not passed as props</pre>
      </div>

      <h3>Code Splitting with lazy</h3>
      <div class="code-block">
        <pre>import { lazy, Suspense } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    &lt;Suspense fallback={&lt;Loading /&gt;}&gt;
      &lt;Routes&gt;
        &lt;Route path="/dashboard" element={&lt;Dashboard /&gt;} /&gt;
        &lt;Route path="/settings" element={&lt;Settings /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/Suspense&gt;
  );
}</pre>
      </div>

      <h3>Virtualization for Long Lists</h3>
      <div class="code-block">
        <pre>// For very long lists, render only visible items
// Use libraries like react-window or react-virtualized

import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    &lt;div style={style}&gt;
      {items[index].name}
    &lt;/div&gt;
  );

  return (
    &lt;FixedSizeList
      height={400}
      width={300}
      itemCount={items.length}
      itemSize={35}
    &gt;
      {Row}
    &lt;/FixedSizeList&gt;
  );
}</pre>
      </div>
    `,
    questions: [
      {
        id: "48-1",
        type: "mcq",
        question: "What does React.memo do?",
        options: [
          "Memoizes state values",
          "Prevents a component from re-rendering if props haven't changed",
          "Stores component in memory",
          "Makes components faster"
        ],
        correctAnswer: "Prevents a component from re-rendering if props haven't changed",
        explanation: "React.memo is a higher-order component that memoizes the result. If the component's props haven't changed, React skips rendering and reuses the last result."
      },
      {
        id: "48-2",
        type: "mcq",
        question: "Why use useCallback with memo?",
        options: [
          "useCallback is required for memo",
          "Functions are recreated each render, breaking memo's prop comparison",
          "It makes functions faster",
          "memo doesn't work with functions"
        ],
        correctAnswer: "Functions are recreated each render, breaking memo's prop comparison",
        explanation: "Without useCallback, a new function is created each render. Even with memo, the child sees different function references and re-renders. useCallback preserves the reference."
      },
      {
        id: "48-3",
        type: "mcq",
        question: "When should you NOT use useMemo?",
        options: [
          "For expensive calculations",
          "For simple operations on small data",
          "When referential equality matters",
          "In performance-critical paths"
        ],
        correctAnswer: "For simple operations on small data",
        explanation: "useMemo has overhead (storing values, comparing dependencies). For simple operations, this overhead can exceed the benefit. Only use it for genuinely expensive computations."
      },
      {
        id: "48-4",
        type: "descriptive",
        question: "Explain the difference between useMemo and useCallback.",
        keywords: ["useMemo", "useCallback", "value", "function", "memoize", "reference", "dependencies", "render"],
        explanation: "useMemo memoizes a computed value - it runs a function and caches the result. useCallback memoizes the function itself - it returns the same function reference. Use useMemo for expensive calculations, useCallback for stable function references passed to children."
      }
    ]
  },
  {
    id: 49,
    title: "Error Boundaries & Suspense",
    description: "Handle errors gracefully and manage loading states with Suspense",
    duration: "50 min",
    difficulty: "Advanced",
    month: 3,
    week: 4,
    category: "React Basics",
    content: `
      <h2>Error Boundaries</h2>
      <p>Error boundaries are components that catch JavaScript errors in their child component tree, log them, and display a fallback UI.</p>

      <h3>Creating an Error Boundary</h3>
      <div class="code-block">
        <pre>import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to an error reporting service
    console.error('Error caught:', error);
    console.error('Error info:', errorInfo.componentStack);
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return this.props.fallback || (
        &lt;div className="error-boundary"&gt;
          &lt;h2&gt;Something went wrong&lt;/h2&gt;
          &lt;button onClick={() => this.setState({ hasError: false })}&gt;
            Try again
          &lt;/button&gt;
        &lt;/div&gt;
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    &lt;ErrorBoundary fallback={&lt;ErrorPage /&gt;}&gt;
      &lt;Header /&gt;
      &lt;Main /&gt;
      &lt;Footer /&gt;
    &lt;/ErrorBoundary&gt;
  );
}</pre>
      </div>

      <h3>Granular Error Boundaries</h3>
      <div class="code-block">
        <pre>// Wrap different sections separately
function App() {
  return (
    &lt;div&gt;
      &lt;ErrorBoundary fallback={&lt;NavError /&gt;}&gt;
        &lt;Navigation /&gt;
      &lt;/ErrorBoundary&gt;

      &lt;ErrorBoundary fallback={&lt;ContentError /&gt;}&gt;
        &lt;MainContent /&gt;
      &lt;/ErrorBoundary&gt;

      &lt;ErrorBoundary fallback={&lt;SidebarError /&gt;}&gt;
        &lt;Sidebar /&gt;
      &lt;/ErrorBoundary&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Error Boundary Limitations</h3>
      <div class="code-block">
        <pre>// Error boundaries do NOT catch:
// 1. Event handlers - use try/catch
function Button() {
  const handleClick = () => {
    try {
      riskyOperation();
    } catch (error) {
      setError(error);
    }
  };
  return &lt;button onClick={handleClick}&gt;Click&lt;/button&gt;;
}

// 2. Async code - use try/catch
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    return response.json();
  } catch (error) {
    handleError(error);
  }
}

// 3. Server-side rendering
// 4. Errors in the error boundary itself</pre>
      </div>

      <h3>React Suspense</h3>
      <p>Suspense lets components "wait" for something before rendering, showing a fallback in the meantime.</p>
      <div class="code-block">
        <pre>import { Suspense, lazy } from 'react';

// Lazy loading components
const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));

function App() {
  return (
    &lt;Suspense fallback={&lt;LoadingSpinner /&gt;}&gt;
      &lt;Routes&gt;
        &lt;Route path="/dashboard" element={&lt;Dashboard /&gt;} /&gt;
        &lt;Route path="/profile" element={&lt;Profile /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/Suspense&gt;
  );
}

// Multiple Suspense boundaries for better UX
function App() {
  return (
    &lt;div&gt;
      &lt;Suspense fallback={&lt;HeaderSkeleton /&gt;}&gt;
        &lt;Header /&gt;
      &lt;/Suspense&gt;

      &lt;Suspense fallback={&lt;ContentSkeleton /&gt;}&gt;
        &lt;MainContent /&gt;
      &lt;/Suspense&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Suspense for Data Fetching</h3>
      <div class="code-block">
        <pre>// With React 18+ and compatible libraries
// Example using a hypothetical data fetching library

// Resource that suspends
function fetchUser(id) {
  return createResource(fetch(\`/api/users/\${id}\`).then(r => r.json()));
}

function UserProfile({ userId }) {
  const user = useUser(userId); // This suspends if data not ready

  return (
    &lt;div&gt;
      &lt;h1&gt;{user.name}&lt;/h1&gt;
      &lt;p&gt;{user.email}&lt;/p&gt;
    &lt;/div&gt;
  );
}

function App() {
  return (
    &lt;Suspense fallback={&lt;ProfileSkeleton /&gt;}&gt;
      &lt;UserProfile userId={1} /&gt;
    &lt;/Suspense&gt;
  );
}</pre>
      </div>

      <h3>Combining Error Boundary and Suspense</h3>
      <div class="code-block">
        <pre>function AsyncContent({ children }) {
  return (
    &lt;ErrorBoundary fallback={&lt;ErrorMessage /&gt;}&gt;
      &lt;Suspense fallback={&lt;LoadingSkeleton /&gt;}&gt;
        {children}
      &lt;/Suspense&gt;
    &lt;/ErrorBoundary&gt;
  );
}

function App() {
  return (
    &lt;AsyncContent&gt;
      &lt;Dashboard /&gt;
    &lt;/AsyncContent&gt;
  );
}

// Reusable wrapper component
function AsyncBoundary({ error, loading, children }) {
  return (
    &lt;ErrorBoundary fallback={error}&gt;
      &lt;Suspense fallback={loading}&gt;
        {children}
      &lt;/Suspense&gt;
    &lt;/ErrorBoundary&gt;
  );
}</pre>
      </div>

      <h3>useTransition for Non-Urgent Updates</h3>
      <div class="code-block">
        <pre>import { useTransition } from 'react';

function TabPanel() {
  const [tab, setTab] = useState('home');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (newTab) => {
    startTransition(() => {
      setTab(newTab); // Low priority update
    });
  };

  return (
    &lt;div&gt;
      &lt;TabButtons onChange={handleTabChange} /&gt;
      {isPending && &lt;Spinner /&gt;}
      &lt;Suspense fallback={&lt;TabSkeleton /&gt;}&gt;
        &lt;TabContent tab={tab} /&gt;
      &lt;/Suspense&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>
    `,
    questions: [
      {
        id: "49-1",
        type: "mcq",
        question: "What types of errors do Error Boundaries NOT catch?",
        options: [
          "Render errors",
          "Lifecycle method errors",
          "Event handler errors",
          "Constructor errors"
        ],
        correctAnswer: "Event handler errors",
        explanation: "Error Boundaries catch errors during rendering, lifecycle methods, and constructors. They don't catch errors in event handlers, async code, server-side rendering, or errors in the boundary itself."
      },
      {
        id: "49-2",
        type: "mcq",
        question: "What does Suspense display while waiting?",
        options: [
          "Nothing",
          "The component's last state",
          "The fallback prop content",
          "A loading indicator automatically"
        ],
        correctAnswer: "The fallback prop content",
        explanation: "Suspense renders its fallback prop while waiting for the suspended component to load. You control what's shown during loading by providing the fallback."
      },
      {
        id: "49-3",
        type: "mcq",
        question: "Why use multiple Suspense boundaries?",
        options: [
          "It's required",
          "Different parts can load independently without blocking each other",
          "For better error handling",
          "Suspense only works with one child"
        ],
        correctAnswer: "Different parts can load independently without blocking each other",
        explanation: "Multiple Suspense boundaries allow different sections to show their own loading states and load independently. One slow component won't block the entire UI."
      },
      {
        id: "49-4",
        type: "descriptive",
        question: "Explain why Error Boundaries must be class components and what lifecycle methods they use.",
        keywords: ["class", "getDerivedStateFromError", "componentDidCatch", "fallback", "state", "catch", "render"],
        explanation: "Error Boundaries require class components because they use lifecycle methods not available in functional components: getDerivedStateFromError (to update state for fallback UI) and componentDidCatch (to log errors). React may add hooks for this in the future."
      }
    ]
  },
  {
    id: 50,
    title: "React Developer Tools",
    description: "Master debugging React applications with browser DevTools and React-specific extensions",
    duration: "35 min",
    difficulty: "Intermediate",
    month: 3,
    week: 2,
    category: "React Tools",
    content: `
      <h2>React Developer Tools</h2>
      <p>React Developer Tools is a browser extension that helps you inspect React component hierarchies, state, props, and performance. It's essential for debugging React applications.</p>

      <h3>Installing React DevTools</h3>
      <p>Install the extension for your browser:</p>
      <ul>
        <li><strong>Chrome:</strong> Search "React Developer Tools" in Chrome Web Store</li>
        <li><strong>Firefox:</strong> Search "React Developer Tools" in Firefox Add-ons</li>
        <li><strong>Edge:</strong> Available in Edge Add-ons</li>
      </ul>

      <h3>The Components Tab</h3>
      <p>The Components tab shows your React component tree:</p>
      <div class="code-block">
        <pre>// Example component structure
function App() {
  return (
    &lt;div&gt;
      &lt;Header /&gt;
      &lt;Main&gt;
        &lt;Sidebar /&gt;
        &lt;Content /&gt;
      &lt;/Main&gt;
      &lt;Footer /&gt;
    &lt;/div&gt;
  );
}

// In DevTools, you'll see:
// App
//   Header
//   Main
//     Sidebar
//     Content
//   Footer</pre>
      </div>

      <h3>Inspecting Props and State</h3>
      <p>Click any component to see its props, state, and hooks:</p>
      <div class="code-block">
        <pre>function UserCard({ user, onSelect }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [likes, setLikes] = useState(0);

  return (
    &lt;div onClick={() =&gt; setIsExpanded(!isExpanded)}&gt;
      &lt;h3&gt;{user.name}&lt;/h3&gt;
      {isExpanded && &lt;p&gt;{user.bio}&lt;/p&gt;}
      &lt;button onClick={() =&gt; setLikes(l =&gt; l + 1)}&gt;
        Like ({likes})
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

// DevTools shows:
// Props:
//   user: { name: "Alice", bio: "Developer" }
//   onSelect: function
// hooks:
//   State: false (isExpanded)
//   State: 0 (likes)</pre>
      </div>

      <h3>Editing State in Real-Time</h3>
      <p>You can modify state directly in DevTools to test different scenarios:</p>
      <div class="code-block">
        <pre>// In DevTools, you can:
// 1. Click on the state value
// 2. Edit it directly
// 3. Press Enter to apply

// Great for testing:
// - Edge cases (empty arrays, null values)
// - Different user states (logged in/out)
// - Error states
// - Loading states</pre>
      </div>

      <h3>Component Search and Filters</h3>
      <div class="code-block">
        <pre>// Search features:
// - Type component name to find it
// - Use regex patterns
// - Filter by component type

// Filter options:
// - Hide host components (div, span)
// - Hide specific components
// - Show only components with state</pre>
      </div>

      <h3>The Profiler Tab</h3>
      <p>The Profiler helps identify performance issues:</p>
      <div class="code-block">
        <pre>// Using the Profiler:
// 1. Click "Record" button
// 2. Interact with your app
// 3. Click "Stop"
// 4. Analyze the results

// What you see:
// - Flamegraph: Visual hierarchy of renders
// - Ranked: Components sorted by render time
// - Timeline: Commits over time

// Each commit shows:
// - What rendered and why
// - How long each component took
// - What caused the re-render</pre>
      </div>

      <h3>Identifying Why Components Re-rendered</h3>
      <div class="code-block">
        <pre>// Enable "Record why each component rendered"
// in Profiler settings

// Common reasons:
// - Props changed
// - State changed
// - Parent re-rendered
// - Context changed
// - Hooks changed

// Example: Identifying unnecessary re-renders
function Parent() {
  const [count, setCount] = useState(0);

  // This object is recreated every render!
  const config = { theme: 'dark' };

  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; setCount(c =&gt; c + 1)}&gt;
        Count: {count}
      &lt;/button&gt;
      {/* Child re-renders because config is new! */}
      &lt;Child config={config} /&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Highlight Updates</h3>
      <p>Visualize which components re-render:</p>
      <div class="code-block">
        <pre>// Settings &gt; Highlight updates when components render

// Components flash when they update:
// - Useful for spotting unnecessary re-renders
// - Blue = short render
// - Green = medium render
// - Yellow/Red = slow render

// Watch for:
// - Components flashing when they shouldn't
// - Entire page flashing on small changes
// - Fast sequences of re-renders</pre>
      </div>

      <h3>Inspecting Context</h3>
      <div class="code-block">
        <pre>const ThemeContext = createContext('light');
const UserContext = createContext(null);

function App() {
  return (
    &lt;ThemeContext.Provider value="dark"&gt;
      &lt;UserContext.Provider value={{ name: 'Alice' }}&gt;
        &lt;Dashboard /&gt;
      &lt;/UserContext.Provider&gt;
    &lt;/ThemeContext.Provider&gt;
  );
}

// DevTools shows all context values
// consumed by selected component</pre>
      </div>

      <h3>Component Source Location</h3>
      <div class="code-block">
        <pre>// Click the "&lt;&gt;" icon to jump to source

// Works best with:
// - Development builds
// - Source maps enabled
// - Create React App or Vite defaults

// You can also:
// - Right-click component &gt; "Show in editor"
// - Double-click to open source</pre>
      </div>

      <h3>Debugging with console.log</h3>
      <div class="code-block">
        <pre>// DevTools integration with console
function MyComponent({ data }) {
  console.log('MyComponent rendered', data);

  useEffect(() =&gt; {
    console.log('Effect ran');
  }, [data]);

  return &lt;div&gt;{data.value}&lt;/div&gt;;
}

// In Console, you can filter by component
// and see when/why things logged</pre>
      </div>

      <h3>Strict Mode Double Rendering</h3>
      <div class="code-block">
        <pre>// React.StrictMode causes double renders in dev
// This helps find bugs!

function App() {
  return (
    &lt;React.StrictMode&gt;
      &lt;MyApp /&gt;
    &lt;/React.StrictMode&gt;
  );
}

// Each component renders twice to detect:
// - Impure render functions
// - Side effects in render
// - Missing cleanup in effects

// The Profiler shows this
// Production builds render once</pre>
      </div>

      <h3>Best Practices for Debugging</h3>
      <div class="code-block">
        <pre>// 1. Name your components well
const MyComponent = () =&gt; { }; // Shows as "MyComponent"
export default () =&gt; { }; // Shows as "Anonymous"

// 2. Use displayName for HOCs
const withAuth = (Component) =&gt; {
  const Wrapped = (props) =&gt; { /* ... */ };
  Wrapped.displayName = \`withAuth(\${Component.displayName})\`;
  return Wrapped;
};

// 3. Use React.memo with name
const MemoizedList = React.memo(function ProductList() {
  return /* ... */;
});

// 4. Keep component tree shallow
// Deep nesting makes debugging harder</pre>
      </div>
    `,
    questions: [
      {
        id: "50-1",
        type: "mcq",
        question: "What does the React DevTools Components tab show?",
        options: [
          "Only the HTML DOM tree",
          "React component hierarchy with props and state",
          "Network requests",
          "Console logs"
        ],
        correctAnswer: "React component hierarchy with props and state",
        explanation: "The Components tab shows the React component tree (not the DOM), letting you inspect props, state, hooks, and context for each component."
      },
      {
        id: "50-2",
        type: "mcq",
        question: "What is the Profiler tab used for?",
        options: [
          "Editing component code",
          "Managing React Router",
          "Identifying performance issues and render times",
          "Writing tests"
        ],
        correctAnswer: "Identifying performance issues and render times",
        explanation: "The Profiler records renders and shows what rendered, how long it took, and why - helping you identify and fix performance bottlenecks."
      },
      {
        id: "50-3",
        type: "mcq",
        question: "Why do components render twice in React.StrictMode during development?",
        options: [
          "It's a bug",
          "To improve performance",
          "To detect impure renders and side effects",
          "For better error messages"
        ],
        correctAnswer: "To detect impure renders and side effects",
        explanation: "StrictMode intentionally double-renders to help detect impure render functions and unexpected side effects. This only happens in development."
      },
      {
        id: "50-4",
        type: "descriptive",
        question: "How can you use the Profiler to identify unnecessary re-renders in your application?",
        keywords: ["record", "flamegraph", "why", "rendered", "props", "state", "highlight", "updates"],
        explanation: "Record a profiler session, interact with your app, then analyze the flamegraph to see which components rendered. Enable 'Record why each component rendered' to see causes. Use 'Highlight updates' to visualize re-renders in real-time."
      }
    ]
  },
  {
    id: 51,
    title: "useContext & Global State",
    description: "Learn to share state across components without prop drilling using React Context",
    duration: "45 min",
    difficulty: "Intermediate",
    month: 3,
    week: 3,
    category: "React Hooks",
    content: `
      <h2>useContext & Global State</h2>
      <p>Context provides a way to pass data through the component tree without having to pass props manually at every level. It's React's built-in solution for global state.</p>

      <h3>The Problem: Prop Drilling</h3>
      <div class="code-block">
        <pre>// Without Context - passing props through every level
function App() {
  const [user, setUser] = useState({ name: 'Alice' });

  return &lt;Layout user={user} setUser={setUser} /&gt;;
}

function Layout({ user, setUser }) {
  return (
    &lt;div&gt;
      &lt;Header user={user} setUser={setUser} /&gt;
      &lt;Main user={user} /&gt;
    &lt;/div&gt;
  );
}

function Header({ user, setUser }) {
  return &lt;UserMenu user={user} setUser={setUser} /&gt;;
}

// Props drilled through 3 components just to reach UserMenu!</pre>
      </div>

      <h3>Creating a Context</h3>
      <div class="code-block">
        <pre>import { createContext, useContext, useState } from 'react';

// 1. Create the context
const UserContext = createContext(null);

// 2. Create a provider component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) =&gt; setUser(userData);
  const logout = () =&gt; setUser(null);

  return (
    &lt;UserContext.Provider value={{ user, login, logout }}&gt;
      {children}
    &lt;/UserContext.Provider&gt;
  );
}

// 3. Create a custom hook for easy access
function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

export { UserProvider, useUser };</pre>
      </div>

      <h3>Using the Context</h3>
      <div class="code-block">
        <pre>// Wrap your app with the provider
function App() {
  return (
    &lt;UserProvider&gt;
      &lt;Layout /&gt;
    &lt;/UserProvider&gt;
  );
}

// Use the context anywhere in the tree!
function UserMenu() {
  const { user, logout } = useUser();

  if (!user) {
    return &lt;button&gt;Log In&lt;/button&gt;;
  }

  return (
    &lt;div&gt;
      &lt;span&gt;Welcome, {user.name}!&lt;/span&gt;
      &lt;button onClick={logout}&gt;Log Out&lt;/button&gt;
    &lt;/div&gt;
  );
}

function ProfilePage() {
  const { user } = useUser();

  return &lt;h1&gt;{user?.name}'s Profile&lt;/h1&gt;;
}</pre>
      </div>

      <h3>Theme Context Example</h3>
      <div class="code-block">
        <pre>// ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() =&gt; {
    // Check localStorage or system preference
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() =&gt; {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =&gt; {
    setTheme(t =&gt; t === 'light' ? 'dark' : 'light');
  };

  return (
    &lt;ThemeContext.Provider value={{ theme, toggleTheme }}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}</pre>
      </div>

      <h3>Multiple Contexts</h3>
      <div class="code-block">
        <pre>// Compose multiple providers
function App() {
  return (
    &lt;ThemeProvider&gt;
      &lt;UserProvider&gt;
        &lt;CartProvider&gt;
          &lt;NotificationProvider&gt;
            &lt;Router&gt;
              &lt;MainApp /&gt;
            &lt;/Router&gt;
          &lt;/NotificationProvider&gt;
        &lt;/CartProvider&gt;
      &lt;/UserProvider&gt;
    &lt;/ThemeProvider&gt;
  );
}

// Or create a combined provider
function AppProviders({ children }) {
  return (
    &lt;ThemeProvider&gt;
      &lt;UserProvider&gt;
        &lt;CartProvider&gt;
          {children}
        &lt;/CartProvider&gt;
      &lt;/UserProvider&gt;
    &lt;/ThemeProvider&gt;
  );
}</pre>
      </div>

      <h3>Context with TypeScript</h3>
      <div class="code-block">
        <pre>interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) =&gt; Promise&lt;void&gt;;
  logout: () =&gt; void;
  isLoading: boolean;
}

const AuthContext = createContext&lt;AuthContextType | null&gt;(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState&lt;User | null&gt;(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (email: string, password: string) =&gt; {
    setIsLoading(true);
    try {
      const response = await api.login(email, password);
      setUser(response.user);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () =&gt; {
    setUser(null);
    api.logout();
  };

  return (
    &lt;AuthContext.Provider value={{ user, login, logout, isLoading }}&gt;
      {children}
    &lt;/AuthContext.Provider&gt;
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}</pre>
      </div>

      <h3>When Context Re-renders</h3>
      <div class="code-block">
        <pre>// All consumers re-render when context value changes!
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState({});

  // BAD: New object every render = all consumers re-render
  return (
    &lt;UserContext.Provider value={{ user, settings, setUser, setSettings }}&gt;
      {children}
    &lt;/UserContext.Provider&gt;
  );
}

// GOOD: Memoize the value
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState({});

  const value = useMemo(
    () =&gt; ({ user, settings, setUser, setSettings }),
    [user, settings]
  );

  return (
    &lt;UserContext.Provider value={value}&gt;
      {children}
    &lt;/UserContext.Provider&gt;
  );
}</pre>
      </div>

      <h3>Splitting Contexts for Performance</h3>
      <div class="code-block">
        <pre>// Problem: One context with everything
const AppContext = createContext({
  user: null,
  theme: 'light',
  cart: [],
  notifications: []
});
// Changing cart re-renders theme consumers!

// Solution: Split into separate contexts
const UserContext = createContext(null);
const ThemeContext = createContext('light');
const CartContext = createContext([]);
const NotificationContext = createContext([]);

// Now components only re-render for their specific context</pre>
      </div>

      <h3>Context Best Practices</h3>
      <div class="code-block">
        <pre>// 1. Always create a custom hook
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}

// 2. Provide default values for optional contexts
const FeatureFlagsContext = createContext({
  newDashboard: false,
  darkMode: true
});

// 3. Co-locate context with its state logic
// CartContext.jsx exports:
// - CartProvider
// - useCart
// - cart-related actions

// 4. Don't overuse context
// Good for: Theme, Auth, Locale, Feature flags
// Consider alternatives for: Form state, frequently updated data</pre>
      </div>

      <h3>Context vs Props</h3>
      <div class="code-block">
        <pre>// Use PROPS when:
// - Data only goes 1-2 levels deep
// - The intermediate components need the data
// - You want explicit data flow

// Use CONTEXT when:
// - Data needed by many components at different levels
// - Data is "global" (theme, user, locale)
// - Prop drilling becomes unwieldy

// Example where props are better:
function ProductCard({ product }) {
  return (
    &lt;div&gt;
      &lt;ProductImage src={product.image} /&gt;
      &lt;ProductTitle title={product.title} /&gt;
      &lt;ProductPrice price={product.price} /&gt;
    &lt;/div&gt;
  );
}
// These child components are tightly coupled to ProductCard
// Props make the data flow clear</pre>
      </div>
    `,
    questions: [
      {
        id: "51-1",
        type: "mcq",
        question: "What problem does React Context solve?",
        options: [
          "Making API calls",
          "Prop drilling - passing data through many component levels",
          "Styling components",
          "Routing between pages"
        ],
        correctAnswer: "Prop drilling - passing data through many component levels",
        explanation: "Context eliminates prop drilling by allowing data to be accessed directly by any component in the tree, without passing props through intermediate components."
      },
      {
        id: "51-2",
        type: "mcq",
        question: "What happens when a context value changes?",
        options: [
          "Only the provider re-renders",
          "Nothing re-renders automatically",
          "All components consuming that context re-render",
          "Only the closest consumer re-renders"
        ],
        correctAnswer: "All components consuming that context re-render",
        explanation: "When a context value changes, all components that consume that context will re-render. This is why splitting contexts and memoizing values is important."
      },
      {
        id: "51-3",
        type: "mcq",
        question: "Why create a custom hook like useUser() for context?",
        options: [
          "It's required by React",
          "For type safety and error handling when used outside provider",
          "To make the context faster",
          "To reduce bundle size"
        ],
        correctAnswer: "For type safety and error handling when used outside provider",
        explanation: "Custom hooks provide better developer experience with proper error messages when context is used outside its provider, and enable TypeScript type inference."
      },
      {
        id: "51-4",
        type: "descriptive",
        question: "Explain how to optimize context performance when the value object contains multiple properties.",
        keywords: ["useMemo", "split", "separate", "contexts", "memoize", "re-render"],
        explanation: "Memoize the context value with useMemo to prevent new object references on every render. Split large contexts into smaller, focused ones so components only re-render when their specific data changes."
      }
    ]
  },
  {
    id: 52,
    title: "useReducer for Complex State",
    description: "Learn to manage complex state logic with useReducer and the reducer pattern",
    duration: "50 min",
    difficulty: "Advanced",
    month: 3,
    week: 3,
    category: "React Hooks",
    content: `
      <h2>useReducer for Complex State</h2>
      <p>useReducer is a React hook that's useful for managing complex state logic. It's an alternative to useState that follows the reducer pattern, making state changes predictable and testable.</p>

      <h3>When to Use useReducer</h3>
      <ul>
        <li>State has multiple sub-values</li>
        <li>Next state depends on previous state</li>
        <li>Complex update logic</li>
        <li>State changes need to be predictable and testable</li>
      </ul>

      <h3>Basic Syntax</h3>
      <div class="code-block">
        <pre>import { useReducer } from 'react';

// 1. Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

// 2. Use in component
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {state.count}&lt;/p&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'increment' })}&gt;+&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'decrement' })}&gt;-&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'reset' })}&gt;Reset&lt;/button&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Actions with Payload</h3>
      <div class="code-block">
        <pre>function reducer(state, action) {
  switch (action.type) {
    case 'set_name':
      return { ...state, name: action.payload };
    case 'set_email':
      return { ...state, email: action.payload };
    case 'set_age':
      return { ...state, age: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action');
  }
}

const initialState = { name: '', email: '', age: 0 };

function UserForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    &lt;form&gt;
      &lt;input
        value={state.name}
        onChange={(e) =&gt; dispatch({
          type: 'set_name',
          payload: e.target.value
        })}
      /&gt;
      &lt;input
        value={state.email}
        onChange={(e) =&gt; dispatch({
          type: 'set_email',
          payload: e.target.value
        })}
      /&gt;
    &lt;/form&gt;
  );
}</pre>
      </div>

      <h3>Shopping Cart Example</h3>
      <div class="code-block">
        <pre>const cartReducer = (state, action) =&gt; {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        item =&gt; item.id === action.payload.id
      );

      if (existingIndex &gt;= 0) {
        const newItems = [...state.items];
        newItems[existingIndex].quantity += 1;
        return { ...state, items: newItems };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item =&gt; item.id !== action.payload)
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =&gt;
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    case 'APPLY_DISCOUNT':
      return { ...state, discount: action.payload };

    default:
      return state;
  }
};

const initialCart = {
  items: [],
  discount: 0
};

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const total = cart.items.reduce(
    (sum, item) =&gt; sum + item.price * item.quantity,
    0
  );
  const finalTotal = total * (1 - cart.discount);

  return (
    &lt;div&gt;
      {cart.items.map(item =&gt; (
        &lt;CartItem
          key={item.id}
          item={item}
          onRemove={() =&gt; dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
          onUpdateQty={(qty) =&gt; dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { id: item.id, quantity: qty }
          })}
        /&gt;
      ))}
      &lt;p&gt;Total: \${finalTotal.toFixed(2)}&lt;/p&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>useReducer with TypeScript</h3>
      <div class="code-block">
        <pre>// Define state type
interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// Define action types
type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'SET_FILTER'; payload: 'all' | 'active' | 'completed' };

// Type-safe reducer
const todoReducer = (state: TodoState, action: TodoAction): TodoState =&gt; {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: crypto.randomUUID(), text: action.payload, completed: false }
        ]
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =&gt;
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo =&gt; todo.id !== action.payload)
      };

    case 'SET_FILTER':
      return { ...state, filter: action.payload };

    default:
      // TypeScript ensures all cases are handled
      const _exhaustive: never = action;
      return state;
  }
};</pre>
      </div>

      <h3>Lazy Initialization</h3>
      <div class="code-block">
        <pre>// For expensive initial state computation
function createInitialState(userId) {
  // This runs only once, not on every render
  return {
    user: loadUserFromStorage(userId),
    preferences: loadPreferences(userId),
    history: []
  };
}

function UserDashboard({ userId }) {
  // Third argument is init function
  const [state, dispatch] = useReducer(
    reducer,
    userId,
    createInitialState
  );

  // ...
}</pre>
      </div>

      <h3>Combining useReducer with Context</h3>
      <div class="code-block">
        <pre>// Create context
const TodoContext = createContext(null);
const TodoDispatchContext = createContext(null);

// Provider component
function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    &lt;TodoContext.Provider value={state}&gt;
      &lt;TodoDispatchContext.Provider value={dispatch}&gt;
        {children}
      &lt;/TodoDispatchContext.Provider&gt;
    &lt;/TodoContext.Provider&gt;
  );
}

// Custom hooks
function useTodos() {
  return useContext(TodoContext);
}

function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

// Usage in components
function TodoList() {
  const { todos, filter } = useTodos();
  const dispatch = useTodoDispatch();

  const filteredTodos = todos.filter(todo =&gt; {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    &lt;ul&gt;
      {filteredTodos.map(todo =&gt; (
        &lt;li key={todo.id}&gt;
          &lt;span&gt;{todo.text}&lt;/span&gt;
          &lt;button onClick={() =&gt; dispatch({
            type: 'TOGGLE_TODO',
            payload: todo.id
          })}&gt;
            {todo.completed ? 'Undo' : 'Done'}
          &lt;/button&gt;
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</pre>
      </div>

      <h3>Action Creator Pattern</h3>
      <div class="code-block">
        <pre>// Define action creators for cleaner code
const todoActions = {
  addTodo: (text) =&gt; ({ type: 'ADD_TODO', payload: text }),
  toggleTodo: (id) =&gt; ({ type: 'TOGGLE_TODO', payload: id }),
  deleteTodo: (id) =&gt; ({ type: 'DELETE_TODO', payload: id }),
  setFilter: (filter) =&gt; ({ type: 'SET_FILTER', payload: filter })
};

// Usage
function AddTodoForm() {
  const dispatch = useTodoDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    dispatch(todoActions.addTodo(text));
    setText('');
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input value={text} onChange={e =&gt; setText(e.target.value)} /&gt;
      &lt;button type="submit"&gt;Add&lt;/button&gt;
    &lt;/form&gt;
  );
}</pre>
      </div>

      <h3>useState vs useReducer</h3>
      <div class="code-block">
        <pre>// useState: Simple, independent values
const [count, setCount] = useState(0);
const [name, setName] = useState('');

// useReducer: Complex, related state
const [state, dispatch] = useReducer(reducer, {
  count: 0,
  step: 1,
  history: []
});

// Choose useState when:
// - State is a single primitive
// - State updates are simple
// - Few state variables

// Choose useReducer when:
// - State is an object with multiple sub-values
// - Next state depends on previous
// - Complex update logic
// - Want testable state logic</pre>
      </div>

      <h3>Testing Reducers</h3>
      <div class="code-block">
        <pre>// Reducers are pure functions - easy to test!
describe('todoReducer', () =&gt; {
  it('should add a todo', () =&gt; {
    const state = { todos: [], filter: 'all' };
    const action = { type: 'ADD_TODO', payload: 'Learn React' };

    const newState = todoReducer(state, action);

    expect(newState.todos).toHaveLength(1);
    expect(newState.todos[0].text).toBe('Learn React');
    expect(newState.todos[0].completed).toBe(false);
  });

  it('should toggle a todo', () =&gt; {
    const state = {
      todos: [{ id: '1', text: 'Test', completed: false }],
      filter: 'all'
    };

    const newState = todoReducer(state, {
      type: 'TOGGLE_TODO',
      payload: '1'
    });

    expect(newState.todos[0].completed).toBe(true);
  });
});</pre>
      </div>
    `,
    questions: [
      {
        id: "52-1",
        type: "mcq",
        question: "What does the useReducer hook return?",
        options: [
          "Just the current state",
          "A state value and a dispatch function",
          "A reducer function",
          "An action object"
        ],
        correctAnswer: "A state value and a dispatch function",
        explanation: "useReducer returns an array with two elements: the current state and a dispatch function used to send actions to the reducer."
      },
      {
        id: "52-2",
        type: "mcq",
        question: "When should you prefer useReducer over useState?",
        options: [
          "For simple boolean toggles",
          "When state logic is complex or involves multiple sub-values",
          "When you need better performance",
          "For all state management"
        ],
        correctAnswer: "When state logic is complex or involves multiple sub-values",
        explanation: "useReducer is preferred when state has multiple related sub-values, when the next state depends on the previous state, or when state update logic is complex."
      },
      {
        id: "52-3",
        type: "mcq",
        question: "What is the purpose of the third argument to useReducer?",
        options: [
          "To provide middleware",
          "For lazy initialization of state",
          "To pass additional context",
          "To enable debugging"
        ],
        correctAnswer: "For lazy initialization of state",
        explanation: "The third argument is an init function that computes the initial state lazily. It runs once on mount, useful for expensive computations."
      },
      {
        id: "52-4",
        type: "descriptive",
        question: "Explain how to combine useReducer with Context for global state management.",
        keywords: ["provider", "context", "dispatch", "separate", "state", "actions", "custom hook"],
        explanation: "Create two contexts - one for state and one for dispatch. Use useReducer in a provider component and pass state and dispatch to their respective contexts. Create custom hooks to access them, enabling any component to read state or dispatch actions."
      }
    ]
  },
  {
    id: 53,
    title: "useMemo & useCallback",
    description: "Optimize React performance by memoizing expensive computations and callback functions",
    duration: "45 min",
    difficulty: "Advanced",
    month: 3,
    week: 3,
    category: "React Optimization",
    content: `
      <h2>useMemo & useCallback</h2>
      <p>useMemo and useCallback are React hooks for performance optimization. They help prevent unnecessary recalculations and re-renders by memoizing values and functions.</p>

      <h3>The Problem: Expensive Recalculations</h3>
      <div class="code-block">
        <pre>function ProductList({ products, filter }) {
  // This runs on EVERY render!
  const filteredProducts = products.filter(p =&gt;
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) =&gt;
    a.price - b.price
  );

  // Even clicking a button re-runs filtering/sorting!
  const [showDetails, setShowDetails] = useState(false);

  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; setShowDetails(!showDetails)}&gt;
        Toggle Details
      &lt;/button&gt;
      {sortedProducts.map(p =&gt; &lt;ProductCard key={p.id} product={p} /&gt;)}
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>useMemo: Memoize Computed Values</h3>
      <div class="code-block">
        <pre>import { useMemo } from 'react';

function ProductList({ products, filter }) {
  // Only recalculates when products or filter changes
  const sortedProducts = useMemo(() =&gt; {
    console.log('Filtering and sorting...');
    return products
      .filter(p =&gt; p.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) =&gt; a.price - b.price);
  }, [products, filter]); // Dependencies

  const [showDetails, setShowDetails] = useState(false);

  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; setShowDetails(!showDetails)}&gt;
        Toggle Details {/* No recalculation! */}
      &lt;/button&gt;
      {sortedProducts.map(p =&gt; &lt;ProductCard key={p.id} product={p} /&gt;)}
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>useMemo for Expensive Operations</h3>
      <div class="code-block">
        <pre>function DataVisualization({ data }) {
  // Complex statistics calculation
  const statistics = useMemo(() =&gt; {
    const sum = data.reduce((acc, val) =&gt; acc + val, 0);
    const mean = sum / data.length;
    const variance = data.reduce(
      (acc, val) =&gt; acc + Math.pow(val - mean, 2), 0
    ) / data.length;
    const stdDev = Math.sqrt(variance);

    return { sum, mean, variance, stdDev };
  }, [data]);

  // Chart configuration
  const chartConfig = useMemo(() =&gt; ({
    labels: data.map((_, i) =&gt; \`Point \${i + 1}\`),
    datasets: [{
      data,
      backgroundColor: data.map(v =&gt;
        v &gt; statistics.mean ? 'green' : 'red'
      )
    }]
  }), [data, statistics.mean]);

  return &lt;Chart config={chartConfig} stats={statistics} /&gt;;
}</pre>
      </div>

      <h3>useCallback: Memoize Functions</h3>
      <div class="code-block">
        <pre>import { useCallback } from 'react';

function TodoList({ todos }) {
  // Without useCallback: new function every render
  // This causes child components to re-render!
  const handleDelete = (id) =&gt; {
    deleteTodo(id);
  };

  // With useCallback: same function reference
  const handleDeleteMemo = useCallback((id) =&gt; {
    deleteTodo(id);
  }, []); // No dependencies - stable reference

  return (
    &lt;ul&gt;
      {todos.map(todo =&gt; (
        &lt;TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDeleteMemo} // Same reference
        /&gt;
      ))}
    &lt;/ul&gt;
  );
}

// Child is memoized - only re-renders if props change
const TodoItem = React.memo(({ todo, onDelete }) =&gt; {
  console.log('Rendering:', todo.text);
  return (
    &lt;li&gt;
      {todo.text}
      &lt;button onClick={() =&gt; onDelete(todo.id)}&gt;Delete&lt;/button&gt;
    &lt;/li&gt;
  );
});</pre>
      </div>

      <h3>useCallback with Dependencies</h3>
      <div class="code-block">
        <pre>function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  // Recreates only when category changes
  const handleSearch = useCallback(() =&gt; {
    onSearch({ query, category });
  }, [query, category, onSearch]);

  // For input handlers, often no deps needed
  const handleQueryChange = useCallback((e) =&gt; {
    setQuery(e.target.value);
  }, []); // setQuery is stable

  return (
    &lt;form onSubmit={(e) =&gt; { e.preventDefault(); handleSearch(); }}&gt;
      &lt;input value={query} onChange={handleQueryChange} /&gt;
      &lt;select value={category} onChange={e =&gt; setCategory(e.target.value)}&gt;
        &lt;option value="all"&gt;All&lt;/option&gt;
        &lt;option value="books"&gt;Books&lt;/option&gt;
      &lt;/select&gt;
      &lt;button type="submit"&gt;Search&lt;/button&gt;
    &lt;/form&gt;
  );
}</pre>
      </div>

      <h3>React.memo with useMemo/useCallback</h3>
      <div class="code-block">
        <pre>// Parent component
function Dashboard({ user }) {
  const [count, setCount] = useState(0);

  // Memoize object prop
  const userInfo = useMemo(() =&gt; ({
    name: user.name,
    avatar: user.avatar
  }), [user.name, user.avatar]);

  // Memoize callback prop
  const handleLogout = useCallback(() =&gt; {
    logout(user.id);
  }, [user.id]);

  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; setCount(c =&gt; c + 1)}&gt;
        Count: {count}
      &lt;/button&gt;
      {/* ExpensiveHeader won't re-render on count change */}
      &lt;ExpensiveHeader userInfo={userInfo} onLogout={handleLogout} /&gt;
    &lt;/div&gt;
  );
}

const ExpensiveHeader = React.memo(({ userInfo, onLogout }) =&gt; {
  console.log('Header rendered');
  return (
    &lt;header&gt;
      &lt;img src={userInfo.avatar} alt={userInfo.name} /&gt;
      &lt;span&gt;{userInfo.name}&lt;/span&gt;
      &lt;button onClick={onLogout}&gt;Logout&lt;/button&gt;
    &lt;/header&gt;
  );
});</pre>
      </div>

      <h3>When NOT to Use These Hooks</h3>
      <div class="code-block">
        <pre>// DON'T: Memoizing simple calculations
const double = useMemo(() =&gt; count * 2, [count]); // Overhead!
const double = count * 2; // Just calculate it

// DON'T: Memoizing when no child uses React.memo
function Parent() {
  // This callback provides no benefit
  const onClick = useCallback(() =&gt; {
    console.log('clicked');
  }, []);

  // Button isn't memoized, will re-render anyway
  return &lt;button onClick={onClick}&gt;Click&lt;/button&gt;;
}

// DON'T: Empty or simple dependency arrays
const getData = useCallback(() =&gt; api.fetch(), []);
// If deps never change, the function is stable anyway

// DON'T: Premature optimization
// Profile first, optimize where it matters</pre>
      </div>

      <h3>When TO Use These Hooks</h3>
      <div class="code-block">
        <pre>// DO: Expensive computations
const sortedData = useMemo(() =&gt;
  data.sort((a, b) =&gt; complexComparison(a, b)),
  [data]
);

// DO: Creating objects/arrays for memoized children
const config = useMemo(() =&gt; ({ theme, locale }), [theme, locale]);
return &lt;MemoizedComponent config={config} /&gt;;

// DO: Callbacks passed to memoized children
const handleClick = useCallback(() =&gt; {
  doSomething(id);
}, [id]);
return &lt;MemoizedList onClick={handleClick} /&gt;;

// DO: Callbacks in dependency arrays
const fetchData = useCallback(async () =&gt; {
  const result = await api.get(url);
  setData(result);
}, [url]);

useEffect(() =&gt; {
  fetchData();
}, [fetchData]); // Won't cause infinite loop</pre>
      </div>

      <h3>Common Mistakes</h3>
      <div class="code-block">
        <pre>// MISTAKE 1: Wrong dependencies
const filtered = useMemo(() =&gt; {
  return items.filter(i =&gt; i.active);
}, []); // Missing 'items'! Always stale

// MISTAKE 2: Mutating inside useMemo
const sorted = useMemo(() =&gt; {
  items.sort(); // DON'T mutate!
  return items;
}, [items]);

// Correct:
const sorted = useMemo(() =&gt; {
  return [...items].sort();
}, [items]);

// MISTAKE 3: Overusing
const Component = ({ name }) =&gt; {
  const greeting = useMemo(() =&gt; \`Hello, \${name}\`, [name]);
  // Just use: const greeting = \`Hello, \${name}\`;
};

// MISTAKE 4: Creating deps in render
function Bad({ items }) {
  const config = { sortBy: 'name' }; // New object every render!
  const sorted = useMemo(() =&gt; sort(items, config), [items, config]);
  // useMemo runs every time because config is new
}</pre>
      </div>

      <h3>Performance Profiling</h3>
      <div class="code-block">
        <pre>// Always measure before optimizing!
function ExpensiveComponent({ data }) {
  console.time('calculation');
  const result = useMemo(() =&gt; {
    return expensiveCalculation(data);
  }, [data]);
  console.timeEnd('calculation');

  // React DevTools Profiler is better:
  // 1. Record a session
  // 2. Look for components that render often
  // 3. Check if they have expensive calculations
  // 4. Apply useMemo/useCallback where beneficial
}</pre>
      </div>
    `,
    questions: [
      {
        id: "53-1",
        type: "mcq",
        question: "What is the main purpose of useMemo?",
        options: [
          "To create new state variables",
          "To memoize expensive computed values between renders",
          "To handle side effects",
          "To create event handlers"
        ],
        correctAnswer: "To memoize expensive computed values between renders",
        explanation: "useMemo caches the result of an expensive calculation and only recalculates when its dependencies change, preventing unnecessary work on re-renders."
      },
      {
        id: "53-2",
        type: "mcq",
        question: "Why is useCallback typically paired with React.memo?",
        options: [
          "It's required by React",
          "To prevent the memoized child from re-rendering due to new function references",
          "To improve memory usage",
          "To enable concurrent rendering"
        ],
        correctAnswer: "To prevent the memoized child from re-rendering due to new function references",
        explanation: "useCallback maintains a stable function reference. Without it, a new function is created each render, causing React.memo children to re-render even though the function logic hasn't changed."
      },
      {
        id: "53-3",
        type: "mcq",
        question: "When should you avoid using useMemo?",
        options: [
          "For expensive array operations",
          "For simple calculations like multiplication",
          "When creating objects for memoized children",
          "For complex sorting algorithms"
        ],
        correctAnswer: "For simple calculations like multiplication",
        explanation: "useMemo has overhead. For simple operations like multiplication, the overhead of memoization exceeds the cost of the calculation itself."
      },
      {
        id: "53-4",
        type: "descriptive",
        question: "Explain the relationship between useMemo, useCallback, and React.memo.",
        keywords: ["memoize", "reference", "props", "re-render", "stable", "child", "dependencies"],
        explanation: "React.memo prevents re-renders if props haven't changed. useMemo creates stable object references for props. useCallback creates stable function references. Together, they prevent unnecessary re-renders of memoized children."
      }
    ]
  },
  {
    id: 54,
    title: "Custom Hooks",
    description: "Create reusable stateful logic by building your own custom React hooks",
    duration: "50 min",
    difficulty: "Advanced",
    month: 3,
    week: 3,
    category: "React Patterns",
    content: `
      <h2>Custom Hooks</h2>
      <p>Custom hooks let you extract component logic into reusable functions. They're regular JavaScript functions that can use other hooks, and their names must start with "use".</p>

      <h3>Why Custom Hooks?</h3>
      <ul>
        <li>Share stateful logic between components</li>
        <li>Keep components clean and focused</li>
        <li>Make logic testable in isolation</li>
        <li>Follow the DRY principle</li>
      </ul>

      <h3>Basic Custom Hook</h3>
      <div class="code-block">
        <pre>// useCounter.js
import { useState, useCallback } from 'react';

function useCounter(initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() =&gt; {
    setCount(c =&gt; c + step);
  }, [step]);

  const decrement = useCallback(() =&gt; {
    setCount(c =&gt; c - step);
  }, [step]);

  const reset = useCallback(() =&gt; {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
}

// Usage
function Counter() {
  const { count, increment, decrement, reset } = useCounter(0, 5);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={increment}&gt;+5&lt;/button&gt;
      &lt;button onClick={decrement}&gt;-5&lt;/button&gt;
      &lt;button onClick={reset}&gt;Reset&lt;/button&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>useToggle Hook</h3>
      <div class="code-block">
        <pre>function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() =&gt; {
    setValue(v =&gt; !v);
  }, []);

  const setTrue = useCallback(() =&gt; setValue(true), []);
  const setFalse = useCallback(() =&gt; setValue(false), []);

  return [value, toggle, { setTrue, setFalse }];
}

// Usage
function Modal() {
  const [isOpen, toggleModal, { setFalse: closeModal }] = useToggle();

  return (
    &lt;&gt;
      &lt;button onClick={toggleModal}&gt;Toggle Modal&lt;/button&gt;
      {isOpen && (
        &lt;div className="modal"&gt;
          &lt;p&gt;Modal Content&lt;/p&gt;
          &lt;button onClick={closeModal}&gt;Close&lt;/button&gt;
        &lt;/div&gt;
      )}
    &lt;/&gt;
  );
}</pre>
      </div>

      <h3>useLocalStorage Hook</h3>
      <div class="code-block">
        <pre>function useLocalStorage(key, initialValue) {
  // Get initial value from localStorage or use provided initial
  const [storedValue, setStoredValue] = useState(() =&gt; {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update localStorage when value changes
  const setValue = useCallback((value) =&gt; {
    try {
      // Allow value to be a function (like useState)
      const valueToStore = value instanceof Function
        ? value(storedValue)
        : value;

      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [fontSize, setFontSize] = useLocalStorage('fontSize', 16);

  return (
    &lt;div&gt;
      &lt;select value={theme} onChange={e =&gt; setTheme(e.target.value)}&gt;
        &lt;option value="light"&gt;Light&lt;/option&gt;
        &lt;option value="dark"&gt;Dark&lt;/option&gt;
      &lt;/select&gt;
      &lt;input
        type="range"
        value={fontSize}
        onChange={e =&gt; setFontSize(Number(e.target.value))}
        min={12}
        max={24}
      /&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>useFetch Hook</h3>
      <div class="code-block">
        <pre>function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =&gt; {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url, {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () =&gt; controller.abort();
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(
    \`/api/users/\${userId}\`
  );

  if (loading) return &lt;Spinner /&gt;;
  if (error) return &lt;Error message={error} /&gt;;

  return &lt;div&gt;{user.name}&lt;/div&gt;;
}</pre>
      </div>

      <h3>useDebounce Hook</h3>
      <div class="code-block">
        <pre>function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() =&gt; {
    const timer = setTimeout(() =&gt; {
      setDebouncedValue(value);
    }, delay);

    return () =&gt; clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage - Search with debounce
function SearchInput() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  const { data: results } = useFetch(
    debouncedQuery ? \`/api/search?q=\${debouncedQuery}\` : null
  );

  return (
    &lt;div&gt;
      &lt;input
        value={query}
        onChange={e =&gt; setQuery(e.target.value)}
        placeholder="Search..."
      /&gt;
      {results?.map(item =&gt; (
        &lt;div key={item.id}&gt;{item.name}&lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>useMediaQuery Hook</h3>
      <div class="code-block">
        <pre>function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =&gt; {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() =&gt; {
    const mediaQuery = window.matchMedia(query);

    const handler = (event) =&gt; {
      setMatches(event.matches);
    };

    // Modern browsers
    mediaQuery.addEventListener('change', handler);

    return () =&gt; {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [query]);

  return matches;
}

// Usage
function ResponsiveLayout() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    &lt;div className={isDarkMode ? 'dark' : 'light'}&gt;
      {isMobile ? &lt;MobileNav /&gt; : &lt;DesktopNav /&gt;}
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>useOnClickOutside Hook</h3>
      <div class="code-block">
        <pre>function useOnClickOutside(ref, handler) {
  useEffect(() =&gt; {
    const listener = (event) =&gt; {
      // Do nothing if clicking ref's element or its children
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () =&gt; {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

// Usage
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useOnClickOutside(dropdownRef, () =&gt; setIsOpen(false));

  return (
    &lt;div ref={dropdownRef}&gt;
      &lt;button onClick={() =&gt; setIsOpen(!isOpen)}&gt;Menu&lt;/button&gt;
      {isOpen && (
        &lt;ul className="dropdown-menu"&gt;
          &lt;li&gt;Option 1&lt;/li&gt;
          &lt;li&gt;Option 2&lt;/li&gt;
        &lt;/ul&gt;
      )}
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>useForm Hook</h3>
      <div class="code-block">
        <pre>function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) =&gt; {
    const { name, value, type, checked } = e.target;
    setValues(prev =&gt; ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }, []);

  const handleBlur = useCallback((e) =&gt; {
    const { name } = e.target;
    setTouched(prev =&gt; ({ ...prev, [name]: true }));

    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
    }
  }, [values, validate]);

  const handleSubmit = useCallback((onSubmit) =&gt; async (e) =&gt; {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validate ? validate(values) : {};
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      await onSubmit(values);
    }

    setIsSubmitting(false);
  }, [values, validate]);

  const reset = useCallback(() =&gt; {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  return {
    values, errors, touched, isSubmitting,
    handleChange, handleBlur, handleSubmit, reset
  };
}

// Usage
function LoginForm() {
  const validate = (values) =&gt; {
    const errors = {};
    if (!values.email) errors.email = 'Required';
    if (!values.password) errors.password = 'Required';
    return errors;
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useForm({ email: '', password: '' }, validate);

  return (
    &lt;form onSubmit={handleSubmit(async (data) =&gt; {
      await login(data);
    })}&gt;
      &lt;input
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      /&gt;
      {touched.email && errors.email && &lt;span&gt;{errors.email}&lt;/span&gt;}

      &lt;input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      /&gt;
      {touched.password && errors.password && &lt;span&gt;{errors.password}&lt;/span&gt;}

      &lt;button type="submit"&gt;Login&lt;/button&gt;
    &lt;/form&gt;
  );
}</pre>
      </div>

      <h3>Custom Hook Rules</h3>
      <div class="code-block">
        <pre>// Rule 1: Name must start with "use"
function useMyHook() { }  // Correct
function myHook() { }     // Wrong - not recognized as hook

// Rule 2: Only call hooks at the top level
function useData() {
  // WRONG: Conditional hook
  if (condition) {
    const [state, setState] = useState(); // Don't do this!
  }

  // Correct: Always call hooks
  const [state, setState] = useState();
  // Then use condition for logic
}

// Rule 3: Only call hooks from React functions
function useAuth() {
  // Can call hooks here - it's a custom hook
  const [user, setUser] = useState(null);
}

// Rule 4: Hooks share state logic, not state itself
function ComponentA() {
  const { count } = useCounter(); // Has its own state
}
function ComponentB() {
  const { count } = useCounter(); // Has different state
}</pre>
      </div>
    `,
    questions: [
      {
        id: "54-1",
        type: "mcq",
        question: "What must custom hook names start with?",
        options: [
          "hook",
          "custom",
          "use",
          "react"
        ],
        correctAnswer: "use",
        explanation: "Custom hooks must start with 'use' so React knows to apply hook rules (like checking for hook calls in loops/conditions) to them."
      },
      {
        id: "54-2",
        type: "mcq",
        question: "Do components using the same custom hook share state?",
        options: [
          "Yes, always",
          "Only if they pass the same props",
          "No, each component gets its own state",
          "Only for context-based hooks"
        ],
        correctAnswer: "No, each component gets its own state",
        explanation: "Custom hooks share stateful logic, not state itself. Each component using a hook gets its own independent copy of that state."
      },
      {
        id: "54-3",
        type: "mcq",
        question: "Which is a valid use case for a custom hook?",
        options: [
          "Sharing static utility functions",
          "Extracting reusable stateful logic like form handling",
          "Creating new HTML elements",
          "Defining component styles"
        ],
        correctAnswer: "Extracting reusable stateful logic like form handling",
        explanation: "Custom hooks are for extracting and reusing stateful logic (using useState, useEffect, etc.) across components. Static utilities don't need to be hooks."
      },
      {
        id: "54-4",
        type: "descriptive",
        question: "Design a custom hook called useWindowSize that tracks the browser window dimensions.",
        keywords: ["useState", "useEffect", "resize", "window", "innerWidth", "innerHeight", "cleanup", "listener"],
        explanation: "Use useState to store {width, height}. Use useEffect to add a resize event listener that updates state. Return cleanup function to remove listener. Handle SSR by checking if window exists."
      }
    ]
  },
  {
    id: 55,
    title: "useTransition & Concurrent Features",
    description: "Learn React's concurrent features for responsive UIs with useTransition and useDeferredValue",
    duration: "45 min",
    difficulty: "Advanced",
    month: 3,
    week: 3,
    category: "React Optimization",
    content: `
      <h2>useTransition & Concurrent Features</h2>
      <p>React 18 introduced concurrent features that let you mark some state updates as non-urgent. This keeps your UI responsive even during heavy updates.</p>

      <h3>The Problem: Blocking Updates</h3>
      <div class="code-block">
        <pre>// Without transitions - UI freezes during heavy updates
function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) =&gt; {
    const value = e.target.value;
    setQuery(value); // User sees typing immediately

    // This blocks the UI if results are large!
    const filtered = hugeDataset.filter(item =&gt;
      item.name.includes(value)
    );
    setResults(filtered); // Everything waits for this
  };

  return (
    &lt;div&gt;
      &lt;input onChange={handleSearch} /&gt;
      {/* User's typing feels sluggish */}
      &lt;ResultsList results={results} /&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>useTransition: Mark Updates as Non-Urgent</h3>
      <div class="code-block">
        <pre>import { useState, useTransition } from 'react';

function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) =&gt; {
    const value = e.target.value;
    setQuery(value); // Urgent: update immediately

    // Non-urgent: can be interrupted
    startTransition(() =&gt; {
      const filtered = hugeDataset.filter(item =&gt;
        item.name.includes(value)
      );
      setResults(filtered);
    });
  };

  return (
    &lt;div&gt;
      &lt;input value={query} onChange={handleSearch} /&gt;
      {isPending && &lt;span&gt;Loading...&lt;/span&gt;}
      &lt;ResultsList results={results} /&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>How Transitions Work</h3>
      <div class="code-block">
        <pre>// Transitions tell React: "This update is not urgent"

// User types "abc"
// Without transitions:
//   a → render → b → render → c → render
//   Each render blocks the next keystroke

// With transitions:
//   a → start rendering → b (interrupt!) → start rendering → c
//   React abandons incomplete renders for newer input

const [isPending, startTransition] = useTransition();

// isPending: boolean, true while transition is pending
// startTransition: function to wrap non-urgent updates</pre>
      </div>

      <h3>Tab Switching Example</h3>
      <div class="code-block">
        <pre>function TabContainer() {
  const [tab, setTab] = useState('home');
  const [isPending, startTransition] = useTransition();

  function selectTab(nextTab) {
    startTransition(() =&gt; {
      setTab(nextTab);
    });
  }

  return (
    &lt;div&gt;
      &lt;nav&gt;
        &lt;button
          onClick={() =&gt; selectTab('home')}
          className={tab === 'home' ? 'active' : ''}
        &gt;
          Home
        &lt;/button&gt;
        &lt;button
          onClick={() =&gt; selectTab('posts')}
          className={tab === 'posts' ? 'active' : ''}
        &gt;
          Posts (slow)
        &lt;/button&gt;
      &lt;/nav&gt;

      &lt;div style={{ opacity: isPending ? 0.5 : 1 }}&gt;
        {tab === 'home' && &lt;Home /&gt;}
        {tab === 'posts' && &lt;Posts /&gt;}
      &lt;/div&gt;
    &lt;/div&gt;
  );
}

// Posts component is slow to render
function Posts() {
  const posts = Array(10000).fill(null).map((_, i) =&gt; (
    &lt;SlowPost key={i} index={i} /&gt;
  ));

  return &lt;ul&gt;{posts}&lt;/ul&gt;;
}</pre>
      </div>

      <h3>useDeferredValue: Defer a Value</h3>
      <div class="code-block">
        <pre>import { useState, useDeferredValue } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  // Creates a "deferred" version of the value
  const deferredQuery = useDeferredValue(query);

  // Check if we're showing stale content
  const isStale = query !== deferredQuery;

  return (
    &lt;div&gt;
      &lt;input
        value={query}
        onChange={e =&gt; setQuery(e.target.value)}
      /&gt;
      &lt;div style={{ opacity: isStale ? 0.5 : 1 }}&gt;
        {/* This uses the deferred (possibly stale) value */}
        &lt;SearchResults query={deferredQuery} /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}

// SearchResults will lag behind the input
// but the input stays responsive</pre>
      </div>

      <h3>useTransition vs useDeferredValue</h3>
      <div class="code-block">
        <pre>// useTransition: When YOU control the state update
function MyComponent() {
  const [data, setData] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleClick = () =&gt; {
    startTransition(() =&gt; {
      setData(processLargeArray()); // You control this update
    });
  };
}

// useDeferredValue: When value comes from props or elsewhere
function MyComponent({ externalValue }) {
  // Can't wrap the update - it's external!
  const deferredValue = useDeferredValue(externalValue);

  // Use deferredValue for expensive rendering
  return &lt;ExpensiveComponent value={deferredValue} /&gt;;
}</pre>
      </div>

      <h3>Combining with Suspense</h3>
      <div class="code-block">
        <pre>import { Suspense, useState, useTransition } from 'react';

function App() {
  const [tab, setTab] = useState('home');
  const [isPending, startTransition] = useTransition();

  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; {
        startTransition(() =&gt; {
          setTab('comments');
        });
      }}&gt;
        Comments
      &lt;/button&gt;

      &lt;Suspense fallback={&lt;Spinner /&gt;}&gt;
        {tab === 'home' && &lt;Home /&gt;}
        {tab === 'comments' && &lt;Comments /&gt;}
      &lt;/Suspense&gt;
    &lt;/div&gt;
  );
}

// With transitions, React keeps showing the old tab
// while the new one loads, instead of showing Suspense fallback</pre>
      </div>

      <h3>Optimizing List Rendering</h3>
      <div class="code-block">
        <pre>function FilterableList({ items }) {
  const [filter, setFilter] = useState('');
  const deferredFilter = useDeferredValue(filter);

  // Memoize the filtered list
  const filteredItems = useMemo(() =&gt;
    items.filter(item =&gt;
      item.name.toLowerCase().includes(deferredFilter.toLowerCase())
    ),
    [items, deferredFilter]
  );

  return (
    &lt;div&gt;
      &lt;input
        value={filter}
        onChange={e =&gt; setFilter(e.target.value)}
        placeholder="Filter items..."
      /&gt;
      &lt;ul style={{
        opacity: filter !== deferredFilter ? 0.7 : 1,
        transition: 'opacity 0.2s'
      }}&gt;
        {filteredItems.map(item =&gt; (
          &lt;ListItem key={item.id} item={item} /&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Best Practices</h3>
      <div class="code-block">
        <pre>// 1. Don't wrap everything in transitions
startTransition(() =&gt; {
  setUrgentValue(x);     // DON'T - defeats the purpose
  setNonUrgentValue(y);  // DO - this is appropriate
});

// 2. Show feedback during transitions
{isPending && &lt;LoadingIndicator /&gt;}
// Or dim the old content
&lt;div style={{ opacity: isPending ? 0.7 : 1 }}&gt;

// 3. Combine with memoization
const deferredQuery = useDeferredValue(query);
const results = useMemo(
  () =&gt; filterData(data, deferredQuery),
  [data, deferredQuery]
);

// 4. Don't use for quick updates
// Transitions add overhead; use for genuinely slow updates</pre>
      </div>

      <h3>Real-World Example: Search with Suggestions</h3>
      <div class="code-block">
        <pre>function SearchWithSuggestions() {
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) =&gt; {
    const value = e.target.value;
    setInput(value); // Immediate: keep input responsive

    startTransition(() =&gt; {
      // Non-urgent: filter suggestions
      const matches = allSuggestions.filter(s =&gt;
        s.toLowerCase().startsWith(value.toLowerCase())
      ).slice(0, 10);
      setSuggestions(matches);
    });
  };

  return (
    &lt;div className="search-container"&gt;
      &lt;input
        value={input}
        onChange={handleChange}
        placeholder="Search..."
      /&gt;
      {isPending && &lt;span className="loading"&gt;...&lt;/span&gt;}
      &lt;ul className="suggestions"&gt;
        {suggestions.map(s =&gt; (
          &lt;li key={s} onClick={() =&gt; setInput(s)}&gt;{s}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>
    `,
    questions: [
      {
        id: "55-1",
        type: "mcq",
        question: "What does useTransition allow you to do?",
        options: [
          "Animate between component states",
          "Mark state updates as non-urgent so they can be interrupted",
          "Transition between routes",
          "Handle loading states automatically"
        ],
        correctAnswer: "Mark state updates as non-urgent so they can be interrupted",
        explanation: "useTransition lets you mark certain state updates as transitions (non-urgent), allowing React to interrupt them for more urgent updates like user input."
      },
      {
        id: "55-2",
        type: "mcq",
        question: "When should you use useDeferredValue instead of useTransition?",
        options: [
          "When you need faster updates",
          "When the value comes from props or external state you can't control",
          "When you want to skip rendering",
          "For all state updates"
        ],
        correctAnswer: "When the value comes from props or external state you can't control",
        explanation: "useDeferredValue is for when you can't wrap the state update itself (like props from a parent). useTransition is for when you control the state setter."
      },
      {
        id: "55-3",
        type: "mcq",
        question: "What does the isPending value from useTransition indicate?",
        options: [
          "Whether the component is mounted",
          "Whether there's a pending transition update",
          "Whether data is loading from an API",
          "Whether the user is interacting"
        ],
        correctAnswer: "Whether there's a pending transition update",
        explanation: "isPending is true while React is rendering the transition update in the background. Use it to show loading indicators or dim stale content."
      },
      {
        id: "55-4",
        type: "descriptive",
        question: "Explain how concurrent features improve perceived performance in a search input scenario.",
        keywords: ["interrupt", "urgent", "responsive", "input", "filter", "transition", "deferred"],
        explanation: "Typing is marked as urgent, filtering as non-urgent. React prioritizes showing typed characters immediately. Heavy filtering work happens in background and can be interrupted by new keystrokes. The input stays responsive while results update with slight delay."
      }
    ]
  },
  {
    id: 56,
    title: "Higher-Order Components (HOCs)",
    description: "Learn the HOC pattern for sharing cross-cutting concerns between components",
    duration: "40 min",
    difficulty: "Advanced",
    month: 3,
    week: 4,
    category: "React Patterns",
    content: `
      <h2>Higher-Order Components (HOCs)</h2>
      <p>A Higher-Order Component is a function that takes a component and returns a new component with additional props or behavior. It's a pattern for reusing component logic.</p>

      <h3>What is an HOC?</h3>
      <div class="code-block">
        <pre>// An HOC is a function that takes a component...
const withSomething = (WrappedComponent) =&gt; {
  // ...and returns a new component
  return function EnhancedComponent(props) {
    // Add extra functionality
    const extraProp = useExtraLogic();

    // Render the original with added props
    return &lt;WrappedComponent {...props} extraProp={extraProp} /&gt;;
  };
};

// Usage
const EnhancedButton = withSomething(Button);
&lt;EnhancedButton onClick={handleClick} /&gt;</pre>
      </div>

      <h3>Simple HOC: withLoading</h3>
      <div class="code-block">
        <pre>function withLoading(WrappedComponent) {
  return function WithLoading({ isLoading, ...props }) {
    if (isLoading) {
      return &lt;div className="spinner"&gt;Loading...&lt;/div&gt;;
    }
    return &lt;WrappedComponent {...props} /&gt;;
  };
}

// Usage
const UserListWithLoading = withLoading(UserList);

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    &lt;UserListWithLoading
      isLoading={loading}
      users={users}
    /&gt;
  );
}</pre>
      </div>

      <h3>HOC for Authentication</h3>
      <div class="code-block">
        <pre>function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() =&gt; {
      if (!loading && !user) {
        router.push('/login');
      }
    }, [user, loading, router]);

    if (loading) {
      return &lt;LoadingScreen /&gt;;
    }

    if (!user) {
      return null; // Redirecting...
    }

    return &lt;WrappedComponent {...props} user={user} /&gt;;
  };
}

// Usage
const ProtectedDashboard = withAuth(Dashboard);
const ProtectedSettings = withAuth(Settings);

// In routes
&lt;Route path="/dashboard" component={ProtectedDashboard} /&gt;
&lt;Route path="/settings" component={ProtectedSettings} /&gt;</pre>
      </div>

      <h3>HOC with Configuration</h3>
      <div class="code-block">
        <pre>// HOC factory - returns an HOC based on config
function withTheme(theme) {
  return function(WrappedComponent) {
    return function WithTheme(props) {
      const themeStyles = themes[theme];

      return (
        &lt;div style={themeStyles}&gt;
          &lt;WrappedComponent {...props} theme={theme} /&gt;
        &lt;/div&gt;
      );
    };
  };
}

// Usage
const DarkCard = withTheme('dark')(Card);
const LightCard = withTheme('light')(Card);

// Or with compose
const DarkAuthenticatedCard = compose(
  withTheme('dark'),
  withAuth
)(Card);</pre>
      </div>

      <h3>HOC for Data Fetching</h3>
      <div class="code-block">
        <pre>function withData(fetchFn, propName = 'data') {
  return function(WrappedComponent) {
    return function WithData(props) {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() =&gt; {
        let cancelled = false;

        async function loadData() {
          try {
            const result = await fetchFn(props);
            if (!cancelled) {
              setData(result);
              setLoading(false);
            }
          } catch (err) {
            if (!cancelled) {
              setError(err);
              setLoading(false);
            }
          }
        }

        loadData();

        return () =&gt; { cancelled = true; };
      }, []);

      if (loading) return &lt;Spinner /&gt;;
      if (error) return &lt;Error message={error.message} /&gt;;

      return &lt;WrappedComponent {...props} {...{ [propName]: data }} /&gt;;
    };
  };
}

// Usage
const UserProfileWithData = withData(
  (props) =&gt; api.getUser(props.userId),
  'user'
)(UserProfile);

&lt;UserProfileWithData userId={123} /&gt;</pre>
      </div>

      <h3>Composing Multiple HOCs</h3>
      <div class="code-block">
        <pre>// Manually nesting HOCs
const Enhanced = withAuth(withTheme(withLogging(MyComponent)));

// Using compose (from lodash, redux, or custom)
const compose = (...fns) =&gt;
  fns.reduce((f, g) =&gt; (...args) =&gt; f(g(...args)));

const Enhanced = compose(
  withAuth,
  withTheme,
  withLogging
)(MyComponent);

// Applied right-to-left:
// 1. withLogging wraps MyComponent
// 2. withTheme wraps result
// 3. withAuth wraps result</pre>
      </div>

      <h3>HOC Best Practices</h3>
      <div class="code-block">
        <pre>// 1. Set displayName for debugging
function withLogger(WrappedComponent) {
  function WithLogger(props) {
    useEffect(() =&gt; console.log('Rendered', props));
    return &lt;WrappedComponent {...props} /&gt;;
  }

  WithLogger.displayName = \`WithLogger(\${
    WrappedComponent.displayName || WrappedComponent.name
  })\`;

  return WithLogger;
}

// 2. Pass through all props
function withHOC(WrappedComponent) {
  return function(props) {
    return &lt;WrappedComponent {...props} /&gt;; // Spread all props
  };
}

// 3. Don't mutate the original component
function withHOC(WrappedComponent) {
  // BAD: Mutating
  WrappedComponent.prototype.newMethod = () =&gt; {};

  // GOOD: Wrap instead
  return function(props) {
    return &lt;WrappedComponent {...props} /&gt;;
  };
}

// 4. Copy static methods
import hoistNonReactStatics from 'hoist-non-react-statics';

function withHOC(WrappedComponent) {
  function Enhanced(props) { /* ... */ }
  hoistNonReactStatics(Enhanced, WrappedComponent);
  return Enhanced;
}</pre>
      </div>

      <h3>HOCs vs Hooks</h3>
      <div class="code-block">
        <pre>// HOC approach
const withWindowSize = (WrappedComponent) =&gt; {
  return function(props) {
    const [size, setSize] = useState(getWindowSize());

    useEffect(() =&gt; {
      const handleResize = () =&gt; setSize(getWindowSize());
      window.addEventListener('resize', handleResize);
      return () =&gt; window.removeEventListener('resize', handleResize);
    }, []);

    return &lt;WrappedComponent {...props} windowSize={size} /&gt;;
  };
};

const ResponsiveComponent = withWindowSize(MyComponent);

// Hook approach (preferred in modern React)
function useWindowSize() {
  const [size, setSize] = useState(getWindowSize());

  useEffect(() =&gt; {
    const handleResize = () =&gt; setSize(getWindowSize());
    window.addEventListener('resize', handleResize);
    return () =&gt; window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

function MyComponent() {
  const windowSize = useWindowSize(); // More flexible
  return &lt;div&gt;{windowSize.width}&lt;/div&gt;;
}</pre>
      </div>

      <h3>When to Use HOCs</h3>
      <div class="code-block">
        <pre>// Use HOCs for:
// - Cross-cutting concerns (auth, logging, error boundaries)
// - Wrapping third-party components you can't modify
// - Adding behavior to class components

// Use Hooks for:
// - Most new code in functional components
// - When you need more flexibility
// - When composition is complex

// Modern approach: Combine both
function withErrorBoundary(WrappedComponent, FallbackComponent) {
  return class extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    render() {
      if (this.state.hasError) {
        return &lt;FallbackComponent /&gt;;
      }
      return &lt;WrappedComponent {...this.props} /&gt;;
    }
  };
}
// Error boundaries still need class components!</pre>
      </div>
    `,
    questions: [
      {
        id: "56-1",
        type: "mcq",
        question: "What is a Higher-Order Component (HOC)?",
        options: [
          "A component that renders at the top of the tree",
          "A function that takes a component and returns a new enhanced component",
          "A component with more than 100 lines of code",
          "A class component that extends another component"
        ],
        correctAnswer: "A function that takes a component and returns a new enhanced component",
        explanation: "An HOC is a function that takes a component as input and returns a new component with additional props, state, or behavior."
      },
      {
        id: "56-2",
        type: "mcq",
        question: "Why should you set displayName on HOC wrapper components?",
        options: [
          "It's required by React",
          "For better debugging and DevTools experience",
          "To improve performance",
          "To enable prop validation"
        ],
        correctAnswer: "For better debugging and DevTools experience",
        explanation: "Setting displayName helps identify wrapped components in React DevTools and error messages, making debugging much easier."
      },
      {
        id: "56-3",
        type: "mcq",
        question: "In modern React, what is generally preferred over HOCs?",
        options: [
          "Render props",
          "Custom hooks",
          "Class components",
          "Context API"
        ],
        correctAnswer: "Custom hooks",
        explanation: "Custom hooks provide similar functionality to HOCs but with more flexibility, better composition, and no wrapper component overhead. They're the preferred pattern for most use cases in modern React."
      },
      {
        id: "56-4",
        type: "descriptive",
        question: "Explain the compose pattern for combining multiple HOCs and why order matters.",
        keywords: ["right-to-left", "wrap", "inner", "outer", "order", "nested", "function"],
        explanation: "Compose applies HOCs right-to-left, so compose(A, B, C)(Component) equals A(B(C(Component))). The rightmost HOC is closest to the component. Order matters because outer HOCs receive props from inner ones and can override them."
      }
    ]
  },
  {
    id: 57,
    title: "Render Props Pattern",
    description: "Share code between components using a prop whose value is a function",
    duration: "40 min",
    difficulty: "Advanced",
    month: 3,
    week: 4,
    category: "React Patterns",
    content: `
      <h2>Render Props Pattern</h2>
      <p>Render props is a technique for sharing code between React components using a prop whose value is a function. The component calls this function to determine what to render.</p>

      <h3>Basic Render Prop</h3>
      <div class="code-block">
        <pre>// Component with render prop
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() =&gt; {
    const handleMouseMove = (e) =&gt; {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () =&gt; window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Call the render function with state
  return render(position);
}

// Usage - you decide what to render!
function App() {
  return (
    &lt;MouseTracker
      render={({ x, y }) =&gt; (
        &lt;div&gt;
          Mouse position: {x}, {y}
        &lt;/div&gt;
      )}
    /&gt;
  );
}</pre>
      </div>

      <h3>Children as Render Prop</h3>
      <div class="code-block">
        <pre>// Using children as the render function
function MouseTracker({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() =&gt; {
    const handleMouseMove = (e) =&gt; {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () =&gt; window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return children(position);
}

// Usage - cleaner syntax
function App() {
  return (
    &lt;MouseTracker&gt;
      {({ x, y }) =&gt; (
        &lt;h1&gt;The mouse is at ({x}, {y})&lt;/h1&gt;
      )}
    &lt;/MouseTracker&gt;
  );
}</pre>
      </div>

      <h3>Toggle Component</h3>
      <div class="code-block">
        <pre>function Toggle({ children, initialOn = false }) {
  const [on, setOn] = useState(initialOn);

  const toggle = useCallback(() =&gt; setOn(prev =&gt; !prev), []);
  const setOnTrue = useCallback(() =&gt; setOn(true), []);
  const setOnFalse = useCallback(() =&gt; setOn(false), []);

  return children({
    on,
    toggle,
    setOn: setOnTrue,
    setOff: setOnFalse
  });
}

// Usage
function App() {
  return (
    &lt;Toggle initialOn={false}&gt;
      {({ on, toggle }) =&gt; (
        &lt;div&gt;
          &lt;button onClick={toggle}&gt;
            {on ? 'ON' : 'OFF'}
          &lt;/button&gt;
          {on && &lt;p&gt;Content is visible!&lt;/p&gt;}
        &lt;/div&gt;
      )}
    &lt;/Toggle&gt;
  );
}</pre>
      </div>

      <h3>Fetch Component</h3>
      <div class="code-block">
        <pre>function Fetch({ url, children }) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() =&gt; {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setState(s =&gt; ({ ...s, loading: true, error: null }));
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(\`HTTP \${response.status}\`);
        }

        const data = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        if (error.name !== 'AbortError') {
          setState({ data: null, loading: false, error });
        }
      }
    }

    fetchData();

    return () =&gt; controller.abort();
  }, [url]);

  return children(state);
}

// Usage
function UserProfile({ userId }) {
  return (
    &lt;Fetch url={\`/api/users/\${userId}\`}&gt;
      {({ data, loading, error }) =&gt; {
        if (loading) return &lt;Spinner /&gt;;
        if (error) return &lt;Error message={error.message} /&gt;;
        return (
          &lt;div&gt;
            &lt;h1&gt;{data.name}&lt;/h1&gt;
            &lt;p&gt;{data.email}&lt;/p&gt;
          &lt;/div&gt;
        );
      }}
    &lt;/Fetch&gt;
  );
}</pre>
      </div>

      <h3>Form Controller</h3>
      <div class="code-block">
        <pre>function Form({ initialValues, onSubmit, children }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name) =&gt; (e) =&gt; {
    const value = e.target.type === 'checkbox'
      ? e.target.checked
      : e.target.value;
    setValues(prev =&gt; ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) =&gt; {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } catch (err) {
      setErrors({ submit: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return children({
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  });
}

// Usage
function LoginPage() {
  return (
    &lt;Form
      initialValues={{ email: '', password: '' }}
      onSubmit={async (values) =&gt; await api.login(values)}
    &gt;
      {({ values, handleChange, handleSubmit, isSubmitting }) =&gt; (
        &lt;form onSubmit={handleSubmit}&gt;
          &lt;input
            name="email"
            value={values.email}
            onChange={handleChange('email')}
          /&gt;
          &lt;input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange('password')}
          /&gt;
          &lt;button disabled={isSubmitting}&gt;
            {isSubmitting ? 'Logging in...' : 'Login'}
          &lt;/button&gt;
        &lt;/form&gt;
      )}
    &lt;/Form&gt;
  );
}</pre>
      </div>

      <h3>Window Size Tracker</h3>
      <div class="code-block">
        <pre>function WindowSize({ children }) {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() =&gt; {
    const handleResize = () =&gt; {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () =&gt; window.removeEventListener('resize', handleResize);
  }, []);

  return children(size);
}

// Usage
function ResponsiveComponent() {
  return (
    &lt;WindowSize&gt;
      {({ width, height }) =&gt; (
        &lt;div&gt;
          {width &lt; 768 ? (
            &lt;MobileLayout /&gt;
          ) : (
            &lt;DesktopLayout /&gt;
          )}
          &lt;p&gt;Window: {width}x{height}&lt;/p&gt;
        &lt;/div&gt;
      )}
    &lt;/WindowSize&gt;
  );
}</pre>
      </div>

      <h3>Combining Render Props</h3>
      <div class="code-block">
        <pre>function App() {
  return (
    &lt;MouseTracker&gt;
      {(mouse) =&gt; (
        &lt;Toggle&gt;
          {({ on, toggle }) =&gt; (
            &lt;WindowSize&gt;
              {(size) =&gt; (
                &lt;div&gt;
                  &lt;p&gt;Mouse: {mouse.x}, {mouse.y}&lt;/p&gt;
                  &lt;p&gt;Window: {size.width}x{size.height}&lt;/p&gt;
                  &lt;button onClick={toggle}&gt;
                    {on ? 'Hide' : 'Show'}
                  &lt;/button&gt;
                  {on && &lt;Content /&gt;}
                &lt;/div&gt;
              )}
            &lt;/WindowSize&gt;
          )}
        &lt;/Toggle&gt;
      )}
    &lt;/MouseTracker&gt;
  );
}
// This nesting gets unwieldy - hooks solve this!</pre>
      </div>

      <h3>Render Props vs Hooks</h3>
      <div class="code-block">
        <pre>// Render Props (older pattern)
function App() {
  return (
    &lt;MouseTracker&gt;
      {(mouse) =&gt; (
        &lt;Toggle&gt;
          {({ on, toggle }) =&gt; (
            // Callback hell!
          )}
        &lt;/Toggle&gt;
      )}
    &lt;/MouseTracker&gt;
  );
}

// Hooks (modern, preferred)
function App() {
  const mouse = useMouse();
  const { on, toggle } = useToggle();

  // Flat and readable!
  return (
    &lt;div&gt;
      &lt;p&gt;Mouse: {mouse.x}, {mouse.y}&lt;/p&gt;
      &lt;button onClick={toggle}&gt;{on ? 'ON' : 'OFF'}&lt;/button&gt;
    &lt;/div&gt;
  );
}

// When render props are still useful:
// - Third-party libraries that use them
// - When you need to pass render logic to a component
// - Animation libraries (Framer Motion, React Spring)</pre>
      </div>

      <h3>Real-World Example: Virtualized List</h3>
      <div class="code-block">
        <pre>// Render props for customizable virtualized list
function VirtualizedList({
  items,
  itemHeight,
  containerHeight,
  children
}) {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  );

  const visibleItems = items.slice(startIndex, endIndex);
  const offsetY = startIndex * itemHeight;

  return (
    &lt;div
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={(e) =&gt; setScrollTop(e.target.scrollTop)}
    &gt;
      &lt;div style={{ height: items.length * itemHeight }}&gt;
        &lt;div style={{ transform: \`translateY(\${offsetY}px)\` }}&gt;
          {visibleItems.map((item, index) =&gt;
            children(item, startIndex + index)
          )}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}

// Usage - you control how each item renders
&lt;VirtualizedList
  items={bigList}
  itemHeight={50}
  containerHeight={400}
&gt;
  {(item, index) =&gt; (
    &lt;div key={index} style={{ height: 50 }}&gt;
      {item.name}
    &lt;/div&gt;
  )}
&lt;/VirtualizedList&gt;</pre>
      </div>
    `,
    questions: [
      {
        id: "57-1",
        type: "mcq",
        question: "What is a render prop?",
        options: [
          "A prop that renders the component",
          "A prop whose value is a function that returns React elements",
          "A special React internal prop",
          "A prop that controls rendering order"
        ],
        correctAnswer: "A prop whose value is a function that returns React elements",
        explanation: "A render prop is a function passed as a prop that the component calls to determine what to render, giving the consumer control over the rendered output."
      },
      {
        id: "57-2",
        type: "mcq",
        question: "What is a common drawback of render props when combining multiple components?",
        options: [
          "Poor performance",
          "Memory leaks",
          "Callback nesting (callback hell)",
          "Type safety issues"
        ],
        correctAnswer: "Callback nesting (callback hell)",
        explanation: "When combining multiple render prop components, you get deeply nested callbacks which become hard to read and maintain. Custom hooks solve this problem."
      },
      {
        id: "57-3",
        type: "mcq",
        question: "Which syntax is equivalent to a named render prop?",
        options: [
          "Using className prop",
          "Using children as a function",
          "Using ref prop",
          "Using key prop"
        ],
        correctAnswer: "Using children as a function",
        explanation: "Instead of a named render prop like 'render', you can pass a function as children and call props.children() to achieve the same result with cleaner syntax."
      },
      {
        id: "57-4",
        type: "descriptive",
        question: "Compare render props to custom hooks and explain when you might still prefer render props.",
        keywords: ["flexibility", "nesting", "hooks", "third-party", "animation", "callback", "library"],
        explanation: "Hooks provide flatter, more readable code but render props offer flexibility for cases like third-party libraries, animation libraries, and when you need to pass render logic as a prop. Render props work in class components while hooks don't."
      }
    ]
  },
  {
    id: 58,
    title: "State Management with Zustand",
    description: "Learn lightweight global state management with Zustand",
    duration: "45 min",
    difficulty: "Advanced",
    month: 3,
    week: 4,
    category: "React State",
    content: `
      <h2>State Management with Zustand</h2>
      <p>Zustand is a small, fast, and scalable state management solution. It's simpler than Redux, more flexible than Context, and works great with React.</p>

      <h3>Why Zustand?</h3>
      <ul>
        <li><strong>Simple API:</strong> No providers, reducers, or actions</li>
        <li><strong>Small Bundle:</strong> ~1KB gzipped</li>
        <li><strong>No Boilerplate:</strong> Just define state and actions</li>
        <li><strong>TypeScript Ready:</strong> Great type inference</li>
        <li><strong>DevTools Support:</strong> Works with Redux DevTools</li>
      </ul>

      <h3>Installation</h3>
      <div class="code-block">
        <pre>npm install zustand</pre>
      </div>

      <h3>Creating a Store</h3>
      <div class="code-block">
        <pre>import { create } from 'zustand';

// Create a store with state and actions
const useStore = create((set) =&gt; ({
  // State
  count: 0,

  // Actions
  increment: () =&gt; set((state) =&gt; ({ count: state.count + 1 })),
  decrement: () =&gt; set((state) =&gt; ({ count: state.count - 1 })),
  reset: () =&gt; set({ count: 0 }),
}));

// Use in components
function Counter() {
  const count = useStore((state) =&gt; state.count);
  const increment = useStore((state) =&gt; state.increment);

  return (
    &lt;button onClick={increment}&gt;
      Count: {count}
    &lt;/button&gt;
  );
}</pre>
      </div>

      <h3>Selecting State (Avoiding Re-renders)</h3>
      <div class="code-block">
        <pre>const useStore = create((set) =&gt; ({
  user: { name: 'Alice', email: 'alice@example.com' },
  posts: [],
  updateEmail: (email) =&gt; set((state) =&gt; ({
    user: { ...state.user, email }
  })),
}));

// BAD: Re-renders when ANY state changes
function Profile() {
  const store = useStore(); // Subscribes to everything!
  return &lt;div&gt;{store.user.name}&lt;/div&gt;;
}

// GOOD: Only re-renders when user.name changes
function Profile() {
  const name = useStore((state) =&gt; state.user.name);
  return &lt;div&gt;{name}&lt;/div&gt;;
}

// GOOD: Select multiple values
function UserInfo() {
  const { name, email } = useStore(
    (state) =&gt; ({ name: state.user.name, email: state.user.email }),
    // Shallow compare for object selectors
    shallow
  );
  return &lt;div&gt;{name} - {email}&lt;/div&gt;;
}</pre>
      </div>

      <h3>Todo Store Example</h3>
      <div class="code-block">
        <pre>import { create } from 'zustand';

const useTodoStore = create((set, get) =&gt; ({
  todos: [],
  filter: 'all',

  addTodo: (text) =&gt; set((state) =&gt; ({
    todos: [
      ...state.todos,
      { id: Date.now(), text, completed: false }
    ]
  })),

  toggleTodo: (id) =&gt; set((state) =&gt; ({
    todos: state.todos.map((todo) =&gt;
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),

  deleteTodo: (id) =&gt; set((state) =&gt; ({
    todos: state.todos.filter((todo) =&gt; todo.id !== id)
  })),

  setFilter: (filter) =&gt; set({ filter }),

  // Derived state using get()
  getFilteredTodos: () =&gt; {
    const { todos, filter } = get();
    if (filter === 'active') return todos.filter((t) =&gt; !t.completed);
    if (filter === 'completed') return todos.filter((t) =&gt; t.completed);
    return todos;
  },
}));

// Component usage
function TodoList() {
  const todos = useTodoStore((state) =&gt; state.getFilteredTodos());
  const toggleTodo = useTodoStore((state) =&gt; state.toggleTodo);

  return (
    &lt;ul&gt;
      {todos.map((todo) =&gt; (
        &lt;li key={todo.id} onClick={() =&gt; toggleTodo(todo.id)}&gt;
          {todo.completed ? '✓' : '○'} {todo.text}
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</pre>
      </div>

      <h3>Async Actions</h3>
      <div class="code-block">
        <pre>const useUserStore = create((set, get) =&gt; ({
  user: null,
  isLoading: false,
  error: null,

  fetchUser: async (userId) =&gt; {
    set({ isLoading: true, error: null });

    try {
      const response = await fetch(\`/api/users/\${userId}\`);
      const user = await response.json();
      set({ user, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  updateUser: async (updates) =&gt; {
    const { user } = get();
    if (!user) return;

    set({ isLoading: true });

    try {
      const response = await fetch(\`/api/users/\${user.id}\`, {
        method: 'PATCH',
        body: JSON.stringify(updates),
      });
      const updatedUser = await response.json();
      set({ user: updatedUser, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  logout: () =&gt; set({ user: null }),
}));</pre>
      </div>

      <h3>TypeScript Support</h3>
      <div class="code-block">
        <pre>import { create } from 'zustand';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  addTodo: (text: string) =&gt; void;
  toggleTodo: (id: number) =&gt; void;
  deleteTodo: (id: number) =&gt; void;
}

const useTodoStore = create&lt;TodoState&gt;((set) =&gt; ({
  todos: [],

  addTodo: (text) =&gt; set((state) =&gt; ({
    todos: [...state.todos, {
      id: Date.now(),
      text,
      completed: false,
    }],
  })),

  toggleTodo: (id) =&gt; set((state) =&gt; ({
    todos: state.todos.map((todo) =&gt;
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  })),

  deleteTodo: (id) =&gt; set((state) =&gt; ({
    todos: state.todos.filter((todo) =&gt; todo.id !== id),
  })),
}));</pre>
      </div>

      <h3>Middleware: Persist</h3>
      <div class="code-block">
        <pre>import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useSettingsStore = create(
  persist(
    (set) =&gt; ({
      theme: 'light',
      fontSize: 16,
      setTheme: (theme) =&gt; set({ theme }),
      setFontSize: (fontSize) =&gt; set({ fontSize }),
    }),
    {
      name: 'settings-storage', // localStorage key
      // Optional: customize storage
      // storage: createJSONStorage(() =&gt; sessionStorage),
    }
  )
);

// State automatically saves to and loads from localStorage!</pre>
      </div>

      <h3>Middleware: DevTools</h3>
      <div class="code-block">
        <pre>import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(
  devtools(
    (set) =&gt; ({
      count: 0,
      increment: () =&gt; set(
        (state) =&gt; ({ count: state.count + 1 }),
        false,
        'increment' // Action name for DevTools
      ),
    }),
    { name: 'MyStore' } // Store name in DevTools
  )
);

// Open Redux DevTools to see state changes!</pre>
      </div>

      <h3>Slices Pattern (Large Stores)</h3>
      <div class="code-block">
        <pre>// userSlice.js
const createUserSlice = (set) =&gt; ({
  user: null,
  setUser: (user) =&gt; set({ user }),
  logout: () =&gt; set({ user: null }),
});

// cartSlice.js
const createCartSlice = (set) =&gt; ({
  items: [],
  addItem: (item) =&gt; set((state) =&gt; ({
    items: [...state.items, item],
  })),
  clearCart: () =&gt; set({ items: [] }),
});

// store.js - Combine slices
import { create } from 'zustand';

const useStore = create((...args) =&gt; ({
  ...createUserSlice(...args),
  ...createCartSlice(...args),
}));

// Use anywhere
const user = useStore((state) =&gt; state.user);
const addItem = useStore((state) =&gt; state.addItem);</pre>
      </div>

      <h3>Zustand vs Redux vs Context</h3>
      <div class="code-block">
        <pre>// Context: Good for small apps, themes, auth
// - Re-renders all consumers on change
// - No middleware support
// - Built into React

// Redux: Good for large, complex apps
// - Powerful middleware ecosystem
// - Time-travel debugging
// - More boilerplate

// Zustand: Good for most apps
// - Minimal boilerplate
// - Great performance (selective subscriptions)
// - Middleware support
// - Works outside React

// Choose Zustand when:
// - You want simplicity without boilerplate
// - You need better performance than Context
// - You don't need Redux's full ecosystem</pre>
      </div>
    `,
    questions: [
      {
        id: "58-1",
        type: "mcq",
        question: "What is a key advantage of Zustand over React Context?",
        options: [
          "It's built into React",
          "Components only re-render when their selected state changes",
          "It requires less initial setup",
          "It has more features"
        ],
        correctAnswer: "Components only re-render when their selected state changes",
        explanation: "Zustand allows selective subscriptions - components only re-render when the specific state they select changes, unlike Context which re-renders all consumers on any change."
      },
      {
        id: "58-2",
        type: "mcq",
        question: "How do you access derived/computed state in Zustand?",
        options: [
          "Using useSelector hook",
          "Using the get() function inside store actions",
          "Using useMemo in components",
          "Using computed property syntax"
        ],
        correctAnswer: "Using the get() function inside store actions",
        explanation: "The get() function gives access to current state inside actions, allowing you to compute derived values based on the latest state."
      },
      {
        id: "58-3",
        type: "mcq",
        question: "What does the persist middleware do?",
        options: [
          "Prevents state from changing",
          "Saves state to localStorage and restores it on reload",
          "Makes state immutable",
          "Adds validation to state updates"
        ],
        correctAnswer: "Saves state to localStorage and restores it on reload",
        explanation: "The persist middleware automatically saves your store state to localStorage (or other storage) and rehydrates it when the app loads."
      },
      {
        id: "58-4",
        type: "descriptive",
        question: "Explain how to properly select state from a Zustand store to prevent unnecessary re-renders.",
        keywords: ["selector", "subscribe", "shallow", "specific", "re-render", "state"],
        explanation: "Pass a selector function to useStore that returns only the needed state slice. For object selectors, use the shallow equality function as second argument. This ensures components only re-render when their specific state changes."
      }
    ]
  },
  {
    id: 59,
    title: "React Testing Basics",
    description: "Learn to test React components with Jest and React Testing Library",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 3,
    week: 4,
    category: "React Testing",
    content: `
      <h2>React Testing Basics</h2>
      <p>Testing ensures your components work correctly and helps prevent regressions. We'll use Jest as the test runner and React Testing Library for rendering components.</p>

      <h3>Setting Up</h3>
      <div class="code-block">
        <pre># With Create React App or Vite
npm install --save-dev @testing-library/react @testing-library/jest-dom

# Run tests
npm test</pre>
      </div>

      <h3>Your First Test</h3>
      <div class="code-block">
        <pre>// Button.jsx
function Button({ onClick, children }) {
  return (
    &lt;button onClick={onClick}&gt;
      {children}
    &lt;/button&gt;
  );
}

// Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with text', () =&gt; {
  render(&lt;Button&gt;Click me&lt;/Button&gt;);

  const button = screen.getByText('Click me');
  expect(button).toBeInTheDocument();
});

test('calls onClick when clicked', () =&gt; {
  const handleClick = jest.fn();
  render(&lt;Button onClick={handleClick}&gt;Click me&lt;/Button&gt;);

  fireEvent.click(screen.getByText('Click me'));

  expect(handleClick).toHaveBeenCalledTimes(1);
});</pre>
      </div>

      <h3>Finding Elements</h3>
      <div class="code-block">
        <pre>// Priority order (most to least preferred):
// 1. getByRole - accessible by everyone
screen.getByRole('button', { name: /submit/i });
screen.getByRole('textbox', { name: /email/i });
screen.getByRole('heading', { level: 1 });

// 2. getByLabelText - for form fields
screen.getByLabelText('Email');

// 3. getByPlaceholderText
screen.getByPlaceholderText('Enter email');

// 4. getByText - for non-interactive elements
screen.getByText('Welcome');
screen.getByText(/welcome/i); // Case insensitive regex

// 5. getByTestId - last resort
screen.getByTestId('custom-element');
// In component: &lt;div data-testid="custom-element"&gt;</pre>
      </div>

      <h3>Query Variants</h3>
      <div class="code-block">
        <pre>// getBy* - throws if not found (synchronous)
const button = screen.getByText('Submit');

// queryBy* - returns null if not found
const button = screen.queryByText('Submit');
if (button) { /* exists */ }

// findBy* - returns Promise, waits for element (async)
const button = await screen.findByText('Submit');

// *AllBy* - returns array of elements
const items = screen.getAllByRole('listitem');
expect(items).toHaveLength(3);</pre>
      </div>

      <h3>Testing User Interactions</h3>
      <div class="code-block">
        <pre>import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// userEvent is preferred over fireEvent
test('typing in input', async () =&gt; {
  const user = userEvent.setup();
  render(&lt;Input /&gt;);

  const input = screen.getByRole('textbox');
  await user.type(input, 'Hello World');

  expect(input).toHaveValue('Hello World');
});

test('clicking button', async () =&gt; {
  const user = userEvent.setup();
  const handleClick = jest.fn();
  render(&lt;Button onClick={handleClick}&gt;Click&lt;/Button&gt;);

  await user.click(screen.getByRole('button'));

  expect(handleClick).toHaveBeenCalled();
});

test('selecting option', async () =&gt; {
  const user = userEvent.setup();
  render(&lt;Select options={['A', 'B', 'C']} /&gt;);

  await user.selectOptions(
    screen.getByRole('combobox'),
    'B'
  );

  expect(screen.getByRole('option', { name: 'B' })).toBeSelected();
});</pre>
      </div>

      <h3>Testing Async Components</h3>
      <div class="code-block">
        <pre>// UserProfile.jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =&gt; {
    fetch(\`/api/users/\${userId}\`)
      .then(res =&gt; res.json())
      .then(data =&gt; {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return &lt;div&gt;Loading...&lt;/div&gt;;
  return &lt;div&gt;{user.name}&lt;/div&gt;;
}

// UserProfile.test.jsx
import { render, screen, waitFor } from '@testing-library/react';

// Mock the fetch
beforeEach(() =&gt; {
  global.fetch = jest.fn(() =&gt;
    Promise.resolve({
      json: () =&gt; Promise.resolve({ name: 'Alice' })
    })
  );
});

test('displays user name after loading', async () =&gt; {
  render(&lt;UserProfile userId={1} /&gt;);

  // Initially shows loading
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Wait for user to appear
  await screen.findByText('Alice');

  // Loading should be gone
  expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
});</pre>
      </div>

      <h3>Testing Forms</h3>
      <div class="code-block">
        <pre>// LoginForm.jsx
function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;label&gt;
        Email
        &lt;input
          type="email"
          value={email}
          onChange={(e) =&gt; setEmail(e.target.value)}
        /&gt;
      &lt;/label&gt;
      &lt;label&gt;
        Password
        &lt;input
          type="password"
          value={password}
          onChange={(e) =&gt; setPassword(e.target.value)}
        /&gt;
      &lt;/label&gt;
      &lt;button type="submit"&gt;Login&lt;/button&gt;
    &lt;/form&gt;
  );
}

// LoginForm.test.jsx
test('submits form with email and password', async () =&gt; {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();

  render(&lt;LoginForm onSubmit={handleSubmit} /&gt;);

  await user.type(
    screen.getByLabelText('Email'),
    'test@example.com'
  );
  await user.type(
    screen.getByLabelText('Password'),
    'password123'
  );
  await user.click(screen.getByRole('button', { name: 'Login' }));

  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123'
  });
});</pre>
      </div>

      <h3>Testing with Context</h3>
      <div class="code-block">
        <pre>// Create a custom render with providers
import { render } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import { UserProvider } from './UserContext';

function AllProviders({ children }) {
  return (
    &lt;ThemeProvider&gt;
      &lt;UserProvider&gt;
        {children}
      &lt;/UserProvider&gt;
    &lt;/ThemeProvider&gt;
  );
}

const customRender = (ui, options) =&gt;
  render(ui, { wrapper: AllProviders, ...options });

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };

// In tests
import { render, screen } from './test-utils';

test('uses theme from context', () =&gt; {
  render(&lt;ThemedButton /&gt;);
  // Component has access to context
});</pre>
      </div>

      <h3>Mocking Components and Modules</h3>
      <div class="code-block">
        <pre>// Mock a child component
jest.mock('./HeavyChart', () =&gt; {
  return function MockChart({ data }) {
    return &lt;div data-testid="mock-chart"&gt;{data.length} items&lt;/div&gt;;
  };
});

// Mock a module
jest.mock('axios', () =&gt; ({
  get: jest.fn(() =&gt; Promise.resolve({ data: { id: 1, name: 'Test' } })),
  post: jest.fn(() =&gt; Promise.resolve({ data: { success: true } })),
}));

// Mock hooks
jest.mock('./useAuth', () =&gt; ({
  useAuth: () =&gt; ({
    user: { id: 1, name: 'Test User' },
    isAuthenticated: true,
    login: jest.fn(),
    logout: jest.fn(),
  }),
}));</pre>
      </div>

      <h3>Common Assertions</h3>
      <div class="code-block">
        <pre>// Element presence
expect(element).toBeInTheDocument();
expect(element).not.toBeInTheDocument();

// Element visibility
expect(element).toBeVisible();
expect(element).toBeDisabled();
expect(element).toBeEnabled();

// Element content
expect(element).toHaveTextContent('Hello');
expect(element).toHaveValue('input value');
expect(element).toBeChecked();

// Element attributes
expect(element).toHaveAttribute('href', '/home');
expect(element).toHaveClass('active');
expect(element).toHaveStyle({ color: 'red' });

// Array length
expect(screen.getAllByRole('listitem')).toHaveLength(3);</pre>
      </div>

      <h3>Test Organization</h3>
      <div class="code-block">
        <pre>describe('Counter', () =&gt; {
  // Run before each test
  beforeEach(() =&gt; {
    render(&lt;Counter /&gt;);
  });

  it('starts at 0', () =&gt; {
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  describe('when increment is clicked', () =&gt; {
    beforeEach(async () =&gt; {
      await userEvent.click(screen.getByText('+'));
    });

    it('increases count by 1', () =&gt; {
      expect(screen.getByText('Count: 1')).toBeInTheDocument();
    });
  });

  describe('when decrement is clicked', () =&gt; {
    it('decreases count by 1', async () =&gt; {
      await userEvent.click(screen.getByText('-'));
      expect(screen.getByText('Count: -1')).toBeInTheDocument();
    });
  });
});</pre>
      </div>
    `,
    questions: [
      {
        id: "59-1",
        type: "mcq",
        question: "What is the preferred way to find elements in React Testing Library?",
        options: [
          "getByTestId",
          "querySelector",
          "getByRole",
          "getElementById"
        ],
        correctAnswer: "getByRole",
        explanation: "getByRole is preferred because it queries elements the way assistive technology does, encouraging accessible markup and testing user-facing behavior."
      },
      {
        id: "59-2",
        type: "mcq",
        question: "What's the difference between getBy, queryBy, and findBy?",
        options: [
          "They're all the same",
          "getBy throws if not found, queryBy returns null, findBy is async",
          "getBy is faster than the others",
          "findBy is for multiple elements"
        ],
        correctAnswer: "getBy throws if not found, queryBy returns null, findBy is async",
        explanation: "getBy throws an error if not found (for elements that must exist), queryBy returns null (for testing absence), and findBy returns a Promise (for async elements)."
      },
      {
        id: "59-3",
        type: "mcq",
        question: "Why is userEvent preferred over fireEvent?",
        options: [
          "It's faster",
          "It simulates real user behavior more accurately",
          "It works in all browsers",
          "It's built into Jest"
        ],
        correctAnswer: "It simulates real user behavior more accurately",
        explanation: "userEvent simulates full user interaction sequences (focus, keydown, keyup, etc.) rather than just dispatching a single event, making tests more realistic."
      },
      {
        id: "59-4",
        type: "descriptive",
        question: "Explain how to test an async component that fetches data on mount.",
        keywords: ["mock", "fetch", "findBy", "waitFor", "loading", "async", "await"],
        explanation: "Mock the fetch/API call, render the component, initially verify loading state is shown, use findBy or waitFor to wait for data to appear, then verify the loading state is gone and data is displayed correctly."
      }
    ]
  },
  {
    id: 60,
    title: "React Performance Optimization",
    description: "Master techniques to make your React applications fast and responsive",
    duration: "55 min",
    difficulty: "Advanced",
    month: 3,
    week: 4,
    category: "React Optimization",
    content: `
      <h2>React Performance Optimization</h2>
      <p>React is fast by default, but complex apps can have performance issues. Learn to identify bottlenecks and apply the right optimizations.</p>

      <h3>Measuring Performance</h3>
      <div class="code-block">
        <pre>// React DevTools Profiler
// 1. Open React DevTools
// 2. Go to "Profiler" tab
// 3. Click Record and interact with your app
// 4. Analyze the flamegraph

// Highlight re-renders
// Settings &gt; Highlight updates when components render

// Console timing
console.time('render');
// ... render
console.timeEnd('render');

// React.Profiler component
&lt;Profiler id="List" onRender={(id, phase, duration) =&gt; {
  console.log(\`\${id} \${phase}: \${duration}ms\`);
}}&gt;
  &lt;ExpensiveList /&gt;
&lt;/Profiler&gt;</pre>
      </div>

      <h3>React.memo: Prevent Unnecessary Re-renders</h3>
      <div class="code-block">
        <pre>// Without memo - re-renders when parent re-renders
function ExpensiveComponent({ name }) {
  console.log('Rendering ExpensiveComponent');
  return &lt;div&gt;{heavyCalculation(name)}&lt;/div&gt;;
}

// With memo - only re-renders when props change
const MemoizedComponent = React.memo(function ExpensiveComponent({ name }) {
  console.log('Rendering ExpensiveComponent');
  return &lt;div&gt;{heavyCalculation(name)}&lt;/div&gt;;
});

// Custom comparison function
const MemoizedComponent = React.memo(MyComponent, (prevProps, nextProps) =&gt; {
  // Return true if props are equal (skip re-render)
  // Return false if props changed (re-render)
  return prevProps.id === nextProps.id;
});</pre>
      </div>

      <h3>useMemo: Cache Expensive Calculations</h3>
      <div class="code-block">
        <pre>function ProductList({ products, filter, sortBy }) {
  // Without useMemo: runs on every render
  const filteredProducts = products
    .filter(p =&gt; p.category === filter)
    .sort((a, b) =&gt; a[sortBy] - b[sortBy]);

  // With useMemo: only runs when dependencies change
  const filteredProducts = useMemo(() =&gt; {
    return products
      .filter(p =&gt; p.category === filter)
      .sort((a, b) =&gt; a[sortBy] - b[sortBy]);
  }, [products, filter, sortBy]);

  return &lt;List items={filteredProducts} /&gt;;
}</pre>
      </div>

      <h3>useCallback: Stable Function References</h3>
      <div class="code-block">
        <pre>function ParentComponent() {
  const [count, setCount] = useState(0);

  // Without useCallback: new function every render
  // MemoizedChild re-renders even though onClick logic is same
  const handleClick = () =&gt; {
    console.log('clicked');
  };

  // With useCallback: stable reference
  const handleClick = useCallback(() =&gt; {
    console.log('clicked');
  }, []); // Only changes if dependencies change

  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; setCount(c =&gt; c + 1)}&gt;
        Count: {count}
      &lt;/button&gt;
      {/* Won't re-render when count changes */}
      &lt;MemoizedChild onClick={handleClick} /&gt;
    &lt;/div&gt;
  );
}</pre>
      </div>

      <h3>Virtualization: Render Only Visible Items</h3>
      <div class="code-block">
        <pre>// Problem: Rendering 10,000 items
function SlowList({ items }) {
  return (
    &lt;ul&gt;
      {items.map(item =&gt; (
        &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

// Solution: Use react-window or react-virtualized
import { FixedSizeList } from 'react-window';

function FastList({ items }) {
  return (
    &lt;FixedSizeList
      height={400}
      width={300}
      itemCount={items.length}
      itemSize={35}
    &gt;
      {({ index, style }) =&gt; (
        &lt;div style={style}&gt;
          {items[index].name}
        &lt;/div&gt;
      )}
    &lt;/FixedSizeList&gt;
  );
}
// Only renders visible items (~10-20) instead of 10,000!</pre>
      </div>

      <h3>Code Splitting: Load on Demand</h3>
      <div class="code-block">
        <pre>import { lazy, Suspense } from 'react';

// Instead of: import HeavyComponent from './HeavyComponent';
// Lazy load:
const HeavyComponent = lazy(() =&gt; import('./HeavyComponent'));

function App() {
  return (
    &lt;Suspense fallback={&lt;Loading /&gt;}&gt;
      &lt;HeavyComponent /&gt;
    &lt;/Suspense&gt;
  );
}

// Route-based code splitting
const Dashboard = lazy(() =&gt; import('./pages/Dashboard'));
const Settings = lazy(() =&gt; import('./pages/Settings'));

function App() {
  return (
    &lt;Suspense fallback={&lt;PageLoader /&gt;}&gt;
      &lt;Routes&gt;
        &lt;Route path="/dashboard" element={&lt;Dashboard /&gt;} /&gt;
        &lt;Route path="/settings" element={&lt;Settings /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/Suspense&gt;
  );
}</pre>
      </div>

      <h3>Avoiding Prop Drilling with Context</h3>
      <div class="code-block">
        <pre>// Bad: Passing through many levels causes all to re-render
function App() {
  const [theme, setTheme] = useState('dark');
  return &lt;Layout theme={theme} setTheme={setTheme} /&gt;;
}
function Layout({ theme, setTheme }) {
  return &lt;Sidebar theme={theme} setTheme={setTheme} /&gt;;
}
function Sidebar({ theme, setTheme }) {
  return &lt;ThemeToggle theme={theme} setTheme={setTheme} /&gt;;
}

// Better: Context with split state/dispatch
const ThemeContext = createContext();
const ThemeDispatchContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  return (
    &lt;ThemeContext.Provider value={theme}&gt;
      &lt;ThemeDispatchContext.Provider value={setTheme}&gt;
        {children}
      &lt;/ThemeDispatchContext.Provider&gt;
    &lt;/ThemeContext.Provider&gt;
  );
}

// Components only subscribe to what they need</pre>
      </div>

      <h3>Debouncing and Throttling</h3>
      <div class="code-block">
        <pre>import { useState, useMemo } from 'react';
import debounce from 'lodash/debounce';

function SearchInput({ onSearch }) {
  const [value, setValue] = useState('');

  // Debounce the search - only fires after user stops typing
  const debouncedSearch = useMemo(
    () =&gt; debounce((query) =&gt; onSearch(query), 300),
    [onSearch]
  );

  const handleChange = (e) =&gt; {
    const newValue = e.target.value;
    setValue(newValue); // Update input immediately
    debouncedSearch(newValue); // Debounce the expensive operation
  };

  return &lt;input value={value} onChange={handleChange} /&gt;;
}

// Or use useDeferredValue for similar effect
function SearchInput({ onSearch }) {
  const [value, setValue] = useState('');
  const deferredValue = useDeferredValue(value);

  useEffect(() =&gt; {
    onSearch(deferredValue);
  }, [deferredValue]);

  return &lt;input value={value} onChange={e =&gt; setValue(e.target.value)} /&gt;;
}</pre>
      </div>

      <h3>Optimizing Images</h3>
      <div class="code-block">
        <pre>// Lazy load images
function LazyImage({ src, alt }) {
  return (
    &lt;img
      src={src}
      alt={alt}
      loading="lazy"        // Native lazy loading
      decoding="async"      // Non-blocking decode
    /&gt;
  );
}

// Use Next.js Image for automatic optimization
import Image from 'next/image';

&lt;Image
  src="/photo.jpg"
  alt="Photo"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL={blurUrl}
/&gt;

// Or use srcset for responsive images
&lt;img
  src="photo-800.jpg"
  srcSet="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, 800px"
/&gt;</pre>
      </div>

      <h3>Avoiding Common Mistakes</h3>
      <div class="code-block">
        <pre>// MISTAKE 1: Creating objects/arrays in render
function Parent() {
  // New object every render = child always re-renders
  return &lt;Child style={{ color: 'red' }} /&gt;;
}

// FIX: Define outside or useMemo
const style = { color: 'red' };
function Parent() {
  return &lt;Child style={style} /&gt;;
}

// MISTAKE 2: Inline functions in render
function Parent() {
  // New function every render
  return &lt;Child onClick={() =&gt; doSomething()} /&gt;;
}

// FIX: useCallback
function Parent() {
  const handleClick = useCallback(() =&gt; doSomething(), []);
  return &lt;Child onClick={handleClick} /&gt;;
}

// MISTAKE 3: Not using key properly
{items.map((item, index) =&gt; (
  &lt;Item key={index} /&gt;  // Bad if list can reorder
))}

// FIX: Use stable, unique IDs
{items.map((item) =&gt; (
  &lt;Item key={item.id} /&gt;  // Good
))}</pre>
      </div>

      <h3>Performance Checklist</h3>
      <div class="code-block">
        <pre>// Before optimizing, measure!
// 1. Use React DevTools Profiler
// 2. Check for unnecessary re-renders
// 3. Look for expensive calculations

// Optimization strategies:
// □ React.memo for expensive components
// □ useMemo for expensive calculations
// □ useCallback for stable function references
// □ Virtualize long lists
// □ Code split with lazy/Suspense
// □ Split context to reduce re-renders
// □ Debounce/throttle frequent updates
// □ Use keys properly in lists
// □ Lazy load images

// Remember:
// - Premature optimization is the root of all evil
// - Measure first, optimize second
// - Focus on user-perceived performance</pre>
      </div>
    `,
    questions: [
      {
        id: "60-1",
        type: "mcq",
        question: "What should you do BEFORE optimizing React performance?",
        options: [
          "Add React.memo to all components",
          "Measure performance with React DevTools Profiler",
          "Rewrite in TypeScript",
          "Add useCallback to all functions"
        ],
        correctAnswer: "Measure performance with React DevTools Profiler",
        explanation: "Always measure before optimizing. Use the Profiler to identify actual bottlenecks rather than guessing. Premature optimization often adds complexity without meaningful benefits."
      },
      {
        id: "60-2",
        type: "mcq",
        question: "What is virtualization used for?",
        options: [
          "Making components invisible",
          "Rendering only visible items in large lists",
          "Creating virtual DOM elements",
          "Simulating user interactions"
        ],
        correctAnswer: "Rendering only visible items in large lists",
        explanation: "Virtualization (with libraries like react-window) only renders items currently visible in the viewport, dramatically improving performance for lists with thousands of items."
      },
      {
        id: "60-3",
        type: "mcq",
        question: "Why should you avoid inline objects like style={{ color: 'red' }} in JSX?",
        options: [
          "It's not valid JSX",
          "A new object is created every render, breaking memoization",
          "It's slower to parse",
          "It doesn't work with TypeScript"
        ],
        correctAnswer: "A new object is created every render, breaking memoization",
        explanation: "Inline objects create new references every render. Even if the values are the same, React.memo children will re-render because the reference changed."
      },
      {
        id: "60-4",
        type: "descriptive",
        question: "Explain how to combine React.memo, useMemo, and useCallback to prevent unnecessary re-renders.",
        keywords: ["memo", "props", "reference", "callback", "children", "stable", "dependencies"],
        explanation: "Use React.memo on child components to prevent re-renders when props haven't changed. Use useMemo to create stable object/array references for props. Use useCallback to create stable function references. All three work together - memo compares props, but needs stable references from useMemo/useCallback to work effectively."
      }
    ]
  }
];

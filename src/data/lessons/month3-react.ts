import { Lesson } from '@/types/lesson';

export const month3Lessons: Lesson[] = [
  {
    id: 22,
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
        id: "22-1",
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
        id: "22-2",
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
        id: "22-3",
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
        id: "22-4",
        type: "descriptive",
        question: "Explain what JSX is and list three rules you must follow when writing JSX.",
        keywords: ["JavaScript", "XML", "HTML", "className", "curly braces", "single parent", "self-closing", "expressions", "camelCase"],
        explanation: "JSX is a syntax extension that lets you write HTML-like code in JavaScript. Rules include: 1) Return a single parent element, 2) Use className instead of class, 3) Use curly braces for JS expressions, 4) Self-closing tags need a slash, 5) Use camelCase for attributes like onClick."
      }
    ]
  },
  {
    id: 23,
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
        id: "23-1",
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
        id: "23-2",
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
        id: "23-3",
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
        id: "23-4",
        type: "descriptive",
        question: "Explain how to update a specific property in an object stored in state.",
        keywords: ["spread", "operator", "copy", "immutable", "setState", "previous", "object", "property"],
        explanation: "To update an object in state, spread the existing object into a new one and override the specific property: setUser({ ...user, name: 'New Name' }). This creates a new object reference while preserving other properties."
      }
    ]
  },
  {
    id: 24,
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
        id: "24-1",
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
        id: "24-2",
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
        id: "24-3",
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
        id: "24-4",
        type: "descriptive",
        question: "Explain why cleanup is important in useEffect and give an example of when you'd need it.",
        keywords: ["cleanup", "memory leak", "unmount", "subscription", "timer", "event listener", "interval", "return"],
        explanation: "Cleanup prevents memory leaks by removing subscriptions, timers, and event listeners when a component unmounts. For example, if you set up setInterval, you must clear it in the cleanup function, otherwise it continues running after the component is gone."
      }
    ]
  },
  {
    id: 25,
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
        id: "25-1",
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
        id: "25-2",
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
        id: "25-3",
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
        id: "25-4",
        type: "descriptive",
        question: "Explain the importance of keys when rendering lists in React.",
        keywords: ["key", "unique", "identity", "reconciliation", "performance", "reorder", "state", "DOM"],
        explanation: "Keys give elements a stable identity across renders. React uses keys to determine which items changed, were added, or removed. Good keys (unique IDs) help React efficiently update the DOM and maintain correct component state when lists change."
      }
    ]
  },
  {
    id: 26,
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
        id: "26-1",
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
        id: "26-2",
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
        id: "26-3",
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
        id: "26-4",
        type: "descriptive",
        question: "Explain the difference between controlled and uncontrolled components in React forms.",
        keywords: ["controlled", "uncontrolled", "state", "ref", "value", "DOM", "onChange", "useRef"],
        explanation: "Controlled components store form values in React state, with value and onChange on inputs. Uncontrolled components let the DOM handle form state, accessing values via refs. Controlled components offer more control for validation and dynamic forms."
      }
    ]
  },
  {
    id: 27,
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
        id: "27-1",
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
        id: "27-2",
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
        id: "27-3",
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
        id: "27-4",
        type: "descriptive",
        question: "Explain the render props pattern and when you would use it.",
        keywords: ["render", "prop", "function", "children", "share", "logic", "reusable", "state"],
        explanation: "Render props is a pattern where a component receives a function as a prop and calls it to render content. It's used to share stateful logic between components. The function receives data/state and returns JSX. Modern alternative is custom hooks."
      }
    ]
  },
  {
    id: 28,
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
        id: "28-1",
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
        id: "28-2",
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
        id: "28-3",
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
        id: "28-4",
        type: "descriptive",
        question: "Explain how to create and use a Context in React with the three main steps.",
        keywords: ["createContext", "Provider", "useContext", "value", "children", "consumer", "wrap"],
        explanation: "1) Create context with createContext(). 2) Create a Provider component that wraps children and passes value prop. 3) Consume the context using useContext() in any child component. Optionally create a custom hook for better DX."
      }
    ]
  },
  {
    id: 29,
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
        id: "29-1",
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
        id: "29-2",
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
        id: "29-3",
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
        id: "29-4",
        type: "descriptive",
        question: "Explain what a reducer function is and how it relates to actions.",
        keywords: ["reducer", "state", "action", "type", "payload", "switch", "dispatch", "pure function"],
        explanation: "A reducer is a pure function that takes current state and an action, then returns new state. Actions are objects with a type (what happened) and optional payload (data). The reducer uses a switch statement to handle different action types and calculate the next state."
      }
    ]
  },
  {
    id: 30,
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
        id: "30-1",
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
        id: "30-2",
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
        id: "30-3",
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
        id: "30-4",
        type: "descriptive",
        question: "Explain the benefits of custom hooks and give an example use case.",
        keywords: ["reusable", "logic", "extract", "share", "state", "effects", "composition", "testing"],
        explanation: "Custom hooks let you extract and reuse stateful logic across components. Benefits: 1) Cleaner components, 2) Reusable logic, 3) Easier testing, 4) Better composition. Example: useFetch extracts data fetching logic with loading/error states."
      }
    ]
  },
  {
    id: 31,
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
        id: "31-1",
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
        id: "31-2",
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
        id: "31-3",
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
        id: "31-4",
        type: "descriptive",
        question: "Explain the difference between useMemo and useCallback.",
        keywords: ["useMemo", "useCallback", "value", "function", "memoize", "reference", "dependencies", "render"],
        explanation: "useMemo memoizes a computed value - it runs a function and caches the result. useCallback memoizes the function itself - it returns the same function reference. Use useMemo for expensive calculations, useCallback for stable function references passed to children."
      }
    ]
  },
  {
    id: 32,
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
        id: "32-1",
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
        id: "32-2",
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
        id: "32-3",
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
        id: "32-4",
        type: "descriptive",
        question: "Explain why Error Boundaries must be class components and what lifecycle methods they use.",
        keywords: ["class", "getDerivedStateFromError", "componentDidCatch", "fallback", "state", "catch", "render"],
        explanation: "Error Boundaries require class components because they use lifecycle methods not available in functional components: getDerivedStateFromError (to update state for fallback UI) and componentDidCatch (to log errors). React may add hooks for this in the future."
      }
    ]
  }
];

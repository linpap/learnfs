import { PracticeExercise } from '@/types/exercise';

export const reactExercises: PracticeExercise[] = [
  {
    id: 26,
    title: 'Counter Component',
    description: 'Build a simple counter with useState.',
    difficulty: 'beginner',
    category: 'React',
    estimatedTime: '15 min',
    exerciseType: 'react',
    relatedLessons: [22, 23],
    problemStatement: `Create a Counter component that:

1. Displays a count starting at 0
2. Has an "Increment" button that adds 1
3. Has a "Decrement" button that subtracts 1
4. Has a "Reset" button that sets count back to 0

Use the useState hook to manage the count state.`,
    hints: [
      'Import useState from React',
      'Initialize state with useState(0)',
      'Use onClick handlers for buttons',
    ],
    language: 'javascript',
    starterCode: `function Counter() {
  // Add useState here

  return (
    <div>
      {/* Add your JSX here */}
    </div>
  );
}`,
    solutionCode: `function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}`,
    testCases: [
      { id: '1', description: 'Should render initial count of 0', input: 'document.body.textContent.includes("0")', expectedOutput: 'true' },
      { id: '2', description: 'Should have increment button', input: 'document.querySelector("button").textContent.toLowerCase().includes("increment")', expectedOutput: 'true' },
    ],
    tags: ['react', 'useState', 'hooks', 'beginner'],
  },
  {
    id: 27,
    title: 'Toggle Component',
    description: 'Create a toggle switch with boolean state.',
    difficulty: 'beginner',
    category: 'React',
    estimatedTime: '10 min',
    exerciseType: 'react',
    relatedLessons: [23],
    problemStatement: `Create a Toggle component that:

1. Displays "ON" or "OFF" based on state
2. Has a button to toggle between states
3. Changes background color based on state (green for ON, gray for OFF)

Use useState with a boolean value.`,
    hints: [
      'Use useState with initial value of false',
      'Toggle with setIsOn(!isOn) or setIsOn(prev => !prev)',
      'Use conditional rendering for text and style',
    ],
    language: 'javascript',
    starterCode: `function Toggle() {
  // Add useState here

  return (
    <div>
      {/* Add your JSX here */}
    </div>
  );
}`,
    solutionCode: `function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{
      padding: '20px',
      backgroundColor: isOn ? '#10b981' : '#6b7280',
      color: 'white',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <p>{isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>
        Toggle
      </button>
    </div>
  );
}`,
    testCases: [
      { id: '1', description: 'Should show initial OFF state', input: 'document.body.textContent.includes("OFF")', expectedOutput: 'true' },
      { id: '2', description: 'Should have toggle button', input: 'document.querySelector("button") !== null', expectedOutput: 'true' },
    ],
    tags: ['react', 'useState', 'conditionals', 'beginner'],
  },
  {
    id: 28,
    title: 'Todo List',
    description: 'Build a simple todo list with add and delete.',
    difficulty: 'intermediate',
    category: 'React',
    estimatedTime: '25 min',
    exerciseType: 'react',
    relatedLessons: [23, 25, 26],
    problemStatement: `Create a TodoList component that:

1. Has an input field to type new todos
2. Has an "Add" button to add todos to the list
3. Displays the list of todos
4. Each todo has a "Delete" button to remove it
5. Clears the input after adding

Manage the todos array and input value with useState.`,
    hints: [
      'Use two useState calls: one for todos array, one for input value',
      'Use map() to render the list of todos',
      'Use filter() to remove a todo by its index or id',
    ],
    language: 'javascript',
    starterCode: `function TodoList() {
  // Add useState for todos and input value

  return (
    <div>
      {/* Input and Add button */}
      {/* List of todos with delete buttons */}
    </div>
  );
}`,
    solutionCode: `function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
    testCases: [
      { id: '1', description: 'Should have input field', input: 'document.querySelector("input") !== null', expectedOutput: 'true' },
      { id: '2', description: 'Should have Add button', input: 'Array.from(document.querySelectorAll("button")).some(b => b.textContent.toLowerCase().includes("add"))', expectedOutput: 'true' },
    ],
    tags: ['react', 'useState', 'lists', 'forms', 'intermediate'],
  },
  {
    id: 29,
    title: 'Fetch Data with useEffect',
    description: 'Fetch and display data from an API.',
    difficulty: 'intermediate',
    category: 'React',
    estimatedTime: '20 min',
    exerciseType: 'react',
    relatedLessons: [24],
    problemStatement: `Create a UserList component that:

1. Fetches users from the API on mount
2. Shows a "Loading..." message while fetching
3. Displays the list of user names once loaded
4. Handles errors gracefully

Use the JSONPlaceholder API: https://jsonplaceholder.typicode.com/users`,
    hints: [
      'Use useEffect with an empty dependency array for mount',
      'Use useState for loading, error, and data states',
      'Use async/await or .then() for the fetch call',
    ],
    language: 'javascript',
    starterCode: `function UserList() {
  // Add useState for users, loading, error
  // Add useEffect for fetching

  return (
    <div>
      {/* Show loading, error, or list */}
    </div>
  );
}`,
    solutionCode: `function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`,
    testCases: [
      { id: '1', description: 'Should show loading initially', input: 'document.body.textContent.includes("Loading")', expectedOutput: 'true' },
    ],
    tags: ['react', 'useEffect', 'fetch', 'api', 'intermediate'],
  },
  {
    id: 30,
    title: 'Controlled Form',
    description: 'Build a controlled form with validation.',
    difficulty: 'intermediate',
    category: 'React',
    estimatedTime: '20 min',
    exerciseType: 'react',
    relatedLessons: [26],
    problemStatement: `Create a SignupForm component that:

1. Has controlled inputs for name and email
2. Validates that name is at least 2 characters
3. Validates that email contains "@"
4. Shows error messages below invalid fields
5. Has a submit button that's disabled if form is invalid
6. Shows success message on valid submission`,
    hints: [
      'Use useState for each input value',
      'Create validation functions that return error messages',
      'Use onBlur or onChange to trigger validation',
    ],
    language: 'javascript',
    starterCode: `function SignupForm() {
  // Add useState for form values and errors

  return (
    <form>
      {/* Add form fields with validation */}
    </form>
  );
}`,
    solutionCode: `function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (name.length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!email.includes('@')) newErrors.email = 'Please enter a valid email';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) return <p>Thanks for signing up!</p>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
      </div>
      <div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}`,
    testCases: [
      { id: '1', description: 'Should have name input', input: 'document.querySelectorAll("input").length >= 1', expectedOutput: 'true' },
      { id: '2', description: 'Should have submit button', input: 'document.querySelector("button[type=submit]") !== null || document.querySelector("button") !== null', expectedOutput: 'true' },
    ],
    tags: ['react', 'forms', 'validation', 'useState', 'intermediate'],
  },
  {
    id: 31,
    title: 'useContext Theme',
    description: 'Implement theme switching with Context.',
    difficulty: 'intermediate',
    category: 'React',
    estimatedTime: '25 min',
    exerciseType: 'react',
    relatedLessons: [28],
    problemStatement: `Create a theme system using React Context:

1. Create a ThemeContext with 'light' and 'dark' values
2. Create a ThemeProvider component
3. Create a useTheme custom hook
4. Build a component that toggles and displays the theme

The theme should be accessible to any nested component.`,
    hints: [
      'Use createContext to create the context',
      'Wrap components with Context.Provider',
      'Use useContext to consume the theme',
    ],
    language: 'javascript',
    starterCode: `// Create ThemeContext

// Create ThemeProvider

// Create useTheme hook

// Create ThemedComponent`,
    solutionCode: `const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

function ThemedComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{
      background: theme === 'dark' ? '#1a1a2e' : '#ffffff',
      color: theme === 'dark' ? '#ffffff' : '#1a1a2e',
      padding: '20px'
    }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}`,
    testCases: [
      { id: '1', description: 'Should display theme', input: 'document.body.textContent.toLowerCase().includes("light") || document.body.textContent.toLowerCase().includes("dark")', expectedOutput: 'true' },
    ],
    tags: ['react', 'useContext', 'hooks', 'theme', 'intermediate'],
  },
  {
    id: 32,
    title: 'Custom useFetch Hook',
    description: 'Create a reusable data fetching hook.',
    difficulty: 'advanced',
    category: 'React',
    estimatedTime: '30 min',
    exerciseType: 'react',
    relatedLessons: [30],
    problemStatement: `Create a custom useFetch hook that:

1. Takes a URL as parameter
2. Returns { data, loading, error }
3. Fetches data on mount and when URL changes
4. Handles loading and error states

**Usage:**
\`\`\`javascript
const { data, loading, error } = useFetch('https://api.example.com/data');
\`\`\``,
    hints: [
      'Use useState for data, loading, and error',
      'Use useEffect with url in the dependency array',
      'Handle the cleanup if component unmounts during fetch',
    ],
    language: 'javascript',
    starterCode: `function useFetch(url) {
  // Implement the custom hook

  return { data, loading, error };
}`,
    solutionCode: `function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Request failed');
        const result = await response.json();
        if (!cancelled) {
          setData(result);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}`,
    testCases: [
      { id: '1', description: 'Should return an object', input: 'typeof useFetch("test")', expectedOutput: '"object"' },
    ],
    tags: ['react', 'hooks', 'custom-hooks', 'fetch', 'advanced'],
  },
  {
    id: 33,
    title: 'useReducer Todo App',
    description: 'Manage complex state with useReducer.',
    difficulty: 'advanced',
    category: 'React',
    estimatedTime: '30 min',
    exerciseType: 'react',
    relatedLessons: [29],
    problemStatement: `Build a Todo app using useReducer with these actions:

1. ADD_TODO - adds a new todo
2. TOGGLE_TODO - marks todo as complete/incomplete
3. DELETE_TODO - removes a todo
4. CLEAR_COMPLETED - removes all completed todos

The reducer should handle all state transitions.`,
    hints: [
      'Define action types as constants',
      'The reducer receives state and action, returns new state',
      'Use switch statement for different action types',
    ],
    language: 'javascript',
    starterCode: `const initialState = { todos: [] };

function todoReducer(state, action) {
  // Handle actions
}

function TodoApp() {
  // Use useReducer
}`,
    solutionCode: `const initialState = { todos: [] };

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }]
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'CLEAR_COMPLETED':
      return {
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>
        Clear Completed
      </button>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id} style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}>
            <span onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
    testCases: [
      { id: '1', description: 'Should have input field', input: 'document.querySelector("input") !== null', expectedOutput: 'true' },
    ],
    tags: ['react', 'useReducer', 'state-management', 'advanced'],
  },
  {
    id: 34,
    title: 'Optimized List with useMemo',
    description: 'Use useMemo to optimize expensive computations.',
    difficulty: 'intermediate',
    category: 'React',
    estimatedTime: '20 min',
    exerciseType: 'react',
    relatedLessons: [31],
    problemStatement: `Create a FilteredList component that:

1. Has a list of items (numbers 1-1000)
2. Has a filter input to search/filter items
3. Uses useMemo to memoize the filtered results
4. Displays a count of filtered items

Without useMemo, filtering would run on every render.`,
    hints: [
      'Create the large array once outside the component',
      'useMemo takes a function and dependency array',
      'Only recompute when the filter value changes',
    ],
    language: 'javascript',
    starterCode: `const items = Array.from({ length: 1000 }, (_, i) => i + 1);

function FilteredList() {
  // Add useState for filter
  // Add useMemo for filtered items

  return (
    <div>
      {/* Input and filtered list */}
    </div>
  );
}`,
    solutionCode: `const items = Array.from({ length: 1000 }, (_, i) => i + 1);

function FilteredList() {
  const [filter, setFilter] = useState('');

  const filteredItems = useMemo(() => {
    console.log('Filtering...');
    return items.filter(item =>
      item.toString().includes(filter)
    );
  }, [filter]);

  return (
    <div>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter numbers..."
      />
      <p>Showing {filteredItems.length} items</p>
      <ul style={{ maxHeight: '200px', overflow: 'auto' }}>
        {filteredItems.slice(0, 100).map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}`,
    testCases: [
      { id: '1', description: 'Should have filter input', input: 'document.querySelector("input") !== null', expectedOutput: 'true' },
    ],
    tags: ['react', 'useMemo', 'optimization', 'intermediate'],
  },
  {
    id: 35,
    title: 'Modal with Portal',
    description: 'Create a modal using React Portal.',
    difficulty: 'intermediate',
    category: 'React',
    estimatedTime: '25 min',
    exerciseType: 'react',
    relatedLessons: [27],
    problemStatement: `Create a Modal component that:

1. Renders outside the parent component using createPortal
2. Has a dark overlay that closes the modal on click
3. Has a close button in the modal
4. Prevents body scrolling when open
5. Is controlled via isOpen and onClose props

Modals should render in a portal to avoid z-index issues.`,
    hints: [
      'Use createPortal from react-dom',
      'Create a div with id "modal-root" to render into',
      'Use useEffect to handle body scroll locking',
    ],
    language: 'javascript',
    starterCode: `function Modal({ isOpen, onClose, children }) {
  // Implement modal with portal

  return null;
}

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>Modal Content</h2>
        <p>This is a modal!</p>
      </Modal>
    </div>
  );
}`,
    solutionCode: `function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '500px'
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{ float: 'right' }}
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}`,
    testCases: [
      { id: '1', description: 'Should have open modal button', input: 'document.querySelector("button") !== null', expectedOutput: 'true' },
    ],
    tags: ['react', 'portal', 'modal', 'intermediate'],
  },
];

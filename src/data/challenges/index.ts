import { Challenge } from '@/types/challenge';

export const challenges: Challenge[] = [
  // Phase 1: HTML Basics (Month 1, Week 1-2)
  {
    id: 1,
    title: 'Personal Portfolio Page',
    description: 'Create a single-page HTML portfolio website showcasing your skills and projects.',
    phase: 1,
    type: 'html',
    difficulty: 'beginner',
    estimatedTime: '2-3 hours',
    prerequisites: [1, 2, 3],
    overview: `Build your first portfolio website using only HTML! This project will help you practice
    semantic HTML elements, document structure, and content organization. Your portfolio should
    introduce yourself, list your skills, and showcase any projects or work you're proud of.`,
    objectives: [
      'Create a well-structured HTML document with proper semantic elements',
      'Include a navigation menu that links to different sections',
      'Add an about section with your bio and photo placeholder',
      'Create a skills section with a list of technologies',
      'Build a projects section with at least 3 project cards',
      'Add a contact section with your information',
      'Include a footer with copyright information'
    ],
    requirements: [
      { id: 'doctype', description: 'Valid HTML5 doctype declaration', points: 5, checkType: 'contains', checkValue: '<!DOCTYPE html>' },
      { id: 'semantic', description: 'Uses semantic elements (header, main, section, footer)', points: 15, checkType: 'element', checkValue: 'header,main,section,footer' },
      { id: 'nav', description: 'Navigation menu with anchor links', points: 10, checkType: 'element', checkValue: 'nav' },
      { id: 'headings', description: 'Proper heading hierarchy (h1-h3)', points: 10, checkType: 'element', checkValue: 'h1,h2' },
      { id: 'image', description: 'At least one image with alt text', points: 10, checkType: 'regex', checkValue: '<img[^>]+alt=' },
      { id: 'lists', description: 'Uses lists for skills/technologies', points: 10, checkType: 'element', checkValue: 'ul,li' },
      { id: 'links', description: 'External links open in new tab', points: 10, checkType: 'regex', checkValue: 'target="_blank"' },
      { id: 'contact', description: 'Contact information with email link', points: 10, checkType: 'regex', checkValue: 'mailto:' },
      { id: 'meta', description: 'Meta description and viewport tags', points: 10, checkType: 'element', checkValue: 'meta' },
      { id: 'structure', description: 'Clean, well-organized code structure', points: 10, checkType: 'manual' }
    ],
    files: [
      {
        name: 'index.html',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Your portfolio description here">
  <title>My Portfolio</title>
</head>
<body>
  <!-- Navigation -->
  <header>
    <nav>
      <!-- Add navigation links here -->
    </nav>
  </header>

  <main>
    <!-- About Section -->
    <section id="about">
      <h1>Your Name</h1>
      <!-- Add your bio here -->
    </section>

    <!-- Skills Section -->
    <section id="skills">
      <h2>Skills</h2>
      <!-- Add your skills list here -->
    </section>

    <!-- Projects Section -->
    <section id="projects">
      <h2>Projects</h2>
      <!-- Add at least 3 project cards here -->
    </section>

    <!-- Contact Section -->
    <section id="contact">
      <h2>Contact</h2>
      <!-- Add contact information here -->
    </section>
  </main>

  <footer>
    <!-- Add footer content here -->
  </footer>
</body>
</html>`
      }
    ],
    previewSupport: true,
    hints: [
      'Use <nav> with <ul> and <li> for your navigation menu',
      'Each section should have a unique id for anchor navigation',
      'Use <article> inside your projects section for each project card',
      'Don\'t forget to add alt text to all images for accessibility'
    ],
    resources: [
      { title: 'HTML Semantic Elements', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Semantics' },
      { title: 'HTML Best Practices', url: 'https://www.w3schools.com/html/html5_syntax.asp' }
    ],
    totalPoints: 100,
    passingScore: 70
  },

  // Phase 2: HTML + CSS (Month 1, Week 3-4)
  {
    id: 2,
    title: 'Responsive Contact Form',
    description: 'Build a beautiful, responsive contact form with validation styling and modern CSS.',
    phase: 2,
    type: 'html-css',
    difficulty: 'beginner',
    estimatedTime: '3-4 hours',
    prerequisites: [4, 5, 6, 7],
    overview: `Create a professional contact form with modern styling! This project combines HTML form
    elements with CSS Flexbox/Grid layouts and responsive design. You'll learn to style form inputs,
    add hover effects, and make your form look great on all devices.`,
    objectives: [
      'Build a complete contact form with all necessary fields',
      'Style the form with a modern, clean design',
      'Implement responsive layout using Flexbox or Grid',
      'Add focus and hover states for better UX',
      'Include form validation styling (valid/invalid states)',
      'Make the form fully responsive for mobile devices'
    ],
    requirements: [
      { id: 'form', description: 'Complete form with name, email, subject, message fields', points: 15, checkType: 'element', checkValue: 'form,input,textarea' },
      { id: 'labels', description: 'Proper labels associated with inputs', points: 10, checkType: 'element', checkValue: 'label' },
      { id: 'flexbox', description: 'Uses Flexbox or Grid for layout', points: 15, checkType: 'regex', checkValue: 'display:\\s*(flex|grid)' },
      { id: 'responsive', description: 'Responsive design with media queries', points: 15, checkType: 'regex', checkValue: '@media' },
      { id: 'hover', description: 'Hover and focus states on inputs', points: 10, checkType: 'regex', checkValue: ':hover|:focus' },
      { id: 'validation', description: 'Validation styling (:valid/:invalid)', points: 10, checkType: 'regex', checkValue: ':valid|:invalid' },
      { id: 'button', description: 'Styled submit button with hover effect', points: 10, checkType: 'element', checkValue: 'button' },
      { id: 'variables', description: 'Uses CSS custom properties', points: 5, checkType: 'regex', checkValue: '--[a-zA-Z]' },
      { id: 'accessibility', description: 'Required fields marked, proper contrast', points: 10, checkType: 'regex', checkValue: 'required|aria-' }
    ],
    files: [
      {
        name: 'index.html',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="form-card">
      <h1>Get in Touch</h1>
      <p>We'd love to hear from you. Send us a message!</p>

      <form>
        <!-- Add your form fields here -->

        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
</body>
</html>`
      },
      {
        name: 'styles.css',
        language: 'css',
        starterCode: `/* CSS Variables */
:root {
  --primary-color: #3b82f6;
  --primary-hover: #2563eb;
  --error-color: #ef4444;
  --success-color: #22c55e;
  --text-color: #1f2937;
  --text-light: #6b7280;
  --bg-color: #f3f4f6;
  --white: #ffffff;
  --border-radius: 8px;
}

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
}

/* Add your styles below */
.container {
  /* Center the form card */
}

.form-card {
  /* Style the card */
}

/* Form styles */

/* Input styles */

/* Button styles */

/* Responsive styles */
@media (max-width: 768px) {
  /* Mobile styles */
}`
      }
    ],
    previewSupport: true,
    hints: [
      'Use display: flex with flex-direction: column on the form',
      'Add transition properties for smooth hover effects',
      'Use :focus-within on form groups for better UX',
      'Test your form at different screen sizes using the preview'
    ],
    resources: [
      { title: 'CSS Flexbox Guide', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
      { title: 'Form Styling Best Practices', url: 'https://web.dev/learn/forms/styling' }
    ],
    totalPoints: 100,
    passingScore: 70
  },

  // Phase 3: JavaScript Interactivity (Month 2)
  {
    id: 3,
    title: 'Interactive Quiz App',
    description: 'Build a dynamic quiz application with JavaScript that tracks scores and shows results.',
    phase: 3,
    type: 'javascript',
    difficulty: 'intermediate',
    estimatedTime: '4-5 hours',
    prerequisites: [11, 12, 13, 14],
    overview: `Create an interactive quiz application using vanilla JavaScript! This project will test
    your DOM manipulation skills, event handling, and state management. Users should be able to answer
    multiple-choice questions, see their progress, and view their final score.`,
    objectives: [
      'Display questions one at a time with multiple choice answers',
      'Track user selections and calculate score',
      'Show progress indicator (question X of Y)',
      'Implement next/previous navigation',
      'Display final results with percentage score',
      'Allow users to restart the quiz',
      'Store high scores in localStorage'
    ],
    requirements: [
      { id: 'questions', description: 'At least 5 quiz questions with 4 options each', points: 10, checkType: 'manual' },
      { id: 'dom', description: 'Dynamic DOM manipulation for questions', points: 15, checkType: 'regex', checkValue: 'innerHTML|appendChild|createElement' },
      { id: 'events', description: 'Event listeners for user interactions', points: 15, checkType: 'regex', checkValue: 'addEventListener' },
      { id: 'state', description: 'Proper state management for score/progress', points: 15, checkType: 'regex', checkValue: 'let|const.*score|currentQuestion' },
      { id: 'progress', description: 'Progress indicator showing current question', points: 10, checkType: 'manual' },
      { id: 'results', description: 'Results screen with score percentage', points: 15, checkType: 'manual' },
      { id: 'storage', description: 'High scores saved to localStorage', points: 10, checkType: 'regex', checkValue: 'localStorage' },
      { id: 'restart', description: 'Restart functionality', points: 10, checkType: 'manual' }
    ],
    files: [
      {
        name: 'index.html',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="quiz-container">
    <!-- Start Screen -->
    <div id="start-screen" class="screen">
      <h1>JavaScript Quiz</h1>
      <p>Test your JavaScript knowledge!</p>
      <button id="start-btn" class="btn">Start Quiz</button>
      <div id="high-score">High Score: <span>0</span></div>
    </div>

    <!-- Quiz Screen -->
    <div id="quiz-screen" class="screen hidden">
      <div class="progress">
        <span id="progress-text">Question 1 of 5</span>
        <div class="progress-bar">
          <div id="progress-fill"></div>
        </div>
      </div>
      <div id="question-container">
        <h2 id="question"></h2>
        <div id="answers" class="answers"></div>
      </div>
      <button id="next-btn" class="btn" disabled>Next</button>
    </div>

    <!-- Results Screen -->
    <div id="results-screen" class="screen hidden">
      <h1>Quiz Complete!</h1>
      <div id="score-display"></div>
      <button id="restart-btn" class="btn">Play Again</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`
      },
      {
        name: 'styles.css',
        language: 'css',
        starterCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.quiz-container {
  background: white;
  border-radius: 16px;
  padding: 40px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.screen { text-align: center; }
.hidden { display: none; }

h1 { color: #333; margin-bottom: 10px; }
h2 { color: #333; margin-bottom: 20px; text-align: left; }

.btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.progress {
  margin-bottom: 30px;
}

.progress-bar {
  background: #e0e0e0;
  height: 8px;
  border-radius: 4px;
  margin-top: 10px;
  overflow: hidden;
}

#progress-fill {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 100%;
  width: 0%;
  transition: width 0.3s ease;
}

.answers {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}

.answer-btn {
  background: #f5f5f5;
  border: 2px solid #e0e0e0;
  padding: 15px 20px;
  border-radius: 8px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
}

.answer-btn:hover { border-color: #667eea; background: #f0f0ff; }
.answer-btn.selected { border-color: #667eea; background: #e8e8ff; }
.answer-btn.correct { border-color: #22c55e; background: #dcfce7; }
.answer-btn.incorrect { border-color: #ef4444; background: #fee2e2; }

#score-display {
  font-size: 48px;
  font-weight: bold;
  color: #667eea;
  margin: 20px 0;
}

#high-score {
  margin-top: 20px;
  color: #666;
}`
      },
      {
        name: 'script.js',
        language: 'javascript',
        starterCode: `// Quiz Questions - Add at least 5 questions
const questions = [
  {
    question: "What does 'DOM' stand for?",
    answers: [
      "Document Object Model",
      "Data Object Model",
      "Document Oriented Model",
      "Digital Object Memory"
    ],
    correct: 0
  },
  // Add more questions here...
];

// State variables
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const scoreDisplay = document.getElementById('score-display');
const highScoreSpan = document.querySelector('#high-score span');

// Initialize
function init() {
  // Load high score from localStorage
  const highScore = localStorage.getItem('quizHighScore') || 0;
  highScoreSpan.textContent = highScore + '%';

  // Add event listeners
  startBtn.addEventListener('click', startQuiz);
  nextBtn.addEventListener('click', nextQuestion);
  restartBtn.addEventListener('click', restartQuiz);
}

// Start the quiz
function startQuiz() {
  // TODO: Implement start quiz logic
  // - Hide start screen, show quiz screen
  // - Reset state variables
  // - Show first question
}

// Display current question
function showQuestion() {
  // TODO: Implement show question logic
  // - Update question text
  // - Create answer buttons
  // - Update progress
}

// Handle answer selection
function selectAnswer(index) {
  // TODO: Implement answer selection
  // - Track selected answer
  // - Show visual feedback
  // - Enable next button
}

// Go to next question
function nextQuestion() {
  // TODO: Implement next question logic
  // - Check if answer is correct
  // - Move to next question or show results
}

// Show final results
function showResults() {
  // TODO: Implement results display
  // - Calculate percentage
  // - Update high score if needed
  // - Show results screen
}

// Restart the quiz
function restartQuiz() {
  // TODO: Implement restart logic
}

// Start the app
init();`
      }
    ],
    previewSupport: true,
    hints: [
      'Use classList.add/remove to toggle the "hidden" class between screens',
      'Store the selected answer index in a variable before checking correctness',
      'Calculate percentage with: Math.round((score / questions.length) * 100)',
      'Use JSON.stringify/parse when working with localStorage for complex data'
    ],
    resources: [
      { title: 'DOM Manipulation Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents' },
      { title: 'localStorage API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage' }
    ],
    totalPoints: 100,
    passingScore: 70
  },

  // Phase 4: React Components (Month 3)
  {
    id: 4,
    title: 'Task Management App',
    description: 'Build a React task management application with state management, filtering, and persistence.',
    phase: 4,
    type: 'react',
    difficulty: 'intermediate',
    estimatedTime: '5-6 hours',
    prerequisites: [22, 23, 24, 25, 26],
    overview: `Create a fully functional task management app using React! This project will help you
    master React hooks, component composition, and state management. Users should be able to add,
    edit, delete, and filter tasks with data persisting in localStorage.`,
    objectives: [
      'Create reusable React components (TaskList, TaskItem, TaskForm)',
      'Implement useState for task management',
      'Use useEffect for localStorage persistence',
      'Add filtering (all, active, completed)',
      'Implement task editing functionality',
      'Add due dates and priority levels',
      'Create a clean, modern UI with Tailwind-like styling'
    ],
    requirements: [
      { id: 'components', description: 'At least 4 reusable components', points: 15, checkType: 'regex', checkValue: 'function\\s+\\w+.*\\{|const\\s+\\w+\\s*=.*=>' },
      { id: 'useState', description: 'Proper useState implementation', points: 15, checkType: 'regex', checkValue: 'useState' },
      { id: 'useEffect', description: 'useEffect for side effects', points: 10, checkType: 'regex', checkValue: 'useEffect' },
      { id: 'crud', description: 'Full CRUD operations (Create, Read, Update, Delete)', points: 20, checkType: 'manual' },
      { id: 'filter', description: 'Task filtering functionality', points: 10, checkType: 'regex', checkValue: 'filter' },
      { id: 'storage', description: 'localStorage persistence', points: 10, checkType: 'regex', checkValue: 'localStorage' },
      { id: 'props', description: 'Proper props passing between components', points: 10, checkType: 'regex', checkValue: 'props|\\{.*\\}.*=>' },
      { id: 'styling', description: 'Clean, responsive styling', points: 10, checkType: 'manual' }
    ],
    files: [
      {
        name: 'App.tsx',
        language: 'tsx',
        starterCode: `import React, { useState, useEffect } from 'react';

// Types
interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: string;
}

type FilterType = 'all' | 'active' | 'completed';

// TaskForm Component
function TaskForm({ onAdd }: { onAdd: (task: Omit<Task, 'id' | 'createdAt'>) => void }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Task['priority']>('medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    // TODO: Call onAdd with new task data
    // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      {/* TODO: Add form inputs */}
    </form>
  );
}

// TaskItem Component
function TaskItem({
  task,
  onToggle,
  onDelete,
  onEdit
}: {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  // TODO: Implement TaskItem UI and logic

  return (
    <div className={\`task-item \${task.completed ? 'completed' : ''} priority-\${task.priority}\`}>
      {/* TODO: Add task content */}
    </div>
  );
}

// TaskList Component
function TaskList({
  tasks,
  onToggle,
  onDelete,
  onEdit
}: {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}) {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks yet. Add one above!</p>;
  }

  return (
    <div className="task-list">
      {/* TODO: Map through tasks and render TaskItem components */}
    </div>
  );
}

// Filter Component
function TaskFilter({
  filter,
  onFilterChange
}: {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}) {
  return (
    <div className="task-filter">
      {/* TODO: Add filter buttons */}
    </div>
  );
}

// Main App Component
export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  // Load tasks from localStorage on mount
  useEffect(() => {
    // TODO: Implement localStorage loading
  }, []);

  // Save tasks to localStorage when tasks change
  useEffect(() => {
    // TODO: Implement localStorage saving
  }, [tasks]);

  // Add new task
  const addTask = (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    // TODO: Implement add task
  };

  // Toggle task completion
  const toggleTask = (id: string) => {
    // TODO: Implement toggle
  };

  // Delete task
  const deleteTask = (id: string) => {
    // TODO: Implement delete
  };

  // Edit task
  const editTask = (id: string, title: string) => {
    // TODO: Implement edit
  };

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    // TODO: Implement filtering logic
    return true;
  });

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskFilter filter={filter} onFilterChange={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
      <div className="task-stats">
        {/* TODO: Show task statistics */}
      </div>
    </div>
  );
}`
      },
      {
        name: 'styles.css',
        language: 'css',
        starterCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f0f2f5;
  min-height: 100vh;
  padding: 40px 20px;
}

.app {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

/* Task Form Styles */
.task-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
}

.task-form input,
.task-form select {
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s;
}

.task-form input:focus,
.task-form select:focus {
  outline: none;
  border-color: #3b82f6;
}

.task-form button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.task-form button:hover {
  background: #2563eb;
}

/* Filter Styles */
.task-filter {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.task-filter button {
  flex: 1;
  padding: 10px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.task-filter button.active {
  border-color: #3b82f6;
  background: #eff6ff;
  color: #3b82f6;
}

/* Task List Styles */
.task-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #e0e0e0;
}

.task-item.completed {
  opacity: 0.6;
}

.task-item.completed .task-title {
  text-decoration: line-through;
}

.task-item.priority-high { border-left-color: #ef4444; }
.task-item.priority-medium { border-left-color: #f59e0b; }
.task-item.priority-low { border-left-color: #22c55e; }

.task-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.task-title {
  flex: 1;
}

.task-actions button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.task-actions button:hover {
  opacity: 1;
}

/* Stats */
.task-stats {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
  text-align: center;
  color: #666;
}

.empty-message {
  text-align: center;
  color: #999;
  padding: 40px;
}`
      }
    ],
    previewSupport: true,
    hints: [
      'Generate unique IDs with: Date.now().toString(36) + Math.random().toString(36)',
      'Use the spread operator to update tasks immutably: setTasks(prev => [...prev, newTask])',
      'For editing, consider using a separate state for the task being edited',
      'Remember to handle the empty state in localStorage on first load'
    ],
    resources: [
      { title: 'React useState Hook', url: 'https://react.dev/reference/react/useState' },
      { title: 'React useEffect Hook', url: 'https://react.dev/reference/react/useEffect' }
    ],
    totalPoints: 100,
    passingScore: 70
  },

  // Phase 5: Full-Stack Admin Panel (Month 4-5)
  {
    id: 5,
    title: 'Admin Dashboard with Database',
    description: 'Build a full-stack admin panel with user management, data tables, and Supabase integration.',
    phase: 5,
    type: 'fullstack',
    difficulty: 'advanced',
    estimatedTime: '8-10 hours',
    prerequisites: [33, 34, 35, 36, 44, 45],
    overview: `Create a professional admin dashboard with real database integration! This project combines
    Next.js, React, and Supabase to build a complete admin panel with authentication, user management,
    data visualization, and CRUD operations. This is a capstone project that brings together everything
    you've learned.`,
    objectives: [
      'Set up Supabase project with proper schema',
      'Implement admin authentication with protected routes',
      'Create a dashboard with statistics and charts',
      'Build a data table with sorting, filtering, and pagination',
      'Implement full CRUD operations for users/products',
      'Add role-based access control',
      'Create responsive sidebar navigation'
    ],
    requirements: [
      { id: 'auth', description: 'Admin authentication with Supabase', points: 15, checkType: 'regex', checkValue: 'supabase.*auth|signIn|signOut' },
      { id: 'protected', description: 'Protected routes/middleware', points: 10, checkType: 'regex', checkValue: 'middleware|redirect|useAuth' },
      { id: 'dashboard', description: 'Dashboard with statistics cards', points: 10, checkType: 'manual' },
      { id: 'table', description: 'Data table with sorting/filtering', points: 15, checkType: 'regex', checkValue: 'sort|filter|search' },
      { id: 'pagination', description: 'Pagination implementation', points: 10, checkType: 'regex', checkValue: 'page|limit|offset|pagination' },
      { id: 'crud', description: 'Full CRUD operations', points: 15, checkType: 'regex', checkValue: 'insert|update|delete|select' },
      { id: 'forms', description: 'Add/Edit forms with validation', points: 10, checkType: 'regex', checkValue: 'onSubmit|handleSubmit|validation' },
      { id: 'responsive', description: 'Responsive design with sidebar', points: 10, checkType: 'manual' },
      { id: 'error', description: 'Error handling and loading states', points: 5, checkType: 'regex', checkValue: 'loading|error|catch' }
    ],
    files: [
      {
        name: 'README.md',
        language: 'html',
        starterCode: `# Admin Dashboard Project

## Setup Instructions

1. Create a Supabase project at https://supabase.com

2. Create the following tables in Supabase:

\`\`\`sql
-- Users table (for admin management)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  role TEXT DEFAULT 'user',
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Products table (sample data to manage)
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2),
  category TEXT,
  stock INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert sample data
INSERT INTO users (email, name, role, status) VALUES
  ('admin@example.com', 'Admin User', 'admin', 'active'),
  ('john@example.com', 'John Doe', 'user', 'active'),
  ('jane@example.com', 'Jane Smith', 'user', 'inactive');

INSERT INTO products (name, description, price, category, stock) VALUES
  ('Laptop Pro', 'High-performance laptop', 1299.99, 'Electronics', 50),
  ('Wireless Mouse', 'Ergonomic wireless mouse', 49.99, 'Accessories', 200),
  ('USB-C Hub', '7-in-1 USB-C hub', 79.99, 'Accessories', 150);
\`\`\`

3. Copy your Supabase URL and anon key to .env.local

4. Implement the dashboard components below!
`
      },
      {
        name: 'page.tsx',
        language: 'tsx',
        starterCode: `// app/admin/page.tsx - Main Dashboard Page
'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Stats {
  totalUsers: number;
  activeUsers: number;
  totalProducts: number;
  totalRevenue: number;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  status: string;
  created_at: string;
}

// StatCard Component
function StatCard({ title, value, icon, color }: {
  title: string;
  value: string | number;
  icon: string;
  color: string;
}) {
  return (
    <div className={\`stat-card \${color}\`}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}

// DataTable Component
function DataTable({
  data,
  columns,
  onEdit,
  onDelete
}: {
  data: any[];
  columns: { key: string; label: string }[];
  onEdit: (item: any) => void;
  onDelete: (id: string) => void;
}) {
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [search, setSearch] = useState('');

  // TODO: Implement sorting logic
  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    // Implement sorting
    return 0;
  });

  // TODO: Implement search/filter logic
  const filteredData = sortedData.filter(item => {
    if (!search) return true;
    // Implement search
    return true;
  });

  return (
    <div className="data-table-container">
      <div className="table-controls">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>
      <table className="data-table">
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key} onClick={() => {
                // TODO: Implement sort toggle
              }}>
                {col.label}
                {sortKey === col.key && (sortOrder === 'asc' ? ' ↑' : ' ↓')}
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              {columns.map(col => (
                <td key={col.key}>{item[col.key]}</td>
              ))}
              <td className="actions">
                <button onClick={() => onEdit(item)}>Edit</button>
                <button onClick={() => onDelete(item.id)} className="delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Main Dashboard
export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    activeUsers: 0,
    totalProducts: 0,
    totalRevenue: 0
  });
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);

      // TODO: Fetch users from Supabase
      const { data: usersData, error: usersError } = await supabase
        .from('users')
        .select('*');

      if (usersError) throw usersError;

      // TODO: Fetch products and calculate stats

      setUsers(usersData || []);
      setStats({
        totalUsers: usersData?.length || 0,
        activeUsers: usersData?.filter(u => u.status === 'active').length || 0,
        totalProducts: 0, // Calculate from products
        totalRevenue: 0   // Calculate from products
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    // TODO: Implement delete with Supabase
  }

  async function handleEdit(user: User) {
    // TODO: Implement edit modal/form
  }

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <a href="#" className="active">Dashboard</a>
          <a href="#">Users</a>
          <a href="#">Products</a>
          <a href="#">Settings</a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <button className="add-btn">+ Add User</button>
        </header>

        <div className="stats-grid">
          <StatCard title="Total Users" value={stats.totalUsers} icon="👥" color="blue" />
          <StatCard title="Active Users" value={stats.activeUsers} icon="✓" color="green" />
          <StatCard title="Products" value={stats.totalProducts} icon="📦" color="purple" />
          <StatCard title="Revenue" value={\`$\${stats.totalRevenue}\`} icon="💰" color="yellow" />
        </div>

        <section className="data-section">
          <h2>Users</h2>
          <DataTable
            data={users}
            columns={[
              { key: 'name', label: 'Name' },
              { key: 'email', label: 'Email' },
              { key: 'role', label: 'Role' },
              { key: 'status', label: 'Status' }
            ]}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </div>
  );
}`
      },
      {
        name: 'admin.css',
        language: 'css',
        starterCode: `/* Admin Dashboard Styles */
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f0f2f5;
}

.admin-dashboard {
  display: flex;
  min-height: 100vh;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background: #1e293b;
  color: white;
  padding: 20px;
}

.sidebar h2 {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #334155;
}

.sidebar nav a {
  display: block;
  color: #94a3b8;
  text-decoration: none;
  padding: 12px 15px;
  border-radius: 8px;
  margin-bottom: 5px;
  transition: all 0.2s;
}

.sidebar nav a:hover,
.sidebar nav a.active {
  background: #334155;
  color: white;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 30px;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.add-btn {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}

.add-btn:hover { background: #2563eb; }

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.stat-icon {
  font-size: 32px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.stat-card.blue .stat-icon { background: #dbeafe; }
.stat-card.green .stat-icon { background: #dcfce7; }
.stat-card.purple .stat-icon { background: #f3e8ff; }
.stat-card.yellow .stat-icon { background: #fef3c7; }

.stat-content h3 {
  font-size: 24px;
  color: #1e293b;
}

.stat-content p {
  color: #64748b;
  font-size: 14px;
}

/* Data Table */
.data-section {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.data-section h2 {
  margin-bottom: 20px;
  color: #1e293b;
}

.table-controls {
  margin-bottom: 20px;
}

.search-input {
  padding: 10px 15px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  width: 300px;
  font-size: 14px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.data-table th {
  background: #f8fafc;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
}

.data-table th:hover { background: #f1f5f9; }

.data-table tr:hover { background: #f8fafc; }

.actions button {
  background: none;
  border: 1px solid #e2e8f0;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
  font-size: 12px;
}

.actions button:hover { background: #f1f5f9; }
.actions button.delete { color: #ef4444; border-color: #fecaca; }
.actions button.delete:hover { background: #fef2f2; }

/* Loading & Error */
.loading, .error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 18px;
}

.error { color: #ef4444; }

/* Responsive */
@media (max-width: 768px) {
  .admin-dashboard { flex-direction: column; }
  .sidebar { width: 100%; }
  .stats-grid { grid-template-columns: 1fr 1fr; }
}`
      }
    ],
    previewSupport: false,
    hints: [
      'Use supabase.from("table").select("*") to fetch data',
      'Implement optimistic updates for better UX when deleting/editing',
      'Use a modal component for the add/edit forms',
      'Add loading skeletons while data is being fetched'
    ],
    resources: [
      { title: 'Supabase JavaScript Client', url: 'https://supabase.com/docs/reference/javascript' },
      { title: 'Next.js Data Fetching', url: 'https://nextjs.org/docs/app/building-your-application/data-fetching' }
    ],
    totalPoints: 100,
    passingScore: 70
  },

  // Phase 6: Capstone - Full E-commerce (Month 6)
  {
    id: 6,
    title: 'Cake Shop Online Ordering System',
    description: 'Build a complete e-commerce platform for a cake shop with product catalog, cart, checkout, and order management.',
    phase: 6,
    type: 'fullstack',
    difficulty: 'advanced',
    estimatedTime: '15-20 hours',
    prerequisites: [52, 53, 57, 60, 65],
    overview: `This is your capstone project! Build a complete online ordering system for a cake shop.
    This full-stack application includes a customer-facing storefront with product browsing, shopping cart,
    and checkout, plus an admin panel for managing products and orders. You'll implement authentication,
    payment integration concepts, and real-time order updates.`,
    objectives: [
      'Create a beautiful storefront with product catalog',
      'Implement category filtering and search',
      'Build a shopping cart with localStorage persistence',
      'Create a checkout flow with form validation',
      'Integrate Supabase for products and orders database',
      'Build an admin panel for order management',
      'Add email notifications (optional)',
      'Implement responsive design for mobile ordering'
    ],
    requirements: [
      { id: 'catalog', description: 'Product catalog with categories and images', points: 10, checkType: 'manual' },
      { id: 'search', description: 'Product search and filtering', points: 10, checkType: 'regex', checkValue: 'search|filter' },
      { id: 'cart', description: 'Shopping cart with add/remove/quantity', points: 15, checkType: 'regex', checkValue: 'cart|addToCart|removeFromCart' },
      { id: 'checkout', description: 'Checkout form with validation', points: 15, checkType: 'regex', checkValue: 'checkout|order|submit' },
      { id: 'database', description: 'Supabase integration for products/orders', points: 15, checkType: 'regex', checkValue: 'supabase|insert|select' },
      { id: 'auth', description: 'User authentication for order history', points: 10, checkType: 'regex', checkValue: 'auth|signIn|user' },
      { id: 'admin', description: 'Admin panel for order management', points: 10, checkType: 'manual' },
      { id: 'responsive', description: 'Mobile-responsive design', points: 10, checkType: 'regex', checkValue: '@media|responsive' },
      { id: 'ux', description: 'Good UX with loading states and feedback', points: 5, checkType: 'manual' }
    ],
    files: [
      {
        name: 'README.md',
        language: 'html',
        starterCode: `# Sweet Delights Cake Shop

## Project Overview
Build a complete online ordering system for "Sweet Delights" cake shop.

## Database Schema (Supabase)

\`\`\`sql
-- Categories
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  image_url TEXT
);

-- Products
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  category_id UUID REFERENCES categories(id),
  available BOOLEAN DEFAULT true,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Orders
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  delivery_address TEXT,
  delivery_date DATE,
  delivery_time TEXT,
  items JSONB NOT NULL,
  subtotal DECIMAL(10,2),
  delivery_fee DECIMAL(10,2) DEFAULT 5.00,
  total DECIMAL(10,2),
  status TEXT DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Sample Data
INSERT INTO categories (name, slug) VALUES
  ('Birthday Cakes', 'birthday'),
  ('Wedding Cakes', 'wedding'),
  ('Cupcakes', 'cupcakes'),
  ('Custom Cakes', 'custom');

INSERT INTO products (name, description, price, category_id, featured) VALUES
  ('Classic Chocolate Cake', 'Rich chocolate layers with ganache', 45.00,
   (SELECT id FROM categories WHERE slug = 'birthday'), true),
  ('Vanilla Dream', 'Light vanilla sponge with buttercream', 40.00,
   (SELECT id FROM categories WHERE slug = 'birthday'), true),
  ('Red Velvet Delight', 'Classic red velvet with cream cheese', 50.00,
   (SELECT id FROM categories WHERE slug = 'birthday'), false);
\`\`\`

## Features to Implement

### Customer Features
- [ ] Browse products by category
- [ ] Search products
- [ ] View product details
- [ ] Add to cart
- [ ] Adjust quantities
- [ ] Checkout with delivery info
- [ ] View order history (logged in)

### Admin Features
- [ ] View all orders
- [ ] Update order status
- [ ] Add/edit products
- [ ] View sales statistics

## Pages Structure
- / (Home - Featured products)
- /menu (All products)
- /menu/[category] (Category page)
- /product/[id] (Product detail)
- /cart (Shopping cart)
- /checkout (Checkout form)
- /orders (Order history - auth required)
- /admin (Admin dashboard)
`
      },
      {
        name: 'store.tsx',
        language: 'tsx',
        starterCode: `// Store Context for Cart Management
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface StoreContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cake-shop-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cake-shop-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <StoreContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartCount
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}`
      },
      {
        name: 'page.tsx',
        language: 'tsx',
        starterCode: `// Home Page - Featured Products
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { useStore } from './store';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: { name: string };
}

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useStore();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image_url || '/placeholder-cake.jpg'} alt={product.name} />
      </div>
      <div className="product-info">
        <span className="category">{product.category?.name}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-footer">
          <span className="price">\${product.price.toFixed(2)}</span>
          <button onClick={() => addToCart(product)} className="add-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function CartIcon() {
  const { cartCount } = useStore();

  return (
    <Link href="/cart" className="cart-icon">
      🛒
      {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
    </Link>
  );
}

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeatured() {
      const { data } = await supabase
        .from('products')
        .select('*, category:categories(name)')
        .eq('featured', true)
        .eq('available', true)
        .limit(6);

      setFeaturedProducts(data || []);
      setLoading(false);
    }
    fetchFeatured();
  }, []);

  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <Link href="/" className="logo">
            🎂 Sweet Delights
          </Link>
          <nav>
            <Link href="/menu">Menu</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <CartIcon />
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Handcrafted Cakes for Every Occasion</h1>
          <p>Made with love, delivered with care</p>
          <Link href="/menu" className="cta-btn">
            Order Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <div className="container">
          <h2>Our Bestsellers</h2>
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <div className="products-grid">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          <Link href="/menu" className="view-all">
            View Full Menu →
          </Link>
        </div>
      </section>

      {/* TODO: Add more sections */}
      {/* - Categories showcase */}
      {/* - Testimonials */}
      {/* - How it works */}
      {/* - Footer */}
    </div>
  );
}`
      },
      {
        name: 'styles.css',
        language: 'css',
        starterCode: `/* Sweet Delights Cake Shop Styles */
:root {
  --primary: #e91e63;
  --primary-dark: #c2185b;
  --secondary: #fce4ec;
  --text: #333;
  --text-light: #666;
  --white: #fff;
  --shadow: 0 4px 20px rgba(0,0,0,0.1);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  color: var(--text);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.header {
  background: var(--white);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: var(--primary);
  text-decoration: none;
}

.header nav {
  display: flex;
  gap: 30px;
}

.header nav a {
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.header nav a:hover { color: var(--primary); }

.cart-icon {
  position: relative;
  font-size: 24px;
  text-decoration: none;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--primary);
  color: white;
  font-size: 12px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hero */
.hero {
  background: linear-gradient(135deg, var(--primary) 0%, #ff6090 100%);
  color: white;
  text-align: center;
  padding: 100px 20px;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 20px;
  opacity: 0.9;
  margin-bottom: 30px;
}

.cta-btn {
  display: inline-block;
  background: white;
  color: var(--primary);
  padding: 15px 40px;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* Featured Section */
.featured {
  padding: 80px 20px;
  background: #fafafa;
}

.featured h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
  color: var(--text);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

/* Product Card */
.product-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info {
  padding: 20px;
}

.product-info .category {
  color: var(--primary);
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
}

.product-info h3 {
  margin: 10px 0;
  font-size: 18px;
}

.product-info p {
  color: var(--text-light);
  font-size: 14px;
  margin-bottom: 15px;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 24px;
  font-weight: bold;
  color: var(--primary);
}

.add-btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.add-btn:hover {
  background: var(--primary-dark);
}

.view-all {
  display: block;
  text-align: center;
  margin-top: 40px;
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
}

/* Loading */
.loading {
  text-align: center;
  padding: 40px;
  color: var(--text-light);
}

/* Responsive */
@media (max-width: 768px) {
  .header nav { display: none; }
  .hero h1 { font-size: 32px; }
  .hero p { font-size: 16px; }
  .products-grid { grid-template-columns: 1fr; }
}`
      }
    ],
    previewSupport: false,
    hints: [
      'Start by setting up the database schema in Supabase',
      'Build the cart functionality first, then connect to the database',
      'Use React Context for global cart state management',
      'Implement the checkout flow last after products and cart work',
      'Test on mobile devices to ensure responsive design works'
    ],
    resources: [
      { title: 'Supabase Quick Start', url: 'https://supabase.com/docs/guides/getting-started' },
      { title: 'Next.js E-commerce Tutorial', url: 'https://nextjs.org/commerce' },
      { title: 'React Context Guide', url: 'https://react.dev/learn/passing-data-deeply-with-context' }
    ],
    totalPoints: 100,
    passingScore: 70
  }
];

// Helper functions
export function getChallengeById(id: number): Challenge | undefined {
  return challenges.find(c => c.id === id);
}

export function getChallengesByPhase(phase: number): Challenge[] {
  return challenges.filter(c => c.phase === phase);
}

export const PHASES = [
  { phase: 1, title: 'HTML Basics', month: 1, description: 'Build your first website' },
  { phase: 2, title: 'HTML + CSS', month: 1, description: 'Add styling and layouts' },
  { phase: 3, title: 'JavaScript', month: 2, description: 'Make it interactive' },
  { phase: 4, title: 'React', month: 3, description: 'Build modern UI components' },
  { phase: 5, title: 'Full-Stack', month: 4, description: 'Connect to databases' },
  { phase: 6, title: 'Capstone', month: 6, description: 'Build a complete application' }
];

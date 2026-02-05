import { PracticeExercise } from '@/types/exercise';

export const htmlCssExercises: PracticeExercise[] = [
  {
    id: 1,
    title: 'Create a Basic HTML Structure',
    description: 'Build a proper HTML5 document structure with semantic elements.',
    difficulty: 'beginner',
    category: 'HTML',
    estimatedTime: '10 min',
    exerciseType: 'html-css',
    previewSupport: true,
    relatedLessons: [2],
    problemStatement: `Create a basic HTML5 document structure with the following elements:

1. A proper DOCTYPE declaration
2. HTML element with lang="en"
3. Head section with:
   - Meta charset UTF-8
   - Meta viewport for responsiveness
   - Title "My First Page"
4. Body section with:
   - A header containing an h1 with "Welcome"
   - A main section with a paragraph
   - A footer with copyright text

Your HTML should be semantic and properly indented.`,
    hints: [
      'Start with <!DOCTYPE html>',
      'Remember to include both <head> and <body> inside <html>',
      'Use semantic elements like <header>, <main>, and <footer>',
    ],
    language: 'html',
    starterCode: `<!DOCTYPE html>
<html>
  <!-- Add your code here -->
</html>`,
    solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
</head>
<body>
  <header>
    <h1>Welcome</h1>
  </header>
  <main>
    <p>This is my first webpage.</p>
  </main>
  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
</html>`,
    testCases: [
      { id: '1', description: 'Should have DOCTYPE html', input: 'document.doctype.name', expectedOutput: '"html"' },
      { id: '2', description: 'HTML should have lang attribute', input: 'document.documentElement.lang', expectedOutput: '"en"' },
      { id: '3', description: 'Should have header element', input: 'document.querySelector("header") !== null', expectedOutput: 'true' },
      { id: '4', description: 'Should have main element', input: 'document.querySelector("main") !== null', expectedOutput: 'true' },
    ],
    tags: ['html', 'structure', 'semantic', 'beginner'],
  },
  {
    id: 2,
    title: 'Build a Navigation Menu',
    description: 'Create a semantic navigation menu with links.',
    difficulty: 'beginner',
    category: 'HTML',
    estimatedTime: '10 min',
    exerciseType: 'html-css',
    previewSupport: true,
    relatedLessons: [2, 3],
    problemStatement: `Create a navigation menu with the following requirements:

1. Use the semantic \`<nav>\` element
2. Inside nav, create an unordered list (\`<ul>\`)
3. Add 4 list items (\`<li>\`) with links (\`<a>\`):
   - Home (href="/")
   - About (href="/about")
   - Services (href="/services")
   - Contact (href="/contact")

The navigation should be accessible and semantic.`,
    hints: [
      'Wrap everything in a <nav> element',
      'Use <ul> for the list of links',
      'Each <li> should contain an <a> tag',
    ],
    language: 'html',
    starterCode: `<!-- Create your navigation menu here -->`,
    solutionCode: `<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`,
    testCases: [
      { id: '1', description: 'Should have nav element', input: 'document.querySelector("nav") !== null', expectedOutput: 'true' },
      { id: '2', description: 'Should have ul inside nav', input: 'document.querySelector("nav ul") !== null', expectedOutput: 'true' },
      { id: '3', description: 'Should have 4 list items', input: 'document.querySelectorAll("nav li").length', expectedOutput: '4' },
      { id: '4', description: 'Should have 4 links', input: 'document.querySelectorAll("nav a").length', expectedOutput: '4' },
    ],
    tags: ['html', 'navigation', 'semantic', 'accessibility'],
  },
  {
    id: 3,
    title: 'Create a Contact Form',
    description: 'Build an accessible contact form with proper labels and validation.',
    difficulty: 'beginner',
    category: 'HTML',
    estimatedTime: '15 min',
    exerciseType: 'html-css',
    previewSupport: true,
    relatedLessons: [4],
    problemStatement: `Create a contact form with the following fields:

1. Name (text input, required)
2. Email (email input, required)
3. Message (textarea, required)
4. Submit button

Requirements:
- Use proper \`<label>\` elements with \`for\` attributes
- Add \`id\` attributes that match the \`for\` attributes
- Use appropriate input types
- Add the \`required\` attribute where needed
- Wrap everything in a \`<form>\` element`,
    hints: [
      'The label\'s "for" attribute should match the input\'s "id"',
      'Use type="email" for email validation',
      'Use <textarea> for the message field',
    ],
    language: 'html',
    starterCode: `<form>
  <!-- Add your form fields here -->
</form>`,
    solutionCode: `<form>
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div>
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  <button type="submit">Send</button>
</form>`,
    testCases: [
      { id: '1', description: 'Should have form element', input: 'document.querySelector("form") !== null', expectedOutput: 'true' },
      { id: '2', description: 'Should have email input', input: 'document.querySelector("input[type=email]") !== null', expectedOutput: 'true' },
      { id: '3', description: 'Should have textarea', input: 'document.querySelector("textarea") !== null', expectedOutput: 'true' },
      { id: '4', description: 'All required fields should be required', input: 'document.querySelectorAll("[required]").length >= 3', expectedOutput: 'true' },
    ],
    tags: ['html', 'forms', 'accessibility', 'validation'],
  },
  {
    id: 4,
    title: 'Style a Button with CSS',
    description: 'Create an attractive button with hover effects.',
    difficulty: 'beginner',
    category: 'CSS',
    estimatedTime: '10 min',
    exerciseType: 'html-css',
    previewSupport: true,
    relatedLessons: [5],
    problemStatement: `Style a button with the following CSS properties:

1. Background color: #3b82f6 (blue)
2. Text color: white
3. Padding: 12px 24px
4. Border: none
5. Border radius: 8px
6. Font size: 16px
7. Cursor: pointer
8. Hover state: background color changes to #2563eb

Write the CSS for the \`.btn\` class.`,
    hints: [
      'Use the :hover pseudo-class for the hover state',
      'Add transition for smooth hover effect',
      'Remember to set cursor: pointer',
    ],
    language: 'css',
    starterCode: `.btn {
  /* Add your styles here */
}

.btn:hover {
  /* Add hover styles here */
}`,
    solutionCode: `.btn {
  background-color: #3b82f6;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: #2563eb;
}`,
    testCases: [
      { id: '1', description: 'Button should have blue background', input: 'getComputedStyle(document.querySelector(".btn")).backgroundColor', expectedOutput: '"rgb(59, 130, 246)"' },
      { id: '2', description: 'Button should have white text', input: 'getComputedStyle(document.querySelector(".btn")).color', expectedOutput: '"rgb(255, 255, 255)"' },
      { id: '3', description: 'Button should have pointer cursor', input: 'getComputedStyle(document.querySelector(".btn")).cursor', expectedOutput: '"pointer"' },
    ],
    tags: ['css', 'buttons', 'hover', 'styling'],
  },
  {
    id: 5,
    title: 'Center an Element with Flexbox',
    description: 'Use Flexbox to center content both horizontally and vertically.',
    difficulty: 'beginner',
    category: 'CSS',
    estimatedTime: '10 min',
    exerciseType: 'html-css',
    previewSupport: true,
    relatedLessons: [7],
    problemStatement: `Create a CSS class \`.center-flex\` that centers its children both horizontally and vertically using Flexbox.

Requirements:
1. Use display: flex
2. Center items on the main axis (horizontally)
3. Center items on the cross axis (vertically)
4. Set minimum height to 100vh (full viewport height)`,
    hints: [
      'Use justify-content for horizontal centering',
      'Use align-items for vertical centering',
      'min-height: 100vh makes the container full height',
    ],
    language: 'css',
    starterCode: `.center-flex {
  /* Add your flexbox centering styles */
}`,
    solutionCode: `.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`,
    testCases: [
      { id: '1', description: 'Should use flexbox', input: 'getComputedStyle(document.querySelector(".center-flex")).display', expectedOutput: '"flex"' },
      { id: '2', description: 'Should center horizontally', input: 'getComputedStyle(document.querySelector(".center-flex")).justifyContent', expectedOutput: '"center"' },
      { id: '3', description: 'Should center vertically', input: 'getComputedStyle(document.querySelector(".center-flex")).alignItems', expectedOutput: '"center"' },
    ],
    tags: ['css', 'flexbox', 'centering', 'layout'],
  },
  {
    id: 6,
    title: 'Create a Card Component',
    description: 'Build a reusable card component with CSS.',
    difficulty: 'beginner',
    category: 'CSS',
    estimatedTime: '15 min',
    exerciseType: 'html-css',
    previewSupport: true,
    relatedLessons: [5, 6],
    problemStatement: `Style a card component with the following requirements:

\`.card\` class should have:
- Background: white
- Border radius: 12px
- Box shadow: subtle shadow
- Padding: 24px
- Max width: 320px

\`.card-title\` class should have:
- Font size: 20px
- Font weight: bold
- Margin bottom: 12px

\`.card-text\` class should have:
- Color: #666
- Line height: 1.6`,
    hints: [
      'Use box-shadow for the subtle shadow effect',
      'overflow: hidden can help with border-radius on images',
      'Consider adding a transition for hover effects',
    ],
    language: 'css',
    starterCode: `.card {
  /* Card container styles */
}

.card-title {
  /* Title styles */
}

.card-text {
  /* Text styles */
}`,
    solutionCode: `.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 24px;
  max-width: 320px;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #1a1a1a;
}

.card-text {
  color: #666;
  line-height: 1.6;
}`,
    testCases: [
      { id: '1', description: 'Card should have white background', input: 'getComputedStyle(document.querySelector(".card")).backgroundColor', expectedOutput: '"rgb(255, 255, 255)"' },
      { id: '2', description: 'Card should have border-radius', input: 'getComputedStyle(document.querySelector(".card")).borderRadius', expectedOutput: '"12px"' },
      { id: '3', description: 'Card title should be bold', input: 'parseInt(getComputedStyle(document.querySelector(".card-title")).fontWeight) >= 700', expectedOutput: 'true' },
    ],
    tags: ['css', 'components', 'card', 'design'],
  },
  {
    id: 7,
    title: 'Responsive Grid Layout',
    description: 'Create a responsive grid that adapts to screen size.',
    difficulty: 'intermediate',
    category: 'CSS',
    estimatedTime: '15 min',
    exerciseType: 'html-css',
    previewSupport: true,
    relatedLessons: [8, 9],
    problemStatement: `Create a responsive grid layout using CSS Grid:

\`.grid\` class requirements:
- Display: grid
- Gap: 20px between items
- Auto-fit columns that are minimum 250px and maximum 1fr
- This should automatically adjust the number of columns based on container width

This creates a responsive grid without media queries!`,
    hints: [
      'Use grid-template-columns with repeat()',
      'Use auto-fit with minmax() for responsive columns',
      'minmax(250px, 1fr) creates flexible columns',
    ],
    language: 'css',
    starterCode: `.grid {
  /* Create responsive grid */
}`,
    solutionCode: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}`,
    testCases: [
      { id: '1', description: 'Should use grid display', input: 'getComputedStyle(document.querySelector(".grid")).display', expectedOutput: '"grid"' },
      { id: '2', description: 'Should have gap', input: 'getComputedStyle(document.querySelector(".grid")).gap', expectedOutput: '"20px"' },
    ],
    tags: ['css', 'grid', 'responsive', 'layout'],
  },
  {
    id: 8,
    title: 'CSS Variables Theme',
    description: 'Create a theme system using CSS custom properties.',
    difficulty: 'intermediate',
    category: 'CSS',
    estimatedTime: '15 min',
    exerciseType: 'html-css',
    previewSupport: true,
    relatedLessons: [10],
    problemStatement: `Create a theme system using CSS variables:

Define in \`:root\`:
- --primary-color: #3b82f6
- --secondary-color: #10b981
- --background: #ffffff
- --text-color: #1a1a1a
- --border-radius: 8px

Define in \`.dark\` class (dark theme):
- --background: #1a1a2e
- --text-color: #eaeaea

Then use these variables in a \`.themed-box\` class.`,
    hints: [
      'Use :root for global CSS variables',
      'Use var(--variable-name) to reference variables',
      'The .dark class overrides the :root values',
    ],
    language: 'css',
    starterCode: `:root {
  /* Define light theme variables */
}

.dark {
  /* Define dark theme overrides */
}

.themed-box {
  /* Use the variables here */
}`,
    solutionCode: `:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
  --background: #ffffff;
  --text-color: #1a1a1a;
  --border-radius: 8px;
}

.dark {
  --background: #1a1a2e;
  --text-color: #eaeaea;
}

.themed-box {
  background-color: var(--background);
  color: var(--text-color);
  border-radius: var(--border-radius);
  padding: 20px;
  border: 2px solid var(--primary-color);
}`,
    testCases: [
      { id: '1', description: 'Should define --primary-color', input: 'getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()', expectedOutput: '"#3b82f6"' },
      { id: '2', description: 'Should define --background', input: 'getComputedStyle(document.documentElement).getPropertyValue("--background").trim()', expectedOutput: '"#ffffff"' },
    ],
    tags: ['css', 'variables', 'theming', 'dark-mode'],
  },
  {
    id: 9,
    title: 'Animated Loading Spinner',
    description: 'Create a CSS-only loading spinner animation.',
    difficulty: 'intermediate',
    category: 'CSS',
    estimatedTime: '15 min',
    exerciseType: 'html-css',
    previewSupport: true,
    relatedLessons: [5],
    problemStatement: `Create an animated loading spinner using CSS:

\`.spinner\` class requirements:
- Width and height: 40px
- Border: 4px solid #e5e7eb (light gray)
- Border-top: 4px solid #3b82f6 (blue)
- Border-radius: 50% (makes it circular)
- Animation: rotate 360 degrees continuously
- Animation duration: 1 second
- Animation timing: linear
- Animation iteration: infinite

Create the @keyframes for the spin animation.`,
    hints: [
      'Use border-radius: 50% for a circle',
      'border-top-color creates the spinning effect',
      '@keyframes defines the animation',
    ],
    language: 'css',
    starterCode: `.spinner {
  /* Spinner styles */
}

@keyframes spin {
  /* Define rotation animation */
}`,
    solutionCode: `.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e5e7eb;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`,
    testCases: [
      { id: '1', description: 'Should be circular', input: 'getComputedStyle(document.querySelector(".spinner")).borderRadius', expectedOutput: '"50%"' },
      { id: '2', description: 'Should have animation', input: 'getComputedStyle(document.querySelector(".spinner")).animationName', expectedOutput: '"spin"' },
    ],
    tags: ['css', 'animation', 'keyframes', 'loading'],
  },
  {
    id: 10,
    title: 'Responsive Navigation',
    description: 'Build a mobile-first responsive navigation bar.',
    difficulty: 'intermediate',
    category: 'CSS',
    estimatedTime: '20 min',
    exerciseType: 'html-css',
    previewSupport: true,
    relatedLessons: [7, 9],
    problemStatement: `Create a responsive navigation that:

Mobile (default):
- Flexbox column layout
- Full width links
- Stack vertically

Desktop (min-width: 768px):
- Flexbox row layout
- Space between logo and links
- Horizontal links

Classes to style:
- \`.navbar\` - the main container
- \`.nav-links\` - the list of links`,
    hints: [
      'Start with mobile styles (no media query)',
      'Use @media (min-width: 768px) for desktop',
      'flex-direction changes between column and row',
    ],
    language: 'css',
    starterCode: `.navbar {
  /* Mobile styles */
}

.nav-links {
  /* Mobile styles */
}

@media (min-width: 768px) {
  .navbar {
    /* Desktop styles */
  }

  .nav-links {
    /* Desktop styles */
  }
}`,
    solutionCode: `.navbar {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #1a1a2e;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 0.5rem;
}

@media (min-width: 768px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links {
    flex-direction: row;
    gap: 1rem;
  }
}`,
    testCases: [
      { id: '1', description: 'Navbar should use flexbox', input: 'getComputedStyle(document.querySelector(".navbar")).display', expectedOutput: '"flex"' },
      { id: '2', description: 'Nav links should use flexbox', input: 'getComputedStyle(document.querySelector(".nav-links")).display', expectedOutput: '"flex"' },
    ],
    tags: ['css', 'responsive', 'navigation', 'flexbox', 'media-queries'],
  },
];

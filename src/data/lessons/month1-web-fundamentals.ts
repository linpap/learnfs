import { Lesson } from '@/types/lesson';

export const month1Lessons: Lesson[] = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn what web development is, how the web works, and what tools you'll need",
    duration: "30 min",
    difficulty: "Beginner",
    month: 1,
    week: 1,
    category: "Web Basics",
    content: `
      <h2>Welcome to Full-Stack Web Development!</h2>
      <p>Web development is the process of building websites and web applications. In this course, you'll learn everything from the basics of HTML to deploying full-stack applications.</p>

      <h3>How the Web Works</h3>
      <p>When you visit a website, here's what happens:</p>
      <ol>
        <li><strong>You type a URL</strong> in your browser (like www.example.com)</li>
        <li><strong>DNS lookup</strong> converts the domain to an IP address</li>
        <li><strong>Your browser sends a request</strong> to the server at that IP</li>
        <li><strong>The server responds</strong> with HTML, CSS, and JavaScript files</li>
        <li><strong>Your browser renders</strong> the page you see</li>
      </ol>

      <h3>Frontend vs Backend</h3>
      <p><strong>Frontend (Client-Side)</strong> - What users see and interact with:</p>
      <ul>
        <li>HTML - Structure and content</li>
        <li>CSS - Styling and layout</li>
        <li>JavaScript - Interactivity and behavior</li>
      </ul>

      <p><strong>Backend (Server-Side)</strong> - What happens behind the scenes:</p>
      <ul>
        <li>Server logic (Node.js, Python, etc.)</li>
        <li>Databases (PostgreSQL, MongoDB)</li>
        <li>APIs and authentication</li>
      </ul>

      <h3>What You'll Learn in This Course</h3>
      <div class="highlight">
        <p><strong>Month 1:</strong> HTML, CSS, JavaScript basics</p>
        <p><strong>Month 2:</strong> Advanced JavaScript and TypeScript</p>
        <p><strong>Month 3:</strong> React fundamentals</p>
        <p><strong>Month 4:</strong> Next.js and full-stack development</p>
        <p><strong>Month 5:</strong> Backend, databases, and authentication</p>
        <p><strong>Month 6:</strong> Testing, deployment, and best practices</p>
      </div>

      <h3>Tools You'll Need</h3>
      <ul>
        <li><strong>Code Editor:</strong> VS Code (free and powerful)</li>
        <li><strong>Browser:</strong> Chrome or Firefox with Developer Tools</li>
        <li><strong>Terminal:</strong> Built into your OS or VS Code</li>
        <li><strong>Node.js:</strong> For running JavaScript and tools</li>
        <li><strong>Git:</strong> Version control for your code</li>
      </ul>
    `,
    questions: [
      {
        id: "1-1",
        type: "mcq",
        question: "What does HTML primarily handle in web development?",
        options: ["Styling and colors", "Structure and content", "Server-side logic", "Database operations"],
        correctAnswer: "Structure and content",
        explanation: "HTML (HyperText Markup Language) is responsible for the structure and content of web pages. CSS handles styling, and JavaScript handles interactivity."
      },
      {
        id: "1-2",
        type: "mcq",
        question: "What is the role of DNS in web browsing?",
        options: ["Renders the webpage", "Converts domain names to IP addresses", "Sends JavaScript to the browser", "Stores website data"],
        correctAnswer: "Converts domain names to IP addresses",
        explanation: "DNS (Domain Name System) acts like a phone book for the internet, converting human-readable domain names (like google.com) into IP addresses that computers use."
      },
      {
        id: "1-3",
        type: "descriptive",
        question: "Explain the difference between frontend and backend development.",
        keywords: ["frontend", "backend", "client", "server", "user", "browser", "database", "HTML", "CSS", "JavaScript"],
        explanation: "Frontend development focuses on what users see and interact with in the browser (HTML, CSS, JavaScript), while backend development handles server-side logic, databases, and APIs that power the application behind the scenes."
      }
    ]
  },
  {
    id: 2,
    title: "HTML Document Structure",
    description: "Learn the fundamental building blocks of every HTML document",
    duration: "35 min",
    difficulty: "Beginner",
    month: 1,
    week: 1,
    category: "HTML",
    content: `
      <h2>HTML Document Structure</h2>
      <p>Every HTML document follows a specific structure. Let's break down each part.</p>

      <h3>The Basic HTML Template</h3>
      <div class="code-block">
        <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My First Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello, World!&lt;/h1&gt;
  &lt;p&gt;This is my first webpage.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
      </div>

      <h3>Understanding Each Part</h3>

      <h4>&lt;!DOCTYPE html&gt;</h4>
      <p>Tells the browser this is an HTML5 document. Always include this first.</p>

      <h4>&lt;html&gt;</h4>
      <p>The root element that contains everything. The <code>lang</code> attribute specifies the language.</p>

      <h4>&lt;head&gt;</h4>
      <p>Contains metadata about the document (not visible on the page):</p>
      <ul>
        <li><code>&lt;meta charset="UTF-8"&gt;</code> - Character encoding</li>
        <li><code>&lt;meta name="viewport"&gt;</code> - Mobile responsiveness</li>
        <li><code>&lt;title&gt;</code> - Browser tab title</li>
        <li><code>&lt;link&gt;</code> - External stylesheets</li>
        <li><code>&lt;script&gt;</code> - JavaScript files</li>
      </ul>

      <h4>&lt;body&gt;</h4>
      <p>Contains all visible content that users see and interact with.</p>

      <h3>Common HTML Elements</h3>
      <div class="code-block">
        <pre>&lt;!-- Headings --&gt;
&lt;h1&gt;Main Title&lt;/h1&gt;
&lt;h2&gt;Section Title&lt;/h2&gt;
&lt;h3&gt;Subsection&lt;/h3&gt;

&lt;!-- Paragraphs --&gt;
&lt;p&gt;This is a paragraph of text.&lt;/p&gt;

&lt;!-- Links --&gt;
&lt;a href="https://example.com"&gt;Click here&lt;/a&gt;

&lt;!-- Images --&gt;
&lt;img src="image.jpg" alt="Description"&gt;

&lt;!-- Divs and Spans --&gt;
&lt;div&gt;Block-level container&lt;/div&gt;
&lt;span&gt;Inline container&lt;/span&gt;</pre>
      </div>

      <h3>Semantic HTML</h3>
      <p>Semantic elements describe their meaning to both the browser and developer:</p>
      <div class="code-block">
        <pre>&lt;header&gt;Page header&lt;/header&gt;
&lt;nav&gt;Navigation links&lt;/nav&gt;
&lt;main&gt;Main content&lt;/main&gt;
&lt;article&gt;Self-contained content&lt;/article&gt;
&lt;section&gt;Grouped content&lt;/section&gt;
&lt;aside&gt;Sidebar content&lt;/aside&gt;
&lt;footer&gt;Page footer&lt;/footer&gt;</pre>
      </div>

      <h3>Key Takeaways</h3>
      <div class="highlight">
        <p>1. Every HTML document needs DOCTYPE, html, head, and body</p>
        <p>2. The head contains metadata, the body contains visible content</p>
        <p>3. Use semantic elements for better accessibility and SEO</p>
        <p>4. Always include alt text for images</p>
      </div>
    `,
    questions: [
      {
        id: "2-1",
        type: "mcq",
        question: "What is the purpose of the <head> element?",
        options: ["Display visible content", "Contain metadata and links to resources", "Create the page header", "Define navigation"],
        correctAnswer: "Contain metadata and links to resources",
        explanation: "The <head> element contains metadata about the document, including character encoding, viewport settings, title, and links to stylesheets and scripts. It doesn't display visible content."
      },
      {
        id: "2-2",
        type: "mcq",
        question: "Which element should be used for the main navigation of a website?",
        options: ["<div>", "<nav>", "<menu>", "<header>"],
        correctAnswer: "<nav>",
        explanation: "The <nav> element is the semantic HTML5 element specifically designed to contain navigation links. Using semantic elements improves accessibility and SEO."
      },
      {
        id: "2-3",
        type: "descriptive",
        question: "Why is semantic HTML important? Give examples of semantic elements.",
        keywords: ["semantic", "accessibility", "SEO", "meaning", "header", "nav", "main", "article", "footer", "screen reader"],
        explanation: "Semantic HTML uses elements that describe their meaning (header, nav, main, article, footer). It improves accessibility for screen readers, helps search engines understand content, and makes code more readable."
      }
    ]
  },
  {
    id: 3,
    title: "Text and Content Elements",
    description: "Master HTML elements for displaying text, lists, and media",
    duration: "40 min",
    difficulty: "Beginner",
    month: 1,
    week: 1,
    category: "HTML",
    content: `
      <h2>Text and Content Elements</h2>
      <p>HTML provides many elements for structuring different types of content.</p>

      <h3>Headings</h3>
      <p>HTML has six heading levels, from h1 (most important) to h6 (least important):</p>
      <div class="code-block">
        <pre>&lt;h1&gt;Page Title (use only once per page)&lt;/h1&gt;
&lt;h2&gt;Major Section&lt;/h2&gt;
&lt;h3&gt;Subsection&lt;/h3&gt;
&lt;h4&gt;Minor heading&lt;/h4&gt;
&lt;h5&gt;Small heading&lt;/h5&gt;
&lt;h6&gt;Smallest heading&lt;/h6&gt;</pre>
      </div>

      <h3>Text Formatting</h3>
      <div class="code-block">
        <pre>&lt;p&gt;Regular paragraph text.&lt;/p&gt;
&lt;strong&gt;Bold/important text&lt;/strong&gt;
&lt;em&gt;Italic/emphasized text&lt;/em&gt;
&lt;mark&gt;Highlighted text&lt;/mark&gt;
&lt;small&gt;Smaller text&lt;/small&gt;
&lt;del&gt;Deleted text (strikethrough)&lt;/del&gt;
&lt;ins&gt;Inserted text (underlined)&lt;/ins&gt;
&lt;code&gt;Code snippet&lt;/code&gt;
&lt;pre&gt;Preformatted text (preserves whitespace)&lt;/pre&gt;</pre>
      </div>

      <h3>Lists</h3>
      <h4>Unordered List (bullets)</h4>
      <div class="code-block">
        <pre>&lt;ul&gt;
  &lt;li&gt;First item&lt;/li&gt;
  &lt;li&gt;Second item&lt;/li&gt;
  &lt;li&gt;Third item&lt;/li&gt;
&lt;/ul&gt;</pre>
      </div>

      <h4>Ordered List (numbers)</h4>
      <div class="code-block">
        <pre>&lt;ol&gt;
  &lt;li&gt;Step one&lt;/li&gt;
  &lt;li&gt;Step two&lt;/li&gt;
  &lt;li&gt;Step three&lt;/li&gt;
&lt;/ol&gt;</pre>
      </div>

      <h4>Definition List</h4>
      <div class="code-block">
        <pre>&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;HyperText Markup Language&lt;/dd&gt;
  &lt;dt&gt;CSS&lt;/dt&gt;
  &lt;dd&gt;Cascading Style Sheets&lt;/dd&gt;
&lt;/dl&gt;</pre>
      </div>

      <h3>Links and Navigation</h3>
      <div class="code-block">
        <pre>&lt;!-- External link --&gt;
&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;

&lt;!-- Open in new tab --&gt;
&lt;a href="https://example.com" target="_blank" rel="noopener"&gt;
  Opens in new tab
&lt;/a&gt;

&lt;!-- Internal link --&gt;
&lt;a href="/about"&gt;About Page&lt;/a&gt;

&lt;!-- Link to section --&gt;
&lt;a href="#section-id"&gt;Jump to section&lt;/a&gt;

&lt;!-- Email link --&gt;
&lt;a href="mailto:hello@example.com"&gt;Send Email&lt;/a&gt;</pre>
      </div>

      <h3>Images and Media</h3>
      <div class="code-block">
        <pre>&lt;!-- Basic image --&gt;
&lt;img src="photo.jpg" alt="A beautiful sunset"&gt;

&lt;!-- Image with dimensions --&gt;
&lt;img src="photo.jpg" alt="Description" width="400" height="300"&gt;

&lt;!-- Figure with caption --&gt;
&lt;figure&gt;
  &lt;img src="chart.png" alt="Sales chart"&gt;
  &lt;figcaption&gt;Q4 2024 Sales Data&lt;/figcaption&gt;
&lt;/figure&gt;</pre>
      </div>

      <h3>Quotes and Citations</h3>
      <div class="code-block">
        <pre>&lt;!-- Block quote --&gt;
&lt;blockquote cite="https://source.com"&gt;
  &lt;p&gt;A longer quotation that spans multiple lines.&lt;/p&gt;
&lt;/blockquote&gt;

&lt;!-- Inline quote --&gt;
&lt;p&gt;As Einstein said, &lt;q&gt;Imagination is more important than knowledge.&lt;/q&gt;&lt;/p&gt;</pre>
      </div>
    `,
    questions: [
      {
        id: "3-1",
        type: "mcq",
        question: "Which HTML element should you use for important text that needs emphasis?",
        options: ["<b>", "<strong>", "<i>", "<bold>"],
        correctAnswer: "<strong>",
        explanation: "<strong> is the semantic element for important text. While <b> also makes text bold, <strong> conveys meaning to screen readers and search engines."
      },
      {
        id: "3-2",
        type: "mcq",
        question: "What attribute is essential for accessibility when using <img> elements?",
        options: ["src", "width", "alt", "title"],
        correctAnswer: "alt",
        explanation: "The alt attribute provides alternative text for images, essential for screen readers and when images fail to load. It's a key accessibility requirement."
      },
      {
        id: "3-3",
        type: "descriptive",
        question: "What's the difference between ordered and unordered lists? When would you use each?",
        keywords: ["ordered", "unordered", "ol", "ul", "numbers", "bullets", "sequence", "steps", "list"],
        explanation: "Ordered lists (<ol>) display numbered items and are used when sequence matters (like steps in a recipe). Unordered lists (<ul>) display bulleted items for when order doesn't matter (like a shopping list)."
      }
    ]
  },
  {
    id: 4,
    title: "Forms and Input Elements",
    description: "Build interactive forms to collect user data",
    duration: "45 min",
    difficulty: "Beginner",
    month: 1,
    week: 1,
    category: "HTML",
    content: `
      <h2>HTML Forms</h2>
      <p>Forms are essential for collecting user input. Let's learn how to build them.</p>

      <h3>Basic Form Structure</h3>
      <div class="code-block">
        <pre>&lt;form action="/submit" method="POST"&gt;
  &lt;label for="name"&gt;Name:&lt;/label&gt;
  &lt;input type="text" id="name" name="name" required&gt;

  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email" required&gt;

  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</pre>
      </div>

      <h3>Input Types</h3>
      <div class="code-block">
        <pre>&lt;!-- Text inputs --&gt;
&lt;input type="text" placeholder="Enter text"&gt;
&lt;input type="email" placeholder="email@example.com"&gt;
&lt;input type="password" placeholder="Password"&gt;
&lt;input type="tel" placeholder="Phone number"&gt;
&lt;input type="url" placeholder="https://..."&gt;

&lt;!-- Numbers --&gt;
&lt;input type="number" min="0" max="100"&gt;
&lt;input type="range" min="0" max="100" value="50"&gt;

&lt;!-- Date/Time --&gt;
&lt;input type="date"&gt;
&lt;input type="time"&gt;
&lt;input type="datetime-local"&gt;

&lt;!-- Other types --&gt;
&lt;input type="checkbox" id="agree"&gt;
&lt;input type="radio" name="choice" value="a"&gt;
&lt;input type="file" accept="image/*"&gt;
&lt;input type="color"&gt;
&lt;input type="search" placeholder="Search..."&gt;</pre>
      </div>

      <h3>Textareas and Selects</h3>
      <div class="code-block">
        <pre>&lt;!-- Multi-line text --&gt;
&lt;textarea name="message" rows="4" cols="50"
  placeholder="Enter your message"&gt;&lt;/textarea&gt;

&lt;!-- Dropdown select --&gt;
&lt;select name="country"&gt;
  &lt;option value=""&gt;Choose a country&lt;/option&gt;
  &lt;option value="us"&gt;United States&lt;/option&gt;
  &lt;option value="uk"&gt;United Kingdom&lt;/option&gt;
  &lt;option value="ca"&gt;Canada&lt;/option&gt;
&lt;/select&gt;

&lt;!-- Multi-select --&gt;
&lt;select name="skills" multiple&gt;
  &lt;option value="html"&gt;HTML&lt;/option&gt;
  &lt;option value="css"&gt;CSS&lt;/option&gt;
  &lt;option value="js"&gt;JavaScript&lt;/option&gt;
&lt;/select&gt;</pre>
      </div>

      <h3>Form Validation Attributes</h3>
      <div class="code-block">
        <pre>&lt;!-- Required field --&gt;
&lt;input type="text" required&gt;

&lt;!-- Min/Max length --&gt;
&lt;input type="text" minlength="3" maxlength="50"&gt;

&lt;!-- Pattern (regex) --&gt;
&lt;input type="text" pattern="[A-Za-z]+"
  title="Only letters allowed"&gt;

&lt;!-- Number range --&gt;
&lt;input type="number" min="1" max="100" step="5"&gt;</pre>
      </div>

      <h3>Organizing Forms</h3>
      <div class="code-block">
        <pre>&lt;form&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Personal Information&lt;/legend&gt;

    &lt;div&gt;
      &lt;label for="fname"&gt;First Name:&lt;/label&gt;
      &lt;input type="text" id="fname" name="fname"&gt;
    &lt;/div&gt;

    &lt;div&gt;
      &lt;label for="lname"&gt;Last Name:&lt;/label&gt;
      &lt;input type="text" id="lname" name="lname"&gt;
    &lt;/div&gt;
  &lt;/fieldset&gt;

  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</pre>
      </div>

      <h3>Accessibility Best Practices</h3>
      <ul>
        <li>Always use <code>&lt;label&gt;</code> elements with <code>for</code> attribute</li>
        <li>Group related fields with <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code></li>
        <li>Provide clear error messages</li>
        <li>Use appropriate input types (email, tel, etc.)</li>
        <li>Include placeholder text as hints, not labels</li>
      </ul>
    `,
    questions: [
      {
        id: "4-1",
        type: "mcq",
        question: "What attribute connects a label to its input element?",
        options: ["name", "id", "for", "link"],
        correctAnswer: "for",
        explanation: "The 'for' attribute on a <label> element should match the 'id' attribute of the input it's associated with. This improves accessibility and allows clicking the label to focus the input."
      },
      {
        id: "4-2",
        type: "mcq",
        question: "Which input type provides built-in email validation?",
        options: ["type=\"text\"", "type=\"email\"", "type=\"validate\"", "type=\"mail\""],
        correctAnswer: "type=\"email\"",
        explanation: "The email input type provides built-in validation for email format. Browsers will show an error if the entered text doesn't match an email pattern."
      },
      {
        id: "4-3",
        type: "descriptive",
        question: "Explain why form accessibility matters and list three ways to improve it.",
        keywords: ["label", "for", "fieldset", "legend", "screen reader", "accessibility", "keyboard", "validation"],
        explanation: "Form accessibility ensures all users, including those with disabilities, can complete forms. Improve it by: 1) Using label elements with for attributes, 2) Grouping fields with fieldset/legend, 3) Using appropriate input types, 4) Providing clear error messages."
      }
    ]
  },
  {
    id: 5,
    title: "CSS Fundamentals",
    description: "Learn how to style web pages with CSS selectors and properties",
    duration: "40 min",
    difficulty: "Beginner",
    month: 1,
    week: 2,
    category: "CSS",
    content: `
      <h2>CSS Fundamentals</h2>
      <p>CSS (Cascading Style Sheets) controls how HTML elements look on the page.</p>

      <h3>Adding CSS to HTML</h3>
      <div class="code-block">
        <pre>&lt;!-- 1. External stylesheet (recommended) --&gt;
&lt;link rel="stylesheet" href="styles.css"&gt;

&lt;!-- 2. Internal styles --&gt;
&lt;style&gt;
  p { color: blue; }
&lt;/style&gt;

&lt;!-- 3. Inline styles (avoid when possible) --&gt;
&lt;p style="color: blue;"&gt;Blue text&lt;/p&gt;</pre>
      </div>

      <h3>CSS Syntax</h3>
      <div class="code-block">
        <pre>selector {
  property: value;
  property: value;
}

/* Example */
h1 {
  color: navy;
  font-size: 24px;
  margin-bottom: 16px;
}</pre>
      </div>

      <h3>CSS Selectors</h3>
      <div class="code-block">
        <pre>/* Element selector */
p { color: black; }

/* Class selector */
.highlight { background: yellow; }

/* ID selector */
#header { height: 60px; }

/* Descendant selector */
article p { line-height: 1.6; }

/* Child selector */
nav > a { padding: 10px; }

/* Multiple selectors */
h1, h2, h3 { font-family: Arial; }

/* Attribute selector */
input[type="email"] { border: 2px solid blue; }

/* Pseudo-classes */
a:hover { color: red; }
input:focus { outline: 2px solid blue; }
li:first-child { font-weight: bold; }
li:nth-child(odd) { background: #f5f5f5; }</pre>
      </div>

      <h3>Common CSS Properties</h3>
      <div class="code-block">
        <pre>/* Colors */
color: #333;                  /* Text color */
background-color: #f5f5f5;    /* Background */
border-color: #ddd;           /* Border */

/* Typography */
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
line-height: 1.5;
text-align: center;
text-decoration: underline;

/* Spacing */
margin: 20px;                 /* Outside spacing */
padding: 10px;                /* Inside spacing */
margin: 10px 20px;            /* vertical horizontal */
margin: 10px 20px 15px 25px;  /* top right bottom left */

/* Borders */
border: 1px solid #ccc;
border-radius: 8px;

/* Dimensions */
width: 100%;
max-width: 800px;
height: 200px;
min-height: 100px;</pre>
      </div>

      <h3>CSS Colors</h3>
      <div class="code-block">
        <pre>/* Named colors */
color: red;
color: darkblue;

/* Hex colors */
color: #ff0000;      /* Red */
color: #333;         /* Short form for #333333 */

/* RGB */
color: rgb(255, 0, 0);

/* RGBA (with transparency) */
color: rgba(0, 0, 0, 0.5);    /* 50% transparent black */

/* HSL */
color: hsl(0, 100%, 50%);     /* Red */</pre>
      </div>

      <h3>CSS Specificity</h3>
      <p>When multiple rules apply, specificity determines which wins:</p>
      <ol>
        <li><strong>Inline styles</strong> (1000 points)</li>
        <li><strong>ID selectors</strong> (100 points)</li>
        <li><strong>Class selectors</strong> (10 points)</li>
        <li><strong>Element selectors</strong> (1 point)</li>
      </ol>
    `,
    questions: [
      {
        id: "5-1",
        type: "mcq",
        question: "Which CSS selector has the highest specificity?",
        options: [".class", "#id", "element", "*"],
        correctAnswer: "#id",
        explanation: "ID selectors have higher specificity (100 points) than class selectors (10 points) and element selectors (1 point). Only inline styles have higher specificity."
      },
      {
        id: "5-2",
        type: "mcq",
        question: "What's the difference between margin and padding?",
        options: [
          "They are the same",
          "Margin is inside, padding is outside",
          "Margin is outside, padding is inside",
          "Margin is for text, padding is for images"
        ],
        correctAnswer: "Margin is outside, padding is inside",
        explanation: "Margin creates space outside an element's border (between elements), while padding creates space inside the border (between content and border)."
      },
      {
        id: "5-3",
        type: "descriptive",
        question: "Explain CSS specificity and why it matters.",
        keywords: ["specificity", "selector", "inline", "id", "class", "element", "override", "cascade"],
        explanation: "CSS specificity determines which styles apply when multiple rules target the same element. Higher specificity wins: inline styles (1000) > IDs (100) > classes (10) > elements (1). Understanding specificity helps debug styling issues."
      }
    ]
  },
  {
    id: 6,
    title: "Box Model & Layout",
    description: "Understand how elements take up space on the page",
    duration: "45 min",
    difficulty: "Beginner",
    month: 1,
    week: 2,
    category: "CSS",
    content: `
      <h2>The CSS Box Model</h2>
      <p>Every element in CSS is a box. Understanding the box model is crucial for layout.</p>

      <h3>Box Model Components</h3>
      <p>From inside to outside:</p>
      <ol>
        <li><strong>Content</strong> - The actual content (text, image, etc.)</li>
        <li><strong>Padding</strong> - Space between content and border</li>
        <li><strong>Border</strong> - The visible border around the element</li>
        <li><strong>Margin</strong> - Space outside the border</li>
      </ol>

      <h3>Box Sizing</h3>
      <div class="code-block">
        <pre>/* Default: width doesn't include padding/border */
.box-content {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* Actual width: 200 + 40 + 10 = 250px */
}

/* Better: width includes padding/border */
.box-border {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* Actual width: 200px (as specified) */
}

/* Apply to all elements (recommended) */
*, *::before, *::after {
  box-sizing: border-box;
}</pre>
      </div>

      <h3>Display Property</h3>
      <div class="code-block">
        <pre>/* Block: takes full width, starts new line */
display: block;

/* Inline: flows with text, no width/height */
display: inline;

/* Inline-block: inline + respects width/height */
display: inline-block;

/* None: removes from page */
display: none;

/* Modern layouts */
display: flex;
display: grid;</pre>
      </div>

      <h3>Block vs Inline Elements</h3>
      <p><strong>Block elements:</strong> div, p, h1-h6, section, article, header, footer</p>
      <ul>
        <li>Take full available width</li>
        <li>Start on a new line</li>
        <li>Can have width, height, margin, padding</li>
      </ul>

      <p><strong>Inline elements:</strong> span, a, strong, em, img, input</p>
      <ul>
        <li>Take only needed width</li>
        <li>Stay in the text flow</li>
        <li>Width/height don't apply (except img, input)</li>
        <li>Only horizontal margin/padding works</li>
      </ul>

      <h3>Positioning</h3>
      <div class="code-block">
        <pre>/* Static: default, normal flow */
position: static;

/* Relative: offset from normal position */
position: relative;
top: 10px;
left: 20px;

/* Absolute: positioned relative to nearest positioned ancestor */
position: absolute;
top: 0;
right: 0;

/* Fixed: positioned relative to viewport */
position: fixed;
bottom: 20px;
right: 20px;

/* Sticky: switches between relative and fixed */
position: sticky;
top: 0;</pre>
      </div>

      <h3>Centering Elements</h3>
      <div class="code-block">
        <pre>/* Center block element horizontally */
.center-block {
  width: 300px;
  margin: 0 auto;
}

/* Center text */
.center-text {
  text-align: center;
}

/* Center with Flexbox */
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Center with Grid */
.center-grid {
  display: grid;
  place-items: center;
}</pre>
      </div>
    `,
    questions: [
      {
        id: "6-1",
        type: "mcq",
        question: "What does box-sizing: border-box do?",
        options: [
          "Adds a box around the border",
          "Makes the border thicker",
          "Includes padding and border in the element's width",
          "Removes the border from the box model"
        ],
        correctAnswer: "Includes padding and border in the element's width",
        explanation: "box-sizing: border-box includes padding and border in the specified width/height, making layouts more predictable. Without it, padding and border add to the specified dimensions."
      },
      {
        id: "6-2",
        type: "mcq",
        question: "How do you center a block element horizontally?",
        options: [
          "text-align: center",
          "margin: 0 auto with a set width",
          "align: center",
          "horizontal-align: center"
        ],
        correctAnswer: "margin: 0 auto with a set width",
        explanation: "To center a block element horizontally, give it a width and use margin: 0 auto. The 'auto' value distributes available space equally on left and right."
      },
      {
        id: "6-3",
        type: "descriptive",
        question: "Explain the difference between position: relative and position: absolute.",
        keywords: ["relative", "absolute", "normal flow", "parent", "ancestor", "offset", "positioned"],
        explanation: "position: relative moves an element from its normal position while keeping its space in the flow. position: absolute removes the element from flow and positions it relative to the nearest positioned ancestor (or viewport)."
      }
    ]
  },
  {
    id: 7,
    title: "Flexbox Layout",
    description: "Master one-dimensional layouts with CSS Flexbox",
    duration: "50 min",
    difficulty: "Beginner",
    month: 1,
    week: 2,
    category: "CSS",
    content: `
      <h2>CSS Flexbox</h2>
      <p>Flexbox is a one-dimensional layout system for arranging items in rows or columns.</p>

      <h3>Enable Flexbox</h3>
      <div class="code-block">
        <pre>.container {
  display: flex;
}</pre>
      </div>

      <h3>Flex Container Properties</h3>

      <h4>flex-direction</h4>
      <div class="code-block">
        <pre>flex-direction: row;           /* Default: left to right */
flex-direction: row-reverse;   /* Right to left */
flex-direction: column;        /* Top to bottom */
flex-direction: column-reverse; /* Bottom to top */</pre>
      </div>

      <h4>justify-content (main axis)</h4>
      <div class="code-block">
        <pre>justify-content: flex-start;    /* Items at start */
justify-content: flex-end;      /* Items at end */
justify-content: center;        /* Items centered */
justify-content: space-between; /* Even space, no edges */
justify-content: space-around;  /* Even space, half at edges */
justify-content: space-evenly;  /* Even space everywhere */</pre>
      </div>

      <h4>align-items (cross axis)</h4>
      <div class="code-block">
        <pre>align-items: stretch;      /* Default: fill container */
align-items: flex-start;   /* Top of container */
align-items: flex-end;     /* Bottom of container */
align-items: center;       /* Vertically centered */
align-items: baseline;     /* Text baseline aligned */</pre>
      </div>

      <h4>flex-wrap</h4>
      <div class="code-block">
        <pre>flex-wrap: nowrap;       /* Default: single line */
flex-wrap: wrap;         /* Wrap to multiple lines */
flex-wrap: wrap-reverse; /* Wrap in reverse */</pre>
      </div>

      <h4>gap</h4>
      <div class="code-block">
        <pre>gap: 20px;           /* Same gap in both directions */
gap: 10px 20px;      /* row-gap column-gap */
row-gap: 10px;
column-gap: 20px;</pre>
      </div>

      <h3>Flex Item Properties</h3>

      <h4>flex-grow</h4>
      <div class="code-block">
        <pre>/* How much an item should grow */
.item { flex-grow: 0; }     /* Don't grow (default) */
.item { flex-grow: 1; }     /* Take available space */
.item-2 { flex-grow: 2; }   /* Take twice as much space */</pre>
      </div>

      <h4>flex-shrink</h4>
      <div class="code-block">
        <pre>/* How much an item should shrink */
.item { flex-shrink: 1; }   /* Default: can shrink */
.item { flex-shrink: 0; }   /* Don't shrink */</pre>
      </div>

      <h4>flex-basis</h4>
      <div class="code-block">
        <pre>/* Initial size before growing/shrinking */
flex-basis: auto;    /* Use content or width */
flex-basis: 200px;   /* Fixed initial size */
flex-basis: 25%;     /* Percentage */</pre>
      </div>

      <h4>flex shorthand</h4>
      <div class="code-block">
        <pre>/* flex: grow shrink basis */
flex: 1;           /* flex: 1 1 0% */
flex: auto;        /* flex: 1 1 auto */
flex: none;        /* flex: 0 0 auto */
flex: 0 0 200px;   /* Don't grow/shrink, 200px basis */</pre>
      </div>

      <h3>Common Flexbox Patterns</h3>
      <div class="code-block">
        <pre>/* Navigation bar */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Center anything */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Card grid */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card {
  flex: 1 1 300px;
}</pre>
      </div>
    `,
    questions: [
      {
        id: "7-1",
        type: "mcq",
        question: "What does justify-content: space-between do?",
        options: [
          "Centers items with equal space",
          "Places first item at start, last at end, equal space between",
          "Adds space on all sides of items",
          "Removes space between items"
        ],
        correctAnswer: "Places first item at start, last at end, equal space between",
        explanation: "space-between places the first item at the start, the last item at the end, and distributes remaining space evenly between the other items."
      },
      {
        id: "7-2",
        type: "mcq",
        question: "How do you make a flex item take up all available space?",
        options: ["width: 100%", "flex-grow: 1", "flex-fill: true", "expand: true"],
        correctAnswer: "flex-grow: 1",
        explanation: "flex-grow: 1 tells an item to grow and take up available space in the container. Multiple items with flex-grow: 1 will share space equally."
      },
      {
        id: "7-3",
        type: "descriptive",
        question: "Explain the difference between justify-content and align-items.",
        keywords: ["main axis", "cross axis", "horizontal", "vertical", "justify", "align", "direction"],
        explanation: "justify-content aligns items along the main axis (horizontal in row, vertical in column). align-items aligns items along the cross axis (perpendicular to main). Together they control both dimensions."
      }
    ]
  },
  {
    id: 8,
    title: "CSS Grid Layout",
    description: "Create two-dimensional layouts with CSS Grid",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 1,
    week: 2,
    category: "CSS",
    content: `
      <h2>CSS Grid</h2>
      <p>CSS Grid is a two-dimensional layout system for creating complex layouts.</p>

      <h3>Enable Grid</h3>
      <div class="code-block">
        <pre>.container {
  display: grid;
}</pre>
      </div>

      <h3>Defining Columns and Rows</h3>
      <div class="code-block">
        <pre>/* Fixed sizes */
grid-template-columns: 200px 200px 200px;
grid-template-rows: 100px 200px;

/* Fractional units (fr) */
grid-template-columns: 1fr 1fr 1fr;  /* Equal thirds */
grid-template-columns: 1fr 2fr 1fr;  /* Middle is twice as wide */

/* Mixed units */
grid-template-columns: 200px 1fr 200px;  /* Fixed sidebar, flexible middle */

/* repeat() function */
grid-template-columns: repeat(3, 1fr);
grid-template-columns: repeat(4, 200px);

/* auto-fill and auto-fit */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</pre>
      </div>

      <h3>Gap (Gutters)</h3>
      <div class="code-block">
        <pre>gap: 20px;           /* Same gap in both directions */
gap: 10px 20px;      /* row-gap column-gap */
row-gap: 10px;
column-gap: 20px;</pre>
      </div>

      <h3>Placing Items</h3>
      <div class="code-block">
        <pre>/* By line numbers */
.item {
  grid-column: 1 / 3;     /* Span columns 1-2 */
  grid-row: 1 / 2;        /* Span row 1 only */
}

/* Span keyword */
.item {
  grid-column: span 2;    /* Span 2 columns */
  grid-row: span 3;       /* Span 3 rows */
}

/* Shorthand */
.item {
  grid-area: 1 / 1 / 3 / 4;  /* row-start / col-start / row-end / col-end */
}</pre>
      </div>

      <h3>Named Grid Areas</h3>
      <div class="code-block">
        <pre>.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }</pre>
      </div>

      <h3>Alignment</h3>
      <div class="code-block">
        <pre>/* Align all items */
justify-items: start | end | center | stretch;  /* Horizontal */
align-items: start | end | center | stretch;    /* Vertical */
place-items: center;  /* Both */

/* Align individual item */
.item {
  justify-self: center;
  align-self: end;
}

/* Align the grid itself */
justify-content: center;  /* If grid is smaller than container */
align-content: center;</pre>
      </div>

      <h3>Responsive Grid Pattern</h3>
      <div class="code-block">
        <pre>/* Auto-fit responsive grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* Holy Grail Layout */
.layout {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}</pre>
      </div>
    `,
    questions: [
      {
        id: "8-1",
        type: "mcq",
        question: "What does minmax(200px, 1fr) do?",
        options: [
          "Creates a column exactly 200px wide",
          "Creates a column that's minimum 200px and can grow to fill space",
          "Creates a column between 200px and 1fr",
          "Sets margin between 200px and 1fr"
        ],
        correctAnswer: "Creates a column that's minimum 200px and can grow to fill space",
        explanation: "minmax(200px, 1fr) creates a track that's at least 200px wide but can grow to take available space (1fr). It's commonly used with auto-fill/auto-fit for responsive grids."
      },
      {
        id: "8-2",
        type: "mcq",
        question: "What's the difference between auto-fill and auto-fit?",
        options: [
          "They're the same",
          "auto-fill creates empty tracks, auto-fit collapses them",
          "auto-fit creates empty tracks, auto-fill collapses them",
          "auto-fill is for rows, auto-fit is for columns"
        ],
        correctAnswer: "auto-fill creates empty tracks, auto-fit collapses them",
        explanation: "auto-fill keeps creating tracks even if empty, while auto-fit collapses empty tracks to allow items to stretch. auto-fit is better when you want items to grow."
      },
      {
        id: "8-3",
        type: "descriptive",
        question: "When would you choose CSS Grid over Flexbox?",
        keywords: ["two-dimensional", "rows", "columns", "layout", "complex", "grid", "flexbox", "one-dimensional"],
        explanation: "Use Grid for two-dimensional layouts where you need control over both rows and columns (like page layouts, dashboards). Use Flexbox for one-dimensional layouts (nav bars, card rows) or when content size should drive layout."
      }
    ]
  },
  {
    id: 9,
    title: "Responsive Web Design",
    description: "Build websites that work on all screen sizes",
    duration: "45 min",
    difficulty: "Beginner",
    month: 1,
    week: 3,
    category: "CSS",
    content: `
      <h2>Responsive Web Design</h2>
      <p>Responsive design ensures your website works well on all devices, from phones to desktops.</p>

      <h3>The Viewport Meta Tag</h3>
      <div class="code-block">
        <pre>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</pre>
      </div>
      <p>This tag is essential! Without it, mobile browsers will render at desktop width.</p>

      <h3>Media Queries</h3>
      <div class="code-block">
        <pre>/* Mobile first approach */
.container {
  width: 100%;
  padding: 10px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    width: 750px;
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 960px;
  }
}

/* Large desktop */
@media (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}</pre>
      </div>

      <h3>Common Breakpoints</h3>
      <ul>
        <li><strong>320px</strong> - Small phones</li>
        <li><strong>480px</strong> - Larger phones</li>
        <li><strong>768px</strong> - Tablets</li>
        <li><strong>1024px</strong> - Laptops/Desktops</li>
        <li><strong>1200px</strong> - Large desktops</li>
      </ul>

      <h3>Mobile-First vs Desktop-First</h3>
      <div class="code-block">
        <pre>/* Mobile-first (recommended) */
/* Start with mobile styles */
.nav { flex-direction: column; }

@media (min-width: 768px) {
  .nav { flex-direction: row; }
}

/* Desktop-first */
/* Start with desktop styles */
.nav { flex-direction: row; }

@media (max-width: 767px) {
  .nav { flex-direction: column; }
}</pre>
      </div>

      <h3>Responsive Units</h3>
      <div class="code-block">
        <pre>/* Percentage */
width: 50%;        /* Half of parent */

/* Viewport units */
width: 100vw;      /* Full viewport width */
height: 100vh;     /* Full viewport height */
font-size: 5vw;    /* 5% of viewport width */

/* Relative units */
font-size: 1rem;   /* Relative to root font size */
font-size: 1.5em;  /* Relative to parent font size */

/* Clamp for fluid typography */
font-size: clamp(1rem, 2.5vw, 2rem);  /* min, preferred, max */</pre>
      </div>

      <h3>Responsive Images</h3>
      <div class="code-block">
        <pre>/* Basic responsive image */
img {
  max-width: 100%;
  height: auto;
}

/* Object-fit for containers */
.image-container {
  width: 300px;
  height: 200px;
}
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;  /* or contain */
}

/* Picture element for art direction */
&lt;picture&gt;
  &lt;source media="(min-width: 800px)" srcset="large.jpg"&gt;
  &lt;source media="(min-width: 400px)" srcset="medium.jpg"&gt;
  &lt;img src="small.jpg" alt="Description"&gt;
&lt;/picture&gt;</pre>
      </div>

      <h3>Responsive Navigation Pattern</h3>
      <div class="code-block">
        <pre>.nav {
  display: flex;
  flex-direction: column;
}

.nav-toggle {
  display: block;  /* Show hamburger on mobile */
}

@media (min-width: 768px) {
  .nav {
    flex-direction: row;
  }
  .nav-toggle {
    display: none;  /* Hide hamburger on desktop */
  }
}</pre>
      </div>
    `,
    questions: [
      {
        id: "9-1",
        type: "mcq",
        question: "What is mobile-first design?",
        options: [
          "Designing for mobile only",
          "Writing base styles for mobile, then adding styles for larger screens",
          "Making sure mobile loads first",
          "Using only mobile-specific CSS properties"
        ],
        correctAnswer: "Writing base styles for mobile, then adding styles for larger screens",
        explanation: "Mobile-first means writing CSS for mobile as default, then using min-width media queries to add styles for larger screens. This approach is more performant for mobile devices."
      },
      {
        id: "9-2",
        type: "mcq",
        question: "What does the viewport meta tag do?",
        options: [
          "Creates the header section",
          "Tells mobile browsers to use device width instead of default desktop width",
          "Makes the website faster",
          "Adds a navigation bar"
        ],
        correctAnswer: "Tells mobile browsers to use device width instead of default desktop width",
        explanation: "The viewport meta tag tells mobile browsers to use the device's actual width instead of rendering at a virtual desktop width. Without it, mobile sites appear zoomed out."
      },
      {
        id: "9-3",
        type: "descriptive",
        question: "Explain why responsive web design is important and list two techniques to achieve it.",
        keywords: ["mobile", "tablet", "desktop", "media queries", "flexible", "viewport", "breakpoints", "fluid"],
        explanation: "Responsive design is crucial because users access websites on many device sizes. Key techniques include: media queries to apply different styles at breakpoints, flexible units (%, vw, rem), and responsive images with max-width: 100%."
      }
    ]
  },
  {
    id: 10,
    title: "CSS Variables & Modern Features",
    description: "Use CSS custom properties and modern CSS features",
    duration: "40 min",
    difficulty: "Intermediate",
    month: 1,
    week: 3,
    category: "CSS",
    content: `
      <h2>CSS Variables (Custom Properties)</h2>
      <p>CSS variables let you store values and reuse them throughout your stylesheet.</p>

      <h3>Defining Variables</h3>
      <div class="code-block">
        <pre>/* Define in :root for global access */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
  --font-size-base: 16px;
  --spacing-unit: 8px;
  --border-radius: 8px;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Use with var() */
.button {
  background: var(--primary-color);
  font-size: var(--font-size-base);
  padding: calc(var(--spacing-unit) * 2);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}</pre>
      </div>

      <h3>Fallback Values</h3>
      <div class="code-block">
        <pre>/* Second argument is fallback if variable doesn't exist */
.element {
  color: var(--text-color, #333);
  background: var(--bg-color, white);
}</pre>
      </div>

      <h3>Dark Mode with Variables</h3>
      <div class="code-block">
        <pre>:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --card-bg: #f5f5f5;
}

[data-theme="dark"] {
  --bg-color: #1a1a2e;
  --text-color: #eaeaea;
  --card-bg: #16213e;
}

/* Or use media query */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1a1a2e;
    --text-color: #eaeaea;
  }
}

body {
  background: var(--bg-color);
  color: var(--text-color);
}</pre>
      </div>

      <h3>Modern CSS Functions</h3>
      <div class="code-block">
        <pre>/* calc() - Math operations */
width: calc(100% - 40px);
padding: calc(var(--spacing) * 2);
font-size: calc(1rem + 0.5vw);

/* clamp() - Responsive values */
font-size: clamp(1rem, 2.5vw, 2rem);
width: clamp(300px, 50%, 800px);

/* min() and max() */
width: min(400px, 100%);
width: max(300px, 50%);

/* Color functions */
background: rgb(59 130 246);
background: hsl(217 91% 60%);
background: rgb(59 130 246 / 0.5);  /* With alpha */</pre>
      </div>

      <h3>Modern Selectors</h3>
      <div class="code-block">
        <pre>/* :is() - matches any selector in list */
:is(h1, h2, h3):hover { color: blue; }

/* :where() - like :is() but zero specificity */
:where(h1, h2, h3) { margin-top: 1em; }

/* :not() - negation */
button:not(.disabled) { cursor: pointer; }

/* :has() - parent selector (game changer!) */
.card:has(img) { padding: 0; }
form:has(:invalid) button { opacity: 0.5; }

/* :focus-visible - only for keyboard focus */
button:focus-visible { outline: 2px solid blue; }</pre>
      </div>

      <h3>Aspect Ratio</h3>
      <div class="code-block">
        <pre>.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.square {
  aspect-ratio: 1;  /* 1:1 ratio */
}</pre>
      </div>

      <h3>Container Queries</h3>
      <div class="code-block">
        <pre>/* Define container */
.card-container {
  container-type: inline-size;
}

/* Style based on container size, not viewport */
@container (min-width: 400px) {
  .card {
    display: flex;
  }
}</pre>
      </div>
    `,
    questions: [
      {
        id: "10-1",
        type: "mcq",
        question: "Where should you define global CSS variables?",
        options: ["In the body", "In the :root pseudo-class", "In any div", "In a variable file"],
        correctAnswer: "In the :root pseudo-class",
        explanation: ":root represents the html element and has the highest specificity. Defining variables there makes them globally accessible throughout the stylesheet."
      },
      {
        id: "10-2",
        type: "mcq",
        question: "What does clamp(1rem, 2.5vw, 2rem) do?",
        options: [
          "Always uses 2.5vw",
          "Limits a value between 1rem minimum and 2rem maximum, preferring 2.5vw",
          "Multiplies all three values",
          "Only works on font-size"
        ],
        correctAnswer: "Limits a value between 1rem minimum and 2rem maximum, preferring 2.5vw",
        explanation: "clamp(min, preferred, max) returns the preferred value but never less than min or more than max. Perfect for fluid typography that stays within bounds."
      },
      {
        id: "10-3",
        type: "descriptive",
        question: "Explain how CSS variables can be used to implement dark mode.",
        keywords: ["variable", "custom property", ":root", "dark", "light", "theme", "prefers-color-scheme", "toggle"],
        explanation: "Define color variables in :root for light mode. Create a [data-theme='dark'] or use @media (prefers-color-scheme: dark) to override those variables with dark values. All elements using the variables automatically update."
      }
    ]
  },
  {
    id: 11,
    title: "JavaScript Introduction",
    description: "Start programming with JavaScript fundamentals",
    duration: "45 min",
    difficulty: "Beginner",
    month: 1,
    week: 3,
    category: "JavaScript",
    content: `
      <h2>Introduction to JavaScript</h2>
      <p>JavaScript is the programming language of the web. It makes websites interactive.</p>

      <h3>Adding JavaScript to HTML</h3>
      <div class="code-block">
        <pre>&lt;!-- In HTML file --&gt;

&lt;!-- 1. External file (recommended) --&gt;
&lt;script src="script.js"&gt;&lt;/script&gt;

&lt;!-- 2. Inline script --&gt;
&lt;script&gt;
  console.log('Hello, World!');
&lt;/script&gt;

&lt;!-- Place scripts at end of body or use defer --&gt;
&lt;script src="script.js" defer&gt;&lt;/script&gt;</pre>
      </div>

      <h3>Variables</h3>
      <div class="code-block">
        <pre>// let - can be reassigned
let count = 0;
count = 1;

// const - cannot be reassigned
const PI = 3.14159;
// PI = 3; // Error!

// const with objects/arrays - can modify contents
const user = { name: 'John' };
user.name = 'Jane'; // OK
// user = {}; // Error!

// var - old way, avoid using
var oldVariable = 'avoid';</pre>
      </div>

      <h3>Data Types</h3>
      <div class="code-block">
        <pre>// String
const name = "Alice";
const greeting = 'Hello';
const template = \`Hello, \${name}!\`; // Template literal

// Number
const age = 25;
const price = 19.99;

// Boolean
const isActive = true;
const isComplete = false;

// Undefined
let notAssigned;

// Null
const empty = null;

// Object
const person = {
  name: 'Bob',
  age: 30
};

// Array
const colors = ['red', 'green', 'blue'];

// Check type
typeof name;    // "string"
typeof age;     // "number"
typeof isActive; // "boolean"</pre>
      </div>

      <h3>Operators</h3>
      <div class="code-block">
        <pre>// Arithmetic
5 + 3   // 8
10 - 4  // 6
3 * 4   // 12
20 / 5  // 4
10 % 3  // 1 (remainder)
2 ** 3  // 8 (exponent)

// Assignment
let x = 10;
x += 5;  // x = x + 5 → 15
x -= 3;  // x = x - 3 → 12
x *= 2;  // x = x * 2 → 24

// Comparison
5 == '5'   // true (loose equality)
5 === '5'  // false (strict equality) - USE THIS!
5 !== '5'  // true
5 > 3      // true
5 >= 5     // true
5 < 10     // true

// Logical
true && false  // false (AND)
true || false  // true (OR)
!true          // false (NOT)</pre>
      </div>

      <h3>Console Methods</h3>
      <div class="code-block">
        <pre>console.log('Regular message');
console.error('Error message');
console.warn('Warning message');
console.table([{a: 1}, {a: 2}]);
console.time('timer');
console.timeEnd('timer');</pre>
      </div>

      <h3>String Methods</h3>
      <div class="code-block">
        <pre>const text = "Hello, World!";

text.length           // 13
text.toUpperCase()    // "HELLO, WORLD!"
text.toLowerCase()    // "hello, world!"
text.includes("World") // true
text.startsWith("Hello") // true
text.endsWith("!")    // true
text.split(", ")      // ["Hello", "World!"]
text.replace("World", "JS") // "Hello, JS!"
text.trim()           // Removes whitespace
text.slice(0, 5)      // "Hello"</pre>
      </div>
    `,
    questions: [
      {
        id: "11-1",
        type: "mcq",
        question: "What's the difference between let and const?",
        options: [
          "There is no difference",
          "let can be reassigned, const cannot",
          "const is faster",
          "let is for numbers, const is for strings"
        ],
        correctAnswer: "let can be reassigned, const cannot",
        explanation: "let allows reassignment (let x = 1; x = 2;), while const cannot be reassigned. Use const by default, let only when you need to reassign."
      },
      {
        id: "11-2",
        type: "mcq",
        question: "What does === check that == doesn't?",
        options: [
          "Nothing different",
          "Checks both value and type",
          "Only checks type",
          "Checks if variables exist"
        ],
        correctAnswer: "Checks both value and type",
        explanation: "=== (strict equality) checks both value and type, so 5 === '5' is false. == (loose equality) converts types, so 5 == '5' is true. Always use === to avoid bugs."
      },
      {
        id: "11-3",
        type: "descriptive",
        question: "What are template literals and why are they useful?",
        keywords: ["backtick", "interpolation", "variable", "expression", "${}", "multiline", "string"],
        explanation: "Template literals use backticks (\`) and allow embedded expressions with ${}, multiline strings, and variable interpolation. They're cleaner than string concatenation: \`Hello, ${name}!\` vs 'Hello, ' + name + '!'"
      }
    ]
  },
  {
    id: 12,
    title: "Control Flow & Functions",
    description: "Master conditionals, loops, and functions in JavaScript",
    duration: "50 min",
    difficulty: "Beginner",
    month: 1,
    week: 4,
    category: "JavaScript",
    content: `
      <h2>Control Flow</h2>
      <p>Control flow determines which code runs and how many times.</p>

      <h3>Conditionals (if/else)</h3>
      <div class="code-block">
        <pre>const age = 18;

if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}

// Ternary operator (short if/else)
const status = age >= 18 ? "Adult" : "Minor";

// Logical AND short-circuit
age >= 18 && console.log("Can vote");

// Nullish coalescing
const name = userName ?? "Guest";  // Uses "Guest" if userName is null/undefined</pre>
      </div>

      <h3>Switch Statement</h3>
      <div class="code-block">
        <pre>const day = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}</pre>
      </div>

      <h3>Loops</h3>
      <div class="code-block">
        <pre>// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}

// while loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// do-while loop (runs at least once)
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 5);

// for...of (arrays and iterables)
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
  console.log(color);
}

// for...in (object keys)
const person = { name: 'Alice', age: 25 };
for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}

// Loop control
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;  // Skip this iteration
  if (i === 7) break;     // Exit loop
  console.log(i);
}</pre>
      </div>

      <h3>Functions</h3>
      <div class="code-block">
        <pre>// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function expression
const greet = function(name) {
  return "Hello, " + name + "!";
};

// Arrow function (modern, preferred)
const greet = (name) => {
  return "Hello, " + name + "!";
};

// Arrow function - short form
const greet = name => "Hello, " + name + "!";

// Default parameters
function greet(name = "Guest") {
  return "Hello, " + name + "!";
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4);  // 10

// Destructuring parameters
function printUser({ name, age }) {
  console.log(\`\${name} is \${age}\`);
}
printUser({ name: "Alice", age: 25 });</pre>
      </div>

      <h3>Scope</h3>
      <div class="code-block">
        <pre>// Global scope
const global = "everywhere";

function example() {
  // Function scope
  const local = "only here";

  if (true) {
    // Block scope (let/const)
    const blockScoped = "in block";
    var functionScoped = "leaks out";  // Don't use var!
  }

  console.log(functionScoped); // Works (var leaks)
  // console.log(blockScoped); // Error (let/const don't leak)
}

// Closure - inner function has access to outer variables
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const increment = counter();
increment();  // 1
increment();  // 2</pre>
      </div>
    `,
    questions: [
      {
        id: "12-1",
        type: "mcq",
        question: "What's the difference between for...of and for...in?",
        options: [
          "They're the same",
          "for...of iterates values, for...in iterates keys",
          "for...of is for objects, for...in is for arrays",
          "for...in is newer"
        ],
        correctAnswer: "for...of iterates values, for...in iterates keys",
        explanation: "for...of iterates over values in arrays and iterables. for...in iterates over keys (indices for arrays, property names for objects). Use for...of for arrays."
      },
      {
        id: "12-2",
        type: "mcq",
        question: "When does a while loop stop?",
        options: [
          "After running once",
          "When the condition becomes false",
          "After a set number of iterations",
          "When break is called"
        ],
        correctAnswer: "When the condition becomes false",
        explanation: "A while loop continues as long as its condition is true and stops when it becomes false. Be careful to avoid infinite loops by ensuring the condition eventually becomes false."
      },
      {
        id: "12-3",
        type: "descriptive",
        question: "Explain what arrow functions are and when to use them.",
        keywords: ["arrow", "function", "=>", "concise", "this", "callback", "short", "expression"],
        explanation: "Arrow functions (=>) are a concise syntax for writing functions. They're great for callbacks and short functions. Unlike regular functions, they don't have their own 'this' binding, which is often beneficial in callbacks."
      }
    ]
  }
];

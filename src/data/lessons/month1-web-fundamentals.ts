import { Lesson } from '@/types/lesson';

export const month1Lessons: Lesson[] = [
  // WEEK 1: HTML Foundations (Lessons 1-5)
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn what web development is, how the web works, and what tools you'll need to get started",
    duration: "30 min",
    difficulty: "Beginner",
    month: 1,
    week: 1,
    category: "HTML",
    content: `
      <h2>Welcome to Full-Stack Web Development!</h2>
      <p>Web development is the process of building websites and web applications that run in browsers. In this course, you'll learn everything from the basics of HTML to deploying full-stack applications.</p>

      <h3>How the Web Works</h3>
      <p>When you visit a website, here's what happens behind the scenes:</p>
      <ol>
        <li><strong>You type a URL</strong> in your browser (like www.example.com)</li>
        <li><strong>DNS lookup</strong> converts the domain name to an IP address</li>
        <li><strong>Your browser sends an HTTP request</strong> to the server at that IP</li>
        <li><strong>The server processes the request</strong> and sends back a response</li>
        <li><strong>The server responds</strong> with HTML, CSS, and JavaScript files</li>
        <li><strong>Your browser renders</strong> the page you see</li>
      </ol>

      <h3>Frontend vs Backend</h3>
      <p><strong>Frontend (Client-Side)</strong> - What users see and interact with:</p>
      <ul>
        <li>HTML - Structure and content of web pages</li>
        <li>CSS - Styling, layout, and visual appearance</li>
        <li>JavaScript - Interactivity and dynamic behavior</li>
      </ul>

      <p><strong>Backend (Server-Side)</strong> - What happens behind the scenes:</p>
      <ul>
        <li>Server logic (Node.js, Python, Ruby, etc.)</li>
        <li>Databases (PostgreSQL, MongoDB, MySQL)</li>
        <li>APIs and authentication systems</li>
      </ul>

      <h3>The Three Pillars of Web Development</h3>
      <div class="code-block">
        <pre>&lt;!-- HTML: The Structure --&gt;
&lt;button class="btn"&gt;Click Me&lt;/button&gt;

/* CSS: The Style */
.btn {
  background: blue;
  color: white;
  padding: 10px 20px;
}

// JavaScript: The Behavior
button.addEventListener('click', () =&gt; {
  alert('Button clicked!');
});</pre>
      </div>

      <h3>What You'll Learn in This Course</h3>
      <div class="highlight">
        <p><strong>Month 1:</strong> HTML &amp; CSS fundamentals - Building and styling web pages</p>
        <p><strong>Month 2:</strong> JavaScript deep dive - Programming and interactivity</p>
        <p><strong>Month 3:</strong> React fundamentals - Component-based UI development</p>
        <p><strong>Month 4:</strong> Next.js - Full-stack React framework</p>
        <p><strong>Month 5:</strong> Backend &amp; databases - Server-side development</p>
        <p><strong>Month 6:</strong> Testing, deployment, and best practices</p>
      </div>

      <h3>Essential Tools You'll Need</h3>
      <ul>
        <li><strong>Code Editor:</strong> VS Code (free, powerful, and widely used)</li>
        <li><strong>Web Browser:</strong> Chrome or Firefox with Developer Tools</li>
        <li><strong>Terminal:</strong> Built into your OS or integrated in VS Code</li>
        <li><strong>Node.js:</strong> JavaScript runtime for tools and backend</li>
        <li><strong>Git:</strong> Version control for tracking code changes</li>
      </ul>

      <h3>Your First HTML File</h3>
      <div class="code-block">
        <pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My First Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello, World!&lt;/h1&gt;
  &lt;p&gt;Welcome to web development!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
      </div>
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
        explanation: "DNS (Domain Name System) acts like a phone book for the internet, converting human-readable domain names (like google.com) into IP addresses that computers use to communicate."
      },
      {
        id: "1-3",
        type: "mcq",
        question: "Which technology is responsible for making a website interactive?",
        options: ["HTML", "CSS", "JavaScript", "DNS"],
        correctAnswer: "JavaScript",
        explanation: "JavaScript is the programming language that adds interactivity to websites. It can respond to user actions, manipulate page content, and communicate with servers."
      },
      {
        id: "1-4",
        type: "descriptive",
        question: "Explain the difference between frontend and backend development.",
        keywords: ["frontend", "backend", "client", "server", "user", "browser", "database", "HTML", "CSS", "JavaScript"],
        explanation: "Frontend development focuses on what users see and interact with in the browser (HTML, CSS, JavaScript), while backend development handles server-side logic, databases, and APIs that power the application behind the scenes."
      }
    ]
  },
  {
    id: 2,
    title: "HTML Document Structure & Doctype",
    description: "Learn the fundamental building blocks and anatomy of every HTML document",
    duration: "35 min",
    difficulty: "Beginner",
    month: 1,
    week: 1,
    category: "HTML",
    content: `
      <h2>HTML Document Structure</h2>
      <p>Every HTML document follows a specific structure. Understanding this structure is essential for creating valid, well-organized web pages.</p>

      <h3>The Complete HTML Template</h3>
      <div class="code-block">
        <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;meta name="description" content="A description of your page"&gt;
  &lt;title&gt;Page Title&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;p&gt;This is the main content.&lt;/p&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;p&gt;&amp;copy; 2024 My Website&lt;/p&gt;
  &lt;/footer&gt;
  &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
      </div>

      <h3>Understanding Each Part</h3>

      <h4>&lt;!DOCTYPE html&gt;</h4>
      <p>The DOCTYPE declaration tells the browser which version of HTML you're using. For HTML5, it's simply <code>&lt;!DOCTYPE html&gt;</code>. This must be the very first line of your document.</p>

      <h4>&lt;html&gt; Element</h4>
      <p>The root element that wraps all content on the page. The <code>lang</code> attribute specifies the language for accessibility and SEO.</p>
      <div class="code-block">
        <pre>&lt;html lang="en"&gt;      &lt;!-- English --&gt;
&lt;html lang="es"&gt;      &lt;!-- Spanish --&gt;
&lt;html lang="fr"&gt;      &lt;!-- French --&gt;
&lt;html lang="ja"&gt;      &lt;!-- Japanese --&gt;</pre>
      </div>

      <h4>&lt;head&gt; Element</h4>
      <p>Contains metadata about the document (not visible on the page):</p>
      <div class="code-block">
        <pre>&lt;head&gt;
  &lt;!-- Character encoding - always use UTF-8 --&gt;
  &lt;meta charset="UTF-8"&gt;

  &lt;!-- Viewport for responsive design --&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;

  &lt;!-- Page title (shown in browser tab) --&gt;
  &lt;title&gt;My Page Title&lt;/title&gt;

  &lt;!-- External CSS --&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;

  &lt;!-- Favicon --&gt;
  &lt;link rel="icon" href="favicon.ico"&gt;

  &lt;!-- SEO meta tags --&gt;
  &lt;meta name="description" content="Page description for search engines"&gt;
  &lt;meta name="keywords" content="html, css, web development"&gt;
&lt;/head&gt;</pre>
      </div>

      <h4>&lt;body&gt; Element</h4>
      <p>Contains all visible content that users see and interact with. Everything displayed on the page goes inside the body.</p>

      <h3>HTML Comments</h3>
      <div class="code-block">
        <pre>&lt;!-- This is a comment --&gt;
&lt;!-- Comments are not displayed in the browser --&gt;
&lt;!--
  Multi-line comments
  can span multiple lines
--&gt;</pre>
      </div>

      <h3>Nesting Rules</h3>
      <p>HTML elements must be properly nested. Always close tags in the reverse order they were opened:</p>
      <div class="code-block">
        <pre>&lt;!-- Correct nesting --&gt;
&lt;p&gt;&lt;strong&gt;Bold text&lt;/strong&gt;&lt;/p&gt;

&lt;!-- Incorrect nesting --&gt;
&lt;p&gt;&lt;strong&gt;Bold text&lt;/p&gt;&lt;/strong&gt;</pre>
      </div>

      <h3>Self-Closing Tags</h3>
      <p>Some elements don't have closing tags:</p>
      <div class="code-block">
        <pre>&lt;br&gt;           &lt;!-- Line break --&gt;
&lt;hr&gt;           &lt;!-- Horizontal rule --&gt;
&lt;img&gt;          &lt;!-- Image --&gt;
&lt;input&gt;        &lt;!-- Form input --&gt;
&lt;meta&gt;         &lt;!-- Metadata --&gt;
&lt;link&gt;         &lt;!-- External resource link --&gt;</pre>
      </div>
    `,
    questions: [
      {
        id: "2-1",
        type: "mcq",
        question: "What is the purpose of the DOCTYPE declaration?",
        options: ["To add styling to the page", "To tell the browser which HTML version to use", "To create the page header", "To define variables"],
        correctAnswer: "To tell the browser which HTML version to use",
        explanation: "The DOCTYPE declaration tells the browser which version of HTML the document is written in. For HTML5, we use <!DOCTYPE html>. It must be the first line of the document."
      },
      {
        id: "2-2",
        type: "mcq",
        question: "What is the purpose of the <head> element?",
        options: ["Display visible content", "Contain metadata and links to resources", "Create the page header", "Define navigation"],
        correctAnswer: "Contain metadata and links to resources",
        explanation: "The <head> element contains metadata about the document, including character encoding, viewport settings, title, and links to stylesheets and scripts. It doesn't display visible content."
      },
      {
        id: "2-3",
        type: "mcq",
        question: "Why is the lang attribute important on the <html> element?",
        options: ["It makes the page load faster", "It helps screen readers and search engines understand the language", "It changes the page colors", "It is not important"],
        correctAnswer: "It helps screen readers and search engines understand the language",
        explanation: "The lang attribute helps screen readers pronounce content correctly and helps search engines understand what language the page is in, improving accessibility and SEO."
      },
      {
        id: "2-4",
        type: "descriptive",
        question: "Explain what goes in the <head> section vs the <body> section of an HTML document.",
        keywords: ["head", "body", "metadata", "visible", "content", "title", "stylesheet", "script", "charset"],
        explanation: "The <head> contains metadata not visible to users: character encoding, viewport settings, page title, CSS links, and meta tags. The <body> contains all visible content: text, images, links, and everything users see and interact with."
      }
    ]
  },
  {
    id: 3,
    title: "Text Elements & Typography",
    description: "Master HTML elements for displaying text, headings, and formatted content",
    duration: "35 min",
    difficulty: "Beginner",
    month: 1,
    week: 1,
    category: "HTML",
    content: `
      <h2>Text Elements in HTML</h2>
      <p>HTML provides numerous elements for structuring and formatting text content. Using the right elements improves accessibility and SEO.</p>

      <h3>Headings (h1-h6)</h3>
      <p>HTML has six heading levels, from h1 (most important) to h6 (least important):</p>
      <div class="code-block">
        <pre>&lt;h1&gt;Main Page Title&lt;/h1&gt;        &lt;!-- Only one per page --&gt;
&lt;h2&gt;Major Section Heading&lt;/h2&gt;
&lt;h3&gt;Subsection Heading&lt;/h3&gt;
&lt;h4&gt;Minor Heading&lt;/h4&gt;
&lt;h5&gt;Small Heading&lt;/h5&gt;
&lt;h6&gt;Smallest Heading&lt;/h6&gt;</pre>
      </div>
      <p><strong>Best Practice:</strong> Use headings in order (don't skip from h1 to h4). This creates a proper document outline for accessibility.</p>

      <h3>Paragraphs</h3>
      <div class="code-block">
        <pre>&lt;p&gt;This is a paragraph of text. Paragraphs are block-level
elements that create space before and after the content.&lt;/p&gt;

&lt;p&gt;This is another paragraph. Each paragraph starts on a new line.&lt;/p&gt;</pre>
      </div>

      <h3>Text Formatting Elements</h3>
      <div class="code-block">
        <pre>&lt;!-- Semantic formatting (use these!) --&gt;
&lt;strong&gt;Important text&lt;/strong&gt;      &lt;!-- Bold, indicates importance --&gt;
&lt;em&gt;Emphasized text&lt;/em&gt;             &lt;!-- Italic, indicates stress --&gt;
&lt;mark&gt;Highlighted text&lt;/mark&gt;        &lt;!-- Highlighted/marked text --&gt;
&lt;small&gt;Fine print text&lt;/small&gt;       &lt;!-- Smaller text --&gt;

&lt;!-- Other formatting --&gt;
&lt;del&gt;Deleted text&lt;/del&gt;              &lt;!-- Strikethrough --&gt;
&lt;ins&gt;Inserted text&lt;/ins&gt;             &lt;!-- Underlined, shows addition --&gt;
&lt;sub&gt;Subscript&lt;/sub&gt;                 &lt;!-- H&lt;sub&gt;2&lt;/sub&gt;O --&gt;
&lt;sup&gt;Superscript&lt;/sup&gt;               &lt;!-- x&lt;sup&gt;2&lt;/sup&gt; --&gt;

&lt;!-- Visual-only formatting (less semantic) --&gt;
&lt;b&gt;Bold text&lt;/b&gt;                     &lt;!-- Bold without importance --&gt;
&lt;i&gt;Italic text&lt;/i&gt;                   &lt;!-- Italic without emphasis --&gt;
&lt;u&gt;Underlined text&lt;/u&gt;               &lt;!-- Underlined --&gt;</pre>
      </div>

      <h3>Code and Preformatted Text</h3>
      <div class="code-block">
        <pre>&lt;!-- Inline code --&gt;
&lt;p&gt;Use the &lt;code&gt;console.log()&lt;/code&gt; function to debug.&lt;/p&gt;

&lt;!-- Code block with preserved whitespace --&gt;
&lt;pre&gt;
function hello() {
    console.log("Hello, World!");
}
&lt;/pre&gt;

&lt;!-- Combined for syntax highlighting --&gt;
&lt;pre&gt;&lt;code&gt;
const name = "JavaScript";
console.log(name);
&lt;/code&gt;&lt;/pre&gt;

&lt;!-- Keyboard input --&gt;
&lt;p&gt;Press &lt;kbd&gt;Ctrl&lt;/kbd&gt; + &lt;kbd&gt;C&lt;/kbd&gt; to copy.&lt;/p&gt;

&lt;!-- Sample output --&gt;
&lt;samp&gt;Error: File not found&lt;/samp&gt;

&lt;!-- Variable --&gt;
&lt;p&gt;The variable &lt;var&gt;x&lt;/var&gt; represents the value.&lt;/p&gt;</pre>
      </div>

      <h3>Line Breaks and Horizontal Rules</h3>
      <div class="code-block">
        <pre>&lt;!-- Line break (use sparingly) --&gt;
&lt;p&gt;Line one&lt;br&gt;Line two&lt;/p&gt;

&lt;!-- Horizontal rule (thematic break) --&gt;
&lt;p&gt;Section one content...&lt;/p&gt;
&lt;hr&gt;
&lt;p&gt;Section two content...&lt;/p&gt;</pre>
      </div>

      <h3>Abbreviations and Definitions</h3>
      <div class="code-block">
        <pre>&lt;!-- Abbreviation with tooltip --&gt;
&lt;p&gt;The &lt;abbr title="HyperText Markup Language"&gt;HTML&lt;/abbr&gt;
specification is maintained by the W3C.&lt;/p&gt;

&lt;!-- Definition term --&gt;
&lt;p&gt;&lt;dfn&gt;HTML&lt;/dfn&gt; is the standard markup language for web pages.&lt;/p&gt;</pre>
      </div>

      <h3>Address Element</h3>
      <div class="code-block">
        <pre>&lt;address&gt;
  Written by John Doe.&lt;br&gt;
  Contact: &lt;a href="mailto:john@example.com"&gt;john@example.com&lt;/a&gt;&lt;br&gt;
  123 Main Street&lt;br&gt;
  New York, NY 10001
&lt;/address&gt;</pre>
      </div>
    `,
    questions: [
      {
        id: "3-1",
        type: "mcq",
        question: "What is the semantic difference between <strong> and <b>?",
        options: ["No difference, they both make text bold", "<strong> indicates importance, <b> is just visual styling", "<b> indicates importance, <strong> is visual", "<strong> is deprecated"],
        correctAnswer: "<strong> indicates importance, <b> is just visual styling",
        explanation: "<strong> semantically indicates important text (screen readers emphasize it), while <b> just makes text visually bold without conveying importance. Use <strong> for meaningful emphasis."
      },
      {
        id: "3-2",
        type: "mcq",
        question: "How many <h1> elements should a page typically have?",
        options: ["As many as needed", "Only one", "At least two", "None"],
        correctAnswer: "Only one",
        explanation: "A page should have only one <h1> element representing the main title. Multiple h1s can confuse screen readers and hurt SEO. Use h2-h6 for subsections."
      },
      {
        id: "3-3",
        type: "mcq",
        question: "Which element should be used to display a code snippet?",
        options: ["<p>", "<span>", "<code>", "<text>"],
        correctAnswer: "<code>",
        explanation: "The <code> element is specifically designed for displaying code. For multi-line code blocks, wrap <code> inside <pre> to preserve whitespace and line breaks."
      },
      {
        id: "3-4",
        type: "descriptive",
        question: "Why is semantic HTML important for text formatting?",
        keywords: ["semantic", "accessibility", "screen reader", "SEO", "meaning", "structure", "strong", "em"],
        explanation: "Semantic HTML gives meaning to content beyond just visual appearance. Screen readers use semantic elements to convey information to users with visual impairments. Search engines use them to understand page content better. Using <strong> vs <b> communicates importance, not just boldness."
      }
    ]
  },
  {
    id: 4,
    title: "Links, Images & Media",
    description: "Learn to add hyperlinks, images, video, and audio to your web pages",
    duration: "40 min",
    difficulty: "Beginner",
    month: 1,
    week: 1,
    category: "HTML",
    content: `
      <h2>Links in HTML</h2>
      <p>Links are the foundation of the web, connecting pages and resources together.</p>

      <h3>The Anchor Element</h3>
      <div class="code-block">
        <pre>&lt;!-- Basic external link --&gt;
&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;

&lt;!-- Open in new tab (add rel for security) --&gt;
&lt;a href="https://www.example.com" target="_blank" rel="noopener noreferrer"&gt;
  Opens in New Tab
&lt;/a&gt;

&lt;!-- Internal/relative links --&gt;
&lt;a href="/about"&gt;About Page&lt;/a&gt;
&lt;a href="./contact.html"&gt;Contact Page&lt;/a&gt;
&lt;a href="../index.html"&gt;Back to Home&lt;/a&gt;

&lt;!-- Link to page section (anchor) --&gt;
&lt;a href="#section-id"&gt;Jump to Section&lt;/a&gt;
&lt;a href="page.html#section"&gt;Link to Section on Another Page&lt;/a&gt;

&lt;!-- Email link --&gt;
&lt;a href="mailto:hello@example.com"&gt;Send Email&lt;/a&gt;
&lt;a href="mailto:hello@example.com?subject=Hello&amp;body=Hi there"&gt;
  Email with Subject
&lt;/a&gt;

&lt;!-- Phone link --&gt;
&lt;a href="tel:+1234567890"&gt;Call Us&lt;/a&gt;

&lt;!-- Download link --&gt;
&lt;a href="document.pdf" download&gt;Download PDF&lt;/a&gt;
&lt;a href="document.pdf" download="custom-name.pdf"&gt;Download with Custom Name&lt;/a&gt;</pre>
      </div>

      <h3>Link Best Practices</h3>
      <ul>
        <li>Use descriptive link text (not "click here")</li>
        <li>Always use <code>rel="noopener noreferrer"</code> with <code>target="_blank"</code></li>
        <li>Make links visually distinct from regular text</li>
        <li>Ensure sufficient color contrast for accessibility</li>
      </ul>

      <h2>Images</h2>
      <h3>Basic Image Syntax</h3>
      <div class="code-block">
        <pre>&lt;!-- Basic image --&gt;
&lt;img src="photo.jpg" alt="A beautiful sunset over the ocean"&gt;

&lt;!-- Image with dimensions (helps prevent layout shift) --&gt;
&lt;img src="photo.jpg" alt="Description" width="800" height="600"&gt;

&lt;!-- Image with loading optimization --&gt;
&lt;img src="photo.jpg" alt="Description" loading="lazy"&gt;

&lt;!-- Image from URL --&gt;
&lt;img src="https://example.com/image.jpg" alt="Remote image"&gt;</pre>
      </div>

      <h3>Figure and Figcaption</h3>
      <div class="code-block">
        <pre>&lt;figure&gt;
  &lt;img src="chart.png" alt="Sales data chart showing Q4 growth"&gt;
  &lt;figcaption&gt;Figure 1: Q4 2024 Sales Performance&lt;/figcaption&gt;
&lt;/figure&gt;</pre>
      </div>

      <h3>Responsive Images</h3>
      <div class="code-block">
        <pre>&lt;!-- srcset for different resolutions --&gt;
&lt;img src="image-800.jpg"
     srcset="image-400.jpg 400w,
             image-800.jpg 800w,
             image-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1000px) 800px,
            1200px"
     alt="Responsive image"&gt;

&lt;!-- Picture element for art direction --&gt;
&lt;picture&gt;
  &lt;source media="(min-width: 1024px)" srcset="hero-large.jpg"&gt;
  &lt;source media="(min-width: 768px)" srcset="hero-medium.jpg"&gt;
  &lt;img src="hero-small.jpg" alt="Hero image"&gt;
&lt;/picture&gt;</pre>
      </div>

      <h2>Video</h2>
      <div class="code-block">
        <pre>&lt;video width="640" height="360" controls&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;source src="video.webm" type="video/webm"&gt;
  Your browser does not support the video tag.
&lt;/video&gt;

&lt;!-- Video with additional attributes --&gt;
&lt;video
  width="640"
  height="360"
  controls
  autoplay
  muted
  loop
  poster="thumbnail.jpg"&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
&lt;/video&gt;

&lt;!-- YouTube embed --&gt;
&lt;iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameborder="0"
  allowfullscreen&gt;
&lt;/iframe&gt;</pre>
      </div>

      <h2>Audio</h2>
      <div class="code-block">
        <pre>&lt;audio controls&gt;
  &lt;source src="audio.mp3" type="audio/mpeg"&gt;
  &lt;source src="audio.ogg" type="audio/ogg"&gt;
  Your browser does not support the audio element.
&lt;/audio&gt;

&lt;!-- Audio with attributes --&gt;
&lt;audio controls autoplay muted loop&gt;
  &lt;source src="music.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;</pre>
      </div>
    `,
    questions: [
      {
        id: "4-1",
        type: "mcq",
        question: "What attribute is essential for accessibility when using <img> elements?",
        options: ["src", "width", "alt", "title"],
        correctAnswer: "alt",
        explanation: "The alt attribute provides alternative text for images, essential for screen readers and when images fail to load. It's a key accessibility requirement and should describe the image content."
      },
      {
        id: "4-2",
        type: "mcq",
        question: "Why should you use rel=\"noopener noreferrer\" with target=\"_blank\"?",
        options: ["It makes the link load faster", "It prevents security vulnerabilities", "It adds styling to the link", "It is required by HTML5"],
        correctAnswer: "It prevents security vulnerabilities",
        explanation: "When opening links in new tabs with target=\"_blank\", the new page can access your page via window.opener. rel=\"noopener noreferrer\" prevents this security risk and potential performance issues."
      },
      {
        id: "4-3",
        type: "mcq",
        question: "What does the loading=\"lazy\" attribute do on an image?",
        options: ["Makes the image blurry initially", "Delays image loading until it's near the viewport", "Loads a smaller version first", "Disables image caching"],
        correctAnswer: "Delays image loading until it's near the viewport",
        explanation: "loading=\"lazy\" tells the browser to delay loading the image until it's close to entering the viewport. This improves initial page load performance by not loading off-screen images immediately."
      },
      {
        id: "4-4",
        type: "descriptive",
        question: "Explain how to make images responsive using HTML.",
        keywords: ["srcset", "sizes", "picture", "source", "responsive", "resolution", "viewport", "media query"],
        explanation: "Use srcset to provide multiple image sizes for different screen resolutions and sizes attribute to tell the browser what size the image will be displayed at. The picture element with source tags allows art direction - showing different images at different breakpoints."
      }
    ]
  },
  {
    id: 5,
    title: "Lists, Tables & Semantic HTML",
    description: "Structure content with lists, tables, and semantic HTML5 elements",
    duration: "40 min",
    difficulty: "Beginner",
    month: 1,
    week: 1,
    category: "HTML",
    content: `
      <h2>Lists in HTML</h2>
      <p>Lists are essential for organizing related items. HTML provides three types of lists.</p>

      <h3>Unordered Lists (Bullets)</h3>
      <div class="code-block">
        <pre>&lt;ul&gt;
  &lt;li&gt;First item&lt;/li&gt;
  &lt;li&gt;Second item&lt;/li&gt;
  &lt;li&gt;Third item&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Nested lists --&gt;
&lt;ul&gt;
  &lt;li&gt;Fruits
    &lt;ul&gt;
      &lt;li&gt;Apples&lt;/li&gt;
      &lt;li&gt;Oranges&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Vegetables&lt;/li&gt;
&lt;/ul&gt;</pre>
      </div>

      <h3>Ordered Lists (Numbers)</h3>
      <div class="code-block">
        <pre>&lt;ol&gt;
  &lt;li&gt;Preheat oven to 350&amp;deg;F&lt;/li&gt;
  &lt;li&gt;Mix ingredients&lt;/li&gt;
  &lt;li&gt;Bake for 30 minutes&lt;/li&gt;
&lt;/ol&gt;

&lt;!-- With attributes --&gt;
&lt;ol type="A"&gt;            &lt;!-- A, B, C... --&gt;
&lt;ol type="a"&gt;            &lt;!-- a, b, c... --&gt;
&lt;ol type="I"&gt;            &lt;!-- I, II, III... --&gt;
&lt;ol type="i"&gt;            &lt;!-- i, ii, iii... --&gt;
&lt;ol start="5"&gt;           &lt;!-- Start from 5 --&gt;
&lt;ol reversed&gt;            &lt;!-- Countdown --&gt;</pre>
      </div>

      <h3>Description Lists</h3>
      <div class="code-block">
        <pre>&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;HyperText Markup Language - the structure of web pages&lt;/dd&gt;

  &lt;dt&gt;CSS&lt;/dt&gt;
  &lt;dd&gt;Cascading Style Sheets - the styling of web pages&lt;/dd&gt;

  &lt;dt&gt;JavaScript&lt;/dt&gt;
  &lt;dd&gt;Programming language for web interactivity&lt;/dd&gt;
&lt;/dl&gt;</pre>
      </div>

      <h2>Tables</h2>
      <div class="code-block">
        <pre>&lt;table&gt;
  &lt;caption&gt;Monthly Sales Report&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope="col"&gt;Month&lt;/th&gt;
      &lt;th scope="col"&gt;Sales&lt;/th&gt;
      &lt;th scope="col"&gt;Revenue&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;January&lt;/td&gt;
      &lt;td&gt;150&lt;/td&gt;
      &lt;td&gt;$15,000&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;February&lt;/td&gt;
      &lt;td&gt;200&lt;/td&gt;
      &lt;td&gt;$20,000&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;
      &lt;td&gt;Total&lt;/td&gt;
      &lt;td&gt;350&lt;/td&gt;
      &lt;td&gt;$35,000&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;</pre>
      </div>

      <h3>Table Cell Spanning</h3>
      <div class="code-block">
        <pre>&lt;tr&gt;
  &lt;td colspan="2"&gt;Spans 2 columns&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
  &lt;td rowspan="3"&gt;Spans 3 rows&lt;/td&gt;
  &lt;td&gt;Cell 2&lt;/td&gt;
&lt;/tr&gt;</pre>
      </div>

      <h2>Semantic HTML5 Elements</h2>
      <p>Semantic elements clearly describe their meaning to both browser and developer.</p>

      <div class="code-block">
        <pre>&lt;!-- Page structure --&gt;
&lt;header&gt;
  &lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;article&gt;
    &lt;header&gt;
      &lt;h1&gt;Article Title&lt;/h1&gt;
      &lt;time datetime="2024-01-15"&gt;January 15, 2024&lt;/time&gt;
    &lt;/header&gt;
    &lt;p&gt;Article content...&lt;/p&gt;
    &lt;footer&gt;
      &lt;p&gt;Written by Author Name&lt;/p&gt;
    &lt;/footer&gt;
  &lt;/article&gt;

  &lt;section&gt;
    &lt;h2&gt;Related Content&lt;/h2&gt;
    &lt;p&gt;Section content...&lt;/p&gt;
  &lt;/section&gt;

  &lt;aside&gt;
    &lt;h3&gt;Sidebar&lt;/h3&gt;
    &lt;p&gt;Related links and info...&lt;/p&gt;
  &lt;/aside&gt;
&lt;/main&gt;

&lt;footer&gt;
  &lt;p&gt;&amp;copy; 2024 Website Name&lt;/p&gt;
&lt;/footer&gt;</pre>
      </div>

      <h3>When to Use Each Semantic Element</h3>
      <ul>
        <li><strong>&lt;header&gt;</strong> - Introductory content, navigation</li>
        <li><strong>&lt;nav&gt;</strong> - Major navigation blocks</li>
        <li><strong>&lt;main&gt;</strong> - Main content (only one per page)</li>
        <li><strong>&lt;article&gt;</strong> - Self-contained, reusable content</li>
        <li><strong>&lt;section&gt;</strong> - Thematic grouping of content</li>
        <li><strong>&lt;aside&gt;</strong> - Tangentially related content (sidebars)</li>
        <li><strong>&lt;footer&gt;</strong> - Footer information</li>
        <li><strong>&lt;time&gt;</strong> - Dates and times</li>
      </ul>
    `,
    questions: [
      {
        id: "5-1",
        type: "mcq",
        question: "When should you use an ordered list (<ol>) instead of an unordered list (<ul>)?",
        options: ["When you have many items", "When the sequence/order of items matters", "When items are important", "When items have descriptions"],
        correctAnswer: "When the sequence/order of items matters",
        explanation: "Use ordered lists when the sequence matters (steps in a recipe, ranking). Use unordered lists when order doesn't matter (shopping list, features). The choice conveys meaning about the relationship between items."
      },
      {
        id: "5-2",
        type: "mcq",
        question: "What is the purpose of the <main> element?",
        options: ["To create the header", "To contain the primary content unique to the page", "To wrap all HTML content", "To create a sidebar"],
        correctAnswer: "To contain the primary content unique to the page",
        explanation: "The <main> element contains the central content unique to a page. There should only be one <main> per page, and it shouldn't include repeated content like navigation or footers."
      },
      {
        id: "5-3",
        type: "mcq",
        question: "What attribute improves table accessibility for screen readers?",
        options: ["class", "scope", "style", "border"],
        correctAnswer: "scope",
        explanation: "The scope attribute on <th> elements (scope=\"col\" or scope=\"row\") helps screen readers understand the relationship between headers and data cells, improving table accessibility."
      },
      {
        id: "5-4",
        type: "descriptive",
        question: "Explain the difference between <article> and <section> elements.",
        keywords: ["article", "section", "self-contained", "independent", "thematic", "grouping", "reusable", "syndication"],
        explanation: "<article> is for self-contained content that could be distributed independently (blog post, news article, comment). <section> is for thematic grouping of content that's part of something larger. Articles can contain sections, and sections can contain articles."
      }
    ]
  },

  // WEEK 2: HTML Advanced & Forms (Lessons 6-10)
  {
    id: 6,
    title: "Forms & Input Types",
    description: "Build interactive forms to collect user data with various input types",
    duration: "45 min",
    difficulty: "Beginner",
    month: 1,
    week: 2,
    category: "HTML",
    content: `
      <h2>HTML Forms</h2>
      <p>Forms are the primary way to collect user input on the web. They're essential for logins, registrations, searches, and data submission.</p>

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

      <h3>Form Attributes</h3>
      <ul>
        <li><strong>action</strong> - URL where form data is sent</li>
        <li><strong>method</strong> - HTTP method (GET or POST)</li>
        <li><strong>enctype</strong> - Encoding type (important for file uploads)</li>
        <li><strong>autocomplete</strong> - Enable/disable browser autocomplete</li>
        <li><strong>novalidate</strong> - Disable browser validation</li>
      </ul>

      <h3>Text Input Types</h3>
      <div class="code-block">
        <pre>&lt;!-- Basic text --&gt;
&lt;input type="text" placeholder="Enter your name"&gt;

&lt;!-- Email with validation --&gt;
&lt;input type="email" placeholder="email@example.com"&gt;

&lt;!-- Password (masked) --&gt;
&lt;input type="password" placeholder="Enter password"&gt;

&lt;!-- Phone number --&gt;
&lt;input type="tel" placeholder="123-456-7890"&gt;

&lt;!-- URL --&gt;
&lt;input type="url" placeholder="https://example.com"&gt;

&lt;!-- Search with clear button --&gt;
&lt;input type="search" placeholder="Search..."&gt;</pre>
      </div>

      <h3>Number Inputs</h3>
      <div class="code-block">
        <pre>&lt;!-- Number with range --&gt;
&lt;input type="number" min="0" max="100" step="1"&gt;

&lt;!-- Slider/range --&gt;
&lt;input type="range" min="0" max="100" value="50"&gt;

&lt;!-- With decimal steps --&gt;
&lt;input type="number" min="0" max="10" step="0.1"&gt;</pre>
      </div>

      <h3>Date and Time Inputs</h3>
      <div class="code-block">
        <pre>&lt;!-- Date picker --&gt;
&lt;input type="date" min="2024-01-01" max="2024-12-31"&gt;

&lt;!-- Time picker --&gt;
&lt;input type="time"&gt;

&lt;!-- Date and time --&gt;
&lt;input type="datetime-local"&gt;

&lt;!-- Month --&gt;
&lt;input type="month"&gt;

&lt;!-- Week --&gt;
&lt;input type="week"&gt;</pre>
      </div>

      <h3>Selection Inputs</h3>
      <div class="code-block">
        <pre>&lt;!-- Checkbox --&gt;
&lt;label&gt;
  &lt;input type="checkbox" name="agree" value="yes"&gt;
  I agree to terms
&lt;/label&gt;

&lt;!-- Radio buttons (same name = group) --&gt;
&lt;label&gt;&lt;input type="radio" name="gender" value="male"&gt; Male&lt;/label&gt;
&lt;label&gt;&lt;input type="radio" name="gender" value="female"&gt; Female&lt;/label&gt;
&lt;label&gt;&lt;input type="radio" name="gender" value="other"&gt; Other&lt;/label&gt;

&lt;!-- Color picker --&gt;
&lt;input type="color" value="#ff0000"&gt;

&lt;!-- File upload --&gt;
&lt;input type="file" accept="image/*"&gt;
&lt;input type="file" accept=".pdf,.doc" multiple&gt;</pre>
      </div>

      <h3>Textarea and Select</h3>
      <div class="code-block">
        <pre>&lt;!-- Multi-line text --&gt;
&lt;textarea name="message" rows="4" cols="50"
  placeholder="Enter your message..."&gt;&lt;/textarea&gt;

&lt;!-- Dropdown select --&gt;
&lt;select name="country"&gt;
  &lt;option value=""&gt;Select a country&lt;/option&gt;
  &lt;option value="us"&gt;United States&lt;/option&gt;
  &lt;option value="uk"&gt;United Kingdom&lt;/option&gt;
  &lt;option value="ca"&gt;Canada&lt;/option&gt;
&lt;/select&gt;

&lt;!-- Grouped options --&gt;
&lt;select name="car"&gt;
  &lt;optgroup label="Swedish Cars"&gt;
    &lt;option value="volvo"&gt;Volvo&lt;/option&gt;
    &lt;option value="saab"&gt;Saab&lt;/option&gt;
  &lt;/optgroup&gt;
  &lt;optgroup label="German Cars"&gt;
    &lt;option value="mercedes"&gt;Mercedes&lt;/option&gt;
    &lt;option value="audi"&gt;Audi&lt;/option&gt;
  &lt;/optgroup&gt;
&lt;/select&gt;

&lt;!-- Multi-select --&gt;
&lt;select name="skills" multiple size="4"&gt;
  &lt;option value="html"&gt;HTML&lt;/option&gt;
  &lt;option value="css"&gt;CSS&lt;/option&gt;
  &lt;option value="js"&gt;JavaScript&lt;/option&gt;
  &lt;option value="react"&gt;React&lt;/option&gt;
&lt;/select&gt;</pre>
      </div>

      <h3>Hidden and Special Inputs</h3>
      <div class="code-block">
        <pre>&lt;!-- Hidden field --&gt;
&lt;input type="hidden" name="userId" value="12345"&gt;

&lt;!-- Button types --&gt;
&lt;button type="submit"&gt;Submit Form&lt;/button&gt;
&lt;button type="reset"&gt;Reset Form&lt;/button&gt;
&lt;button type="button"&gt;Custom Button&lt;/button&gt;

&lt;!-- Image as submit button --&gt;
&lt;input type="image" src="submit-btn.png" alt="Submit"&gt;</pre>
      </div>
    `,
    questions: [
      {
        id: "6-1",
        type: "mcq",
        question: "What attribute connects a label to its input element?",
        options: ["name", "id", "for", "link"],
        correctAnswer: "for",
        explanation: "The 'for' attribute on a <label> element should match the 'id' attribute of the input it's associated with. This improves accessibility and allows clicking the label to focus the input."
      },
      {
        id: "6-2",
        type: "mcq",
        question: "Which input type provides built-in email format validation?",
        options: ["type=\"text\"", "type=\"email\"", "type=\"validate\"", "type=\"mail\""],
        correctAnswer: "type=\"email\"",
        explanation: "The email input type provides built-in validation for email format. Browsers will show an error if the entered text doesn't match a valid email pattern."
      },
      {
        id: "6-3",
        type: "mcq",
        question: "How do you group radio buttons so only one can be selected?",
        options: ["Same id attribute", "Same name attribute", "Same class attribute", "Same value attribute"],
        correctAnswer: "Same name attribute",
        explanation: "Radio buttons with the same 'name' attribute form a group where only one can be selected at a time. Each radio should have a different 'value' to distinguish them."
      },
      {
        id: "6-4",
        type: "descriptive",
        question: "What is the difference between GET and POST form methods?",
        keywords: ["GET", "POST", "URL", "visible", "body", "secure", "data", "sensitive", "bookmark"],
        explanation: "GET appends form data to the URL (visible, can be bookmarked, has length limits). POST sends data in the request body (hidden from URL, more secure for sensitive data, no size limit). Use POST for passwords, personal info, and large data."
      }
    ]
  },
  {
    id: 7,
    title: "Form Validation & Accessibility",
    description: "Implement client-side validation and create accessible forms for all users",
    duration: "40 min",
    difficulty: "Intermediate",
    month: 1,
    week: 2,
    category: "HTML",
    content: `
      <h2>HTML5 Form Validation</h2>
      <p>HTML5 provides built-in form validation that works without JavaScript. This improves user experience and reduces server load.</p>

      <h3>Validation Attributes</h3>
      <div class="code-block">
        <pre>&lt;!-- Required field --&gt;
&lt;input type="text" required&gt;

&lt;!-- Minimum and maximum length --&gt;
&lt;input type="text" minlength="3" maxlength="50"&gt;

&lt;!-- Number range --&gt;
&lt;input type="number" min="1" max="100" step="5"&gt;

&lt;!-- Pattern (regex) --&gt;
&lt;input type="text" pattern="[A-Za-z]{3,}"
  title="At least 3 letters"&gt;

&lt;!-- Combined example --&gt;
&lt;input
  type="text"
  name="username"
  required
  minlength="3"
  maxlength="20"
  pattern="^[a-zA-Z0-9_]+$"
  title="Username: 3-20 characters, letters, numbers, underscore"&gt;</pre>
      </div>

      <h3>Common Validation Patterns</h3>
      <div class="code-block">
        <pre>&lt;!-- Phone number (US format) --&gt;
&lt;input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
  placeholder="123-456-7890"&gt;

&lt;!-- ZIP code --&gt;
&lt;input type="text" pattern="[0-9]{5}(-[0-9]{4})?"
  placeholder="12345 or 12345-6789"&gt;

&lt;!-- Strong password --&gt;
&lt;input type="password"
  pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  title="At least 8 chars with uppercase, lowercase, and number"&gt;

&lt;!-- URL with protocol --&gt;
&lt;input type="url" pattern="https?://.+"
  placeholder="https://example.com"&gt;</pre>
      </div>

      <h3>Styling Validation States</h3>
      <div class="code-block">
        <pre>/* CSS pseudo-classes for validation */
input:valid {
  border-color: green;
}

input:invalid {
  border-color: red;
}

input:required {
  border-left: 3px solid orange;
}

/* Only show invalid when focused or submitted */
input:not(:focus):not(:placeholder-shown):invalid {
  border-color: red;
}

/* Custom validation message styling */
input:invalid:focus {
  outline: 2px solid red;
}</pre>
      </div>

      <h2>Form Accessibility (A11y)</h2>
      <p>Accessible forms ensure everyone can use your website, including users with disabilities.</p>

      <h3>Labels and Instructions</h3>
      <div class="code-block">
        <pre>&lt;!-- Always use labels with inputs --&gt;
&lt;label for="email"&gt;Email Address&lt;/label&gt;
&lt;input type="email" id="email" name="email"&gt;

&lt;!-- Or wrap the input --&gt;
&lt;label&gt;
  Email Address
  &lt;input type="email" name="email"&gt;
&lt;/label&gt;

&lt;!-- Add instructions with aria-describedby --&gt;
&lt;label for="password"&gt;Password&lt;/label&gt;
&lt;input type="password" id="password"
  aria-describedby="password-help"&gt;
&lt;p id="password-help"&gt;Must be at least 8 characters&lt;/p&gt;</pre>
      </div>

      <h3>ARIA Attributes for Forms</h3>
      <div class="code-block">
        <pre>&lt;!-- Required field announcement --&gt;
&lt;input type="text" required aria-required="true"&gt;

&lt;!-- Invalid field announcement --&gt;
&lt;input type="email" aria-invalid="true"
  aria-describedby="email-error"&gt;
&lt;p id="email-error" role="alert"&gt;Please enter a valid email&lt;/p&gt;

&lt;!-- Live region for dynamic errors --&gt;
&lt;div aria-live="polite" id="form-errors"&gt;&lt;/div&gt;

&lt;!-- Disabled state --&gt;
&lt;button type="submit" disabled aria-disabled="true"&gt;
  Submit
&lt;/button&gt;</pre>
      </div>

      <h3>Fieldset and Legend</h3>
      <div class="code-block">
        <pre>&lt;form&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Personal Information&lt;/legend&gt;
    &lt;label for="fname"&gt;First Name&lt;/label&gt;
    &lt;input type="text" id="fname" name="fname"&gt;

    &lt;label for="lname"&gt;Last Name&lt;/label&gt;
    &lt;input type="text" id="lname" name="lname"&gt;
  &lt;/fieldset&gt;

  &lt;fieldset&gt;
    &lt;legend&gt;Contact Preferences&lt;/legend&gt;
    &lt;label&gt;
      &lt;input type="checkbox" name="contact" value="email"&gt;
      Email
    &lt;/label&gt;
    &lt;label&gt;
      &lt;input type="checkbox" name="contact" value="phone"&gt;
      Phone
    &lt;/label&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;</pre>
      </div>

      <h3>Error Handling Best Practices</h3>
      <ul>
        <li>Show errors near the relevant field</li>
        <li>Use color AND text/icons (don't rely on color alone)</li>
        <li>Provide clear, helpful error messages</li>
        <li>Focus the first field with an error after submission</li>
        <li>Don't clear the form on validation failure</li>
      </ul>
    `,
    questions: [
      {
        id: "7-1",
        type: "mcq",
        question: "What does the 'required' attribute do on an input?",
        options: ["Makes the field readonly", "Prevents form submission if empty", "Adds a red border", "Disables the field"],
        correctAnswer: "Prevents form submission if empty",
        explanation: "The 'required' attribute prevents form submission if the field is empty. The browser will show a validation message asking the user to fill in the field."
      },
      {
        id: "7-2",
        type: "mcq",
        question: "Why should you use fieldset and legend for groups of inputs?",
        options: ["Just for styling purposes", "To group related inputs and provide context for screen readers", "To enable JavaScript validation", "To make forms load faster"],
        correctAnswer: "To group related inputs and provide context for screen readers",
        explanation: "Fieldset groups related form controls and legend provides a caption. Screen readers announce the legend when entering the fieldset, helping users understand the context of the inputs."
      },
      {
        id: "7-3",
        type: "mcq",
        question: "What CSS pseudo-class targets an input that fails validation?",
        options: [":error", ":invalid", ":failed", ":wrong"],
        correctAnswer: ":invalid",
        explanation: "The :invalid pseudo-class matches form elements that don't pass validation. :valid matches elements that pass validation. These can be used to style fields based on their validation state."
      },
      {
        id: "7-4",
        type: "descriptive",
        question: "Explain why form accessibility matters and list three ways to improve it.",
        keywords: ["accessibility", "screen reader", "label", "fieldset", "aria", "error", "keyboard", "disability"],
        explanation: "Form accessibility ensures users with disabilities can complete forms. Improve it by: 1) Always associating labels with inputs using 'for' attribute, 2) Grouping related fields with fieldset/legend, 3) Providing clear error messages connected with aria-describedby, 4) Ensuring keyboard navigation works."
      }
    ]
  },
  {
    id: 8,
    title: "HTML5 APIs (Geolocation, Storage)",
    description: "Explore powerful HTML5 APIs for location, storage, and more",
    duration: "45 min",
    difficulty: "Intermediate",
    month: 1,
    week: 2,
    category: "HTML",
    content: `
      <h2>HTML5 Web APIs</h2>
      <p>HTML5 introduced powerful APIs that enable web applications to access device features and store data locally.</p>

      <h3>Geolocation API</h3>
      <p>Get the user's geographic location (requires user permission).</p>
      <div class="code-block">
        <pre>// Check if geolocation is supported
if ("geolocation" in navigator) {
  // Get current position
  navigator.geolocation.getCurrentPosition(
    // Success callback
    (position) =&gt; {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      console.log('Location: ' + lat + ', ' + lng);
    },
    // Error callback
    (error) =&gt; {
      console.log("Error:", error.message);
    },
    // Options
    { enableHighAccuracy: true, timeout: 5000 }
  );
}</pre>
      </div>

      <h3>Web Storage API</h3>
      <p>Store data in the browser that persists across sessions.</p>

      <h4>localStorage (Persistent)</h4>
      <div class="code-block">
        <pre>// Store data (persists until explicitly deleted)
localStorage.setItem('username', 'john_doe');

// Store objects (must stringify)
const user = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Retrieve data
const username = localStorage.getItem('username');
const savedUser = JSON.parse(localStorage.getItem('user'));

// Remove item
localStorage.removeItem('username');

// Clear all
localStorage.clear();</pre>
      </div>

      <h4>sessionStorage (Session Only)</h4>
      <div class="code-block">
        <pre>// Same API, but cleared when tab closes
sessionStorage.setItem('tempData', 'will disappear');
sessionStorage.getItem('tempData');</pre>
      </div>

      <h3>Datalist Element</h3>
      <div class="code-block">
        <pre>&lt;input list="browsers" placeholder="Choose browser"&gt;
&lt;datalist id="browsers"&gt;
  &lt;option value="Chrome"&gt;
  &lt;option value="Firefox"&gt;
  &lt;option value="Safari"&gt;
&lt;/datalist&gt;</pre>
      </div>

      <h3>Details and Summary</h3>
      <div class="code-block">
        <pre>&lt;details&gt;
  &lt;summary&gt;Click to expand&lt;/summary&gt;
  &lt;p&gt;Hidden content revealed on click.&lt;/p&gt;
&lt;/details&gt;</pre>
      </div>
    `,
    questions: [
      {
        id: "8-1",
        type: "mcq",
        question: "What is the main difference between localStorage and sessionStorage?",
        options: ["localStorage is faster", "sessionStorage persists after browser closes, localStorage doesn't", "localStorage persists after browser closes, sessionStorage doesn't", "They are identical"],
        correctAnswer: "localStorage persists after browser closes, sessionStorage doesn't",
        explanation: "localStorage data persists indefinitely until explicitly deleted. sessionStorage data is cleared when the browser tab or window is closed. Both have the same API but different lifespans."
      },
      {
        id: "8-2",
        type: "mcq",
        question: "What must you do before storing objects in localStorage?",
        options: ["Nothing special", "Convert to JSON string with JSON.stringify()", "Use a special object storage method", "Objects cannot be stored"],
        correctAnswer: "Convert to JSON string with JSON.stringify()",
        explanation: "localStorage only stores strings. To store objects or arrays, you must convert them to JSON strings using JSON.stringify(). When retrieving, use JSON.parse() to convert back."
      },
      {
        id: "8-3",
        type: "mcq",
        question: "What does the Geolocation API require before accessing location?",
        options: ["An API key", "User permission", "HTTPS connection only", "GPS hardware"],
        correctAnswer: "User permission",
        explanation: "The Geolocation API requires explicit user permission before accessing location data. The browser will prompt the user to allow or deny location access."
      },
      {
        id: "8-4",
        type: "descriptive",
        question: "Explain what the datalist element does and when you would use it.",
        keywords: ["datalist", "autocomplete", "suggestions", "input", "options", "dropdown", "user experience"],
        explanation: "The datalist element provides autocomplete suggestions for an input field. It shows a dropdown of predefined options as the user types, but still allows free-form input. Use it when you have common values but don't want to restrict choices."
      }
    ]
  },
  {
    id: 9,
    title: "SEO & Meta Tags",
    description: "Optimize your HTML for search engines and social media sharing",
    duration: "35 min",
    difficulty: "Intermediate",
    month: 1,
    week: 2,
    category: "HTML",
    content: `
      <h2>Search Engine Optimization (SEO)</h2>
      <p>SEO helps search engines understand your content and rank it appropriately.</p>

      <h3>Essential Meta Tags</h3>
      <div class="code-block">
        <pre>&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Page Title - Site Name&lt;/title&gt;
  &lt;meta name="description" content="150-160 character description"&gt;
  &lt;meta name="robots" content="index, follow"&gt;
&lt;/head&gt;</pre>
      </div>

      <h3>Open Graph (Social Media)</h3>
      <div class="code-block">
        <pre>&lt;meta property="og:title" content="Page Title"&gt;
&lt;meta property="og:description" content="Description"&gt;
&lt;meta property="og:image" content="https://example.com/image.jpg"&gt;
&lt;meta property="og:url" content="https://example.com/page"&gt;</pre>
      </div>

      <h3>Twitter Cards</h3>
      <div class="code-block">
        <pre>&lt;meta name="twitter:card" content="summary_large_image"&gt;
&lt;meta name="twitter:title" content="Page Title"&gt;
&lt;meta name="twitter:description" content="Description"&gt;
&lt;meta name="twitter:image" content="https://example.com/image.jpg"&gt;</pre>
      </div>

      <h3>Canonical URL</h3>
      <div class="code-block">
        <pre>&lt;link rel="canonical" href="https://example.com/preferred-url"&gt;</pre>
      </div>
    `,
    questions: [
      {
        id: "9-1",
        type: "mcq",
        question: "What is the recommended length for a meta description?",
        options: ["50-60 characters", "150-160 characters", "250-300 characters", "No limit"],
        correctAnswer: "150-160 characters",
        explanation: "Meta descriptions should be 150-160 characters. Longer descriptions get truncated in search results."
      },
      {
        id: "9-2",
        type: "mcq",
        question: "What do Open Graph meta tags primarily affect?",
        options: ["Search engine rankings", "How content appears when shared on social media", "Page loading speed", "Browser compatibility"],
        correctAnswer: "How content appears when shared on social media",
        explanation: "Open Graph tags control how your content appears when shared on social platforms like Facebook and LinkedIn."
      },
      {
        id: "9-3",
        type: "mcq",
        question: "What is the purpose of a canonical URL?",
        options: ["To redirect users", "To specify the preferred URL when content exists at multiple URLs", "To improve page speed", "To enable HTTPS"],
        correctAnswer: "To specify the preferred URL when content exists at multiple URLs",
        explanation: "The canonical tag tells search engines which URL is the 'official' version when the same content is accessible at multiple URLs."
      },
      {
        id: "9-4",
        type: "descriptive",
        question: "Why is the title tag important for SEO?",
        keywords: ["title", "SEO", "keywords", "search results", "click-through", "brand", "unique"],
        explanation: "The title tag appears in search results as the clickable headline. It should be 50-60 characters, include primary keywords, be unique for each page, and be compelling to encourage clicks."
      }
    ]
  },
  {
    id: 10,
    title: "HTML Best Practices & Validation",
    description: "Write clean, valid, and maintainable HTML code",
    duration: "35 min",
    difficulty: "Intermediate",
    month: 1,
    week: 2,
    category: "HTML",
    content: `
      <h2>HTML Best Practices</h2>
      <p>Writing clean, semantic HTML improves accessibility, SEO, and maintainability.</p>

      <h3>Semantic HTML</h3>
      <div class="code-block">
        <pre>&lt;!-- Good: Semantic elements --&gt;
&lt;header&gt;&lt;nav&gt;...&lt;/nav&gt;&lt;/header&gt;
&lt;main&gt;&lt;article&gt;...&lt;/article&gt;&lt;/main&gt;
&lt;footer&gt;...&lt;/footer&gt;

&lt;!-- Bad: Div soup --&gt;
&lt;div class="header"&gt;&lt;div class="nav"&gt;...&lt;/div&gt;&lt;/div&gt;</pre>
      </div>

      <h3>Accessibility Checklist</h3>
      <div class="code-block">
        <pre>&lt;!-- Always include alt text --&gt;
&lt;img src="photo.jpg" alt="Description"&gt;

&lt;!-- Use buttons for actions, links for navigation --&gt;
&lt;button onclick="doSomething()"&gt;Submit&lt;/button&gt;
&lt;a href="/page"&gt;Go to page&lt;/a&gt;

&lt;!-- Don't skip heading levels --&gt;
&lt;h1&gt;Title&lt;/h1&gt;
&lt;h2&gt;Section&lt;/h2&gt;  &lt;!-- Good --&gt;
&lt;h4&gt;Skip&lt;/h4&gt;      &lt;!-- Bad --&gt;</pre>
      </div>

      <h3>Performance</h3>
      <div class="code-block">
        <pre>&lt;!-- Defer non-critical scripts --&gt;
&lt;script src="app.js" defer&gt;&lt;/script&gt;

&lt;!-- Lazy load images --&gt;
&lt;img src="photo.jpg" loading="lazy" alt="..."&gt;

&lt;!-- Specify dimensions --&gt;
&lt;img src="photo.jpg" width="800" height="600" alt="..."&gt;</pre>
      </div>

      <h3>Validation</h3>
      <p>Use validator.w3.org to check your HTML for errors.</p>
    `,
    questions: [
      {
        id: "10-1",
        type: "mcq",
        question: "Why should you avoid 'div soup' in your HTML?",
        options: ["Divs are slow to render", "It makes HTML larger", "It reduces accessibility and meaning", "Divs are deprecated"],
        correctAnswer: "It reduces accessibility and meaning",
        explanation: "Using semantic elements instead of generic divs improves accessibility and SEO by conveying meaning about page structure."
      },
      {
        id: "10-2",
        type: "mcq",
        question: "What does the 'defer' attribute do on a script tag?",
        options: ["Loads the script faster", "Delays script execution until HTML parsing is complete", "Makes the script optional", "Defers error handling"],
        correctAnswer: "Delays script execution until HTML parsing is complete",
        explanation: "The 'defer' attribute downloads the script in parallel but waits to execute it until the HTML document has been fully parsed."
      },
      {
        id: "10-3",
        type: "mcq",
        question: "Which is NOT a common HTML validation error?",
        options: ["Missing alt attribute on img", "Duplicate ID attributes", "Using lowercase element names", "Improper nesting of elements"],
        correctAnswer: "Using lowercase element names",
        explanation: "Lowercase element names are the recommended practice. Common errors include missing alt attributes, duplicate IDs, and improper nesting."
      },
      {
        id: "10-4",
        type: "descriptive",
        question: "List five HTML best practices for writing clean, maintainable code.",
        keywords: ["semantic", "validation", "accessibility", "alt", "lowercase", "indentation", "comments", "structure"],
        explanation: "Key practices: 1) Use semantic elements, 2) Include alt text for images, 3) Use lowercase for elements, 4) Maintain consistent indentation, 5) Validate HTML, 6) Use meaningful class names, 7) Proper heading hierarchy."
      }
    ]
  },

  // WEEK 3: CSS Fundamentals (Lessons 11-15)
  {
    id: 11,
    title: "CSS Basics & Selectors",
    description: "Learn how to style web pages with CSS selectors and basic properties",
    duration: "40 min",
    difficulty: "Beginner",
    month: 1,
    week: 3,
    category: "CSS",
    content: `
      <h2>Introduction to CSS</h2>
      <p>CSS (Cascading Style Sheets) controls how HTML elements look on the page.</p>

      <h3>Adding CSS to HTML</h3>
      <div class="code-block">
        <pre>&lt;!-- 1. External stylesheet (recommended) --&gt;
&lt;link rel="stylesheet" href="styles.css"&gt;

&lt;!-- 2. Internal styles --&gt;
&lt;style&gt;
  p { color: blue; }
&lt;/style&gt;

&lt;!-- 3. Inline styles (avoid) --&gt;
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

      <h3>Basic Selectors</h3>
      <div class="code-block">
        <pre>/* Element selector */
p { color: black; }

/* Class selector (.) */
.highlight { background: yellow; }

/* ID selector (#) */
#header { height: 60px; }

/* Universal selector */
* { box-sizing: border-box; }

/* Multiple selectors */
h1, h2, h3 { font-family: Arial; }</pre>
      </div>

      <h3>Combinator Selectors</h3>
      <div class="code-block">
        <pre>/* Descendant (space) - any nested element */
article p { line-height: 1.6; }

/* Child (&gt;) - direct children only */
nav &gt; a { padding: 10px; }

/* Adjacent sibling (+) - immediately follows */
h2 + p { margin-top: 0; }

/* General sibling (~) - any following sibling */
h2 ~ p { color: gray; }</pre>
      </div>

      <h3>Attribute Selectors</h3>
      <div class="code-block">
        <pre>/* Has attribute */
[disabled] { opacity: 0.5; }

/* Exact value */
[type="email"] { border: 2px solid blue; }

/* Contains value */
[class*="btn"] { cursor: pointer; }

/* Starts with */
[href^="https"] { color: green; }

/* Ends with */
[href$=".pdf"] { color: red; }</pre>
      </div>

      <h3>Pseudo-classes</h3>
      <div class="code-block">
        <pre>/* User interaction */
a:hover { color: red; }
input:focus { outline: 2px solid blue; }
button:active { transform: scale(0.98); }

/* Form states */
input:disabled { background: #eee; }
input:checked { accent-color: green; }
input:valid { border-color: green; }
input:invalid { border-color: red; }

/* Position-based */
li:first-child { font-weight: bold; }
li:last-child { border: none; }
li:nth-child(odd) { background: #f5f5f5; }
li:nth-child(3n) { color: blue; }  /* Every 3rd */
p:first-of-type { font-size: 1.2em; }</pre>
      </div>

      <h3>Pseudo-elements</h3>
      <div class="code-block">
        <pre>/* First letter/line */
p::first-letter { font-size: 2em; }
p::first-line { font-weight: bold; }

/* Before/After content */
.required::after {
  content: " *";
  color: red;
}

blockquote::before {
  content: open-quote;
}

/* Selection styling */
::selection {
  background: yellow;
  color: black;
}</pre>
      </div>

      <h3>CSS Specificity</h3>
      <p>When multiple rules apply, specificity determines which wins:</p>
      <ol>
        <li><strong>Inline styles</strong> (1000 points)</li>
        <li><strong>ID selectors</strong> (100 points)</li>
        <li><strong>Class/attribute/pseudo-class</strong> (10 points)</li>
        <li><strong>Element/pseudo-element</strong> (1 point)</li>
      </ol>
      <div class="code-block">
        <pre>/* Specificity examples */
p { }                    /* 0-0-1 */
.text { }                /* 0-1-0 */
#main { }                /* 1-0-0 */
p.text { }               /* 0-1-1 */
#main p.text { }         /* 1-1-1 */</pre>
      </div>
    `,
    questions: [
      {
        id: "11-1",
        type: "mcq",
        question: "Which CSS selector has the highest specificity?",
        options: [".class", "#id", "element", "*"],
        correctAnswer: "#id",
        explanation: "ID selectors have specificity of 100, class selectors have 10, and element selectors have 1. Only inline styles (1000) have higher specificity than IDs."
      },
      {
        id: "11-2",
        type: "mcq",
        question: "What does the selector 'nav > a' select?",
        options: ["All links inside nav", "Only direct child links of nav", "Links after nav", "Nav elements containing links"],
        correctAnswer: "Only direct child links of nav",
        explanation: "The child combinator (>) selects only direct children, not nested descendants. 'nav > a' selects <a> elements that are immediate children of <nav>."
      },
      {
        id: "11-3",
        type: "mcq",
        question: "Which pseudo-class selects an element when the mouse is over it?",
        options: [":active", ":focus", ":hover", ":visited"],
        correctAnswer: ":hover",
        explanation: ":hover applies styles when the user's mouse pointer is over the element. :active is when clicking, :focus is for keyboard focus, :visited is for clicked links."
      },
      {
        id: "11-4",
        type: "descriptive",
        question: "Explain CSS specificity and why it matters.",
        keywords: ["specificity", "selector", "inline", "id", "class", "element", "override", "cascade", "points"],
        explanation: "CSS specificity determines which styles apply when multiple rules target the same element. Higher specificity wins: inline (1000) > IDs (100) > classes (10) > elements (1). Understanding specificity helps debug styling conflicts and write maintainable CSS."
      }
    ]
  },
  {
    id: 12,
    title: "Box Model & Display Properties",
    description: "Understand how elements take up space and control their display behavior",
    duration: "45 min",
    difficulty: "Beginner",
    month: 1,
    week: 3,
    category: "CSS",
    content: `
      <h2>The CSS Box Model</h2>
      <p>Every element in CSS is a rectangular box. The box model describes how these boxes are sized and spaced.</p>

      <h3>Box Model Components</h3>
      <p>From inside to outside:</p>
      <ol>
        <li><strong>Content</strong> - The actual content (text, image)</li>
        <li><strong>Padding</strong> - Space between content and border</li>
        <li><strong>Border</strong> - The visible border around padding</li>
        <li><strong>Margin</strong> - Space outside the border</li>
      </ol>

      <h3>Box Sizing</h3>
      <div class="code-block">
        <pre>/* Default: width excludes padding/border */
.content-box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* Total width: 200 + 40 + 10 = 250px */
}

/* Better: width includes padding/border */
.border-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* Total width: 200px */
}

/* Apply to all elements (recommended) */
*, *::before, *::after {
  box-sizing: border-box;
}</pre>
      </div>

      <h3>Margin and Padding</h3>
      <div class="code-block">
        <pre>/* Shorthand values */
margin: 20px;                /* all sides */
margin: 10px 20px;           /* vertical | horizontal */
margin: 10px 20px 15px;      /* top | horizontal | bottom */
margin: 10px 20px 15px 25px; /* top | right | bottom | left */

/* Individual sides */
margin-top: 10px;
margin-right: 20px;
padding-left: 15px;
padding-bottom: 5px;

/* Auto margin for centering */
.centered {
  width: 800px;
  margin: 0 auto;
}</pre>
      </div>

      <h3>Margin Collapse</h3>
      <div class="code-block">
        <pre>/* Vertical margins collapse - only the larger one applies */
h2 { margin-bottom: 20px; }
p { margin-top: 16px; }
/* Gap between h2 and p is 20px, not 36px */

/* Prevent collapse with padding or border */
.parent {
  padding-top: 1px; /* Prevents child margin collapse */
}</pre>
      </div>

      <h3>Display Property</h3>
      <div class="code-block">
        <pre>/* Block: full width, new line */
display: block;
/* Default for: div, p, h1-h6, header, section, etc. */

/* Inline: flows with text, no width/height */
display: inline;
/* Default for: span, a, strong, em, etc. */

/* Inline-block: inline + respects dimensions */
display: inline-block;

/* None: removes from layout */
display: none;

/* Modern layouts */
display: flex;
display: grid;</pre>
      </div>

      <h3>Block vs Inline Comparison</h3>
      <div class="code-block">
        <pre>/* Block elements */
.block {
  display: block;
  width: 100%;          /* Takes full width */
  height: 100px;        /* Height works */
  margin: 20px;         /* All margins work */
  padding: 20px;        /* All padding works */
}

/* Inline elements */
.inline {
  display: inline;
  width: 100px;         /* Ignored! */
  height: 50px;         /* Ignored! */
  margin-top: 20px;     /* Ignored! */
  margin-left: 10px;    /* Works */
  padding: 20px;        /* Visual only, doesn't push vertically */
}

/* Inline-block: best of both */
.inline-block {
  display: inline-block;
  width: 100px;         /* Works */
  height: 50px;         /* Works */
  margin: 20px;         /* All work */
  padding: 20px;        /* All work */
}</pre>
      </div>

      <h3>Width and Height</h3>
      <div class="code-block">
        <pre>/* Fixed dimensions */
width: 300px;
height: 200px;

/* Percentage (relative to parent) */
width: 50%;
height: 100%;

/* Min/Max constraints */
min-width: 200px;
max-width: 800px;
min-height: 100px;
max-height: 500px;

/* Viewport units */
width: 100vw;   /* 100% of viewport width */
height: 100vh;  /* 100% of viewport height */

/* Auto */
width: auto;    /* Default, content-based */
height: auto;   /* Fits content */</pre>
      </div>

      <h3>Overflow</h3>
      <div class="code-block">
        <pre>/* Control content that exceeds box */
overflow: visible;  /* Default, content spills out */
overflow: hidden;   /* Content is clipped */
overflow: scroll;   /* Always show scrollbars */
overflow: auto;     /* Scrollbars only when needed */

/* Individual axis */
overflow-x: hidden;
overflow-y: auto;</pre>
      </div>
    `,
    questions: [
      {
        id: "12-1",
        type: "mcq",
        question: "What does box-sizing: border-box do?",
        options: ["Adds a box around the border", "Makes the border thicker", "Includes padding and border in the element's width", "Removes the border"],
        correctAnswer: "Includes padding and border in the element's width",
        explanation: "box-sizing: border-box includes padding and border in the specified width/height, making layouts more predictable. Without it, padding and border add to the dimensions."
      },
      {
        id: "12-2",
        type: "mcq",
        question: "What happens to width and height on inline elements?",
        options: ["They work normally", "They are ignored", "They only work with !important", "They cause errors"],
        correctAnswer: "They are ignored",
        explanation: "Inline elements ignore width and height properties. They only take up as much space as their content needs. Use inline-block or block if you need to set dimensions."
      },
      {
        id: "12-3",
        type: "mcq",
        question: "How do you horizontally center a block element with a fixed width?",
        options: ["text-align: center", "margin: 0 auto", "align: center", "display: center"],
        correctAnswer: "margin: 0 auto",
        explanation: "To center a block element, give it a width and use margin: 0 auto. The 'auto' value distributes remaining space equally on left and right."
      },
      {
        id: "12-4",
        type: "descriptive",
        question: "Explain the CSS box model and its four components.",
        keywords: ["content", "padding", "border", "margin", "box-sizing", "width", "height"],
        explanation: "The box model has four layers: Content (the actual content), Padding (space between content and border), Border (visible line around padding), and Margin (space outside border). box-sizing: border-box makes width/height include padding and border."
      }
    ]
  },
  {
    id: 13,
    title: "Colors, Backgrounds & Borders",
    description: "Master CSS color systems, background properties, and border styling",
    duration: "40 min",
    difficulty: "Beginner",
    month: 1,
    week: 3,
    category: "CSS",
    content: `
      <h2>CSS Colors</h2>
      <p>CSS offers multiple ways to specify colors, each with different use cases.</p>

      <h3>Color Formats</h3>
      <div class="code-block">
        <pre>/* Named colors (147 built-in) */
color: red;
color: darkblue;
color: transparent;

/* Hexadecimal */
color: #ff0000;        /* Red */
color: #f00;           /* Shorthand for #ff0000 */
color: #ff000080;      /* With alpha (50% transparent) */

/* RGB / RGBA */
color: rgb(255, 0, 0);           /* Red */
color: rgba(255, 0, 0, 0.5);     /* 50% transparent */
color: rgb(255 0 0 / 50%);       /* Modern syntax */

/* HSL / HSLA (Hue, Saturation, Lightness) */
color: hsl(0, 100%, 50%);        /* Red */
color: hsla(0, 100%, 50%, 0.5);  /* 50% transparent */
color: hsl(0 100% 50% / 50%);    /* Modern syntax */

/* currentColor keyword */
border: 1px solid currentColor;  /* Uses text color */</pre>
      </div>

      <h3>When to Use Each Format</h3>
      <ul>
        <li><strong>Named:</strong> Quick prototyping, simple colors</li>
        <li><strong>Hex:</strong> Most common, design tools use it</li>
        <li><strong>RGB:</strong> When you need transparency (rgba)</li>
        <li><strong>HSL:</strong> Easier to adjust (change lightness/saturation)</li>
      </ul>

      <h3>Background Properties</h3>
      <div class="code-block">
        <pre>/* Background color */
background-color: #f5f5f5;

/* Background image */
background-image: url('image.jpg');
background-image: url('path/to/image.png');

/* Multiple backgrounds */
background-image:
  url('overlay.png'),
  url('background.jpg');

/* Gradients */
background: linear-gradient(to right, #ff0000, #0000ff);
background: linear-gradient(45deg, red, yellow, green);
background: radial-gradient(circle, white, black);</pre>
      </div>

      <h3>Background Positioning and Sizing</h3>
      <div class="code-block">
        <pre>/* Position */
background-position: center;
background-position: top right;
background-position: 50% 50%;
background-position: 20px 40px;

/* Size */
background-size: cover;     /* Fill, may crop */
background-size: contain;   /* Fit, may leave space */
background-size: 100% auto;
background-size: 200px 150px;

/* Repeat */
background-repeat: no-repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: space;   /* Even spacing */
background-repeat: round;   /* Resize to fit */

/* Attachment */
background-attachment: scroll;  /* Default */
background-attachment: fixed;   /* Parallax effect */
background-attachment: local;   /* Scrolls with content */</pre>
      </div>

      <h3>Background Shorthand</h3>
      <div class="code-block">
        <pre>/* Full shorthand */
background: #f5f5f5 url('bg.jpg') no-repeat center/cover;

/* Order: color image repeat position/size attachment */
background:
  url('image.jpg')
  no-repeat
  center center
  / cover
  fixed;</pre>
      </div>

      <h3>Borders</h3>
      <div class="code-block">
        <pre>/* Border shorthand */
border: 1px solid #ccc;
border: 2px dashed red;
border: 3px dotted blue;

/* Individual properties */
border-width: 1px;
border-style: solid;
border-color: #333;

/* Individual sides */
border-top: 2px solid red;
border-right: none;
border-bottom: 1px dashed #ccc;
border-left: 3px double blue;

/* Border styles */
border-style: none;
border-style: solid;
border-style: dashed;
border-style: dotted;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;</pre>
      </div>

      <h3>Border Radius</h3>
      <div class="code-block">
        <pre>/* All corners */
border-radius: 8px;

/* Individual corners */
border-radius: 10px 20px 30px 40px; /* TL TR BR BL */

/* Elliptical corners */
border-radius: 50px / 25px;

/* Circles and pills */
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.pill {
  border-radius: 9999px;
}</pre>
      </div>

      <h3>Box Shadow</h3>
      <div class="code-block">
        <pre>/* Basic shadow */
box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
/* x-offset y-offset blur color */

/* With spread */
box-shadow: 2px 2px 5px 2px rgba(0,0,0,0.3);
/* x y blur spread color */

/* Inset shadow */
box-shadow: inset 0 2px 5px rgba(0,0,0,0.2);

/* Multiple shadows */
box-shadow:
  0 1px 3px rgba(0,0,0,0.12),
  0 1px 2px rgba(0,0,0,0.24);

/* No shadow */
box-shadow: none;</pre>
      </div>
    `,
    questions: [
      {
        id: "13-1",
        type: "mcq",
        question: "What does rgba(255, 0, 0, 0.5) represent?",
        options: ["Solid red", "50% transparent red", "Red with 50% saturation", "Dark red"],
        correctAnswer: "50% transparent red",
        explanation: "RGBA adds an alpha channel (0-1) for transparency. rgba(255, 0, 0, 0.5) is red (255,0,0) at 50% opacity (0.5). 0 is fully transparent, 1 is fully opaque."
      },
      {
        id: "13-2",
        type: "mcq",
        question: "What does background-size: cover do?",
        options: ["Shows the full image", "Fills the container, cropping if needed", "Tiles the image", "Centers the image"],
        correctAnswer: "Fills the container, cropping if needed",
        explanation: "background-size: cover scales the image to fill the container completely, cropping parts that don't fit. 'contain' fits the whole image, possibly leaving empty space."
      },
      {
        id: "13-3",
        type: "mcq",
        question: "How do you create a perfect circle with CSS?",
        options: ["border-style: circle", "border-radius: 100px", "border-radius: 50% on a square element", "shape: circle"],
        correctAnswer: "border-radius: 50% on a square element",
        explanation: "border-radius: 50% on an element with equal width and height creates a perfect circle. The percentage is relative to the element's dimensions."
      },
      {
        id: "13-4",
        type: "descriptive",
        question: "When would you use HSL colors instead of hex or RGB?",
        keywords: ["HSL", "hue", "saturation", "lightness", "adjust", "variations", "theme", "color scheme"],
        explanation: "HSL is useful when creating color variations. You can easily make colors lighter/darker by adjusting lightness, or more/less vibrant by adjusting saturation, while keeping the same hue. It's intuitive for creating consistent color schemes and themes."
      }
    ]
  },
  {
    id: 14,
    title: "Typography & Web Fonts",
    description: "Control text appearance with CSS typography properties and custom fonts",
    duration: "35 min",
    difficulty: "Beginner",
    month: 1,
    week: 3,
    category: "CSS",
    content: `
      <h2>CSS Typography</h2>
      <p>Typography is crucial for readability and visual hierarchy. CSS provides extensive control over text appearance.</p>

      <h3>Font Family</h3>
      <div class="code-block">
        <pre>/* Font stack with fallbacks */
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
font-family: Georgia, "Times New Roman", serif;
font-family: "Courier New", Courier, monospace;

/* Generic font families */
font-family: serif;       /* Times, Georgia */
font-family: sans-serif;  /* Arial, Helvetica */
font-family: monospace;   /* Courier, Monaco */
font-family: cursive;     /* Script fonts */
font-family: fantasy;     /* Decorative */

/* System font stack */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Oxygen, Ubuntu, sans-serif;</pre>
      </div>

      <h3>Font Size</h3>
      <div class="code-block">
        <pre>/* Absolute units */
font-size: 16px;
font-size: 12pt;

/* Relative units */
font-size: 1rem;     /* Relative to root (html) */
font-size: 1.5em;    /* Relative to parent */
font-size: 120%;     /* Percentage of parent */

/* Viewport units */
font-size: 5vw;      /* 5% of viewport width */

/* Keywords */
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;

/* Fluid typography with clamp() */
font-size: clamp(1rem, 2.5vw, 2rem);
/* min, preferred, max */</pre>
      </div>

      <h3>Font Weight and Style</h3>
      <div class="code-block">
        <pre>/* Weight (100-900) */
font-weight: normal;    /* 400 */
font-weight: bold;      /* 700 */
font-weight: 100;       /* Thin */
font-weight: 300;       /* Light */
font-weight: 500;       /* Medium */
font-weight: 600;       /* Semi-bold */
font-weight: 900;       /* Black */

/* Style */
font-style: normal;
font-style: italic;
font-style: oblique;</pre>
      </div>

      <h3>Line Height and Spacing</h3>
      <div class="code-block">
        <pre>/* Line height */
line-height: 1.5;       /* Unitless (recommended) */
line-height: 24px;      /* Fixed */
line-height: 150%;      /* Percentage */

/* Letter spacing */
letter-spacing: 0.05em;
letter-spacing: 2px;
letter-spacing: -0.5px;  /* Tighter */

/* Word spacing */
word-spacing: 0.25em;
word-spacing: 4px;</pre>
      </div>

      <h3>Text Properties</h3>
      <div class="code-block">
        <pre>/* Alignment */
text-align: left;
text-align: center;
text-align: right;
text-align: justify;

/* Decoration */
text-decoration: none;
text-decoration: underline;
text-decoration: line-through;
text-decoration: underline wavy red;

/* Transform */
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;
text-transform: none;

/* Indentation */
text-indent: 2em;

/* White space handling */
white-space: normal;     /* Wrap, collapse spaces */
white-space: nowrap;     /* No wrap */
white-space: pre;        /* Preserve all */
white-space: pre-wrap;   /* Preserve, but wrap */</pre>
      </div>

      <h3>Text Overflow</h3>
      <div class="code-block">
        <pre>/* Single line ellipsis */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Multi-line ellipsis */
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}</pre>
      </div>

      <h3>Web Fonts with @font-face</h3>
      <div class="code-block">
        <pre>/* Define custom font */
@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2') format('woff2'),
       url('myfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;  /* Show fallback while loading */
}

/* Use the font */
body {
  font-family: 'MyFont', sans-serif;
}</pre>
      </div>

      <h3>Google Fonts</h3>
      <div class="code-block">
        <pre>&lt;!-- In HTML head --&gt;
&lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;
&lt;link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&amp;display=swap" rel="stylesheet"&gt;

/* In CSS */
body {
  font-family: 'Inter', sans-serif;
}</pre>
      </div>

      <h3>Font Shorthand</h3>
      <div class="code-block">
        <pre>/* font: style weight size/line-height family */
font: italic bold 16px/1.5 Arial, sans-serif;
font: 700 1.2rem/1.6 "Helvetica Neue", sans-serif;</pre>
      </div>
    `,
    questions: [
      {
        id: "14-1",
        type: "mcq",
        question: "What is the recommended way to specify line-height?",
        options: ["In pixels", "As a unitless number", "In percentage", "In ems"],
        correctAnswer: "As a unitless number",
        explanation: "Unitless line-height (like 1.5) is recommended because it's multiplied by the element's font-size. This means children inherit the multiplier, not a fixed value, which works better with varying font sizes."
      },
      {
        id: "14-2",
        type: "mcq",
        question: "What does font-display: swap do?",
        options: ["Swaps between fonts randomly", "Shows fallback font while custom font loads", "Prevents font loading", "Swaps font weight"],
        correctAnswer: "Shows fallback font while custom font loads",
        explanation: "font-display: swap tells the browser to show a fallback font immediately, then swap to the custom font once loaded. This prevents invisible text during font loading (FOIT)."
      },
      {
        id: "14-3",
        type: "mcq",
        question: "What's the difference between rem and em for font-size?",
        options: ["They are the same", "rem is relative to root element, em is relative to parent", "em is relative to root, rem is relative to parent", "rem is for responsive, em is not"],
        correctAnswer: "rem is relative to root element, em is relative to parent",
        explanation: "rem (root em) is always relative to the html element's font-size, making it predictable. em is relative to the parent element's font-size, which can compound in nested elements."
      },
      {
        id: "14-4",
        type: "descriptive",
        question: "How would you create text that shows an ellipsis when it overflows?",
        keywords: ["ellipsis", "overflow", "hidden", "white-space", "nowrap", "text-overflow", "truncate"],
        explanation: "For single-line truncation: set white-space: nowrap (prevent wrapping), overflow: hidden (hide overflow), and text-overflow: ellipsis (show ...). For multi-line, use -webkit-line-clamp with display: -webkit-box and -webkit-box-orient: vertical."
      }
    ]
  },
  {
    id: 15,
    title: "Positioning & Z-Index",
    description: "Control element placement with CSS positioning and stacking order",
    duration: "45 min",
    difficulty: "Intermediate",
    month: 1,
    week: 3,
    category: "CSS",
    content: `
      <h2>CSS Positioning</h2>
      <p>The position property controls how elements are placed in the document flow.</p>

      <h3>Position Values</h3>
      <div class="code-block">
        <pre>/* Static: Default, normal document flow */
position: static;

/* Relative: Offset from normal position */
position: relative;
top: 10px;
left: 20px;
/* Element keeps its space in flow */

/* Absolute: Removed from flow, positioned to ancestor */
position: absolute;
top: 0;
right: 0;
/* Positioned relative to nearest positioned ancestor */

/* Fixed: Positioned relative to viewport */
position: fixed;
bottom: 20px;
right: 20px;
/* Stays in place when scrolling */

/* Sticky: Hybrid of relative and fixed */
position: sticky;
top: 0;
/* Sticks when scrolled to threshold */</pre>
      </div>

      <h3>Offset Properties</h3>
      <div class="code-block">
        <pre>/* Used with relative, absolute, fixed, sticky */
top: 10px;      /* Distance from top */
right: 20px;    /* Distance from right */
bottom: 10px;   /* Distance from bottom */
left: 20px;     /* Distance from left */

/* Percentage values */
top: 50%;
left: 50%;

/* Auto */
left: auto;     /* Default positioning */

/* Negative values */
top: -20px;     /* Move up/outside */
margin-top: -10px; /* Alternative approach */</pre>
      </div>

      <h3>Relative Positioning</h3>
      <div class="code-block">
        <pre>.relative-box {
  position: relative;
  top: 20px;
  left: 30px;
  /* Moves 20px down and 30px right */
  /* Original space is preserved */
}

/* Common use: positioning context for absolute children */
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 0;
  right: 0;
}</pre>
      </div>

      <h3>Absolute Positioning</h3>
      <div class="code-block">
        <pre>/* Position relative to positioned ancestor */
.container {
  position: relative;
}

.absolute-child {
  position: absolute;
  top: 10px;
  right: 10px;
}

/* Centering with absolute */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Full coverage */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* or: inset: 0; */
}</pre>
      </div>

      <h3>Fixed Positioning</h3>
      <div class="code-block">
        <pre>/* Fixed header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
}

/* Account for fixed header */
body {
  padding-top: 60px;
}

/* Back to top button */
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
}</pre>
      </div>

      <h3>Sticky Positioning</h3>
      <div class="code-block">
        <pre>/* Sticky header */
.sticky-header {
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
}

/* Sticky sidebar */
.sidebar {
  position: sticky;
  top: 20px;
  align-self: start; /* Important for flexbox */
}

/* Note: sticky needs a scrollable ancestor
   and won't work if any ancestor has overflow: hidden */</pre>
      </div>

      <h3>Z-Index and Stacking</h3>
      <div class="code-block">
        <pre>/* Z-index only works on positioned elements */
.layer1 {
  position: relative;
  z-index: 1;
}

.layer2 {
  position: relative;
  z-index: 2;  /* Appears above layer1 */
}

/* Stacking context */
.creates-stacking-context {
  position: relative;
  z-index: 1;
  /* Children z-index is relative to this */
}

/* Common z-index scale */
.dropdown { z-index: 100; }
.modal-backdrop { z-index: 200; }
.modal { z-index: 300; }
.tooltip { z-index: 400; }
.notification { z-index: 500; }</pre>
      </div>

      <h3>Inset Shorthand</h3>
      <div class="code-block">
        <pre>/* Modern shorthand for top/right/bottom/left */
.overlay {
  position: absolute;
  inset: 0;  /* Same as top:0; right:0; bottom:0; left:0; */
}

.offset {
  position: absolute;
  inset: 10px 20px;  /* vertical | horizontal */
}

.custom {
  position: absolute;
  inset: 10px 20px 30px 40px;  /* top right bottom left */
}</pre>
      </div>
    `,
    questions: [
      {
        id: "15-1",
        type: "mcq",
        question: "What is the difference between position: relative and position: absolute?",
        options: ["No difference", "Relative stays in flow, absolute is removed from flow", "Absolute stays in flow, relative is removed", "They both remove from flow"],
        correctAnswer: "Relative stays in flow, absolute is removed from flow",
        explanation: "Relative positioning keeps the element in the document flow and offsets it from its original position. Absolute removes it from the flow and positions it relative to the nearest positioned ancestor."
      },
      {
        id: "15-2",
        type: "mcq",
        question: "What does position: sticky do?",
        options: ["Makes element unmovable", "Combines relative and fixed behavior", "Sticks to mouse cursor", "Only works in tables"],
        correctAnswer: "Combines relative and fixed behavior",
        explanation: "Sticky positioning acts like relative until the element reaches a specified threshold (like top: 0), then it 'sticks' like fixed positioning until its parent scrolls out of view."
      },
      {
        id: "15-3",
        type: "mcq",
        question: "When does z-index work?",
        options: ["On all elements", "Only on block elements", "Only on positioned elements (relative, absolute, fixed, sticky)", "Only with flexbox"],
        correctAnswer: "Only on positioned elements (relative, absolute, fixed, sticky)",
        explanation: "z-index only affects elements with a position value other than static (the default). Elements must be positioned for z-index to control their stacking order."
      },
      {
        id: "15-4",
        type: "descriptive",
        question: "How do you center an absolutely positioned element both horizontally and vertically?",
        keywords: ["absolute", "center", "transform", "translate", "top", "left", "50%", "-50%"],
        explanation: "Set position: absolute, top: 50%, left: 50%, then use transform: translate(-50%, -50%). The 50% offsets move the element's top-left corner to center, then translate moves it back by half its own dimensions to truly center it."
      }
    ]
  },

  // WEEK 4: CSS Layout & Modern Features (Lessons 16-20)
  {
    id: 16,
    title: "Flexbox Complete Guide",
    description: "Master one-dimensional layouts with CSS Flexbox",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 1,
    week: 4,
    category: "CSS",
    content: `
      <h2>CSS Flexbox</h2>
      <p>Flexbox is a one-dimensional layout system for arranging items in rows or columns with powerful alignment capabilities.</p>

      <h3>Enable Flexbox</h3>
      <div class="code-block">
        <pre>.container {
  display: flex;
  /* or display: inline-flex; */
}</pre>
      </div>

      <h3>Flex Direction</h3>
      <div class="code-block">
        <pre>flex-direction: row;           /* Default: left to right */
flex-direction: row-reverse;   /* Right to left */
flex-direction: column;        /* Top to bottom */
flex-direction: column-reverse; /* Bottom to top */</pre>
      </div>

      <h3>Justify Content (Main Axis)</h3>
      <div class="code-block">
        <pre>/* Horizontal alignment in row direction */
justify-content: flex-start;    /* Items at start */
justify-content: flex-end;      /* Items at end */
justify-content: center;        /* Items centered */
justify-content: space-between; /* First at start, last at end */
justify-content: space-around;  /* Equal space around items */
justify-content: space-evenly;  /* Equal space everywhere */</pre>
      </div>

      <h3>Align Items (Cross Axis)</h3>
      <div class="code-block">
        <pre>/* Vertical alignment in row direction */
align-items: stretch;      /* Default: fill container height */
align-items: flex-start;   /* Top aligned */
align-items: flex-end;     /* Bottom aligned */
align-items: center;       /* Vertically centered */
align-items: baseline;     /* Text baseline aligned */</pre>
      </div>

      <h3>Flex Wrap</h3>
      <div class="code-block">
        <pre>flex-wrap: nowrap;       /* Default: single line, may shrink */
flex-wrap: wrap;         /* Wrap to multiple lines */
flex-wrap: wrap-reverse; /* Wrap in reverse */

/* Shorthand */
flex-flow: row wrap;     /* direction + wrap */</pre>
      </div>

      <h3>Align Content (Multi-line)</h3>
      <div class="code-block">
        <pre>/* Only works with flex-wrap: wrap */
align-content: flex-start;
align-content: flex-end;
align-content: center;
align-content: space-between;
align-content: space-around;
align-content: stretch;</pre>
      </div>

      <h3>Gap</h3>
      <div class="code-block">
        <pre>gap: 20px;           /* Same gap both directions */
gap: 10px 20px;      /* row-gap column-gap */
row-gap: 10px;
column-gap: 20px;</pre>
      </div>

      <h3>Flex Item Properties</h3>
      <div class="code-block">
        <pre>/* Flex grow: how much to grow */
.item { flex-grow: 0; }     /* Don't grow (default) */
.item { flex-grow: 1; }     /* Take available space */
.item-2x { flex-grow: 2; }  /* Take 2x more space */

/* Flex shrink: how much to shrink */
.item { flex-shrink: 1; }   /* Default: can shrink */
.item { flex-shrink: 0; }   /* Don't shrink */

/* Flex basis: initial size */
flex-basis: auto;    /* Use content or width */
flex-basis: 200px;   /* Fixed initial size */
flex-basis: 25%;     /* Percentage */
flex-basis: 0;       /* Ignore content size */

/* Flex shorthand: grow shrink basis */
flex: 1;           /* flex: 1 1 0% - grow equally */
flex: auto;        /* flex: 1 1 auto */
flex: none;        /* flex: 0 0 auto - fixed size */
flex: 0 0 200px;   /* Don't grow/shrink, 200px */</pre>
      </div>

      <h3>Align Self</h3>
      <div class="code-block">
        <pre>/* Override align-items for single item */
.item {
  align-self: auto;       /* Use parent's align-items */
  align-self: flex-start;
  align-self: flex-end;
  align-self: center;
  align-self: stretch;
}</pre>
      </div>

      <h3>Order</h3>
      <div class="code-block">
        <pre>/* Change visual order without changing HTML */
.item { order: 0; }       /* Default */
.first { order: -1; }     /* Move to start */
.last { order: 1; }       /* Move to end */</pre>
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

/* Equal columns */
.columns {
  display: flex;
  gap: 20px;
}
.column { flex: 1; }

/* Card grid that wraps */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card {
  flex: 1 1 300px;  /* Grow, shrink, min 300px */
}

/* Sticky footer */
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main { flex: 1; }
footer { /* stays at bottom */ }</pre>
      </div>
    `,
    questions: [
      {
        id: "16-1",
        type: "mcq",
        question: "What does justify-content: space-between do?",
        options: ["Centers items with equal space", "First item at start, last at end, equal space between others", "Adds space around all items", "Removes space between items"],
        correctAnswer: "First item at start, last at end, equal space between others",
        explanation: "space-between places the first item at the start, last item at the end, and distributes remaining space evenly between items. No space on the edges."
      },
      {
        id: "16-2",
        type: "mcq",
        question: "How do you make a flex item take up all available space?",
        options: ["width: 100%", "flex-grow: 1", "flex-fill: true", "flex: auto"],
        correctAnswer: "flex-grow: 1",
        explanation: "flex-grow: 1 tells an item to grow and fill available space. Multiple items with flex-grow: 1 share space equally. flex-grow: 0 (default) means the item won't grow."
      },
      {
        id: "16-3",
        type: "mcq",
        question: "What is the main axis in flex-direction: column?",
        options: ["Horizontal", "Vertical", "Both", "Neither"],
        correctAnswer: "Vertical",
        explanation: "The main axis follows flex-direction. In column, main axis is vertical (justify-content affects vertical spacing). Cross axis is horizontal (align-items affects horizontal alignment)."
      },
      {
        id: "16-4",
        type: "descriptive",
        question: "Explain the difference between justify-content and align-items.",
        keywords: ["justify-content", "align-items", "main axis", "cross axis", "horizontal", "vertical", "row", "column"],
        explanation: "justify-content aligns items along the main axis (horizontal in row, vertical in column). align-items aligns items along the cross axis (vertical in row, horizontal in column). Together they control alignment in both dimensions."
      }
    ]
  },
  {
    id: 17,
    title: "CSS Grid Complete Guide",
    description: "Create two-dimensional layouts with CSS Grid",
    duration: "50 min",
    difficulty: "Intermediate",
    month: 1,
    week: 4,
    category: "CSS",
    content: `
      <h2>CSS Grid</h2>
      <p>CSS Grid is a two-dimensional layout system for creating complex, grid-based layouts.</p>

      <h3>Enable Grid</h3>
      <div class="code-block">
        <pre>.container {
  display: grid;
  /* or display: inline-grid; */
}</pre>
      </div>

      <h3>Defining Columns and Rows</h3>
      <div class="code-block">
        <pre>/* Fixed sizes */
grid-template-columns: 200px 200px 200px;
grid-template-rows: 100px 200px;

/* Fractional units (fr) */
grid-template-columns: 1fr 1fr 1fr;  /* Equal thirds */
grid-template-columns: 1fr 2fr 1fr;  /* Middle is 2x */

/* Mixed units */
grid-template-columns: 200px 1fr 200px;

/* repeat() function */
grid-template-columns: repeat(3, 1fr);
grid-template-columns: repeat(4, 200px);
grid-template-columns: repeat(3, 1fr 2fr);

/* auto-fill and auto-fit */
grid-template-columns: repeat(auto-fill, 200px);
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

/* minmax() function */
grid-template-columns: minmax(100px, 200px) 1fr;
grid-template-columns: repeat(3, minmax(150px, 1fr));</pre>
      </div>

      <h3>Gap (Gutters)</h3>
      <div class="code-block">
        <pre>gap: 20px;           /* Both directions */
gap: 10px 20px;      /* row-gap column-gap */
row-gap: 10px;
column-gap: 20px;</pre>
      </div>

      <h3>Placing Items by Lines</h3>
      <div class="code-block">
        <pre>/* Column lines */
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  /* or shorthand */
  grid-column: 1 / 3;     /* Span columns 1-2 */
  grid-column: 1 / span 2; /* Start at 1, span 2 */
  grid-column: span 2;    /* Span 2 from auto position */
}

/* Row lines */
.item {
  grid-row: 1 / 3;        /* Span rows 1-2 */
}

/* Shorthand: row-start / col-start / row-end / col-end */
.item {
  grid-area: 1 / 1 / 3 / 4;
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
.footer  { grid-area: footer; }

/* Empty cell with . */
grid-template-areas:
  "header header"
  "sidebar main"
  ". footer";</pre>
      </div>

      <h3>Alignment</h3>
      <div class="code-block">
        <pre>/* Align all items in their cells */
justify-items: start | end | center | stretch;
align-items: start | end | center | stretch;
place-items: center;  /* Both at once */

/* Align individual item */
.item {
  justify-self: center;
  align-self: end;
  place-self: center end;
}

/* Align the entire grid in container */
justify-content: start | end | center | space-between | space-around;
align-content: start | end | center | space-between | space-around;</pre>
      </div>

      <h3>Auto-fill vs Auto-fit</h3>
      <div class="code-block">
        <pre>/* auto-fill: creates empty tracks if space available */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

/* auto-fit: collapses empty tracks, items stretch */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

/* Use auto-fit for responsive grids that grow items */</pre>
      </div>

      <h3>Implicit Grid</h3>
      <div class="code-block">
        <pre>/* Size auto-created rows/columns */
grid-auto-rows: 100px;
grid-auto-rows: minmax(100px, auto);
grid-auto-columns: 1fr;

/* Auto-placement direction */
grid-auto-flow: row;     /* Default: fill rows first */
grid-auto-flow: column;  /* Fill columns first */
grid-auto-flow: dense;   /* Fill gaps */</pre>
      </div>

      <h3>Common Grid Patterns</h3>
      <div class="code-block">
        <pre>/* Responsive card grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* Holy Grail Layout */
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* 12-column grid */
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}
.col-6 { grid-column: span 6; }
.col-4 { grid-column: span 4; }</pre>
      </div>
    `,
    questions: [
      {
        id: "17-1",
        type: "mcq",
        question: "What does minmax(200px, 1fr) do?",
        options: ["Creates a 200px column", "Creates a column minimum 200px that can grow", "Creates a column between 200px and 1fr", "Sets margin between elements"],
        correctAnswer: "Creates a column minimum 200px that can grow",
        explanation: "minmax(200px, 1fr) creates a track that's at least 200px but can grow to fill available space (1fr). It's commonly used with auto-fit for responsive grids."
      },
      {
        id: "17-2",
        type: "mcq",
        question: "What's the difference between auto-fill and auto-fit?",
        options: ["They're the same", "auto-fill creates empty tracks, auto-fit collapses them", "auto-fit creates empty tracks, auto-fill collapses them", "One is for rows, one for columns"],
        correctAnswer: "auto-fill creates empty tracks, auto-fit collapses them",
        explanation: "auto-fill keeps creating tracks even if empty. auto-fit collapses empty tracks, allowing items to stretch and fill the space. Use auto-fit when you want items to grow."
      },
      {
        id: "17-3",
        type: "mcq",
        question: "What does grid-area: 1 / 2 / 3 / 4 mean?",
        options: ["4 equal columns", "Position from row 1, column 2, to row 3, column 4", "4 grid items", "Margin shorthand"],
        correctAnswer: "Position from row 1, column 2, to row 3, column 4",
        explanation: "grid-area shorthand is: row-start / column-start / row-end / column-end. So 1/2/3/4 means the item starts at row 1, column 2, and spans to row 3, column 4."
      },
      {
        id: "17-4",
        type: "descriptive",
        question: "When would you choose CSS Grid over Flexbox?",
        keywords: ["grid", "flexbox", "two-dimensional", "one-dimensional", "layout", "rows", "columns", "complex"],
        explanation: "Use Grid for two-dimensional layouts where you need control over both rows and columns simultaneously (page layouts, dashboards, card grids). Use Flexbox for one-dimensional layouts (navigation, card rows) or when content size should determine layout."
      }
    ]
  },
  {
    id: 18,
    title: "Responsive Design & Media Queries",
    description: "Build websites that work beautifully on all screen sizes",
    duration: "45 min",
    difficulty: "Intermediate",
    month: 1,
    week: 4,
    category: "CSS",
    content: `
      <h2>Responsive Web Design</h2>
      <p>Responsive design ensures your website looks great on all devices, from phones to large monitors.</p>

      <h3>The Viewport Meta Tag</h3>
      <div class="code-block">
        <pre>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</pre>
      </div>
      <p>Essential! Without it, mobile browsers render at desktop width and zoom out.</p>

      <h3>Media Queries</h3>
      <div class="code-block">
        <pre>/* Mobile-first approach (recommended) */
/* Base styles for mobile */
.container {
  width: 100%;
  padding: 10px;
}

/* Tablet (768px and up) */
@media (min-width: 768px) {
  .container {
    width: 750px;
    padding: 20px;
  }
}

/* Desktop (1024px and up) */
@media (min-width: 1024px) {
  .container {
    width: 960px;
  }
}

/* Large desktop (1200px and up) */
@media (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}</pre>
      </div>

      <h3>Common Breakpoints</h3>
      <ul>
        <li><strong>320px</strong> - Small phones</li>
        <li><strong>480px</strong> - Large phones</li>
        <li><strong>768px</strong> - Tablets</li>
        <li><strong>1024px</strong> - Laptops/small desktops</li>
        <li><strong>1200px</strong> - Desktops</li>
        <li><strong>1440px</strong> - Large desktops</li>
      </ul>

      <h3>Media Query Features</h3>
      <div class="code-block">
        <pre>/* Width-based */
@media (min-width: 768px) { }
@media (max-width: 767px) { }
@media (min-width: 768px) and (max-width: 1023px) { }

/* Orientation */
@media (orientation: portrait) { }
@media (orientation: landscape) { }

/* Hover capability */
@media (hover: hover) { }  /* Device has hover */
@media (hover: none) { }   /* Touch device */

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}

/* Dark mode preference */
@media (prefers-color-scheme: dark) {
  body { background: #1a1a1a; color: white; }
}

/* Print styles */
@media print {
  .no-print { display: none; }
}</pre>
      </div>

      <h3>Responsive Units</h3>
      <div class="code-block">
        <pre>/* Percentage */
width: 50%;        /* Half of parent */

/* Viewport units */
width: 100vw;      /* Full viewport width */
height: 100vh;     /* Full viewport height */
font-size: 5vmin;  /* 5% of smaller dimension */

/* Relative units */
font-size: 1rem;   /* Relative to root (16px default) */
padding: 2em;      /* Relative to element's font-size */

/* Fluid typography with clamp() */
font-size: clamp(1rem, 2.5vw, 2rem);
/* Minimum, preferred (responsive), maximum */

/* Container-relative units (newer) */
width: 50cqi;      /* Container inline size */</pre>
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
  width: 100%;
  aspect-ratio: 16 / 9;
}
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Picture element for art direction */
&lt;picture&gt;
  &lt;source media="(min-width: 1024px)" srcset="large.jpg"&gt;
  &lt;source media="(min-width: 768px)" srcset="medium.jpg"&gt;
  &lt;img src="small.jpg" alt="Description"&gt;
&lt;/picture&gt;</pre>
      </div>

      <h3>Mobile-First Pattern</h3>
      <div class="code-block">
        <pre>/* Base: Mobile styles */
.nav {
  display: flex;
  flex-direction: column;
}
.nav-toggle { display: block; }
.nav-menu { display: none; }
.nav-menu.active { display: flex; }

/* Tablet and up */
@media (min-width: 768px) {
  .nav {
    flex-direction: row;
    justify-content: space-between;
  }
  .nav-toggle { display: none; }
  .nav-menu {
    display: flex;
    gap: 20px;
  }
}</pre>
      </div>

      <h3>Responsive Grid Pattern</h3>
      <div class="code-block">
        <pre>/* Auto-responsive with Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* Manual breakpoints if needed */
.grid-manual {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .grid-manual {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-manual {
    grid-template-columns: repeat(3, 1fr);
  }
}</pre>
      </div>
    `,
    questions: [
      {
        id: "18-1",
        type: "mcq",
        question: "What is mobile-first design?",
        options: ["Designing only for mobile", "Writing base styles for mobile, adding styles for larger screens", "Mobile loads first", "Using only mobile CSS properties"],
        correctAnswer: "Writing base styles for mobile, adding styles for larger screens",
        explanation: "Mobile-first means writing default CSS for mobile, then using min-width media queries to add styles for larger screens. This is more performant because mobile devices download less CSS."
      },
      {
        id: "18-2",
        type: "mcq",
        question: "What does the viewport meta tag do?",
        options: ["Creates the header", "Tells mobile browsers to use device width for rendering", "Makes the page faster", "Adds navigation"],
        correctAnswer: "Tells mobile browsers to use device width for rendering",
        explanation: "The viewport meta tag tells mobile browsers to use the device's actual width instead of a virtual desktop width. Without it, mobile sites appear zoomed out."
      },
      {
        id: "18-3",
        type: "mcq",
        question: "What does clamp(1rem, 2.5vw, 2rem) do for font-size?",
        options: ["Sets a fixed size", "Creates fluid sizing between minimum 1rem and maximum 2rem", "Only works in media queries", "Sets three different sizes"],
        correctAnswer: "Creates fluid sizing between minimum 1rem and maximum 2rem",
        explanation: "clamp(min, preferred, max) creates fluid typography. The font scales with viewport width (2.5vw) but never goes below 1rem or above 2rem. It provides smooth scaling with built-in limits."
      },
      {
        id: "18-4",
        type: "descriptive",
        question: "Explain the difference between min-width and max-width media queries.",
        keywords: ["min-width", "max-width", "mobile-first", "desktop-first", "breakpoint", "up", "down"],
        explanation: "min-width applies styles when viewport is AT LEAST that width (and up) - used in mobile-first. max-width applies when viewport is AT MOST that width (and down) - used in desktop-first. Mobile-first with min-width is recommended for better performance."
      }
    ]
  },
  {
    id: 19,
    title: "CSS Variables & Custom Properties",
    description: "Use CSS custom properties for maintainable, themeable stylesheets",
    duration: "40 min",
    difficulty: "Intermediate",
    month: 1,
    week: 4,
    category: "CSS",
    content: `
      <h2>CSS Custom Properties (Variables)</h2>
      <p>CSS variables let you store values and reuse them throughout your stylesheet, making maintenance and theming easier.</p>

      <h3>Defining Variables</h3>
      <div class="code-block">
        <pre>/* Define in :root for global access */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
  --text-color: #1f2937;
  --background-color: #ffffff;
  --font-size-base: 16px;
  --spacing-unit: 8px;
  --border-radius: 8px;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --transition: 200ms ease;
}

/* Use with var() */
.button {
  background: var(--primary-color);
  color: var(--background-color);
  font-size: var(--font-size-base);
  padding: calc(var(--spacing-unit) * 2);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  transition: var(--transition);
}</pre>
      </div>

      <h3>Fallback Values</h3>
      <div class="code-block">
        <pre>/* Fallback if variable doesn't exist */
.element {
  color: var(--text-color, #333);
  background: var(--bg-color, white);
  padding: var(--spacing, 16px);
}

/* Nested fallbacks */
color: var(--theme-color, var(--primary-color, blue));</pre>
      </div>

      <h3>Scoped Variables</h3>
      <div class="code-block">
        <pre>/* Variables can be scoped to elements */
.card {
  --card-padding: 20px;
  --card-bg: #f5f5f5;

  padding: var(--card-padding);
  background: var(--card-bg);
}

.card.featured {
  --card-bg: #e8f4fd;  /* Override for this variant */
}

/* Component-level variables */
.button {
  --btn-bg: var(--primary-color);
  --btn-color: white;
  --btn-padding: 10px 20px;

  background: var(--btn-bg);
  color: var(--btn-color);
  padding: var(--btn-padding);
}

.button.secondary {
  --btn-bg: var(--secondary-color);
}</pre>
      </div>

      <h3>Dark Mode with Variables</h3>
      <div class="code-block">
        <pre>/* Light mode (default) */
:root {
  --bg-color: #ffffff;
  --text-color: #1f2937;
  --card-bg: #f3f4f6;
  --border-color: #e5e7eb;
}

/* Dark mode with attribute */
[data-theme="dark"] {
  --bg-color: #111827;
  --text-color: #f9fafb;
  --card-bg: #1f2937;
  --border-color: #374151;
}

/* Or use system preference */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #111827;
    --text-color: #f9fafb;
    --card-bg: #1f2937;
    --border-color: #374151;
  }
}

/* Apply variables */
body {
  background: var(--bg-color);
  color: var(--text-color);
}</pre>
      </div>

      <h3>Calculations with Variables</h3>
      <div class="code-block">
        <pre>:root {
  --spacing: 8px;
  --base-size: 16px;
}

.element {
  /* calc() with variables */
  padding: calc(var(--spacing) * 2);
  margin: calc(var(--spacing) * 3);
  font-size: calc(var(--base-size) * 1.25);
  width: calc(100% - var(--spacing) * 4);
}</pre>
      </div>

      <h3>Variables with JavaScript</h3>
      <div class="code-block">
        <pre>// Get variable value
const root = document.documentElement;
const primaryColor = getComputedStyle(root)
  .getPropertyValue('--primary-color');

// Set variable value
root.style.setProperty('--primary-color', '#ff0000');

// Toggle theme
function toggleTheme() {
  const current = document.body.dataset.theme;
  document.body.dataset.theme = current === 'dark' ? 'light' : 'dark';
}</pre>
      </div>

      <h3>Design Token Pattern</h3>
      <div class="code-block">
        <pre>:root {
  /* Primitive tokens */
  --color-blue-500: #3b82f6;
  --color-blue-600: #2563eb;
  --color-gray-100: #f3f4f6;
  --color-gray-900: #111827;

  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;

  --space-1: 4px;
  --space-2: 8px;
  --space-4: 16px;
  --space-8: 32px;

  /* Semantic tokens */
  --color-primary: var(--color-blue-500);
  --color-primary-hover: var(--color-blue-600);
  --color-background: var(--color-gray-100);
  --color-text: var(--color-gray-900);

  --text-body: var(--font-size-base);
  --text-heading: var(--font-size-lg);

  --padding-button: var(--space-2) var(--space-4);
}</pre>
      </div>
    `,
    questions: [
      {
        id: "19-1",
        type: "mcq",
        question: "Where should you define global CSS variables?",
        options: ["In the body", "In the :root pseudo-class", "In any div", "Only in JavaScript"],
        correctAnswer: "In the :root pseudo-class",
        explanation: ":root represents the html element with highest specificity. Variables defined there are accessible throughout the stylesheet. You can also scope variables to specific elements."
      },
      {
        id: "19-2",
        type: "mcq",
        question: "What does var(--color, blue) do?",
        options: ["Sets --color to blue", "Uses --color if defined, otherwise uses blue", "Creates two variables", "Throws an error"],
        correctAnswer: "Uses --color if defined, otherwise uses blue",
        explanation: "The second argument to var() is a fallback value used when the variable isn't defined. var(--color, blue) uses --color if it exists, otherwise defaults to blue."
      },
      {
        id: "19-3",
        type: "mcq",
        question: "How can you change a CSS variable with JavaScript?",
        options: ["document.css.set()", "element.style.setProperty('--name', 'value')", "CSS.variable = value", "Variables can't be changed with JS"],
        correctAnswer: "element.style.setProperty('--name', 'value')",
        explanation: "Use element.style.setProperty('--variable-name', 'value') to change CSS variables with JavaScript. This is commonly used for theming and dynamic styling."
      },
      {
        id: "19-4",
        type: "descriptive",
        question: "Explain how CSS variables enable easy dark mode implementation.",
        keywords: ["variable", "dark mode", "theme", ":root", "prefers-color-scheme", "data-theme", "toggle", "color"],
        explanation: "Define color variables in :root for light mode. Override them in [data-theme='dark'] or @media (prefers-color-scheme: dark). All elements using those variables automatically update when the theme changes, without changing any component CSS."
      }
    ]
  },
  {
    id: 20,
    title: "CSS Animations & Transitions",
    description: "Add motion and interactivity with CSS animations and transitions",
    duration: "45 min",
    difficulty: "Intermediate",
    month: 1,
    week: 4,
    category: "CSS",
    content: `
      <h2>CSS Transitions</h2>
      <p>Transitions animate changes between property values smoothly.</p>

      <h3>Basic Transitions</h3>
      <div class="code-block">
        <pre>/* Transition shorthand */
transition: property duration timing-function delay;

.button {
  background: blue;
  transform: scale(1);
  transition: all 0.3s ease;
}

.button:hover {
  background: darkblue;
  transform: scale(1.05);
}

/* Specific properties */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}</pre>
      </div>

      <h3>Transition Properties</h3>
      <div class="code-block">
        <pre>/* Individual properties */
transition-property: transform, opacity;
transition-duration: 0.3s;
transition-timing-function: ease;
transition-delay: 0.1s;

/* Multiple transitions */
transition:
  transform 0.3s ease,
  opacity 0.3s ease 0.1s,
  background-color 0.2s linear;</pre>
      </div>

      <h3>Timing Functions</h3>
      <div class="code-block">
        <pre>/* Built-in timing functions */
transition-timing-function: linear;
transition-timing-function: ease;        /* Default */
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;

/* Custom cubic-bezier */
transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Steps */
transition-timing-function: steps(4, end);</pre>
      </div>

      <h2>CSS Animations</h2>
      <p>Animations provide more control with keyframes for complex, multi-step animations.</p>

      <h3>Keyframe Animations</h3>
      <div class="code-block">
        <pre>/* Define keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Multi-step animation */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Apply animation */
.element {
  animation: fadeIn 0.5s ease forwards;
}

.slide-element {
  animation: slideIn 0.6s ease-out;
}</pre>
      </div>

      <h3>Animation Properties</h3>
      <div class="code-block">
        <pre>/* Animation shorthand */
animation: name duration timing-function delay iteration-count direction fill-mode;

/* Individual properties */
animation-name: fadeIn;
animation-duration: 0.5s;
animation-timing-function: ease;
animation-delay: 0.2s;
animation-iteration-count: 1;       /* or infinite */
animation-direction: normal;        /* reverse, alternate */
animation-fill-mode: forwards;      /* none, backwards, both */
animation-play-state: running;      /* paused */

/* Examples */
.spinner {
  animation: spin 1s linear infinite;
}

.pulse {
  animation: pulse 2s ease-in-out infinite alternate;
}</pre>
      </div>

      <h3>Common Animation Patterns</h3>
      <div class="code-block">
        <pre>/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide up */
@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Spin */
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Pulse */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Shake */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}</pre>
      </div>

      <h3>Transform Properties</h3>
      <div class="code-block">
        <pre>/* Translate (move) */
transform: translateX(50px);
transform: translateY(-20px);
transform: translate(50px, -20px);

/* Scale */
transform: scale(1.5);
transform: scaleX(2);
transform: scaleY(0.5);

/* Rotate */
transform: rotate(45deg);
transform: rotate(-90deg);

/* Skew */
transform: skewX(10deg);
transform: skewY(-5deg);

/* Multiple transforms */
transform: translateY(-10px) scale(1.1) rotate(5deg);

/* Transform origin */
transform-origin: center;
transform-origin: top left;
transform-origin: 50% 100%;</pre>
      </div>

      <h3>Performance Tips</h3>
      <div class="code-block">
        <pre>/* Animate only transform and opacity for best performance */
.good {
  transition: transform 0.3s, opacity 0.3s;
}

/* Avoid animating these (cause repaints) */
.avoid {
  transition: width 0.3s, height 0.3s, margin 0.3s;
}

/* Use will-change for complex animations */
.complex-animation {
  will-change: transform;
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}</pre>
      </div>
    `,
    questions: [
      {
        id: "20-1",
        type: "mcq",
        question: "What is the difference between transition and animation?",
        options: ["They are the same", "Transitions need a trigger, animations can run automatically", "Animations are faster", "Transitions can have keyframes"],
        correctAnswer: "Transitions need a trigger, animations can run automatically",
        explanation: "Transitions require a state change trigger (like :hover) and animate between two states. Animations can run automatically, loop infinitely, and have multiple keyframe steps."
      },
      {
        id: "20-2",
        type: "mcq",
        question: "What does animation-fill-mode: forwards do?",
        options: ["Plays animation forward", "Element keeps final keyframe styles after animation", "Skips to the end", "Repeats the animation"],
        correctAnswer: "Element keeps final keyframe styles after animation",
        explanation: "animation-fill-mode: forwards keeps the element styled with the final keyframe values after the animation ends. Without it, the element snaps back to its original state."
      },
      {
        id: "20-3",
        type: "mcq",
        question: "Which properties are best for smooth animations?",
        options: ["width and height", "margin and padding", "transform and opacity", "color and background"],
        correctAnswer: "transform and opacity",
        explanation: "transform and opacity are GPU-accelerated and don't trigger layout recalculations. Animating width, height, margin, or padding causes costly reflows and can result in janky animations."
      },
      {
        id: "20-4",
        type: "descriptive",
        question: "How do you respect users' reduced motion preferences in CSS?",
        keywords: ["prefers-reduced-motion", "reduce", "media query", "animation", "transition", "accessibility", "disabled"],
        explanation: "Use @media (prefers-reduced-motion: reduce) to detect when users prefer less motion. Inside this query, disable or minimize animations by setting animation-duration and transition-duration to near-zero, ensuring your site is accessible to users with vestibular disorders."
      }
    ]
  }
];

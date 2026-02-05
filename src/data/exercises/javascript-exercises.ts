import { PracticeExercise } from '@/types/exercise';

export const javascriptExercises: PracticeExercise[] = [
  {
    id: 11,
    title: 'Sum Array Elements',
    description: 'Calculate the sum of all numbers in an array.',
    difficulty: 'beginner',
    category: 'JavaScript',
    estimatedTime: '10 min',
    exerciseType: 'code',
    relatedLessons: [13],
    problemStatement: `Write a function called \`sumArray\` that takes an array of numbers and returns their sum.

**Example:**
\`\`\`javascript
sumArray([1, 2, 3, 4, 5]) // returns 15
sumArray([10, -5, 3]) // returns 8
sumArray([]) // returns 0
\`\`\``,
    hints: [
      'You can use a for loop to iterate through the array',
      'Or use the reduce() method for a cleaner solution',
      'Remember to handle empty arrays',
    ],
    language: 'javascript',
    starterCode: `function sumArray(numbers) {
  // Your code here
}`,
    solutionCode: `function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}`,
    testCases: [
      { id: '1', description: 'sumArray([1, 2, 3, 4, 5]) should return 15', input: 'sumArray([1, 2, 3, 4, 5])', expectedOutput: '15' },
      { id: '2', description: 'sumArray([10, -5, 3]) should return 8', input: 'sumArray([10, -5, 3])', expectedOutput: '8' },
      { id: '3', description: 'sumArray([]) should return 0', input: 'sumArray([])', expectedOutput: '0' },
      { id: '4', description: 'sumArray([100]) should return 100', input: 'sumArray([100])', expectedOutput: '100', isHidden: true },
    ],
    tags: ['javascript', 'arrays', 'reduce', 'beginner'],
  },
  {
    id: 12,
    title: 'Find Maximum Value',
    description: 'Find the largest number in an array.',
    difficulty: 'beginner',
    category: 'JavaScript',
    estimatedTime: '10 min',
    exerciseType: 'code',
    relatedLessons: [13],
    problemStatement: `Write a function called \`findMax\` that takes an array of numbers and returns the largest number.

**Example:**
\`\`\`javascript
findMax([1, 5, 3, 9, 2]) // returns 9
findMax([-1, -5, -3]) // returns -1
findMax([42]) // returns 42
\`\`\``,
    hints: [
      'You can use Math.max() with spread operator',
      'Or iterate through and track the maximum',
      'Consider what to return for empty arrays',
    ],
    language: 'javascript',
    starterCode: `function findMax(numbers) {
  // Your code here
}`,
    solutionCode: `function findMax(numbers) {
  if (numbers.length === 0) return undefined;
  return Math.max(...numbers);
}`,
    testCases: [
      { id: '1', description: 'findMax([1, 5, 3, 9, 2]) should return 9', input: 'findMax([1, 5, 3, 9, 2])', expectedOutput: '9' },
      { id: '2', description: 'findMax([-1, -5, -3]) should return -1', input: 'findMax([-1, -5, -3])', expectedOutput: '-1' },
      { id: '3', description: 'findMax([42]) should return 42', input: 'findMax([42])', expectedOutput: '42' },
      { id: '4', description: 'findMax([0, 0, 0]) should return 0', input: 'findMax([0, 0, 0])', expectedOutput: '0', isHidden: true },
    ],
    tags: ['javascript', 'arrays', 'math', 'beginner'],
  },
  {
    id: 13,
    title: 'Reverse a String',
    description: 'Reverse the characters in a string.',
    difficulty: 'beginner',
    category: 'JavaScript',
    estimatedTime: '10 min',
    exerciseType: 'code',
    relatedLessons: [11],
    problemStatement: `Write a function called \`reverseString\` that takes a string and returns it reversed.

**Example:**
\`\`\`javascript
reverseString("hello") // returns "olleh"
reverseString("JavaScript") // returns "tpircSavaJ"
reverseString("") // returns ""
\`\`\``,
    hints: [
      'You can convert a string to an array with split("")',
      'Arrays have a reverse() method',
      'Convert back to string with join("")',
    ],
    language: 'javascript',
    starterCode: `function reverseString(str) {
  // Your code here
}`,
    solutionCode: `function reverseString(str) {
  return str.split('').reverse().join('');
}`,
    testCases: [
      { id: '1', description: 'reverseString("hello") should return "olleh"', input: 'reverseString("hello")', expectedOutput: '"olleh"' },
      { id: '2', description: 'reverseString("JavaScript") should return "tpircSavaJ"', input: 'reverseString("JavaScript")', expectedOutput: '"tpircSavaJ"' },
      { id: '3', description: 'reverseString("") should return ""', input: 'reverseString("")', expectedOutput: '""' },
      { id: '4', description: 'reverseString("a") should return "a"', input: 'reverseString("a")', expectedOutput: '"a"', isHidden: true },
    ],
    tags: ['javascript', 'strings', 'beginner'],
  },
  {
    id: 14,
    title: 'Count Occurrences',
    description: 'Count how many times a value appears in an array.',
    difficulty: 'beginner',
    category: 'JavaScript',
    estimatedTime: '10 min',
    exerciseType: 'code',
    relatedLessons: [13],
    problemStatement: `Write a function called \`countOccurrences\` that takes an array and a value, then returns how many times that value appears.

**Example:**
\`\`\`javascript
countOccurrences([1, 2, 3, 2, 2, 4], 2) // returns 3
countOccurrences(["a", "b", "a"], "a") // returns 2
countOccurrences([1, 2, 3], 5) // returns 0
\`\`\``,
    hints: [
      'Use filter() to get matching elements, then check length',
      'Or use reduce() to count matches',
      'Make sure to handle cases where value isn\'t found',
    ],
    language: 'javascript',
    starterCode: `function countOccurrences(arr, value) {
  // Your code here
}`,
    solutionCode: `function countOccurrences(arr, value) {
  return arr.filter(item => item === value).length;
}`,
    testCases: [
      { id: '1', description: 'countOccurrences([1, 2, 3, 2, 2, 4], 2) should return 3', input: 'countOccurrences([1, 2, 3, 2, 2, 4], 2)', expectedOutput: '3' },
      { id: '2', description: 'countOccurrences(["a", "b", "a"], "a") should return 2', input: 'countOccurrences(["a", "b", "a"], "a")', expectedOutput: '2' },
      { id: '3', description: 'countOccurrences([1, 2, 3], 5) should return 0', input: 'countOccurrences([1, 2, 3], 5)', expectedOutput: '0' },
    ],
    tags: ['javascript', 'arrays', 'filter', 'beginner'],
  },
  {
    id: 15,
    title: 'Flatten Nested Array',
    description: 'Flatten a nested array to a single level.',
    difficulty: 'intermediate',
    category: 'JavaScript',
    estimatedTime: '15 min',
    exerciseType: 'code',
    relatedLessons: [13, 16],
    problemStatement: `Write a function called \`flatten\` that takes a nested array and returns a flat array.

**Example:**
\`\`\`javascript
flatten([1, [2, 3], [4, [5, 6]]]) // returns [1, 2, 3, 4, 5, 6]
flatten([[1, 2], [3, 4]]) // returns [1, 2, 3, 4]
flatten([1, 2, 3]) // returns [1, 2, 3]
\`\`\``,
    hints: [
      'You can use Array.flat() with a depth argument',
      'Or use recursion to handle any depth',
      'flat(Infinity) flattens to any depth',
    ],
    language: 'javascript',
    starterCode: `function flatten(arr) {
  // Your code here
}`,
    solutionCode: `function flatten(arr) {
  return arr.flat(Infinity);
}`,
    testCases: [
      { id: '1', description: 'flatten([1, [2, 3], [4, [5, 6]]]) should return [1, 2, 3, 4, 5, 6]', input: 'JSON.stringify(flatten([1, [2, 3], [4, [5, 6]]]))', expectedOutput: '"[1,2,3,4,5,6]"' },
      { id: '2', description: 'flatten([[1, 2], [3, 4]]) should return [1, 2, 3, 4]', input: 'JSON.stringify(flatten([[1, 2], [3, 4]]))', expectedOutput: '"[1,2,3,4]"' },
      { id: '3', description: 'flatten([1, 2, 3]) should return [1, 2, 3]', input: 'JSON.stringify(flatten([1, 2, 3]))', expectedOutput: '"[1,2,3]"' },
    ],
    tags: ['javascript', 'arrays', 'flat', 'intermediate'],
  },
  {
    id: 16,
    title: 'Remove Duplicates',
    description: 'Remove duplicate values from an array.',
    difficulty: 'beginner',
    category: 'JavaScript',
    estimatedTime: '10 min',
    exerciseType: 'code',
    relatedLessons: [13, 16],
    problemStatement: `Write a function called \`removeDuplicates\` that takes an array and returns a new array with duplicates removed.

**Example:**
\`\`\`javascript
removeDuplicates([1, 2, 2, 3, 3, 3, 4]) // returns [1, 2, 3, 4]
removeDuplicates(["a", "b", "a", "c"]) // returns ["a", "b", "c"]
removeDuplicates([1, 1, 1]) // returns [1]
\`\`\``,
    hints: [
      'The Set object only stores unique values',
      'Convert Set back to array with spread operator',
      'Or use filter() with indexOf()',
    ],
    language: 'javascript',
    starterCode: `function removeDuplicates(arr) {
  // Your code here
}`,
    solutionCode: `function removeDuplicates(arr) {
  return [...new Set(arr)];
}`,
    testCases: [
      { id: '1', description: 'removeDuplicates([1, 2, 2, 3, 3, 3, 4]) should return [1, 2, 3, 4]', input: 'JSON.stringify(removeDuplicates([1, 2, 2, 3, 3, 3, 4]))', expectedOutput: '"[1,2,3,4]"' },
      { id: '2', description: 'removeDuplicates(["a", "b", "a", "c"]) should return ["a", "b", "c"]', input: 'JSON.stringify(removeDuplicates(["a", "b", "a", "c"]))', expectedOutput: '"\[\\"a\\",\\"b\\",\\"c\\"\]"' },
      { id: '3', description: 'removeDuplicates([1, 1, 1]) should return [1]', input: 'JSON.stringify(removeDuplicates([1, 1, 1]))', expectedOutput: '"[1]"' },
    ],
    tags: ['javascript', 'arrays', 'set', 'beginner'],
  },
  {
    id: 17,
    title: 'Deep Clone Object',
    description: 'Create a deep copy of an object.',
    difficulty: 'intermediate',
    category: 'JavaScript',
    estimatedTime: '15 min',
    exerciseType: 'code',
    relatedLessons: [13],
    problemStatement: `Write a function called \`deepClone\` that creates a deep copy of an object (including nested objects).

**Example:**
\`\`\`javascript
const obj = { a: 1, b: { c: 2 } };
const cloned = deepClone(obj);
cloned.b.c = 3;
console.log(obj.b.c); // Still 2 (original unchanged)
\`\`\``,
    hints: [
      'JSON.parse(JSON.stringify()) works for simple objects',
      'For more complex objects, use recursion',
      'Be careful with arrays inside objects',
    ],
    language: 'javascript',
    starterCode: `function deepClone(obj) {
  // Your code here
}`,
    solutionCode: `function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}`,
    testCases: [
      { id: '1', description: 'Should clone simple object', input: 'JSON.stringify(deepClone({ a: 1, b: 2 }))', expectedOutput: '"{\\\"a\\\":1,\\\"b\\\":2}"' },
      { id: '2', description: 'Should deep clone nested object', input: 'const o = { a: { b: 1 } }; const c = deepClone(o); c.a.b = 2; o.a.b', expectedOutput: '1' },
      { id: '3', description: 'Should clone arrays', input: 'JSON.stringify(deepClone({ arr: [1, 2, 3] }))', expectedOutput: '"{\\\"arr\\\":[1,2,3]}"' },
    ],
    tags: ['javascript', 'objects', 'cloning', 'intermediate'],
  },
  {
    id: 18,
    title: 'Debounce Function',
    description: 'Implement a debounce utility function.',
    difficulty: 'intermediate',
    category: 'JavaScript',
    estimatedTime: '20 min',
    exerciseType: 'code',
    relatedLessons: [12, 15],
    problemStatement: `Write a \`debounce\` function that delays invoking a function until after a specified wait time has elapsed since the last call.

**Example:**
\`\`\`javascript
const debouncedFn = debounce(() => console.log('Called!'), 300);
debouncedFn(); // Scheduled
debouncedFn(); // Previous cancelled, new scheduled
// "Called!" logged once after 300ms
\`\`\``,
    hints: [
      'Use setTimeout to delay the function call',
      'Store the timeout ID to clear it on subsequent calls',
      'clearTimeout cancels a pending timeout',
    ],
    language: 'javascript',
    starterCode: `function debounce(fn, delay) {
  // Your code here
}`,
    solutionCode: `function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}`,
    testCases: [
      { id: '1', description: 'Should return a function', input: 'typeof debounce(() => {}, 100)', expectedOutput: '"function"' },
      { id: '2', description: 'Debounced function should be callable', input: 'let count = 0; const fn = debounce(() => count++, 10); fn(); typeof fn', expectedOutput: '"function"' },
    ],
    tags: ['javascript', 'functions', 'debounce', 'intermediate'],
  },
  {
    id: 19,
    title: 'Promise.all Implementation',
    description: 'Implement a simplified version of Promise.all.',
    difficulty: 'advanced',
    category: 'JavaScript',
    estimatedTime: '25 min',
    exerciseType: 'code',
    relatedLessons: [15],
    problemStatement: `Write a function called \`promiseAll\` that behaves like Promise.all:
- Takes an array of promises
- Returns a promise that resolves with an array of results
- Rejects if any promise rejects

**Example:**
\`\`\`javascript
promiseAll([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(console.log); // [1, 2, 3]
\`\`\``,
    hints: [
      'Return a new Promise',
      'Track completed promises and their results',
      'Use the index to maintain order',
    ],
    language: 'javascript',
    starterCode: `function promiseAll(promises) {
  // Your code here
}`,
    solutionCode: `function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}`,
    testCases: [
      { id: '1', description: 'Should resolve with array of results', input: 'promiseAll([Promise.resolve(1), Promise.resolve(2)]).then(r => JSON.stringify(r))', expectedOutput: '"[1,2]"' },
      { id: '2', description: 'Should handle empty array', input: 'promiseAll([]).then(r => JSON.stringify(r))', expectedOutput: '"[]"' },
    ],
    tags: ['javascript', 'promises', 'async', 'advanced'],
  },
  {
    id: 20,
    title: 'Memoize Function',
    description: 'Implement a memoization function for caching results.',
    difficulty: 'intermediate',
    category: 'JavaScript',
    estimatedTime: '20 min',
    exerciseType: 'code',
    relatedLessons: [12],
    problemStatement: `Write a \`memoize\` function that caches the results of function calls.

**Example:**
\`\`\`javascript
const slowFn = (n) => { /* expensive computation */ return n * 2; };
const memoized = memoize(slowFn);

memoized(5); // Computes and caches: 10
memoized(5); // Returns cached: 10 (no recomputation)
\`\`\``,
    hints: [
      'Use a Map or object to store cached results',
      'Use the arguments as the cache key',
      'Return cached value if it exists',
    ],
    language: 'javascript',
    starterCode: `function memoize(fn) {
  // Your code here
}`,
    solutionCode: `function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}`,
    testCases: [
      { id: '1', description: 'Should return correct result', input: 'const m = memoize(x => x * 2); m(5)', expectedOutput: '10' },
      { id: '2', description: 'Should return same result for same input', input: 'const m = memoize(x => x * 2); m(3) === m(3)', expectedOutput: 'true' },
      { id: '3', description: 'Should work with multiple args', input: 'const m = memoize((a, b) => a + b); m(2, 3)', expectedOutput: '5' },
    ],
    tags: ['javascript', 'functions', 'memoization', 'intermediate'],
  },
  {
    id: 21,
    title: 'Group By Property',
    description: 'Group array items by a property value.',
    difficulty: 'intermediate',
    category: 'JavaScript',
    estimatedTime: '15 min',
    exerciseType: 'code',
    relatedLessons: [13],
    problemStatement: `Write a function called \`groupBy\` that groups array items by a specified property.

**Example:**
\`\`\`javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];

groupBy(people, 'age');
// {
//   25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//   30: [{ name: 'Bob', age: 30 }]
// }
\`\`\``,
    hints: [
      'Use reduce() to build the groups object',
      'Check if the group exists before pushing',
      'Access the property value with bracket notation',
    ],
    language: 'javascript',
    starterCode: `function groupBy(arr, property) {
  // Your code here
}`,
    solutionCode: `function groupBy(arr, property) {
  return arr.reduce((groups, item) => {
    const key = item[property];
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
}`,
    testCases: [
      { id: '1', description: 'Should group by property', input: 'Object.keys(groupBy([{a: 1}, {a: 2}, {a: 1}], "a")).length', expectedOutput: '2' },
      { id: '2', description: 'Should have correct items in groups', input: 'groupBy([{a: 1}, {a: 1}], "a")["1"].length', expectedOutput: '2' },
    ],
    tags: ['javascript', 'arrays', 'objects', 'reduce', 'intermediate'],
  },
  {
    id: 22,
    title: 'Palindrome Checker',
    description: 'Check if a string is a palindrome.',
    difficulty: 'beginner',
    category: 'JavaScript',
    estimatedTime: '10 min',
    exerciseType: 'code',
    relatedLessons: [11],
    problemStatement: `Write a function called \`isPalindrome\` that checks if a string reads the same forwards and backwards (ignoring case and non-alphanumeric characters).

**Example:**
\`\`\`javascript
isPalindrome("racecar") // true
isPalindrome("A man, a plan, a canal: Panama") // true
isPalindrome("hello") // false
\`\`\``,
    hints: [
      'Convert to lowercase first',
      'Remove non-alphanumeric characters with regex',
      'Compare with reversed version',
    ],
    language: 'javascript',
    starterCode: `function isPalindrome(str) {
  // Your code here
}`,
    solutionCode: `function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}`,
    testCases: [
      { id: '1', description: 'isPalindrome("racecar") should return true', input: 'isPalindrome("racecar")', expectedOutput: 'true' },
      { id: '2', description: 'isPalindrome("A man, a plan, a canal: Panama") should return true', input: 'isPalindrome("A man, a plan, a canal: Panama")', expectedOutput: 'true' },
      { id: '3', description: 'isPalindrome("hello") should return false', input: 'isPalindrome("hello")', expectedOutput: 'false' },
    ],
    tags: ['javascript', 'strings', 'algorithms', 'beginner'],
  },
  {
    id: 23,
    title: 'FizzBuzz',
    description: 'The classic FizzBuzz programming challenge.',
    difficulty: 'beginner',
    category: 'JavaScript',
    estimatedTime: '10 min',
    exerciseType: 'code',
    relatedLessons: [12],
    problemStatement: `Write a function called \`fizzBuzz\` that takes a number n and returns an array from 1 to n where:
- Numbers divisible by 3 are replaced with "Fizz"
- Numbers divisible by 5 are replaced with "Buzz"
- Numbers divisible by both 3 and 5 are replaced with "FizzBuzz"

**Example:**
\`\`\`javascript
fizzBuzz(5) // [1, 2, "Fizz", 4, "Buzz"]
fizzBuzz(15) // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
\`\`\``,
    hints: [
      'Check divisible by 15 (both 3 and 5) first',
      'Use modulo operator (%) to check divisibility',
      'Loop from 1 to n',
    ],
    language: 'javascript',
    starterCode: `function fizzBuzz(n) {
  // Your code here
}`,
    solutionCode: `function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i);
  }
  return result;
}`,
    testCases: [
      { id: '1', description: 'fizzBuzz(5) should return correct array', input: 'JSON.stringify(fizzBuzz(5))', expectedOutput: '"[1,2,\\"Fizz\\",4,\\"Buzz\\"]"' },
      { id: '2', description: 'fizzBuzz(15)[14] should be "FizzBuzz"', input: 'fizzBuzz(15)[14]', expectedOutput: '"FizzBuzz"' },
      { id: '3', description: 'fizzBuzz(3)[2] should be "Fizz"', input: 'fizzBuzz(3)[2]', expectedOutput: '"Fizz"' },
    ],
    tags: ['javascript', 'loops', 'conditionals', 'beginner'],
  },
  {
    id: 24,
    title: 'Chunk Array',
    description: 'Split an array into chunks of a specified size.',
    difficulty: 'intermediate',
    category: 'JavaScript',
    estimatedTime: '15 min',
    exerciseType: 'code',
    relatedLessons: [13],
    problemStatement: `Write a function called \`chunk\` that splits an array into smaller arrays of a specified size.

**Example:**
\`\`\`javascript
chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6], 3) // [[1, 2, 3], [4, 5, 6]]
chunk([1, 2, 3], 1) // [[1], [2], [3]]
\`\`\``,
    hints: [
      'Use slice() to extract portions of the array',
      'Increment the index by the chunk size each iteration',
      'Continue until you reach the end of the array',
    ],
    language: 'javascript',
    starterCode: `function chunk(arr, size) {
  // Your code here
}`,
    solutionCode: `function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}`,
    testCases: [
      { id: '1', description: 'chunk([1, 2, 3, 4, 5], 2) should return [[1, 2], [3, 4], [5]]', input: 'JSON.stringify(chunk([1, 2, 3, 4, 5], 2))', expectedOutput: '"[[1,2],[3,4],[5]]"' },
      { id: '2', description: 'chunk([1, 2, 3, 4, 5, 6], 3) should return [[1, 2, 3], [4, 5, 6]]', input: 'JSON.stringify(chunk([1, 2, 3, 4, 5, 6], 3))', expectedOutput: '"[[1,2,3],[4,5,6]]"' },
      { id: '3', description: 'chunk([1, 2, 3], 1) should return [[1], [2], [3]]', input: 'JSON.stringify(chunk([1, 2, 3], 1))', expectedOutput: '"[[1],[2],[3]]"' },
    ],
    tags: ['javascript', 'arrays', 'algorithms', 'intermediate'],
  },
  {
    id: 25,
    title: 'Curry Function',
    description: 'Implement function currying.',
    difficulty: 'advanced',
    category: 'JavaScript',
    estimatedTime: '25 min',
    exerciseType: 'code',
    relatedLessons: [12],
    problemStatement: `Write a \`curry\` function that transforms a function to allow partial application.

**Example:**
\`\`\`javascript
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

curriedAdd(1)(2)(3) // 6
curriedAdd(1, 2)(3) // 6
curriedAdd(1)(2, 3) // 6
\`\`\``,
    hints: [
      'Check if enough arguments have been provided',
      'If not, return a function that collects more arguments',
      'Use Function.length to get the number of expected arguments',
    ],
    language: 'javascript',
    starterCode: `function curry(fn) {
  // Your code here
}`,
    solutionCode: `function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}`,
    testCases: [
      { id: '1', description: 'Should work with all args at once', input: 'curry((a, b, c) => a + b + c)(1, 2, 3)', expectedOutput: '6' },
      { id: '2', description: 'Should work with curried calls', input: 'curry((a, b, c) => a + b + c)(1)(2)(3)', expectedOutput: '6' },
      { id: '3', description: 'Should work with mixed calls', input: 'curry((a, b, c) => a + b + c)(1, 2)(3)', expectedOutput: '6' },
    ],
    tags: ['javascript', 'functions', 'currying', 'advanced'],
  },
];

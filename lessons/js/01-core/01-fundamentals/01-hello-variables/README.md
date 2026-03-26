# Lesson 1: Hello World & Variables

## Goal
Master the basic syntax for outputting data and understand how to manage memory using modern variable declarations (`let` and `const`).

## The "Why?"
In programming, we need a way to store information (data) so we can reuse it, change it, or move it around. Without variables, a program would be a static list of commands that couldn't adapt to user input or changing states.

## In-Depth Explanations

### 1. The Script Tag: Internal vs External
- **Internal**: Fast for testing, but mixes logic with structure. Harder to maintain as the project grows.
- **External**: The professional standard. It allows the browser to cache the JS file separately, improving performance, and keeps your codebase modular.

### 2. Variable Declarations: Memory Management
- **`const`**: Short for "constant". It tells the JS Engine to lock this memory location. This prevents accidental bugs where a value (like a configuration setting or a user's ID) is overwritten.
- **`let`**: Used when you know the value will change (e.g., a counter in a loop or a user's current score).
- **`var`**: The "Old Way". It has functional scope instead of block scope, which leads to confusing bugs. **Rule of thumb: Never use `var` in modern JS.**

## Diverse & Key Examples

### Example 1: Constants for Configuration
```javascript
const API_URL = "https://api.example.com/v1";
const MAX_RETRY_ATTEMPTS = 3;

// API_URL = "something else"; // Error! Safety first.
```

### Example 2: Let for Changing State
```javascript
let currentScore = 0;
currentScore += 10; // The player scored!
console.log(`Current Score: ${currentScore}`);
```

### Example 3: Descriptive Naming (camelCase)
```javascript
// Bad naming
let x = "John";
let d = "2024-03-26";

// Good naming
let userName = "John";
let registrationDate = "2024-03-26";
```

## External Resources
- [Hello, world! - javascript.info](https://javascript.info/hello-world)
- [Variables - javascript.info](https://javascript.info/variables)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.

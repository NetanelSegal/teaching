# Lesson 1: Variables (Memory Management)

## Goal
Master the use of `let` and `const` for managing data and understand how to name variables professionally using `camelCase`.

## The "Why?"
Variables are the foundation of any program. They allow us to "label" a value in memory so we can refer to it later, change it, or use it in calculations. Without variables, a program would be completely static.

## In-Depth Explanations

### 1. The 3 Ways to Declare Variables
- **`const`**: The default choice for modern JS. Use it for values that will never be reassigned. It makes your code safer and easier to reason about.
- **`let`**: Use it only when you know the value will change (e.g., a counter or a user's current score).
- **`var`**: The old way. It has several pitfalls (like "hoisting" and function-scoping) that lead to bugs. **Do not use `var` in modern code.**

### 2. Variable Naming Rules
- Names can contain letters, digits, `$`, and `_`.
- They cannot start with a digit.
- They are case-sensitive (`myVariable` is different from `myvariable`).
- **`camelCase`**: The standard in JS. Always use lowercase for the first word and capitalize subsequent words (e.g., `userName`, `registrationDate`).

### 3. Constants: Normal vs Hard-coded
- **Hard-coded constants**: Use uppercase with underscores for values known before execution (e.g., `const COLOR_RED = "#F00";`).
- **Calculated constants**: Use camelCase for values calculated during execution (e.g., `const pageHeight = getBodyHeight();`).

## Diverse & Key Examples

### Example 1: Use `const` by default
```javascript
const birthDate = "1990-01-01";
let currentAge = 34;

// Next year:
currentAge = 35; // This is fine.
// birthDate = "1991-01-01"; // Error! Good.
```

### Example 2: Descriptive Naming
```javascript
// BAD: what are these?
let a = 100;
let n = "John";

// GOOD: descriptive names tell the story
let maxScore = 100;
let currentUser = "John";
```

### Example 3: Reusing Labels
```javascript
let message;
message = "Hello";
message = "World"; // The "Hello" is gone from memory now.
```

## External Resources
- [Variables - javascript.info](https://javascript.info/variables)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.

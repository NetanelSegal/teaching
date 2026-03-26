# Lesson 6: Functions (Declarations, Expressions, Arrows)

## Goal
Master the building blocks of JavaScript: Functions. Learn how to encapsulate code, reuse it, and understand the different ways to define them.

## The "Why?"
Functions are the "verbs" of your program. They allow you to group code into a single, reusable action. Instead of writing the logic for "calculate total tax" in ten different places, you write it once in a function and call it ten times.

## In-Depth Explanations

### 1. Function Declaration
The most basic way. These are **Hoisted**, meaning you can call them even before they are defined in the code.
```javascript
function sayHi() {
  console.log("Hello!");
}
```

### 2. Function Expression
Assigning a function to a variable. These are **NOT** hoisted.
```javascript
let sayHi = function() {
  console.log("Hello!");
};
```

### 3. Arrow Functions
The modern, concise syntax. They are perfect for small, one-line operations.
```javascript
let sum = (a, b) => a + b;
```

### 4. Parameters and Return Values
- **Parameters**: Inputs you give to the function.
- **`return`**: The result the function sends back. If no `return` is specified, the function returns `undefined`.

## Diverse & Key Examples

### Example 1: Function with Default Parameters
```javascript
function greet(user = "Guest") {
  console.log(`Hello, ${user}!`);
}
greet(); // "Hello, Guest!"
greet("Yoav"); // "Hello, Yoav!"
```

### Example 2: The Power of Return
```javascript
function checkAge(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}

if (checkAge(20)) {
  console.log("Access granted");
}
```

### Example 3: Multi-line Arrow Functions
```javascript
let calculateTotal = (price, tax) => {
    let total = price + (price * tax);
    return total;
};
```

## External Resources
- [Functions - javascript.info](https://javascript.info/function-basics)
- [Function expressions - javascript.info](https://javascript.info/function-expressions)
- [Arrow functions, the basics - javascript.info](https://javascript.info/arrow-functions-basics)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.

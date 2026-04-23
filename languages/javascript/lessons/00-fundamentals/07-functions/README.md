# Lesson 7: Functions (The Building Blocks)

## Goal
Master the "verbs" of JavaScript. Learn how to write reusable logic, understand scope, and use modern arrow syntax to write cleaner code.

## The "Why?"
Functions are what make programs useful. They allow us to package logic into a single name. Instead of writing "calculate price with tax" everywhere, you write it once and call it whenever needed. This makes your code DRY (Don't Repeat Yourself).

## In-Depth Explanations

### 1. Variables: Local vs Outer
- **Local variables**: Declared inside a function and only visible there.
- **Outer variables**: A function can access variables outside its curly braces. However, if a function has its own local variable with the same name, it "shadows" the outer one.
```javascript
let userName = 'John';
function showMessage() {
  let userName = "Bob"; // Local variable
  console.log(userName); // "Bob"
}
```

### 2. Parameters & Default Values
If a parameter is not provided, its value becomes `undefined`. Modern JS allows us to set "Default Values":
```javascript
function showMessage(from, text = "no text given") {
  console.log(from + ": " + text);
}
```

### 3. Function Expressions: Functions are Values
In JS, a function is a **value**, just like a string or a number. You can assign it to a variable, copy it, or pass it to another function (a "Callback").
```javascript
let sayHi = function() {
  console.log("Hello");
};
let func = sayHi;
func(); // Still works!
```

### 4. Arrow Functions (ES6)
The concise way. Arrow functions don't have their own `this` (important later) and are perfect for one-liners.
```javascript
let sum = (a, b) => a + b;
```

## Diverse & Key Examples

### Example 1: Callback Functions
```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() { console.log("You agreed."); }
function showCancel() { console.log("You canceled."); }

// We pass showOk and showCancel as arguments to 'ask'
ask("Do you agree?", showOk, showCancel);
```

### Example 2: Declaration vs Expression
- **Declaration**: Can be called before it is defined (Hoisted). Use this for main logic.
- **Expression**: Created when execution reaches it. Use this for specific conditional logic.

### Example 3: Returning early
```javascript
function checkAge(age) {
  if (age < 18) return; // Exit immediately if too young
  console.log("Welcome!");
}
```

## External Resources
- [Functions - javascript.info](https://javascript.info/function-basics)
- [Function expressions - javascript.info](https://javascript.info/function-expressions)
- [Arrow functions - javascript.info](https://javascript.info/arrow-functions-basics)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.

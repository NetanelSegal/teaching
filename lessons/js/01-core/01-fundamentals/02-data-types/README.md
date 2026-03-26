# Lesson 2: Data Types (In-Depth)

## Goal
Understand the 8 basic data types in JavaScript, how to identify them, and how to avoid common pitfalls with special values.

## The "Why?"
Computers need to know what *kind* of data they are dealing with to perform operations correctly. You can't multiply a "Word" by a "Number", and trying to do so reveals how JS handles errors.

## In-Depth Explanations

### 1. Dynamic Typing
JavaScript is "dynamically typed". This means a variable isn't locked into one type forever.
```javascript
let message = "hello"; // starts as string
message = 123456;      // becomes a number
```

### 2. The Number Type & Special Values
Numbers in JS handle both integers and decimals. But they also include three special symbolic values:
- **`Infinity`**: Result of division by zero.
- **`-Infinity`**: Negative division by zero.
- **`NaN`**: "Not a Number". It represents a computational error.

### 3. Strings & Template Literals
- **Single/Double Quotes**: Functional equivalents.
- **Backticks (`` ` ``)**: The modern way. They allow **Interpolation** (`${...}`) and multi-line strings.

## Diverse & Key Examples

### Example 1: Where does NaN come from?
```javascript
console.log("apple" / 2);    // NaN (Math on non-numeric string)
console.log(undefined + 10); // NaN (Undefined is not a number)
console.log(NaN * 5);        // NaN (NaN is sticky; it infects other math)
```

### Example 2: null vs undefined
- `undefined`: The value isn't there because it was never set.
- `null`: The value is "nothing" because we explicitly wanted it to be empty.
```javascript
let age; 
console.log(age); // undefined

let salary = null; // Explicitly no salary info
```

### Example 3: Template Literals in Action
```javascript
const item = "Laptop";
const price = 999;
console.log(`The ${item} costs $${price}.
Thank you for your purchase!`);
```

## External Resources
- [Data types - javascript.info](https://javascript.info/types)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.

# Lesson 3: Basic Operators & Type Conversion

## Goal
Learn how to perform mathematical operations and understand how JavaScript automatically (or manually) converts data between types.

## The "Why?"
In the real world, data often comes to us in the "wrong" format. For example, a user might type a number into an input field, but the browser treats it as a **String**. To do math with it, we must know how to convert it safely.

## In-Depth Explanations

### 1. Type Conversion
- **String Conversion**: `String(value)` or concatenation with `""`.
- **Numeric Conversion**: `Number(value)` or the unary plus `+`.
- **Boolean Conversion**: `Boolean(value)`. 
  - **Falsy values**: `0`, `""`, `null`, `undefined`, `NaN`.
  - **Truthy values**: Everything else.

### 2. Basic Operators
JS supports standard math: `+`, `-`, `*`, `/`, `%` (remainder), and `**` (exponentiation).

### 3. The "Plus" Quirk
The `+` operator is overloaded. If one operand is a **String**, the other is converted to a string and they are concatenated.
```javascript
console.log(2 + 2 + '1'); // "41" (4 + '1')
console.log('1' + 2 + 2); // "122" ('12' + 2)
```

## Diverse & Key Examples

### Example 1: Unary Plus for Quick Conversion
```javascript
let apples = "2";
let oranges = "3";
console.log(+apples + +oranges); // 5 (The + converts strings to numbers)
```

### Example 2: The Remainder Operator (%)
```javascript
console.log(5 % 2); // 1 (Used often to check if a number is even or odd)
let isEven = (num % 2 === 0);
```

### Example 3: Increment/Decrement
```javascript
let counter = 2;
counter++; // 3
--counter; // 2
```

## External Resources
- [Type Conversions - javascript.info](https://javascript.info/type-conversions)
- [Basic operators, maths - javascript.info](https://javascript.info/operators)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.

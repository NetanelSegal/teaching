# Lesson 4: Comparisons, Logic & Branching

## Goal
Master the decision-making engine of JavaScript. Learn how to compare values, chain logical conditions, and control the execution flow of your code.

## The "Why?"
Software is essentially a series of "If this, then that" statements. To build anything meaningful, from a login form to a game engine, you must master how to branch your logic based on dynamic data.

## In-Depth Explanations

### 1. Comparisons: The Truth Seekers
- **Strict Equality (`===`)**: The gold standard. It checks both **Value and Type**. Never use `==` unless you have a very specific reason.
- **String Comparison**: JS compares strings character by character in "lexicographical" order (dictionary order, but capital letters are "smaller" than lowercase).
- **The Null/Undefined Quirk**:
    - `null == undefined` is `true`.
    - `null === undefined` is `false`.
    - `null > 0` is `false`, but `null >= 0` is `true` (JS converts `null` to `0` for relational comparisons, but not for equality). **Avoid comparing null/undefined with numbers!**

### 2. Logical Operators & Short-circuiting
- **OR (`||`)**: Returns the **first truthy** value. If all are falsy, returns the last one.
- **AND (`&&`)**: Returns the **first falsy** value. If all are truthy, returns the last one.
- **NOT (`!`)**: Converts to boolean and inverts it. `!!value` is a common way to convert any value to a boolean.

### 3. Conditional Branching
- **`if (condition)`**: The condition is always converted to a boolean.
- **Ternary (`?`)**: Use it for simple assignments, not for complex logic.
- **Nullish Coalescing (`??`)**: Returns the first "defined" value (not `null` or `undefined`). 
  - Difference from `||`: `||` returns the first truthy value (so it would skip `0` or `""`), while `??` only skips `null`/`undefined`.

## Diverse & Key Examples

### Example 1: Lexicographical Comparison
```javascript
console.log( 'Z' > 'A' );    // true
console.log( 'Bee' > 'Be' ); // true
console.log( 'apple' > 'Apple' ); // true (lowercase 'a' is greater than uppercase 'A')
```

### Example 2: Short-circuit Evaluation
```javascript
// We only execute the second part if the first part is true
let userIsAdmin = true;
userIsAdmin && console.log("Welcome, Admin!"); 

// Setting default values (The || way vs the ?? way)
let count = 0;
let result1 = count || 10; // 10 (because 0 is falsy)
let result2 = count ?? 10; // 0 (because 0 is NOT null/undefined)
```

### Example 3: Multiple '?' (Ternary)
```javascript
let age = 15;
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
```

## External Resources
- [Comparisons - javascript.info](https://javascript.info/comparison)
- [Conditional branching: if, '?' - javascript.info](https://javascript.info/ifelse)
- [Logical operators - javascript.info](https://javascript.info/logical-operators)
- [Nullish coalescing operator '??' - javascript.info](https://javascript.info/nullish-coalescing-operator)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.

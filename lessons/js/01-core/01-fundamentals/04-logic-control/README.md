# Lesson 4: Comparisons, Logic & Branching

## Goal
Learn how to control the flow of your program using conditional statements and logical operators.

## The "Why?"
Program logic is about making decisions. Should we show a "Login" button or a "Logout" button? Is the user's password correct? Is the store open? Without branching (`if`), programs would always run the same way.

## In-Depth Explanations

### 1. Comparisons
- **Equality (`==`)**: Compares values after type conversion (Avoid this!).
- **Strict Equality (`===`)**: Compares both value **and type**. This is the professional standard.
- **Greater/Less (`>`, `<`, `>=`, `<=`)**: Standard numeric comparisons.

### 2. Logical Operators
- **OR (`||`)**: Finds the first "truthy" value.
- **AND (`&&`)**: Finds the first "falsy" value.
- **NOT (`!`)**: Inverts the boolean value.

### 3. Conditional Branching
- **`if`**: Executes code if the condition is true.
- **`else`**: Executes if the `if` condition is false.
- **`else if`**: Check multiple conditions.
- **Ternary Operator (`?`)**: A shorter way to write simple `if-else` statements.

### 4. Nullish Coalescing (`??`)
Used to provide a default value for `null` or `undefined`.
```javascript
let user;
console.log(user ?? "Anonymous"); // "Anonymous"
```

## Diverse & Key Examples

### Example 1: The Strict Equality Difference
```javascript
console.log(0 == false); // true (Wait, what? JS converted 0 to false)
console.log(0 === false); // false (Correct! A number is not a boolean)
```

### Example 2: Short-circuiting with OR
```javascript
let userNickname = "";
let defaultName = "Guest";
let displayName = userNickname || defaultName; 
console.log(displayName); // "Guest" (because "" is falsy)
```

### Example 3: Ternary Operator
```javascript
let age = 18;
let accessAllowed = (age >= 18) ? "Welcome!" : "Too young.";
console.log(accessAllowed);
```

## External Resources
- [Comparisons - javascript.info](https://javascript.info/comparison)
- [Conditional branching: if, '?' - javascript.info](https://javascript.info/ifelse)
- [Logical operators - javascript.info](https://javascript.info/logical-operators)
- [Nullish coalescing operator '??' - javascript.info](https://javascript.info/nullish-coalescing-operator)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.

# Lesson 5: Loops & The Switch Statement

## Goal
Learn how to automate repetitive tasks and handle multi-condition branching efficiently using `while`, `for`, and `switch`.

## The "Why?"
Manually repeating code is the enemy of efficient development. Whether you're processing a list of 1,000 users or waiting for a specific event to occur, loops allow you to write the logic once and let the computer handle the repetition.

## In-Depth Explanations

### 1. The 3 Types of Loops
- **`while (condition)`**: Checks the condition **before** each iteration.
- **`do...while (condition)`**: Checks the condition **after** each iteration. This guarantees the code runs **at least once**.
- **`for (init; cond; step)`**: The standard for counting.
```javascript
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
```

### 2. Controlling the Loop
- **`break`**: "I'm done, get me out of here!" Exits the loop entirely.
- **`continue`**: "Skip this one and move to the next!" Skips the rest of the current iteration.
- **Labels**: Used to break out of nested loops.
```javascript
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) break outer; // Exits both loops
  }
}
```

### 3. The `switch` Statement: The "Type Matters" Rule
A `switch` is a cleaner way to handle many `if...else if` branches. 
**CRITICAL**: `switch` uses **Strict Equality (`===`)**. If you switch on a number `3` and have a case `"3"`, it will **not** match.

## Diverse & Key Examples

### Example 1: `do...while` for Input
```javascript
let count = 0;
do {
  console.log(`Current count is ${count}`);
  count++;
} while (count < 0); // Runs once even though condition is false
```

### Example 2: `continue` to skip odds
```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) continue; // Skip if odd
  console.log(i); // 0, 2, 4, 6, 8
}
```

### Example 3: `switch` with grouping and strictness
```javascript
let arg = "2";
switch (arg) {
  case "1":
  case "2": // Grouping: "1" or "2"
    console.log("It's a string '1' or '2'");
    break;
  case 2: // This will NOT run because arg is a string "2"
    console.log("It's a number 2");
    break;
  default:
    console.log("Something else");
}
```

## External Resources
- [Loops: while and for - javascript.info](https://javascript.info/while-for)
- [The "switch" statement - javascript.info](https://javascript.info/switch)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.

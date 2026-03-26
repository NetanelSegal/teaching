# Lesson 5: Loops & The Switch Statement

## Goal
Master repetitive tasks using loops and learn how to handle multiple specific conditions efficiently using `switch`.

## The "Why?"
In development, we often need to repeat an action. For example, printing 100 "Thank You" cards or checking if any item in a list is out of stock. Without loops (`for`, `while`), we would have to write the same line of code over and over again.

## In-Depth Explanations

### 1. The `while` Loop
Repeats as long as a condition is **truthy**. Best used when you don't know exactly how many times you need to repeat.

### 2. The `for` Loop
The most common loop. It includes initialization, condition, and step in one line.
```javascript
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
```

### 3. Breaking and Continuing
- **`break`**: Exits the loop immediately.
- **`continue`**: Skips the current iteration and moves to the next one.

### 4. The `switch` Statement
A cleaner alternative to multiple `if-else if` statements when you are comparing a single value against many possible constants.
**Crucial**: Always use `break` after each case, or the code will "fall through" to the next one!

## Diverse & Key Examples

### Example 1: `for` loop for Iteration
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(`Counting: ${i}`);
}
```

### Example 2: `break` for Search
```javascript
let sum = 0;
while (true) {
  let value = Math.random() * 10;
  if (value > 8) break; // Stop when we find a high number
  sum += value;
}
```

### Example 3: `switch` with grouping
```javascript
let browser = 'Chrome';
switch (browser) {
  case 'Edge':
    console.log("You've got the Edge!");
    break;
  case 'Chrome':
  case 'Firefox': // Both Chrome and Firefox will run this code
    console.log('Okay we support these browsers too');
    break;
  default:
    console.log('We hope that this page looks ok!');
}
```

## External Resources
- [Loops: while and for - javascript.info](https://javascript.info/while-for)
- [The "switch" statement - javascript.info](https://javascript.info/switch)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.

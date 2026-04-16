# Lesson 7: Interaction (alert, prompt, confirm)

## Goal
Learn how to communicate with the user via standard browser interfaces.

## The "Why?"
Modern websites use complex UIs, but for simple tests, debugging, or quick user input, the built-in browser interactions are the fastest and easiest tool. They are "modal," meaning they stop code execution until the user interacts with them.

## In-Depth Explanations

### 1. `alert(message)`
Shows a message and waits for the user to press "OK".
```javascript
alert("Hello, User!");
```

### 2. `prompt(title, [default])`
Shows a message and an input field. Returns the text the user typed, or `null` if they press "Cancel".
**Important**: The result is always a **String**, even if they type a number!
```javascript
let age = prompt("How old are you?", 100);
console.log(age); // "34" (string)
```

### 3. `confirm(question)`
Shows a question and two buttons: "OK" and "Cancel". Returns `true` for "OK" and `false` for "Cancel".
```javascript
let isBoss = confirm("Are you the boss?");
alert(isBoss); // true if OK is pressed
```

## Diverse & Key Examples

### Example 1: Combining Interaction with Conversion
```javascript
let ageStr = prompt("How old are you?");
let age = Number(ageStr); // Always convert if you need math!
if (age >= 18) {
  alert("Welcome!");
}
```

### Example 2: The "Cancel" Case
```javascript
let name = prompt("What is your name?");
if (name === null) {
  alert("Why did you cancel?");
} else {
  alert(`Hello, ${name}!`);
}
```

## External Resources
- [Interaction: alert, prompt, confirm - javascript.info](https://javascript.info/alert-prompt-confirm)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.

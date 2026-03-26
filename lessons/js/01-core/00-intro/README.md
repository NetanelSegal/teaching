# Lesson 0: Introduction to JavaScript (The "What, How, Why")

## Goal
Understand the role of JavaScript in the modern web, how it executes, and the different environments it runs in.

## 1. What is JavaScript?
JavaScript (JS) is a high-level, interpreted programming language that conforms to the ECMAScript specification.

- **The Language of the Web**: While HTML provides structure and CSS provides style, JS provides the **behavior**. It makes pages "alive."
- **High-level**: You don't need to manage memory or talk directly to the CPU; the language handles the complex stuff for you.
- **Interpreted**: Code is executed line-by-line. There is no need for a "compilation" step like in C++ or Java.

### Example: Making an Element Interactive
```javascript
// Simple JS to change text on a button click
const button = document.querySelector('button');
button.onclick = () => {
    alert('You clicked me!');
};
```

## 2. How does it run? (The Engine)
JS doesn't run "on its own"; it needs a **Host Environment** with a **JS Engine**.

- **The Engine**: A program that reads and executes JS code.
    - **V8**: Used by Google Chrome and Node.js.
    - **SpiderMonkey**: Used by Firefox.
- **The Engine's Job**: It takes your human-readable JS code and converts it into "Machine Code" that the computer's CPU can actually understand.

## 3. When/How/Why is it used?
- **Client-Side (Front-end)**: Running in the user's browser to create dynamic UIs.
- **Server-Side (Back-end)**: Running on a server using **Node.js** to handle databases, file systems, and network requests.
- **Cross-Platform**: JS can be used to build mobile apps (React Native) and desktop apps (Electron).

### Example: A Simple Calculation (Front or Back-end)
```javascript
const price = 100;
const tax = 0.17;
const total = price + (price * tax);
console.log(`The total price is: ${total}`);
```

## 4. Ways to run/write JS (The Difference)
Understanding *where* your code lives is critical.

### A. Browser Console
**Best for**: Testing one-liners or debugging.
**How**: Open Browser -> F12 -> Console -> Type `alert("Hello")` -> Enter.

### B. Internal Script
**Best for**: Very small, page-specific scripts.
**How**:
```html
<!-- Inside index.html -->
<script>
  console.log("This runs inside the HTML file!");
</script>
```

### C. External Script (Recommended)
**Best for**: Professional projects. Keeps code clean and reusable.
**How**:
```html
<!-- index.html -->
<script src="main.js"></script>
```
```javascript
// main.js
console.log("This is a clean, external file.");
```

### D. Node.js (CLI)
**Best for**: Server-side logic, automation, and tools.
**How**: Create `app.js`, then run in terminal: `node app.js`.

---

## External Resources
- [An introduction to JavaScript - javascript.info](https://javascript.info/intro)
- [The modern tutorial - javascript.info](https://javascript.info/hello-world)

# Lesson 0: Introduction & Code Structure

## Goal
Understand how JavaScript executes, the internal mechanics of the JS Engine, the importance of "Modern Mode," and the rules for writing clean code.

## In-Depth Explanations

### 1. What is JavaScript?
JavaScript (JS) was initially created to "make web pages alive." The programs in this language are called *scripts*. They can be written right in a HTML page and execute automatically as the page loads.

### 2. How the Engine Works (Step-by-Step)
JavaScript doesn't run "on its own." It needs a host environment (like a browser or Node.js) that contains a **JavaScript Engine**.

The engine is a complex program that follows these steps:
1.  **Parsing**: The engine reads ("parses") the script text.
2.  **Compilation**: It converts the script into machine language (this is often called "Just-In-Time" or JIT compilation).
3.  **Execution**: The machine code runs, very fast.

**Popular Engines**:
- **V8**: Developed by Google for Chrome. It's also the heart of **Node.js**.
- **SpiderMonkey**: The first-ever JS engine, created by Brendan Eich (the creator of JS), now used in Firefox.
- **JavaScriptCore**: Used in Safari (Nitro).

### 3. What makes it unique?
JS has three main strengths that make it the king of the web:
1.  **Full integration with HTML/CSS**: It lives perfectly inside the browser.
2.  **Simple things are done simply**: You don't need complex setup to start.
3.  **Supported by all major browsers**: And enabled by default.

### 4. Code Structure: The Syntax Rules
- **Statements**: Commands that perform actions (e.g., `alert("Hello")`).
- **Semicolons**: They separate statements. While JS often performs "Automatic Semicolon Insertion" (ASI), it's a professional standard to **always** use them to avoid bugs.
- **Comments**:
    - `//` for single-line.
    - `/* ... */` for multi-line.
    **Rule**: Use comments to explain **WHY** the code does something, not **WHAT** it does.

### 5. The Modern Mode: "use strict"
For a long time, JS evolved without breaking old code. This led to "mistakes" in the language design. In 2009, ES5 introduced **Strict Mode**. It locks the language into a "modern" state.

**How to use it**: Place `"use strict";` at the very top of your script.
```javascript
"use strict";

// This code runs in modern mode
```
*Note: In modern JS (using classes or modules), strict mode is enabled by default.*

## Diverse & Key Examples

### Example 1: The Engine in Action (JIT)
Imagine you have a loop that runs 1,000 times. The engine notices this, "optimizes" that specific piece of code into machine language while the program is running, and makes it execute much faster than the first time.

### Example 2: Semicolon Pitfall
```javascript
// This might fail without a semicolon because JS thinks the array is part of the previous line
alert("Hello");
[1, 2].forEach(alert);
```

### Example 3: Comments Best Practice
```javascript
// GOOD: We check the age to ensure the user is allowed to access adult content
if (userAge >= 18) {
  grantAccess();
}
```

## External Resources
- [An introduction to JavaScript - javascript.info](https://javascript.info/intro)
- [Hello, world! - javascript.info](https://javascript.info/hello-world)
- [Code structure - javascript.info](https://javascript.info/code-structure)
- [The modern mode, "use strict" - javascript.info](https://javascript.info/strict-mode)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.

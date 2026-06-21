# Lesson 1: Introduction to React & JSX

## 🎯 Goal
Understand the core principles of React: how the Virtual DOM works, writing your first components, and using JSX to integrate markup within JavaScript.

---

## ⚓ Hook: Why React? (The "Why?")
Imagine you are building a chat application in Vanilla JavaScript. Every time a new message arrives, you must write imperative code detailing **how** to modify the DOM:
1. Find the list container in the DOM.
2. Create a new `div` or `li` element in memory.
3. Inject the message text (`textContent` or `innerHTML`).
4. Append the item to the list (`appendChild`).
5. Manually find and increment the unread messages badge count.

As your app grows, managing DOM states manually like this becomes a maintenance nightmare full of sync bugs (where data and UI fall out of step).

**The React Solution**: Declarative programming. In React, we describe **what** we want to see on the screen based on the current **data/state**. When the data changes, React automatically updates the UI in the most efficient way possible.

---

## 📘 In-Depth Theory

### 1. How React Works: Virtual DOM and Reconciliation
Directly updating the browser's real DOM is a "costly" performance operation. To avoid unnecessary updates, React uses a **Virtual DOM**:
- **Virtual DOM**: A lightweight, in-memory representation of the real DOM.
- **Diffing Algorithm**: When state changes, React generates a new Virtual DOM tree and compares it (diffs it) with the previous one to identify exactly what changed.
- **Reconciliation**: React applies only the minimal necessary updates to the browser's real DOM.

### 2. What is JSX (JavaScript XML)?
JSX is a syntax extension for JavaScript that allows you to write HTML-like structures directly inside your JS code.
- It is not real HTML—the browser does not understand JSX.
- Build tools (like Vite/Babel) compile JSX down to standard JavaScript functions (`React.createElement` or JSX runtime calls).
- **Core JSX Rules**:
  1. **Single Root**: You must return a single parent element (use Fragments `<> ... </>` if you do not want to add extra wrappers to the DOM).
  2. **Self-closing Tags**: All tags must be closed (e.g., `<img />`, `<br />`).
  3. **camelCase Attributes**: Attributes are camelCase (e.g., `className` instead of `class`, `htmlFor` instead of `for`).
  4. **JavaScript Expressions**: You can write any JavaScript expression inside JSX by wrapping it in curly braces `{}`.

### 3. Components
Components are the reusable building blocks of a React UI.
- In modern React, a component is a simple JavaScript function that returns a JSX element.
- Component names must start with a capital letter (**PascalCase**) so that React can distinguish them from standard HTML tags (which start with lowercase letters).

---

## 📚 External Learning Resources
- [React.dev: Quick Start](https://react.dev/learn)
- [React.dev: Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [React.dev: Your First Component](https://react.dev/learn/your-first-component)

---

## 🇺🇸 Glossary
- **Virtual DOM**: A digital representation in memory of the UI synced with the real DOM.
- **Diffing**: React's algorithm to compare the new virtual tree with the old one.
- **Reconciliation**: The process through which React updates the real DOM.
- **Declarative**: Describing the *what* instead of the *how* (compared to Imperative).
- **Fragment**: A special empty component wrapper that groups elements without injecting an actual node into the DOM tree.

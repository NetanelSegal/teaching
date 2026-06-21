# Lesson 7: Custom Hooks and useRef

## 🎯 Goal
Understand the architectural difference between `useRef` and `useState`. Learn how to use `useRef` to directly reference browser DOM nodes or persist mutable values across renders without triggering UI re-renders, and write modular Custom Hooks to share stateful logic between components.

---

## ⚓ Hook: When Does React Render "Too Much"? (The "Why?")
Imagine you want to trace the mouse coordinates (`x, y`) on the screen to draw a custom cursor animation. You could store coordinates in React `useState` and update them on every `mousemove` event. However, this means that for every single pixel the user moves the mouse, your entire component tree is forced to re-run (rendering hundreds of times per second!). This leads to severe lag and performance issues.

What if we want to:
1. Save and update values between renders **without** forcing the component to re-render? (e.g. keeping track of a timer ID or counting component renders).
2. Perform direct DOM actions, such as auto-focusing a text input when a form mounts?
3. Share complex background event listener logic (like monitoring network connection status or tracking mouse positions) across 5 different components without copy-pasting code?

This is exactly where **`useRef`** and **Custom Hooks** come in.

---

## 📘 In-Depth Theory

### 1. The `useRef` Hook
`useRef` returns a mutable "ref" object containing a single property: `.current`.
- **Key Difference from useState**: Mutating `.current` **does not trigger** a component re-render.
- The ref object remains stable and persists across the entire lifecycle of the component.

```jsx
import { useRef } from 'react';

const myRef = useRef(initialValue);
// Read or update value using: myRef.current
```

#### Use Case A: Accessing DOM Nodes
By passing the ref object into a JSX element's `ref` attribute, React binds the underlying DOM node to `.current` once the component mounts. This allows you to call standard browser APIs directly (e.g., focusing an input, scrolling to an element, or measuring node bounding rects).

#### Use Case B: Storing Persisted Values
For instance, storing a timer ID returned by `setInterval` so that you can clear it later in response to button clicks or inside an effect's cleanup routine.

### 2. Custom Hooks
A Custom Hook is a plain JavaScript function whose name starts with **`use`** (e.g., `useFetch`, `useAuth`, `useLocalStorage`).
- Custom Hooks can call other built-in React hooks (such as `useState`, `useEffect`, `useRef`).
- **The Advantage**: They allow you to extract complex stateful logic out of components and package it into reusable functions.
- Every time a component calls a Custom Hook, it gets an isolated state instance. Components calling the same custom hook do not share state; they only share the execution logic.

---

## 📚 External Learning Resources
- [React.dev: Referencing Values with Refs](https://react.dev/learn/referencing-values-with-refs)
- [React.dev: Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs)
- [React.dev: Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

---

## 🇺🇸 Glossary
- **Ref**: A stable React reference container holding a mutable `.current` property whose updates do not trigger component renders.
- **Current**: The single property on a Ref object containing the stored mutable value.
- **Custom Hook**: A reusable JS function starting with `use` that packages stateful React logic.
- **Stateful Logic**: Component logic that involves managing reactive variables (`useState`, `useEffect`) rather than purely formatting static visuals.

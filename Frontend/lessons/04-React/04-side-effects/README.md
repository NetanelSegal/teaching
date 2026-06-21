# Lesson 4: Side Effects and API Calls (useEffect)

## 🎯 Goal
Understand the concept of Side Effects in React, work with the built-in `useEffect` hook, manage the Dependency Array correctly, utilize the Cleanup Function, and perform network requests (API calls) while handling Loading and Error states.

---

## ⚓ Hook: When Do We Need External Data? (The "Why?")
Up until now, all of our application data lived locally in the browser's memory.
But what if we want to:
* Display a list of products stored in a remote database?
* Dynamically update the browser tab title (`document.title`) based on information shown on the page?
* Run a timer or stopwatch that updates every second?
* Listen to global browser events (such as window resizing or clicking outside a dropdown)?

All of these actions are called **Side Effects** (or simply *effects*) because they occur outside the normal, pure rendering flow of the component (Input -> Render UI). They require interacting with systems outside of React.

---

## 📘 In-Depth Theory

### 1. Mental Model: Synchronization, Not "Lifecycle Events"
Unlike older Class-based React components where developers thought about lifecycles like "component mounted" or "component unmounted," in modern functional React, you should think of `useEffect` as a tool for **Synchronization**:
Your component is synchronizing with an external system (like a database API, a socket connection, or the browser DOM). Whenever any of the dependencies change, React runs the effect again to ensure the UI and the external system are synchronized.

### 2. Hook Structure and the Dependency Array
The `useEffect` hook receives a callback function and an optional dependency array:

```jsx
import { useEffect } from 'react';

useEffect(() => {
  // Effect code (synchronization)
  
  return () => {
    // Cleanup function (optional)
  };
}, [dependencies]);
```

The dependency array controls when the effect executes:
1.  **Empty Array `[]`**: The effect runs **only once** after the initial render (Mount). This is ideal for initial data fetching.
2.  **Array with variables `[count, name]`**: The effect runs on mount, and then **only when** at least one of the variables inside changes.
3.  **No Array at all**: The effect runs **on every single render**. (Warning: Updating state inside an effect without a dependency array will cause infinite rendering loops!).

### 3. The Cleanup Function
If your effect sets up event listeners, timers (`setInterval`), or open connections, it should return a cleanup function. React executes this cleanup function in two cases:
1. Right before running the effect code again (on the next cycle).
2. When the component is removed from the screen (Unmount).

### 4. API Calls and Managing Loading & Error States
Because network requests are asynchronous (they take time), it is essential to manage three states inside your component:
* `data`: The fetched payload response.
* `isLoading`: A boolean flag to indicate whether the request is pending (so you can render a spinner or skeleton loader).
* `error`: A state variable holding any network or response errors (so you can display a user-friendly error message).

---

## 📚 External Learning Resources
- [React.dev: Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [React.dev: You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) (Highly recommended for avoiding common mistakes).

---

## 🇺🇸 Glossary
- **Side Effect**: Any program operation that escapes the boundary of the React UI rendering flow (e.g., API requests, DOM mutations, timers).
- **Mount**: The phase where a component is created and inserted into the browser DOM for the first time.
- **Unmount**: The phase where a component is removed from the browser DOM.
- **Dependency Array**: An array of state/prop values that React monitors to decide whether to re-run an effect.
- **Cleanup Function**: An optional function returned by an effect to clean up background subscriptions, event listeners, or timers.

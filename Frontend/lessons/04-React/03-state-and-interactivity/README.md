# Lesson 3: State and Interactivity

## 🎯 Goal
Understand the concept of State in React, use the core `useState` hook to manage dynamic component-level data, understand the React render cycle (Trigger, Render, Commit), handle event listeners, and create Controlled Components in forms.

---

## ⚓ Hook: Making Pages Come Alive (The "Why?")
Until now, the websites and components we built were completely static. Once they loaded onto the screen, their data remained unchanged.
But what happens when a user wants to:
* Click a button to add a product to their shopping cart and immediately see the badge count increase?
* Open or close a side navigation menu?
* Type text inside a search field and filter results in real-time?

In Vanilla JavaScript, we would select and modify DOM nodes directly. In React, we use **State**. State is the internal "memory" of a component. When the state changes, React automatically re-runs (re-renders) the component to reflect the updates instantly in the UI.

---

## 📘 In-Depth Theory

### 1. The `useState` Hook
To define a state variable inside a functional component, we use the built-in React hook `useState`:

```jsx
import { useState } from 'react';

const [state, setState] = useState(initialValue);
```

*   `state`: The variable holding the current value (read-only).
*   `setState`: A setter function used to update the state value (write-only).
*   `initialValue`: The initial value of the state when the component mounts for the first time.
*   **Golden Rule**: Never mutate the `state` variable directly (e.g., `state = newValue`). Updates must always be handled exclusively via the setter function (`setState`).

### 2. The Render Update Cycle (Trigger, Render, Commit)
When a state setter function (like `setState`) is invoked, a three-step cycle runs:
1.  **Trigger**: React is notified that the component's state has changed and schedules a re-render.
2.  **Render**: React calls your component function to calculate the new JSX output (the updated Virtual DOM tree).
3.  **Commit**: React compares the new Virtual DOM with the previous one (diffing) and updates only the modified nodes in the browser's real DOM.

*Note:* Since the component function re-runs from top to bottom on every state change, all local variables and function definitions inside it are recreated (except for Hooks, which are tracked internally by React)!

### 3. Event Handling
In React, event attributes are written in camelCase (e.g., `onClick`, `onChange`, `onSubmit` instead of HTML's `onclick`, `onchange`, `onsubmit`).
We pass the function *reference* (not the function execution) as the event handler:

```jsx
// CORRECT: Passes a reference to the handler
<button onClick={handleClick}>Click Me</button>

// INCORRECT: Executes the function immediately on render instead of on click!
<button onClick={handleClick()}>Click Me</button>
```

### 4. Controlled Components in Forms
In plain HTML, form elements like `<input>` manage their own internal state.
In React, the standard approach is to use **Controlled Components**:
1. Store the input value in a React state variable.
2. Bind the `value` attribute of the input to that state variable.
3. Listen to the `onChange` event, updating the state with the typed value (`e.target.value`).

By doing this, the React state becomes the **Single Source of Truth** for the form data, allowing for instant validation and processing.

---

## 📚 External Learning Resources
- [React.dev: State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [React.dev: Responding to Events](https://react.dev/learn/responding-to-events)
- [React.dev: Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)

---

## 🇺🇸 Glossary
- **State**: Component-specific internal memory for data that changes over time and affects the layout.
- **Hook**: A special function beginning with `use` that lets you tap into React features (like state and lifecycle) from functional components.
- **Controlled Component**: A form input element whose value is fully controlled by React state.
- **Event Handler**: A function called in response to user actions (like click, change, submit).
- **Trigger**: The event that kicks off a new rendering step.

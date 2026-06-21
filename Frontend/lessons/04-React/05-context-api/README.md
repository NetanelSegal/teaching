# Lesson 5: Context API & Global State Management

## 🎯 Goal
Understand the "Prop Drilling" problem in multi-layered React applications, learn the Context API as a built-in solution for global state management, and establish direct communication channels between distant components without dragging props through intermediate layers.

---

## ⚓ Hook: The "Prop Drilling" Nightmare
Imagine you are building a complex web dashboard with the following structural hierarchy:
`App` ➔ `Layout` ➔ `Header` ➔ `Navbar` ➔ `UserMenu` ➔ `UserAvatar`.

The authenticated user's details (username, profile image) are fetched in the root `App` component. However, the deep leaf component `UserAvatar` is the only one that needs to render them.
To get the data there, you must pass the user props down through every single intermediate component (`Layout`, `Header`, `Navbar`, etc.), even though none of these components use or care about the user data.

This phenomenon is known as **Prop Drilling**. It clutters component signatures, couples components unnecessarily, and makes restructuring your UI hierarchy extremely difficult.

**The Solution: Context API**. Context allows us to create a "direct pipeline" to inject data from the top provider component directly into any deep leaf component, skipping the intermediate steps entirely.

---

## 📘 In-Depth Theory

### 1. Three Steps to Master Context

Working with Context in React involves three specific actions:

#### A. Creating the Context
We call the built-in function `createContext()`. This function returns an object containing a Provider and a Consumer.

```jsx
import { createContext } from 'react';

// null is an optional default value
export const UserContext = createContext(null); 
```

#### B. Wrapping the Tree in the Provider
The Provider is a component that accepts a special attribute named `value`. Any child component nested under this Provider (at any depth level) will be able to access this value.

```jsx
import { UserContext } from './UserContext';

function App() {
  const user = { name: "Aviv", email: "aviv@gmail.com" };

  return (
    <UserContext.Provider value={user}>
      <Layout /> {/* All components inside Layout can now access the user object */}
    </UserContext.Provider>
  );
}
```

#### C. Consuming the Value using the `useContext` Hook
Inside the consumer child component, we call the `useContext` hook and pass our Context object as the argument.

```jsx
import { useContext } from 'react';
import { UserContext } from './UserContext';

function UserAvatar() {
  const user = useContext(UserContext); // Retrieves the value directly from the Provider
  
  return <img src={user.avatarUrl} alt={user.name} />;
}
```

### 2. Updating Context Values
To allow child components to write or update global states (e.g., logging out a user or switching themes):
1. Store the value in the State of the component hosting the Provider.
2. Pass both the state variable and the updater function (or callback) inside the Provider's `value` object.
3. When the state changes, React re-renders the Provider and automatically pushes the updates down to all components consuming that specific Context. Intermediate components that do not consume the context are skipped, preserving rendering performance.

---

## 📚 External Learning Resources
- [React.dev: Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)
- [React.dev: Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)

---

## 🇺🇸 Glossary
- **Prop Drilling**: Passing properties down through multiple layers of intermediate components that don't use them directly.
- **Context**: A built-in React mechanism for sharing global values without manual prop passing.
- **Provider**: The React component that wraps a section of the application and provides the Context value to its descendants.
- **useContext**: The hook used to read values from a Context provider.

# Lesson 2: Props and Data Flow

## 🎯 Goal
Understand the Props mechanism in React, the concept of Unidirectional Data Flow, dynamically rendering lists using `map()`, and the critical role of the `key` prop.

---

## ⚓ Hook: How Do We Build 100 Different Cards?
In the previous lesson, we built a personal Profile Card (`ProfileCard`) with hardcoded details.
But what happens if we need to build a website displaying 100 different products, or a list of 50 students?
Should we duplicate our code and create 100 individual files (e.g. `ProductCard1.jsx`, `ProductCard2.jsx`)?

Of course not. Just as regular JavaScript functions use **parameters** to run the same logic on different values, React components use **Props** (short for *properties*) to pass different data configurations into a single reusable layout.

---

## 📘 In-Depth Theory

### 1. Unidirectional Data Flow
In React, data always flows **downward** (from parent to child):
- **Parent Component**: Owns or fetches the data and passes it down to children using JSX attributes.
- **Child Component**: Receives data as a single read-only (immutable) `props` object.
- **Core Rule**: A child component **must never** modify the props it receives. If a child wants to request a change, it must execute a callback function passed down as a prop by the parent.

### 2. Receiving Props and Destructuring
When a component runs, React passes a single object containing all attribute values.
The most common way to receive props is via JavaScript **destructuring** directly in the function parameters:

```jsx
// Method A: Receiving the entire props object
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Method B (Recommended): Explicit Destructuring
function Welcome({ name, age }) {
  return <h1>Hello, {name}! Age: {age}</h1>;
}
```

### 3. The Special Prop: `children`
Any content placed between the opening and closing tags of a JSX component is passed automatically as a prop named `children`. This allows you to build generic wrappers or Layout components.

### 4. Dynamic List Rendering & Keys
To render lists of data (like products or users), we use the native JavaScript array method `map()`.
- The `map()` function transforms an array of data into an array of JSX elements.
- **The `key` Prop**: Every element returned inside a `map()` loop must have a unique, stable `key` prop. React uses these keys to track which items changed, were added, or were removed, updating only those specific elements instead of re-rendering the entire list.
- **Important**: Keys should be stable, unique identifiers (like database `id` fields) rather than array indices, which can change if the list is sorted or filtered.

---

## 📚 External Learning Resources
- [React.dev: Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- [React.dev: Rendering Lists](https://react.dev/learn/rendering-lists)

---

## 🇺🇸 Glossary
- **Props**: Data passed down from a parent component to configure a child.
- **Immutable**: Unchangeable. Props in React are read-only and cannot be mutated by the component receiving them.
- **Destructuring**: A JavaScript syntax that unpacks values from arrays or properties from objects into distinct variables.
- **Children Prop**: A built-in prop representing contents nested between opening and closing tags of a component.
- **Key**: A unique string or number used by React to identify items in a list.

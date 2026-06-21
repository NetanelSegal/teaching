# React Course - Syllabus & Table of Contents

React is a JavaScript library for building modern user interfaces based on components. This course is built on the **Hook-Theory-Lab** pedagogical model and structured into consistent directories for study and development.

---

## 🗺️ Learning Modules

### 0. [Getting Started with React](./00-getting-started/README.md)
*   **Why React**: The evolution of dynamic SPAs, DOM pain points, and declarative vs imperative programming.
*   **History & Concept**: Origin at Facebook, Jordan Walke, and the component philosophy.
*   **Setup**: Node.js/npm, initializing with Vite, and template project structure.
*   **Lab**: Creating, running, and modifying a React + Vite hello-world site.

### 1. [Introduction to React and JSX](./01-intro-and-jsx/README.md)
*   **How React Works**: Virtual DOM, reconciliation process, and the diffing algorithm.
*   **Syntax**: Understanding JSX, XML rules in JS, and writing your first component.
*   **Lab**: Writing JSX code and building a static Profile Card component (`ProfileCard`).

### 2. [Props and Data Flow](./02-props-and-data-flow/README.md)
*   **How React Works**: Unidirectional data flow (parent to child) and children props.
*   **Syntax**: Passing props, destructuring in parameters, and rendering lists with `map()` and unique `key` tags.
*   **Lab**: Rendering a dynamic list of students using component props.

### 3. [State and Interactivity](./03-state-and-interactivity/README.md)
*   **How React Works**: Update lifecycle (Trigger, Render, Commit) and mutating state correctly using immutability rules.
*   **Syntax**: The `useState` hook, event handling, and controlled input forms.
*   **Lab**: Building an interactive counter and a controlled student creation form.

### 4. [Side Effects and API Calls](./04-side-effects/README.md)
*   **How React Works**: The synchronization model of `useEffect` with external systems and cleanups.
*   **Syntax**: `useEffect` dependency array, fetching data with fetch/axios, handling load and error states.
*   **Lab**: Fetching blog posts from JSONPlaceholder and managing pending/error flags.

### 5. [Context API & Global State](./05-context-api/README.md)
*   **Concept**: Resolving the prop-drilling problem, setting up Providers, and consuming values globally.
*   **Lab**: Implementing a global theme provider (Dark/Light mode) toggling body classes.

### 6. [Client-Side Routing](./06-routing/README.md)
*   **Concept**: How single-page routing works via the History API and modern routers.
*   **Syntax**: React Router setup using `createBrowserRouter`, layout files with `<Outlet />`, and dynamic paths with `useParams`.
*   **Lab**: Creating a multi-page app with dynamic profile pathways.

### 7. [Custom Hooks and useRef](./07-custom-hooks-and-useref/README.md)
*   **Advanced**: Accessing DOM elements directly and sharing stateful reusable logic using customized functions.
*   **Syntax**: `useRef` for persisting values and DOM references, custom hook creation (`use...`).
*   **Lab**: Creating custom window size hooks and auto-focusing inputs on mount.

### 8. [The Future of React (React 19)](./08-the-future-of-react/README.md)
*   **Future Features**: React Compiler (automatic memoization), Server Components vs Client Components, and the `use` API.
*   **Forms & Actions**: Modern async submission using form actions and managing pending states with `useActionState`.
*   **Lab**: Implementing async forms using form actions and feedback indicators.

### 9. [Server State with TanStack Query](./09-tanstack-query/README.md)
*   **Concept**: Managing server state, caching, background refetching, and resolving race conditions.
*   **Syntax**: `useQuery` for fetching, `useMutation` for mutations, and cache invalidation.
*   **Lab**: Constructing a todo manager with asynchronous server queries and cache invalidations.

### 10. [State Management with Zustand](./10-zustand-state-management/README.md)
*   **Concept**: Eliminating Context re-render problems, store architecture, and selector patterns.
*   **Syntax**: Creating a store hook using `create` and reading/updating state globally.
*   **Lab**: Implementing a shopping cart drawer utilizing global Zustand store management.

### 11. [TypeScript with React](./11-typescript-with-react/README.md)
*   **Concept**: Type safety in React, typing Props, event objects, and state values.
*   **Lab**: Porting basic JavaScript components to strict TypeScript syntax (`.tsx`).

### 12. [Capstone Project (Course Finale)](./12-capstone-project/README.md)
*   **Architectural Synthesis**: Directory structures, global error boundaries, custom interceptors, and production bundling.
*   **Lab**: Integrating Routing, Zustand, TanStack Query, and TypeScript into a cohesive web application.

---

## 📑 Cheat Sheet (API Quick-Reference)
*   **useState**: Local state variable manager.
*   **useEffect**: External side-effects and cleanup hook.
*   **useRef**: Immutable reference hook (DOM nodes/ref values).
*   **useContext**: Global sharing of Context values.
*   **createBrowserRouter**: Modern data-based router engine config (React Router 6+).
*   **useActionState**: Form action handler for async operations (React 19).
*   **useQuery / useMutation**: TanStack Query server data cache management.
*   **create (Zustand)**: Fast, boilerplate-free store setup without Providers.
*   **TypeScript (.tsx)**: Strict compile-time safety and compiler checking.

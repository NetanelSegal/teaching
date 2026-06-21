# Lesson 6: Navigation and Routing (React Router)

## 🎯 Goal
Understand the concept of Single Page Applications (SPAs) and Client-side Routing, learn the modern React Router library (version 6.4+), configure data-driven routers (`createBrowserRouter`), navigate between pages without reloads using `<Link>`, manage dynamic routes (`useParams`), and handle programmatic redirects using `useNavigate`.

---

## ⚓ Hook: Why Doesn't the Page Reload? (The "Why?")
In traditional web applications (Multi-Page Applications), every time you click on a hyperlink (`<a href="...">`), the browser sends an HTTP request to the server, receives a brand-new HTML document, and re-renders the entire screen (including reloading CSS and JavaScript assets). This results in slow transitions, blank screens, and a clunky user experience.

In React, we build **Single Page Applications (SPAs)**. The goal is to give users the illusion of moving between pages at lightning speed, with absolutely no browser refreshes.

How does this work?
1. **Prevent Default**: React Router links prevent the browser from doing a full page refresh.
2. **URL Manipulation**: The library uses the browser's built-in **History API** to modify the address bar URL locally in memory.
3. **Component Swapping**: React detects the URL change, unmounts the previous page component, and mounts the new page component in its place instantly.

---

## 📘 In-Depth Theory

### 1. The Data Router Revolution (React Router v6.4+)
In older versions of React Router, routes were defined directly inside JSX using `<BrowserRouter>`, `<Routes>`, and `<Route>` wrappers.
In modern React Router, the official and recommended way is to use **Data Routers**.
The main advantage is their ability to fetch data (via Loaders) and handle submissions (via Actions) in parallel with downloading components, which drastically increases application load times.

We define the router using `createBrowserRouter` and pass it to the `<RouterProvider>` wrapper:

```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}
```

### 2. Transitioning Without Reloads: `<Link>`
To navigate between pages, we must always use the `<Link>` component instead of the native HTML anchor tag `<a>`:

```jsx
import { Link } from 'react-router-dom';

// CORRECT: Navigates without page reloads
<Link to="/about">About Us</Link>

// INCORRECT: Causes a full page reload and wipes out all React state!
<a href="/about">About Us</a>
```

### 3. Dynamic Routes & `useParams`
Suppose we have a detail page for products, and we want the URL to include the unique product ID, such as `/product/101` or `/product/102`.
We declare a dynamic parameter using a colon (`:`):
- Route Configuration: `path: "/product/:id"`
- Reading the Parameter: We use the `useParams()` hook, which returns an object mapping all dynamic segments from the URL path.

```jsx
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams(); // Extracts the 'id' parameter from the URL
  return <h2>Product Details for ID: {id}</h2>;
}
```

### 4. Programmatic Navigation with `useNavigate`
Sometimes, you need to transition to another route as a direct result of user logic (e.g., redirecting to a dashboard after a successful form login, or going back a page). For this, we use the `useNavigate` hook:

```jsx
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform authentication logic here...
    navigate('/dashboard'); // Instantly navigates to dashboard
  };

  return <button onClick={handleLogin}>Log In</button>;
}
```

---

## 📚 External Learning Resources
- [React Router: Pick a Router Guide](https://reactrouter.com/en/main/routers/picking-a-router)
- [React Router: createBrowserRouter Docs](https://reactrouter.com/en/main/routers/create-browser-router)

---

## 🇺🇸 Glossary
- **SPA (Single Page Application)**: A web application that loads a single HTML document and dynamically updates it in response to user actions without reloads.
- **Routing**: The process of mapping browser URL paths to specific page components.
- **Link**: React Router's custom anchor component that overrides standard browser navigation.
- **Dynamic Parameter**: A variable segment inside a URL path (marked with a `:`) used to pass IDs or arguments.
- **useParams**: A hook that reads dynamic path variables from the URL.
- **useNavigate**: A hook that returns a function to navigate programmatically.

# Lesson 0: Getting Started with React

## 🎯 Goal

Understand the history, evolution, and purpose of React. Learn how the web evolved from static pages to Single Page Applications (SPAs), install Node.js/npm, set up your first React project using Vite, and explore its basic structure.

---

## ⚓ Hook: The Pain of Manual DOM Manipulation

Imagine you are building a modern e-commerce checkout page in Vanilla JavaScript. You have:

1. A cart count in the header.
2. A list of items in the cart.
3. A discount code input.
4. A total price summary.

When a user clicks "Add Item", you must write code to:

- Find the cart list element in the DOM.
- Create a new `li` element in memory.
- Inject the product's title, price, and delete button.
- Append it to the cart list.
- Select the header cart count element and increment its value.
- Re-calculate the subtotal and total, updating their text values in the DOM.
- Adjust the layout if the cart was previously empty.

This is **Imperative Programming**—detailing exactly **how** each UI update must happen. As applications grow:

- State (data) gets out of sync with the UI (e.g., the total price changes, but the header count doesn't update).
- The code becomes a massive web of event listeners and direct DOM manipulations that are highly error-prone.
- Directly updating the browser DOM is slow and resource-heavy.

**The React Solution**: **Declarative Programming**. You describe **what** the UI should look like based on the current state. When the state changes, React automatically handles all DOM updates efficiently under the hood.

---

## 📘 In-Depth Theory

### 1. What is React?

React is a popular, open-source JavaScript library developed by Facebook (Meta) in 2013 for building rich, interactive user interfaces. It is **component-based** and **declarative**.

### 2. A Brief History of React

- **2011**: Created by Jordan Walke, a software engineer at Facebook. It was deployed on Facebook’s News Feed.
- **2012**: Deployed on Instagram.
- **2013**: Open-sourced at JSConf US. Initially met with skepticism because it combined HTML and JavaScript (JSX).
- **2015**: React Native was released, allowing developers to write mobile applications using React.
- **2019**: React Hooks were introduced (version 16.8), shifting the community from Class-based Components to functional components.
- **2024**: React 19 is released, introducing native compiler support, Actions, Server Components, and simplified asynchronous patterns.

### 3. Core Concepts of React

- **Component-Based**: You build the UI out of small, isolated, and reusable building blocks (components), similar to LEGO blocks.
- **Declarative UI**: Instead of telling the browser how to manipulate elements, you define the desired state, and React handles the rendering.
- **Single Page Application (SPA)**: A web application that loads a single HTML page and dynamically updates it as the user interacts with the app, providing a smooth desktop-like experience without full-page reloads.

### 4. Setting Up Your Development Environment

To work with React, you need:

1. **Node.js**: A JavaScript runtime environment that allows you to run JavaScript on your machine.
2. **npm (Node Package Manager)**: Installed automatically with Node.js, used to manage third-party libraries (like React and Vite).

#### Installing a Project with Vite

We use **Vite** as our build tool. It is modern, extremely fast, and provides hot module replacement (HMR).
To create a new project:

```bash
npm create vite@latest my-first-react-app
cd my-first-react-app
npm install
npm run dev
```

### 5. Understanding the Project File Structure

A standard Vite + React project contains:

- `index.html`: The single entry point page containing a `<div id="root"></div>`.
- `package.json`: Lists the project dependencies (React, Vite) and scripts.
- `vite.config.js`: Configuration for the Vite build tool.
- `src/main.jsx`: The JavaScript entry point that mounts your React application to the `#root` element in the HTML.
- `src/App.jsx`: The main root component of your application.

---

## 📚 External Learning Resources

- [React.dev: Installation Guides](https://react.dev/learn/installation)
- [Vite Guide: Getting Started](https://vite.dev/guide/)
- [Node.js Official Website](https://nodejs.org/)

---

## 🇺🇸 Glossary

- **Declarative**: Expressing the logic of a computation without describing its control flow (describing the _what_, not the _how_).
- **Component**: A self-contained, reusable piece of code that defines a portion of the user interface.
- **Single Page Application (SPA)**: A web app that loads a single document and updates body content via JavaScript APIs.
- **Vite**: A fast modern build tool and development server.
- **Node.js / npm**: A runtime environment and package manager for JavaScript dependencies.

# Lesson 12: Capstone Project & Production Architecture

## 🎯 Goal
Understand how to integrate Routing, global Zustand state, server queries with TanStack Query, and TypeScript type-safety into a production-ready application architecture. Learn file-by-feature directory designs, error boundaries, custom request interceptors, and build configuration optimization.

---

## ⚓ Hook: Scaling Beyond Small Projects
Up until now, you have learned React features in isolation. You built lists, called fetch APIs, hooked up routing, and configured stores.
However, when building a real-world software system at a tech company, you cannot dump all code in one or two files. If you do, you will encounter:
- **Namespace collisions**: Having multiple components with similar names or mixed interfaces.
- **Unclear ownership**: Difficulty finding which folder handles what feature.
- **Brittle builds**: Changes in one file breaking unrelated pages in production.

**The Solution**: Enterprise Architecture. By structuring files around **features** (Folder-by-Feature), isolating API services using Axios interceptors, securing page navigation with Router guards, and wrapping UI nodes in Error Boundaries, you build software that scales cleanly to millions of users.

---

## 📘 In-Depth Theory

### 1. Folder-by-Feature Architecture
For large React projects, instead of grouping files by technical type (e.g., all components in one folder, all pages in another), we group files by **domain feature**:

```
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/useAuth.ts
│   │   └── store/authStore.ts
│   ├── products/
│   │   ├── components/ProductCard.tsx
│   │   ├── pages/ProductDetailsPage.tsx
│   │   └── services/api.ts
├── shared/
│   ├── components/Navbar.tsx
│   └── hooks/useDebounce.ts
└── main.tsx
```

### 2. Global Error Boundaries
React applications can crash completely if a single component throws an unhandled rendering error (such as reading properties of `null`). An **Error Boundary** is a class component that catches JavaScript errors anywhere in their child component tree, logs the errors, and displays a fallback UI instead of crashing the browser.

```tsx
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <div className="p-6 text-center"><h1>Something went wrong.</h1></div>;
    }
    return this.children;
  }
}
```

### 3. Build Optimizations
Before deploying to production, we bundle our application using `npm run build`. This runs the compiler and:
- Minifies files (removing whitespaces and comments).
- Bundles code into optimized chunks.
- Optimizes static image references.

---

## 💻 Capstone Lab: The final synthesis

Your capstone project will tie together:
1. **React Router**: Setup dynamic routes with layouts and navigation.
2. **Zustand**: Manage active user logins and cart records in memory.
3. **TanStack Query**: Fetch real-time products list from mock server APIs.
4. **TypeScript**: Fully type all elements, interfaces, and event handlers.
5. **Tailwind/CSS**: Create a visually stunning, responsive layout.

---

## 📚 External Learning Resources
- [Bulletproof React: Architecture Guide](https://github.com/alan2207/bulletproof-react)
- [React.dev: Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)

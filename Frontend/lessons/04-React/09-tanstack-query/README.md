# Lesson 9: Server State with TanStack Query (React Query)

## 🎯 Goal
Understand the architectural difference between Client State and Server State. Learn the common pitfalls of using `useEffect` for data fetching, and master the TanStack Query library (formerly React Query) to handle query operations (`useQuery`), write mutations (`useMutation`), implement Caching, and manage Loading and Error states securely.

---

## ⚓ Hook: Why Data Fetching in useEffect Causes Bugs (The "Why?")
In Lesson 4, we fetched remote server data using `fetch` inside `useEffect`. While this works for simple apps, in real-world production environments, it causes hard-to-track bugs:
1.  **Race Conditions**: If a user switches routes quickly, older pending network responses might resolve late and overwrite new UI states.
2.  **No Caching**: Every time a user re-visits a page, the app triggers a fresh server request, displaying a blank loading screen even if the database has not changed at all.
3.  **Repetitive Boilerplate**: You have to write and manage three distinct state hooks (`data`, `isLoading`, `error`) for every single fetch operation.
4.  **Desynchronization**: There is no easy out-of-the-box way to refetch data in the background (Background Refetching) or update list displays instantly after making updates (Mutations).

**The Solution: TanStack Query**. This industry-standard library manages **Server State** natively. It solves all of these issues out-of-the-box and provides a fast, native-app feel for users.

---

## 📘 In-Depth Theory

### 1. What is Server State?
Application data is divided into two categories:
*   **Client State**: Data owned and managed solely by the client browser (e.g., sidebar toggles, light/dark themes, current draft in a form input).
*   **Server State**: Data persisted in a remote database and fetched via APIs (e.g., products, user profiles, posts feed). This state is asynchronous, shared, can change without the client's knowledge, and requires caching.

### 2. Setting Up the Library: `QueryClient` and `QueryClientProvider`
To use TanStack Query, we construct a client manager instance and wrap our application root in its provider component:

```jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyApplication />
    </QueryClientProvider>
  );
}
```

### 3. Fetching Data with `useQuery`
`useQuery` is the primary hook used to read data from a server. It receives a configuration object:
- `queryKey`: An array containing unique cache identifiers for this query (acts as the lookup key in the cache).
- `queryFn`: An asynchronous function that performs the request and returns a Promise resolving to the data.

The hook returns state variables: `data`, `isLoading`, `isError`, `error`, and `refetch`:

```jsx
import { useQuery } from '@tanstack/react-query';

function TodoList() {
  const { data: todos, isLoading, isError, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch('https://api.com/todos').then(res => res.json())
  });

  if (isLoading) return <p>Loading todos...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  );
}
```

### 4. Updating Data with `useMutation` & Query Invalidation
To create, update, or delete records on the server, we use `useMutation`.
Once the server write operation completes successfully, we invalidate the cached query so that TanStack Query automatically refetches the latest database state in the background:

```jsx
import { useMutation, useQueryClient } from '@tanstack/react-query';

function AddTodoForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newTodoTitle) => {
      return fetch('https://api.com/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTodoTitle })
      });
    },
    onSuccess: () => {
      // Invalidate the 'todos' cache - triggers an automatic background refetch of the list!
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate("New Task");
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

---

## 📚 External Learning Resources
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [TanStack Query: Quick Start Guide](https://tanstack.com/query/latest/docs/framework/react/quickstart)

---

## 🇺🇸 Glossary
- **Server State**: Data that lives on a remote server and must be fetched, updated, and synchronized asynchronously.
- **Caching**: Storing network payloads in local memory to avoid duplicate API requests.
- **Query Key**: A unique array index identifier used to manage cache entries.
- **Mutation**: An operation that changes database data (typically POST, PUT, DELETE requests).
- **Query Invalidation**: Mark cache entries as stale, triggering automatic background re-fetching.

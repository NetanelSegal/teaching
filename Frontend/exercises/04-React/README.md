# React Practice Projects ⚛️

This folder contains introductory, intermediate, and advanced practice projects designed to reinforce the concepts taught in the React curriculum modules. Each folder contains a fully-configured, runnable Vite project.

---

## 🗺️ Progressive Learning Path

### 1. [Exercise 1: Developer Profile Cards](./01-profile-card/README.md)
*   **Level**: Beginner
*   **Concepts**: JSX, Components, Custom Props, Rendering lists using `map()` and `key`.
*   **Goal**: Create a dynamic developer profiles card grid. Customize card designs using Vanilla CSS.

### 2. [Exercise 2: Smart Note-Taking App](./02-note-taking-app/README.md)
*   **Level**: Intermediate
*   **Concepts**: State management (`useState`), Controlled Components, Event Handling, and `localStorage` synchronization using `useEffect`.
*   **Goal**: Construct a robust note-taking application supporting note categories, filtering, and data persistence across page reloads.

### 3. [Exercise 3: Whack-a-Mole 3D Game](./03-whack-a-mole-game/README.md)
*   **Level**: Intermediate-Advanced
*   **Concepts**: Global state sharing with React Context API (`createContext`/`useContext`) and timer controls inside `useEffect` cleanup loops.
*   **Goal**: Refactor a retro arcade clicker game to feed scoring and speed settings globally without prop drilling.

### 4. [Exercise 4: User/API Post Dashboard](./04-api-user-dashboard/README.md)
*   **Level**: Advanced
*   **Concepts**: Client-side routing (React Router 6+), nested outlets, URL parameters (`useParams`), API requests (Axios/Fetch), and custom fetching hooks with Loading and Error indicators.
*   **Goal**: Develop a multi-page dashboard displaying users, posts, and profile routes using JSONPlaceholder mock data.

### 5. [Exercise 5: Developer Gear Store](./05-shopping-cart-zustand/README.md)
*   **Level**: Advanced / Production-Ready
*   **Concepts**: Zustand stores (no-boilerplate state management), TypeScript type interfaces (`.ts`/`.tsx`), and asynchronous React 19 Actions.
*   **Goal**: Build a fully typed developer shopping cart drawer containing custom add/remove, quantity manipulation, and checkout logic.

---

## 🛠️ How to Run Any Exercise

Each directory is a standalone Vite application. To install dependencies and launch the local development server:

```bash
# 1. Navigate to the exercise directory
cd <exercise-folder-name>   # e.g., cd 02-note-taking-app

# 2. Install package dependencies
npm install

# 3. Launch the local dev server
npm run dev
```

The terminal will print a local URL (usually `http://localhost:5173`). Click it to view and debug the project in your browser!

---

## 👩‍🏫 Instructions for Instructors (Grading Reference)

For details on project structures, comments expectations, and grading categories (Code Structure, Error Handling, Naming Conventions, etc.), refer to the global [grading_rubric.md](../../../../exams_solutions/grading_rubric.md).

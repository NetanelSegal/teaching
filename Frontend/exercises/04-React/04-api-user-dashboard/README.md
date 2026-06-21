# Exercise 4: User/API Post Dashboard (React Router SPA)

## 🎯 Goal
Understand client-side Single Page Application (SPA) routing (`createBrowserRouter`/`<Outlet />`/`useParams`), API request lifecycles, and managing error/loading states.

## ⚓ Hook
Why should a user download your entire home page just to view a single profile? React Router allows us to swap components dynamically inside a core layout based on URL parameters, giving users a hyper-fast routing experience without page reloads.

## 🛠️ Tasks
1. Inspect the routes definition inside [src/App.jsx](file:///D:/ort/curriculum/Frontend/exercises/04-React/04-api-user-dashboard/src/App.jsx). Notice how child views render inside the `<Layout />` parent wrapper using the `<Outlet />` component.
2. Examine the custom hooks (e.g. `useAxiosGet`) and how they handle network requests and loading/error states.
3. Task: Open [src/pages/UsersPage/UsersPage.jsx](file:///D:/ort/curriculum/Frontend/exercises/04-React/04-api-user-dashboard/src/pages/UsersPage/UsersPage.jsx) and add a search filter at the top of the user list.

## 🚀 Advanced Challenges
- Add a "Create Post" form button on the user profile page. Post submissions should mock a POST request using Axios and append the post to the feed.
- Add route guards: prevent navigating to a user profile if the ID does not exist, redirecting the user to the Page Not Found (`*`) page.

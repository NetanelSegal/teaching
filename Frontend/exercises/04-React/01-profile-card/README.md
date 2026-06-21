# Exercise 1: Developer Profile Cards

## 🎯 Goal
Understand functional components, custom props, list rendering with `map()`, and using stable `key` identifiers in React.

## ⚓ Hook
How do you build a webpage displaying cards for 100 team members without duplicating your HTML code 100 times? Props allow us to create a single reusable component blueprint and pass different configurations into it dynamically, keeping our code DRY (Don't Repeat Yourself).

## 🛠️ Tasks
1. Complete the `ProfileCard` component inside [src/App.jsx](file:///D:/ort/curriculum/Frontend/exercises/04-React/01-profile-card/src/App.jsx). It must accept and display:
   - `name`, `role`, `avatar` (with a fallback URL if empty), `bio`, `skills` (rendered as badges), and `isAvailableForHire` (showing a badge if true).
2. Inside `App()`, map over the `developers` array to render a `ProfileCard` for each developer.
3. Don't forget to pass a unique `key` prop!

## 🚀 Advanced Challenges
- Add a "Like" button to each card with localized state (so clicking it only likes *that* specific developer).
- Implement a search bar at the top of the grid to filter developers by skill or name in real-time.

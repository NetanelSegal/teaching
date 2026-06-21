# Exercise 3: Whack-a-Mole 3D Game

## 🎯 Goal
Understand state synchronization across deeply nested components using the React Context API (`createContext`/`useContext`) and timer management inside lifecycle side-effects (`useEffect`).

## ⚓ Hook
Have you ever tried passing parameters down 5 levels of components just so a click on a button updates the header? This is called "Prop Drilling", and it clutter components. Context API creates a global broadcast system where any component can tune in and read/write values instantly.

## 🛠️ Tasks
1. Read the code inside [src/context/gameContext.jsx](file:///D:/ort/curriculum/Frontend/exercises/04-React/03-whack-a-mole-game/src/context/gameContext.jsx).
2. Examine how [Mole.jsx](file:///D:/ort/curriculum/Frontend/exercises/04-React/03-whack-a-mole-game/src/components/Mole.jsx) and [Field.jsx](file:///D:/ort/curriculum/Frontend/exercises/04-React/03-whack-a-mole-game/src/components/Field.jsx) consume context functions (`hitMole`, `missClick`) instead of passing callbacks down manually.
3. Task: Implement a button at the bottom of the game container that resets the High Score back to 0 (saved in localStorage).

## 🚀 Advanced Challenges
- Display a "Game Over" prompt showing the player's performance level.
- Hook up game sound effects (e.g. click sounds, failure buzzer) inside context action functions.

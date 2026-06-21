# Exercise 5: Developer Shopping Cart (Zustand & TypeScript)

## 🎯 Goal
Understand global state management using Zustand (stores without Providers) and writing type-safe React code using TypeScript.

## ⚓ Hook
React Context API is great, but did you know that changing a Context value triggers a re-render for **every** consumer component, even if it only uses a tiny subset of the data? Zustand fixes this by allowing components to use Selectors. It also removes the boilerplates of Providers, and when paired with TypeScript, errors are caught directly inside the editor!

## 🛠️ Tasks
1. Define the TypeScript interfaces for Product and CartItem inside [src/types.ts](file:///D:/ort/curriculum/Frontend/exercises/04-React/05-shopping-cart-zustand/src/types.ts).
2. Create and complete a Zustand store at `src/store/cartStore.ts` using the type definitions. It must contain actions for `addToCart`, `removeFromCart`, and `updateQuantity`.
3. Link the selectors inside [src/App.tsx](file:///D:/ort/curriculum/Frontend/exercises/04-React/05-shopping-cart-zustand/src/App.tsx) to retrieve items and execute operations.

## 🚀 Advanced Challenges
- Integrate state persistence. Use Zustand's middleware `persist` to automatically cache the shopping cart in `localStorage`.
- Create a coupon discount state. Let the user type a discount code (e.g., "ORT10" for 10% off) and apply it to the total price calculations.

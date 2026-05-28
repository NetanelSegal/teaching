# Lesson 02: Basic Type System

## Goal
Master the fundamental primitive types, understand how TypeScript infers types, and learn when to use (and avoid) special types like `any` and `unknown`.

## The "Why?" (The Hook)
Imagine you are fetching a user's age from an API. You expect a number, but the API returns `"25"` (a string). In JavaScript, if you do `age + 1`, you get `"251"` instead of `26`. 

TypeScript's primitive types and strict checking ensure that you know exactly what you're working with before you perform any logic.

---

## Theory: Primitives & Inference

### 1. Primitive Types
The core building blocks:
*   `string`: Textual data (`"Hello"`, `'World'`, `` `Template` ``).
*   `number`: All numbers, including integers and floats (`42`, `3.14`).
*   `boolean`: `true` or `false`.

### 2. Type Inference vs. Explicit Annotation
*   **Explicit**: You tell TS the type: `let x: number = 5;`
*   **Inference**: TS "guesses" the type based on the value: `let x = 5;` (TS knows it's a number).
*   **Rule of Thumb**: Let TS infer simple types to keep code clean. Use annotations for function parameters and complex variables.

### 3. Special Types
*   **`any`**: The "Escape Hatch". Disables type checking. **Avoid this** in production code as it brings back JS runtime bugs.
*   **`unknown`**: A safer version of `any`. You can't use an `unknown` value until you verify what it is (type narrowing).
*   **`void`**: Used for functions that don't return a value.
*   **`never`**: Used for functions that never finish (e.g., throwing an error or infinite loops).

---

## Hebrew Summary (סיכום)
*   **Primitives (טיפוסים פרימיטיביים)**: הסוגים הבסיסיים ביותר של מידע (מספר, מחרוזת, בוליאני).
*   **Type Inference (הסקת טיפוסים)**: היכולת של TypeScript להבין לבד מה הסוג של המשתנה לפי הערך שהכנסנו לו.
*   **Any vs Unknown**: `any` הוא מסוכן כי הוא מכבה את הבדיקות. `unknown` הוא בטוח יותר כי הוא מחייב אותנו לבדוק את סוג המשתנה לפני השימוש.

## External Resources
*   [TypeScript Handbook - EveryDay Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

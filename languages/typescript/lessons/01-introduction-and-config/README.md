# Lesson 01: Introduction & Configuration

## Goal
Understand the TypeScript value proposition, the compilation lifecycle, and how to configure the compiler via `tsconfig.json`.

## The "Why?" (The Hook)
Imagine you have a large JavaScript application. You decide to rename a property `user.fullName` to `user.name`. In a dynamic language like JS, your IDE won't warn you about all the places that still use `.fullName`. You deploy to production, and users start seeing `Hello, undefined`.

**TypeScript prevents this.** It turns runtime "undefined" crashes into compile-time errors. It acts as an automated documentation and testing layer for your data structures.

---

## Theory: The Compiler & Config

### 1. What is TypeScript?
TypeScript is a **static type checker**. It is a "superset" of JavaScript, meaning all valid JS is valid TS, but TS adds a layer of type annotations. 
*   **JS**: `const add = (a, b) => a + b;` (Will let you add a string and a number).
*   **TS**: `const add = (a: number, b: number) => a + b;` (Will block the build if you pass a string).

### 2. The Compilation Lifecycle
Unlike JS, TS doesn't run in the browser. It must be **compiled** (transpiled) into JS.
1.  **Source Code**: You write `.ts` files.
2.  **Parsing**: The compiler (`tsc`) reads the code and builds an Abstract Syntax Tree (AST).
3.  **Type Checking**: The compiler checks if your logic follows the type rules. If not, it throws an error.
4.  **Emission**: If (and only if) the check passes (or configured otherwise), it generates `.js` files.

### 3. Deep Dive into `tsconfig.json`
The `tsconfig.json` file is the brain of your project. Key flags we use:
*   `"strict": true`: The most important flag. Enables a suite of safety checks.
*   `"target"`: Which version of JS to output (e.g., `ESNext`, `ES2020`).
*   `"module"`: How modules work (`ESNext` for modern apps, `CommonJS` for older Node.js).
*   `"rootDir"` and `"outDir"`: Organizing where source code lives and where build artifacts go.

---

## Hebrew Summary (סיכום)
*   **Compilation (הידור)**: התהליך שבו הקוד הופך משפת TypeScript לשפת JavaScript שהדפדפן מבין.
*   **Static Typing (טיפוס סטטי)**: בדיקת סוגי הנתונים בזמן הכתיבה ולא בזמן ההרצה.
*   **Configuration (הגדרה)**: קובץ ה-`tsconfig.json` מאפשר לנו לקבוע כמה "קשוח" יהיה הקומפיילר.

## External Resources
*   [TypeScript Official - Why TypeScript?](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
*   [TSConfig Reference](https://www.typescriptlang.org/tsconfig)

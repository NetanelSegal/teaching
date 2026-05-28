# TypeScript Course Syllabus

## Overview
This course transitions JavaScript developers into TypeScript engineers. It focuses on the "Why" behind static typing and how to leverage the TS compiler to catch bugs before they happen.

---

## Module 1: Introduction & Environment
*   **Hook**: "The Silent Bug" - Demonstrating a JS runtime error that could have been caught by a compiler.
*   **Theory**: 
    *   What is TypeScript? (Superset of JS).
    *   The Compilation Lifecycle: TS -> AST -> Type Check -> Emit JS.
    *   Setting up `tsconfig.json` and strict mode.
*   **Lab**: Setup a project, fix a "leaking" JS file using the TS compiler.
*   **Hebrew Terms**: תכנות מונחה טיפוסים (Type-safe programming), הידור (Compilation).

## Module 2: Basic Type System
*   **Hook**: "The API Guessing Game" - Handling unknown data structures.
*   **Theory**:
    *   Primitives: `string`, `number`, `boolean`.
    *   Type Inference vs. Explicit Annotations.
    *   `any`, `unknown`, `never`, and `void`.
*   **Lab**: Create a safe input-validation engine for a mock API.
*   **Hebrew Terms**: הסקת טיפוסים (Type Inference), טיפוסים פרימיטיביים (Primitives).

## Module 3: Complex Data Structures
*   **Hook**: "The Prop Drill" - Managing nested object configurations.
*   **Theory**:
    *   Interfaces vs. Type Aliases.
    *   Optional (`?`) and Readonly properties.
    *   Arrays, Tuples, and Enums (Const Enums).
*   **Lab**: Build a User Profile system with strict validation and immutable settings.
*   **Hebrew Terms**: ממשק (Interface), כינוי טיפוס (Type Alias), טיפוס נמנה (Enum).

## Module 4: Advanced Typing & Narrowing
*   **Hook**: "The Shape Shifter" - Logic that handles multiple types of input.
*   **Theory**:
    *   Union (`|`) and Intersection (`&`) types.
    *   Type Guards: `typeof`, `instanceof`, and Custom Predicates.
    *   Discriminated Unions.
*   **Lab**: Create a universal Notification System that handles different event types safely.
*   **Hebrew Terms**: איחוד (Union), חיתוך (Intersection), צמצום טיפוסים (Type Narrowing).

## Module 5: Generics (Reusability)
*   **Hook**: "Code Duplication" - Writing the same logic for Numbers, Strings, and Objects.
*   **Theory**:
    *   Generic Functions, Interfaces, and Classes.
    *   Constraints (`extends`).
    *   Generic Utility Types.
*   **Lab**: Build a generic `DataStore<T>` with CRUD operations.
*   **Hebrew Terms**: גנריות (Generics), אילוצים (Constraints).

## Module 6: OOP & Classes
*   **Hook**: "Scaling Architecture" - Organizing complex logic into manageable classes.
*   **Theory**:
    *   Access Modifiers: `public`, `private`, `protected`.
    *   Abstract Classes vs. Interfaces.
    *   Parameter Properties (Shorthand constructors).
*   **Lab**: Design a "Smart Home" simulation using inheritance and strict access control.
*   **Hebrew Terms**: הרשאת גישה (Access Modifier), מחלקה מופשטת (Abstract Class).

## Module 7: Utility Types & Productivity
*   **Hook**: "The Partial Update" - How to type an object where only some fields are updated.
*   **Theory**:
    *   `Partial<T>`, `Readonly<T>`, `Pick<T, K>`, `Omit<T, K>`, `Record<K, T>`.
*   **Lab**: Implement a configuration updater using `Partial` and `Pick`.
*   **Hebrew Terms**: טיפוסי עזר (Utility Types).

## Module 8: Ecosystem & React Integration
*   **Hook**: "Component Confusion" - Passing incorrect props to React components.
*   **Theory**:
    *   Typing React Hooks (`useState`, `useRef`).
    *   Typing Component Props and Events.
    *   Third-party libraries and `@types`.
*   **Lab**: Convert a small React component to TypeScript.
*   **Hebrew Terms**: מערכת אקולוגית (Ecosystem), קובץ הצהרה (Declaration File).

## Module 9: Advanced Features (Type-Level Programming)
*   **Hook**: "Dynamic Typing" - Automatically generating event handler types from a data object.
*   **Theory**:
    *   Mapped Types & Key Remapping.
    *   Conditional Types (`T extends U ? X : Y`).
    *   Template Literal Types.
    *   Advanced Utility Types: `ReturnType`, `Exclude`, `NonNullable`.
*   **Lab**: Build a dynamic "State & Setters" generator using type-level logic.
*   **Hebrew Terms**: טיפוסים ממופים (Mapped Types), טיפוסים מותנים (Conditional Types).

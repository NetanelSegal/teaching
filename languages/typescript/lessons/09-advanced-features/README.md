# Lesson 09: Advanced Features (Type-Level Programming)

## Goal
Master the advanced type-level programming features of TypeScript, including Mapped Types, Conditional Types, and Template Literal Types.

## The "Why?" (The Hook)
Imagine you are building a state management library. You have a state object `{ count: 0, user: "Alice" }`. You want to automatically generate a type for an "Actions" object that looks like this: `{ setCount: (v: number) => void, setUser: (v: string) => void }`.

In most languages, you would have to write this manually. In TypeScript, you can use **Mapped Types** and **Template Literals** to generate these types dynamically.

---

## Theory: Type-Level Logic

### 1. Mapped Types
Allow you to create a new type based on an existing one by iterating over its keys.
```typescript
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};
```

### 2. Conditional Types
The "if/else" of the type system.
```typescript
type IsString<T> = T extends string ? "Yes" : "No";
```

### 3. Template Literal Types
Combine strings at the type level.
```typescript
type World = "world";
type Greeting = `hello ${World}`; // "hello world"
```

### 4. Advanced Utility Types
*   **`ReturnType<T>`**: Extracts the return type of a function.
*   **`Exclude<T, U>`**: Excludes types from a union.
*   **`NonNullable<T>`**: Excludes `null` and `undefined`.

---

## Hebrew Summary (סיכום)
*   **Mapped Types (טיפוסים ממופים)**: יצירת טיפוס חדש על ידי מעבר על המפתחות של טיפוס קיים.
*   **Conditional Types (טיפוסים מותנים)**: לוגיקה של "אם-אז" בתוך מערכת הטיפוסים.
*   **Template Literals**: היכולת לחבר מחרוזות ליצירת טיפוסים מורכבים (למשל, הוספת prefix לשמות של שדות).

## External Resources
*   [TypeScript Handbook - Advanced Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

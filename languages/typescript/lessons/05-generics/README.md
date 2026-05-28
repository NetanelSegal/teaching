# Lesson 05: Generics (Reusability)

## Goal
Understand how to create reusable components that work with a variety of types while maintaining full type safety using Generics.

## The "Why?" (The Hook)
Suppose you want to write a function that takes an array and returns the last element. 
*   If you type it as `(arr: number[]) => number`, it only works for numbers.
*   If you type it as `(arr: any[]) => any`, you lose all type safety.

**Generics** allow you to say: "This function takes an array of type `T`, and returns a value of type `T`." It's a placeholder that gets filled when you call the function.

---

## Theory: Type Parameters & Constraints

### 1. Generic Functions
Use angle brackets `<T>` to define a type parameter.
```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString"); // output is type 'string'
```

### 2. Generic Interfaces & Classes
You can make entire structures generic.
```typescript
interface Box<T> {
    content: T;
}

const stringBox: Box<string> = { content: "Hello" };
```

### 3. Constraints (`extends`)
Sometimes you want a generic type to have certain properties. You can constrain it using `extends`.
```typescript
interface HasLength { length: number; }

function logLength<T extends HasLength>(arg: T): number {
    return arg.length; // Safe because T must have a length property
}
```

### 4. Default Types
You can provide a default type if one isn't specified.
```typescript
interface Container<T = string> {
    value: T;
}
```

---

## Hebrew Summary (סיכום)
*   **Generics (גנריות)**: היכולת ליצור פונקציות או אובייקטים שעובדים עם "סוג נתונים משתנה" (Placeholder).
*   **Type Parameter (פרמטר טיפוס)**: ה-`<T>` שמייצג את סוג הנתונים שייקבע בזמן השימוש.
*   **Constraints (אילוצים)**: הגבלה של ה-Generic כך שחייב להכיל תכונות מסוימות (למשל, חייב להיות אובייקט עם שדה מסוים).

## External Resources
*   [TypeScript Handbook - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

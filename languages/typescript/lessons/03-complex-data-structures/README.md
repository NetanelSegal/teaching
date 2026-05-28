# Lesson 03: Complex Data Structures

## Goal
Master the creation of complex data models using Interfaces, Type Aliases, and specialized array structures like Tuples.

## The "Why?" (The Hook)
In complex applications, you often pass large objects between functions. What happens if you rename `user.shippingAddress` to `user.address`? In JavaScript, your compiler won't help you find the 10 other functions that are now broken.

With **Interfaces**, you define a "contract". If your object doesn't match the contract, the compiler stops you immediately.

---

## Theory: Interfaces, Types & Arrays

### 1. Interfaces vs. Type Aliases
*   **Interface**: Best for defining the shape of an object or a class. They are extendable (declaration merging).
    ```typescript
    interface User { name: string; }
    ```
*   **Type Alias**: More versatile. Can represent primitives, unions, tuples, and objects.
    ```typescript
    type ID = string | number;
    ```
*   **Recommendation**: Use `interface` for public APIs and object shapes; use `type` for everything else.

### 2. Property Modifiers
*   **Optional (`?`)**: Property may or may not be present.
    ```typescript
    interface User { middleName?: string; }
    ```
*   **Readonly**: Property cannot be changed after initialization.
    ```typescript
    interface User { readonly id: number; }
    ```

### 3. Arrays & Tuples
*   **Arrays**: `string[]` or `Array<string>`.
*   **Tuples**: Fixed-length arrays with specific types at each position.
    ```typescript
    let coordinate: [number, number] = [10, 20];
    ```

### 4. Enums
A way to give friendly names to sets of values.
*   **`enum`**: Standard enum.
*   **`const enum`**: Optimized; the compiler replaces it with literal values during build.

---

## Hebrew Summary (סיכום)
*   **Interface (ממשק)**: חוזה שמגדיר איך אובייקט צריך להיראות.
*   **Optional (אופציונלי)**: שדה שלא חייב להופיע באובייקט.
*   **Tuple (טאפל)**: מערך באורך קבוע עם סוגי נתונים ספציפיים בכל מיקום.
*   **Enum (טיפוס נמנה)**: רשימה של ערכים קבועים עם שמות קריאים.

## External Resources
*   [TypeScript Handbook - Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)

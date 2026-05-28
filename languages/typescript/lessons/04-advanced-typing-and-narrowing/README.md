# Lesson 04: Advanced Typing & Narrowing

## Goal
Learn how to work with multiple types using Unions and Intersections, and how to safely "narrow" types using Type Guards and Discriminated Unions.

## The "Why?" (The Hook)
Imagine you have a function `printID(id: string | number)`. If you try to call `id.toUpperCase()`, TypeScript will error because a `number` doesn't have that method. 

How do you tell the compiler: "I've checked, and *at this point* in the code, I know for sure it's a string"? This is called **Type Narrowing**.

---

## Theory: Unions, Intersections & Guards

### 1. Union (`|`) and Intersection (`&`)
*   **Union**: A value can be one of several types.
    ```typescript
    type Result = "success" | "error";
    ```
*   **Intersection**: A type that combines multiple types.
    ```typescript
    type AdminUser = User & Permissions;
    ```

### 2. Type Narrowing (Type Guards)
Narrowing is the process of refining a broader type to a more specific one.
*   **`typeof`**: Checks for primitives (`string`, `number`).
*   **`instanceof`**: Checks for class instances.
*   **Truthiness**: `if (val) { ... }` (narrowing out `null` or `undefined`).

### 3. Discriminated Unions
The most powerful pattern in TS. You add a common literal property (a "tag") to several interfaces to help TS distinguish between them.
```typescript
interface Circle { kind: "circle"; radius: number; }
interface Square { kind: "square"; side: number; }
type Shape = Circle | Square;

function getArea(s: Shape) {
    if (s.kind === "circle") return Math.PI * s.radius ** 2; // TS knows it's a Circle!
}
```

### 4. Custom Type Predicates
Functions that return a boolean and tell TS what the type is.
```typescript
function isString(val: any): val is string {
    return typeof val === "string";
}
```

---

## Hebrew Summary (סיכום)
*   **Union (איחוד)**: משתנה שיכול להיות אחד מכמה סוגים.
*   **Intersection (חיתוך)**: שילוב של כמה טיפוסים לאחד.
*   **Narrowing (צמצום טיפוסים)**: התהליך שבו אנחנו מוודאים מה הסוג המדויק של המשתנה כדי להשתמש בו בבטחה.
*   **Discriminated Union (איחוד מובחן)**: שימוש בסימון (כמו "kind") כדי להבדיל בין סוגים שונים של אובייקטים בתוך Union.

## External Resources
*   [TypeScript Handbook - Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

# Lesson 07: Utility Types & Productivity

## Goal
Learn how to use TypeScript's built-in utility types to transform existing types into new ones without duplication.

## The "Why?" (The Hook)
Imagine you have a `Product` interface with 15 mandatory fields (id, name, price, category, etc.). Now you want to create an `updateProduct` function. 

Should the user have to provide all 15 fields just to change the price? Of course not. But do you want to manually create a new interface called `UpdateProductRequest` where everything is optional? That's a lot of double work.

**Utility Types** allow you to say: "Give me the `Product` type, but make everything optional."

---

## Theory: Built-in Transformations

### 1. `Partial<T>`
Makes all properties in `T` optional.
```typescript
type UpdateUser = Partial<User>;
```

### 2. `Readonly<T>`
Makes all properties in `T` readonly.
```typescript
const config: Readonly<Config> = { apiKey: "123" };
// config.apiKey = "456"; // Error
```

### 3. `Pick<T, K>`
Creates a type by picking a set of properties `K` from `T`.
```typescript
type UserPreview = Pick<User, "name" | "avatar">;
```

### 4. `Omit<T, K>`
Creates a type by picking all properties from `T` and then removing `K`.
```typescript
type UserWithoutPassword = Omit<User, "password">;
```

### 5. `Record<K, T>`
Constructs an object type whose property keys are `K` and whose property values are `T`.
```typescript
type UserRoles = Record<string, "Admin" | "User">;
```

---

## Hebrew Summary (סיכום)
*   **Utility Types (טיפוסי עזר)**: כלים מובנים ב-TS שמאפשרים לשנות טיפוס קיים לטיפוס חדש בקלות.
*   **Partial**: הופך את כל השדות לאופציונליים.
*   **Readonly**: הופך את כל השדות לקריאה בלבד.
*   **Pick/Omit**: בחירה או השמטה של שדות ספציפיים מתוך אובייקט.
*   **Record**: יצירת מפה (Map) עם מפתחות וערכים מסוג מסוים.

## External Resources
*   [TypeScript Handbook - Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

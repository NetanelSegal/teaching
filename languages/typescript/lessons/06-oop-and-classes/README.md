# Lesson 06: OOP & Classes

## Goal
Master Object-Oriented Programming (OOP) in TypeScript, focusing on encapsulation using access modifiers and building scalable architectures with Abstract Classes.

## The "Why?" (The Hook)
Imagine you are building a Bank Account system. You have a `balance` property. In standard JavaScript, any part of your code can accidentally do `account.balance = 1000000;`. 

In TypeScript, you can mark the balance as **`private`**. This ensures that the only way to change the balance is through your validated `deposit()` or `withdraw()` methods. This is called **Encapsulation**.

---

## Theory: Access Modifiers & Abstraction

### 1. Access Modifiers
*   **`public`** (default): Accessible from anywhere.
*   **`private`**: Only accessible within the class itself.
*   **`protected`**: Accessible within the class and its subclasses.

### 2. Parameter Properties
A shorthand way to initialize class properties directly in the constructor.
```typescript
class User {
    constructor(public name: string, private id: number) {}
}
// This is the same as declaring 'name' and 'id' as properties and assigning them in the constructor.
```

### 3. Abstract Classes
Classes that cannot be instantiated directly. They serve as "blueprints" for other classes.
*   They can contain **abstract methods** (no implementation) that subclasses MUST implement.
*   They can also contain implemented methods.

### 4. Abstract Class vs. Interface
*   **Interface**: A pure contract. It only defines the shape (no logic).
*   **Abstract Class**: A base class. It can define both the shape AND shared logic.

---

## Hebrew Summary (סיכום)
*   **Encapsulation (כמוסה)**: הגנה על מידע בתוך המחלקה כך שרק היא תוכל לשנות אותו.
*   **Access Modifiers (הרשאות גישה)**: `private` (רק במחלקה), `protected` (גם ביורשים), `public` (לכולם).
*   **Abstract Class (מחלקה מופשטת)**: מחלקת בסיס שלא ניתן ליצור ממנה אובייקט ישירות, אלא רק לרשת ממנה.

## External Resources
*   [TypeScript Handbook - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

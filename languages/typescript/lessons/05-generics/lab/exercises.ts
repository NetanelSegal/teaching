/**
 * LAB 05: Generics
 * 
 * TASK:
 * 1. Implement a generic `wrapInArray` function.
 * 2. Create a generic `Storage` interface.
 * 3. Implement a function `getProperty` that uses constraints to safely access an object key.
 */

// --- Task 1: Generic Function ---
// TODO: Implement wrapInArray<T>(value: T): T[]


// --- Task 2: Generic Interface ---
// TODO: Create an interface 'Result<T>' that has:
// success: boolean, data: T, error?: string


// --- Task 3: Constraints & KeyOf ---
// TODO: Implement getPropertyValue<T, K extends keyof T>(obj: T, key: K)
// This function should return the value of the key from the object.

const user = { id: 1, name: "Alice" };
// getPropertyValue(user, "id"); // Should work
// getPropertyValue(user, "email"); // Should throw a COMPILE error

export {};

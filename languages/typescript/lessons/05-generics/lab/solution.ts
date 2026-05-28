/**
 * LAB 05 SOLUTION
 */

// --- Task 1: Generic Function ---
function wrapInArray<T>(value: T): T[] {
    return [value];
}


// --- Task 2: Generic Interface ---
interface ApiResult<T> {
    success: boolean;
    data: T;
    error?: string;
}


// --- Task 3: Constraints & KeyOf ---
function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = { id: 1, name: "Alice" };
const id = getPropertyValue(user, "id"); // Works, id is type number

export {};

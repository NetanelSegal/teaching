/**
 * LAB 02: Primitives & Inference
 * 
 * TASK:
 * 1. Annotate the variables in the `userRecord` object.
 * 2. Fix the `processData` function to use `unknown` instead of `any`.
 * 3. Implement the `calculateAge` function with proper types and inference.
 */

// --- Task 1: Annotations ---
// TODO: Add explicit types to these variables
let userId = 101;
let userEmail = "test@example.com";
let isActive = true;


// --- Task 2: Any vs Unknown ---
// TODO: Change 'any' to 'unknown' and fix the resulting errors safely
function processData(input: any) {
    // @ts-ignore
    return input.trim();
}


// --- Task 3: Inference & Return Types ---
// TODO: Add parameter types. Let TS infer the return type.
function formatPrice(amount) {
    return `$${amount.toFixed(2)}`;
}

export {};

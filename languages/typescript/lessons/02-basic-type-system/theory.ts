/**
 * THEORY: Basic Types & Inference
 */

// 1. Explicit Annotations
let username: string = "Bob";
let age: number = 30;
let isStudent: boolean = false;

// 2. Type Inference (The "Clean" way)
let city = "Tel Aviv"; // TS infers 'string'
// city = 123; // Error: Type 'number' is not assignable to type 'string'.

// 3. The danger of 'any'
let anything: any = "Hello";
anything = 123;
anything.thisMethodDoesNotExist(); // No compile error, but WILL crash at runtime!

// 4. The safety of 'unknown'
let something: unknown = "World";
// something.toUpperCase(); // Error: 'something' is of type 'unknown'.

if (typeof something === "string") {
    console.log(something.toUpperCase()); // Safe! TS now knows it's a string.
}

// 5. Void vs Never
function logMessage(msg: string): void {
    console.log(msg);
    // return "hello"; // Error: Type 'string' is not assignable to type 'void'.
}

function throwError(msg: string): never {
    throw new Error(msg);
}

export {};

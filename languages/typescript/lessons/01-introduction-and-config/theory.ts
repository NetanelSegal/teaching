/**
 * THEORY: The Compilation Lifecycle & Basic Configuration
 * 
 * This file demonstrates how TypeScript catches errors that JavaScript ignores.
 */

// 1. The "Silent" JavaScript Bug (Mocked in TS)
// In JS, this would run and return NaN or undefined.
function calculateTotal(price: number, tax: number) {
    return price + tax;
}

// @ts-expect-error - Demonstrating that TS blocks invalid types
const result = calculateTotal(100, "10"); 
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// 2. Misspelled Properties
interface User {
    id: number;
    userName: string;
}

const user: User = {
    id: 1,
    userName: "Alice"
};

// @ts-expect-error
console.log(user.username); 
// Error: Property 'username' does not exist on type 'User'. Did you mean 'userName'?

// 3. The Power of "strict": true
// With strictNullChecks: true (enabled in our root tsconfig.json),
// TS forces us to handle potential null values.

let maybeUser: string | null = null;

// @ts-expect-error
console.log(maybeUser.length); 
// Error: 'maybeUser' is possibly 'null'.

if (maybeUser) {
    console.log(maybeUser.length); // Safe here!
}

export {}; // Ensures this is treated as a module

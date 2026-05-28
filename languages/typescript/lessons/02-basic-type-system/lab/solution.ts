/**
 * LAB 02 SOLUTION
 */

// --- Task 1: Annotations ---
let userId: number = 101;
let userEmail: string = "test@example.com";
let isActive: boolean = true;


// --- Task 2: Any vs Unknown ---
function processData(input: unknown) {
    if (typeof input === "string") {
        return input.trim();
    }
    return "";
}


// --- Task 3: Inference & Return Types ---
function formatPrice(amount: number) {
    return `$${amount.toFixed(2)}`; // TS infers return type as 'string'
}

export {};

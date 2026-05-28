/**
 * LAB 01 SOLUTION
 */

// --- Task 1: Misspelled Properties ---
const inventory = {
    itemName: "Laptop",
    priceInCents: 99900
};

const currentPrice = inventory.priceInCents; // Fixed property name


// --- Task 2: Function Typing ---
function applyDiscount(price: number, discount: number): number {
    return price - discount;
}


// --- Task 3: Null Safety ---
function getMessage(message: string | null): string {
    if (!message) {
        return "NO MESSAGE";
    }
    return message.toUpperCase(); // Safe check performed
}

export {};

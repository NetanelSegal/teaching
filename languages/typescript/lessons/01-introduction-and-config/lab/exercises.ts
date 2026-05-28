/**
 * LAB 01: Setup & The "Silent" Bug
 * 
 * TASK:
 * 1. Fix the `inventory` object. It has a hidden bug where we are accessing 
 *    the wrong property name.
 * 2. Type the `applyDiscount` function so it only accepts numbers.
 * 3. Handle a potential null value in the `getMessage` function.
 */

// --- Task 1: Misspelled Properties ---
const inventory = {
    itemName: "Laptop",
    priceInCents: 99900
};

// TODO: Fix the error below (it should access priceInCents)
// @ts-ignore
const currentPrice = inventory.priceIncents;


// --- Task 2: Function Typing ---
// TODO: Add type annotations to parameters and return type
function applyDiscount(price, discount) {
    return price - discount;
}


// --- Task 3: Null Safety ---
function getMessage(message: string | null) {
    // TODO: Fix the error below by adding a null check
    // @ts-ignore
    return message.toUpperCase();
}

export {};

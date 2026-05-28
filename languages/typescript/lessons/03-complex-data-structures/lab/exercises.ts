/**
 * LAB 03: Interfaces & Complex Types
 * 
 * TASK:
 * 1. Define an `Address` interface.
 * 2. Define a `UserAccount` interface that uses the `Address` interface.
 * 3. Create a Tuple for a `Coordinate`.
 * 4. Use an Enum for `TransactionStatus`.
 */

// --- Task 1 & 2: Interfaces ---
// TODO: Define the Address interface
// It should have: street (string), city (string), zipCode (number)

// TODO: Define the UserAccount interface
// It should have: id (readonly number), email (string), address (Address), 
// and phone (optional string)


// --- Task 3: Tuples ---
// TODO: Create a type alias 'Coordinate' as a tuple of [latitude: number, longitude: number]


// --- Task 4: Enums ---
// TODO: Create an enum for 'OrderState' with values: Pending, Shipped, Delivered, Cancelled
// Then create a variable 'currentOrder' with one of these values.

export {};

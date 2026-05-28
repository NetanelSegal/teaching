/**
 * LAB 04: Advanced Typing & Narrowing
 * 
 * TASK:
 * 1. Implement a function `padLeft` that takes a string or number and returns a padded string.
 * 2. Use a Discriminated Union for a `Notification` system (Email, SMS, Push).
 * 3. Create a custom type predicate to check if a value is a valid `User` object.
 */

// --- Task 1: Basic Narrowing ---
// TODO: Implement padLeft(value: string | number, padding: string): string
// If value is a number, treat it as a string.


// --- Task 2: Discriminated Unions ---
interface Email {
    type: "email";
    recipient: string;
    body: string;
}

interface SMS {
    type: "sms";
    phoneNumber: string;
    content: string;
}

type Notification = Email | SMS;

// TODO: Implement sendNotification(n: Notification)
// Use the 'type' property to narrow and log the correct details.


// --- Task 3: Custom Predicates ---
interface User {
    name: string;
    role: string;
}

// TODO: Implement isUser(obj: any): obj is User
// Check if 'obj' is an object and has 'name' and 'role' properties.

export {};

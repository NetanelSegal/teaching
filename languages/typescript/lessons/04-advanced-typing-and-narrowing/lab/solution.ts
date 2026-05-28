/**
 * LAB 04 SOLUTION
 */

// --- Task 1: Basic Narrowing ---
function padLeft(value: string | number, padding: string): string {
    if (typeof value === "number") {
        return padding + value.toString();
    }
    return padding + value;
}


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

function sendNotification(n: Notification) {
    switch (n.type) {
        case "email":
            console.log(`Sending Email to ${n.recipient}: ${n.body}`);
            break;
        case "sms":
            console.log(`Sending SMS to ${n.phoneNumber}: ${n.content}`);
            break;
    }
}


// --- Task 3: Custom Predicates ---
interface User {
    name: string;
    role: string;
}

function isUser(obj: any): obj is User {
    return (
        typeof obj === "object" &&
        obj !== null &&
        "name" in obj &&
        "role" in obj
    );
}

export {};

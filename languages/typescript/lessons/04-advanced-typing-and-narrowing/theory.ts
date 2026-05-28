/**
 * THEORY: Advanced Typing & Narrowing
 */

// 1. Unions and typeof narrowing
function printId(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase()); // Narrowed to string
    } else {
        console.log(id.toFixed(2));    // Narrowed to number
    }
}

// 2. Intersections
interface Bird { fly: () => void; }
interface Fish { swim: () => void; }

type Duck = Bird & Fish; // Must have both fly and swim

// 3. Discriminated Unions
interface SuccessResponse {
    status: "success";
    data: string[];
}

interface ErrorResponse {
    status: "error";
    message: string;
}

type APIResponse = SuccessResponse | ErrorResponse;

function handleResponse(res: APIResponse) {
    if (res.status === "success") {
        console.log(res.data.length); // TS knows this is SuccessResponse
    } else {
        console.log(res.message);      // TS knows this is ErrorResponse
    }
}

// 4. Custom Predicates
function isFish(pet: Bird | Fish): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

export {};

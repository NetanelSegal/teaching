/**
 * THEORY: Complex Data Structures
 */

// 1. Interfaces
interface Product {
    readonly id: number;      // Cannot be changed
    name: string;
    description?: string;     // Optional
    price: number;
}

const laptop: Product = {
    id: 1,
    name: "MacBook",
    price: 2000
};

// laptop.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

// 2. Type Aliases
type Point = {
    x: number;
    y: number;
};

type Status = "active" | "inactive" | "pending"; // Union type (preview)

const myPoint: Point = { x: 10, y: 20 };

// 3. Arrays & Tuples
const tags: string[] = ["tech", "coding", "ts"];
const rgb: [number, number, number] = [255, 0, 0]; // Tuple

// 4. Enums
enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
}

const currentRole: UserRole = UserRole.Admin;

export {};

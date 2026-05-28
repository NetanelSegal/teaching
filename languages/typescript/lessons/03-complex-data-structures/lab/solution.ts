/**
 * LAB 03 SOLUTION
 */

// --- Task 1 & 2: Interfaces ---
interface Address {
    street: string;
    city: string;
    zipCode: number;
}

interface UserAccount {
    readonly id: number;
    email: string;
    address: Address;
    phone?: string;
}

const myUser: UserAccount = {
    id: 1,
    email: "dev@ort.org",
    address: {
        street: "Main St",
        city: "Tel Aviv",
        zipCode: 12345
    }
};


// --- Task 3: Tuples ---
type Coordinate = [number, number];
const location: Coordinate = [32.0853, 34.7818];


// --- Task 4: Enums ---
enum OrderState {
    Pending = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED"
}

const currentOrder: OrderState = OrderState.Shipped;

export {};

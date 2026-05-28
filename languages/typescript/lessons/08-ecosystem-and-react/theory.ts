/**
 * THEORY: React & Ecosystem (Mocked for Logic)
 * 
 * Note: This file uses standard TS to demonstrate React patterns.
 */

// 1. Mocking React Types for demonstration
namespace React {
    export type FC<P = {}> = (props: P) => any;
    export function useState<T>(initial: T): [T, (val: T) => void] { return [initial, () => {}]; }
    export interface ChangeEvent<T> { target: T; }
}

// 2. Typing Props
interface UserCardProps {
    name: string;
    age: number;
    isAdmin?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ name, age, isAdmin }) => {
    return `User: ${name}, Age: ${age} ${isAdmin ? "(Admin)" : ""}`;
};

// 3. Typing Hooks
const [count, setCount] = React.useState<number>(0);
const [user, setUser] = React.useState<UserCardProps | null>(null);

// 4. Typing Events
const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.target.value is safe here
};

// 5. External Libraries
// When you see "import _ from 'lodash'", TS looks for @types/lodash
// to understand the functions available in lodash.

export {};

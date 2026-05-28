/**
 * THEORY: Advanced Features
 */

// 1. Template Literal Types
type Direction = "north" | "south" | "east" | "west";
type Speed = "fast" | "slow";

type Movement = `${Speed}-${Direction}`;
// "fast-north" | "slow-north" | etc.

// 2. Mapped Types
interface User {
    id: number;
    name: string;
}

type Getter<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
};

type UserGetters = Getter<User>;
// { getId: () => number, getName: () => string }

// 3. Conditional Types
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email { message: string; }
type EmailMsg = MessageOf<Email>; // string

// 4. ReturnType
const add = (a: number, b: number) => a + b;
type AddResult = ReturnType<typeof add>; // number

export {};

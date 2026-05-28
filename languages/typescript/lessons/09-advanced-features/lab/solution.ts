/**
 * LAB 09 SOLUTION
 */

// --- Task 1: Mapped Types ---
interface State {
    count: number;
    isOpen: boolean;
}

type Setters<T> = {
    [K in keyof T as `set${Capitalize<string & K>}`]: (val: T[K]) => void
};

type StateSetters = Setters<State>;


// --- Task 2: Conditional Types ---
type IsArray<T> = T extends any[] ? true : false;


// --- Task 3: Template Literals ---
type Entity = "User" | "Post" | "Comment";
type ApiEndpoints = `/api/get${Entity}`;

export {};

/**
 * LAB 09: Advanced Features
 * 
 * TASK:
 * 1. Create a `Setter` mapped type that adds 'set' prefix to keys.
 * 2. Create a `NonEmptyString` conditional type.
 * 3. Use `ReturnType` to extract a function's return type.
 */

// --- Task 1: Mapped Types ---
interface State {
    count: number;
    isOpen: boolean;
}

// TODO: Create a type 'StateSetters' that transforms State into:
// { setCount: (val: number) => void, setIsOpen: (val: boolean) => void }


// --- Task 2: Conditional Types ---
// TODO: Create a type 'IsArray<T>' that returns true if T is an array, false otherwise.


// --- Task 3: Template Literals ---
type Entity = "User" | "Post" | "Comment";
// TODO: Create a type 'ApiEndpoints' that results in:
// "/api/getUser" | "/api/getPost" | "/api/getComment"

export {};

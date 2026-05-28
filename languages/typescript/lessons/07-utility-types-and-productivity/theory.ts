/**
 * THEORY: Utility Types
 */

interface Todo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

// 1. Partial<T> - For updates
function updateTodo(id: number, fieldsToUpdate: Partial<Todo>) {
    console.log(`Updating todo ${id} with:`, fieldsToUpdate);
}

updateTodo(1, { completed: true }); // Safe and concise!

// 2. Pick<T, K> - For summaries
type TodoPreview = Pick<Todo, "id" | "title">;

const preview: TodoPreview = {
    id: 1,
    title: "Learn TS"
};

// 3. Omit<T, K> - For removing sensitive data
type TodoWithoutDescription = Omit<Todo, "description">;

// 4. Record<K, T> - For mapping
type Category = "work" | "personal" | "shopping";
const todoCounts: Record<Category, number> = {
    work: 5,
    personal: 2,
    shopping: 0
};

// 5. Readonly<T> - For immutability
const lockedTodo: Readonly<Todo> = {
    id: 1,
    title: "Cannot change",
    description: "...",
    completed: false
};
// lockedTodo.completed = true; // Error

export {};

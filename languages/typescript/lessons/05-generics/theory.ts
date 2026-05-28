/**
 * THEORY: Generics
 */

// 1. Generic Function
function getFirst<T>(arr: T[]): T | undefined {
    return arr[0];
}

const firstNum = getFirst([1, 2, 3]);    // T is number
const firstStr = getFirst(["a", "b"]);   // T is string

// 2. Generic Interface
interface Pair<T, U> {
    first: T;
    second: U;
}

const entry: Pair<string, number> = { first: "Age", second: 30 };

// 3. Constraints
interface Loggable {
    log: () => void;
}

function runLogger<T extends Loggable>(item: T) {
    item.log();
}

// 4. Generic Classes
class DataHolder<T> {
    private data: T[] = [];

    addItem(item: T) { this.data.push(item); }
    getItems(): T[] { return this.data; }
}

const stringHolder = new DataHolder<string>();
stringHolder.addItem("Hello");

export {};

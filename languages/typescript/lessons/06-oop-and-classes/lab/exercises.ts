/**
 * LAB 06: OOP & Classes
 * 
 * TASK:
 * 1. Create a `Employee` class with private `salary` and public `name`.
 * 2. Create an abstract `Vehicle` class and a concrete `Car` subclass.
 * 3. Use Parameter Properties to simplify a `Logger` class.
 */

// --- Task 1: Encapsulation ---
class Employee {
    // TODO: Add a public 'name' and a private 'salary'
    // Add a method 'setSalary(amount: number)' that validates amount > 0
    // Add a method 'getSalary()' to return the value
}


// --- Task 2: Abstraction ---
// TODO: Create an abstract class 'Vehicle'
// It should have: protected 'brand: string'
// It should have: abstract method 'move(): void'

// TODO: Create a subclass 'Car' that implements 'move()'


// --- Task 3: Parameter Properties ---
class Logger {
    // TODO: Rewrite this constructor using Parameter Properties
    private prefix: string;
    constructor(prefix: string) {
        this.prefix = prefix;
    }

    log(msg: string) {
        console.log(`${this.prefix}: ${msg}`);
    }
}

export {};

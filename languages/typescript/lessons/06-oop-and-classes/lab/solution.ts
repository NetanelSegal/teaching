/**
 * LAB 06 SOLUTION
 */

// --- Task 1: Encapsulation ---
class Employee {
    private _salary: number = 0;

    constructor(public name: string) {}

    setSalary(amount: number) {
        if (amount > 0) this._salary = amount;
    }

    getSalary() {
        return this._salary;
    }
}


// --- Task 2: Abstraction ---
abstract class Vehicle {
    constructor(protected brand: string) {}
    abstract move(): void;
}

class Car extends Vehicle {
    move(): void {
        console.log(`${this.brand} car is driving on the road.`);
    }
}


// --- Task 3: Parameter Properties ---
class Logger {
    constructor(private prefix: string) {}

    log(msg: string) {
        console.log(`${this.prefix}: ${msg}`);
    }
}

export {};

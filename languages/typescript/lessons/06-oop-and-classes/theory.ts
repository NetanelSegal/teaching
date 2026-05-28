/**
 * THEORY: OOP & Classes
 */

// 1. Basic Class with Access Modifiers
class BankAccount {
    private _balance: number = 0; // Only accessible inside this class

    constructor(public readonly accountNumber: string) {}

    public deposit(amount: number) {
        if (amount > 0) this._balance += amount;
    }

    public getBalance(): number {
        return this._balance;
    }
}

const myAccount = new BankAccount("12345");
myAccount.deposit(100);
// myAccount._balance = 500; // Error: Property '_balance' is private.

// 2. Abstract Classes
abstract class Shape {
    constructor(public color: string) {}

    abstract getArea(): number; // Subclasses MUST implement this

    printInfo() {
        console.log(`This is a ${this.color} shape with area ${this.getArea()}`);
    }
}

class Circle extends Shape {
    constructor(color: string, public radius: number) {
        super(color);
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

const myCircle = new Circle("red", 5);
myCircle.printInfo();

export {};

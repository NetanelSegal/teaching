/**
 * Theory: OOP in JavaScript
 * 
 * Objects allow us to group data and functionality together.
 */

// 1. Defining a Class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = 0;
    }

    // A method (function inside a class)
    drive(miles) {
        this.mileage += miles;
        console.log(`${this.make} ${this.model} drove ${miles} miles. Total: ${this.mileage}`);
    }

    displayInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

// 2. Creating Instances (Objects)
const myCar = new Car('Toyota', 'Corolla', 2022);
console.log(myCar.displayInfo());
myCar.drive(50);

// 3. Inheritance (Extending a Class)
class ElectricCar extends Car {
    constructor(make, model, year, batteryRange) {
        super(make, model, year); // Call the parent constructor
        this.batteryRange = batteryRange;
    }

    charge() {
        console.log(`${this.make} is charging...`);
    }
}

const myTesla = new ElectricCar('Tesla', 'Model 3', 2023, 350);
console.log(myTesla.displayInfo());
myTesla.charge();

// Lesson 9: Objects Advanced - Theory

// 1. "this" in Methods
let user = {
  name: "John",
  age: 30,
  sayHi() {
    // "this" is the current object
    console.log("Hello, my name is " + this.name);
  }
};
user.sayHi(); // Hello, my name is John

// 2. Constructors
function User(name) {
  // this = {}; (implicitly)
  this.name = name;
  this.isAdmin = false;
  // return this; (implicitly)
}

let jack = new User("Jack");
console.log(jack.name); // Jack

// 3. Optional Chaining
let user2 = {
  address: {
    city: "New York"
  }
};

console.log(user2?.address?.city); // "New York"
console.log(user2?.social?.twitter); // undefined (Safe! No error)

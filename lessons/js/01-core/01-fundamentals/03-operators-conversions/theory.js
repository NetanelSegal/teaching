// Lesson 3: Operators & Conversions - Theory

// 1. Numeric Conversion
let str = "123";
let num = Number(str); // 123
let num2 = +str;       // 123 (Shorthand)

// 2. Boolean Conversion
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false

// 3. Mathematical Operations
console.log(5 % 2);   // 1 (Remainder)
console.log(2 ** 3);  // 8 (Exponentiation: 2*2*2)

// 4. String Concatenation
console.log("my" + "string"); // "mystring"
console.log('1' + 2);         // "12"
console.log(2 + 2 + '1');     // "41"

// 5. Assignment Operators
let n = 2;
n += 5; // n = 7
n *= 2; // n = 14

// 6. Increment / Decrement
let counter = 1;
let a = ++counter; // a=2, counter=2 (Prefix: returns new value)
let b = counter++; // b=2, counter=3 (Postfix: returns old value)

/* 
  JavaScript Exercises: Functions & Callbacks
  
  These exercises focus on function architecture, arrow functions, 
  and the concept of passing functions as values (callbacks).
*/

// --- PART 1: Function Basics & Defaults ---

/* 
  Exercise 1: The Messenger (Default Parameters)
  1. Write a function 'createMessage' that takes two parameters: 'text' and 'sender'.
  2. If 'sender' is not provided, it should default to "Guest".
  3. The function should return a string: "[sender] says: [text]".
  4. Call it once with both arguments and once with only the text.
*/
// Write your code below:


/* 
  Exercise 2: Declaration vs Expression
  1. Create a function declaration 'isEven' that returns true if a number is even.
  2. Create a function expression 'isOdd' that returns true if a number is odd.
  3. Try to call both functions at the very top of your script.
  4. Which one works and why? (Write your answer in a comment).
*/
// Write your code below:


// --- PART 2: Arrow Functions ---

/* 
  Exercise 3: Concise Math
  Convert the following functions into one-line arrow functions:
  a) function add(a, b) { return a + b; }
  b) function square(n) { return n * n; }
  c) function getFullYear() { return 2024; }
*/
// Write your code below:


/* 
  Exercise 4: The String Formatter
  1. Write an arrow function 'formatName' that takes 'firstName' and 'lastName'.
  2. It should return the name in "LASTNAME, Firstname" format.
     Example: formatName("John", "Doe") -> "DOE, John"
*/
// Write your code below:


// --- PART 3: Callback Functions ---

/* 
  Exercise 5: The Transformer (Higher-Order Function)
  1. Write a function 'transform' that takes a number 'num' and a callback 'action'.
  2. It should return the result of 'action(num)'.
  3. Call 'transform' three times:
     - Once to double the number.
     - Once to square the number.
     - Once to return the negative of the number.
*/
// Write your code below:


/* 
  Exercise 6: The User Validator
  1. Write a function 'validateUser' that takes a 'username' and two callbacks: 'onSuccess' and 'onFailure'.
  2. If the username is longer than 5 characters, call 'onSuccess'.
  3. Otherwise, call 'onFailure'.
  4. Test it with different usernames and arrow functions for the callbacks.
*/
// Write your code below:


/* 
  Exercise 7: Custom Filter (Advanced)
  1. Write a function 'myFilter' that takes an array and a callback 'testFunc'.
  2. It should create a new empty array.
  3. Loop through the input array and if 'testFunc(item)' is true, add the item to the new array.
  4. Return the new array.
  5. Use it to filter out all numbers greater than 10 from [5, 12, 8, 20, 3].
*/
// Write your code below:

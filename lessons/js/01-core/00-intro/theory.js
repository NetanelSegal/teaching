// Lesson 0: Introduction to JavaScript - Theory

// This code is designed to be run in a host environment (like Node.js or a Browser)

// 1. Outputting information
// The console is our best friend for debugging and learning.
console.log("Welcome to JavaScript!"); 

// 2. Simple logic
// JS can perform calculations and handle logic.
const birthYear = 2000;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

console.log("A person born in " + birthYear + " is " + age + " years old.");

// 3. Different environments
// In a Browser, we have access to 'window' and 'document'.
// In Node.js, we have access to 'process' and 'global'.

if (typeof window !== 'undefined') {
    console.log("We are running in the Browser!");
} else if (typeof process !== 'undefined') {
    console.log("We are running in Node.js!");
}

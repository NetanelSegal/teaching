# Exercises: Variables & Math

## Level 1: Foundation
1. **Variable Swap:** 
   - Initialize `a = 5` and `b = 10`.
   - Swap their values **without** creating a third variable. 
   - *Think:* How can you use addition and subtraction to move the values around? (In Python, there is a "shortcut" for this, can you find it?)
2. **The Grocery Receipt:**
   - Create variables for `apple_price`, `apple_quantity`, `bread_price`, and `bread_quantity`.
   - Calculate the `total_cost`.
   - Apply a 10% discount to the total and print the final price.

## Level 2: Logic & Mechanics
3. **Digit Extractor:**
   - Create a variable `num = 456`.
   - Using only math operators (`//`, `%`), extract each digit into its own variable: `hundreds`, `tens`, and `ones`.
   - *Challenge:* If you change `num` to `789`, does your code still work?
4. **Time Converter:**
   - Create a variable `total_seconds = 3665`.
   - Convert this into hours, minutes, and remaining seconds.
   - *Example Output:* `1 hours, 1 minutes, 5 seconds`.
5. **The Modulo Trick:**
   - Use the modulo operator `%` to determine if a variable `n` is even or odd. Print `0` for even and `1` for odd.

## Level 3: "Think Like an Engineer"
6. **The Currency Trap:**
   - You need to add `0.1` and `0.2`. We know `0.1 + 0.2` in Python is `0.30000000000000004`.
   - Write a script that performs this addition but results in exactly `0.3`.
   - *Hint:* Think about the "Senior Tip" in the lesson. Try converting the values to integers (cents) first.
7. **Temperature Converter:**
   - Write a formula to convert Celsius to Fahrenheit: `(Celsius * 9/5) + 32`.
   - Now, write the reverse: Fahrenheit back to Celsius.
   - Ensure that if you convert 100°C to Fahrenheit and back, you get exactly `100.0`.
8. **Area of a Circle:**
   - Define `pi = 3.14159` and `radius = 7`.
   - Calculate the area (`pi * r^2`).
   - Round the result to 2 decimal places using the `round()` function.

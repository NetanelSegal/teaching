# Exercises: Loops & Iteration

## Level 1: Foundation
1. **The Counting Game:**
   - Use a `for` loop and `range()` to print all numbers from 1 to 100.
   - Now, modify it to print only the **even** numbers.
   - Now, modify it to print the numbers **backwards** from 100 to 1.
2. **The Summation:**
   - Use a `while` loop to ask the user for numbers until they enter `0`.
   - Print the total sum of all numbers entered.
3. **Multiplication Table:**
   - Use a nested `for` loop to print a multiplication table (1 to 10).
   - *Think:* Use f-strings and `\t` (tab) to make the formatting look clean like a grid.

## Level 2: Logic & Mechanics
4. **The Off-by-One Trap:**
   - You have a list `prices = [10, 20, 30, 40, 50]`.
   - Use `range()` and `len()` to iterate and print each price with its index (e.g., `Price 0 is 10`).
   - *Challenge:* Can you do this more cleanly using `enumerate()`?
5. **Searching with `for...else`:**
   - Create a list of names. Ask the user for a name to search for.
   - If the name is found, print "Found!" and stop.
   - If the loop finishes and the name wasn't found, print "Not in list" using the **`else`** block of the loop.
6. **FizzBuzz:**
   - Print numbers 1-50.
   - For multiples of 3, print "Fizz". For multiples of 5, print "Buzz". For both, print "FizzBuzz".
   - *Think:* Why is the order of your `if/elif` statements critical here?

## Level 3: "Think Like an Engineer" (Algorithmic Thinking)
7. **The Prime Guard:**
   - Write a program that takes a number `n` and determines if it is prime.
   - *Optimization:* Can you make your loop stop early? (Hint: Check up to the square root of `n`).
8. **The Collatz Conjecture:**
   - Start with `n = int(input())`.
   - While `n != 1`: 
     - If `n` is even, `n = n / 2`. 
     - If `n` is odd, `n = 3n + 1`.
   - Print every step. This is a famous unsolved math problem!
9. **The Digit Reverser:**
   - Take an integer (e.g., `1234`) and reverse it (`4321`) using only a `while` loop, modulo `%`, and floor division `//`.
   - **Do NOT convert the number to a string.**
10. **The Fibonacci Sequence:**
    - Generate the first `n` numbers of the Fibonacci sequence where each number is the sum of the two preceding ones (0, 1, 1, 2, 3, 5, 8...).
11. **Nested Pattern:**
    - Write a program that prints a "staircase" of stars based on a number `n`.
    - Example for `n=4`:
      ```text
      *
      **
      ***
      ****
      ```
    - *Challenge:* Can you print it centered like a pyramid?

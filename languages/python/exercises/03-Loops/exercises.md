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

## Nested Loops
7. **Star Rectangle:**
   - Ask the user for a `width` and `height`.
   - Use nested `for` loops to print a solid rectangle of `*` characters.
   - Example for `width=5`, `height=3`:
     ```text
     *****
     *****
     *****
     ```
8. **Number Triangle:**
   - Ask the user for `n`.
   - Print a triangle where row `i` shows the numbers `1` through `i`.
   - Example for `n=4`:
     ```text
     1
     1 2
     1 2 3
     1 2 3 4
     ```
   - *Challenge:* Right-align the numbers so the last digit of each row lines up.
9. **The Hollow Square:**
   - Ask the user for `n`.
   - Print an `n × n` square where only the **border** is `*` and the inside is spaces.
   - Example for `n=5`:
     ```text
     *****
     *   *
     *   *
     *   *
     *****
     ```
10. **Checkerboard:**
    - Ask the user for `rows` and `cols`.
    - Print a checkerboard using `#` and spaces, alternating per cell.
    - Example for `rows=4`, `cols=4`:
      ```text
      # #
       # #
      # #
       # #
      ```
11. **Pair Sum Finder:**
    - Given `numbers = [2, 7, 11, 15, 3, 6]` and a `target`, use nested loops to find **all pairs** of indices `(i, j)` where `i < j` and `numbers[i] + numbers[j] == target`.
    - Print each pair found (e.g., `(0, 2) → 2 + 11 = 13`).
    - *Think:* Why do we use `i < j` instead of checking every combination twice?
12. **2D Grid Sum:**
    - You are given a 2D list (matrix):
      ```python
      grid = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
      ]
      ```
    - Use nested loops to compute and print the sum of each **row**, then the sum of each **column**.
    - *Challenge:* Can you also find the cell with the largest value without using `max()`?
13. **Inverted Staircase:**
    - Ask the user for `n`.
    - Print a descending staircase of stars (the opposite of exercise 19).
    - Example for `n=4`:
      ```text
      ****
      ***
      **
      *
      ```
14. **Coordinate Printer:**
    - Ask the user for `rows` and `cols`.
    - Use nested loops to print every coordinate `(row, col)` in the grid, from `(0, 0)` to `(rows-1, cols-1)`.
    - *Bonus:* Print only the coordinates on the **main diagonal** when `rows == cols`.

## Level 3: "Think Like an Engineer" (Algorithmic Thinking)
15. **The Prime Guard:**
   - Write a program that takes a number `n` and determines if it is prime.
   - *Optimization:* Can you make your loop stop early? (Hint: Check up to the square root of `n`).
16. **The Collatz Conjecture:**
   - Start with `n = int(input())`.
   - While `n != 1`: 
     - If `n` is even, `n = n / 2`. 
     - If `n` is odd, `n = 3n + 1`.
   - Print every step. This is a famous unsolved math problem!
17. **The Digit Reverser:**
   - Take an integer (e.g., `1234`) and reverse it (`4321`) using only a `while` loop, modulo `%`, and floor division `//`.
   - **Do NOT convert the number to a string.**
18. **The Fibonacci Sequence:**
    - Generate the first `n` numbers of the Fibonacci sequence where each number is the sum of the two preceding ones (0, 1, 1, 2, 3, 5, 8...).
19. **Nested Pattern:**
    - Write a program that prints a "staircase" of stars based on a number `n`.
    - Example for `n=4`:
      ```text
      *
      **
      ***
      ****
      ```
    - *Challenge:* Can you print it centered like a pyramid?

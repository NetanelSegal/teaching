# Exercises: Functions & Logic

## Level 1: Foundation
1. **The Area Calculator:**
   - Write a function `calculate_area(radius)` that returns the area of a circle.
   - *Think:* Use a default value for `pi = 3.14159` but allow the user to override it with a more precise version if they want.
2. **The Greeting Machine:**
   - Write a function `greet(name, time_of_day="Day")`.
   - It should return "Good [Time], [Name]!".
   - *Think:* What happens if you call `greet("Alice")`? What about `greet("Alice", "Evening")`?
3. **The Simple Return:**
   - Write a function `is_even(n)` that returns `True` if a number is even and `False` otherwise.
   - *Senior Tip:* Can you write this in exactly **one line** of code using the `return` statement and a boolean expression?

## Level 2: Logic & Mechanics
4. **The Palindrome Helper:**
   - Write a function `is_palindrome(s)` that uses your string slicing knowledge from Lesson 4 to check if a word is a palindrome.
   - It should return a Boolean.
5. **The List Filter:**
   - Write a function `get_positives(numbers)` that takes a list of numbers and returns a **new list** containing only the numbers greater than zero.
   - *Think:* How do you ensure the original list remains unchanged?
6. **The Scope Experiment:**
   - Define a global variable `counter = 0`.
   - Write a function `increment()` that tries to add 1 to `counter`.
   - *Think:* Why does this fail without the `global` keyword? (Search for "Python Global Keyword" to understand the mechanic).

## Level 3: "Think Like an Engineer" (Algorithmic Thinking)
7. **The Recursive Power:**
   - Write a function `power(base, exponent)` that calculates the result **recursively** (the function calls itself).
   - *Base Case:* What is the result if the exponent is 0?
8. **The Mutable Default Trap:**
   - Write a function `add_to_list(item, my_list=[])`. 
   - Call it three times: `add_to_list(1)`, `add_to_list(2)`, `add_to_list(3)`.
   - *Observe:* Why does the list keep growing across calls?
   - **Refactor it:** Change the function to use `my_list=None` to fix this "Senior Pitfall."
9. **The Function Pipeline:**
   - Write three small functions: `square(n)`, `double(n)`, and `add_five(n)`.
   - Now, write a "pipeline" that takes a number and applies all three functions to it in order.
   - *Challenge:* Write a function `apply_pipeline(n, funcs)` that takes a number and a **list of functions**, applying them one by one.
10. **Flattening a List (Recursive):**
    - Write a function `flatten(nested_list)` that takes a list like `[1, [2, 3], [[4], 5]]` and returns `[1, 2, 3, 4, 5]`.
    - *Think:* This requires checking if an element is a list and calling the function again if it is.

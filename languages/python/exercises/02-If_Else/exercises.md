# Exercises: If-Else & Branching Logic

## Level 1: Foundation
1. **The Odd-Even Guard:** 
   - Write a program that takes a number and prints "Even" or "Odd". 
   - *Think:* Use the modulo trick from Lesson 1.
2. **Age Eligibility:**
   - Create a program that takes an age and prints whether the person is a "Child" (< 13), "Teenager" (13-19), or "Adult" (20+).
3. **The Simplifier:**
   - Use a **Ternary Operator** to check if a number is positive or negative and assign the result to a variable `sign`.

## Level 2: Logic & Truthiness
4. **Leap Year Challenge:**
   - A year is a leap year if it is divisible by 4, **except** for years that are divisible by 100, **unless** the year is also divisible by 400.
   - Write a program that determines if a year is a leap year.
   - *Think:* How can you combine these conditions using `and`, `or`, and `not`?
5. **The Truthiness Test:**
   - Given a variable `user_input = input("Enter something: ")`. 
   - Write an `if` statement that prints "You typed something!" only if the string is not empty, using the **Pythonic** truthiness way (don't use `!= ""`).
6. **Login System:**
   - Create two variables `username` and `password`.
   - Write a program that prints "Access Granted" only if the username is "admin" **and** the password is "1234". 
   - If the username is "admin" but the password is wrong, print "Wrong password".
   - If the username is anything else, print "User not found".

## Level 3: "Think Like an Engineer"
7. **Refactoring the Arrow:**
   - The following code is "Arrow Code." Refactor it to be "flat" using **Guard Clauses**.
   ```python
   # REFACTOR THIS
   if user_is_active:
       if user_has_permission:
           if file_exists:
               print("Reading file...")
           else:
               print("Error: File not found")
       else:
           print("Error: Access denied")
   else:
       print("Error: User inactive")
   ```
8. **The Short-Circuit Optimizer:**
   - You have two functions: `is_member()` (which takes 0.001 seconds) and `is_authorized()` (which takes 2.0 seconds).
   - You need to check if a user is **either** a member **or** authorized.
   - Write an `if` statement that uses **short-circuit evaluation** to be as fast as possible.
9. **The Zero-Safe Divider:**
   - Take two numbers `a` and `b`.
   - If `b` is zero, print "Cannot divide by zero". Otherwise, print the result of `a / b`.
   - *Challenge:* Can you do this using a Ternary Operator?

# Exercises: Exception Handling

## Level 1: Beginner
1. **Division by Zero:** Write a program that asks for two numbers and divides them. Use a `try/except` block to handle `ZeroDivisionError`.
2. **Invalid Input:** Wrap an `int(input())` call in a `try/except` block to catch `ValueError` if the user enters a non-numeric string.
3. **Multiple Exceptions:** Create a list `data = [1, 2, 3]`. Ask the user for an index. Catch both `ValueError` (if they enter a string) and `IndexError` (if the index is out of range).

## Level 2: Intermediate
4. **The `else` and `finally` Blocks:** Create a file `test.txt`. Write a function that reads the file. Use `try/except/else/finally` to ensure the file is closed even if an error occurs. (Note: use `try/finally` or a context manager for this).
5. **Custom Exceptions:** Define a class `AgeTooSmallError(Exception)`. Write a function `check_age(age)` that raises this exception if the age is less than 18. Catch it in your main code.

## Level 3: Advanced
6. **Exception Groups:** (Python 3.11+) Use `ExceptionGroup` and `except*` to handle multiple independent errors occurring during an operation.
7. **Reraising Exceptions:** Write a function that catches an error, logs a custom message like "An error occurred during DB operation", and then reraises the original exception using `raise`.
8. **Input Validation Loop:** Create a robust "Input Menu" function that continuously asks for input until valid data is provided, handling multiple potential error types in each iteration.

# Exercises: Structural Pattern Matching (match/case)

*Note: Requires Python 3.10+*

## Level 1: Beginner
1. **Command Processor:** Write a function `process_command(command)` that uses `match` to print different messages for "start", "stop", and "pause". Include a wildcard `_` for unknown commands.
2. **Type Checker:** Write a function that takes a variable and uses `match` to identify if it is an `int`, `str`, or `list`.

## Level 2: Intermediate
3. **Point Categorizer:** Create a function that takes a tuple `(x, y)` and uses pattern matching to detect:
   - `(0, 0)` -> "Origin"
   - `(x, 0)` -> "X-axis at {x}"
   - `(0, y)` -> "Y-axis at {y}"
   - `(x, y)` -> "Point at {x}, {y}"
4. **Guard Clauses:** Modify the Point Categorizer to detect if `x == y` using an `if` guard inside the `case`.

## Level 3: Advanced
5. **Nested Structure Matching:** Given a list representing a file system command like `["ls", "/home/user"]` or `["cp", "file1.txt", "file2.txt"]`, use pattern matching to extract the command and its arguments. Handle cases with 1, 2, or 3 arguments.
6. **Class Matching:** Define a class `User(name, role)`. Write a function that matches against `User` objects and greets "Admin" users differently from "Guest" users.

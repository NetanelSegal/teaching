# Exercises: Project Structure & Modules

## Level 1: Beginner
1. **The Main Guard:** Create a script `calculator.py`. Add a function `add(a, b)` and a `print` statement that calls it. Wrap the print statement in an `if __name__ == "__main__":` block. Try importing this file from another script and verify that the print statement doesn't run.
2. **Standard Library Explorer:** Write a script that uses three different modules from the Python Standard Library (e.g., `os`, `sys`, `math`, `datetime`, `random`). Use at least one function from each.

## Level 2: Intermediate
3. **Local Module Import:**
   - Create a file `string_utils.py` with a function `reverse_string(s)`.
   - Create a file `main.py` in the same directory.
   - Import `reverse_string` into `main.py` and use it on user input.
4. **Package Creation:**
   - Create a folder named `analytics/`.
   - Inside it, create an empty `__init__.py` and a module `data.py` with a list of numbers.
   - In your root directory, import the list from `analytics.data` and calculate the average.

## Level 3: Advanced
5. **Multi-Level Packages:** Create a project structure like this:
   ```text
   app/
   ├── main.py
   └── library/
       ├── __init__.py
       ├── formatting/
       │   ├── __init__.py
       │   └── text.py (has a function 'bold')
       └── math/
           ├── __init__.py
           └── logic.py (has a function 'is_even')
   ```
   Import both `bold` and `is_even` into `main.py` using absolute imports.
6. **Namespace Shadowing:** Create a file named `random.py` in your current directory. Try to `import random` and use `random.randint()`. Observe the error. Rename your file and fix the import.

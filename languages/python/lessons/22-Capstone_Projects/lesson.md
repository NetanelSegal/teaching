# Lesson 22: Capstone Projects - Building Like a Senior Engineer

**The Hook**
You've learned the syntax, the patterns, and the "Gotchas." But a bunch of `.py` files isn't a *product*. Building a Capstone project is your transition from "someone who knows Python" to "a Software Engineer." It’s where you prove you can take a vague idea and turn it into a robust, maintainable, and professional system that lives outside your code editor.

**Deep Theory & Mechanics**
A professional project isn't just "writing code." It follows a structured, repeatable lifecycle:

1.  **The Specification Phase:** Define exactly what "Done" looks like. What are the 3-5 core features? Avoid "Scope Creep"—don't add a database if a JSON file solves the problem for now.
2.  **The Architecture Phase (Separation of Concerns):** 
    *   **Domain Logic:** The "brains" of your app (classes, math, rules). It should know *nothing* about the UI or the filesystem.
    *   **Infrastructure:** The "connectors" (API calls, DB saves, File I/O).
    *   **Entry Point:** The `main.py` or CLI script that wires everything together.
3.  **The Defensive Phase:** Implementing validation and error handling early. If a user inputs "abc" instead of "123", your app should explain the error, not crash with a Traceback.

**Code Examples** (Good vs. Bad)

*Good (Separated Logic):*
```python
# logic.py (Pure logic, easy to test)
def calculate_tax(amount: float) -> float:
    if amount < 0: 
        raise ValueError("Amount cannot be negative")
    return amount * 0.17

# main.py (Handles the "Shell" / UI)
from logic import calculate_tax

def main():
    try:
        val = float(input("Enter amount: "))
        print(f"Tax is: {calculate_tax(val)}")
    except ValueError as e:
        print(f"User Error: {e}")
```

*Bad (The "Spaghetti" Script):*
```python
# All-in-one file, mixed logic and UI
def run_app():
    val = input("Enter amount: ") # Mixed UI
    if float(val) < 0: # Mixed Validation
        print("Wrong!")
    else:
        tax = float(val) * 0.17 # Hardcoded logic
        print(f"Tax: {tax}")
```

**[EXERCISE BREAK]**
1. **The Blueprint:** Write down the "Problem Statement" for your project. Then, list 3 "Technical Constraints" (e.g., "Must save to JSON", "Must handle invalid dates", "Must have 80% test coverage").
2. **The Folder Setup:** Create a professional folder structure:
   ```
   my_project/
   ├── src/
   │   ├── __init__.py
   │   ├── core.py
   │   └── utils.py
   ├── tests/
   ├── README.md
   ├── .gitignore
   └── main.py
   ```

**Edge Cases & Senior Pitfalls**
*   **The "Works on my machine" Trap:** Avoid hardcoded paths like `C:\Users\Student\data.csv`. Use `pathlib` or relative paths to ensure it runs on any OS.
*   **The Ghost Project:** A project without a `README.md` is invisible. Professional READMEs include: Installation steps, Usage examples, and a list of dependencies.
*   **Giant Functions:** If a function is more than 30 lines, it's likely "doing too much." Break it into smaller, testable units.
*   **Security 101:** Never commit API keys or passwords to Git. Use `.env` files and the `python-dotenv` library.

**Summary Checklist**
- [ ] Is my project structure clean and logical?
- [ ] Have I handled potential user errors without crashing?
- [ ] Does my `README.md` explain HOW to install and run the project?
- [ ] Are my core logic functions covered by unit tests?
- [ ] Is there a clear separation between "Business Logic" and "Input/Output"?

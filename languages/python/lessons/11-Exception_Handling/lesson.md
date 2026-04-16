# Lesson 11: Exception Handling - Building Crash-Proof Apps

In production, things **will** go wrong (files missing, internet down, invalid input). Exception handling allows your app to recover instead of crashing.

---

## 1. The `try / except` Block
```python
try:
    num = int(input("Enter a number: "))
    result = 100 / num
except ValueError:
    print("That was not a valid number!")
except ZeroDivisionError:
    print("You cannot divide by zero!")
```

---

## 2. The Full Arsenal: `else` and `finally`
- **`else`**: Runs only if **no exceptions** occurred.
- **`finally`**: Runs **no matter what** (useful for closing files or database connections).

```python
try:
    file = open("data.txt", "r")
except FileNotFoundError:
    print("File missing!")
else:
    print("File read successfully!")
finally:
    if 'file' in locals():
        file.close()
```

---

## 3. Raising Your Own Exceptions
You can force an error to happen using the `raise` keyword.
```python
def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative!")
    return age
```

---

## 4. Custom Exceptions
For large projects, you should create your own error types.
```python
class InsufficientFundsError(Exception):
    """Raised when a bank account has too little money."""
    pass

# Usage:
raise InsufficientFundsError("You only have $5.")
```

---

## 5. Edge Cases & Pitfalls
- **The "Silent Killer":** `except: pass`. 
  - **NEVER DO THIS.** It catches every single error, including system exits and keyboard interrupts, making debugging impossible.
  - **Always** catch specific exceptions: `except ValueError:`.
- **Exception Groups (Python 3.11+):** You can now raise and catch multiple exceptions at once using `ExceptionGroup` and `except*`.
- **Order of Exceptions:** Always put specific errors (`ValueError`) before general ones (`Exception`).

---

## 6. Summary Checklist
- [ ] Do I understand the difference between `else` and `finally`?
- [ ] Can I explain why `except: pass` is dangerous?
- [ ] Have I practiced creating a custom exception class?

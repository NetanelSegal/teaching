# Lesson 15: Decorators & Context Managers - Wrapping Logic

This lesson covers "Metaprogramming"—code that modifies other code.

---

## 1. Decorators (Functions that modify functions)
A decorator is a function that takes another function and extends its behavior without changing its source code.

```python
def log_call(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}...")
        result = func(*args, **kwargs)
        print(f"{func.__name__} finished.")
        return result
    return wrapper

@log_call
def say_hello(name):
    print(f"Hello {name}")

say_hello("Alice")
```

### Common Uses
- **Logging:** Track function calls.
- **Timing:** Measure performance.
- **Authorization:** Check if a user is allowed to run a function.

---

## 2. Context Managers (The `with` Statement)
Context managers handle the "Setup" and "Teardown" of a block of code.

### Class-based
Implement `__enter__` and `__exit__`.
```python
class Database:
    def __enter__(self):
        print("Connecting to DB...")
        return self
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Closing connection.")

with Database() as db:
    print("Doing work...")
```

### Generator-based (`@contextmanager`)
```python
from contextlib import contextmanager

@contextmanager
def temp_file():
    print("Creating file...")
    yield "file_handle"
    print("Deleting file...")
```

---

## 3. Edge Cases & Pitfalls
- **Losing Metadata:** When you wrap a function, its `__name__` and `__doc__` change to the wrapper's info. 
  - **Solution:** Use `@functools.wraps(func)` inside your decorator.
- **Exception Handling in Context Managers:** The `__exit__` method must decide if it wants to "swallow" an exception by returning `True`. Usually, you should let it propagate.
- **Over-decorating:** If a function has 10 decorators, it becomes very slow and hard to debug.

---

## 4. Summary Checklist
- [ ] Can I write a basic decorator from memory?
- [ ] Do I know when to use a Context Manager vs a `try/finally`?
- [ ] Have I used `@wraps` in my decorators?

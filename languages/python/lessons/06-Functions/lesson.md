# Lesson 06: Functions - Architecting Reusable Code

Functions are the primary way to organize code into logical, reusable blocks.

---

## 1. Defining a Function
```python
def greet(name="Guest"):  # "Guest" is a default parameter
    """This is a docstring—it explains what the function does."""
    return f"Hello, {name}!"

# Calling the function
message = greet("Alice")
```

---

## 2. Parameters vs Arguments
- **Parameters:** The variables in the function definition (`name`).
- **Arguments:** The actual values passed when calling the function (`"Alice"`).

### Keyword vs Positional Arguments
```python
def describe_pet(animal, name):
    print(f"I have a {animal} named {name}")

describe_pet("Dog", "Rex")          # Positional
describe_pet(name="Whiskers", animal="Cat") # Keyword (Order doesn't matter!)
```

---

## 3. Scope: Local vs Global
- **Local:** Variables created inside a function only exist inside that function.
- **Global:** Variables created outside are accessible, but you shouldn't modify them inside a function unless you use the `global` keyword (avoid this if possible!).

---

## 4. Return Values
A function without a `return` statement returns `None` by default.
**Pro Tip:** You can return multiple values as a tuple:
```python
def get_stats(nums):
    return min(nums), max(nums)

low, high = get_stats([1, 5, 10]) # Unpacking
```

---

## 5. *args and **kwargs (Advanced)
- `*args`: Allows a function to take any number of **positional** arguments (as a tuple).
- `**kwargs`: Allows a function to take any number of **keyword** arguments (as a dictionary).

---

## 6. Edge Cases & Pitfalls
- **The "Mutable Default" Trap (CRITICAL):**
  ```python
  # BAD:
  def add_item(item, items=[]):
      items.append(item)
      return items

  print(add_item(1)) # [1]
  print(add_item(2)) # [1, 2] !!! The list persists across calls.
  ```
  **Solution:** Always use `None` as a default for mutable types (lists/dicts).
  ```python
  def add_item(item, items=None):
      if items is None: items = []
      ...
  ```
- **Shadowing:** naming a local variable the same as a global variable.
- **Missing `return`:** Expecting a value from a function that doesn't return anything.

---

## 7. Summary Checklist
- [ ] Can I explain the difference between `return` and `print`?
- [ ] Do I know why I shouldn't use `[]` as a default argument?
- [ ] Have I used docstrings in my functions?

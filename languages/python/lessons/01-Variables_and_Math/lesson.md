# Lesson 01: Variables & Math - The Building Blocks of Python

Welcome to your first step in Python. This guide covers how Python stores data and how to perform calculations like a pro.

---

## 1. What is a Variable?
In Python, a variable is a name that refers to a value. Think of it as a **label** attached to an object in the computer's memory.

### Naming Rules (The "Snake Case" Standard)
Pythonistas follow the `PEP 8` style guide.
- **Good:** `user_age`, `total_price`, `is_logged_in` (Use lowercase and underscores).
- **Bad:** `UserAge`, `totalPrice`, `x` (Avoid camelCase or vague names).
- **Illegal:** `2age` (Cannot start with a number), `user-age` (No dashes).

### Dynamic Typing
Python is **dynamically typed**. You don't need to tell Python that a variable is an integer; it figures it out automatically.
```python
x = 10      # x is an int
x = "Ten"   # Now x is a str (This is allowed, but use with caution!)
```

---

## 2. Fundamental Data Types
1. **Integer (`int`):** Whole numbers. `5`, `-10`, `1000000`.
2. **Float (`float`):** Decimal numbers. `3.14`, `-0.01`, `2.0`.
3. **String (`str`):** Text. `"Hello"`, `'Python'`.
4. **Boolean (`bool`):** True or False. `True`, `False`.

### Type Checking and Casting
You can check a type using `type()` and change it using "casting".
```python
age = "25"
age_int = int(age)  # Converts string "25" to integer 25
print(type(age_int)) # Output: <class 'int'>
```

---

## 3. Mathematical Operations
Python handles math intuitively, but there are some "hidden" features.

| Operator | Name | Example | Result |
| :--- | :--- | :--- | :--- |
| `+` | Addition | `5 + 2` | `7` |
| `-` | Subtraction | `5 - 2` | `3` |
| `*` | Multiplication | `5 * 2` | `10` |
| `/` | **True Division** | `5 / 2` | `2.5` (Always returns a float) |
| `//`| **Floor Division**| `5 // 2`| `2` (Removes the decimal) |
| `%` | **Modulo** | `5 % 2` | `1` (The remainder) |
| `**`| **Exponent** | `5 ** 2`| `25` (5 squared) |

### The "Floating Point" Trap
**Scenario:** You calculate `0.1 + 0.2`.
**Result:** `0.30000000000000004`
**Why?** Computers store numbers in binary. Some decimals (like 0.1) cannot be represented perfectly. 
**Solution:** For money, use `round(value, 2)` or the `decimal` module.

---

## 4. Augmented Assignment
Instead of writing `x = x + 5`, use these shortcuts:
- `x += 5` (Add 5 to x)
- `x *= 2` (Double x)
- `x -= 1` (Decrement x)

---

## 5. Common Edge Cases & Pitfalls
- **Division by Zero:** `10 / 0` will crash your program with a `ZeroDivisionError`.
- **String Concatenation vs Addition:** `"5" + "5"` is `"55"`, but `5 + 5` is `10`.
- **Large Numbers:** Python can handle incredibly large integers (e.g., `10**100`) automatically, unlike languages like C++ or Java that have fixed limits.

---

## 6. Summary Checklist
- [ ] Do I know the difference between `/` and `//`?
- [ ] Can I explain why `0.1 + 0.2` is weird?
- [ ] Am I using `snake_case` for my variables?

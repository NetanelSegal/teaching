# Lesson 01: Variables & Math - The Building Blocks of Python

Welcome to your first step in Python. This guide covers how Python stores data and how to perform calculations like a senior engineer.

---

## ⚓ The Hook
Imagine you're building a checkout system for a grocery store. You need to keep track of the price of an apple, the quantity a customer buys, whether they have a loyalty card, and the total cost. Without **Variables**, your program has no memory. Without **Math**, it can't calculate a single transaction. Variables allow us to label data so we can use, reuse, and transform it.

---

## 🧠 Deep Theory & Mechanics

### What is a Variable?
In Python, a variable is not a box containing a value. Instead, it is a **name (label)** that refers to an object in the computer's memory. When you write `x = 10`, you are telling Python: "Create an integer object `10` and attach the label `x` to it."

### Dynamic Typing
Python is **dynamically typed**. Unlike languages like Java or C++, you don't need to declare that a variable is a "string" or an "integer." Python figures it out at runtime. This provides immense flexibility but requires discipline to avoid "type-confusion" bugs.

### Fundamental Data Types
1.  **Integer (`int`):** Whole numbers. Used for counts, indices, and discrete values.
2.  **Float (`float`):** Decimal numbers. Used for measurements and prices.
3.  **String (`str`):** Textual data. Always wrapped in quotes (`"` or `'`).
4.  **Boolean (`bool`):** Logical states: `True` or `False`.

---

## 💻 Code Examples

### Variable Naming: Good vs. Bad
Python follows the **PEP 8** style guide. We use `snake_case`.

```python
# ❌ BAD: Vague, camelCase, or illegal
x = 25
userAge = 25
2_user_age = 25 

# ✅ GOOD: Descriptive and PEP 8 compliant
user_age = 25
total_price = 99.99
is_logged_in = True
```

### Type Casting: Before vs. After
Sometimes data comes in the wrong format (e.g., a number as a string from a user input).

```python
# BEFORE: Math fails on strings
age_input = "25"
# next_year = age_input + 1  # ❌ This would CRASH (TypeError)

# AFTER: Explicit casting
age_int = int(age_input)
next_year = age_int + 1      # ✅ Works perfectly
```

### Mathematical Operations
| Operator | Name | Result of `5 [op] 2` | Note |
| :--- | :--- | :--- | :--- |
| `+` | Addition | `7` | |
| `-` | Subtraction | `3` | |
| `*` | Multiplication | `10` | |
| `/` | **True Division** | `2.5` | Always returns a `float`. |
| `//`| **Floor Division**| `2` | Drops the decimal (rounds down). |
| `%` | **Modulo** | `1` | The remainder of the division. |
| `**`| **Exponent** | `25` | 5 squared. |

---

### 💡 [EXERCISE BREAK] - Time to Practice! 
Open `exercises/01-Variables_and_Math` and complete the task.

---

## ⚠️ Edge Cases & Senior Pitfalls

### 1. The Floating Point Trap
**The Bug:** `0.1 + 0.2` results in `0.30000000000000004`.
**The Why:** Computers use binary to store numbers. Just as `1/3` can't be perfectly represented in decimal (`0.333...`), `0.1` can't be perfectly represented in binary.
**Senior Tip:** Never use floats for currency. Use the `decimal` module or store values in cents as integers.

### 2. Division by Zero
Executing `10 / 0` will raise a `ZeroDivisionError`. Always validate your denominator if it comes from user input or a variable.

### 3. Augmented Assignment
Don't be verbose. Instead of `price = price + tax`, use `price += tax`. It's cleaner and more idiomatic.

---

## ✅ Summary Checklist
- [ ] I can name variables using proper `snake_case`.
- [ ] I understand that `/` always returns a float, while `//` returns an int.
- [ ] I can explain why `0.1 + 0.2` isn't exactly `0.3`.
- [ ] I can convert a string to an integer using `int()`.
- [ ] I know how to use the modulo operator `%` to find remainders.

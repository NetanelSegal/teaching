# Lesson 02: If-Else - Branching Logic & Decision Making

In this lesson, you'll learn how to make your code "smart" by allowing it to make decisions based on data.

---

## 1. Comparison Operators (The Questions)
Every `if` statement starts with a question that results in `True` or `False`.
- `==` : Equal to
- `!=` : Not equal to
- `>`  : Greater than
- `<`  : Less than
- `>=` : Greater or equal
- `==` : (Note: Use `is` for comparing identity/None, and `==` for values).

---

## 2. The `if-elif-else` Structure
### Basic Syntax
```python
age = 18

if age >= 21:
    print("Welcome to the club.")
elif age >= 18:
    print("You can enter, but no drinks.")
else:
    print("Too young!")
```
**Important:** Python uses **indentation** (4 spaces) to define blocks. If you mess up the indent, the code won't run.

---

## 3. Logical Operators (Complex Decisions)
Combine multiple conditions using `and`, `or`, and `not`.
- **`and`**: Both must be true. `(5 > 3 and 10 < 20)` -> `True`
- **`or`**: At least one must be true. `(5 > 3 or 10 > 100)` -> `True`
- **`not`**: Reverses the result. `not True` -> `False`

### Short-Circuit Evaluation
If you have `A or B`, and `A` is `True`, Python won't even look at `B`. It already knows the whole thing is `True`. This is great for performance!

---

## 4. Truthiness (The "Pythonic" Way)
In Python, you don't always need `== True`. Almost every object has an inherent "Truthiness".
- **Falsy values:** `0`, `0.0`, `""` (empty string), `[]` (empty list), `None`, `False`.
- **Truthy values:** Everything else.

**Example:**
```python
name = input("Enter your name: ")
if name:  # This checks if name is NOT an empty string
    print(f"Hello {name}")
else:
    print("You didn't enter anything!")
```

---

## 5. The Ternary Operator (One-Liner If)
For simple assignments, you can write the `if` on one line:
`status = "Adult" if age >= 18 else "Minor"`

---

## 6. Edge Cases & Pitfalls
- **The Assignment Mistake:** Using `=` (assignment) instead of `==` (comparison).
- **Over-nesting:** Having 5 levels of `if` inside `if`. 
  - **Solution:** Use "Guard Clauses". Handle the errors early and `return` or `continue`, keeping the "main" logic flat.
- **Nested Logic Complexity:** `if not (a or b and not c)`. If you see this, break it into smaller variables!

---

## 7. Summary Checklist
- [ ] Do I understand the difference between `if` and `elif`?
- [ ] Can I list 3 things that are "Falsy"?
- [ ] Am I avoiding "Arrow Code" (deeply nested if-statements)?

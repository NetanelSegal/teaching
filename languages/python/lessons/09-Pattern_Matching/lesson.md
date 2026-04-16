# Lesson 09: Structural Pattern Matching - The Modern Switch

Introduced in Python 3.10, `match/case` is not just a replacement for `if/elif`. It's a powerful tool for **deconstructing data shapes**.

---

## 1. Basic Match
```python
status = 404

match status:
    case 200:
        print("Success")
    case 404:
        print("Not Found")
    case 500 | 501 | 502:  # Use | for "OR"
        print("Server Error")
    case _: # Wildcard (The "default" case)
        print("Unknown Status")
```

---

## 2. Matching Structures (Sequences)
You can match based on the **shape** of a list or tuple.
```python
command = ["move", "left", 10]

match command:
    case ["quit"]:
        quit()
    case ["move", direction, distance]:
        print(f"Moving {direction} by {distance}")
    case ["jump", height]:
        print(f"Jumping {height} units high")
```

---

## 3. Matching Dictionaries
```python
action = {"type": "save", "filename": "data.txt"}

match action:
    case {"type": "save", "filename": name}:
        print(f"Saving to {name}")
    case {"type": "load"}:
        print("Loading...")
```

---

## 4. Guards (`if` in `case`)
You can add extra logic to a case using the `if` keyword.
```python
match point:
    case (x, y) if x == y:
        print("Point is on the diagonal line.")
    case (x, y):
        print(f"Point at {x}, {y}")
```

---

## 5. Edge Cases & Pitfalls
- **Variable Shadowing:** If you write `case direction:`, it will match **anything** and assign it to the variable `direction`. If you wanted to match a specific constant, this will bite you!
- **Order Matters:** Python checks cases from **top to bottom**. Put specific patterns first and the wildcard `_` last.
- **Python Version:** This will crash on any version older than 3.10.

---

## 6. Summary Checklist
- [ ] Do I understand why `match` is better than `if/elif` for complex data?
- [ ] Can I use the `|` (OR) operator in a case?
- [ ] Do I know how to use a wildcard `_`?

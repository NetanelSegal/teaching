# Lesson 11: Pattern Matching - The Modern Switch on Steroids

**The Hook**
Imagine you're building a command-line tool. You need to handle user inputs like `"move 10 20"`, `"jump"`, or `"quit"`. Using `if/elif` blocks with `split()` and index checking is messy and error-prone. What if you could just describe the *shape* of the data you're looking for? Enter Structural Pattern Matching—the most significant syntax addition to Python in a decade.

**Deep Theory & Mechanics**
Introduced in Python 3.10, `match/case` is not a simple "switch" statement. It's **Structural**. It performs two main tasks:
1. **Validation**: Does the data match this specific structure (type, length, keys)?
2. **Extraction (Binding)**: If it matches, extract parts of the data into local variables automatically.

Unlike `if` statements that check truthiness, `match` checks the *pattern*. It can look deep into nested lists, dictionaries, and even custom objects to find exactly what it needs, making your code "declarative" rather than "imperative."

**Code Examples** (Good vs. Bad)

*Bad: The "Elif" Jungle (Fragile and hard to read)*
```python
def handle_command(cmd):
    parts = cmd.split()
    if len(parts) == 1 and parts[0] == "quit":
        return "Exiting..."
    elif len(parts) == 3 and parts[0] == "move":
        direction = parts[1]
        dist = parts[2]
        return f"Moving {dist} units {direction}"
    else:
        return "Unknown command"
```

*Good: The Modern Pattern Match (Clear and robust)*
```python
def handle_command(cmd):
    match cmd.split():
        case ["quit"]:
            return "Exiting..."
        case ["move", direction, distance]:
            return f"Moving {distance} units {direction}"
        case ["teleport", x, y] | ["jump", x, y]: # Multiple patterns (OR)
            return f"Relocating to ({x}, {y})"
        case _: # Wildcard catch-all
            return "Unknown command"
```

**[EXERCISE BREAK]**
1. **The Validator**: Write a `match` statement that takes a dictionary representing a user profile: `{"user": "Alice", "role": "admin", "id": 42}`. 
   - Match admins and print their name.
   - Match regular users and print their ID.
   - Use a **Guard** (`if`) to ensure the ID is positive.
2. **Shape Matcher**: Create a function that takes a list of coordinates (tuples) and matches if they are 2D `(x, y)` or 3D `(x, y, z)`.

**Edge Cases & Senior Pitfalls**
- **Variable Shadowing**: This is the #1 mistake. `case direction:` does NOT check if the value matches a constant named `direction`. It *creates* a new variable named `direction` and assigns the value to it. To match a constant, use a dotted name (e.g., `Colors.RED`) or a Guard.
- **Order Matters**: Python checks cases from **top to bottom**. Always put your most specific patterns first and the wildcard `_` last.
- **Capture and Bind**: You can use the `as` keyword to capture a whole sub-pattern: `case ["move", ("up" | "down") as direction]:`.

**Summary Checklist**
- [ ] I can use `match/case` to deconstruct lists and tuples.
- [ ] I know how to use `|` to combine multiple patterns.
- [ ] I understand that `case _:` is the "default" handler.
- [ ] I can use "Guards" (`if` inside a case) for complex logic.

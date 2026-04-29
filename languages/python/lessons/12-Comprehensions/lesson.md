# Lesson 12: Comprehensions - Elegant Collections in a Single Line

**The Hook**
Have you ever felt that `for` loops are too "loud"? You want to take a list of names, capitalize them, and filter out those starting with 'A'. In many languages, this takes 5-6 lines of boilerplate code. In Python, we do it in one elegant line that reads almost like plain English. This is the power of Comprehensions—the hallmark of "Pythonic" code.

**Deep Theory & Mechanics**
Comprehensions are syntactic sugar for creating new collections (lists, sets, dicts) from existing iterables. 
**The Anatomy:** `[expression for item in iterable if condition]`
1. **Expression**: What you want the new item to be (the transformation).
2. **For-Clause**: The source of the data (the iteration).
3. **If-Clause (Optional)**: The filter (the selection).

**Performance Note**: Comprehensions aren't just prettier; they are often faster than manual `list.append()` calls because the creation of the list happens at the C-level inside the Python interpreter, reducing the overhead of repeated function calls.

**Code Examples** (Good vs. Bad)

*Bad: The Manual Loop (Verbose and slower)*
```python
numbers = [1, 2, 3, 4, 5, 6]
evens_squared = []
for n in numbers:
    if n % 2 == 0:
        evens_squared.append(n * n)
```

*Good: The Pythonic Comprehension (Clean and fast)*
```python
numbers = [1, 2, 3, 4, 5, 6]
evens_squared = [n * n for n in numbers if n % 2 == 0]

# Works for Dictionaries too!
name_map = {n: len(n) for n in ["Alice", "Bob", "Charlie"]}
```

**[EXERCISE BREAK]**
1. **The Transformer**: Take the list `fruits = ["apple", "banana", "cherry", "kiwi", "mango"]`. Create a new list containing only fruits with the letter "a", but capitalize them.
2. **The Mapper**: Create a dictionary where the keys are numbers 1-10 and the values are their cubes, but only for even numbers.

**Edge Cases & Senior Pitfalls**
- **The "One-Liner" Trap**: Just because you *can* fit a complex nested loop into a comprehension doesn't mean you *should*. If a comprehension spans more than two lines or includes multiple nested loops, use a standard loop. **Readability is the priority.**
- **Side Effects**: Never call a function that *changes* state (like `print()` or updating a global variable) inside a comprehension. Comprehensions should be "pure"—used only for creating new data.
- **Memory Usage**: A list comprehension creates the *entire* list in memory at once. For massive datasets, use a **Generator Expression** (Lesson 13) instead.

**Summary Checklist**
- [ ] I can write List, Set, and Dictionary comprehensions.
- [ ] I know how to add an `if` condition to filter results.
- [ ] I understand when a comprehension is "too complex" for readability.
- [ ] I can explain why comprehensions are faster than manual loops.

# Lesson 10: Comprehensions - Clean & Fast Logic

Comprehensions are the most "Pythonic" way to create new collections from existing ones. They are faster and more readable than standard loops.

---

## 1. List Comprehensions
**Template:** `[expression for item in iterable if condition]`

```python
# The "Old" Way
squares = []
for n in range(10):
    if n % 2 == 0:
        squares.append(n * n)

# The "Pythonic" Way
squares = [n * n for n in range(10) if n % 2 == 0]
```

---

## 2. Dictionary Comprehensions
```python
names = ["Alice", "Bob"]
name_lengths = {name: len(name) for name in names}
# Result: {'Alice': 5, 'Bob': 3}
```

---

## 3. Set Comprehensions
```python
nums = [1, 2, 2, 3, 4, 4]
evens_set = {n for n in nums if n % 2 == 0}
# Result: {2, 4}
```

---

## 4. Generator Expressions (Memory Efficient)
If you swap `[]` for `()`, you get a **Generator**. It doesn't store the whole list in memory; it calculates each item "on the fly".
```python
large_sum = sum(n * n for n in range(1_000_000))
```
**Use this** for massive datasets where you don't need to keep the results.

---

## 5. Edge Cases & Pitfalls
- **Readability vs. Complexity:** 
  - **Bad:** `[x for y in z for x in y if x > 5 and y < 10]` 
  - **Rule:** If a comprehension spans more than 2 lines, **use a normal loop**. Code is for humans to read!
- **Side Effects:** Never use a comprehension to *do* things (like `print()`). Only use them to **create** collections.

---

## 6. Summary Checklist
- [ ] Can I convert a basic `for` loop into a list comprehension?
- [ ] Do I know when to use `()` instead of `[]`?
- [ ] Am I keeping my comprehensions simple and readable?

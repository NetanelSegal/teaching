# Lesson 03: Loops - Mastering Repetition

Loops allow you to run a block of code multiple times. In Python, there are two main types: `for` and `while`.

---

## 1. The `for` Loop (Iterating over Sequences)
The `for` loop is used when you have a collection (like a list, string, or range) and want to do something to every item.

### The `range()` function
`range(start, stop, step)` is the bread and butter of loops.
- `range(5)` -> 0, 1, 2, 3, 4
- `range(2, 6)` -> 2, 3, 4, 5
- `range(0, 10, 2)` -> 0, 2, 4, 6, 8

```python
for i in range(3):
    print(f"Attempt {i+1}")
```

---

## 2. The `while` Loop (Iterating until a Condition)
Use `while` when you don't know how many times you'll need to run, but you know when to stop.

```python
password = ""
while password != "secret":
    password = input("Enter password: ")
```

---

## 3. Loop Control: `break`, `continue`, and `else`
- **`break`**: Stop the loop immediately and exit.
- **`continue`**: Skip the rest of the *current* iteration and go to the next one.
- **`else`**: (Unique to Python!) Runs only if the loop finished **naturally** (did NOT hit a `break`).

**Example of `else` in a loop:**
```python
for n in range(2, 10):
    if n == 11:
        print("Found it!")
        break
else:
    print("Number not found in range.")
```

---

## 4. Nested Loops (Loops within Loops)
Commonly used for 2D data (matrices) or combinations.
```python
for x in range(3):
    for y in range(3):
        print(f"Coordinates: ({x}, {y})")
```
**Performance Warning:** Nested loops can be slow. A loop of 1,000 inside a loop of 1,000 runs 1,000,000 times!

---

## 5. Modern Technique: `enumerate()` and `zip()`
- **`enumerate(list)`**: Gives you both the **index** and the **value**.
- **`zip(list1, list2)`**: Iterates over two lists at the same time.

```python
names = ["Alice", "Bob"]
scores = [85, 92]

for name, score in zip(names, scores):
    print(f"{name} scored {score}")
```

---

## 6. Edge Cases & Pitfalls
- **Infinite Loops:** A `while True` loop without a `break` will freeze your computer. Always have an exit condition.
- **Modifying a list while looping:** 
  - **Bad:** `for x in my_list: my_list.remove(x)`. This skips items because the list is shifting!
  - **Good:** Loop over a **copy** of the list: `for x in my_list[:]`.
- **Off-by-One Errors:** Remembering that `range(5)` stops at 4, not 5.

---

## 7. Summary Checklist
- [ ] Do I know when to use `for` vs `while`?
- [ ] Can I explain the `for-else` behavior?
- [ ] Am I avoiding infinite loops?

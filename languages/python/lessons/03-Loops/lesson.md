# Lesson 03: Loops - Mastering Repetition

Efficiency in programming comes from automating repetitive tasks. In this lesson, we explore how to loop over data sets and handle iterations like a pro.

---

## ⚓ The Hook
Imagine you have a folder containing 10,000 photos, and you need to resize each one to fit a website. Doing this manually would take weeks. With a **Loop**, you write the resize logic **once**, and Python executes it 10,000 times in seconds. Loops are the engine of automation.

---

## 🧠 Deep Theory & Mechanics

### For vs. While
Python provides two primary ways to repeat code:
1.  **`for` loops:** Used when you know (or can calculate) how many times you need to iterate. They are designed to "walk through" a sequence (like a list or a range).
2.  **`while` loops:** Used when you want to repeat code as long as a certain condition remains true. You use these when you *don't* know exactly when you'll finish (e.g., waiting for a user to click a "Quit" button).

### The `range()` Function
`range(start, stop, step)` generates a sequence of numbers. 
- **Start:** Inclusive (default 0).
- **Stop:** **Exclusive** (The most common source of "Off-by-One" errors!).
- **Step:** The increment (default 1).

---

## 💻 Code Examples

### The `for` Loop: Traditional vs. Modern
```python
# Traditional loop with range
for i in range(5):
    print(f"Iteration {i}")

# Modern loop: Iterating over a collection
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")
```

### The `while` Loop: Safe Execution
```python
attempts = 0
while attempts < 3:
    password = input("Enter password: ")
    if password == "secret":
        print("Access Granted")
        break
    attempts += 1
else:
    print("Locked out!")
```

### Advanced Iteration: `enumerate()` and `zip()`
```python
names = ["Alice", "Bob"]
scores = [85, 92]

# ✅ Use enumerate to get the index AND the value
for i, name in enumerate(names):
    print(f"Rank {i+1}: {name}")

# ✅ Use zip to iterate over two lists simultaneously
for name, score in zip(names, scores):
    print(f"{name} got {score}")
```

---

### 💡 [EXERCISE BREAK] - Time to Practice! 
Open `exercises/03-Loops` and complete the task.

---

## ⚠️ Edge Cases & Senior Pitfalls

### 1. The Infinite Loop
A `while` loop that never reaches its exit condition will freeze your program and eat 100% of your CPU. Always ensure your condition will eventually become `False` or that you have a `break` statement.

### 2. Modifying a List while Iterating
**The Pitfall:** If you remove items from a list while looping over it, Python will skip elements because the list indices shift under its feet.
**Senior Tip:** Always loop over a **copy** of the list: `for item in my_list[:]`.

### 3. The `for...else` Curiosity
In Python, an `else` block after a loop runs **only if the loop finished naturally** (without hitting a `break`). It’s perfect for "Search" scenarios:
```python
for item in database:
    if item == "target":
        print("Found!")
        break
else:
    print("Not in database.")
```

---

## ✅ Summary Checklist
- [ ] I know when to use `for` vs `while`.
- [ ] I understand that `range(0, 10)` stops at 9, not 10.
- [ ] I can use `break` to exit a loop early and `continue` to skip an iteration.
- [ ] I can use `enumerate()` to track the current index in a loop.
- [ ] I can use `zip()` to combine two lists in a single loop.

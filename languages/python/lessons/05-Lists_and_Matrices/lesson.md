# Lesson 05: Lists & Matrices - Dynamic Collections

Lists are the primary data structure for managing collections in Python. In this lesson, we master their manipulation and explore how to build complex 2D structures like matrices.

---

## ⚓ The Hook
Imagine you're developing a "To-Do" app. You need a way to store a list of tasks, add new ones, mark some as finished (delete), and reorder them. Or, imagine you're building a Tic-Tac-Toe game—you need a **Grid** (a matrix) to represent the board. Without **Lists**, you would need a separate variable for every single item, which is impossible to scale.

---

## 🧠 Deep Theory & Mechanics

### Mutability: The Difference Maker
Unlike strings, lists are **mutable**. You can change them "in-place" without creating a new object. This makes them highly efficient for storing large amounts of data that change over time.

### Lists as Dynamic Arrays
Under the hood, Python lists are dynamic arrays. They automatically grow or shrink in memory as you add or remove items. However, inserting an item at the *beginning* of a large list is slower than adding it to the *end*, because every other item has to shift one spot over.

### Matrices (2D Lists)
A matrix is simply a list where each element is another list. Think of it as a table with rows and columns.
- `matrix[row]` gives you a list (the row).
- `matrix[row][col]` gives you the specific value at that coordinate.

---

## 💻 Code Examples

### CRUD Operations (Create, Read, Update, Delete)
```python
# 1. Create
items = ["CPU", "GPU"]

# 2. Update & Add
items.append("RAM")          # Add to end
items.insert(0, "Case")      # Add at specific index
items[1] = "Intel CPU"       # Modify existing

# 3. Delete
items.pop()                  # Remove last item
items.remove("Intel CPU")    # Remove by value
```

### Reference vs. Copy: The Senior "Gotcha"
```python
# BEFORE: The Assignment Bug
list_a = [1, 2, 3]
list_b = list_a
list_b.append(4)
print(list_a) # [1, 2, 3, 4] ❌ Wait, I only wanted to change list_b!

# AFTER: Proper Copying
list_c = list_a.copy() # or list_a[:]
list_c.append(5)
print(list_a) # [1, 2, 3, 4] ✅ list_a is safe.
```

### Traversing a Matrix
```python
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in grid:
    for value in row:
        print(value, end=" ")
    print() # New line after each row
```

---

### 💡 [EXERCISE BREAK] - Time to Practice! 
Open `exercises/05-Lists_and_Matrices` and complete the task.

---

## ⚠️ Edge Cases & Senior Pitfalls

### 1. The Reference Assignment
In Python, `list_b = list_a` does not copy the list; it creates a new **label** for the same list in memory. Changing one changes the other. This is the #1 source of bugs for junior developers.

### 2. Shallow vs. Deep Copy
`.copy()` works for simple lists. However, if your list contains *other lists* (a matrix), `.copy()` only copies the "outer" list. The "inner" lists are still shared! 
**Senior Tip:** For complex nested structures, use `copy.deepcopy()`.

### 3. IndexError
Accessing an index that doesn't exist (e.g., `my_list[len(my_list)]`) will crash your program. Remember: if a list has 5 items, the last index is **4**.

---

## ✅ Summary Checklist
- [ ] I can distinguish between mutable (lists) and immutable (strings) types.
- [ ] I know how to add, remove, and modify items in a list.
- [ ] I can explain why `list_b = list_a` can be dangerous.
- [ ] I can access and iterate over data in a 2D matrix.
- [ ] I understand the performance difference between `.append()` and `.insert(0, ...)`.

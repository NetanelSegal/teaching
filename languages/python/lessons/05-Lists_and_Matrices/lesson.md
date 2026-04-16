# Lesson 05: Lists & Matrices - Dynamic Collections

Lists are the workhorse of Python data structures. They allow you to store and manipulate ordered collections of items.

---

## 1. List Basics
Lists are **ordered** and **mutable** (can be changed).
```python
fruits = ["apple", "banana"]
fruits.append("cherry")      # Add to end
fruits.insert(1, "blueberry") # Add at index 1
fruits[0] = "green apple"    # Modify item
```

---

## 2. CRUD Operations (Create, Read, Update, Delete)
- **Create:** `items = []` or `items = list()`
- **Read:** `items[0]`, `items[-1]`, `items[1:3]`
- **Update:** `items[i] = new_value`
- **Delete:**
  - `items.pop()`: Remove and return the **last** item.
  - `items.pop(i)`: Remove and return item at index `i`.
  - `items.remove("value")`: Remove the **first occurrence** of "value".
  - `del items[i]`: Delete by index.

---

## 3. Matrices (2D Lists)
A matrix is a list where every item is another list.
```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Accessing: matrix[row][column]
print(matrix[1][1]) # 5
```
**Scenario:** To iterate over a matrix, you need **nested loops**.
```python
for row in matrix:
    for item in row:
        print(item, end=" ")
```

---

## 4. Essential Functions for Lists
- `len(list)`: How many items?
- `sorted(list)`: Returns a **new** sorted list.
- `list.sort()`: Sorts the list **in-place** (returns None).
- `sum(list)`, `min(list)`, `max(list)`: Math utilities.

---

## 5. Edge Cases & Pitfalls
- **Reference vs. Copy (CRITICAL):**
  ```python
  list_a = [1, 2, 3]
  list_b = list_a  # This is NOT a copy! Both point to the same list.
  list_b.append(4)
  print(list_a)    # Result: [1, 2, 3, 4]
  ```
  **Solution:** To copy, use `list_b = list_a.copy()` or `list_b = list_a[:]`.
- **IndexError:** Trying to access `items[10]` when the list only has 3 items.
- **Removing while Iterating:** (See Lesson 03). Always loop over a copy if you plan to delete items.

---

## 6. Summary Checklist
- [ ] Do I understand why `list_b = list_a` is dangerous?
- [ ] Can I access the 3rd element of the 2nd row in a matrix?
- [ ] Do I know when to use `.append()` vs `.extend()`?

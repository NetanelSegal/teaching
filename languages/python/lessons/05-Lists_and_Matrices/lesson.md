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

### Lists as Sequences: Indexing & Slicing
Like strings, lists are **ordered sequences**. You can grab a single item with an index (`my_list[0]`) or grab a **sub-list** with a **slice**.

The syntax is the same as for strings:

`my_list[start : stop : step]`

- **start:** Where the slice begins (inclusive). Default: `0`.
- **stop:** Where the slice ends (**exclusive** — the item at `stop` is *not* included). Default: end of list.
- **step:** How many items to skip. Default: `1`. Use `-1` to go backwards.

**Key difference from strings:** A slice of a list returns a **new list**. The original list is unchanged — but remember, if the slice contains mutable objects, those inner objects may still be shared (see shallow copy below).

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

### Slicing: Extracting Sub-lists
```python
nums = [10, 20, 30, 40, 50, 60, 70, 80]

# Syntax: [start : stop : step]
print(nums[:3])      # [10, 20, 30] — first three items
print(nums[-2:])     # [70, 80] — last two items
print(nums[2:6])     # [30, 40, 50, 60] — index 2 up to (not including) 6
print(nums[::-1])    # [80, 70, 60, 50, 40, 30, 20, 10] — reversed

# Omitting start/stop means "from the beginning" or "to the end"
print(nums[3:])      # [40, 50, 60, 70, 80] — from index 3 to the end
print(nums[:4])      # [10, 20, 30, 40] — from the start up to index 4

# Every Nth item
print(nums[::2])     # [10, 30, 50, 70] — every second element
```

*Think:* If a list has 8 items, why does `nums[2:6]` return **4** items, not 5? Because `stop` is exclusive — the same off-by-one rule you saw with `range()`.

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

### 4. Slicing Off-by-One
**The Mistake:** Expecting `nums[2:5]` to include the item at index 5.
**Reality:** The `stop` index is **exclusive**, so `nums[2:5]` gives indices `2, 3, 4` only. To include index 5, use `nums[2:6]`.

### 5. Slice vs. Shallow Copy
`nums[:]` creates a **new outer list** with the same items — a common shallow-copy trick. But for nested lists (matrices), `matrix[:]` still shares the inner row lists. Use `.copy()` for the same shallow behavior, or `copy.deepcopy()` when you need full independence.

---

## ✅ Summary Checklist
- [ ] I can distinguish between mutable (lists) and immutable (strings) types.
- [ ] I know how to add, remove, and modify items in a list.
- [ ] I can use slicing (`[start:stop:step]`) to extract, skip, or reverse parts of a list.
- [ ] I understand that slice `stop` is exclusive (the same off-by-one rule as `range()`).
- [ ] I can explain why `list_b = list_a` can be dangerous.
- [ ] I can access and iterate over data in a 2D matrix.
- [ ] I understand the performance difference between `.append()` and `.insert(0, ...)`.

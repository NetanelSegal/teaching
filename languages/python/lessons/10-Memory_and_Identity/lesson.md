# Lesson 10: Memory & Identity - Master the Python Memory Model

In Python, variables are not "boxes" that hold values; they are **labels** (names) pointing to objects in memory. Failing to understand this is the #1 cause of "ghost bugs."

**The Hook**
Run this code: `a = [1, 2, 3]; b = a; b.append(4); print(a)`.
Wait... why is `a` now `[1, 2, 3, 4]`? You never touched `a`! This is the "Two-Headed Giant" problem. Both labels (`a` and `b`) point to the **exact same spot in memory**. Changing the object via one label affects everyone else holding a label to that same object.

**Deep Theory & Mechanics**

- **Objects vs. References**: Everything in Python is an object living on the **Heap**. Variables are just references (pointers) to those objects.
- **Identity (`is`)**: Checks if two labels point to the **same unique ID** in memory.
- **Equality (`==`)**: Checks if the **data inside** the two objects is the same.
- **Reference Counting**: Python tracks how many labels are pointing to an object. When the count hits zero, Python's "Garbage Collector" deletes the object to free up RAM.
- **Object Interning**: To save memory, Python "interns" (caches) small integers (-5 to 256). 
    - If you use `x = 256; y = 256`, `x is y` will be `True`.
    - If you use `x = 257; y = 257`, `x is y` *might* still be `True` in a script because the Python compiler optimizes literal constants in the same block.
    - **The Real Test**: Use dynamic input to bypass compiler tricks: `x = int(input("257")); y = int(input("257"))`. Here, `x is y` will be `False` because 257 is outside the interned range.
    - **Rule of Thumb**: **Never use `is` for value comparison!** Always use `==`.

**Code Examples**

_Good: Using copies to protect data_

```python
import copy

original = [[1, 2], [3, 4]]

# A "Deep Copy" makes a new container AND new items inside
protected = copy.deepcopy(original)
protected[0].append(99)

print(original[0]) # [1, 2] -> Safe!
```

_Bad: Creating unintended aliases (Shallow Link)_

```python
a = [1, 2, 3]
b = a # Alias created!
b.clear()
print(a) # [] -> Data lost!
```

### 💡 [EXERCISE BREAK] - Open 'exercises/10-Memory_and_Identity' and complete the task.

**Edge Cases & Senior Pitfalls**

- **The Shallow Copy Trap**: `list.copy()` or `a[:]` only copies the top level. If your list contains other lists (nested), the inner lists are still linked!
  - _Senior Tip_: Always use `copy.deepcopy()` for nested structures.
- **Revisiting Mutable Defaults**: Now you know _why_ `def func(x=[])` is bad. That empty list `[]` is created **once** in memory when the module loads. Every time the function is called, it reuses that same memory address.
- **The `id()` Function**: You can see the actual memory address by calling `id(my_variable)`. If two variables have the same ID, they are the same object.

**Summary Checklist**

- [ ] Do I know when to use `is` vs `==`?
- [ ] Can I explain why `b = a` doesn't create a new list?
- [ ] Have I mastered the difference between a shallow and a deep copy?
- [ ] Do I understand why Python caches small integers?

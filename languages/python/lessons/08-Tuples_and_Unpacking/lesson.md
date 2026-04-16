# Lesson 08: Tuples & Unpacking - Integrity & Precision

Tuples are often misunderstood as "just immutable lists," but they serve a distinct purpose in Python architecture: **Heterogeneous Data Bundling**.

---

## 1. Tuples: The Immutable Choice
A tuple is a collection that **cannot be changed** after creation.
```python
point = (10, 20)
# point[0] = 30  # CRASH! TypeError
```

### Why use a Tuple instead of a List?
1. **Safety:** You can pass a tuple to a function and be 100% sure the function won't change your data.
2. **Performance:** Tuples are slightly faster and use less memory than lists.
3. **Dictionary Keys:** Because they are immutable, tuples can be used as keys in a dictionary (Lists cannot!).

---

## 2. Unpacking (The Pythonic Way)
Unpacking allows you to assign multiple variables at once from a sequence.

```python
person = ("Alice", 25, "Engineer")
name, age, job = person

# Swapping variables without a 'temp' variable!
a, b = 5, 10
a, b = b, a
```

### Extended Unpacking (`*`)
You can use the asterisk to capture "the rest" of the items.
```python
first, *middle, last = [1, 2, 3, 4, 5]
# first = 1, last = 5, middle = [2, 3, 4]
```

---

## 3. Returning Multiple Values
Functions often use tuples to return more than one result.
```python
def get_min_max(nums):
    return min(nums), max(nums) # Returns a tuple (1, 10)

low, high = get_min_max([1, 5, 10])
```

---

## 4. Edge Cases & Pitfalls
- **The Single Item Tuple:** To create a tuple with one item, you MUST include a comma.
  - `x = (5)` -> x is an **int** 5.
  - `x = (5,)` -> x is a **tuple** containing 5.
- **Tuples of Mutables:** A tuple is immutable, but if it contains a list, **the list can still be changed!**
  ```python
  t = (1, 2, [3, 4])
  t[2].append(5) # This works!
  ```
  **Rule:** The tuple's *references* are fixed, but the *objects* those references point to might not be.

---

## 5. Summary Checklist
- [ ] Do I know how to create a single-item tuple?
- [ ] Can I explain why a tuple can be a dictionary key?
- [ ] Have I used extended unpacking (`*`) in my code?

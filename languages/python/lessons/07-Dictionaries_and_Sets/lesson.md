# Lesson 07: Dictionaries & Sets - High-Performance Lookups

Lists are for ordering; Dictionaries and Sets are for **speed**.

---

## 1. Dictionaries (Key-Value Pairs)
A dictionary works like a real dictionary or a phone book. You look up a **unique Key** to get its **Value**.

```python
user = {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com"
}

# Accessing
print(user["name"])
# Adding/Updating
user["role"] = "Admin"
```

---

## 2. Dictionary Methods
- `.get(key, default)`: Safely get a value. Returns `default` if key is missing.
- `.keys()`, `.values()`, `.items()`: Iterate over parts of the dict.
- `.pop(key)`: Remove a key and return its value.
- `.update(other_dict)`: Merge another dictionary into this one.

---

## 3. Sets (Unique Collections)
A set is an unordered collection of **unique** items. 
**Scenario:** Use a set to instantly remove duplicates from a list.
```python
nums = [1, 2, 2, 3, 3, 3]
unique_nums = set(nums) # {1, 2, 3}
```

### Set Math
- **Union (`|`)**: All items from both.
- **Intersection (`&`)**: Only items in both.
- **Difference (`-`)**: Items in A but not in B.

---

## 4. The Power of Hashing (Big O)
Searching for an item in a list of 1,000,000 items can take 1,000,000 steps (O(n)).
Searching for a key in a Dictionary or Set takes **1 step** (O(1)), regardless of size. This is because of "Hashing."

---

## 5. Edge Cases & Pitfalls
- **KeyError:** Accessing `user["age"]` if "age" doesn't exist. Always use `.get()` or check `if "key" in user`.
- **Un-hashable Keys:** Dictionary keys must be **immutable**. You can use a string, int, or tuple as a key, but NOT a list.
- **Set Ordering:** Never rely on the order of items in a set; it changes every time.

---

## 6. Summary Checklist
- [ ] Do I know when to use a List vs a Dictionary?
- [ ] Can I explain why a Set is faster than a List for searching?
- [ ] Have I mastered the `.get()` method?

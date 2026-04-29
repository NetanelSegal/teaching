# Lesson 08: Dictionaries & Sets - Speed and Associations

Lists are for ordered sequences; Dictionaries and Sets are for **lightning-fast lookups**.

**The Hook**
Imagine searching for a name in a physical phonebook with 1,000,000 entries. If you have to read every page from the start (like a Python List), it might take hours. But if you use the "Index" tabs (A, B, C...), you jump straight to the name in seconds. Dictionaries and Sets use a mathematical trick called **Hashing** to make finding an item take the same amount of time whether you have 10 items or 10,000,000.

**Deep Theory & Mechanics**
- **Dictionary (Hash Map)**: A collection of Key-Value pairs. Keys must be **Hashable** (immutable objects like strings, ints, or tuples).
- **Set**: A collection of unique, unordered items. Think of a set as a dictionary that only has keys and no values.
- **Hashing**: Python converts your key into a unique number (hash) which points directly to a specific "bucket" in memory. This is why lookups are **O(1)** (Constant Time).
- **Sets for Math**: Sets excel at set theory operations like Union, Intersection, and Difference.

**Code Examples**

*Good: Safe access and Set magic*
```python
# Safe dictionary access
user_scores = {"alice": 95, "bob": 88}
score = user_scores.get("charlie", 0) # Returns 0 instead of crashing

# Using sets for uniqueness
emails = ["a@b.com", "c@d.com", "a@b.com"]
unique_emails = set(emails) # {'a@b.com', 'c@d.com'}

# Set Math
admin_perms = {"read", "write", "delete"}
user_perms = {"read"}
missing_perms = admin_perms - user_perms # {'write', 'delete'}
```

*Bad: Manual checks and duplicate logic*
```python
# The "clunky" way (avoid this)
if "charlie" in user_scores:
    score = user_scores["charlie"]
else:
    score = 0

# Using a list to check for existence (Slow!)
my_list = [1, 2, 3, ... 1000000]
if 999999 in my_list: # This takes a long time!
    pass
```

### 💡 [EXERCISE BREAK] - Open 'exercises/08-Dictionaries_and_Sets' and complete the task.

**Edge Cases & Senior Pitfalls**
- **KeyError**: Accessing a missing key with `[]` will crash your program. Always use `.get()` for optional data.
- **The Mutable Key Trap**: You cannot use a List as a dictionary key or a set item. Why? Because lists can change, which would change their hash, making them "lost" in the hash map.
- **Memory vs. Speed**: Dictionaries are fast but consume more memory than lists. If you are memory-constrained, you might need to reconsider your data structure.

**Summary Checklist**
- [ ] Do I use `.get()` for safe dictionary access?
- [ ] Have I used Sets to remove duplicates from my lists?
- [ ] Can I explain why a List cannot be a dictionary key?
- [ ] Do I understand the performance difference between O(n) and O(1)?

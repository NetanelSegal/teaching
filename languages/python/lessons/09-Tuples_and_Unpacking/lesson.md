# Lesson 09: Tuples & Unpacking - Data Integrity and Elegant Syntax

Tuples are more than just "immutable lists"; they are the primary way to bundle related data and return multiple values from functions.

**The Hook**
In most programming languages, swapping two variables requires a "temp" variable:
```python
# The old way
temp = a
a = b
b = temp
```
Python developers do it in one line: `a, b = b, a`. This isn't just magic—it's **Unpacking**, and it's a superpower that makes your code cleaner and less error-prone.

**Deep Theory & Mechanics**
- **Immutability**: Once a tuple is created, its contents cannot be changed. This makes them "safe" to pass around your app without worrying about accidental modification.
- **Heterogeneous Data**: While lists are usually for "many of the same thing" (like a list of numbers), tuples are for "one record of different things" (like a name, an age, and an email).
- **Unpacking**: The process of extracting tuple elements into variables. Python 3.5+ also allows "Extended Unpacking" using the `*` operator to capture remaining items.
- **Tuple Packing**: When you return `min, max`, Python automatically packs them into a single tuple.

**Code Examples**

*Good: Returning multiple values and elegant unpacking*
```python
def get_user_data(user_id):
    # Fetching data...
    return "Alice", 25, "Developer" # Packing

# Unpacking into variables
name, age, role = get_user_data(1)

# Extended Unpacking
first, *middle, last = (1, 2, 3, 4, 5)
# first=1, last=5, middle=[2, 3, 4]
```

*Bad: Using lists for fixed records*
```python
user = ["Alice", 25, "Developer"]
user[1] = 99 # Wait, Alice's age is now 99? 
             # Lists allow this, but for a "record," this is usually a bug.
```

### 💡 [EXERCISE BREAK] - Open 'exercises/09-Tuples_and_Unpacking' and complete the task.

**Edge Cases & Senior Pitfalls**
- **The Single-Item Comma**: `x = (5)` is an integer. `x = (5,)` is a tuple. The comma is what makes it a tuple, not the parentheses!
- **Mutable Objects inside Tuples**: If a tuple contains a list, you cannot replace the list itself, but you **can** modify the contents of that list.
    - *Example*: `t = (1, [2, 3]); t[1].append(4)` is valid! The tuple's *references* are immutable, not the *objects* themselves.
- **Unpacking Mismatch**: If you try to unpack a tuple into 3 variables but it only has 2 items, Python will raise a `ValueError`.

**Summary Checklist**
- [ ] Can I explain the difference between a Tuple and a List?
- [ ] Do I know how to create a single-item tuple?
- [ ] Have I used the `*` operator to capture multiple items during unpacking?
- [ ] Am I using tuples for data that should not change during the program's lifecycle?

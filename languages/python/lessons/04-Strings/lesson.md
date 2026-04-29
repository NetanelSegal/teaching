# Lesson 04: Strings - More Than Just Text

Strings are the interface between your code and the human world. In this lesson, we dive deep into how to manipulate, format, and optimize text data.

---

## ⚓ The Hook
Imagine you're building a signup form. A user enters their name as `"  jOhN dOe  "`. If you save this to your database as-is, your login system will fail, and your "Welcome" emails will look unprofessional. You need to **strip** the spaces, **capitalize** the words, and perhaps **split** the first name from the last. Strings in Python are not just text; they are powerful objects with built-in "superpowers."

---

## 🧠 Deep Theory & Mechanics

### Immutability: The Core Concept
In Python, strings are **immutable**. This means once a string is created, it cannot be changed. If you try to change a character (e.g., `s[0] = "P"`), Python will raise an error. Any "modification" you perform (like `.upper()`) actually creates a **brand new string** in memory.

### Strings as Sequences
A string is an ordered sequence of characters. This allows us to use **Indexing** to get a single character and **Slicing** to get a substring.

### Unicode & UTF-8
Python 3 handles strings as Unicode by default. This means you can store emojis, Hebrew characters, and ancient Greek scripts without worrying about "garbled text" bugs that plagued older programming languages.

---

## 💻 Code Examples

### Slicing: The "Swiss Army Knife" of Strings
```python
s = "Python Rocks"

# Syntax: [start : stop : step]
print(s[0:6])   # "Python" (0 to 5)
print(s[7:])    # "Rocks" (7 to end)
print(s[::-1])  # "skcoR nohtyP" (The classic reverse-string trick!)
```

### Modern Formatting: f-strings
```python
name = "Alice"
score = 98.567

# ✅ The Senior Way (f-strings)
print(f"User {name.upper()} scored {score:.2f}%") 
# Output: User ALICE scored 98.57%
```

### Essential Methods: Split & Join
```python
csv_data = "apple,banana,cherry"

# 1. Break it apart
fruits = csv_data.split(",") # ["apple", "banana", "cherry"]

# 2. Put it back together
pipe_data = "|".join(fruits) # "apple|banana|cherry"
```

---

### 💡 [EXERCISE BREAK] - Time to Practice! 
Open `exercises/04-Strings` and complete the task.

---

## ⚠️ Edge Cases & Senior Pitfalls

### 1. The Immutability Trap
**The Mistake:** Trying to modify a string in a loop.
```python
s = "hello"
# s[0] = "H" # ❌ TypeError
s = "H" + s[1:] # ✅ Correct (but creates a new object)
```

### 2. `find()` vs. `index()`
- `s.find("x")` returns `-1` if the character isn't found.
- `s.index("x")` **crashes** your program (ValueError) if not found.
**Senior Tip:** Use `find()` if you aren't sure the substring exists, or use the `in` operator: `if "x" in s:`.

### 3. Large String Concatenation
**Performance Warning:** Using `+` to join thousands of strings in a loop is extremely slow (O(n²)) because it creates a new string every time.
**Solution:** Collect your strings in a list and use `"".join(my_list)` at the end. It's significantly faster.

---

## ✅ Summary Checklist
- [ ] I understand that strings cannot be changed in-place (Immutability).
- [ ] I can use slicing to extract any part of a string.
- [ ] I am using f-strings for all my text formatting.
- [ ] I can convert a string to a list using `.split()` and vice-versa with `.join()`.
- [ ] I know the difference between `.find()` and `.index()`.

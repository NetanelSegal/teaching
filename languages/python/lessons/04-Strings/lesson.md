# Lesson 04: Strings - More Than Just Text

Strings are one of the most powerful and used data types in Python. In this lesson, we dive deep into how to manipulate and format them.

---

## 1. Strings as Sequences
A string is an **immutable sequence** of characters. This means once created, you cannot change a character at a specific index.

### Indexing & Slicing
```python
s = "Python Rocks"
# Indexing (Start at 0)
print(s[0])    # 'P'
print(s[-1])   # 's' (Last character)

# Slicing [start : stop : step]
print(s[0:6])  # 'Python' (Stop is NOT inclusive)
print(s[::-1]) # 'skcoR nohtyP' (Reverse a string!)
```

---

## 2. Essential String Methods
Python strings have built-in "superpowers":
- `.upper()` / `.lower()`: Change case.
- `.strip()`: Remove whitespace from ends.
- `.split(separator)`: Turn a string into a **list**.
- `.join(list)`: Turn a list into a **string**.
- `.replace(old, new)`: Swap text.
- `.find(sub)`: Get the index of a substring.

```python
data = "  apple,banana,cherry  "
clean_list = data.strip().split(",")
# Result: ["apple", "banana", "cherry"]
```

---

## 3. String Formatting (The Modern Way)
Forget `%` or `.format()`. Use **f-strings** (Python 3.6+). They are faster and more readable.

```python
name = "Alice"
age = 25
print(f"Next year, {name} will be {age + 1} years old.")
```
**Pro Tip:** You can even format numbers in f-strings: `f"{price:.2f}"` (2 decimal places).

---

## 4. Multiline Strings & Escape Characters
- Use triple quotes `"""` for text that spans multiple lines.
- Use `\` to "escape" special characters:
  - `\n`: New line
  - `\t`: Tab
  - `\\`: A literal backslash
  - `\'`: A literal quote

---

## 5. Edge Cases & Pitfalls
- **The Immutability Trap:** `s[0] = 'p'` will throw a `TypeError`. You must create a new string: `s = 'p' + s[1:]`.
- **Finding Non-Existent Text:** `s.find("not here")` returns `-1`, but `s.index("not here")` **crashes** your program. Use `find` or check `if "sub" in s` first.
- **Encoding Issues:** Always remember that Python 3 uses **Unicode** (UTF-8). If you see weird characters (like `\xed`), it's usually an encoding mismatch from an external file.

---

## 6. Summary Checklist
- [ ] Do I know how to reverse a string in one line?
- [ ] Can I explain the difference between `.split()` and `.join()`?
- [ ] Am I using f-strings for all my formatting?

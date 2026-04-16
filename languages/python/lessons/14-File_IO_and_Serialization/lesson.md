# Lesson 14: File I/O & Serialization - Data Persistence

Without File I/O, your program's data dies when the program ends. Persistence allows you to save state to the disk.

---

## 1. Modern Path Handling with `pathlib`
Forget the old `os.path`. Use `pathlib`—it treats paths as objects.

```python
from pathlib import Path

# Create a path object
data_file = Path("data/results.txt")

# Check if it exists
if data_file.exists():
    content = data_file.read_text()
```

---

## 2. Reading and Writing Files
Always use the `with` statement. It automatically closes the file for you, even if an error occurs.

```python
# Writing
with open("hello.txt", "w") as f:
    f.write("Hello World\n")

# Reading
with open("hello.txt", "r") as f:
    for line in f:
        print(line.strip())
```
**Modes:** `'r'` (read), `'w'` (write/overwrite), `'a'` (append), `'rb'`/`'wb'` (binary).

---

## 3. Serialization: JSON and CSV
Most professional data is stored in standard formats.

### JSON (For Objects/Dicts)
```python
import json

user = {"id": 1, "name": "Alice"}

# Save to file
with open("user.json", "w") as f:
    json.dump(user, f)

# Load from file
with open("user.json", "r") as f:
    data = json.load(f)
```

### CSV (For Tables/Spreadsheets)
```python
import csv

with open("students.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Score"])
    writer.writerow(["Alice", 95])
```

---

## 4. Binary Data and `pickle`
If you need to save a complex Python object (like a class instance) that isn't simple text, use `pickle`. **Warning:** Never unpickle data from a source you don't trust!

---

## 5. Edge Cases & Pitfalls
- **The Encoding Nightmare:** On Windows, `open()` might use `cp1252` instead of `utf-8`. **Always** specify: `open("file.txt", "r", encoding="utf-8")`.
- **Absolute vs Relative Paths:** A relative path like `data.txt` depends on **where you ran the script from**. Use `Path(__file__).parent` to find files relative to the script itself.
- **Overwriting Data:** Using `'w'` will erase the existing file immediately. Use `'a'` to add to the end.

---

## 6. Summary Checklist
- [ ] Am I using `pathlib` for all my path logic?
- [ ] Do I always use the `with` statement?
- [ ] Have I specified `encoding="utf-8"` in my file calls?

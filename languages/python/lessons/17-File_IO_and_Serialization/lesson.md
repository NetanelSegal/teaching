# Lesson 17: File I/O & Serialization - Data Persistence & Portability

**The Hook**
If your program's data only exists in RAM, it disappears the moment the user closes the window or the power goes out. Professional software must be "persistent"—it needs to save its state to a disk and load it back later. Whether it's a game save, a database entry, or a configuration file, mastering File I/O and Serialization is how you make your code useful in the real world.

**Deep Theory & Mechanics**
- **The Stream Concept:** Think of a file as a stream of bytes. You "open" the tap, read or write data, and you MUST "close" the tap to prevent memory leaks and file corruption.
- **`pathlib` over `os.path`:** Modern Python uses the `pathlib` module. It treats paths as objects with methods, not just strings. This makes your code cross-platform (Windows `\` vs Linux `/`) automatically.
- **The `with` Statement (Context Managers):** This is the industry standard for handling files. It guarantees the file is closed even if your code crashes in the middle.
- **Serialization:** This is the process of converting a Python object (like a dictionary) into a format that can be stored (like JSON). "Deserialization" is the reverse.

**Code Examples**

### Good: Pathlib, Context Managers, and Explicit Encoding
```python
from pathlib import Path
import json

# Define path relative to the script location
BASE_DIR = Path(__file__).parent
DATA_FILE = BASE_DIR / "users.json"

users = [{"id": 1, "name": "Aviv"}, {"id": 2, "name": "Noa"}]

# WRITING: Always specify encoding!
with open(DATA_FILE, "w", encoding="utf-8") as f:
    json.dump(users, f, indent=4)

# READING: Safety first
if DATA_FILE.exists():
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        loaded_data = json.load(f)
        print(f"Loaded {len(loaded_data)} users.")
```

### Bad: Manual Closing and String Concatenation
```python
# DON'T DO THIS
f = open("C:\\my_folder\\" + "data.txt", "w")
f.write("Some data")
# If an error happens here, the file stays open forever!
f.close() 
```

**[EXERCISE BREAK]**
1. Use `pathlib` to create a folder named `output`.
2. Inside that folder, create a CSV file named `scores.csv`.
3. Write three rows of data (Name, Score) to the file.
4. Read the file back and print only the names of students who scored above 90.

**Edge Cases & Senior Pitfalls**
- **The Windows Encoding Trap:** Windows defaults to `cp1252`, while the rest of the world uses `utf-8`. If you don't specify `encoding="utf-8"`, your Hebrew/Emoji characters will turn into garbage (``).
- **Atomic Writes:** If your program crashes while writing a 1GB file, the file is corrupted. Seniors write to a `temp_file.tmp` first, then rename it to the final filename.
- **Relative Path Confusion:** `open("file.txt")` looks in the folder where you **ran the command**, not where the script is located. Always use `Path(__file__).parent`.

**Summary Checklist**
- [ ] Am I using `pathlib` instead of string manipulation for paths?
- [ ] Is every `open()` call wrapped in a `with` statement?
- [ ] Did I explicitly set `encoding="utf-8"`?
- [ ] Do I understand the difference between `json.dump` (to file) and `json.dumps` (to string)?

# Lesson 07: Project Structure & Modules - Scaling Beyond a Single File

Professional Python development isn't just about writing code; it's about organizing it so other developers (and your future self) can understand it.

**The Hook**
You've built a library of useful functions. You copy-paste them into every new project. Suddenly, you find a bug in one of them. Now you have to find every file you've ever written and fix it in 20 places. This is the "Copy-Paste Debt." Modules and Packages allow you to write code once, store it in a central place, and use it everywhere.

**Deep Theory & Mechanics**
- **The Module**: Any `.py` file is a module. When you `import` it, Python executes the file and makes its functions/classes available.
- **The Package**: A directory containing modules and an `__init__.py` file (which can be empty). This tells Python to treat the folder as a collection of modules.
- **The Main Guard (`if __name__ == "__main__":`)**: This prevents code from running when a file is imported. It ensures "scripts" behave like "libraries" when needed.
- **The LEGB Rule (Scope Lookup)**:
    1. **L**ocal: Inside the current function.
    2. **E**nclosing: In any "parent" functions (for nested functions).
    3. **G**lobal: At the top level of the module (.py file).
    4. **B**uilt-in: Python's internal names (`len`, `range`, `print`).
- **PEP 8 Best Practices**:
    - **Imports**: Grouped into (1) Standard Library, (2) Third-party, (3) Local project imports. Use absolute imports.
    - **Naming**: `snake_case` for modules/functions, `PascalCase` for classes, `UPPER_CASE` for constants.

**Code Examples**

*Good: Standardized Project Layout*
```text
my_app/
├── main.py              # Entry point
├── config.py            # Constants
└── processors/          # Package
    ├── __init__.py
    ├── data_proc.py     # Module
    └── image_proc.py    # Module
```
*main.py:*
```python
import os               # Standard Library
import requests         # Third-party (if installed)
from processors.data_proc import clean_data # Local

def run():
    print("App starting...")

if __name__ == "__main__":
    run()
```

*Bad: Namespace Pollution and Messy Imports*
```python
from math import *       # NEVER DO THIS! Where does 'cos' come from?
import sys, os, time     # Don't bundle imports on one line
from .local import x     # Relative imports can be fragile
```

### 💡 [EXERCISE BREAK] - Open 'exercises/07-Project_Structure_and_Modules' and complete the task.

**Edge Cases & Senior Pitfalls**
- **Circular Imports**: If `A.py` imports `B.py`, and `B.py` imports `A.py`, Python gets confused. 
    - *Fix*: Move shared logic to a third file `C.py` that both import.
- **Shadowing Standard Libs**: If you name your file `random.py` and then try to `import random`, Python will import *your* file instead of the math library. You'll get strange errors.
- **The `sys.path` Trap**: Python looks for modules in the current directory and `sys.path`. If your project structure is too deep, you might need to run your code with `python -m my_app.main` to ensure paths are resolved correctly.

**Summary Checklist**
- [ ] Do all my modules have an `if __name__ == "__main__":` guard for test code?
- [ ] Are my imports organized according to PEP 8?
- [ ] Can I explain which variable Python will use if a name exists in both Local and Global scope?
- [ ] Have I avoided `import *` to keep my namespace clean?

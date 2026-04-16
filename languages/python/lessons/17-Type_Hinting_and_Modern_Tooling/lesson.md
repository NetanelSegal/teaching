# Lesson 17: Type Hinting & Modern Tooling - Industrial Python

Python was originally "guess the type." Today, we use **Static Analysis** to catch bugs before they ever run.

---

## 1. Type Hinting (The `typing` module)
Type hints don't change how the code runs, but they allow your IDE (VS Code/Cursor) and linters to warn you about mistakes.

```python
from typing import List, Optional, Union

def process_scores(names: List[str], limit: Optional[int] = None) -> Union[int, float]:
    ...
```

### Key Types
- `List[int]`, `Dict[str, float]`
- `Optional[int]`: Can be `int` or `None`.
- `Any`: Use this when you really don't know (use sparingly!).
- `Literal["red", "blue"]`: Restricts input to specific strings.

---

## 2. Environment Management (`venv`)
Never install libraries globally! Always use a virtual environment.
1. `python -m venv .venv`
2. Activate:
   - Windows: `.venv\Scripts\activate`
   - Mac/Linux: `source .venv/bin/activate`
3. `pip install requests`
4. `pip freeze > requirements.txt`

---

## 3. Linting and Formatting: `Ruff`
`Ruff` is the 2026 industry standard. It's 100x faster than older tools like Flake8 or Black.
- `ruff check .`: Finds bugs and unused code.
- `ruff format .`: Automatically makes your code beautiful and PEP 8 compliant.

---

## 4. Edge Cases & Pitfalls
- **Hinting Mutables:** Use `List[int]` instead of just `list` for better precision.
- **Runtime Myths:** Type hints are **ignored** at runtime. If you pass a string to an `int` hinted function, it will still run (and potentially crash). Use `mypy` or `pyright` to check them.
- **Circular Imports:** If Class A uses Class B in a hint, and Class B uses Class A, your app will crash. Use `from __future__ import annotations` (Python 3.7+).

---

## 5. Summary Checklist
- [ ] Am I using type hints for all my function arguments?
- [ ] Do I have a `.venv` for my project?
- [ ] Have I run `ruff` on my latest code?

# Lesson 16: Testing with Pytest - Professional Quality

In the real world, "it works on my machine" is not enough. You need automated tests to prove your code is correct and to prevent future bugs (regressions).

---

## 1. Why `pytest`?
Python has a built-in `unittest` module, but `pytest` is the industry standard because it's simpler, more powerful, and has a massive ecosystem.

---

## 2. Writing Your First Test
Create a file named `test_math.py`. Pytest will find any function starting with `test_`.

```python
def add(a, b):
    return a + b

def test_add_positive():
    assert add(2, 3) == 5

def test_add_negative():
    assert add(-1, -1) == -2
```

---

## 3. Advanced Features
### Parametrized Tests
Test multiple inputs with one function.
```python
import pytest

@pytest.mark.parametrize("a, b, expected", [
    (1, 2, 3),
    (10, 20, 30),
    (-1, 1, 0)
])
def test_add(a, b, expected):
    assert add(a, b) == expected
```

### Fixtures
Use fixtures to provide a clean state (like a database connection or a list of data) for every test.
```python
@pytest.fixture
def sample_user():
    return {"id": 1, "name": "Alice"}

def test_user_name(sample_user):
    assert sample_user["name"] == "Alice"
```

---

## 4. Mocking (Simulating Reality)
What if your function calls a real API or deletes a real database? You use **Mocking** to simulate those calls so your tests are fast and safe.

---

## 5. Edge Cases & Pitfalls
- **Test Isolation:** One test should **never** depend on the result of another test.
- **Ignoring Failures:** If a test is "flaky" (fails sometimes), don't just delete it—fix the race condition or dependency issue!
- **Not Testing Edge Cases:** Don't just test `add(1, 1)`. Test `add(0, 0)`, `add(-1, 1)`, and `add(very_large_int, 1)`.

---

## 6. Summary Checklist
- [ ] Can I run `pytest` from the terminal?
- [ ] Do I know how to use `@pytest.mark.parametrize`?
- [ ] Have I written tests for the "unhappy paths" (errors)?

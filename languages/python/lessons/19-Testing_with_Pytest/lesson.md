# Lesson 19: Testing with Pytest - The Bulletproof Codebase

**The Hook**
"But it worked on my machine!" is the most expensive sentence in software engineering. When you write code for a company, you aren't just paid to make it work today; you're paid to ensure it doesn't break tomorrow. Automated testing is your insurance policy. It allows you to change thousands of lines of code with confidence, knowing that if you break something, a red light will flash immediately.

**Deep Theory & Mechanics**
- **The Assert Statement:** In Pytest, you don't need complex `self.assertEqual` calls. A simple `assert x == y` is enough. Pytest’s "Assertion Introspection" will show you exactly what went wrong.
- **The AAA Pattern:** This is the gold standard for writing clean tests:
    1. **Arrange:** Set up the objects, data, and state needed for the test.
    2. **Act:** Call the function or method you are testing.
    3. **Assert:** Check that the result matches your expectations.
- **Fixtures:** Fixtures are functions that run before your tests to provide "Arrange" logic. They can be shared across multiple tests to keep your code DRY.
- **Parametrization:** This allows you to run the same test logic with 100 different inputs, ensuring your code handles edge cases without writing 100 different functions.

**Code Examples**

### Good: Clean Test using AAA and Parametrization
```python
import pytest

def calculate_discount(price, discount_percent):
    if not (0 <= discount_percent <= 100):
        raise ValueError("Invalid discount")
    return price * (1 - discount_percent / 100)

@pytest.mark.parametrize("price, percent, expected", [
    (100, 10, 90),
    (50, 0, 50),
    (200, 100, 0),
])
def test_calculate_discount_valid(price, percent, expected):
    # Arrange & Act (Combined for simple cases)
    result = calculate_discount(price, percent)
    
    # Assert
    assert result == expected

def test_calculate_discount_error():
    # Arrange
    invalid_percent = 110
    
    # Act & Assert
    with pytest.raises(ValueError, match="Invalid discount"):
        calculate_discount(100, invalid_percent)
```

### Bad: Messy, Unorganized Tests
```python
# DON'T DO THIS
def test_stuff():
    # No Arrange, no Act, just a mess
    x = calculate_discount(100, 10)
    if x != 90: print("Fail!")
    y = calculate_discount(50, 5)
    assert y == 47.5
    # If the first assert fails, we never know if the second one worked
```

**[EXERCISE BREAK]**
1. Create a function `is_valid_email(email)` that returns `True` if a string contains `@` and `.`.
2. Write a parametrized test with at least 5 different email examples (some valid, some invalid).
3. Use a `pytest.fixture` to provide a "clean database" (just a list of strings) to a test that checks if a user is in the list.

**Edge Cases & Senior Pitfalls**
- **The "Flaky Test" Nightmare:** A test that passes 90% of the time and fails 10% of the time is worse than no test at all. It destroys trust in the CI/CD pipeline. Usually caused by race conditions or external dependencies (APIs, time).
- **Testing Implementation, Not Behavior:** Don't test *how* a function works internally; test *what* it returns. If you change the internal logic but the result is the same, the test should still pass.
- **Mocking Overkill:** If you mock everything, you aren't testing your code; you're testing your mocks. Use real objects whenever possible.

**Summary Checklist**
- [ ] Is my test following the **Arrange, Act, Assert** structure?
- [ ] Am I using `pytest.raises` to test my error handling?
- [ ] Have I removed all "print" statements from my tests in favor of assertions?
- [ ] Do my tests run in isolation (they don't depend on each other)?

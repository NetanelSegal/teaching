# Exercises: Testing with Pytest

## Level 1: Beginner
1. **First Test:** Install `pytest`. Create a simple function `add(a, b)` and a test file `test_math.py` with a test for it.
2. **Asserting Failures:** Write a test that intentionally fails and observe the `pytest` output.
3. **Running Tests:** Run `pytest` from the command line and explain the output.

## Level 2: Intermediate
4. **Parametrized Tests:** Use `@pytest.mark.parametrize` to test a `is_even(n)` function with multiple inputs in a single test function.
5. **Fixtures:** Create a `@pytest.fixture` that provides a sample dictionary of data to multiple test functions.
6. **Testing Exceptions:** Use `with pytest.raises(ZeroDivisionError)` to verify that a function correctly raises an exception.

## Level 3: Advanced
7. **Mocking:** Use `pytest-mock` or `unittest.mock` to simulate a database call in a function, allowing you to test the function's logic without a real database.
8. **Testing Classes:** Write tests for a `BankAccount` class, ensuring that the state (balance) is correctly updated across multiple method calls.
9. **Coverage:** Run tests with `pytest-cov` to see which parts of your code are not yet covered by tests.

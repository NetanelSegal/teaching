# Project 5: The Unit Testing Challenge

## 🌟 The Challenge
Professional code isn't just code that works—it's code that stays working. Take on "The Unit Testing Challenge" by building a full test suite for one of your previous projects (like the Budget Tracker). You'll master `pytest`, learn how to use fixtures and mocks to isolate logic, and strive for 100% code coverage.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** Unit Testing, Mocking, Test Coverage.
- **Internal Reference:** [Lesson 19: Testing](../../../lessons/19-Testing_with_Pytest/), [Lesson 06: Functions](../../../lessons/06-Functions/)
- **External Docs:** [Pytest Documentation](https://docs.pytest.org/), [Mocking with unittest.mock](https://docs.python.org/3/library/unittest.mock.html)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install pytest pytest-cov`
3. Ensure your structure follows the ORT standard:
   - `src/` (Existing project logic)
   - `tests/` (Your test suite)
   - `conftest.py` (Global fixtures)

### Step 3: Designing the Test Plan
- Identify the "Critical Path." (e.g., "What are the most important functions? Math calculations, data saving, input validation.")
- Create a list of test cases (Happy Path, Edge Cases, Error Cases) in `tests/README.md`.

### Step 4: Building the "Brains" (Core Tests)
- Implement your tests in `tests/test_core.py`.
- **Engineering Standard:** Use Pytest Fixtures to set up data once and reuse it across multiple tests. Use Mocks for external dependencies like files or APIs.

### Step 5: The Interface (Running it up)
- Run your tests using the command line: `pytest`.
- Use `pytest --cov=src` to check your code coverage and identify untested areas.

### Step 6: Defensive Engineering (Testing for failure)
- Write "Negative Tests" to ensure your app fails gracefully. (e.g., "Does the app raise a ValueError when passed text instead of a number?")
- Verify that your `try/except` blocks are actually working as intended.

### Step 7: Validation
- Ensure all tests pass with a green checkmark.
- Review your test code for clarity and maintainability (tests are code too!).

## 🚀 Going Beyond (Stretch Goals)
- **Parameterized Testing:** Use `@pytest.mark.parametrize` to run the same test with 10 different sets of inputs.
- **Integration Tests:** Write a test that verifies the full flow from user input to file save and back.
- **CI Simulation:** Set up a simple shell script (`run_tests.sh`) that lints your code and runs tests in one go.

## 📚 Standard Resources
- [Project Roadmap](../../../projects/roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)

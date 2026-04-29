# Exercises: Type Hinting & Modern Tooling

## Level 1: Beginner
1. **Basic Hints:** Annotate a function `add(a, b)` to take two integers and return an integer.
2. **List Hints:** Annotate a function `average(numbers)` to take a list of floats and return a float.
3. **Optional Hints:** Use `Optional[str]` to annotate a function parameter that can be either a string or `None`.

## Level 2: Intermediate
4. **Union & Any:** Use `Union[int, float]` to annotate a function that can accept both integers and floats. Use `Any` for a function that truly accepts anything.
5. **Callable Hints:** Annotate a function that takes another function (a callback) as an argument.
6. **Virtual Environments:**
   - Create a new virtual environment using `python -m venv .venv`.
   - Activate it and install the `requests` library.
   - Use `pip freeze > requirements.txt` to save your dependencies.
7. **Ruff Linting:** Install `ruff`. Run `ruff check .` on a script with unused imports and formatting issues. Fix the issues using `ruff format .`.

## Level 3: Advanced
8. **TypedDict:** Use `typing.TypedDict` to define a fixed structure for a dictionary (e.g., a `UserConfig` with specific keys and types).
9. **Generics:** Use `TypeVar` to create a generic function `first_element(lst)` that returns the first item of a list, maintaining the type of the elements.
10. **Final & Literal:** Use `Final` to mark a constant and `Literal` to restrict a parameter to specific values (e.g., `Literal['GET', 'POST']`).

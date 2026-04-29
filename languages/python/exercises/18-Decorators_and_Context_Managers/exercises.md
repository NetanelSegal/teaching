# Exercises: Decorators & Context Managers

## Level 1: Beginner
1. **Simple Logger:** Create a decorator `log_call` that prints "Calling function [name]" every time the decorated function is executed.
2. **Timer Decorator:** Create a decorator that measures the execution time of a function.
3. **Basic Context Manager:** Use the `with` statement and `open()` to write to a file, explaining why this is better than manual `close()`.

## Level 2: Intermediate
4. **Decorator with Arguments:** Create a decorator `repeat(n)` that executes the decorated function `n` times.
5. **Class-based Context Manager:** Create a class `Timer` with `__enter__` and `__exit__` methods that prints the elapsed time of the block it wraps.
6. **@contextmanager:** Rewrite the `Timer` context manager using the `contextlib.contextmanager` decorator.

## Level 3: Advanced
7. **Memoization:** Implement a `memoize` decorator to cache function results (e.g., for Fibonacci) to improve performance.
8. **Auth Decorator:** Simulate a simple authorization decorator that checks if a user's role is "Admin" before allowing access to a function.
9. **Nested Decorators:** Apply multiple decorators to a single function and observe the order of execution.

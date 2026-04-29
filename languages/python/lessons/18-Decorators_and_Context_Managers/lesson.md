# Lesson 18: Decorators & Context Managers - Mastering Metaprogramming

**The Hook**
Have you ever wanted to add a "Loading..." spinner to 50 different functions without touching their code? Or maybe you want to log every time a specific user accesses a database? In Python, you don't copy-paste that logic. You use Decorators and Context Managers. These are the tools of "Metaprogramming"—writing code that manipulates other code. They turn messy, repetitive scripts into elegant, professional systems.

**Deep Theory & Mechanics**
- **First-Class Functions:** In Python, functions are objects. You can pass them as arguments, return them from other functions, and store them in variables.
- **Closures:** A closure is a function that "remembers" the environment it was created in. When a nested function references a variable from its parent scope, that variable is "closed over" and persists even after the parent function finished executing. This is the engine behind decorators.
- **The Decorator Pattern:** A decorator is a higher-order function that takes a function, wraps it in a new "wrapper" function, and returns that wrapper.
- **`functools.wraps`:** When you wrap a function, you effectively replace it. Without `@wraps`, the original function's name and documentation are lost (replaced by the wrapper's). `@wraps` copies the metadata back to the wrapper.
- **Context Managers:** These manage the lifecycle of a resource (Setup -> Do Work -> Teardown). They are most commonly used via the `with` statement.

**Code Examples**

### Good: Decorator with Closure and `@wraps`
```python
from functools import wraps
import time

def timer(func):
    """A decorator that prints the execution time."""
    @wraps(func)
    def wrapper(*args, **kwargs):
        # This is a closure: it 'remembers' the 'func' variable
        start_time = time.perf_counter()
        result = func(*args, **kwargs)
        end_time = time.perf_counter()
        print(f"Function {func.__name__} took {end_time - start_time:.4f}s")
        return result
    return wrapper

@timer
def heavy_computation():
    """Simulates a complex task."""
    time.sleep(1)
    return "Done!"

# Metadata is preserved thanks to @wraps
print(heavy_computation.__name__) # Output: heavy_computation
print(heavy_computation.__doc__)  # Output: Simulates a complex task.
```

### Bad: Manual Resource Management
```python
# DON'T DO THIS
db = connect_to_db()
try:
    data = db.query("SELECT * FROM users")
    # What if we forget to close? Or if the query crashes?
finally:
    db.close()
```

**[EXERCISE BREAK]**
1. Write a decorator `@debug` that prints the arguments (`args` and `kwargs`) passed to a function before executing it.
2. Use `@wraps` to ensure the function’s metadata is kept.
3. Create a class-based Context Manager `ManagedFile` that opens a file and prints "Closing file..." when it exits.

**Edge Cases & Senior Pitfalls**
- **Losing Identity:** If you forget `@wraps`, debugging becomes a nightmare because all your decorated functions will report their name as `"wrapper"`.
- **The "Stateful Decorator" Trap:** If your decorator stores state (like a counter) in a global variable, it will be shared across all functions it decorates. Use a class or a local closure if you need per-function state.
- **Exception Swallowing:** In a Context Manager's `__exit__`, if you return `True`, you "swallow" the exception, preventing it from crashing the program. Only do this if you actually handled the error!

**Summary Checklist**
- [ ] Can I explain how a closure "remembers" variables?
- [ ] Am I using `@wraps(func)` in every decorator I write?
- [ ] Do I understand why `*args` and `**kwargs` are essential for generic wrappers?
- [ ] Do I know when to use `@contextmanager` (generator-based) vs. a class-based context manager?

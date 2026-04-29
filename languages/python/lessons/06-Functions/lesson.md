# Lesson 06: Functions - The Building Blocks of Logic

Functions are the primary way to organize code into logical, reusable, and testable blocks. They allow you to define a process once and execute it anywhere.

**The Hook**
Imagine you are building a calculator. Without functions, every time you want to add two numbers and format the output, you have to write three lines of code. If you do this 50 times, your script is 150 lines of repetitive mess. If you decide to change the formatting, you have to find and edit all 50 locations. Functions solve this by following the **DRY (Don't Repeat Yourself)** principle.

**Deep Theory & Mechanics**
At its core, a function is a "contract": you provide specific inputs (parameters), and it promises a specific output (return value).
- **Definition vs. Call**: `def` creates the blueprint; the parentheses `()` execute it.
- **Scope**: Variables created inside a function are **Local**. They live and die within that function's execution.
- **Parameters**: The "slots" defined in the function signature.
- **Arguments**: The actual data you pour into those slots.

**Code Examples**

*Good: Clear names, default values, and docstrings*
```python
def calculate_tax(price, tax_rate=0.17):
    """
    Calculates the final price including tax.
    Default tax rate is 17% (Israel VAT).
    """
    if price < 0:
        return 0
    return price * (1 + tax_rate)

# Clear usage
total = calculate_tax(100)
custom_total = calculate_tax(100, tax_rate=0.05)
```

*Bad: Vague names, printing instead of returning, no validation*
```python
def stuff(p, t):
    res = p * t # What is p? what is t?
    print(res)  # Now I can't use 'res' for further calculations!

val = stuff(100, 1.17) # val is now None
```

### 💡 [EXERCISE BREAK] - Open 'exercises/06-Functions' and complete the task.

**Edge Cases & Senior Pitfalls**
- **The Mutable Default Trap**: Never use a list or dictionary as a default argument. Python initializes that list **once** when the function is defined, not every time it's called.
    - *Bad*: `def add_user(name, users=[])` -> all calls share the same list!
    - *Fix*: `def add_user(name, users=None): if users is None: users = []`
- **Shadowing**: Avoid naming a parameter `list`, `str`, or `sum`. This hides Python's built-in functions and will break your code later.
- **Implicit Return**: If you forget the `return` statement, Python returns `None`. Always check your logic if a function suddenly "loses" data.

**Summary Checklist**
- [ ] Does my function perform **one** specific task?
- [ ] Did I use a docstring to explain the "why" and "what"?
- [ ] Am I returning a value instead of just printing it?
- [ ] Have I avoided mutable default arguments?

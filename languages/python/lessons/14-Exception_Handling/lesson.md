# Lesson 14: Exception Handling - Building Crash-Proof Applications

**The Hook**
The real world is messy. Users type strings where you expect numbers, files you need are missing, and servers go offline without warning. If your code can't handle these surprises, it will crash. Exception handling isn't just about "fixing errors"—it's about designing your software to be **resilient** and **graceful** when things inevitably go wrong.

**Deep Theory & Mechanics**
In Python, there are two main philosophies for handling potential errors:
1. **LBYL (Look Before You Leap)**: You check if everything is okay *before* you perform an action.
   - *Example:* `if os.path.exists(file): open(file)`
2. **EAFP (Easier to Ask Forgiveness than Permission)**: You assume things will work and catch the error if they don't.
   - *Example:* `try: open(file) except FileNotFoundError: ...`

**Python strongly prefers EAFP**. Why? Because it's often more efficient and avoids "Race Conditions" (e.g., a file might exist when you check it, but is deleted a millisecond later before you open it). EAFP ensures that you handle the actual failure, not just the *possibility* of failure.

**The Arsenal**:
- `try`: The "danger zone" where errors might happen.
- `except`: The "rescue mission" that runs if a specific error occurs.
- `else`: Runs only if **no** error happened in the `try` block.
- `finally`: The "cleanup crew" that runs no matter what (perfect for closing files).

**Code Examples** (Good vs. Bad)

*Bad: The Silent Killer (Hiding bugs and blocking interrupts)*
```python
try:
    val = 10 / int(input())
except: # Catching EVERYTHING (including Ctrl+C!)
    pass # Ignoring EVERYTHING
# You will never know why your app is behaving strangely or failing.
```

*Good: Specific and Informative (The EAFP Way)*
```python
try:
    num = int(input("Enter divisor: "))
    result = 10 / num
except ValueError:
    print("Error: That wasn't a valid number.")
except ZeroDivisionError:
    print("Error: You cannot divide by zero.")
else:
    print(f"Success! Result is {result}")
finally:
    print("Cleaning up resources...")
```

**[EXERCISE BREAK]**
1. **The Safe Input**: Create a function `get_int()` that repeatedly asks the user for a number until they provide a valid integer. Use EAFP.
2. **The Custom Error**: Create a class `AgeError(Exception)`. Write a function `check_age(age)` that raises this error if the age is less than 0 or greater than 150.

**Edge Cases & Senior Pitfalls**
- **The Catch-All Trap**: Never use an empty `except:`. At the very least, use `except Exception:`. This ensures you don't accidentally catch `KeyboardInterrupt` (Ctrl+C), which would make your program impossible to stop.
- **The "Else" Secret**: Keep your `try` block as small as possible. Move logic that doesn't need protection into the `else` block. This makes it clear exactly which line you expect might fail.
- **Context Managers**: In the next lessons, you'll learn about `with` statements, which handle `finally` blocks for you automatically!

**Summary Checklist**
- [ ] I can explain why Python prefers EAFP over LBYL.
- [ ] I know why `except: pass` is a cardinal sin of programming.
- [ ] I understand the difference between `else` and `finally`.
- [ ] I can create and raise my own custom exceptions.

# Exercises: Memory & Identity

## Level 1: Beginner
1. **Identity vs. Equality:** Create two lists `a = [1, 2, 3]` and `b = [1, 2, 3]`. 
   - Print the result of `a == b` and `a is b`. 
   - Now set `c = a`. Print `a is c`. Explain the difference.
2. **The Alias Trap:** Create a list `colors = ["red", "blue"]`. Create an alias `my_colors = colors`. 
   - Append "green" to `my_colors`. 
   - Print `colors`. Why did it change?

## Level 2: Intermediate
3. **The Shallow Copy:** Create a nested list `matrix = [[1, 2], [3, 4]]`. 
   - Create a shallow copy using `matrix_copy = matrix.copy()`. 
   - Change `matrix_copy[0][0] = 99`. 
   - Print the original `matrix`. Explain why the nested value changed even though you made a "copy".
4. **The Deep Copy Fix:** Use the `copy` module to create a `deepcopy` of the same `matrix`. Repeat the experiment. Verify the original remains unchanged.

## Level 3: Advanced
5. **The Mutable Default Bug:** Write a function `add_item(item, basket=[])`. The function should append the item to the basket and return it.
   - Call it three times without passing a basket: `add_item("apple")`, `add_item("banana")`, `add_item("cherry")`.
   - Print the results. Why is the basket accumulating items? Fix the function using `basket=None`.
6. **Integer Interning:** Python caches small integers (-5 to 256). To see this without the compiler "tricking" you with literal optimizations:
   - Use `x = int(input("Enter 256: "))` and `y = int(input("Enter 256: "))`. Check `x is y`.
   - Now try with `257`. Check `x is y` again.
   - Explain why `256` results in `True` but `257` results in `False`. (Note: If you hardcode `x = 257` and `y = 257` in a script, Python's compiler might optimize them to point to the same object anyway—using `input()` ensures the numbers are created dynamically!)

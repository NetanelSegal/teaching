# Exercises: Tuples and Unpacking

## Level 1: Beginner
1. **Coordinates:** Create a tuple named `point` containing an (x, y) coordinate. Access the y-coordinate by index.
2. **Immutable Test:** Try to change the first element of a tuple and observe the error. Explain why this happens.
3. **Basic Unpacking:** Given `person = ('Alice', 25, 'Engineer')`, unpack it into variables `name`, `age`, and `profession`.

## Level 2: Intermediate
4. **Swap Variables:** Use tuple unpacking to swap the values of `a = 5` and `b = 10` in a single line.
5. **Function Multiple Returns:** Write a function `get_stats(numbers)` that returns both the minimum and maximum of a list as a tuple. Unpack the results in the calling code.
6. **Extended Unpacking:** Given a list `data = [1, 2, 3, 4, 5, 6]`, use the `*` operator to unpack the first element into `head`, the last element into `tail`, and everything in between into `middle`.

## Level 3: Advanced
7. **Named Tuples:** Use `collections.NamedTuple` to create a `Car` type with `make`, `model`, and `year`. Create a few car objects and access their fields by name.
8. **Zipping Data:** Given a list of names `['Alice', 'Bob']` and scores `[85, 92]`, use `zip()` to create a list of tuples. Then, iterate through the zipped list and print "Student [Name] scored [Score]".
9. **Unpacking in Loops:** Given a list of tuples `students = [('Alice', 90), ('Bob', 80)]`, use unpacking directly in the `for` loop header to print the name and grade separately.

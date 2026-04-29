# Exercises: Iterators and Generators

## Level 1: Beginner
1. **The Range Clone:** Write a generator function `my_range(n)` that yields numbers from 0 up to `n-1`, similar to the built-in `range()`.
2. **Infinite Counter:** Write a generator `count_forever(start)` that yields numbers starting from `start` and increments by 1 infinitely. Use a `for` loop with a `break` to test it.

## Level 2: Intermediate
3. **The Infinite Fibonacci:** Write a generator function `fibonacci()` that yields numbers in the sequence (0, 1, 1, 2, 3, 5, 8...) forever.
4. **File Streamer:** Create a text file with several lines of text. Write a generator function `read_lines(file_path)` that yields one line at a time. This ensures you can process a file larger than your RAM.

## Level 3: Advanced
5. **Generator Expressions:** Given a large list of strings (or a generator of them), use a generator expression `()` to create a new generator that converts all strings to uppercase and filters out those shorter than 5 characters.
6. **Custom Iterator Class:** Create a class `Countdown` that takes a number `n` and acts as an iterator, counting down to zero. Implement both `__iter__` and `__next__`. Ensure it raises `StopIteration` when it reaches zero.
7. **Pipeline Processing:** Create two generators:
   - `numbers(n)`: yields numbers from 1 to n.
   - `squared(seq)`: takes a sequence and yields the square of each number.
   - Chain them together: `squared(numbers(10))` and print the results.

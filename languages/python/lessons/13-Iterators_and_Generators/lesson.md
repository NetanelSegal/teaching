# Lesson 13: Iterators and Generators - Mastering Lazy Evaluation

**The Hook**
What happens if you try to create a list of a billion numbers? `[i for i in range(1_000_000_000)]`. Unless you have a supercomputer with hundreds of gigabytes of RAM, your computer will freeze, your fans will scream, and Python will eventually crash with a `MemoryError`. But what if you could process those billion numbers one by one, using almost ZERO memory? Welcome to the world of Generators—the secret to handling Big Data in Python.

**Deep Theory & Mechanics**
At the heart of Python's iteration is **Lazy Evaluation**. Instead of calculating every value upfront and storing it in a box (a List), we create a "recipe" for the values.
- **Iterable**: An object that can return its members one at a time (e.g., a List, String, or Range). It implements `__iter__`.
- **Iterator**: The actual object that tracks your position in the sequence. It implements `__next__`.
- **Generator**: A special type of iterator created using a function with the `yield` keyword.

**The Performance Miracle of Lazy Evaluation**:
When you use a generator, Python only calculates the *next* value when you specifically ask for it. 
1. **Memory Efficiency**: You can process a 100GB log file on a 4GB laptop because you only ever have one line in memory at a time. A list would require loading the whole file.
2. **Time-to-First-Result**: You don't have to wait for the entire list to be built before you start processing the first item. This makes apps feel much more responsive.
3. **Infinite Streams**: You can represent infinite sequences (like the Fibonacci sequence or a constant stream of sensor data) which would be impossible to store in a list.

**Code Examples** (Good vs. Bad)

*Bad: The Memory Hog (Will crash for large N)*
```python
def get_squares(n):
    result = []
    for i in range(n):
        result.append(i * i)
    return result # Returns a giant list that fills RAM
```

*Good: The Lazy Generator (Memory-safe for any N)*
```python
def get_squares_gen(n):
    for i in range(n):
        yield i * i # "Pauses" here and gives the value to the caller

# Usage: Memory usage is constant regardless of how large N is.
for sq in get_squares_gen(1_000_000_000):
    if sq > 100: break
    print(sq)
```

**[EXERCISE BREAK]**
1. **The Infinite Fibonacci**: Write a generator function `fibonacci()` that yields numbers in the sequence forever.
2. **The File Streamer**: Write a generator that reads a text file line-by-line using `yield`, ensuring you can process a file larger than your RAM.

**Edge Cases & Senior Pitfalls**
- **The "One-Shot" Rule**: Generators are **single-use**. Once you've iterated through a generator, it's exhausted. If you need the data again, you must recreate the generator.
- **`next()` exhaustion**: If you manually call `next(gen)` and the generator is empty, it raises `StopIteration`. Loops handle this, but manual code needs care.
- **Generator vs. List Comprehension**: Swapping `[x for x in data]` for `(x for x in data)` changes the result from a List to a Generator. This simple change can save gigabytes of RAM in production.

**Summary Checklist**
- [ ] I can explain why `yield` is better than `return` for large datasets.
- [ ] I understand the difference between an Iterable and an Iterator.
- [ ] I can create a Generator Expression using `()`.
- [ ] I can explain the performance benefits of "Lazy Evaluation."

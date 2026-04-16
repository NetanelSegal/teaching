# Exercises: Concurrency & Asynchronous Programming

## Level 1: Beginner
1. **Simple Async Function:** Create an `async` function `say_hello()` that waits 1 second using `await asyncio.sleep(1)` and then prints "Hello".
2. **Running Async Code:** Use `asyncio.run()` to execute your `say_hello()` function.
3. **Async vs Sync:** Compare the execution time of running three 1-second `time.sleep()` calls vs. three 1-second `asyncio.sleep()` calls using `asyncio.gather()`.

## Level 2: Intermediate
4. **Fetching Data (Mock):** Create an async function that simulates fetching data from an API. Use `asyncio.gather()` to fetch data from 5 different "endpoints" concurrently.
5. **Async Context Managers:** Create an async class with `__aenter__` and `__aexit__` methods (e.g., simulating a database connection).
6. **Task Cancellation:** Create an async task that runs in the background and cancel it after a few seconds using `task.cancel()`.

## Level 3: Advanced
7. **Threading vs Multiprocessing:** Write two programs to calculate the sum of squares for a large range of numbers. One should use `threading.Thread` and the other `multiprocessing.Process`. Compare their performance (explain the GIL).
8. **Async API Fetcher:** Use `httpx` to fetch data from a real public API (e.g., PokeAPI or OpenWeatherMap) concurrently for 10 different items.
9. **Producer-Consumer with Queues:** Implement a producer-consumer pattern using `asyncio.Queue`.

# Lesson 21: Concurrency and Asynchronous Programming - Doing Everything at Once

**The Hook**
Imagine you're a chef in a busy kitchen. If you wait for the water to boil before you start chopping vegetables, and then wait for the vegetables to finish before you start the sauce, your customers will leave hungry. In modern software, staying "single-threaded" is just like that—it's slow, inefficient, and wasteful. Whether it's fetching data from 100 websites or processing 10,000 images, you need to master the art of doing multiple things at once.

**Deep Theory & Mechanics**
In Python, concurrency isn't just one thing; it's a toolbox with three distinct compartments:

1.  **AsyncIO (Cooperative Multitasking):**
    *   **The Vibe:** One person juggling. While one ball is in the air (waiting for I/O), they catch and throw another.
    *   **Best for:** Network-bound tasks (API calls, web scraping, database queries).
    *   **How it works:** An "Event Loop" manages tasks. When a task hits an `await` point, it yields control back to the loop.

2.  **Multithreading (Preemptive Multitasking):**
    *   **The Vibe:** Multiple people sharing one workspace.
    *   **Best for:** I/O-bound tasks where `asyncio` isn't supported or suitable (e.g., legacy libraries, complex file system operations).
    *   **The Catch:** **The GIL (Global Interpreter Lock)**. Python has a lock that ensures only one thread executes Python bytecode at a time. This means threads *cannot* speed up CPU-intensive math.

3.  **Multiprocessing (True Parallelism):**
    *   **The Vibe:** Multiple chefs in separate kitchens.
    *   **Best for:** CPU-bound tasks (Heavy math, image/video processing, encryption).
    *   **How it works:** It bypasses the GIL by spawning entirely new Python instances, each with its own memory space and its own GIL.

**Code Examples** (Good vs. Bad)

*Good (AsyncIO):*
```python
import asyncio

async def fetch_item(id):
    await asyncio.sleep(1) # Simulating I/O
    return f"Item {id}"

async def main():
    # RUNNING IN PARALLEL
    results = await asyncio.gather(*(fetch_item(i) for i in range(5)))
    print(results)

asyncio.run(main())
```

*Bad (Blocking Async):*
```python
import asyncio
import time

async def fetch_item(id):
    time.sleep(1) # DANGER! This blocks the WHOLE event loop
    return f"Item {id}"

async def main():
    # This will take 5 seconds instead of 1
    results = await asyncio.gather(*(fetch_item(i) for i in range(5)))
    print(results)
```

**[EXERCISE BREAK]**
1. **Async Collector:** Write an `async` function that simulates downloading three different files of different sizes (e.g., `asyncio.sleep` for 1, 2, and 3 seconds). Use `asyncio.gather` to run them concurrently and print "Finished" only when all are done.
2. **Speed Test:** Experiment: Try to run a heavy mathematical loop (summing up to 10^7) using `threading` vs `multiprocessing`. Observe the execution time. Which one actually utilizes your CPU cores?

**Edge Cases & Senior Pitfalls**
*   **Blocking the Loop:** The most common "junior" mistake is using `requests` or `time.sleep` inside an `async` function. This freezes the entire program. Use `httpx` or `aiohttp` instead.
*   **Race Conditions:** In `threading`, two threads might try to increment `counter += 1` at the same moment, leading to incorrect values. Always use `threading.Lock()` when modifying shared state.
*   **Overhead:** Spawning a `Process` is expensive. Don't use `multiprocessing` for tiny tasks—the overhead of starting the process will make it slower than just running it normally.

**Summary Checklist**
- [ ] Do I understand why the GIL makes `threading` useless for CPU-heavy tasks?
- [ ] Can I identify if my task is I/O-bound (waiting) or CPU-bound (calculating)?
- [ ] Do I know the difference between `async def` and a regular `def`?
- [ ] Can I use `asyncio.gather` to manage multiple concurrent tasks?

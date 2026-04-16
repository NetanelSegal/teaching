# Lesson 18: Concurrency & Async - Parallel Performance

In 2026, single-threaded code is often a bottleneck. Learn to do many things at once.

---

## 1. The Three Pillars of Concurrency
1. **Multiprocessing:** Best for **CPU-bound** tasks (Heavy math, image processing). Uses multiple CPU cores.
2. **Threading:** Best for **I/O-bound** tasks (reading files). Shares memory.
3. **AsyncIO:** Best for **Network-bound** tasks (API calls, Web Servers). Single-threaded but "waits" efficiently.

---

## 2. AsyncIO (The Modern Standard)
```python
import asyncio

async def fetch_data():
    print("Fetching...")
    await asyncio.sleep(2) # Non-blocking wait
    print("Done!")

async def main():
    # Run two things at once!
    await asyncio.gather(fetch_data(), fetch_data())

asyncio.run(main())
```

---

## 3. The GIL (Global Interpreter Lock)
Python has a "lock" that prevents multiple threads from running Python code at the exact same time. 
- **Result:** Threading won't make your math faster.
- **Solution:** Use **Multiprocessing** for math, and **AsyncIO** for waiting.

---

## 4. Edge Cases & Pitfalls
- **Blocking the Event Loop:** If you use `time.sleep(5)` inside an `async` function, the whole program stops. You **must** use `await asyncio.sleep(5)`.
- **Race Conditions:** Two threads trying to change the same variable at once.
  - **Solution:** Use `asyncio.Lock()` or thread-safe queues.
- **Zombie Processes:** In multiprocessing, if the main app crashes, the child processes might keep running. Use `with ProcessPoolExecutor()`.

---

## 5. Summary Checklist
- [ ] Do I know when to use Async vs Multiprocessing?
- [ ] Can I explain why `time.sleep()` is bad in async code?
- [ ] Have I used `asyncio.gather()` to run concurrent tasks?

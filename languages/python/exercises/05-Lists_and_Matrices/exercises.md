# Exercises: Lists & Matrices

## Level 1: Foundation (CRUD & Basics)
1. **The Guest List:**
   - Create a list with 3 names.
   - Use `.append()` to add a new name to the end.
   - Use `.insert()` to add a name at the second position.
   - Remove the third name from the list.
   - Sort the list alphabetically and print it.
2. **List Aggregates:**
   - Create a list of 10 random numbers.
   - Print the `max()`, `min()`, `sum()`, and the average of the list.
3. **The Slicer:**
   - Given `nums = [10, 20, 30, 40, 50, 60, 70, 80]`.
   - Print the first three items.
   - Print the last two items.
   - Print the items from index 2 to 5.
   - Print the entire list reversed using slicing.

## Level 2: Logic & Mechanics
4. **The Alias Trap (CRITICAL):**
   - Create `original = [1, 2, 3]`.
   - Create an alias `copy_one = original`.
   - Create a real copy `copy_two = original.copy()`.
   - Modify `copy_one` by appending `99`. 
   - Print all three lists. Explain why `original` changed but `copy_two` did not.
5. **Matrix Access:**
   - Given the matrix:
     ```python
     matrix = [
         [1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]
     ]
     ```
   - Change the `5` to `50`.
   - Print the last element of the last row (`9`).
   - Print the middle column (`2, 50, 8`) using a loop.
6. **The Unique Filter:**
   - Take a list with duplicate items (e.g., `[1, 2, 2, 3, 4, 4, 5]`).
   - Write a program that creates a **new** list with the duplicates removed.
   - *Challenge:* Do this without using a Set.

## Level 3: "Think Like an Engineer" (Algorithmic Thinking)
7. **Move Zeroes:**
   - Given `nums = [0, 1, 0, 3, 12]`.
   - Move all `0`s to the end while maintaining the relative order of non-zero elements.
   - **Do this in-place** (modify the original list, do not create a new one).
8. **Matrix Transpose:**
   - Write a program to "transpose" a 3x3 matrix (turn rows into columns).
   - *Example:* `[[1,2], [3,4]]` becomes `[[1,3], [2,4]]`.
9. **Majority Element:**
   - Find the element that appears more than `n/2` times in a list.
   - *Think:* How can you do this efficiently?
10. **Diagonal Sum:**
    - Given a square matrix, calculate the sum of its main diagonal (top-left to bottom-right).
    - *Challenge:* Can you also calculate the "Anti-Diagonal" sum?
11. **Spiral Traversal (Hard):**
    - Print the elements of a 3x3 matrix in spiral order.
    - *Expected for [[1,2,3],[4,5,6],[7,8,9]]:* `1, 2, 3, 6, 9, 8, 7, 4, 5`.

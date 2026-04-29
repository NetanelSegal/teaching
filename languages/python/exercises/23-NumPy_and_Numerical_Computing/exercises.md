# Exercises: NumPy & Numerical Computing

## Level 1: Foundation (Creation & Basic Math)
1. **The Range Finder:**
   - Create a 1D array of 20 numbers from 0 to 19.
   - Reshape it into a 4x5 matrix.
   - Print the shape, size, and data type of the matrix.
2. **The Constant Generator:**
   - Create a 3x3 matrix filled with only zeros.
   - Create a 3x3 matrix filled with only ones.
   - Create a 3x3 matrix filled with the number `7`. (Hint: Use `np.full()`).
3. **Element-wise Fun:**
   - Create two arrays: `a = [10, 20, 30]` and `b = [1, 2, 3]`.
   - Perform addition, subtraction, multiplication, and division.
   - Print the result of `a ** b`.

## Level 2: Logic & Mechanics (Indexing & Filtering)
4. **The Slice Challenge:**
   - Create a 5x5 matrix with values from 1 to 25.
   - Extract the middle 3x3 square from it.
   - Extract the entire last column.
5. **Boolean Masking (The "Thinker" Exercise):**
   - Create an array of 50 random integers between 1 and 100.
   - **Task:** Print all numbers in the array that are greater than 50 AND even.
   - **Constraint:** You are NOT allowed to use a `for` loop or an `if` statement. Use boolean masking.
6. **The View Trap:**
   - Create an array `original = np.array([10, 20, 30])`.
   - Create a slice `subset = original[0:2]`.
   - Change `subset[0] = 999`.
   - Print `original`. Did it change? Why?

## Level 3: "Think Like an Engineer" (Algorithmic Thinking)
7. **Z-Score Normalization:**
   - In Data Science, we often "normalize" data. The formula is: `(x - mean) / standard_deviation`.
   - Create an array of 100 random numbers.
   - Calculate the mean (`np.mean`) and standard deviation (`np.std`).
   - Create a new array where all values are normalized. **Do this in one line of code.**
8. **Image Processing Simulation:**
   - Imagine a 5x5 matrix represents a grayscale image (0 = Black, 255 = White).
   - `image = np.random.randint(0, 256, (5, 5))`
   - **Task A (Invert):** Create a new matrix where black becomes white and vice versa (Hint: `255 - image`).
   - **Task B (Threshold):** Set all pixels with a value less than 128 to `0` and all pixels greater than or equal to 128 to `255`. 
   - **Constraint:** No loops allowed!
9. **Find the Nearest Neighbor:**
   - Create an array of 10 random numbers. Ask the user for a single number `x`.
   - Find the value in the array that is **closest** to `x`.
   - *Think:* Use `np.abs()` to find differences, and `np.argmin()` to find the index of the smallest difference.

## Level 4: Industry Readiness (Job-Level Challenges)
10. **The Neural Network Foundation (Dot Product):**
    - In Machine Learning, we multiply "Weights" by "Inputs".
    - `weights = np.array([0.2, 0.8, -0.5])`
    - `inputs = np.array([1.0, 2.5, 0.5])`
    - Calculate the result using `np.dot()`. This is how a single neuron in an AI works!
11. **Vectorization Speed Test:**
    - Create a list of 1,000,000 numbers.
    - Write a function to square every number using a `for` loop.
    - Now, do the same using a NumPy array.
    - Use the `time` module to measure the difference. **Goal:** NumPy should be at least 50x faster.
12. **The Data Cleaning Mask:**
    - You have sensor data with some "noise" (errors represented as `-999`).
    - `data = np.array([15.5, 16.2, -999, 14.8, -999, 17.1])`
    - **Task:** Replace all `-999` values with the **average** of the valid numbers.
    - *Think:* Use boolean masking to find valid numbers first.


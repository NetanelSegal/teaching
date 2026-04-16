# Array Exercises

This folder contains exercises for working with arrays in C and Java.

## Basic Array Operations
1. **Sum of Elements**: Write a function that takes an array of integers and returns the sum of its elements.
2. **Average of Elements**: Write a function that takes an array of integers and returns the average of the elements.
3. **Min/Max Sum**: Write a function that takes an array and returns the sum of the largest and the smallest numbers in the array.
4. **Operations Parser**:
   You are working with a programming language that has a single variable, `X`, and two operations:
   - `+` or `++X` / `X++`: Increases the value of `X` by 1.
   - `-` or `--X` / `X--`: Decreases the value of `X` by 1.
   Initially, the value of `X` is 0.
   Given an array of strings/chars called `operations`, determine the final value of `X`.
   
   **C Signature**: `int finalValueAfterOperations(char operations[], int size)`
   **Java Signature**: `public int finalValueAfterOperations(String[] operations)`

5. **Duplicate Removal**: Write a function that takes an array of positives and swaps all the positive duplicate elements with the value -1.
   - **Input**: `{1,2,1,3,4,4,7}`
   - **Output**: `{1,2,-1,3,-1,4,7}`

6. **Array Rotation**: Write a function that rotates the elements of an array to the left by one position.
   - **Input**: `{1,2,3,4}`
   - **Output**: `{2,3,4,1}`

7. **Frequency Count**: Write a function that takes a char array/string of lowercase characters (a-z) and prints the frequency count of each character.

8. **Target Sum Pairs (Java)**: Implement a function that, given an array and a target sum, produces all pairs of elements whose sum equals the target.
   - **Example**: Array: `[2, 4, 3, 7, 5, 8, 9]`, Target: `10` -> Output: `(2, 8), (3, 7)`

## Advanced Exercises (C)
9. **Filtering by Bounds**: Write a program that receives $n$ from the user, then $n$ integers.
   - Display all numbers smaller than the first number.
   - Display all numbers smaller than the last number.

10. **Digit Frequency**: Receive a positive integer and display the number of times each digit (0-9) appeared in it.

11. **Find Missing Number**:
    `unsigned int find_missing(unsigned int a[], unsigned int n)`
    The array `a` has length $n-1$ and contains unique elements from the range $[1, n]$. Find the missing number.

12. **Binary Sequence Count**: Receive a binary sequence (0s and 1s) of length 12 and count how many sequences of '1's of each length exist (e.g., how many single '1's, how many pairs, how many triplets, etc.).

13. **Peak Detection**:
    `int count_peaks(int heights[], int size)`
    Given an array of heights representing a mountain trail, count the number of "peaks" (a point higher than its neighbors).

14. **Means**: Implement functions to calculate:
    - Arithmetic Mean
    - Geometric Mean
    - Harmonic Mean

15. **Array Modification**:
    - `void reverse(int a[], int size)`: Reverse the order of elements.
    - `void flip(int a[], int m, int n)`: Shift elements in range $[0, m-1]$ to the end, and $[m, m+n-1]$ to the start.

16. **Zero Removal**:
    `int remove_zeros(int a[], int n)`: Remove all zeros from the array and shift elements to fill the gaps. Return the new effective size.

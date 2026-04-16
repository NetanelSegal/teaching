# Matrix Exercises

This folder contains exercises for working with 2D arrays (matrices).

## Basic Matrix Operations
1. **Multiplication Table**: Write a function that creates a matrix representing the multiplication table up to 10 (using loops).
2. **Maximum Wealth**:
   Given a 2D list `accounts` where `accounts[i][j]` is the amount of money the $i$-th customer has in the $j$-th bank. Return the maximum wealth among all customers.
   - **Example**: `[[1,2,3], [3,2,1], [4,5,6]]` -> Output: `15` (from customer 3).
3. **Diagonal Sum**:
   Given a square matrix `mat`, return the sum of the matrix diagonals. Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
   - **Java Signature**: `public static int diagonalSum(int[][] mat)`
4. **Matrix Sort**: Write a Java method `matSort(int[][] mat)` that sorts a given 2D matrix and returns it.

## Advanced Matrix Exercises
5. **Neighbor Sum Matrix**: Construct a new square matrix of size $N$ where each cell $(i, j)$ is the sum of its neighbors in the original matrix (up, down, left, right, and diagonals).
6. **Row-Column Identity**: Given two matrices $A$ and $B$ of size $N$, identify if any row in $A$ is identical to any column in $B$.
7. **Matrix Rotation**: Write a function to rotate an $N \times M$ matrix 90 degrees clockwise.
8. **Minima Search**: Find the minimum element in each row and the minimum element on the main diagonal.
9. **Rectangle Counter (Image Processing)**:
   Given a binary image (2D array of 0s and 1s), where 0 represents white and 1 represents black. Count the number of black rectangles in the image. Assume rectangles do not touch each other.
   - **C Signature**: `int count_rectangles(int picture[N][M])`

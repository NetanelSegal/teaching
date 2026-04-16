# Struct Exercises

This folder contains exercises for working with structures (`struct`) in C.

## Student and Classroom

1. **Student Best Average**:
  - Define a `Student_t` struct with fields: `name` (char[20]), `average` (float), and `id` (int).
  - Write a function that takes an array of `Student_t` and returns the ID of the student with the highest average.
2. **Classroom Average**:
  - Define a `Student` struct with `name` (char[50]) and `grade` (int).
  - Define a `Classroom` struct containing an array of 30 `Student` objects and an `int studentCount`.
  - Write a function `calculateAverageGrade(Classroom cl)` that returns the average grade of all students in the classroom as a `float`.

## Time Manipulation

1. **Time Difference**:
  - Define a `MyTime_t` struct with fields: `hours` (0-23), `minutes` (0-59), and `seconds` (0-59).
  - Write a function `MyTime_t DiffTime(MyTime_t t1, MyTime_t t2)` that calculates the difference $t_2 - t_1$. Assume $t_2 > t_1$.
2. **Time Difference (Pointers)**:
  - Implement the same logic as above using pointers:
   `void DiffTime(MyTime_t* t1, MyTime_t* t2, MyTime_t* diffTime);`

## Geometry

1. **Point in Rectangle**:
  - Define a `Point` struct with `x` and `y` coordinates.
  - Define a `Rectangle` struct with `topLeft` and `bottomRight` points.
  - Write a function that checks if a given `Point` is inside a `Rectangle`.
  - In `main`, initialize a rectangle and a point, then call the function to verify.


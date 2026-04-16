# Dynamic Allocation Exercises

This folder contains exercises for working with dynamic memory allocation in C using `malloc`, `free`, and `realloc`.

## Exercises
1. **Array Concatenation**: Write a function that takes two arrays and their respective sizes. The function should return a new, dynamically allocated array containing the elements of both input arrays in sequence.
   - **Example**: `{1, 8, 2}` and `{9, 2, 6, 7}` -> Output: `{1, 8, 2, 9, 2, 6, 7}`.
2. **String Duplication**: Implement the standard library function `char* MyStrdup(const char *str)`. This function should allocate enough memory to hold a copy of the input string and return a pointer to the new copy.
3. **Family Structure**:
   - Define a `Person` struct with fields: `name` (max 15 characters) and `id`.
   - Define a `Family` struct containing:
     - Father and Mother (of type `Person`).
     - An array of 10 pointers to `Person` representing children.
   - Implement modular functions for:
     - Data input (including dynamic allocation for children as needed).
     - Data output.
   - Create a `main` function to test the implementation.

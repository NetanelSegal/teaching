# Pointer Exercises

This folder contains exercises for working with pointers in C, specifically focusing on string manipulation.

## String Functions Implementation
Implement the following standard C library string functions using pointers (do not use indices `[]` if possible):

1. **MyStrlen**: Calculates the length of the string `str`, excluding the terminating null byte (`\0`).
   - `size_t MyStrlen(const char* str);`

2. **MyStrcmp**: Compares the string `s1` to the string `s2`. Both strings must be terminated by the usual `\0` character.
   - Returns:
     - `0` if identical.
     - Positive if `s1 > s2`.
     - Negative if `s2 > s1`.
   - `int MyStrcmp(const char* str1, const char* str2);`

3. **MyStrcpy**: Copies the string `source` into the area pointed to by `destination`.
   - `char* MyStrcpy(char* destination, const char* source);`

4. **MyStrncpy**: Copies at most `N` characters from the string `source` into the area of memory pointed to by `destination`.
   - `char* MyStrncpy(char* destination, const char* source, size_t num);`

5. **MyStrcat**: Appends `source` to `destination` and terminates the resulting string with a null character.
   - `char* MyStrcat(char* destination, const char* source);`

6. **MyStrncat**: Appends not more than `n` bytes from the array pointed to by `source` to the end of the string pointed to by `destination`.
   - `char* MyStrncat(char* destination, const char* source, size_t num);`

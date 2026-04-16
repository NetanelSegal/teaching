# String Exercises

This folder contains exercises for working with strings in C.

## Basic String Operations
1. **Last Character**: Write a function that takes a non-empty string and returns its last character.
2. **First-Last Match**: Write a program that receives 15 strings and displays those where the first character matches the last character.
3. **Word Endings**: Given a string of words (letters and spaces only), count how many words end with the letter 'Y'.
4. **Length Comparison**: Input two strings. If the length of the longer string is at least twice the length of the shorter one, print the longer string twice. Otherwise, print the shorter string.
5. **Name Formatting**: Input a full name (first and last). Print the first name and last name on separate lines. If the full name exceeds 12 characters, show an error message.
6. **String Reversal**: Implement `void reverse(char str[])` to reverse a string in-place.
7. **Occurrence Counting**:
   `unsigned count_occurrences(const char s1[], const char s2[])`
   Count how many times `s2` appears as a substring within `s1`. Overlapping occurrences should be counted.
   - **Example**: `s1 = "ababaabbbaba"`, `s2 = "aba"` -> Output: `3`
8. **Sum of Numbers in String**: Write a function that extracts all integers from a string and returns their sum.
   - **Example**: `"ab12d580cw600"` -> Output: `1192` ($12+580+600$)
9. **Character Deletion**:
   `void delete_char(char src[], char c)`
   Remove all occurrences of character `c` from string `src`.
   - **Example**: `src = "e-r-e-t-z-n-e-h-e-d-e-r-e-t"`, `c = '-'` -> Output: `"eretznehederet"`
10. **Caesar Cipher**: Implement a Caesar cipher that shifts letters by a given `key`.
    - **Example**: Key 3, "BABY" -> "EDEB"

## Advanced Substring Counting
11. **Pattern Matching**: Given a string ending with '.', count:
    - Substrings starting with 'a' and ending with 'b'.
    - Substrings starting with 'a', ending with 'b', and NOT containing 'c'.
    - Substrings starting with 'a', ending with 'b', and containing EXACTLY one 'c'.

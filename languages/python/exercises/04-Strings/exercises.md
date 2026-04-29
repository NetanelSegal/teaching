# Exercises: Strings & Text Manipulation

## Level 1: Foundation
1. **The Slice Master:**
   - Create a variable `s = "Learning Python is fun!"`.
   - Extract the word "Python" using slicing.
   - Extract the word "fun" using negative slicing.
   - Print the entire string **reversed**.
2. **The Formatter:**
   - Ask the user for their `first_name`, `last_name`, and `age`.
   - Print a message: `HELLO, JOHN DOE. YOU ARE 25 YEARS OLD.` (All uppercase).
   - *Challenge:* Use an f-string to ensure the age is displayed with two decimal places (e.g., `25.00`).
3. **The Cleaner:**
   - Given a messy string `raw_data = "  apple, banana , cherry  "`.
   - Use string methods to remove the extra spaces and convert it into a clean list: `['apple', 'banana', 'cherry']`.

## Level 2: Logic & Mechanics
4. **Palindrome Checker:**
   - Write a program that takes a string and prints "True" if it is a palindrome (reads the same forward and backward) and "False" otherwise.
   - *Think:* How can you make this work regardless of spaces or capitalization?
5. **The Immutability Challenge:**
   - Given `word = "Python"`. You want to change it to "Cython". 
   - Write the code to do this. Remember: you cannot do `word[0] = "C"`.
6. **Find vs. Index:**
   - Write a script that asks the user for a sentence and a "search word".
   - Use `.find()` to print the index of the word. If the word isn't there, print "Word missing" instead of letting the program crash.

## Level 3: "Think Like an Engineer" (Algorithmic Thinking)
7. **The Vowel Counter:**
   - Write a program that counts how many vowels (`a, e, i, o, u`) are in a given sentence.
   - *Challenge:* Can you also count how many **consonants** there are?
8. **Manual String Reversal:**
   - Write a program that reverses a string **without** using slicing `[::-1]`.
   - *Think:* Use a `for` loop to build a new string character by character.
9. **The CSV Sanitizer:**
   - You have a list of names: `names = [" john ", "ALICE", " bOb "]`.
   - Use a loop to create a single string where names are separated by a semi-colon (`;`), all are lowercase, and all extra spaces are removed.
   - *Expected Output:* `john;alice;bob`
10. **Caesar Cipher (Intro):**
    - Take a word and "shift" every letter by 1 in the alphabet (e.g., "abc" -> "bcd").
    - *Hint:* Use `ord()` to get the character code and `chr()` to turn it back into a character.

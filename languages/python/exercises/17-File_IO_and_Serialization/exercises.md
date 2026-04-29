# Exercises: File I/O & Serialization (Modern `pathlib`)

## Level 1: Beginner
1. **Writing to File:** Write a function that takes a name and saves it to a file `name.txt`.
2. **Reading from File:** Write a function that reads all text from `name.txt` and prints it.
3. **Appending:** Add a second line of text to an existing file without overwriting the first.

## Level 2: Intermediate
4. **Modern Paths:** Use `pathlib.Path` to list all `.py` files in a given directory.
5. **JSON Data:** Create a dictionary of user data. Save it to `user.json` using the `json` module. Read it back and print a specific key.
6. **CSV Processing:** Create a `students.csv` file with headers `Name,Grade`. Write a script to read the CSV and calculate the average grade.

## Level 3: Advanced
7. **Error Handling in I/O:** Write a function that attempts to read a file, handles `FileNotFoundError`, and logs the error to a separate `logs.txt` file.
8. **Serialization with `pickle`:** Use the `pickle` module to serialize a custom Python object (e.g., a class instance) and save it to a file. Then, deserialize it back.
9. **Recursive File Search:** Use `pathlib` to recursively find all files larger than 1MB in a specific directory tree.

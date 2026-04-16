# Exercises: Dictionaries and Sets

## Level 1: Beginner (Basic Operations)
1. **User Profile:** Create a dictionary named `user` with keys: `name`, `age`, and `email`. Print the user's name.
2. **Fruit Count:** Create a dictionary representing fruit inventory: `{'apple': 5, 'banana': 2, 'orange': 8}`. Add 3 more apples and add a new fruit `pear` with 4 units.
3. **Unique Colors:** Given a list `colors = ['red', 'blue', 'red', 'green', 'blue', 'blue']`, use a set to print only the unique colors.

## Level 2: Intermediate (Logic and Methods)
4. **Merge Departments:** You have two dictionaries representing employee counts in different departments. Merge them into one. If a department exists in both, sum the counts.
   - `dept1 = {'HR': 5, 'IT': 10}`
   - `dept2 = {'IT': 3, 'Sales': 7}`
5. **Character Frequency:** Write a function that takes a string and returns a dictionary where keys are characters and values are their frequencies.
6. **Set Operations:** Given two sets of student IDs: `math_students = {1, 2, 3, 4}` and `science_students = {3, 4, 5, 6}`:
   - Find students taking both subjects.
   - Find students taking only Math.
   - Find all unique students across both subjects.

## Level 3: Advanced (Real-world Scenarios)
7. **Nested Dictionary Lookup:** Create a dictionary representing a library catalog (Author -> Book Title -> Year). Write a function to find all books published after 2010.
8. **Inverted Index:** Given a dictionary where keys are filenames and values are lists of words in those files, create an "inverted index" where keys are words and values are lists of filenames containing those words.
9. **Set Performance:** Create a list of 100,000 random integers. Create a set from the same numbers. Compare the time it takes to check if a specific number (not in the list) exists in the list vs. the set.

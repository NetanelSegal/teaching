# Exercises: Dictionaries & Sets

## Level 1: Foundation (Associations & Uniqueness)
1. **The User Profile:**
   - Create a dictionary `user` with keys: `name`, `age`, and `is_admin`.
   - Update the age and add a new key `email`.
   - *Think:* Use `.get()` to try and access a key named `phone`. Provide a default value of "No Phone Provided".
2. **The Unique Visitor:**
   - You have a list of names of people who entered a building. Some entered multiple times. 
   - Use a Set to print a list of unique names.
3. **Set Math:**
   - `python_students = {"Alice", "Bob", "Charlie", "David"}`
   - `java_students = {"Charlie", "David", "Eve", "Frank"}`
   - Print the students taking **both** classes.
   - Print the students taking **only** Python.
   - Print all unique students in the building.

## Level 2: Logic & Mechanics
4. **Character Counter:**
   - Write a function `count_chars(s)` that returns a dictionary where keys are characters and values are how many times they appeared.
   - *Example:* `"apple"` -> `{'a': 1, 'p': 2, 'l': 1, 'e': 1}`.
5. **The Inverted Index:**
   - Given a dictionary where keys are authors and values are lists of their books:
     `data = {"Tolkien": ["The Hobbit", "LOTR"], "Rowling": ["Harry Potter"]}`
   - Convert this into a list of tuples: `[("The Hobbit", "Tolkien"), ("LOTR", "Tolkien"), ...]`
6. **The Hashability Test:**
   - Try to create a dictionary where the key is a list: `{[1, 2]: "value"}`.
   - *Think:* Why does this crash? What could you use instead of a list if you need multiple values in a key? (Hint: Tuple).

## Level 3: "Think Like an Engineer" (Algorithmic Thinking)
7. **Two Sum ($O(n)$):**
   - Given a list of numbers and a `target`, find two numbers that add up to the target.
   - **Challenge:** You MUST do this in "Linear Time" ($O(n)$) using a dictionary. Do not use nested loops!
   - *Think:* As you loop through the list, can you store the "complement" (target - current_number) in a dictionary?
8. **Set Performance Race:**
   - Create a list of 1,000,000 numbers using `range`.
   - Create a set from that list.
   - Use the `time` module to see how long it takes to find the number `999,999` in the list vs. the set.
   - *Think:* Why is the set so much faster?
9. **Group Anagrams:**
   - Given `words = ["eat", "tea", "tan", "ate", "nat", "bat"]`.
   - Group words that are anagrams of each other.
   - *Hint:* Use a dictionary where the **key** is the sorted string.
10. **The First Unique Character:**
    - Find the first character in a string that does not repeat.
    - *Example:* `"swiss"` -> `"w"`.
    - *Think:* Can you do this in a single pass of the string?

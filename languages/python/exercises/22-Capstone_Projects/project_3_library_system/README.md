# Project 3: Library Management System

## 🌟 The Challenge
Manage a world of knowledge! Build a full-featured "Library Management System" to track books, authors, and members. You'll dive deep into Advanced OOP concepts like Composition and Inheritance, use Dataclasses for clean data storage, and implement complex business rules like preventing a book from being rented if it's already checked out.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** Advanced OOP (Composition/Inheritance), Dataclasses, Custom Exceptions.
- **Internal Reference:** [Lesson 16: Advanced OOP](../../../lessons/16-OOP_Advanced_and_Dataclasses/), [Lesson 15: Classes](../../../lessons/15-OOP_Basics/)
- **External Docs:** [Python Dataclasses](https://docs.python.org/3/library/dataclasses.html), [OOP Composition vs Inheritance](https://realpython.com/inheritance-composition-python/)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (Logic - Book, Member, Library classes)
   - `src/utils.py` (Helpers - Search/Persistence)
   - `main.py` (Admin Interface)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "A 'Book' has an ISBN, Title, and Author. A 'Member' has an ID and a List of Rented Books.")
- Implement these using Dataclasses in `src/core.py`.

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Use custom exceptions (e.g., `BookAlreadyRentedError`) to handle business logic violations cleanly.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py`.
- Import your classes and build a menu for renting/returning books and searching the catalog.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., renting a book that doesn't exist, returning a book they never rented, member ID not found).
- Implement `try/except` blocks and logical checks.

### Step 7: Validation
- Create a test in `tests/` for the core borrowing logic.
- Run `pytest` to verify everything works.

## 🚀 Going Beyond (Stretch Goals)
- **Due Dates & Fines:** Implement logic to track when a book is due and calculate fines for late returns.
- **Categorization:** Add a "Category" system and allow members to browse by genre.
- **Persistence:** Save the entire library state to a JSON or CSV file and reload it on startup.

## 📚 Standard Resources
- [Project Roadmap](../../../projects/roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)

# Project 1: The Organizer (OS Automation)

## 🌟 The Challenge
Is your Downloads folder a chaotic mess of images, PDFs, and installers? "The Organizer" is a smart script that watches a specific folder and automatically categorizes incoming files into designated subfolders based on their extensions, keeping your workspace clean without lifting a finger.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** File system manipulation, Directory watching, Path management.
- **Internal Reference:** [Lesson 17: File I/O](../../../lessons/17-File_IO_and_Serialization/), [Lesson 07: Project Structure](../../../lessons/07-Project_Structure_and_Modules/)
- **External Docs:** [Python os module](https://docs.python.org/3/library/os.html), [Python shutil module](https://docs.python.org/3/library/shutil.html), [watchdog (optional library)](https://pypi.org/project/watchdog/)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (Logic)
   - `src/utils.py` (Helpers)
   - `main.py` (Entry Point)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "What extensions belong to which category?")
- Implement these as Dictionaries in `src/core.py` (e.g., `EXTENSION_MAP = {'.jpg': 'Images', '.pdf': 'Documents'}`).

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Keep functions "pure." No `input()` or `print()` inside this file. It should only take a file path and move it according to the map.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py`.
- Import your logic from `src.core` and connect it to a loop that scans the folder or uses a watcher.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., source folder doesn't exist, file is currently in use, permission denied).
- Implement `try/except` blocks and input validation.

### Step 7: Validation
- Create a test in `tests/` for your core logic.
- Run `pytest` to verify everything works.

## 🚀 Going Beyond (Stretch Goals)
- **Recursive Sorting:** Support sorting files within subdirectories.
- **Duplicate Handling:** If a file with the same name exists in the destination, append a timestamp or counter instead of overwriting.
- **Log File:** Create a hidden `.log` file that tracks every move the script makes.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)

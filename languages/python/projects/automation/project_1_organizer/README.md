# Project 1: The Organizer (OS Automation)

## 🌟 The Challenge
Is your Downloads folder a chaotic mess of images, PDFs, and installers? "The Organizer" is a smart script that watches a specific folder and automatically categorizes incoming files into designated subfolders based on their extensions, keeping your workspace clean without lifting a finger.

## 🧠 Program Logic Flow
1.  **Initialize**: Load the `EXTENSION_MAP` from `src/core.py`.
2.  **Watch/Scan**: The program identifies a target directory (e.g., `Downloads`) to monitor.
3.  **Detect**: For every file in the target directory:
    -   Check if it is a file (not a directory).
    -   Extract the file extension (e.g., `.png`).
4.  **Match**: Look up the extension in the `EXTENSION_MAP`.
    -   If found, set the target subfolder to the mapped category (e.g., `Images`).
    -   If not found, set the target subfolder to `Others`.
5.  **Organize**: 
    -   Check if the target subfolder exists; if not, create it.
    -   Move the file from the root directory into the target subfolder.
6.  **Repeat**: Wait for a specified interval (e.g., 10 seconds) and repeat the scan.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Scaffolding
- **Task 1.1: Environment Isolation**
  - Create a virtual environment: `python -m venv .venv`.
  - Activate it and install the local dependencies: `pip install -r requirements.txt`.
- **Task 1.2: Directory Structure**
  - Ensure your project follows the structure:
    - `src/core.py` (File moving logic)
    - `src/utils.py` (Helper functions)
    - `main.py` (The main loop/trigger)
    - `tests/` (Your validation scripts)

### Phase 2: Core Logic (The Brains)
- **Task 2.1: Mapping Extensions**
  - In `src/core.py`, create a dictionary called `EXTENSION_MAP`.
  - Keys should be extensions (e.g., `.jpg`, `.pdf`) and values should be category names (e.g., `Images`, `Documents`).
- **Task 2.2: The Mover Function**
  - Implement a function `move_file(file_path, destination_base)`.
  - It should:
    1. Extract the extension from `file_path`.
    2. Determine the target category from `EXTENSION_MAP`.
    3. Create the category folder if it doesn't exist (`os.makedirs`).
    4. Move the file using `shutil.move`.
  - *Engineering Standard:* Ensure the function is "pure" and handles the case where the extension is unknown (move to an `Others` folder).

### Phase 3: Interface & Validation
- **Task 3.1: The Scanner Loop**
  - In `main.py`, implement a loop that scans a target folder (e.g., `Downloads`) every 10 seconds.
  - For every file found (that isn't a directory), call your `move_file` logic.
- **Task 3.2: Defensive Engineering**
  - Wrap your move logic in a `try/except` block.
  - Handle `PermissionError` (if the file is still being downloaded/is open) and `FileNotFoundError`.
- **Task 3.3: Validation**
  - Create a test in `tests/test_core.py` that mocks a file move and verifies the logic correctly identifies the category.
  - Run `pytest` to verify.

## 🚀 Going Beyond (Stretch Goals)
- **Recursive Sorting:** Support sorting files within subdirectories.
- **Duplicate Handling:** If a file with the same name exists in the destination, append a timestamp or counter instead of overwriting.
- **Log File:** Create a hidden `.log` file that tracks every move the script makes.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)

# Project 1: Terminal RPG / Adventure (Logic & CLI)

## 🌟 The Challenge
Embark on a journey of logic! Build a text-based "Terminal RPG" where players navigate through rooms, manage an inventory of items, and engage in turn-based combat with enemies. This project focuses on managing complex game states and building interactive command-line experiences using only Python logic.

## 🧠 Program Logic Flow
1.  **Initialize**: Set up the game map (rooms, connections), player stats, and starting inventory.
2.  **Input Loop**: 
    -   Display the current room description and available directions/items.
    -   Wait for user command (e.g., "go north", "take sword", "fight goblin").
3.  **Process Command**:
    -   **Movement**: Update player position if the direction is valid.
    -   **Action**: Execute logic for picking up items or using them.
    -   **Combat**: If an enemy is present and a fight is triggered, enter turn-based combat logic (calculate damage, update HP).
4.  **Check Game State**: Check if the player has reached the exit, defeated the boss, or run out of HP.
5.  **Output**: Display the result of the action and loop back to step 2.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Scaffolding
- **Task 1.1: Environment Isolation**
  - Create a virtual environment: `python -m venv .venv`.
  - Activate it and install the local dependencies: `pip install -r requirements.txt`.
- **Task 1.2: Directory Structure**
  - Ensure your project follows the structure:
    - `src/core.py` (Game logic, Player/Enemy classes)
    - `src/utils.py` (CLI display helpers, colorama wrapping)
    - `main.py` (The main game loop)
    - `tests/` (Your validation scripts)

### Phase 2: Core Logic (The Brains)
- **Task 2.1: The Data Model**
  - In `src/core.py`, create a `Player` class and an `Enemy` class.
  - Attributes: `hp`, `attack`, `inventory` (list), `position`.
- **Task 2.2: Combat System**
  - Implement a function `calculate_damage(attacker, defender)`.
  - Add logic for critical hits or random misses using the `random` module.
  - *Engineering Standard:* Ensure this function is testable without running the whole game.

### Phase 3: Interface & Validation
- **Task 3.1: The Navigation System**
  - Create a dictionary representing a simple map of rooms.
  - Implement a function to move the player between rooms based on user input (e.g., "north", "south").
- **Task 3.2: The Main Game Loop**
  - In `main.py`, implement the loop: `Display State -> Get Input -> Update State -> Check Win/Loss`.
  - Use `colorama` to make the output readable (e.g., Red for damage, Green for health).
- **Task 3.3: Validation**
  - Create a test in `tests/test_combat.py` that verifies damage calculation works as expected.

## 🚀 Going Beyond (Stretch Goals)
- **Save/Load System:** Use the `json` module to allow players to save their progress and resume later.
- **ASCII Art:** Enhance the visuals by adding ASCII art for rooms and enemies.
- **Leveling System:** Implement XP and leveling logic to increase player stats over time.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)

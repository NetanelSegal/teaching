# Project 3: 2D Platformer (Advanced Graphics)

## 🌟 The Challenge
Level up your game dev skills! Build a "2D Platformer" with multiple levels, scrolling backgrounds, and animated characters. You'll master advanced game concepts like sprite groups, asset management, state-driven animations, and basic enemy AI.

## 🧠 Program Logic Flow
1.  **Initialize**: 
    -   Load level data (tilemap).
    -   Initialize the `Camera` and `Player` state.
    -   Populate Sprite Groups with tiles, platforms, and enemies.
2.  **The Game Loop**:
    -   **Events**: Process jumping and movement inputs.
    -   **Update Logic**:
        -   **Gravity**: Apply vertical acceleration to the player.
        -   **Horizontal Movement**: Update player X based on input.
        -   **Collisions**: Resolve X-axis and Y-axis collisions with solid tiles.
        -   **Enemy AI**: Update enemy movement patterns (patrolling).
        -   **Camera**: Adjust the camera view to follow the player.
    -   **Animations**: Update the player's sprite frame based on their state (Run, Jump, Fall).
    -   **Draw**: Render the level, background, and all sprites using the camera offset.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Scaffolding
- **Task 1.1: Environment Isolation**
  - Create a virtual environment: `python -m venv .venv`.
  - Activate it and install the local dependencies: `pip install -r requirements.txt`.
- **Task 1.2: Directory Structure**
  - Ensure your project follows the structure:
    - `src/core.py` (Advanced Sprite logic, AI)
    - `src/utils.py` (Level loading, Tilemap parsing)
    - `main.py` (The main game entry)
    - `tests/` (Your validation scripts)

### Phase 2: Core Logic (The Brains)
- **Task 2.1: The Tilemap System**
  - In `src/utils.py`, implement a function `load_level(level_file)`.
  - It should read a text file or JSON representing the level and return a Sprite Group of `Tile` objects.
- **Task 2.2: Physics & Gravity**
  - In `src/core.py`, implement a `Player` class with `velocity_y` for gravity.
  - Implement jumping and vertical collision handling.
  - *Engineering Standard:* Use a State Machine (e.g., IDLE, WALKING, JUMPING, FALLING) to manage animations.

### Phase 3: Interface & Validation
- **Task 3.1: Camera Scrolling**
  - Implement a `Camera` class that offsets the drawing of all sprites based on the player's position.
- **Task 3.2: Enemy AI**
  - Create an `Enemy` class that moves back and forth between two points (patrolling).
- **Task 3.3: Validation**
  - Create a test in `tests/test_player.py` that verifies the player cannot fall through solid tiles.

## 🚀 Going Beyond (Stretch Goals)
- **Level Editor:** Create a simple tool to design levels and save them as JSON files.
- **Power-ups:** Add items that give the player special abilities (e.g., double jump, temporary invincibility).
- **Parallax Scrolling:** Add multiple background layers moving at different speeds to create depth.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)

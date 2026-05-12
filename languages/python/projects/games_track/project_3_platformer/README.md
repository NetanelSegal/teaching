# Project 3: 2D Platformer (Advanced Graphics)

## 🌟 The Challenge
Level up your game dev skills! Build a "2D Platformer" with multiple levels, scrolling backgrounds, and animated characters. You'll master advanced game concepts like sprite groups, asset management, state-driven animations, and basic enemy AI.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** Sprite Groups, Camera/Scrolling, Enemy AI.
- **Internal Reference:** [Lesson 16: Advanced OOP](../../../lessons/16-OOP_Advanced_and_Dataclasses/), [Lesson 15: OOP Basics](../../../lessons/15-OOP_Basics/)
- **External Docs:** [Pygame Sprite Groups](https://www.pygame.org/docs/ref/sprite.html), [Game AI Patterns](https://gameprogrammingpatterns.com/state.html)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (Logic)
   - `src/utils.py` (Helpers)
   - `main.py` (Entry Point)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "How is a 'Level' represented? Tilemap, Enemy spawn points, Player start.")
- Implement these as Classes in `src/core.py`.

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Use a State Machine for animations and enemy behavior to keep logic clean and predictable.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py`.
- Import your logic from `src.core`, load your assets, and manage the transition between levels.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., corrupted level data, missing sprite sheets, memory leaks from not cleaning up sprite groups).
- Implement `try/except` blocks and resource management.

### Step 7: Validation
- Create a test in `tests/` for your level loading and character state logic.
- Run `pytest` to verify everything works.

## 🚀 Going Beyond (Stretch Goals)
- **Level Editor:** Create a simple tool to design levels and save them as JSON files.
- **Power-ups:** Add items that give the player special abilities (e.g., double jump, temporary invincibility).
- **Parallax Scrolling:** Add multiple background layers moving at different speeds to create depth.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)

# Project 2: Classic Arcade Clone (Pygame Basics)

## 🌟 The Challenge
Revisit the golden age of gaming! Build a "Classic Arcade Clone" (like Pong, Snake, or Space Invaders). You'll learn the fundamentals of graphical game development, including the game loop, handling real-time events, and implementing basic 2D physics and collision detection.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** The Game Loop, Event Handling, Collision Detection.
- **Internal Reference:** [Lesson 15: OOP Basics](../../../lessons/15-OOP_Basics/), [Lesson 06: Functions](../../../lessons/06-Functions/)
- **External Docs:** [Pygame Documentation](https://www.pygame.org/docs/), [Pygame Tutorials](https://www.pygame.org/wiki/tutorials)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (Logic)
   - `src/utils.py` (Helpers)
   - `main.py` (Entry Point)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "What properties do game objects have? Position, Velocity, Rect for collisions.")
- Implement these as Classes (inheriting from `pygame.sprite.Sprite`) in `src/core.py`.

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Keep functions "pure" where possible. Logic for calculating the next position or checking collisions should be separate from drawing.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py`.
- Import your logic from `src.core`, initialize the Pygame window, and run the main game loop.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., missing assets like images/sounds, resizing the window incorrectly, invalid configuration).
- Implement `try/except` blocks and asset verification logic.

### Step 7: Validation
- Create a test in `tests/` for your non-graphical logic (e.g., score calculation or boundary checks).
- Run `pytest` to verify everything works.

## 🚀 Going Beyond (Stretch Goals)
- **Sound Effects & Music:** Add audio feedback for collisions, scoring, and background music.
- **High Score Leaderboard:** Save the top scores to a file so players can compete with each other.
- **Difficulty Scaling:** Increase the speed of the game or the number of enemies as the player's score increases.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)

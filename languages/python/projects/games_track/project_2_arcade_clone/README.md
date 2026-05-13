# Project 2: Classic Arcade Clone (Pygame Basics)

## 🌟 The Challenge
Revisit the golden age of gaming! Build a "Classic Arcade Clone" (like Pong, Snake, or Space Invaders). You'll learn the fundamentals of graphical game development, including the game loop, handling real-time events, and implementing basic 2D physics and collision detection.

## 🧠 Program Logic Flow
1.  **Initialize**: Initialize Pygame, set up the display window, and create instances of game sprites (e.g., `Player`, `Ball`).
2.  **The Game Loop**:
    -   **Handle Events**: Listen for keyboard input (moves) or quit events.
    -   **Update Logic**: 
        -   Update positions based on velocity.
        -   Check for collisions (e.g., ball hitting paddle or wall).
        -   Handle boundary logic (e.g., screen wrapping or bouncing).
    -   **Update State**: Update score, lives, or game over flags.
    -   **Draw**: Clear the screen and redraw all sprites in their new positions.
    -   **Tick**: Control the frame rate (e.g., 60 FPS) to ensure smooth gameplay.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Scaffolding
- **Task 1.1: Environment Isolation**
  - Create a virtual environment: `python -m venv .venv`.
  - Activate it and install the local dependencies: `pip install -r requirements.txt`.
- **Task 1.2: Directory Structure**
  - Ensure your project follows the structure:
    - `src/core.py` (Game objects and Physics)
    - `src/utils.py` (Asset loading and UI helpers)
    - `main.py` (The Pygame loop)
    - `tests/` (Your validation scripts)

### Phase 2: Core Logic (The Brains)
- **Task 2.1: The Sprite Classes**
  - In `src/core.py`, create classes for your game objects (e.g., `Player`, `Ball`, `Enemy`).
  - Inherit from `pygame.sprite.Sprite`.
  - Implement the `update()` method to handle movement.
- **Task 2.2: Collision Detection**
  - Implement a function `check_collisions(sprite_group_a, sprite_group_b)`.
  - Use `pygame.sprite.groupcollide` or `pygame.sprite.spritecollide` to handle interactions.
  - *Engineering Standard:* Keep the physics logic independent of the rendering code.

### Phase 3: Interface & Validation
- **Task 3.1: The Game Loop**
  - In `main.py`, initialize Pygame and create the screen.
  - Implement the loop: `Handle Events -> Update Logic -> Draw Frame -> Clock Tick`.
- **Task 3.2: Input Handling**
  - Capture keyboard events (e.g., `pygame.K_LEFT`, `pygame.K_RIGHT`) to move the player.
- **Task 3.3: Validation**
  - Create a test in `tests/test_physics.py` that verifies boundary checks (e.g., "Does the ball bounce when it hits the wall?").

## 🚀 Going Beyond (Stretch Goals)
- **Sound Effects & Music:** Add audio feedback for collisions, scoring, and background music.
- **High Score Leaderboard:** Save the top scores to a file so players can compete with each other.
- **Difficulty Scaling:** Increase the speed of the game or the number of enemies as the player's score increases.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)

# Project 2: Multi-Tool Discord Bot (Integration & Async)

## 🌟 The Challenge
Turn your Discord server into a smart workspace! Build a "Multi-Tool Discord Bot" that can handle diverse tasks like channel moderation, fetching real-time weather data, and even summarizing long messages using AI. This project will teach you event-driven programming and how to manage multiple asynchronous tasks simultaneously.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** Asynchronous Programming (`asyncio`), Event-Driven Logic, Command Handling.
- **Internal Reference:** [Lesson 21: Concurrency](../../lessons/21-Concurrency_and_Asynchronous_Programming/), [Lesson 18: Decorators](../../lessons/18-Decorators_and_Context_Managers/)
- **External Docs:** [discord.py Documentation](https://discordpy.readthedocs.io/en/stable/), [Discord Developer Portal](https://discord.com/developers/docs/intro)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (Logic - API tools/Moderation)
   - `src/utils.py` (Helpers - Bot commands)
   - `main.py` (Bot Entry Point)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "How do we store bot configuration or server-specific settings?")
- Implement these using Classes or Dictionaries in `src/core.py`.

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Keep your API wrappers and moderation logic independent of the Discord-specific code for better testability.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py` using `discord.ext.commands`.
- Import your tools from `src.core` and register them as bot commands or event listeners.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., rate limiting from APIs, bot missing permissions in a channel, malformed user commands).
- Implement `on_command_error` handlers and robust input validation.

### Step 7: Validation
- Create a test in `tests/` for your core logic tools (e.g., testing the weather-fetching logic with a mock response).
- Run `pytest` to verify everything works.

## 🚀 Going Beyond (Stretch Goals)
- **Database Persistence:** Use SQLite to track user "reputation" or store persistent bot settings.
- **Voice Support:** Implement a command that allows the bot to join a voice channel and play music or text-to-speech messages.
- **Custom Dashboard:** Build a simple Streamlit dashboard to manage the bot's settings and view logs from the web.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)

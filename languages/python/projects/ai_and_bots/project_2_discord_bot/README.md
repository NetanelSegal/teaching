# Project 2: Multi-Tool Discord Bot (Integration & Async)

## 🌟 The Challenge
Turn your Discord server into a smart workspace! Build a "Multi-Tool Discord Bot" that can handle diverse tasks like channel moderation, fetching real-time weather data, and even summarizing long messages using AI. This project will teach you event-driven programming and how to manage multiple asynchronous tasks simultaneously.

## 🧠 Program Logic Flow
1.  **Launch**: The program connects to the Discord API using a bot token.
2.  **Listen**: The bot enters an asynchronous loop, listening for events (e.g., `on_message`).
3.  **Command Detection**: When a message starts with the prefix (e.g., `!`), the bot identifies the command and its arguments.
4.  **Execute Tool**:
    -   **Weather**: Fetch data from a weather API using `aiohttp`.
    -   **Moderation**: Call the Discord API to kick/ban a user.
    -   **AI Tool**: Send a request to an LLM for summarization or chat.
5.  **Response**: The bot sends a message back to the Discord channel with the result of the command.
6.  **Error Handling**: If a command fails (e.g., wrong arguments), the `on_command_error` event triggers a user-friendly error message.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Scaffolding
- **Task 1.1: Environment Isolation**
  - Create a virtual environment: `python -m venv .venv`.
  - Activate it and install the local dependencies: `pip install -r requirements.txt`.
- **Task 1.2: Directory Structure**
  - Ensure your project follows the structure:
    - `src/core.py` (API wrappers and Moderation logic)
    - `src/utils.py` (Discord command definitions)
    - `main.py` (The Bot entry point)
    - `tests/` (Your validation scripts)

### Phase 2: Core Logic (The Brains)
- **Task 2.1: The Bot Client**
  - In `main.py`, initialize the Discord `Bot` with the appropriate `intents` (messages, members).
  - Implement the `on_ready` event to confirm the bot is online.
- **Task 2.2: Async Tools**
  - In `src/core.py`, implement an async function `get_weather(city)`.
  - *Engineering Standard:* Use `aiohttp` or run the synchronous `requests` call in a separate thread to avoid blocking the bot's event loop.

### Phase 3: Interface & Validation
- **Task 3.1: Command Registration**
  - In `src/utils.py`, define bot commands like `!weather`, `!kick`, and `!summarize`.
  - Use decorators like `@bot.command()` to register them.
- **Task 3.2: Error Handling**
  - Implement a global error handler to notify the user if a command fails or if they lack permissions.
- **Task 3.3: Validation**
  - Create a test in `tests/test_tools.py` that verifies your logic functions (like weather parsing) work correctly using mock data.

## 🚀 Going Beyond (Stretch Goals)
- **Database Persistence:** Use SQLite to track user "reputation" or store persistent bot settings.
- **Voice Support:** Implement a command that allows the bot to join a voice channel and play music or text-to-speech messages.
- **Custom Dashboard:** Build a simple Streamlit dashboard to manage the bot's settings and view logs from the web.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)

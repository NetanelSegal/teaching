# Project 1: AI Chatbot with History (API Consumption)

## 🌟 The Challenge
Build your own personal AI assistant! Create a terminal-based chatbot powered by Gemini 2.5 Flash that doesn't just answer questions but actually remembers the context of your conversation. You'll master API consumption, JSON data handling, and the logic of maintaining a message history for a seamless user experience.

## 🧠 Program Logic Flow
1.  **Initialize**: Load the Gemini API key from the `.env` file and initialize the `ChatSession` with an empty history.
2.  **Input Loop**: Wait for the user to type a message in the terminal.
3.  **Update History**: Append the user's message to the session's history list as a dictionary: `{"role": "user", "content": "..."}`.
4.  **Request**: Send the *entire* message history to the Gemini API.
5.  **Process Response**:
    -   Extract the assistant's response from the API result.
    -   Append the assistant's message to the history: `{"role": "assistant", "content": "..."}`.
6.  **Output**: Print the assistant's response to the terminal and loop back to step 2.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Scaffolding
- **Task 1.1: Environment Isolation**
  - Create a virtual environment: `python -m venv .venv`.
  - Activate it and install the local dependencies: `pip install -r requirements.txt`.
- **Task 1.2: Directory Structure**
  - Ensure your project follows the structure:
    - `src/core.py` (API logic and history management)
    - `src/utils.py` (Config loading and console formatting)
    - `main.py` (The main chat loop)
    - `tests/` (Your validation scripts)

### Phase 2: Core Logic (The Brains)
- **Task 2.1: The Gemini Client**
  - In `src/core.py`, initialize the Gemini client using an API key from `.env`.
  - Implement a function `get_ai_response(messages)`.
- **Task 2.2: Context Management**
  - Create a class `ChatSession` that maintains a `history` list.
  - Implement methods `add_user_message(content)` and `add_assistant_message(content)`.
  - *Engineering Standard:* Ensure the history is passed to the API in the correct format (list of dictionaries with `role` and `content`).

### Phase 3: Interface & Validation
- **Task 3.1: The Interactive Loop**
  - In `main.py`, create a `while True` loop that takes user input and prints the AI response.
  - Implement a "quit" command to exit the chat.
- **Task 3.2: Secure Key Handling**
  - Ensure the API key is NEVER hardcoded. Use `python-dotenv` to load it from a `.env` file (which should be in your `.gitignore`).
- **Task 3.3: Validation**
  - Create a test in `tests/test_session.py` that verifies the `ChatSession` correctly appends messages and maintains the order.

## 🚀 Going Beyond (Stretch Goals)
- **Persona/System Prompts:** Allow the user to choose a "personality" for the bot (e.g., "Sarcastic Assistant" or "Code Mentor") by injecting different system prompts.
- **File Export:** Save the chat transcript to a Markdown or PDF file at the end of the session.
- **Image Generation:** Integrate Gemini's multimodal features to allow the chatbot to "see" images provided in the chat.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)

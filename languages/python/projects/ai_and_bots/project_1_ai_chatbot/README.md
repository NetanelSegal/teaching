# Project 1: AI Chatbot with History (API Consumption)

## 🌟 The Challenge
Build your own personal AI assistant! Create a terminal-based chatbot powered by OpenAI's GPT models that doesn't just answer questions but actually remembers the context of your conversation. You'll master API consumption, JSON data handling, and the logic of maintaining a message history for a seamless user experience.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** API Consumption, JSON Parsing, Conversation Context.
- **Internal Reference:** [Lesson 08: Dictionaries](../../lessons/08-Dictionaries_and_Sets/), [Lesson 14: Exception Handling](../../lessons/14-Exception_Handling/)
- **External Docs:** [OpenAI API Reference](https://platform.openai.com/docs/api-reference), [Python requests (or openai client)](https://github.com/openai/openai-python)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (Logic)
   - `src/utils.py` (Helpers)
   - `main.py` (Entry Point)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "How is a message represented? Role (system/user/assistant) and Content.")
- Implement the message history as a List of Dictionaries in `src/core.py`.

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Keep functions "pure." The core logic should take a message history, call the API, and return the new assistant message.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py`.
- Import your logic from `src.core`, manage the main chat loop, and handle the API key securely using `python-dotenv`.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., API key is missing or invalid, network is down, the conversation exceeds the model's token limit).
- Implement `try/except` blocks and error messages for these scenarios.

### Step 7: Validation
- Create a test in `tests/` that mocks the API response to verify your history management logic works correctly.
- Run `pytest` to verify everything works.

## 🚀 Going Beyond (Stretch Goals)
- **Persona/System Prompts:** Allow the user to choose a "personality" for the bot (e.g., "Sarcastic Assistant" or "Code Mentor") by injecting different system prompts.
- **File Export:** Save the chat transcript to a Markdown or PDF file at the end of the session.
- **Image Generation:** Integrate DALL-E to allow the chatbot to generate images based on user descriptions.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)

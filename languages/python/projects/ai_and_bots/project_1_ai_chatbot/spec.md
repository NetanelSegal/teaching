# Project Spec: AI Chatbot with History

## Overview
Build a terminal-based interactive chatbot powered by Gemini 2.5 Flash. The chatbot should maintain conversation context (history) during a session, allowing users to ask follow-up questions.

## Requirements

### 1. Environment Setup
- Use `python-dotenv` to manage your `GEMINI_API_KEY`.
- Your code should never hardcode the API key.

### 2. Core Functionality
- **Initial Greeting:** The bot should greet the user and explain its purpose.
- **The Loop:** The program should run in a loop, asking for user input until the user types `exit`, `quit`, or `bye`.
- **History Management:** 
    - Maintain a list of messages to send to the Gemini API.
    - Each entry in the list should be a dictionary with `role` ("user", or "model") and `parts` (list containing text).
    - Use "System Instructions" to define the bot's personality (e.g., "You are a helpful coding assistant").
- **API Call:** Use the `google-generativeai` library to send the message history and get a completion.

### 3. User Experience
- Display a loading indicator or message while waiting for the API response.
- Clear and readable formatting for the bot's responses.
- Error handling for network issues or API limits.

## Technical Milestones

### Milestone 1: Basic API Connection
Successfully send a single prompt to Gemini and print the response.

### Milestone 2: The Interactive Loop
Wrap the logic in a `while` loop so the user can keep chatting.

### Milestone 3: Memory (Context)
Append both user messages and model responses to the history list. Pass this full list to the API in each iteration.

### Milestone 4: Refinement
Add a command to "reset" the conversation or change the "system" prompt.

## Evaluation Criteria
- **Security:** Is the API key protected?
- **Logic:** Does the bot actually remember previous messages in the session?
- **Code Quality:** Is the code modular? Are functions used correctly?
- **Error Handling:** Does it crash if the internet is down?

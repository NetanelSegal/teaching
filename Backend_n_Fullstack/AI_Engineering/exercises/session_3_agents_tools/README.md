# Lab 3: Database Agent

## Objective
Build an autonomous agent that can use tools to fetch real-time data from a "database" (mocked as a JS object).

## Project Structure
- `starter/`: Your workspace.
- `solution/`: Reference implementation.

## 🧠 Program Logic Flow
1.  **Reasoning**: The user asks a question that requires external data (e.g., "Where does Yoav live?").
2.  **Tool Selection**: The Gemini model analyzes the available tools (JSON Schemas) and decides to call `getUserInfo`.
3.  **Tool Call**: The model returns a `call` object containing the function name and arguments (e.g., `{ email: "yoav@example.com" }`).
4.  **Local Execution**: Your code receives the tool call, executes the local JavaScript function `getUserInfo`, and gets the result.
5.  **Closing the Loop**: The result is sent back to the model.
6.  **Final Answer**: Gemini synthesizes the tool output into a natural language response for the user.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Tools
- **Task 1.1: Project Setup**
  - Initialize the project and install `@google/genai` and `dotenv`.
- **Task 1.2: Tool Definition (`tools.js`)**
  - Create a mock database (JS object).
  - Implement `getUserInfo(email)`.
  - Create the Gemini Tool definition for this function.

### Phase 2: The Agentic Loop
- **Task 2.1: The Inference Call (`agent.js`)**
  - Implement a function `runAgent(prompt)`.
  - Call Gemini with `tools` config.
- **Task 2.2: Tool Handling**
  - If a tool call is present in the response:
    1. Parse the arguments.
    2. Call your local JS function.
    3. Push the tool result into the message history.
    4. Call Gemini again with the updated history.

### Phase 3: The API Layer
- **Task 3.1: Server Setup (`index.js`)**
  - Implement `POST /chat`.
  - Allow the user to "talk" to your agent.

## 🚀 Challenge
Add a second tool `updateUserLocation(email, newLocation)` and see if the agent can handle a request like: "Yoav moved to Haifa, please update his record and confirm."

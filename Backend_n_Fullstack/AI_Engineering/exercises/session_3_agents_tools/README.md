# Lab 3: Database Agent

## Objective
Build an autonomous agent that can use tools to fetch real-time data from a "database" (mocked as a JS object).

## Project Structure
- `starter/`: Your workspace.
- `solution/`: Reference implementation.

## Tasks

### 1. Tool Definition (tools.js)
- Define a function `getUserInfo(email)` that returns data like name, location, and subscription status.
- Create a JSON Schema definition for this tool following the OpenAI `tools` format.

### 2. The Agent Loop (agent.js)
- Initialize the OpenAI client.
- Send the user's prompt (e.g., "Tell me about yoav@example.com") along with your tool definitions.
- Check if the model returned `tool_calls`.
- If it did, execute the `getUserInfo` function with the arguments provided by the AI.

### 3. Closing the Loop
- Send the tool's output back to OpenAI.
- Let OpenAI generate the final natural language response for the user.

### 4. API Layer (index.js)
- Create an Express route `POST /chat`.
- Allow the user to interact with your "Database Agent".

---

## Challenge
Add a second tool `updateUserLocation(email, newLocation)` and see if the agent can handle a request like: "Yoav moved to Haifa, please update his record and confirm."

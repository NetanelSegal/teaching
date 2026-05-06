# Session 3: Agents & Tool Use (Autonomous Logic)

## 1. The Hook (5 mins)
You ask an AI: *"What is the current temperature in Tel Aviv?"*
Without tools, the AI might hallucinate or say: *"I don't have real-time data."*

But if you give the AI a "Weather Tool," it can pause, call an external API, get the temperature, and then finish its sentence. This is the difference between a **Chatbot** and an **Agent**.

## 2. Theory (45 mins)

### Function Calling (Tool Use)
OpenAI doesn't *call* the function for you. Instead:
1.  **Definitions**: You tell OpenAI about your functions (name, parameters, description) using JSON Schema.
2.  **The Pause**: If the user's prompt matches a tool, OpenAI returns a `tool_call` instead of a text response.
3.  **The Execution**: YOUR Node.js server executes the actual code (e.g., `axios.get` or `db.delete`).
4.  **The Finish**: You send the tool's result back to OpenAI, and it generates the final "natural language" response.

### What is an Agent?
An agent is an AI that follows a loop:
- **Thought**: "The user wants to delete their account."
- **Action**: "I should call the `deleteUser` tool."
- **Observation**: "The tool returned `success: true`."
- **Final Response**: "Your account has been deleted."

### Deep Dive: The Agentic Lifecycle
#### 1. Why JSON Schema?
OpenAI tools are defined using the **JSON Schema** standard. This is critical because the AI doesn't see your code; it sees a *description* of your code. 
- **Under the hood**: OpenAI has been fine-tuned to recognize these schemas and generate arguments that match them exactly. If your description is vague, the AI will provide "hallucinated" arguments.

#### 2. Determinism in Tools
While the AI's response is probabilistic (non-deterministic), your tools should be **deterministic**. 
- **Rule**: The AI should never decide *how* to calculate a tax; it should call a `calculateTax` tool that you wrote in pure JavaScript. This moves the logic out of the model and back into your control.

#### 3. Agentic Loops: ReAct Pattern
Most agents follow the **ReAct (Reason + Act)** pattern. 
- **Single-shot**: The AI calls one tool and responds.
- **Multi-step (Recursive)**: The AI calls tool A, sees the result, and realizes it *now* needs to call tool B to finish the task. 
*   **The Problem**: Recursive loops can run forever (and drain your bank account). Engineers must implement a `maxIterations` limit in their Node.js code to "force" the agent to finish.

## 3. The Lab (90 mins)
*Reference: [Lab 3: Database Agent](../../exercises/session_3_agents_tools/README.md)*

**Task:** Build a "Database Agent".
1. Define a tool `getUserInfo(email)` that returns mock data from a JS object.
2. Implement the "OpenAI Tool Loop" in Node.js.
3. Verify that the AI can answer "Where does Yoav live?" by autonomously deciding to call the tool.

---
## Technical Reference
```javascript
const tools = [
  {
    type: "function",
    function: {
      name: "get_weather",
      parameters: {
        type: "object",
        properties: { location: { type: "string" } }
      }
    }
  }
];
```

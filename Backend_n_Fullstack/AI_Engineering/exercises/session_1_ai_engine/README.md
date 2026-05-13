# Lab 1: Structured Recipe Generator

## Objective
Build a Node.js API that uses Google Gemini to generate structured recipe data and validates it using Zod.

## Project Structure
- `starter/`: Your workspace. Follow the tasks below.
- `solution/`: Reference implementation.

## 🧠 Program Logic Flow
1.  **Request**: The client sends a "cooking goal" (e.g., "A vegan lasagna") to the Express server.
2.  **Prompt Engineering**:
    -   The system combines the user's goal with a **System Instruction** (Persona: Professional Chef).
    -   The prompt specifies that the output must be **Valid JSON** matching the schema.
3.  **AI Inference**: The Google Gemini model processes the prompt and returns a JSON string.
4.  **Validation**:
    -   The string is parsed into a JavaScript object.
    -   **Zod** validates the object against `RecipeSchema`.
    -   If valid, the data is passed to the next step; if invalid, an error is thrown.
5.  **Response**: The server returns the structured, validated recipe to the client.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Scaffolding
- **Task 1.1: Project Initialization**
  - Run `npm init -y` inside the `starter/` directory.
  - Set `"type": "module"` in `package.json`.
  - Install dependencies: `npm install @google/generative-ai zod express dotenv`.
- **Task 1.2: Environment Configuration**
  - Create a `.env` file with your `GEMINI_API_KEY`.
  - Create `index.js`, `schema.js`, and `recipeGenerator.js`.

### Phase 2: Schema & AI Logic
- **Task 2.1: The Data Contract (schema.js)**
  - Define `RecipeSchema` using Zod.
  - Ensure it includes `name`, `timeToPrepare`, `difficulty` (enum), `ingredients`, and `instructions`.
- **Task 2.2: The AI Engine (recipeGenerator.js)**
  - Initialize the `GoogleGenerativeAI` client.
  - Implement `generateRecipe(goal)` using `model.generateContent()`.
  - Set `responseMimeType: "application/json"` in the generation config.
  - Use `RecipeSchema.parse()` to validate the result before returning it.

### Phase 3: The API Layer (index.js)
- **Task 3.1: Server Setup**
  - Initialize an Express app with `express.json()` middleware.
- **Task 3.2: The Endpoint**
  - Create `POST /generate-recipe`.
  - Call `generateRecipe()` and handle potential AI or validation errors with a `try/catch` block.

## 🚀 Challenge
Add a `nutritionalInfo` object to the schema and update the AI instructions to provide calorie counts.

# Lab 1: Structured Recipe Generator

## Objective
Build a Node.js API that uses Google Gemini to generate structured recipe data and validates it using Zod.

## Project Structure
- `starter/`: Your workspace. Follow the tasks below.
- `solution/`: Reference implementation.

## Tasks

### 1. Project Initialization
- Initialize a new Node.js project.
- Install dependencies: `@google/generative-ai`, `zod`, `express`, `dotenv`.
- Configure the project to use ES Modules (`"type": "module"`).

### 2. Environment Setup
- Create a `.env` file with `GEMINI_API_KEY` and `PORT`.

### 3. Data Schema (schema.js)
- Define a Zod schema named `RecipeSchema`.
- It must include: `name`, `timeToPrepare`, `difficulty` (enum), `ingredients` (array), and `instructions` (array).

### 4. AI Logic (recipeGenerator.js)
- Initialize the Google Gemini client.
- Create a function `generateRecipe(goal)`.
- Use a **System Instruction** to define the AI's persona as a "Professional Chef".
- Configure the model to output **valid JSON** (`responseMimeType: "application/json"`).
- Validate the AI response against your Zod schema.

### 5. API Layer (index.js)
- Create an Express server.
- Implement a `POST /generate-recipe` route that accepts a `goal`.
- Handle errors gracefully and return the validated recipe.

---

## Challenge
Add a `nutritionalInfo` object to the schema and update the AI instructions to provide calorie counts.

# ORT AI Engineering Curriculum: Standardized Rules

## AI Stack
- **Model**: `gemini-2.5-flash` for all reasoning and generation.
- **Embeddings**: `gemini-embedding-001` (Output Dimensionality: **768**).
- **SDK (Node.js)**: `@google/genai`.
- **SDK (Python)**: `google-generativeai`.

## Implementation Standards
1.  **Environment**: Always import `dotenv/config` at the very top of Node.js files.
2.  **Safety**: Always include basic `safetySettings` in production-ready endpoints (Lab 5).
3.  **JSON Output**: 
    - Use `responseMimeType: "application/json"`.
    - Explicitly forbid Markdown code blocks in the prompt to prevent parsing errors.
    - Use **Zod** for schema validation in Node.js.
4.  **Vector DB**:
    - **Pinecone**: Metric = `Cosine`, Dimensions = **768**.
5.  **Multimodal**:
    - Use `inlineData` with proper `mimeType`.
    - Prefer combining text and image parts in a single content object.

## Repository Structure
- `exercises/`: Standardized labs with `starter/`, `solution/`, and `tests/verify_lab.js`.
- `lessons/`: Theoretical content removal of GPT-4o/OpenAI references.
- `README.md`: Must contain "🧠 Program Logic Flow" section.

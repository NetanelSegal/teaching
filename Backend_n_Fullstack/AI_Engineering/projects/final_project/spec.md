# Final Project: The Autonomous AI Support System

## Objective
Build a complete, production-ready AI Support System that combines everything you've learned:
- **Session 1**: Structured JSON output using `@google/genai`.
- **Session 2**: RAG for searching product documentation using Gemini Embeddings.
- **Session 3**: Agents to check order status using Tool Use.
- **Session 4**: Multimodal support to analyze screenshots of errors.
- **Session 5**: Streaming responses and caching for performance.

## Project Requirements

### 1. The Knowledge Base (RAG)
- Ingest a `docs/` folder containing markdown files.
- Use Pinecone for storage and `@google/genai` (model: `text-embedding-004`) for embeddings.

### 2. The Agentic Core
- Implement a support agent using `gemini-2.5-flash` that can:
    - Search the docs (RAG Tool).
    - Check user account status (Database Tool).
    - Analyze error screenshots (Multimodal Tool).

### 3. The API
- **POST /support**: A streaming endpoint (SSE) that handles text and optional image uploads.
- **GET /usage**: Returns total tokens consumed (using `usageMetadata`).

## Submission
- A GitHub repository with `backend/`, `docs/`, and `README.md`.

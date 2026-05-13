# Lab 5: The Industrial-Grade AI Assistant

## Objective
Optimize an AI application for production using caching, streaming, and token tracking.

## Project Structure
- `starter/`: Your workspace.
- `solution/`: Reference implementation.

## 🧠 Program Logic Flow
### Semantic Caching
1.  **Cache Lookup**: A user sends a prompt. The app checks Redis for a previously stored answer to this exact prompt.
2.  **Hit**: If found, return the answer immediately (0 tokens, ~20ms).
3.  **Miss**: If not found, call Gemini 2.5 Flash.
4.  **Save**: Store the AI's answer in Redis for future requests.

### Streaming (SSE)
1.  **Open Connection**: The client initiates an SSE connection.
2.  **Iterative Response**: As Gemini generates "chunks" of text, the server immediately pushes each chunk to the client.
3.  **End**: The connection is closed once the full response is delivered.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Caching
- **Task 1.1: Project Setup**
  - Initialize and install: `@google/genai`, `ioredis` (or `@upstash/redis`), `express`, `dotenv`.
- **Task 1.2: Cache Logic (`cache.js`)**
  - Connect to Redis.
  - Implement `getCachedResponse(prompt)` and `setCachedResponse(prompt, response)`.

### Phase 2: Token Tracking & Streaming
- **Task 2.1: Usage Logging**
  - For Gemini, extract `usageMetadata.totalTokenCount` and append it to a `usage.log` file.
- **Task 2.2: Streaming Logic (`stream.js`)**
  - Implement a function that uses `ai.models.generateContentStream()`.
  - Handle the async iterator to process chunks.

### Phase 3: The Production API
- **Task 3.1: SSE Implementation (`index.js`)**
  - Set the appropriate headers for SSE.
  - Integrate the cache-check before starting the stream.

## 🚀 Challenge
Implement a "Hard Limit": If a user (identified by an IP or API key) exceeds 5,000 tokens in the cache, block their further requests with a 429 status code.


# Lab 5: The Industrial-Grade AI Assistant

## Objective
Optimize an AI application for production using caching, streaming, and token tracking.

## Project Structure
- `starter/`: Your workspace.
- `solution/`: Reference implementation.

## Tasks

### 1. Semantic Caching (Redis)
- Connect to Upstash Redis.
- Before calling the AI, check if the prompt exists in the cache.
- If it does, return the cached result immediately.

### 2. Token Tracking
- For every AI response, extract `usage.total_tokens`.
- Log the usage to a local file or console, simulating a billing system.

### 3. Streaming (SSE)
- Change your API to use `stream: true`.
- Implement Server-Sent Events (SSE) in Express (`res.setHeader('Content-Type', 'text/event-stream')`).
- Stream the chunks to the client as they arrive.

---

## Challenge
Implement a "Hard Limit": If a user (identified by an IP or API key) exceeds 5,000 tokens in the cache, block their further requests with a 429 status code.

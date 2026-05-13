# Final Project: The Autonomous AI Support System

## 🌟 The Goal
Build a professional, production-ready AI Support System that handles complex customer queries using RAG, Agents, and Vision. This is the capstone of the AI Engineering course and requires integrating every session's core concepts.

## 🧠 System Architecture
1.  **Ingestion Service**: Processes Markdown files in `docs/` and populates a Pinecone index using `text-embedding-004`.
2.  **The Agent Core**: A reasoning loop using **Gemini 2.5 Flash** that can:
    -   **Tool: RAG**: Search product documentation for answers.
    -   **Tool: Orders**: Mock tool to check account/order status.
    -   **Tool: Vision**: Analyze error screenshots to diagnose technical issues.
3.  **Streaming API**: An Express server that delivers responses via Server-Sent Events (SSE).

## 🛠️ Implementation Phases

### Phase 1: Knowledge Base (Session 2)
- Set up a Pinecone index for the support documents.
- Implement an ingestion script to embed and store the content of the `docs/` folder.

### Phase 2: Agent Tools (Session 1 & 3)
- Define Zod schemas for structured responses.
- Implement the "Order Status" tool and the "Document Search" tool.
- Set up the Gemini agent loop to coordinate tool usage.

### Phase 3: Multimodal & Production (Session 4 & 5)
- Add Vision capabilities to handle image uploads.
- Implement SSE streaming for the final response.
- Integrate semantic caching with Redis to optimize repeat queries.

## 📂 Project Structure
- `backend/`: Your Node.js application.
- `docs/`: Product documentation for RAG.
- `README.md`: This file.
- `spec.md`: The technical requirements.

## 🧠 Program Logic Flow
1.  **Ingest Docs**: 
    - Read Markdown -> Chunk -> Embed (`gemini-embedding-001`) -> Pinecone.
2.  **User Request**: 
    - POST `/support` with prompt (and optional image).
3.  **Agent Reasoning**: 
    - Gemini 2.5 Flash decides:
      - Does it need **RAG**? (Call `searchDocs` tool).
      - Does it need **Database**? (Call `checkOrder` tool).
      - Does it need **Vision**? (Analyze parts of the message).
4.  **Execute & Respond**:
    - Run tool -> Update history -> Generate Final Response.
    - Stream chunks via **SSE** back to user.
5.  **Cache**:
    - If prompt exists in Redis, skip steps 3-4 and return cached answer.

## 🚀 Getting Started
1. Create a `backend` folder and run `npm init -y`.
2. Install the necessary stack: `@google/genai`, `@pinecone-database/pinecone`, `express`, `zod`, `dotenv`, `multer`, `ioredis`.
3. Follow the `spec.md` for detailed technical requirements.

# Lab 2: Chat with Your Knowledge Base

## Objective
Implement a RAG (Retrieval-Augmented Generation) system using Gemini embeddings and Pinecone vector database.

## Project Structure
- `starter/`: Your workspace.
- `solution/`: Reference implementation.

## 🧠 Program Logic Flow
### Ingestion (Data Prep)
1.  **Chunk**: Break the `knowledge.txt` file into smaller, overlapping text chunks.
2.  **Embed**: Send each chunk to the Gemini Embedding API (`text-embedding-004`) to get its numeric vector representation.
3.  **Upsert**: Store the vectors and their corresponding text (metadata) into the Pinecone index.

### Retrieval (Querying)
1.  **Search**: The user asks a question. The question is embedded.
2.  **Context Fetch**: Query Pinecone for the top 3 vectors closest to the question's vector.
3.  **Prompt Injection**: Combine the user's question with the retrieved text chunks as context.
4.  **Augmented Generation**: Send the augmented prompt to Gemini 2.5 Flash to get an answer grounded in your data.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Scaffolding
- **Task 1.1: Pinecone Provisioning**
  - Create an index in Pinecone (768 dims, Cosine similarity).
- **Task 1.2: Dependencies**
  - Initialize the project and install: `@google/genai`, `@pinecone-database/pinecone`, `dotenv`.

### Phase 2: The Ingestion Pipeline
- **Task 2.1: Ingestion Script (`ingest.js`)**
  - Read `knowledge.txt`.
  - Implement a chunking strategy.
  - Generate embeddings for each chunk using `text-embedding-004`.
  - Upsert to Pinecone.

### Phase 3: The RAG Engine
- **Task 3.1: Querying Logic (`query.js`)**
  - Implement the `askQuestion(query)` function.
  - Logic: Embed query -> Query Pinecone -> Construct Prompt -> Call Gemini 2.5 Flash.
- **Task 3.2: The API Layer (`index.js`)**
  - Implement `POST /ask`.
  - Return the AI's grounded response.

## 🚀 Challenge
Implement "Chunk Metadata": Store the original text and the source filename inside the Pinecone vector metadata, and display the source in your API response.

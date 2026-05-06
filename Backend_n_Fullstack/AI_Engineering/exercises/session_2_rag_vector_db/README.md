# Lab 2: Chat with Your Knowledge Base

## Objective
Implement a RAG (Retrieval-Augmented Generation) system using OpenAI embeddings and Pinecone vector database.

## Project Structure
- `starter/`: Your workspace.
- `solution/`: Reference implementation.

## Tasks

### 1. Pinecone Setup
- Create a free account on Pinecone.io.
- Create a new index with 1536 dimensions (for OpenAI embeddings) and use "Cosine" similarity.

### 2. Ingestion Script (ingest.js)
- Read a local text file (e.g., `knowledge.txt`).
- Break the text into chunks.
- Generate embeddings for each chunk using OpenAI's `text-embedding-3-small`.
- Upsert the vectors into your Pinecone index.

### 3. RAG Logic (query.js)
- Create a function that:
    1. Takes a user question.
    2. Embeds the question.
    3. Queries Pinecone for the top 3 most relevant matches.
    4. Constructs a prompt: "Use the following context to answer the question: [Context] \n Question: [Question]".
    5. Calls GPT-4o to get the final answer.

### 4. API Layer (index.js)
- Create an Express route `POST /ask`.
- Return the AI's response based on your private knowledge base.

---

## Challenge
Implement "Chunk Metadata": Store the original text and the source filename inside the Pinecone vector metadata, and display the source in your API response.

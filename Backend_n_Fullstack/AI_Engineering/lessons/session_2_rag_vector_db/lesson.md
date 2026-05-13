# Session 2: Knowledge Augmentation (RAG & Vector DBs)

## 1. The Hook (5 mins)
You ask Gemini: *"What are the internal rules for employee parking at ORT's headquarters?"*
The AI will likely apologize and say it doesn't have access to that information. 

AI training data is frozen in time and doesn't include your private files. To fix this, we don't "re-train" the model; we give it a **Search Engine**.

## 2. Theory (45 mins)

### What is RAG?
**Retrieval-Augmented Generation (RAG)** is a 3-step process:
1.  **Retrieve**: Search your private data for relevant snippets.
2.  **Augment**: Add those snippets to the AI's prompt.
3.  **Generate**: Ask the AI to answer based *only* on the provided snippets.

### The Vector Database
Standard databases (MySQL/MongoDB) search for exact words. **Vector Databases** search for **meaning**.
- **Embeddings**: A way to turn text into an array of numbers (a vector). Similar meanings (e.g., "king" and "queen") live close together in "vector space."
- **Pinecone**: A managed vector database that allows us to store and query these mathematical representations of text.

### Deep Dive: The Geometry of Meaning
#### 1. What is an Embedding Dimension?
Gemini's `text-embedding-004` produces a vector with **768 dimensions**. This means every piece of text is mapped to a point in a 768-dimensional space. Each dimension represents a different semantic feature.

#### 2. Cosine Similarity: The Math of "Nearness"
How does Pinecone know which vectors are similar? It uses **Cosine Similarity**. 
Mathematically, it calculates the cosine of the angle between two vectors. 
- If the angle is **0°** (Cosine = 1), the vectors are identical in meaning. 
- If the angle is **90°** (Cosine = 0), the vectors are completely unrelated. 
This is better than "Euclidean distance" because it ignores the length of the text and focuses only on the *direction* of the meaning.

#### 3. Scaling Search: HNSW Indexing
If you have 10 million vectors, checking every one of them for a match would take seconds (too slow). Vector databases use algorithms like **HNSW (Hierarchical Navigable Small Worlds)**. 
- **The Concept**: It builds a multi-layered graph where the top layer has only a few "hub" vectors and the bottom layer has all of them. 
- **The Process**: The search starts at the top, hops between "hubs" to get close to the target, and then "descends" to find the exact neighbors. This reduces search time from $O(N)$ to $O(\log N)$.

### The Workflow
1.  **Chunking**: Break a PDF/File into small 500-word pieces.
2.  **Embedding**: Send each piece to Gemini's `text-embedding-004` model.
3.  **Upsert**: Save the resulting vectors into Pinecone.

## 3. The Lab (90 mins)
*Reference: [Lab 2: Chat with Your Knowledge Base](../../exercises/session_2_rag_vector_db/README.md)*

**Task:** "Chat with Your Knowledge Base".
1. Setup a Pinecone Index.
2. Create a script to "ingest" a text file into vectors.
3. Build an Express route that takes a question, embeds it, retrieves the top 3 matches from Pinecone, and generates an answer using Gemini 2.5 Flash.

---
## Technical Reference
```javascript
// Embedding Example
const embedding = await ai.models.embedContent({
  model: "text-embedding-004",
  contents: [{ parts: [{ text: "The parking rules state that..." }] }],
});
// result: [0.0023, -0.012, 0.543, ...]
```

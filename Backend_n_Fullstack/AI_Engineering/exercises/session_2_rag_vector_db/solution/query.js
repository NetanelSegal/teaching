import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import { Pinecone } from "@pinecone-database/pinecone";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index(process.env.PINECONE_INDEX);

export async function askQuestion(question) {
  // 1. Embed the user question using Gemini
  const embeddingResponse = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: [{ parts: [{ text: question }] }],
    config: {
      outputDimensionality: 768,
    }
  });

  const queryVector = embeddingResponse.embeddings[0].values;

  // 2. Query Pinecone for relevant context
  const queryResponse = await index.query({
    vector: queryVector,
    topK: 3,
    includeMetadata: true,
  });

  const context = queryResponse.matches.map(m => m.metadata.text).join("\n\n");

  // 3. Generate Answer using Gemini 2.5 Flash
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Use the following context to answer the question. If the answer is not in the context, say you don't know.
    
    Context:
    ${context}
    
    Question: ${question}`,
    config: {
      systemInstruction: "You are a helpful assistant specialized in our knowledge base."
    }
  });

  return response.text;
}

import { GoogleGenAI } from "@google/genai";
import { Pinecone } from "@pinecone-database/pinecone";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index(process.env.PINECONE_INDEX);

export async function askQuestion(question) {
  const embeddingResponse = await ai.models.embedContent({
    model: "text-embedding-3-small",
    contents: [{ parts: [{ text: question }] }],
  });

  const queryResponse = await index.query({
    vector: embeddingResponse.embeddings[0].values,
    topK: 3,
    includeMetadata: true,
  });

  const context = queryResponse.matches.map(m => m.metadata.text).join("\n\n");

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Context:\n${context}\n\nQuestion: ${question}`,
    config: {
      systemInstruction: "You are a helpful assistant. Use the provided context to answer questions."
    }
  });

  return response.text;
}

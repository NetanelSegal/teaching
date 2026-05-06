import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function askQuestion(question) {
  // Task 2: Embedding is still typically handled by a specific model
  // Note: @google/genai might have a different method for embeddings in May 2026
  const embeddingResponse = await ai.models.embedContent({
    model: "text-embedding-3-small",
    contents: [{ parts: [{ text: question }] }],
  });

  // Task 3: Use gemini-3-flash-preview for RAG generation
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `... RAG Prompt with Context ...`,
  });

  return response.text;
}

import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function askQuestion(question) {
  // Task 3.1: Embed the user question using text-embedding-004
  const embeddingResponse = await ai.models.embedContent({
    model: "text-embedding-004",
    contents: [{ parts: [{ text: question }] }],
  });

  // Task 3.2: Use gemini-2.5-flash for RAG generation
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `... RAG Prompt with Context ...`,
  });

  return response.text;
}

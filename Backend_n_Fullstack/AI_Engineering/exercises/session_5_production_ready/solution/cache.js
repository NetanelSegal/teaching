import { GoogleGenAI } from "@google/genai";
import Redis from "ioredis";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const redis = new Redis(process.env.REDIS_URL);

export async function getCachedResponse(prompt) {
  const cached = await redis.get(prompt);
  if (cached) return JSON.parse(cached);

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  const result = {
    content: response.text,
    usage: response.usage // contains prompt_token_count, candidates_token_count, etc.
  };

  await redis.set(prompt, JSON.stringify(result), "EX", 3600);
  return result;
}

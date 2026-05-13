import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import Redis from "ioredis";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const localCache = new Map();

let redis;
if (process.env.REDIS_URL) {
  redis = new Redis(process.env.REDIS_URL);
}

export async function getCachedResponse(prompt) {
  if (redis) {
    const cached = await redis.get(prompt);
    if (cached) return JSON.parse(cached);
  } else if (localCache.has(prompt)) {
    return localCache.get(prompt);
  }

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const result = {
    content: response.text,
  };

  if (redis) {
    await redis.set(prompt, JSON.stringify(result), "EX", 3600);
  } else {
    localCache.set(prompt, result);
  }
  
  return result;
}

import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function listModels() {
  try {
    const models = await ai.models.list();
    console.log("Available Models:");
    console.log(JSON.stringify(models, null, 2));
  } catch (error) {
    console.error("Failed to list models:", error.message);
  }
}

listModels();

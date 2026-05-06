import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
import { RecipeSchema } from "./schema.js";

// Task 4: Initialize the new client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateRecipe(goal) {
  // Task 4: Call ai.models.generateContent with gemini-3-flash-preview
  // Use systemInstruction in the config and responseMimeType: "application/json"
}

import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
import { RecipeSchema } from "./schema.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateRecipe(goal) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Create a recipe for the following goal: ${goal}. Return ONLY the JSON object. Like the following format: ${RecipeSchema.shape}`,
    config: {
      systemInstruction: "You are a professional chef. Provide high-quality recipes in JSON format.",
      responseMimeType: "application/json",
    },
  });

  const rawData = JSON.parse(response.text);

  // Validation using Zod
  return RecipeSchema.parse(rawData);
}

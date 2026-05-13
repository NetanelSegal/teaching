import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
import { RecipeSchema } from "./schema.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateRecipe(goal) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Create a recipe for the following goal: ${goal}. 
    Return ONLY a JSON object following this EXACT structure:
    {
      "name": "Recipe Name",
      "timeToPrepare": "30 mins",
      "difficulty": "Easy",
      "ingredients": ["item 1", "item 2"],
      "instructions": ["step 1", "step 2"],
      "nutritionalInfo": { "calories": 250 }
    }`,
    config: {
      systemInstruction: "You are a professional chef. Provide high-quality recipes in JSON format. The difficulty must be 'Easy', 'Medium', or 'Hard'. Do not include any Markdown formatting or code blocks.",
      responseMimeType: "application/json",
    },
  });

  const text = response.text;
  try {
    const rawData = JSON.parse(text);
    // Validation using Zod
    return RecipeSchema.parse(rawData);
  } catch (error) {
    console.error("RAW AI TEXT:", text);
    throw new Error(`AI returned invalid JSON: ${error.message}`);
  }
}

import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function categorizeMerchant(name) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Categorize this merchant: ${name}. Options: Food, Travel, Office, Other. Return only the category name.`,
  });

  return response.text;
}

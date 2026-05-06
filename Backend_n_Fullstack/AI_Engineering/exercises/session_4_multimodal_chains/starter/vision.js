import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function extractReceiptData(base64Image) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      { parts: [{ text: "Extract receipt data as JSON" }] },
      { parts: [{ inline_data: { mime_type: "image/jpeg", data: base64Image } }] }
    ],
    config: {
      responseMimeType: "application/json"
    }
  });

  return JSON.parse(response.text);
}

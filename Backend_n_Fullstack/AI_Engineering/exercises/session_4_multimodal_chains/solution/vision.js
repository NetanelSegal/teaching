import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function extractReceiptData(base64Image) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        parts: [
          { text: "Extract merchant name and total amount from this receipt as JSON. Format: { \"merchant\": string, \"total\": number }. Do not include markdown code blocks." },
          { inlineData: { mimeType: "image/png", data: base64Image } }
        ]
      }
    ],
    config: {
      responseMimeType: "application/json"
    }
  });

  return JSON.parse(response.text);
}

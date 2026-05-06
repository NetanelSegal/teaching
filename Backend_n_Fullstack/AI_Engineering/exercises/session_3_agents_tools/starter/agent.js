import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
import { tools, getUserInfo } from "./tools.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function runAgent(userInput) {
  // Task 2: Call GoogleGenAI with gemini-3-flash-preview and tools
  // Check response.candidates[0].content.parts for tool calls
  // Send tool responses back to close the loop
}

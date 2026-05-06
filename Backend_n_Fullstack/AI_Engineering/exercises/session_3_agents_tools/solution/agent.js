import { GoogleGenAI } from "@google/genai";
import { tools, getUserInfo } from "./tools.js";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function runAgent(userInput) {
  const messages = [
    { role: "user", parts: [{ text: userInput }] }
  ];

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: messages,
    config: {
      tools: tools,
    },
  });

  const candidate = response.candidates[0];
  
  if (candidate.content.parts.some(p => p.call)) {
    // Note: The new SDK handling of tool calls might be simplified or automated
    // In May 2026, the SDK often handles the callback loop if configured, 
    // but here we show the manual logic for pedagogical clarity.
    const toolCall = candidate.content.parts.find(p => p.call);
    const result = getUserInfo(toolCall.call.args);

    const finalResponse = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...messages,
        candidate.content,
        { role: "tool", parts: [{ response: { name: toolCall.call.name, content: result } }] }
      ],
    });

    return finalResponse.text;
  }

  return response.text;
}

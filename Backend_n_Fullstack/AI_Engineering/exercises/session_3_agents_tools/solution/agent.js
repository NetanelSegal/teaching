import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import { tools, getUserInfo } from "./tools.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function runAgent(userInput) {
  const messages = [
    { role: "user", parts: [{ text: userInput }] }
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: messages,
    config: {
      systemInstruction: "You are a database assistant. Use the available tools to fetch user information when asked. If a user asks about an email, call getUserInfo.",
      tools: tools,
    },
  });

  const candidate = response.candidates[0];
  console.log("🤖 Model Response Parts:", JSON.stringify(candidate.content.parts, null, 2));
  
  // Checking for Gemini tool call format
  const toolCallPart = candidate.content.parts.find(p => p.functionCall);
  if (toolCallPart) {
    const toolCall = toolCallPart.functionCall;
    const result = getUserInfo(toolCall.args);

    const finalResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        ...messages,
        candidate.content,
        { role: "tool", parts: [{ functionResponse: { name: toolCall.name, response: result } }] }
      ],
    });

    return finalResponse.text;
  }

  return response.text;
}

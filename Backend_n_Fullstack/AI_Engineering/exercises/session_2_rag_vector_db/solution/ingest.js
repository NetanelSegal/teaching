import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import { Pinecone } from "@pinecone-database/pinecone";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index(process.env.PINECONE_INDEX);

async function ingest() {
  const text = fs.readFileSync("./knowledge.txt", "utf-8");
  // Simple chunking: split by paragraphs
  const chunks = text.split("\n\n").filter(chunk => chunk.trim().length > 0);

  console.log(`🚀 Starting ingestion of ${chunks.length} chunks...`);

  for (let i = 0; i < chunks.length; i++) {
    const embeddingResponse = await ai.models.embedContent({
      model: "gemini-embedding-001",
      contents: [{ parts: [{ text: chunks[i] }] }],
      config: {
        outputDimensionality: 768,
      }
    });

    const vector = embeddingResponse.embeddings[0].values;

    await index.upsert([{
      id: `chunk-${i}`,
      values: vector,
      metadata: { text: chunks[i] }
    }]);
    
    console.log(`✅ Ingested chunk ${i + 1}/${chunks.length}`);
  }
  console.log("🎉 Ingestion complete!");
}

ingest().catch(console.error);

import OpenAI from "openai";
import { Pinecone } from "@pinecone-database/pinecone";
import fs from "fs";
import "dotenv/config";

const openai = new OpenAI();
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index(process.env.PINECONE_INDEX);

async function ingest() {
  const text = fs.readFileSync("./knowledge.txt", "utf-8");
  const chunks = text.split("\n").filter(line => line.length > 5);

  for (let i = 0; i < chunks.length; i++) {
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: chunks[i],
    });

    const vector = embeddingResponse.data[0].embedding;

    await index.upsert([{
      id: `chunk-${i}`,
      values: vector,
      metadata: { text: chunks[i] }
    }]);
  }
  console.log("Ingestion complete");
}

ingest();

import { GoogleGenAI } from "@google/genai";
import { Pinecone } from "@pinecone-database/pinecone";
import fs from "fs";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index(process.env.PINECONE_INDEX);

async function ingest() {
  const text = fs.readFileSync("./knowledge.txt", "utf-8");
  // Task 2: Chunk the text
  // Task 2: Embed chunks using text-embedding-004
  // Task 2: Upsert into Pinecone
}

ingest();

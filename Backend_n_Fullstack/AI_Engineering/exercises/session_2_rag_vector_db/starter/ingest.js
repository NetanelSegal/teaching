import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";
import fs from "fs";
import "dotenv/config";

const openai = new OpenAI();
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index(process.env.PINECONE_INDEX);

async function ingest() {
  const text = fs.readFileSync("./knowledge.txt", "utf-8");
  // Task 2: Chunk the text
  // Task 2: Embed chunks using text-embedding-3-small
  // Task 2: Upsert into Pinecone
}

ingest();

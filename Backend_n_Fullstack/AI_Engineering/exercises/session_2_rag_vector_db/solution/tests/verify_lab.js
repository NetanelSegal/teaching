import { askQuestion } from "../query.js";

async function verifyRAG() {
  console.log("🧪 Starting Test for Lab 2: Gemini RAG...");
  
  const testQuestion = "What is the return policy?";
  
  try {
    console.log(`📡 Querying RAG system: "${testQuestion}"...`);
    const answer = await askQuestion(testQuestion);
    
    console.log("✅ Success! RAG returned an answer.");
    console.log("---");
    console.log(`Answer: ${answer}`);
    console.log("---");
    
    if (answer.toLowerCase().includes("30 days") || answer.toLowerCase().includes("return")) {
      console.log("🎉 Verification passed! The answer is grounded in the knowledge base.");
      process.exit(0);
    } else {
      console.warn("⚠️ Warning: The answer might not be grounded. Please check knowledge.txt content.");
      process.exit(0);
    }
  } catch (error) {
    console.error("❌ Test Failed!");
    console.error("Problem:", error.message);
    process.exit(1);
  }
}

verifyRAG();

import { runAgent } from "../agent.js";

async function verify() {
  console.log("🧪 Starting Test for Lab 3: Database Agent...");
  
  const question = "What is the status of yoav@example.com?";
  console.log(`📡 Asking Agent: "${question}"...`);

  try {
    const answer = await runAgent(question);
    console.log("✅ Success! Agent returned an answer.");
    console.log("---");
    console.log(`Answer: ${answer}`);
    console.log("---");

    if (answer.toLowerCase().includes("premium")) {
      console.log("🎉 Verification passed! The agent successfully used the tool to fetch 'Premium' status.");
    } else {
      console.log("⚠️ Verification failed: The agent did not return the expected 'Premium' status.");
      process.exit(1);
    }
  } catch (error) {
    console.error("❌ Test failed with error:", error);
    process.exit(1);
  }
}

verify();

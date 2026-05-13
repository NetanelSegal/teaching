import { getCachedResponse } from "../cache.js";

async function verify() {
  console.log("🧪 Starting Test for Lab 5: Production & Safety...");

  const prompt = "What is the capital of France?";

  try {
    console.log("📡 Step 1: First call (Expect network latency)...");
    const start1 = Date.now();
    const res1 = await getCachedResponse(prompt);
    const end1 = Date.now();
    console.log(`✅ Success! Response: ${res1.content.substring(0, 20)}...`);
    console.log(`⏱️ Time taken: ${end1 - start1}ms`);

    console.log("📡 Step 2: Second call (Expect cache hit)...");
    const start2 = Date.now();
    const res2 = await getCachedResponse(prompt);
    const end2 = Date.now();
    console.log(`✅ Success! Response: ${res2.content.substring(0, 20)}...`);
    console.log(`⏱️ Time taken: ${end2 - start2}ms`);

    if (end2 - start2 < 50) {
      console.log("🎉 Verification passed! Cache hit confirmed (under 50ms).");
    } else {
      console.log("⚠️ Warning: Second call took longer than expected for a cache hit.");
    }
  } catch (error) {
    console.error("❌ Test failed with error:", error);
    process.exit(1);
  }
}

verify();

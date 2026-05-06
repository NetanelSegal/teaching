import { RecipeSchema } from "./schema.js";

const mockData = {
  name: "Mock Recipe",
  timeToPrepare: "30 mins",
  difficulty: "Easy",
  ingredients: ["Item 1", "Item 2"],
  instructions: ["Step 1", "Step 2"],
  nutritionalInfo: {
    calories: 500
  }
};

try {
  console.log("Testing RecipeSchema validation...");
  RecipeSchema.parse(mockData);
  console.log("✅ Schema validation passed.");

  const invalidData = { ...mockData, difficulty: "Super Hard" };
  try {
    RecipeSchema.parse(invalidData);
    console.error("❌ Schema failed to catch invalid difficulty.");
  } catch (e) {
    console.log("✅ Schema correctly caught invalid difficulty.");
  }

} catch (error) {
  console.error("❌ Test failed:", error.message);
  process.exit(1);
}

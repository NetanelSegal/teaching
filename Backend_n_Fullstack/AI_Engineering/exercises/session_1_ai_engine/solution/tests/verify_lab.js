import { generateRecipe } from "../recipeGenerator.js";
import { RecipeSchema } from "../schema.js";

async function testLab1() {
  console.log("🧪 Starting Test for Lab 1: Structured Recipe Generator...");
  
  const testGoal = "A simple 5-minute vegan salad";
  
  try {
    console.log(`📡 Sending request to Gemini for: "${testGoal}"...`);
    const result = await generateRecipe(testGoal);
    
    console.log("✅ Success! AI returned a valid recipe.");
    console.log("---");
    console.log(`Name: ${result.name}`);
    console.log(`Difficulty: ${result.difficulty}`);
    console.log(`Ingredients: ${result.ingredients.length} found`);
    console.log(`Instructions: ${result.instructions.length} steps found`);
    console.log("---");
    
    // Final check against schema
    RecipeSchema.parse(result);
    console.log("🎉 Validation passed!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Test Failed!");
    console.error("Problem:", error.message);
    if (error.name === "ZodError") {
      console.error("Validation Errors:", JSON.stringify(error.errors, null, 2));
    }
    process.exit(1);
  }
}

testLab1();

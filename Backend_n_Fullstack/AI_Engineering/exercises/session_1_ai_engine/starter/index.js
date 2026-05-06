import express from "express";
import { generateRecipe } from "./recipeGenerator.js";
import "dotenv/config";

const app = express();
app.use(express.json());

// Task 5: Implement the POST /generate-recipe route
app.post("/generate-recipe", async (req, res) => {
  const { goal } = req.body;
  // call generateRecipe and return result
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

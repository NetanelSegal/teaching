import express from "express";
import { generateRecipe } from "./recipeGenerator.js";
import "dotenv/config";

const app = express();
app.use(express.json());

app.post("/generate-recipe", async (req, res) => {
  try {
    const { goal } = req.body;
    if (!goal) return res.status(400).json({ error: "Goal is required" });

    const recipe = await generateRecipe(goal);
    res.json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate recipe", details: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

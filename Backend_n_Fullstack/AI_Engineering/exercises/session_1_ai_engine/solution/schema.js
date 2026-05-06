import { z } from "zod";

export const RecipeSchema = z.object({
  name: z.string(),
  timeToPrepare: z.string(),
  difficulty: z.enum(["Easy", "Medium", "Hard"]),
  ingredients: z.array(z.string()),
  instructions: z.array(z.string()),
  nutritionalInfo: z.object({
    calories: z.number()
  }).optional()
});

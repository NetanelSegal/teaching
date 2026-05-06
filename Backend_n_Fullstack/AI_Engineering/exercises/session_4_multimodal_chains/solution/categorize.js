import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI();

export async function categorizeMerchant(merchantName) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful accountant. Categorize the merchant into: Food, Travel, Office, or Other." },
      { role: "user", content: `Categorize this merchant: ${merchantName}` }
    ],
  });

  return response.choices[0].message.content;
}

# Session 1: The AI Engine (From Chat to Code)

## 1. The Hook (5 mins)
Imagine you are building a "Smart Travel Planner" in React. You ask the AI for a 3-day trip to Paris. The AI responds with a beautiful, long, conversational paragraph:
*"Certainly! Paris is lovely in the spring. Day 1: Visit the Eiffel Tower... Day 2: The Louvre is a must... Day 3: Walk by the Seine..."*

Now, try to render that in a React `<Timeline />` component. You can't. It's just a string. To build software, we don't need "chat"; we need **Data**.

## 2. Theory (60 mins)

### LLM Fundamentals
- **Probability over Logic**: LLMs predict the next token based on probability. They don't "think."
  - *Example*: If you ask an LLM to "Calculate 12345 * 67890," it might get it wrong. It's not doing multiplication in its head; it's trying to remember what that result *usually* looks like in its training data.
- **Tokens**: The currency of AI. 1,000 tokens ≈ 750 words. You pay per token.
  - *Example*: The word "hamburger" is 1 token. The word "hamburgers" is 2 tokens ("hamburger" + "s").
- **Context Window**: The "Short-term memory" of the model.
  - *Example*: If a model has a 4k token limit and you paste a 5k token legal document, the model will "forget" the first 1k tokens of the document when it reaches the end.

### Deep Dive: Under the Hood of the Engine

To build software with AI, we must move beyond the "Magic Box" mindset. Understanding the mechanics of the engine allows us to predict when it will fail, optimize for cost, and engineer better prompts.

#### 1. The Transformer & Self-Attention
**The Analogy: The "Cocktail Party"**  
Imagine you are at a noisy cocktail party. You are talking to a friend named Alice. Even though 50 other people are talking, you can focus on Alice's voice. Your brain calculates "Attention" by giving high weight to Alice's words and low weight to the background noise.

**The "Bank" Example:**
In the sentence: *"I went to the **bank** to deposit money after walking by the river **bank**."*
The model uses attention to understand that:
- The first "bank" is related to "deposit" and "money" (Financial institution).
- The second "bank" is related to "river" and "walking" (Geographic feature).

**The "Pronoun" Example:**
In the sentence: *"The animal didn't cross the street because **it** was too tired."*
The model calculates relationship scores to find that "**it**" refers to "animal," not "street."

**Technical Note (Embeddings & Vectors):**  
Words are not strings to the model; they are coordinates in a multi-dimensional space (Vectors). Similar words like "cat" and "kitten" live near each other. The model uses "Self-Attention" to mix information from relevant words into the current token's representation.

**Practical Application: The "Context Window"**
- **Quadratic Complexity**: Doubling the input context doesn't double the work; it quadruples it. This is why context windows have strict limits.
- **Lost in the Middle**: When you provide a massive prompt (e.g., 50 documentation pages), models tend to pay more attention to the very beginning and very end, often "forgetting" details in the middle.

#### 2. Tokenization: Byte-Pair Encoding (BPE)
**The Analogy: The Jigsaw Puzzle**  
A model doesn't see "Apple." It sees pieces of a puzzle. If "Apple" is a common piece, it's one token. If you have a rare word like "Supercalifragilisticexpialidocious," the model might break it into 10 smaller pieces ("Super", "cali", "frag", etc.).

**Technical Note:**  
LLMs use **Byte-Pair Encoding (BPE)**. It starts with characters and merges the most frequent pairs (like "t" and "h") into new tokens repeatedly until it has a "Vocabulary" (usually ~100k tokens).

**Practical Application: Non-English Inefficiency**
- **Language Bias**: Because most training data is English, the tokenizer is very efficient with English words. 
- **The Hebrew Problem**:
  - English: *"Hello world"* = **2 tokens**.
  - Hebrew: *"שלום עולם"* = **6 tokens**.
  - **Result**: You pay 3x more and use 3x more context for the same logic in Hebrew.

#### 3. Temperature: The Probability Filter
Temperature is how we control the "randomness" of the model. To understand it, let's look at a concrete example.

**The Scenario:** The model is completing the sentence: *"The sky is ______"*

**Step 1: Raw Scores (Logits)**
Internally, the model calculates raw scores for every possible next word. Let's say:
- "blue": **15.0**
- "cloudy": **10.0**
- "falling": **2.0**

**Step 2: Turning Scores into Percentages (The Softmax)**
The model uses a math function (Softmax) to turn these scores into probabilities. **Temperature ($T$)** is a number we divide the scores by *before* doing the math.

| Word | Raw Score | $T = 0.1$ (Low) | $T = 1.0$ (Normal) | $T = 2.0$ (High) |
| :--- | :--- | :--- | :--- | :--- |
| **blue** | 15.0 | **99.9%** | **85%** | **45%** |
| **cloudy** | 10.0 | 0.1% | 14% | 35% |
| **falling** | 2.0 | 0.0% | 1% | 20% |

**What does this tell us?**
- **Low Temperature ($T = 0.1$):** The model becomes "boring" and deterministic. It sees that "blue" is the leader and focuses almost 100% of its attention on it.
  - *Best for:* JSON output, code, math, and data extraction.
- **Normal Temperature ($T = 1.0$):** The model follows its training naturally. It will usually say "blue," but occasionally say "cloudy."
  - *Best for:* Standard chatbots and general writing.
- **High Temperature ($T = 2.0$):** The gap between the "correct" word and the "random" word closes. The model is now much more likely to say "The sky is falling."
  - *Best for:* Poetry, brainstorming, and creative "what if" scenarios.

**Practical Rule of Thumb:**
- **0.0 (Deterministic):** I need the same answer every time (JSON/Code).
- **0.7 - 1.0 (Balanced):** I want a natural, human-like conversation.
- **1.2+ (Creative/Chaotic):** I want wild ideas and don't mind if the model makes things up (Hallucinations).

### Prompt Engineering for Engineers
- **System Prompt**: Defines the *identity* and *constraints*.
  - *Example*: "You are a senior TypeScript developer. Return ONLY valid JSON. Do not explain your code."
- **User Prompt**: The specific request.
  - *Example*: "Generate a function that calculates the Fibonacci sequence up to 10."

### Structured Outputs & Validation
To make AI output reliable, we use:
1.  **JSON Mode**: Forcing the model to output a valid JSON string.
  - *Example*: Instead of the AI saying "Here is your data: { 'id': 1 }", JSON mode ensures it ONLY sends `{ "id": 1 }`.
2.  **Schema Validation (Zod)**: Even if it's valid JSON, does it have the `price` field as a `number`? We must validate the AI's "hallucinations" just like user input.
  - *Example*: If the AI returns `{ "price": "expensive" }` but your DB expects a `number`, Zod will catch this error before it crashes your app.

## 3. The Lab (90 mins)
*Reference: [Lab 1: Structured Recipe Generator](../../exercises/session_1_ai_engine/README.md)*

**Task:** Build a "Smart Recipe API".
1. Initialize Google Gemini SDK.
2. Create an Express route that accepts a goal (e.g., "muscle gain").
3. Use a System Instruction to force a specific JSON structure.
4. Validate the response using Zod before sending it back to the client.

---
## Technical Reference
```javascript
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const RecipeSchema = z.object({
  title: z.string(),
  ingredients: z.array(z.string()),
  calories: z.number()
});

const response = await ai.models.generateContent({
  model: "gemini-3-flash-preview",
  contents: "...",
  config: { responseMimeType: "application/json" }
});
```

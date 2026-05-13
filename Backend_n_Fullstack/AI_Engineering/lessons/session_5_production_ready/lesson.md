# Session 5: The Production-Ready AI App

## 1. The Hook (5 mins)
You launched your AI app. It's a viral success. 
Suddenly, your API bill is skyrocketing, and your server is crashing because API responses take 15 seconds to return. 

Standard CRUD logic isn't enough for AI. You need to optimize for **Cost, Speed, and User Experience**.

## 2. Theory (45 mins)

### Caching AI Responses (Redis)
If two users ask for a "3-day trip to Paris," why pay for the AI twice?
- **Exact Matching**: Hash the prompt and check Redis.
- **Semantic Caching**: Using vector similarity to check if we already answered a *similar* question (Advanced).

### Cost Management (Token Tracking)
You must know exactly how much each user is costing you.
- **Log Usage**: Always save `usageMetadata.totalTokenCount` to your database.
- **Limits**: Set hard caps on how many tokens a user can consume per day.

### UX: Streaming (Server-Sent Events)
Users hate "Loading..." spinners for 15 seconds.
- **Streaming**: Delivering the AI's response word-by-word as it is generated. This makes the app feel "instant."

### Deployment & Security
- **Environment Variables**: NEVER hardcode API keys.
- **Rate Limiting**: AI endpoints are high-value targets for scrapers.

### Deep Dive: Scaling AI Infrastructure
#### 1. Semantic Caching vs. Exact Matching
Normal Redis caching works if the prompt is identical. But in AI, "How's the weather?" and "Tell me the weather" should return the same cached answer.
- **The Solution**: **Semantic Caching**. 
- **The Process**: Embed the incoming prompt. Search your vector DB for a near-identical embedding. If the Cosine Similarity is > 0.98, return the cached result. This can save up to 40% on API costs.

#### 2. Token Estimation
You can't just `string.length / 4` to estimate costs accurately. 
- **The tool**: Gemini provides a `countTokens()` method in the SDK to help you estimate costs *before* making the full generation call.

#### 3. SSE vs. WebSockets for Streaming
- **WebSockets**: Bi-directional. Good for real-time multiplayer.
- **SSE (Server-Sent Events)**: Uni-directional (Server -> Client). 
- **Why SSE for AI?**: It's simpler, works over standard HTTP, and has automatic reconnection. It's the standard for streaming AI text responses.

## 3. The Lab (90 mins)
*Reference: [Lab 5: The Industrial-Grade AI Assistant](../../exercises/session_5_production_ready/README.md)*

**Task:** "The Industrial-Grade AI Assistant".
1. Integrate **Upstash Redis** to cache repetitive prompts.
2. Implement **SSE (Server-Sent Events)** to stream a response to the client.
3. Track and log the token count for every request.

---
## Technical Reference
```javascript
// Streaming Example
const stream = await ai.models.generateContentStream({
  model: "gemini-2.5-flash",
  contents: "Write a long story.",
});

for await (const chunk of stream) {
  console.log(chunk.text);
}
```

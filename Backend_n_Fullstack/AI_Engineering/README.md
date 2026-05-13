# AI Engineering: From Prompt to Production

Welcome to the AI Engineering course. This curriculum focuses on building production-ready applications powered by Large Language Models (LLMs), with a strong emphasis on Node.js, Google Gemini, RAG, and Agentic workflows.

## 📁 Course Structure

### 📚 [Lessons](./lessons)
Detailed theory and concept explanations for each session.
- **Session 1**: The AI Engine (Prompting & Structured Output)
- **Session 2**: RAG & Vector Databases (Pinecone & Embeddings)
- **Session 3**: Agents & Tools (Autonomous Logic)
- **Session 4**: Multimodal Chains (Vision & Chaining)
- **Session 5**: Production Ready (Caching, Streaming, Tracking)

### 🧪 [Exercises & Labs](./exercises)
Hands-on implementation of core concepts. Each lab includes a `starter` project and a `solution`.
- **Lab 1**: Structured Recipe Generator
- **Lab 2**: Chat with Your Knowledge Base (RAG)
- **Lab 3**: Database Agent (Tool Use)
- **Lab 4**: The AI Accountant (Multimodal)
- **Lab 5**: Industrial-Grade Assistant (Production)

### 🚀 [Final Project](./projects)
The "Autonomous AI Support System" - a capstone project integrating all technologies learned during the course.

## 🛠️ Global Prerequisites
- **Node.js**: v18 or higher.
- **API Keys**: You will need API keys for Google Gemini and Pinecone.
- **Package Manager**: `npm` is used throughout the course.

## ⚙️ Engineering Standards
All labs and projects must follow these standards:
1. **Language & Runtime**: Use Node.js with ES Modules (`"type": "module"`).
2. **AI SDK**: Use the **`@google/genai`** npm package exclusively.
3. **Model Selection**: Always use the **`gemini-2.5-flash`** model.
4. **Validation**: Use **Zod** for all AI output validation.
5. **Environment**: Never hardcode keys; use `dotenv` and a `.env` file.
6. **Error Handling**: Implement graceful failures for all API calls.

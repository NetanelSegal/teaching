# Session 4: Advanced Patterns & Multimodal

## 1. The Hook (5 mins)
Until now, we've only "talked" to the AI. But real humans communicate with images, voice, and complex sequences of logic. 

Imagine an app where you take a photo of your fridge, and the AI not only tells you what's inside but then creates a recipe, reads it out loud, and adds missing items to your grocery list. This is **Multimodal Chaining**.

## 2. Theory (45 mins)

### Vision (GPT-4o)
Models can now process raw images. You send the image as a `base64` string or a URL. 
- **Use cases**: OCR (Optical Character Recognition), medical scan analysis, UI-to-code conversion.

### Audio (Whisper)
The `Whisper` model is the industry standard for transcribing audio to text. It handles accents and background noise better than standard STT (Speech to Text) engines.

### Prompt Chaining
Instead of asking one giant prompt, we break logic into smaller, verifiable steps:
- **Step 1**: Analyze receipt image -> Output JSON.
- **Step 2**: Take JSON -> Check if it violates company policy.
- **Step 3**: If it violates -> Generate a rejection email.

### Temperature & Top_P
- **Temperature (0.0 to 2.0)**: Lower (0.0) is for logic and facts. Higher (1.0+) is for creativity and brainstorming.
- **Top_P**: Alternative to temperature for controlling diversity.

### Deep Dive: How Models "See" and "Hear"
#### 1. Vision: The Vision Transformer (ViT)
How does a text model see a JPEG? It uses a **Vision Transformer**. 
- **The Process**: The image is sliced into small "patches" (e.g., 16x16 pixels). Each patch is converted into a vector (embedding), just like a word. 
- **Attention on Pixels**: The model then uses the same Attention mechanism to see how the "pixel-patches" relate to each other. This is why GPT-4o can "read" text on a receipt — it treats the visual shapes of letters as semantic tokens.

#### 2. Audio: Whisper's Log-Mel Spectrograms
Audio is a complex wave. Whisper doesn't "listen" to the wave directly. 
- **Conversion**: It converts the audio into a **Log-Mel Spectrogram** — a visual representation of frequencies over time. 
- **The Magic**: The model then "looks" at this spectrogram (using an encoder-decoder Transformer) and predicts the text tokens. Because it's trained on 680,000 hours of diverse audio, it can "guess" missing words based on context, just like a human.

#### 3. Multimodal Constraints
Vision is expensive. High-resolution images are broken into multiple 512x512 tiles, and you are charged per tile. For engineering, this means:
- **Optimization**: Shrink your images before sending them to save costs and reduce latency.

## 3. The Lab (90 mins)
*Reference: [Lab 4: The AI Accountant](../../exercises/session_4_multimodal_chains/README.md)*

**Task:** "The AI Accountant".
1. Build an Express route that accepts an image upload (`multer`).
2. Use GPT-4o Vision to extract the total amount and merchant name.
3. Pass that data to a second AI prompt that translates the merchant name into a category (e.g., "McDonald's" -> "Food").

---
## Technical Reference
```javascript
const response = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "What’s in this image?" },
        { type: "image_url", image_url: { url: "..." } },
      ],
    },
  ],
});
```

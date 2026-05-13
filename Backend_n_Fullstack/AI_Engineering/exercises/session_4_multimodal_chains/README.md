# Lab 4: The AI Accountant

## Objective
Create a multimodal pipeline that processes images (receipts) and uses prompt chaining to categorize expenses.

## Project Structure
- `starter/`: Your workspace.
- `solution/`: Reference implementation.

## 🧠 Program Logic Flow
1.  **Ingestion**: An image (receipt) is uploaded via Express and converted to `base64`.
2.  **Vision (Extraction)**:
    -   The `base64` image is sent to Gemini 2.5 Flash.
    -   The model extracts text data (Merchant, Total) and returns it as structured JSON.
3.  **Chain (Classification)**:
    -   The Merchant Name is passed to a second AI call (prompt chain).
    -   A specialized prompt classifies the merchant into a category (Food, Office, etc.).
4.  **Response**: The final JSON object containing both the extracted data and the assigned category is returned.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Upload
- **Task 1.1: Project Setup**
  - Initialize the project and install: `@google/genai`, `express`, `multer`, `dotenv`.
- **Task 1.2: Multer Config**
  - Setup file upload handling in `index.js`.
  - Create a utility to convert the buffer to `base64`.

### Phase 2: The Multimodal Chain
- **Task 2.1: Vision Extraction (`vision.js`)**
  - Implement a function `extractReceiptData(imageBase64)`.
  - Use the `inline_data` format in the Gemini contents array.
- **Task 2.2: Categorization (`categorize.js`)**
  - Implement a function `categorizeMerchant(name)`.
  - Create a chain where the output of Task 2.1 is the input for this task.

### Phase 3: The API Layer
- **Task 3.1: Combine & Respond**
  - Implement `POST /process-receipt`.
  - Ensure both AI calls happen in sequence and handle errors at each step.

## 🚀 Challenge
If the total amount is over $100, add a field `requiresManagerApproval: true` to the final response.

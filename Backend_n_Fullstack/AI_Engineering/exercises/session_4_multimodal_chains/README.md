# Lab 4: The AI Accountant

## Objective
Create a multimodal pipeline that processes images (receipts) and uses prompt chaining to categorize expenses.

## Project Structure
- `starter/`: Your workspace.
- `solution/`: Reference implementation.

## Tasks

### 1. Image Upload
- Setup `multer` in Express to handle file uploads.
- Convert the uploaded image to a `base64` string.

### 2. Vision Extraction (vision.js)
- Send the image to GPT-4o.
- Prompt: "Extract the merchant name and total amount from this receipt. Return ONLY JSON."
- Validate the output.

### 3. Prompt Chaining (categorize.js)
- Take the merchant name from Step 2.
- Send a second prompt to a smaller model (like GPT-4o-mini).
- Prompt: "Categorize this merchant: [Merchant Name]. Options: Food, Travel, Office, Other. Return only the category name."

### 4. Final API
- Combine both steps into a single `POST /process-receipt` endpoint.

---

## Challenge
If the total amount is over $100, add a field `requiresManagerApproval: true` to the final response.

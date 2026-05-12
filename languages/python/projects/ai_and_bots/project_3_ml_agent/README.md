# Project 3: Predictive Analytics Tool (Simple ML)

## 🌟 The Challenge
Stop guessing and start predicting! Build a "Predictive Analytics Tool" using Scikit-Learn to train a machine learning model on real data. Whether you're predicting house prices, movie ratings, or stock trends, you'll learn the full ML pipeline: from data splitting and model training to evaluation and making live predictions.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** Machine Learning Pipeline, Regression vs Classification, Model Evaluation.
- **Internal Reference:** [Lesson 23: NumPy](../../lessons/23-NumPy_and_Numerical_Computing/), [Lesson 24: Pandas](../../lessons/24-Pandas_and_Data_Analysis/)
- **External Docs:** [Scikit-Learn Documentation](https://scikit-learn.org/stable/), [Machine Learning Guide](https://developers.google.com/machine-learning/crash-course)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (ML Pipeline Logic)
   - `src/utils.py` (Data Loading/Helpers)
   - `main.py` (Prediction Interface)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "What are the 'Features' (X) and what is the 'Target' (y)? How do we handle categorical data?")
- Implement data preprocessing steps in `src/core.py`.

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Use a consistent `train_model()` -> `evaluate_model()` -> `predict()` flow. Save your trained models using `joblib` so they don't have to be retrained every time.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py`.
- Import your trained model and provide a CLI or simple GUI for users to input data and get predictions.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., inputting out-of-range values, missing data for a required feature, attempting to predict before the model is trained).
- Implement input range checks and user-friendly error messages.

### Step 7: Validation
- Create a test in `tests/` to verify your model's prediction output remains consistent for a known input.
- Run `pytest` to verify everything works.

## 🚀 Going Beyond (Stretch Goals)
- **Feature Importance Visualization:** Use Matplotlib to show which features had the biggest impact on the model's predictions.
- **Hyperparameter Tuning:** Use `GridSearchCV` to automatically find the best settings for your model.
- **Live Data Prediction:** Connect your model to a live API (e.g., weather or stock market) to make predictions in real-time.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)

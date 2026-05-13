# Project 3: Predictive Analytics Tool (Simple ML)

## 🌟 The Challenge
Stop guessing and start predicting! Build a "Predictive Analytics Tool" using Scikit-Learn to train a machine learning model on real data. Whether you're predicting house prices, movie ratings, or stock trends, you'll learn the full ML pipeline: from data splitting and model training to evaluation and making live predictions.

## 🧠 Program Logic Flow
1.  **Prepare**: Load the dataset and split it into training (80%) and testing (20%) sets.
2.  **Preprocess**: Clean the data and convert categorical features into numeric formats.
3.  **Train**: Choose a model (e.g., `RandomForestRegressor`) and fit it to the training data.
4.  **Evaluate**: Run the model on the test set and calculate the accuracy/error (e.g., Mean Squared Error).
5.  **Persist**: Save the trained model to a file using `joblib`.
6.  **Predict**: 
    -   Wait for user input (feature values).
    -   Pass the values through the trained model.
    -   Display the prediction result to the user.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Scaffolding
- **Task 1.1: Environment Isolation**
  - Create a virtual environment: `python -m venv .venv`.
  - Activate it and install the local dependencies: `pip install -r requirements.txt`.
- **Task 1.2: Directory Structure**
  - Ensure your project follows the structure:
    - `src/core.py` (ML Pipeline: Train/Evaluate/Predict)
    - `src/utils.py` (Data loading and Preprocessing)
    - `main.py` (The prediction interface)
    - `tests/` (Your validation scripts)

### Phase 2: Core Logic (The Brains)
- **Task 2.1: Data Preprocessing**
  - In `src/utils.py`, implement a function `prepare_data(csv_path)`.
  - Use Pandas to load the data, handle missing values, and encode categorical variables (e.g., `pd.get_dummies()`).
- **Task 2.2: The ML Pipeline**
  - In `src/core.py`, implement a class `PredictorAgent`.
  - Add a `train(X, y)` method that fits a Scikit-Learn model (e.g., `LinearRegression` or `RandomForest`).
  - Add an `evaluate(X_test, y_test)` method that returns metrics like R² or Accuracy.
  - *Engineering Standard:* Use `train_test_split` from Scikit-Learn to ensure your evaluation is unbiased.

### Phase 3: Interface & Validation
- **Task 3.1: Model Persistence**
  - Implement a `save_model(filename)` and `load_model(filename)` method using the `joblib` library.
- **Task 3.2: The Prediction CLI**
  - In `main.py`, allow the user to input feature values and print the model's prediction.
- **Task 3.3: Validation**
  - Create a test in `tests/test_pipeline.py` that verifies the `prepare_data` function returns a DataFrame with the expected number of features.

## 🚀 Going Beyond (Stretch Goals)
- **Feature Importance Visualization:** Use Matplotlib to show which features had the biggest impact on the model's predictions.
- **Hyperparameter Tuning:** Use `GridSearchCV` to automatically find the best settings for your model.
- **Live Data Prediction:** Connect your model to a live API (e.g., weather or stock market) to make predictions in real-time.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)

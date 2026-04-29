# Exercises: Data Visualization

*Note: These exercises use built-in datasets from Seaborn. No CSV files are required.*

---

## Level 1: Foundation (Matplotlib Basics)
1. **The Temperature Trend:**
   - Create two lists: `days = [1, 2, 3, 4, 5, 6, 7]` and `temp = [22, 24, 19, 21, 25, 28, 23]`.
   - Plot a line chart of the temperature over the week.
   - Add a title "Weekly Temperature", label the x-axis "Day", and the y-axis "Celsius".
   - Change the line color to 'red' and add circle markers to the data points.
2. **The Bar Comparison:**
   - Create a bar chart showing the sales of three products: `Products = ['A', 'B', 'C']`, `Sales = [100, 150, 80]`.
   - Add a grid to the background (Hint: `plt.grid()`).

## Level 2: Logic & Mechanics (Seaborn Statistical Plots)
3. **The Tip Explorer:**
   - Load the `tips` dataset: `df = sns.load_dataset("tips")`.
   - Create a **Scatter Plot** showing the relationship between `total_bill` and `tip`.
   - Color the points by whether the customer was a `smoker` (using `hue`).
4. **Distribution of Data:**
   - Using the same `tips` dataset, create a **Histogram** (or `displot`) of the `total_bill`.
   - *Think:* Does the data look "Normal" (a bell curve) or is it skewed to one side?
5. **Categorical Insights:**
   - Create a **Violin Plot** or **Box Plot** comparing the `total_bill` across different `days` of the week.
   - *Think:* Which day has the highest average bill? Which day has the most "spread" (variance)?

## Level 3: "Think Like an Engineer" (Algorithmic Thinking)
6. **Detecting Outliers:**
   - In Data Science, identifying outliers is critical. 
   - Create a **Box Plot** of a column with random numbers where you've manually added one very large number (e.g., `1000`).
   - *Observe:* How does the box plot represent this outlier?
7. **The Correlation Map:**
   - Load the `iris` dataset: `iris = sns.load_dataset("iris")`.
   - Calculate the correlation matrix: `corr = iris.drop(columns='species').corr()`.
   - Use `sns.heatmap(corr, annot=True)` to visualize the relationships.
   - *Think:* Which two features have the strongest correlation? (The closest to 1.0).
8. **Subplot Mastery:**
   - Create a figure with **two side-by-side subplots** (1 row, 2 columns).
   - Plot a histogram on the left and a scatter plot on the right.
   - *Think:* Why is it useful to see the distribution and the relationship at the same time?
9. **The "Clean" Storyteller:**
   - Create a complex Seaborn plot, then use Matplotlib commands to:
     - Remove the top and right "spines" (borders) (Hint: `sns.despine()`).
     - Move the legend to a better location.
     - Add a meaningful annotation to a specific data point (Hint: `plt.annotate()`).

## Level 4: Industry Readiness (Job-Level Challenges)
10. **The Automated EDA (PairPlot):**
    - When you get a new dataset, you often want to see every relationship at once.
    - Use `sns.pairplot(iris, hue='species')`.
    - *Think:* Which features allow you to distinguish the three species of flowers most clearly?
11. **Visualizing High-Dimensional Data (Heatmap):**
    - Create a correlation heatmap for the `iris` dataset.
    - Use a diverging color map (like `coolwarm`) and ensure the numbers are displayed inside the cells.
12. **The Executive Summary Dashboard:**
    - Create a single Figure with a 2x2 grid of subplots.
    - Plot a different chart type in each (Line, Bar, Scatter, Box).
    - Add a super-title for the entire figure (`plt.suptitle()`) and ensure labels don't overlap (`plt.tight_layout()`).
13. **Styling for Print:**
    - Use `sns.set_context("paper")` or `sns.set_context("poster")`.
    - *Observe:* How does the font size and line thickness change to accommodate different presentation formats?
    - **Task:** Save your best plot as a high-resolution PNG file (`dpi=300`).


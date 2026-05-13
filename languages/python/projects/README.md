# Python Professional Project Tracks

Welcome to the Professional Tracks! These are designed to be taken after you have mastered the core Python fundamentals (Lessons 01-22). 

Unlike the core curriculum, which focuses on language syntax and engineering principles, these tracks focus on **Domain-Specific Expertise**. Choose a track that interests you and follow the roadmap provided in its directory.

## 📂 Isolated Project Structure
Every project in this directory is **completely isolated**. This means:
1.  **Individual Download**: You can download just the folder for a specific project (e.g., `automation/project_1_organizer`) and it will work independently.
2.  **Local Dependencies**: Each folder contains its own `requirements.txt`.
3.  **Logical Walkthroughs**: Every project README now includes a **🧠 Program Logic Flow** section, providing a step-by-step walkthrough of the program's execution logic before you start coding.
4.  **Standardized Layout**: Every project follows the ORT Engineering Standard (`src/`, `tests/`, `main.py`).

## 🛠️ Environment Setup
To work on any project, follow these steps inside the project's directory:
1.  **Create Venv**: `python -m venv .venv`
2.  **Activate Venv**:
    - Windows: `.venv\Scripts\activate`
    - Mac/Linux: `source .venv/bin/activate`
3.  **Install Deps**: `pip install -r requirements.txt`

## 🛤️ Available Tracks

### 🎮 [Games Track](./games_track)
Learn how to build interactive experiences. 
- **Difficulty**: Intermediate to Advanced.
- **Outcomes**: Game loops, state management, 2D physics, asset handling.
- **Key Libraries**: Pygame, Colorama.

### 📊 [Data Dashboards](./data_dashboards)
Turn data into insights. 
- **Difficulty**: Intermediate (Data) to Advanced (Dashboards).
- **Outcomes**: Data cleaning, statistical visualization, SQL integration, Web UI.
- **Key Libraries**: Pandas, Matplotlib, Seaborn, Streamlit, Plotly.

### 🤖 [AI & Bots](./ai_and_bots)
Learn to harness the power of LLMs and build automated agents. 
- **Difficulty**: Advanced.
- **Outcomes**: API integration, AsyncIO, Bot event handling, ML pipelines.
- **Key Libraries**: Gemini SDK, Discord.py, Scikit-Learn.

### ⚙️ [Automation](./automation)
Make your computer work for you. 
- **Difficulty**: Intermediate.
- **Outcomes**: Web scraping, File system automation, Browser automation.
- **Key Libraries**: Selenium, BeautifulSoup, Requests.

## 🚀 How to use this
1.  **Pick a Track**: Choose a track that aligns with your career goals.
2.  **Follow the Roadmap**: Check the **[Project Roadmap](./roadmap.md)** for the recommended order of projects.
3.  **Build and Validate**: Complete the **Implementation Tasks** in each project's README and run `pytest` to verify your logic.

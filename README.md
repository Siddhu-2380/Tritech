# FinGrow 🚀

**AI-Powered Financial Growth & Literacy Platform**

FinGrow is an interactive, gamified platform designed to help young Indians master personal finance. By combining AI-driven coaching, real-time simulations, and engaging games, we make financial literacy accessible, practical, and fun.

---
## 🌟 Key Features

### 🤖 AI Finance Coach
- **Personalized Advice**: Chat with our AI coach to get instant answers to your financial queries.
- **Context-Aware**: The AI understands your current financial health score and goals to provide tailored suggestions.

### 🎮 Gamified Learning
- **XP & Leveling System**: Earn XP for every financial action (saving, investing, learning). Climb the ranks from "Novice Saver" to "Wealth Master."
- **Interactive Games**:
    - **Budget Battle**: Survive a month of expenses and unexpected events.
    - **Investment Challenge**: Visualize the power of compounding vs. idle cash.
    - **Debt Escape**: Learn strategies to pay off loans efficiently.

### 📈 Growth Simulator
- **Visual Projections**: See how your small monthly investments (SIPs) can grow over 10, 20, or 30 years.
- **Inflation Adjustment**: Understand the real value of your future wealth.

### 📊 Comprehensive Dashboard
- **Financial Health Score**: A single metric (0-100) that tracks your overall financial wellness.
- **Risk Analysis**: Assess your investment risk profile based on your habits.
- **Goal Tracking**: Set and track progress towards life goals (buying a home, emergency fund, etc.).

## 🛠️ Tech Stack

**Frontend**
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS, Shadcn UI
- **State Management**: React Hooks & Context API
- **Visualization**: Recharts
- **Icons**: Lucide React

**Backend**
- **Framework**: FastAPI (Python)
- **Database**: SQLite / SQLAlchemy
- **AI Integration**: Google Gemini API
- **Data Processing**: Pandas, NumPy

## � Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js (v18+)
- Python (v3.9+)
- Git

### 1. Backend Setup
Navigate to the backend directory and set up the Python environment.

```bash
cd ../finGrow_backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the server
uvicorn main:app --reload
```
*The backend server will start at `http://127.0.0.1:8001`*

### 2. Frontend Setup
Navigate to the frontend directory.

```bash
cd .

# Install dependencies
npm install

# Run the development server
npm run dev
```
*The application will be available at `http://localhost:3000`*

## 🤝 Contributing

We welcome contributions! Please fork the repository and submit a pull request for any enhancements or bug fixes.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Built with ❤️ for the [Hackathon Name] Hackathon.*
# FinGrow 🚀

**AI-Powered Financial Growth & Literacy Platform for India**

FinGrow is an interactive, gamified platform designed to help young Indians master personal finance. By combining AI-driven coaching, real-time simulations, and engaging games, we make financial literacy accessible, practical, and fun.

![FinGrow Dashboard Demo](https://via.placeholder.com/800x450.png?text=FinGrow+Dashboard+Preview)

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
- **Database**: SQLite
- **AI Integration**: Google Gemini API
- **Data Processing**: Pandas, NumPy

---

## 📁 Project Structure

```
fin-grow/
├── public/                         # Static assets (SVGs, icons)
│
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── ai-coach/
│   │   ├── consequence-simulator/
│   │   ├── financial-health/
|   |   ├── games/
│   │   ├── goal-planner/
│   │   ├── growth-simulator/
│   │   ├── learn/
|   |   ├── login/
|   |   ├── signup/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/                 # Feature-based UI components
│   │   ├── ai-coach/
│   │   ├── consequence-simulator/
│   │   ├── dashboard/
│   │   ├── financial-health/
|   |   ├── games/
│   │   ├── goal-planner/
│   │   ├── growth-simulator/
│   │   ├── layout/
│   │   ├── learn/
│   │   └── ui/                     # Reusable UI components
│   │
│   ├── finGrow_backend/                    # Backend logic / APIs
│   │   ├── __pycache__/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── config/
│   │
│   └── lib/                        # Utility/helper functions
│       └── utils.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── tsconfig.json
└── README.md
```
---
## 🚀 How to Run 

Follow these steps to set up the project locally.

---
### Prerequisites
- Node.js (v18+)
- Python (v3.9+)
- Git

---

### 1. Clone the Repository
```bash
git clone https://github.com/Siddhu-2380/Tritech.git

cd fingrow
```
---

### 2. Backend Setup
Navigate to the backend directory and set up the Python environment.

```bash
cd finGrow_backend

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
*The backend server will start at `http://127.0.0.1:8000`*

---

### 3. Frontend Setup
Navigate to the frontend directory.

```bash
cd ../fin-grow

# Install dependencies
npm install

# Run the development server
npm run dev
```
*The application will be available at `http://localhost:3000`*

---

*Built by Team Tritech Hackathon.*

---
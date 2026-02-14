---
## FinGrow – AI Financial Growth Simulator

FinGrow is a modern, responsive financial literacy web application designed for youth. It uses interactive simulators, learning modules, and AI-style guidance to teach financial decision-making. This project is frontend-only and uses mock/static data for all calculations.
---
## Tech Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Chart.js
- Modular component-based architecture
---
## Project Structure
```
fin-grow/
│
├── public/
│   └── assets, icons, images
│
├── src/
│   ├── app/
│   │   ├── ai-coach/
│   │   │   └── page.tsx
│   │   ├── consequence-simulator/
│   │   │   └── page.tsx
│   │   ├── financial-health/
│   │   │   └── page.tsx
│   │   ├── goal-planner/
│   │   │   └── page.tsx
│   │   ├── growth-simulator/
│   │   │   └── page.tsx
│   │   ├── learn/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx (Home Page)
│   │
│   ├── components/
│   │   ├── ai-coach/
│   │   ├── consequence-simulator/
│   │   ├── dashboard/
│   │   ├── financial-health/
│   │   ├── goal-planner/
│   │   ├── growth-simulator/
│   │   ├── layout/
│   │   ├── learn/
│   │   ├── ui/
│   │   └── lib/
│   │
│   └── globals.css
│
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```
---
## Features

- 1. Growth Simulator  
   Simulates investment growth using mock interest rates and charts.

- 2. Goal Planner  
   Allows users to set and track savings goals.

- 3. Financial Health  
   Shows budgeting insights, spending breakdowns, and savings indicators.

- 4. AI Coach (Frontend Mock)  
   Provides pre-defined financial advice based on selected topics.

- 5. Consequence Simulator  
   Shows consequences of financial decisions such as EMI, debt, and impulse purchases.

- 6. Learning Section  
   A structured learning module explaining financial concepts in simple language.
---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Siddhu-2380/Tritech.git 

cd fin-grow 
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev

App will open at: http://localhost:3000
```

---
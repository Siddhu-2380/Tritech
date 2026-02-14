from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from routers import financial, simulator, goals, gamification

# Initialize Database
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="FinGrow API",
    description="Backend for FinGrow Financial Literacy App",
    version="1.0.0"
)

# CORS Setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all for hackathon
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(financial.router)
app.include_router(simulator.router)
app.include_router(goals.router)
app.include_router(gamification.router)

@app.get("/")
def root():
    return {"message": "Welcome to FinGrow API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

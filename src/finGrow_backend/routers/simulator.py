from fastapi import APIRouter
from schemas import GrowthInput, GrowthResponse, DecisionInput, DecisionResponse
from services.growth_engine import simulate_investment_growth
from services.consequence_engine import analyze_financial_decision

router = APIRouter(
    prefix="/simulator",
    tags=["Simulators"]
)

@router.post("/simulate-growth", response_model=GrowthResponse)
def get_growth_simulation(input_data: GrowthInput):
    return simulate_investment_growth(input_data)

@router.post("/analyze-decision", response_model=DecisionResponse)
def get_decision_analysis(input_data: DecisionInput):
    return analyze_financial_decision(input_data)

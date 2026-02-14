from fastapi import APIRouter
from schemas import FinancialInput, FinancialScoreResponse
from services.score_engine import calculate_financial_score

router = APIRouter(
    prefix="/financial",
    tags=["Financial Health"]
)

@router.post("/calculate-score", response_model=FinancialScoreResponse)
def get_financial_score(input_data: FinancialInput):
    return calculate_financial_score(input_data)

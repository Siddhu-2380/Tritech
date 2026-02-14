from fastapi import APIRouter
from schemas import GoalInput, GoalResponse
from services.goal_engine import calculate_goal_plan

router = APIRouter(
    prefix="/goals",
    tags=["Goals"]
)

@router.post("/calculate-goal", response_model=GoalResponse)
def get_goal_calculation(input_data: GoalInput):
    return calculate_goal_plan(input_data)

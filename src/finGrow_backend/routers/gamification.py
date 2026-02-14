from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from schemas import XPUpdateInput, XPResponse
from services.xp_engine import update_user_xp
from database import get_db

router = APIRouter(
    prefix="/gamification",
    tags=["Gamification"]
)

@router.post("/update-xp", response_model=XPResponse)
def update_xp(input_data: XPUpdateInput, db: Session = Depends(get_db)):
    return update_user_xp(db, input_data.action_type, input_data.current_xp)

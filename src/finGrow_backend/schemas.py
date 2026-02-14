from pydantic import BaseModel
from typing import List, Optional

# --- User Schemas ---
class UserBase(BaseModel):
    name: str
    age: int

class UserCreate(UserBase):
    pass

class UserResponse(UserBase):
    id: int
    xp: int
    level: str

    class Config:
        from_attributes = True

# --- Financial Score Schemas ---
class FinancialInput(BaseModel):
    monthly_income: float
    monthly_expenses: float
    savings: float
    debt: float
    emergency_fund: float
    age: int

class FinancialScoreResponse(BaseModel):
    financial_score: int
    risk_level: str
    financial_age: int
    suggestions: List[str]

# --- Simulator Schemas ---
class GrowthInput(BaseModel):
    monthly_investment: float
    annual_return: float
    years: int
    investment_type: str = "SIP"
    current_age: Optional[int] = None
    monthly_expenses: Optional[float] = None
    current_age: Optional[int] = None
    monthly_expenses: Optional[float] = None

class YearlyProjection(BaseModel):
    year: int
    principal_only: float
    investment_value: float

class FinancialFreedom(BaseModel):
    freedom_age: Optional[int] = None
    years_to_freedom: Optional[int] = None
    required_corpus: float
    projected_corpus: Optional[float] = None
    safe_withdrawal_rate: Optional[float] = None
    message: Optional[str] = None

class GrowthResponse(BaseModel):
    yearly_projection: List[YearlyProjection]
    principal_only: float
    total_returns: float
    final_value: float
    financial_freedom: Optional[FinancialFreedom] = None

class DecisionInput(BaseModel):
    monthly_income: float
    monthly_expenses: float
    decision_type: str  # buy_gadget, take_loan, increase_savings, start_investing
    decision_amount: float
    years: int


class DecisionResponse(BaseModel):
    impact_score: int  # 0-100 scale
    risk_level: str  # Low, Medium, High
    future_loss_or_gain: float  # Rupee amount (negative for loss, positive for gain)
    message: str  # AI explanation
    suggestion: str  # Smart financial advice

# --- Goal Schemas ---
class GoalInput(BaseModel):
    target_amount: float
    current_savings: float
    annual_return: float
    years: int

class GoalResponse(BaseModel):
    monthly_required: float
    total_investment: float
    projected_value: float
    message: str
    feasibility: str

# --- Gamification Schemas ---
class XPUpdateInput(BaseModel):
    action_type: str
    current_xp: int

class XPResponse(BaseModel):
    new_xp: int
    level: int
    xp_to_next_level: int
    badge: str
    message: str

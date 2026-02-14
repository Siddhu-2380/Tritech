from sqlalchemy.orm import Session
from models import User

XP_RULES = {
    "calculate_score": 20,
    "simulate_growth": 25,
    "analyze_decision": 25,
    "plan_goal": 30,
    "read_article": 10,
    "chat_with_ai": 15
}

LEVELS = {
    1: 0,
    2: 100,
    3: 250,
    4: 500,
    5: 1000
}

def determine_level(xp):
    if xp >= 1000:
        return 5, "Financial Master", 0
    elif xp >= 500:
        return 4, "Wealth Builder", 1000 - xp
    elif xp >= 250:
        return 3, "Planner", 500 - xp
    elif xp >= 100:
        return 2, "Smart Saver", 250 - xp
    else:
        return 1, "Novice", 100 - xp

def update_user_xp(db: Session, action_type: str, current_xp: int):
    # Calculate new XP
    xp_gain = XP_RULES.get(action_type, 0)
    new_xp = current_xp + xp_gain
    
    # Determine new level details
    level, badge, xp_needed = determine_level(new_xp)
    
    # Update DB (Assuming User ID 1 for Hackathon/Single User)
    user = db.query(User).filter(User.id == 1).first()
    if not user:
        user = User(id=1, name="User", age=25, xp=new_xp)
        db.add(user)
    else:
        user.xp = new_xp
        # We might want to store level too if model has it, but schemas doesn't strictly need it to be stored if we calc it
        # Assuming model has 'level' string from previous code
        user.level = str(level) 
        
    db.commit()
    db.refresh(user)
    
    # Message
    message = f"+{xp_gain} XP Earned!"
    
    return {
        "new_xp": new_xp,
        "level": level,
        "xp_to_next_level": xp_needed,
        "badge": badge,
        "message": message
    }

def calculate_financial_score(input_data):
    # 1. Savings Ratio Logic
    if input_data.monthly_income > 0:
        savings_ratio = (input_data.monthly_income - input_data.monthly_expenses) / input_data.monthly_income
    else:
        savings_ratio = 0
    
    if savings_ratio < 0:
        savings_ratio = 0

    if savings_ratio >= 0.30:
        score_savings = 100
    elif 0.20 <= savings_ratio < 0.30:
        score_savings = 80
    elif 0.10 <= savings_ratio < 0.20:
        score_savings = 60
    else:
        score_savings = 40

    # 2. Debt Ratio Logic
    if input_data.monthly_income > 0:
        debt_ratio = (input_data.debt / 12) / input_data.monthly_income # assuming input debt is total not monthly emi? 
        # Re-reading prompt: "Debt Ratio = (debt / 12) / monthly_income" -> user input "debt" likely means total outstanding debt or annual debt service?
        # Actually standard DTI is monthly debt payments / monthly income.
        # Prompt says: "Debt Ratio = (debt / 12) / monthly_income". 
        # If input 'debt' is total annual debt payments, then debt/12 is monthly. 
        # If input 'debt' is total outstanding debt, this formula is unusual but I will follow the prompt's explicit formula.
        pass
    else:
        debt_ratio = 0

    # Let's assume input 'debt' is total annual debt obligation based on the formula provided.
    debt_ratio = (input_data.debt / 12) / input_data.monthly_income if input_data.monthly_income > 0 else 1.0

    if debt_ratio < 0.20:
        score_debt = 100
    elif 0.20 <= debt_ratio <= 0.35:
        score_debt = 70
    else:
        score_debt = 40

    # 3. Emergency Coverage Logic
    if input_data.monthly_expenses > 0:
        emergency_coverage = input_data.emergency_fund / input_data.monthly_expenses
    else:
        emergency_coverage = 0

    if emergency_coverage >= 6:
        score_emergency = 100
    elif 3 <= emergency_coverage < 6:
        score_emergency = 70
    else:
        score_emergency = 40

    # Final Score Calculation
    final_score = (score_savings * 0.4) + (score_debt * 0.3) + (score_emergency * 0.3)
    final_score = int(round(final_score))

    # Risk Level
    if 80 <= final_score <= 100:
        risk_level = "Low"
    elif 60 <= final_score < 80:
        risk_level = "Medium"
    else:
        risk_level = "High"

    # Financial Age
    if final_score >= 80:
        financial_age = max(18, input_data.age - 2)
    elif 60 <= final_score < 80:
        financial_age = input_data.age
    else:
        financial_age = input_data.age + 3

    # Suggestions
    suggestions = []
    if score_savings < 80:
        suggestions.append("Try to increase your savings rate to at least 20%.")
    if score_debt < 70:
        suggestions.append("Your debt-to-income ratio is high. Focus on paying down high-interest debt.")
    if score_emergency < 70:
        suggestions.append("Build your emergency fund to cover at least 3-6 months of expenses.")

    return {
        "financial_score": final_score,
        "risk_level": risk_level,
        "financial_age": financial_age,
        "suggestions": suggestions
    }

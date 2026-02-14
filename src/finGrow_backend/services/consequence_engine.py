def analyze_financial_decision(input_data):
    """
    Analyze financial decisions and calculate their long-term impact.
    Decision types: buy_gadget, take_loan, increase_savings, start_investing
    """
    
    decision_type = input_data.decision_type
    amount = input_data.decision_amount
    years = input_data.years
    monthly_savings = input_data.monthly_income - input_data.monthly_expenses
    
    # Constants
    INVESTMENT_RETURN_RATE = 0.12  # 12% annual return
    LOAN_INTEREST_RATE = 0.14  # 14% annual interest
    
    impact_score = 50  # Default neutral
    risk_level = "Medium"
    future_loss_or_gain = 0
    message = ""
    suggestion = ""
    
    # Calculate based on decision type
    if decision_type == "buy_gadget":
        # Negative decision: Calculate opportunity cost
        # What could have been earned if invested instead
        opportunity_cost = amount * ((1 + INVESTMENT_RETURN_RATE) ** years - 1)
        future_loss_or_gain = -opportunity_cost
        
        # Impact score: Lower for bigger purchases relative to savings
        impact_score = max(0, 50 - int((amount / (monthly_savings * 12)) * 30))
        
        # Risk level based on amount vs savings
        if amount > monthly_savings * 6:
            risk_level = "High"
        elif amount > monthly_savings * 3:
            risk_level = "Medium"
        else:
            risk_level = "Low"
        
        message = f"Buying this gadget for ₹{amount:,.0f} means losing ₹{abs(future_loss_or_gain):,.0f} in potential investment growth over {years} years. This is the opportunity cost of not investing."
        suggestion = f"Consider investing ₹{amount:,.0f} instead. In {years} years, it could grow to ₹{amount * (1 + INVESTMENT_RETURN_RATE) ** years:,.0f} at 12% returns!"
    
    elif decision_type == "take_loan":
        # Very negative: Calculate total cost with interest
        # Using simple EMI calculation: Total = Principal + Interest
        monthly_rate = LOAN_INTEREST_RATE / 12
        months = years * 12
        emi = amount * monthly_rate * ((1 + monthly_rate) ** months) / (((1 + monthly_rate) ** months) - 1)
        total_payable = emi * months
        interest_cost = total_payable - amount
        
        future_loss_or_gain = -interest_cost
        
        # Impact score: Very low for loans
        impact_score = max(10, 30 - int((interest_cost / amount) * 20))
        risk_level = "High"
        
        message = f"Taking a loan of ₹{amount:,.0f} at 14% interest will cost you ₹{interest_cost:,.0f} in interest over {years} years. Your total repayment will be ₹{total_payable:,.0f} with monthly EMI of ₹{emi:,.0f}."
        suggestion = f"Try to save ₹{amount / (years * 12):,.0f}/month instead of taking a loan. This avoids ₹{interest_cost:,.0f} in interest payments."
    
    elif decision_type == "increase_savings":
        # Positive: Calculate simple savings growth
        # Just accumulation without investment returns
        total_saved = amount * 12 * years
        future_loss_or_gain = total_saved
        
        # Impact score: Good but not great (better to invest)
        impact_score = min(100, 60 + int((amount / monthly_savings) * 20))
        risk_level = "Low"
        
        message = f"Increasing your monthly savings by ₹{amount:,.0f} will accumulate ₹{total_saved:,.0f} over {years} years. This builds financial security!"
        suggestion = f"Great start! Consider investing this savings to potentially grow it to ₹{amount * 12 * ((((1 + INVESTMENT_RETURN_RATE/12) ** (years * 12)) - 1) / (INVESTMENT_RETURN_RATE/12)):,.0f} through SIP investments at 12% returns."
    
    elif decision_type == "start_investing":
        # Very positive: Calculate SIP returns
        monthly_rate = INVESTMENT_RETURN_RATE / 12
        months = years * 12
        
        # SIP formula: FV = PMT * (((1 + r)^n - 1) / r)
        if monthly_rate == 0:
            future_value = amount * months
        else:
            future_value = amount * (((1 + monthly_rate) ** months - 1) / monthly_rate)
        
        total_invested = amount * months
        returns = future_value - total_invested
        future_loss_or_gain = returns
        
        # Impact score: Excellent
        impact_score = min(100, 75 + int((returns / total_invested) * 25))
        risk_level = "Low"
        
        message = f"Starting a SIP of ₹{amount:,.0f}/month for {years} years at 12% returns will grow to ₹{future_value:,.0f}. You'll earn ₹{returns:,.0f} on your investment of ₹{total_invested:,.0f}!"
        suggestion = f"Excellent decision! Stay consistent with your investments. Consider increasing your SIP by 10% annually to maximize wealth creation."
    
    else:
        # Unknown decision type
        message = "Unknown decision type. Please select a valid option."
        suggestion = "Choose from: buy_gadget, take_loan, increase_savings, or start_investing."
    
    return {
        "impact_score": int(impact_score),
        "risk_level": risk_level,
        "future_loss_or_gain": round(future_loss_or_gain, 2),
        "message": message,
        "suggestion": suggestion
    }

def calculate_goal_plan(input_data):
    """
    Calculate required monthly SIP to reach a financial goal.
    Uses proper compounding formula accounting for current savings growth.
    """
    target_amount = input_data.target_amount
    current_savings = input_data.current_savings
    annual_return = input_data.annual_return
    years = input_data.years

    r = annual_return / 100 / 12  # Monthly interest rate
    n = years * 12  # Total months

    # Step 1: Calculate future value of current savings with compounding
    if r == 0:
        fv_current_savings = current_savings
    else:
        fv_current_savings = current_savings * ((1 + r) ** n)

    # Step 2: Calculate remaining amount needed
    remaining_needed = target_amount - fv_current_savings

    # Step 3: Calculate required monthly SIP
    if remaining_needed <= 0:
        # Current savings will grow beyond target - no SIP needed
        monthly_required = 0
        total_investment = 0
        projected_value = round(fv_current_savings, 2)
        message = f"Great news! Your current savings of ₹{current_savings:,.0f} will grow to ₹{fv_current_savings:,.0f} at {annual_return}% return, exceeding your target of ₹{target_amount:,.0f}. No additional investment needed!"
        feasibility = "Easy"
    else:
        if r == 0:
            monthly_required = remaining_needed / n
        else:
            monthly_required = remaining_needed * r / (((1 + r) ** n) - 1)

        total_investment = monthly_required * n
        
        # Projected value = FV of current savings + FV of SIP
        if r == 0:
            sip_fv = monthly_required * n
        else:
            sip_fv = monthly_required * (((1 + r) ** n - 1) / r)
        
        projected_value = round(fv_current_savings + sip_fv, 2)

        # Feasibility check
        if monthly_required < 5000:
            feasibility = "Easy"
            message = f"You need to invest just ₹{monthly_required:,.0f}/month to reach your goal of ₹{target_amount:,.0f} in {years} years. Your current savings of ₹{current_savings:,.0f} will also grow with compounding."
        elif monthly_required < 15000:
            feasibility = "Moderate"
            message = f"To achieve your goal of ₹{target_amount:,.0f}, you need to invest ₹{monthly_required:,.0f}/month for {years} years at {annual_return}% return. This is achievable with disciplined investing."
        else:
            feasibility = "Aggressive"
            message = f"Your goal of ₹{target_amount:,.0f} requires ₹{monthly_required:,.0f}/month for {years} years. Consider extending the timeline or reducing the target for a more comfortable plan."

    return {
        "monthly_required": round(monthly_required, 2),
        "total_investment": round(total_investment, 2),
        "projected_value": projected_value,
        "message": message,
        "feasibility": feasibility
    }

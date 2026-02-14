def calculate_financial_freedom_age(monthly_investment, annual_return, monthly_expenses, current_age):
    """
    Calculate when accumulated investments generate enough passive income to cover expenses.
    Uses the 4% Safe Withdrawal Rule (or annual_return if lower).
    """
    # Use conservative withdrawal rate (4% or annual return, whichever is lower)
    safe_withdrawal_rate = min(annual_return, 4.0)
    
    # Calculate required corpus: Annual expenses / withdrawal rate
    annual_expenses = monthly_expenses * 12
    required_corpus = annual_expenses / (safe_withdrawal_rate / 100)
    
    # Calculate year-by-year until corpus >= required
    r = annual_return / 100 / 12  # Monthly interest rate
    max_years = 50  # Maximum projection
    
    for year in range(1, max_years + 1):
        months = year * 12
        
        # Calculate corpus at this year using SIP formula
        if r == 0:
            corpus = monthly_investment * months
        else:
            corpus = monthly_investment * (((1 + r) ** months - 1) / r)
        
        # Check if financial freedom achieved
        if corpus >= required_corpus:
            return {
                "freedom_age": current_age + year,
                "years_to_freedom": year,
                "required_corpus": round(required_corpus, 2),
                "projected_corpus": round(corpus, 2),
                "safe_withdrawal_rate": safe_withdrawal_rate
            }
    
    # If not achieved within max_years
    return {
        "freedom_age": None,
        "years_to_freedom": None,
        "required_corpus": round(required_corpus, 2),
        "projected_corpus": None,
        "safe_withdrawal_rate": safe_withdrawal_rate,
        "message": "Increase monthly investment or reduce expenses to achieve financial freedom"
    }


def simulate_investment_growth(input_data):
    monthly_investment = input_data.monthly_investment
    annual_return = input_data.annual_return
    years = input_data.years
    investment_type = getattr(input_data, "investment_type", "SIP")
    current_age = getattr(input_data, "current_age", None)
    monthly_expenses = getattr(input_data, "monthly_expenses", None)

    # r = monthly interest rate for SIP, annual for Lumpsum/FD
    # SIP usually compounds monthly with monthly payments
    # Lumpsum/FD usually compounds annually or quarterly, assuming annual here for simplicity unless specified
    
    # Common variables
    yearly_projection = []
    
    # Logic based on Investment Type
    # Logic based on Investment Type (Treating all as SIP for "With vs Without" comparison per requirment)
    # User requested strict adherence to SIP formula for "With Investment"
    # and simple accumulation for "Without Investment"
    
    # r = monthly interest rate
    r = annual_return / 100 / 12
    n = years * 12

    total_invested = monthly_investment * n

    if r == 0:
        future_value = total_invested
    else:
        future_value = monthly_investment * (((1 + r) ** n - 1) / r)

    total_returns = future_value - total_invested

    # Generate yearly projection for chart
    for year in range(1, years + 1):
        months = year * 12

        if r == 0:
            yearly_value = monthly_investment * months
        else:
            yearly_value = monthly_investment * (((1 + r) ** months - 1) / r)

        yearly_projection.append({
            "year": year,
            "principal_only": round(monthly_investment * months, 2),
            "investment_value": round(yearly_value, 2)
        })

    # Calculate financial freedom age if data provided
    financial_freedom = None
    if current_age is not None and monthly_expenses is not None:
        financial_freedom = calculate_financial_freedom_age(
            monthly_investment, annual_return, monthly_expenses, current_age
        )

    return {
        "yearly_projection": yearly_projection,
        "principal_only": round(total_invested, 2),
        "total_returns": round(total_returns, 2),
        "final_value": round(future_value, 2),
        "financial_freedom": financial_freedom
    }

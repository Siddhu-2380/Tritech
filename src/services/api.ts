const API_BASE_URL = "http://127.0.0.1:8000";

export interface FinancialInput {
    monthly_income: number;
    monthly_expenses: number;
    savings: number;
    debt: number;
    emergency_fund: number;
    age: number;
}

export interface FinancialScoreResponse {
    financial_score: number;
    risk_level: string;
    financial_age: number;
    suggestions: string[];
}

export const calculateFinancialScore = async (data: FinancialInput): Promise<FinancialScoreResponse> => {
    try {
        const response = await fetch(`${API_BASE_URL}/financial/calculate-score`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Failed to calculate score");
        }

        return await response.json();
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};

export interface GrowthInput {
    monthly_investment: number;
    annual_return: number;
    years: number;
    investment_type?: string;
    current_age?: number;
    monthly_expenses?: number;
}

export interface YearlyProjection {
    year: number;
    principal_only: number;
    investment_value: number;
}

export interface FinancialFreedom {
    freedom_age: number | null;
    years_to_freedom: number | null;
    required_corpus: number;
    projected_corpus?: number;
    safe_withdrawal_rate?: number;
    message?: string;
    monthly_passive_income?: number;
    additional_investment_needed?: number;
}

export interface GrowthResponse {
    yearly_projection: YearlyProjection[];
    principal_only: number;
    total_returns: number;
    final_value: number;
    financial_freedom?: FinancialFreedom;
}

export const simulateGrowth = async (data: GrowthInput): Promise<GrowthResponse> => {
    try {
        const response = await fetch(`${API_BASE_URL}/simulator/simulate-growth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Failed to simulate growth");
        }

        return await response.json();
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};

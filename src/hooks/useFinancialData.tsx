"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

const API_BASE_URL = "http://127.0.0.1:8001";

interface FinancialData {
    financialScore: number;
    riskLevel: string;
    totalInvested: number;
    totalReturns: number;
    activeGoalsCount: number;
    isLoading: boolean;
}

interface FinancialDataContextType extends FinancialData {
    updateFinancialScore: (score: number, risk: string) => Promise<void>;
    updateInvestmentStats: (invested: number, returns: number) => Promise<void>;
    incrementGoals: () => Promise<void>;
    refreshData: () => Promise<void>;
}

const FinancialDataContext = createContext<FinancialDataContextType | null>(null);

export function useFinancialData() {
    const ctx = useContext(FinancialDataContext);
    if (!ctx) throw new Error("useFinancialData must be used within FinancialDataProvider");
    return ctx;
}

export function FinancialDataProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<FinancialData>({
        financialScore: 0,
        riskLevel: "Unknown",
        totalInvested: 0,
        totalReturns: 0,
        activeGoalsCount: 0,
        isLoading: true
    });

    const refreshData = useCallback(async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/dashboard/stats`);
            if (res.ok) {
                const data = await res.json();
                setState(prev => ({
                    ...prev,
                    financialScore: data.financial_score,
                    riskLevel: data.risk_level,
                    totalInvested: data.total_invested,
                    totalReturns: data.total_returns,
                    activeGoalsCount: data.active_goals_count,
                    isLoading: false
                }));
            }
        } catch (error) {
            console.error("Failed to fetch dashboard stats", error);
            setState(prev => ({ ...prev, isLoading: false }));
        }
    }, []);

    useEffect(() => {
        refreshData();
    }, [refreshData]);

    const updateStats = async (updates: Partial<any>) => {
        // Optimistic update
        setState(prev => ({ ...prev, ...updates }));

        try {
            await fetch(`${API_BASE_URL}/dashboard/update`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updates)
            });
        } catch (error) {
            console.error("Failed to update stats", error);
        }
    };

    const updateFinancialScore = useCallback(async (score: number, risk: string) => {
        await updateStats({ financial_score: score, risk_level: risk });
    }, []);

    const updateInvestmentStats = useCallback(async (invested: number, returns: number) => {
        await updateStats({ total_invested: invested, total_returns: returns });
    }, []);

    const incrementGoals = useCallback(async () => {
        await updateStats({ active_goals_count: state.activeGoalsCount + 1 });
    }, [state.activeGoalsCount]);

    return (
        <FinancialDataContext.Provider value={{
            ...state,
            updateFinancialScore,
            updateInvestmentStats,
            incrementGoals,
            refreshData
        }}>
            {children}
        </FinancialDataContext.Provider>
    );
}

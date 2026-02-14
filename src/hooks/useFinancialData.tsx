"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

interface FinancialData {
    financialScore: number | null;
    riskLevel: string | null;
    totalInvested: number | null;
    totalReturns: number | null;
    activeGoalsCount: number;
}

interface FinancialDataContextType extends FinancialData {
    updateFinancialScore: (score: number, risk: string) => void;
    updateInvestmentStats: (invested: number, returns: number) => void;
    incrementGoals: () => void;
}

const FinancialDataContext = createContext<FinancialDataContextType | null>(null);

export function useFinancialData() {
    const ctx = useContext(FinancialDataContext);
    if (!ctx) throw new Error("useFinancialData must be used within FinancialDataProvider");
    return ctx;
}

export function FinancialDataProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<FinancialData>({
        financialScore: null,
        riskLevel: null,
        totalInvested: null,
        totalReturns: null,
        activeGoalsCount: 0
    });

    // Load from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("fingrow_financial_data");
        if (saved) {
            try {
                setState(prev => ({ ...prev, ...JSON.parse(saved) }));
            } catch { /* ignore */ }
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("fingrow_financial_data", JSON.stringify(state));
    }, [state]);

    const updateFinancialScore = useCallback((score: number, risk: string) => {
        setState(prev => ({ ...prev, financialScore: score, riskLevel: risk }));
    }, []);

    const updateInvestmentStats = useCallback((invested: number, returns: number) => {
        setState(prev => ({ ...prev, totalInvested: invested, totalReturns: returns }));
    }, []);

    const incrementGoals = useCallback(() => {
        setState(prev => ({ ...prev, activeGoalsCount: prev.activeGoalsCount + 1 }));
    }, []);

    return (
        <FinancialDataContext.Provider value={{ ...state, updateFinancialScore, updateInvestmentStats, incrementGoals }}>
            {children}
        </FinancialDataContext.Provider>
    );
}

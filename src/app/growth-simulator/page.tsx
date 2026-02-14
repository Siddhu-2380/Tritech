"use client";

import { useState, useEffect } from "react";
import { InvestmentInputCard } from "@/components/growth-simulator/InvestmentInputCard";
import { GrowthProjectionChart } from "@/components/growth-simulator/GrowthProjectionChart";
import { ProjectionSummaryCards } from "@/components/growth-simulator/ProjectionSummaryCards";
import { ComparisonCards } from "@/components/growth-simulator/ComparisonCards";
import { BreakdownTable } from "@/components/growth-simulator/BreakdownTable";
import { FinancialFreedomCard } from "@/components/growth-simulator/FinancialFreedomCard";
import { simulateGrowth, GrowthInput, GrowthResponse } from "@/services/api";
import { useGamification } from "@/hooks/useGamification";
import { useFinancialData } from "@/hooks/useFinancialData";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function GrowthSimulatorPage() {
    const [growthData, setGrowthData] = useState<GrowthResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { awardXP } = useGamification();
    const { updateInvestmentStats } = useFinancialData();
    const [annualReturn, setAnnualReturn] = useState(12);
    const [currentAge, setCurrentAge] = useState<number | undefined>(26);
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [monthlyExpenses, setMonthlyExpenses] = useState<number | undefined>(30000);

    // Initial simulation on load (optional, but good for UX)
    useEffect(() => {
        handleSimulate({
            monthly_investment: 5000,
            annual_return: 12,
            years: 10,
            current_age: 26,
            monthly_expenses: 30000
        });
    }, []);

    const handleSimulate = async (data: GrowthInput) => {
        setLoading(true);
        setError(null);
        setAnnualReturn(data.annual_return);
        setCurrentAge(data.current_age);
        setMonthlyInvestment(data.monthly_investment);
        setMonthlyExpenses(data.monthly_expenses);
        try {
            const result = await simulateGrowth(data);
            setGrowthData(result);
            updateInvestmentStats(result.principal_only, result.total_returns);
            awardXP("simulate_growth");
        } catch (err) {
            setError("Failed to simulate growth. Please check backend connection.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8 p-6 md:p-8 max-w-7xl mx-auto">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Growth Simulator
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                    Project your wealth over time with smart investments.
                </p>
            </div>

            {error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <div className="grid gap-6 lg:grid-cols-12">
                {/* Left Column: Input */}
                <div className="lg:col-span-4">
                    <InvestmentInputCard onSubmit={handleSimulate} isLoading={loading} />
                </div>

                {/* Right Column: Chart & Projection */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="h-[400px]">
                        <GrowthProjectionChart data={growthData?.yearly_projection || []} />
                    </div>
                </div>
            </div>

            {/* Middle Section: Summaries */}
            <ProjectionSummaryCards
                principalOnly={growthData?.principal_only || 0}
                totalReturns={growthData?.total_returns || 0}
                finalValue={growthData?.final_value || 0}
                annualReturn={annualReturn}
            />

            <div className="grid gap-6 md:grid-cols-2">
                <ComparisonCards />
                <BreakdownTable />
            </div>

            {/* Bottom Section: Freedom Card */}
            <FinancialFreedomCard
                freedomAge={growthData?.financial_freedom?.freedom_age || null}
                yearsToFreedom={growthData?.financial_freedom?.years_to_freedom || null}
                requiredCorpus={growthData?.financial_freedom?.required_corpus || 0}
                monthlyInvestment={monthlyInvestment}
                monthlyExpenses={monthlyExpenses || 0}
                currentAge={currentAge}
                message={growthData?.financial_freedom?.message}
                additionalInvestmentNeeded={growthData?.financial_freedom?.additional_investment_needed}
            />
        </div>
    );
}

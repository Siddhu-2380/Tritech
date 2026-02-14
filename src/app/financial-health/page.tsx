"use client";

import { useState } from "react";
import { FinancialInputCard } from "@/components/financial-health/FinancialInputCard";
import { ScoreGauge } from "@/components/financial-health/ScoreGauge";
import { FinancialAgeCard } from "@/components/financial-health/FinancialAgeCard";
import { SuggestionCards } from "@/components/financial-health/SuggestionCards";
import { BreakdownChart } from "@/components/financial-health/BreakdownChart";
import { calculateFinancialScore, FinancialInput, FinancialScoreResponse } from "@/services/api";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function FinancialHealthPage() {
    const [scoreData, setScoreData] = useState<FinancialScoreResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentAge, setCurrentAge] = useState<number>(30); // Default age for initial render if needed

    const handleCalculate = async (data: FinancialInput) => {
        setLoading(true);
        setError(null);
        setCurrentAge(data.age);

        try {
            const result = await calculateFinancialScore(data);
            setScoreData(result);
        } catch (err) {
            setError("Failed to calculate score. Please ensure the backend server is running.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8 p-6 md:p-8 max-w-7xl mx-auto">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Financial Health Assessment
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                    Comprehensive analysis of your financial wellbeing.
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
                <div className="lg:col-span-7">
                    <FinancialInputCard onSubmit={handleCalculate} isLoading={loading} />
                </div>

                {/* Right Column: Score & Age */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="h-[300px]">
                        <ScoreGauge
                            score={scoreData?.financial_score || 0}
                            riskLevel={scoreData?.risk_level || "Unknown"}
                        />
                    </div>
                    <FinancialAgeCard
                        financialAge={scoreData?.financial_age || currentAge}
                        actualAge={currentAge}
                    />
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <BreakdownChart />
                {/* Placeholder for future expansion or another chart */}
                <div className="bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center p-6 text-slate-400 border border-dashed border-slate-300 dark:border-slate-700">
                    <p>Expense Trends (Coming Soon)</p>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    Smart Suggestions
                </h3>
                <SuggestionCards suggestions={scoreData?.suggestions || []} />
            </div>
        </div>
    );
}

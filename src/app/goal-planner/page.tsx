"use client";

import { useState } from "react";
import { GoalInputCard } from "@/components/goal-planner/GoalInputCard";
import { GoalResultCard } from "@/components/goal-planner/GoalResultCard";
import { calculateGoal, GoalInput, GoalResponse } from "@/services/api";
import { useGamification } from "@/hooks/useGamification";
import { AlertCircle } from "lucide-react";

export default function GoalPlannerPage() {
    const [result, setResult] = useState<GoalResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { awardXP } = useGamification();

    const handleCalculate = async (data: GoalInput) => {
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await calculateGoal(data);
            setResult(response);
            awardXP("plan_goal");
        } catch (err) {
            setError("Failed to calculate goal. Please check backend connection.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8 p-6 md:p-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Goal Planner
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                    Calculate how much you need to invest monthly to achieve your financial goals.
                </p>
            </div>

            {/* Main Layout */}
            <div className="grid gap-6 lg:grid-cols-12">
                {/* Left Column: Goal Input */}
                <div className="lg:col-span-4">
                    <GoalInputCard onCalculate={handleCalculate} isLoading={loading} />
                </div>

                {/* Right Column: Results */}
                <div className="lg:col-span-8">
                    {/* Loading State */}
                    {loading && (
                        <div className="flex items-center justify-center h-64">
                            <div className="text-center space-y-3">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
                                <p className="text-slate-600 dark:text-slate-400">Calculating your plan...</p>
                            </div>
                        </div>
                    )}

                    {/* Error State */}
                    {error && !loading && (
                        <div className="flex items-center justify-center h-64">
                            <div className="text-center space-y-3 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-200 dark:border-red-800">
                                <AlertCircle className="h-12 w-12 text-red-600 mx-auto" />
                                <p className="text-red-800 dark:text-red-200 font-semibold">{error}</p>
                            </div>
                        </div>
                    )}

                    {/* Results Display */}
                    {result && !loading && (
                        <GoalResultCard
                            monthlyRequired={result.monthly_required}
                            totalInvestment={result.total_investment}
                            projectedValue={result.projected_value}
                            message={result.message}
                            feasibility={result.feasibility}
                        />
                    )}

                    {/* Initial State */}
                    {!result && !loading && !error && (
                        <div className="flex items-center justify-center h-64">
                            <div className="text-center space-y-3">
                                <div className="text-6xl mb-4">🎯</div>
                                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                                    Set Your Goal
                                </p>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Enter your target amount and click &quot;Calculate Plan&quot; to see how much to invest monthly.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

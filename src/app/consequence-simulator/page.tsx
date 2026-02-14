"use client";

import { useState } from "react";
import { DecisionInputCard } from "@/components/consequence-simulator/DecisionInputCard";
import { ImpactScoreGauge } from "@/components/consequence-simulator/ImpactScoreGauge";
import { ConsequenceResultCard } from "@/components/consequence-simulator/ConsequenceResultCard";
import { analyzeDecision, DecisionInput, DecisionResponse } from "@/services/api";
import { useGamification } from "@/hooks/useGamification";
import { AlertCircle } from "lucide-react";

export default function ConsequenceSimulatorPage() {
    const [result, setResult] = useState<DecisionResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { awardXP } = useGamification();

    const handleAnalyze = async (data: DecisionInput) => {
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await analyzeDecision(data);
            setResult(response);
            awardXP("analyze_decision");
        } catch (err) {
            setError("Failed to analyze decision. Please check backend connection.");
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
                    Consequence Simulator
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                    Visualize the long-term impact of your financial decisions before you make them.
                </p>
            </div>

            {/* Main Layout */}
            <div className="grid gap-6 lg:grid-cols-12">
                {/* Left Column: Decision Input */}
                <div className="lg:col-span-4">
                    <DecisionInputCard onAnalyze={handleAnalyze} isLoading={loading} />
                </div>

                {/* Right Column: Results */}
                <div className="lg:col-span-8">
                    {/* Loading State */}
                    {loading && (
                        <div className="flex items-center justify-center h-64">
                            <div className="text-center space-y-3">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
                                <p className="text-slate-600 dark:text-slate-400">Analyzing your decision...</p>
                            </div>
                        </div>
                    )}

                    {/* Error State */}
                    {error && !loading && (
                        <div className="flex items-center justify-center h-64">
                            <div className="text-center space-y-3 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-200 dark:border-red-800">
                                <AlertCircle className="h-12 w-12 text-red-600 mx-auto" />
                                <p className="text-red-800 dark:text-red-200 font-semibold">{error}</p>
                                <p className="text-sm text-red-600 dark:text-red-300">Make sure both servers are running.</p>
                            </div>
                        </div>
                    )}

                    {/* Results Display */}
                    {result && !loading && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {/* Impact Score */}
                            <div className="grid gap-6 md:grid-cols-2">
                                <ImpactScoreGauge
                                    score={result.impact_score}
                                    risk_level={result.risk_level}
                                />

                                {/* Placeholder for second gauge if needed, or leave as single col */}
                                <div className="flex items-center justify-center">
                                    <div className="text-center space-y-2 p-6">
                                        <p className="text-2xl font-bold text-slate-900 dark:text-white">
                                            {result.impact_score >= 71 ? "Great Choice! 🎉" :
                                                result.impact_score >= 31 ? "Think Carefully 🤔" :
                                                    "Risky Decision ⚠️"}
                                        </p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            {result.impact_score >= 71 ? "This decision supports your financial goals" :
                                                result.impact_score >= 31 ? "Consider the long-term consequences" :
                                                    "This could harm your financial health"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Consequence Result Cards */}
                            <ConsequenceResultCard
                                futureGainOrLoss={result.future_loss_or_gain}
                                message={result.message}
                                suggestion={result.suggestion}
                            />
                        </div>
                    )}

                    {/* Initial State */}
                    {!result && !loading && !error && (
                        <div className="flex items-center justify-center h-64">
                            <div className="text-center space-y-3">
                                <div className="text-6xl mb-4">🎯</div>
                                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                                    Ready to Analyze
                                </p>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Choose a decision type and click "Analyze Decision" to see the impact
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

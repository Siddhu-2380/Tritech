"use client";

import { FinancialInputCard } from "@/components/financial-health/FinancialInputCard";
import { ScoreGauge } from "@/components/financial-health/ScoreGauge";
import { FinancialAgeCard } from "@/components/financial-health/FinancialAgeCard";
import { SuggestionCards } from "@/components/financial-health/SuggestionCards";
import { BreakdownChart } from "@/components/financial-health/BreakdownChart";

export default function FinancialHealthPage() {
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

            <div className="grid gap-6 lg:grid-cols-12">
                {/* Left Column: Input */}
                <div className="lg:col-span-7">
                    <FinancialInputCard />
                </div>

                {/* Right Column: Score & Age */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="h-[300px]">
                        <ScoreGauge />
                    </div>
                    <FinancialAgeCard />
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
                <SuggestionCards />
            </div>
        </div>
    );
}

"use client";

import { DecisionSelectorCard } from "@/components/consequence-simulator/DecisionSelectorCard";
import { ImpactComparisonCards } from "@/components/consequence-simulator/ImpactComparisonCards";
import { FinancialAgeImpactCard } from "@/components/consequence-simulator/FinancialAgeImpactCard";
import { RiskWarningCard } from "@/components/consequence-simulator/RiskWarningCard";
import { GoalDelayCard } from "@/components/consequence-simulator/GoalDelayCard";
import { EmotionalInsightCard } from "@/components/consequence-simulator/EmotionalInsightCard";

export default function ConsequenceSimulatorPage() {
    return (
        <div className="space-y-8 p-6 md:p-8 max-w-7xl mx-auto">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Consequence Simulator
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                    Visualize the long-term impact of your financial decisions before you make them.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-12">
                {/* Left Column: Decision Input */}
                <div className="lg:col-span-4 space-y-6">
                    <DecisionSelectorCard />
                    <EmotionalInsightCard />
                </div>

                {/* Right Column: Impact Analysis */}
                <div className="lg:col-span-8 space-y-6">
                    <ImpactComparisonCards />

                    <div className="grid gap-6 md:grid-cols-2">
                        <RiskWarningCard />
                        <GoalDelayCard />
                    </div>

                    <FinancialAgeImpactCard />
                </div>
            </div>
        </div>
    );
}

"use client";

import { InvestmentInputCard } from "@/components/growth-simulator/InvestmentInputCard";
import { GrowthProjectionChart } from "@/components/growth-simulator/GrowthProjectionChart";
import { ProjectionSummaryCards } from "@/components/growth-simulator/ProjectionSummaryCards";
import { ComparisonCards } from "@/components/growth-simulator/ComparisonCards";
import { BreakdownTable } from "@/components/growth-simulator/BreakdownTable";
import { FinancialFreedomCard } from "@/components/growth-simulator/FinancialFreedomCard";

export default function GrowthSimulatorPage() {
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

            <div className="grid gap-6 lg:grid-cols-12">
                {/* Left Column: Input */}
                <div className="lg:col-span-4">
                    <InvestmentInputCard />
                </div>

                {/* Right Column: Chart & Projection */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="h-[400px]">
                        <GrowthProjectionChart />
                    </div>
                </div>
            </div>

            {/* Middle Section: Summaries */}
            <ProjectionSummaryCards />

            <div className="grid gap-6 md:grid-cols-2">
                <ComparisonCards />
                <BreakdownTable />
            </div>

            {/* Bottom Section: Freedom Card */}
            <FinancialFreedomCard />
        </div>
    );
}

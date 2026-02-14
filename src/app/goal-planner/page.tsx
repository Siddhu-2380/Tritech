"use client";

import { GoalInputCard } from "@/components/goal-planner/GoalInputCard";
import { MonthlySavingResultCard } from "@/components/goal-planner/MonthlySavingResultCard";
import { FeasibilityBadge } from "@/components/goal-planner/FeasibilityBadge";
import { ProgressVisualization } from "@/components/goal-planner/ProgressVisualization";
import { TimelineImpactCard } from "@/components/goal-planner/TimelineImpactCard";
import { MotivationCard } from "@/components/goal-planner/MotivationCard";

export default function GoalPlannerPage() {
    return (
        <div className="space-y-8 p-6 md:p-8 max-w-7xl mx-auto">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Goal Planner
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                    Define, track, and achieve your financial dreams with a structured plan.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-12">
                {/* Left Column: Input */}
                <div className="lg:col-span-5 space-y-6">
                    <GoalInputCard />
                    <MotivationCard />
                </div>

                {/* Right Column: Results & Visualization */}
                <div className="lg:col-span-7 space-y-6">
                    <MonthlySavingResultCard />

                    <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                        <span className="font-medium text-slate-700 dark:text-slate-300">Goal Feasibility</span>
                        <FeasibilityBadge level="Moderate" />
                    </div>

                    <ProgressVisualization />
                    <TimelineImpactCard />
                </div>
            </div>
        </div>
    );
}

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Crown } from "lucide-react";

const ranks = [
    "Beginner",
    "Smart Saver",
    "Planner",
    "Investor",
    "Wealth Builder",
    "Financial Master"
];

const currentRankIndex = 4; // Wealth Builder

export function RankMeter() {
    return (
        <Card className="h-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800">
            <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                    <Crown className="h-4 w-4 text-yellow-500" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Financial Rank</h3>
                </div>

                <div className="space-y-2 relative">
                    {/* Connector Line */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800 z-0"></div>

                    {ranks.map((rank, index) => {
                        const isCurrent = index === currentRankIndex;
                        const isPassed = index < currentRankIndex;
                        const isLocked = index > currentRankIndex;

                        return (
                            <div key={rank} className="flex items-center gap-3 relative z-10">
                                <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${isCurrent ? "border-teal-500 bg-white dark:bg-slate-900" :
                                        isPassed ? "border-teal-500 bg-teal-500" :
                                            "border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-800"
                                    }`}>
                                    {isPassed && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                                    {isCurrent && <div className="h-1.5 w-1.5 rounded-full bg-teal-500" />}
                                </div>
                                <span className={`text-xs ${isCurrent ? "font-bold text-teal-700 dark:text-teal-400" :
                                        isLocked ? "text-slate-400" :
                                            "text-slate-600 dark:text-slate-300"
                                    }`}>
                                    {rank}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    );
}

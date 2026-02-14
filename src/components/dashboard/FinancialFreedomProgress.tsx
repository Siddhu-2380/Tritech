"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flag, Lock } from "lucide-react";

export function FinancialFreedomProgress() {
    const progress = 42;

    return (
        <Card className="overflow-hidden">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center justify-between">
                    <span>Journey to Financial Freedom</span>
                    <span className="text-teal-600 dark:text-teal-400">{progress}%</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {/* Visual Track */}
                <div className="relative pt-6 pb-2">
                    {/* Progress Bar Background */}
                    <div className="h-3 w-full bg-slate-100 rounded-full dark:bg-slate-800 relative z-0">
                        {/* Filled Progress */}
                        <div
                            className="h-full bg-teal-500 rounded-full relative z-10 transition-all duration-1000"
                            style={{ width: `${progress}%` }}
                        >
                            {/* Current Position Marker */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-5 w-5 bg-white border-2 border-teal-500 rounded-full shadow-sm z-20 flex items-center justify-center">
                                <div className="h-1.5 w-1.5 bg-teal-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Milestones */}
                    <div className="absolute top-6 left-[25%] -translate-x-1/2 h-3 w-1 bg-white/50 z-10"></div>
                    <div className="absolute top-9 left-[25%] -translate-x-1/2 text-[10px] text-slate-400 font-medium">Debt Free</div>

                    <div className="absolute top-6 left-[50%] -translate-x-1/2 h-3 w-1 bg-slate-300 z-0 dark:bg-slate-700"></div>
                    <div className="absolute top-9 left-[50%] -translate-x-1/2 text-[10px] text-slate-400 font-medium">Security</div>

                    <div className="absolute top-5 right-0 translate-x-1/4">
                        <Flag className="h-5 w-5 text-teal-600 dark:text-teal-400 fill-teal-100 dark:fill-teal-900" />
                    </div>
                </div>

                <p className="text-xs text-slate-500 mt-6 dark:text-slate-400">
                    You are approximately <strong className="text-slate-900 dark:text-white">8 years</strong> away from financial independence at your current pace.
                </p>
            </CardContent>
        </Card>
    );
}

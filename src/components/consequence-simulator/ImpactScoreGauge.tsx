"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface ImpactScoreGaugeProps {
    score: number;
    risk_level: string;
}

export function ImpactScoreGauge({ score, risk_level }: ImpactScoreGaugeProps) {
    // Determine color based on score
    const getColor = () => {
        if (score >= 71) return { bg: "bg-green-500", text: "text-green-600", gradient: "from-green-600 to-green-500" };
        if (score >= 31) return { bg: "bg-yellow-500", text: "text-yellow-600", gradient: "from-yellow-600 to-yellow-500" };
        return { bg: "bg-red-500", text: "text-red-600", gradient: "from-red-600 to-red-500" };
    };

    const color = getColor();
    const percentage = Math.min(100, Math.max(0, score));

    return (
        <Card className="border-2 border-slate-200 dark:border-slate-700">
            <CardContent className="p-6">
                <div className="text-center space-y-4">
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Impact Score</p>

                    {/* Circular Gauge */}
                    <div className="relative w-40 h-40 mx-auto">
                        {/* Background circle */}
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="80"
                                cy="80"
                                r="70"
                                stroke="currentColor"
                                strokeWidth="12"
                                fill="none"
                                className="text-slate-200 dark:text-slate-700"
                            />
                            {/* Progress circle */}
                            <circle
                                cx="80"
                                cy="80"
                                r="70"
                                stroke="currentColor"
                                strokeWidth="12"
                                fill="none"
                                strokeDasharray={`${2 * Math.PI * 70}`}
                                strokeDashoffset={`${2 * Math.PI * 70 * (1 - percentage / 100)}`}
                                className={`${color.text} transition-all duration-1000 ease-out`}
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* Score text in center */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className={`text-4xl font-bold ${color.text}`}>{score}</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">out of 100</span>
                        </div>
                    </div>

                    {/* Icon indicator */}
                    <div className="flex items-center justify-center gap-2">
                        {score >= 50 ? (
                            <TrendingUp className="h-5 w-5 text-green-600" />
                        ) : (
                            <TrendingDown className="h-5 w-5 text-red-600" />
                        )}
                        <span className={`text-sm font-semibold ${color.text}`}>
                            {score >= 71 ? "Excellent" : score >= 31 ? "Average" : "Poor"}
                        </span>
                    </div>

                    {/* Risk Badge */}
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${color.gradient} text-white text-sm font-semibold`}>
                        Risk: {risk_level}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

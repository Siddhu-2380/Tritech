"use client";

import { Card, CardContent } from "@/components/ui/card";
import { IndianRupee, TrendingUp, Wallet, AlertCircle, Lightbulb } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface GoalResultCardProps {
    monthlyRequired: number;
    totalInvestment: number;
    projectedValue: number;
    message: string;
    feasibility: string;
}

export function GoalResultCard({
    monthlyRequired,
    totalInvestment,
    projectedValue,
    message,
    feasibility
}: GoalResultCardProps) {

    const getFeasibilityStyle = () => {
        switch (feasibility) {
            case "Easy":
                return { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-700 dark:text-green-400", border: "border-green-300 dark:border-green-700", badge: "bg-green-600" };
            case "Moderate":
                return { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-700 dark:text-yellow-400", border: "border-yellow-300 dark:border-yellow-700", badge: "bg-yellow-600" };
            case "Aggressive":
                return { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-700 dark:text-red-400", border: "border-red-300 dark:border-red-700", badge: "bg-red-600" };
            default:
                return { bg: "bg-slate-100", text: "text-slate-700", border: "border-slate-300", badge: "bg-slate-600" };
        }
    };

    const style = getFeasibilityStyle();

    return (
        <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Monthly Required - Hero Card */}
            <Card className="bg-gradient-to-r from-teal-600 to-teal-500 text-white border-none shadow-lg">
                <CardContent className="p-6 text-center">
                    <p className="text-teal-100 text-sm font-medium mb-2">Required Monthly Investment</p>
                    <div className="flex items-center justify-center gap-2">
                        <IndianRupee className="h-8 w-8" />
                        <span className="text-5xl font-bold">{formatCurrency(monthlyRequired).replace('₹', '')}</span>
                    </div>
                    <p className="text-teal-100 text-xs mt-2">per month via SIP</p>

                    {/* Feasibility Badge */}
                    <div className="mt-4">
                        <span className={`inline-block px-4 py-1.5 rounded-full text-white text-sm font-semibold ${style.badge}`}>
                            {feasibility === "Easy" ? "✓ Easy" : feasibility === "Moderate" ? "⚡ Moderate" : "⚠ Aggressive"}
                        </span>
                    </div>
                </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2">
                {/* Total Investment */}
                <Card className="border-2 border-slate-200 dark:border-slate-700">
                    <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                            <Wallet className="h-4 w-4 text-blue-600" />
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total You Will Invest</p>
                        </div>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white">{formatCurrency(totalInvestment)}</p>
                        <p className="text-xs text-slate-500 mt-1">Your money in</p>
                    </CardContent>
                </Card>

                {/* Projected Value */}
                <Card className="border-2 border-green-200 dark:border-green-700">
                    <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="h-4 w-4 text-green-600" />
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Projected Final Value</p>
                        </div>
                        <p className="text-2xl font-bold text-green-600">{formatCurrency(projectedValue)}</p>
                        <p className="text-xs text-slate-500 mt-1">What you will get</p>
                    </CardContent>
                </Card>
            </div>

            {/* AI Message */}
            <Card className={`${style.bg} border-2 ${style.border}`}>
                <CardContent className="p-5">
                    <div className="flex gap-3">
                        <Lightbulb className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">AI Insight</p>
                            <p className={`text-sm ${style.text} leading-relaxed`}>{message}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

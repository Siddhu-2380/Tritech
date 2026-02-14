"use client";

import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Wallet, TrendingUp, Target } from "lucide-react";

interface SummaryProps {
    totalInvested: number | null;
    totalReturns: number | null;
    activeGoals: number;
}

export function DashboardSummaryCards({ totalInvested, totalReturns, activeGoals }: SummaryProps) {
    // Helper for placeholder logic
    const hasInvestmentData = totalInvested !== null;

    return (
        <div className="grid gap-4 md:grid-cols-3">
            {/* Total Invested */}
            <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
                <CardContent className="p-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Invested</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                            {hasInvestmentData ? formatCurrency(totalInvested || 0) : "₹0"}
                        </h3>
                    </div>
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        <Wallet className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                </CardContent>
            </Card>

            {/* Total Returns */}
            <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
                <CardContent className="p-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Returns</p>
                        <h3 className={`text-2xl font-bold mt-1 ${hasInvestmentData ? "text-green-600" : "text-slate-900 dark:text-white"}`}>
                            {hasInvestmentData ? `+${formatCurrency(totalReturns || 0)}` : "₹0"}
                        </h3>
                    </div>
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                </CardContent>
            </Card>

            {/* Active Goals */}
            <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
                <CardContent className="p-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Goals</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{activeGoals}</h3>
                    </div>
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                        <Target className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

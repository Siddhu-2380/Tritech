"use client";

import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Activity } from "lucide-react";

interface Props {
    score: number | null;
    risk: string | null;
}

export function FinancialScoreSummaryCard({ score, risk }: Props) {
    if (score === null) {
        return (
            <Card className="h-full border-dashed border-2 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <CardContent className="h-full flex flex-col items-center justify-center text-center p-6">
                    <Activity className="h-8 w-8 text-slate-400 mb-2" />
                    <p className="font-semibold text-slate-900 dark:text-white">Financial Score</p>
                    <p className="text-sm text-slate-500">Complete health check to view</p>
                </CardContent>
            </Card>
        );
    }

    const getColor = (s: number) => {
        if (s >= 80) return "text-green-600";
        if (s >= 50) return "text-yellow-600";
        return "text-red-600";
    };

    return (
        <Card className="h-full border border-slate-200 dark:border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal-500 to-emerald-600"></div>
            <CardContent className="p-6">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Financial Health Score</p>
                <div className="flex items-end gap-3 mb-2">
                    <span className={`text-5xl font-bold ${getColor(score)}`}>{score}</span>
                    <span className="text-sm text-slate-400 mb-2">/ 100</span>
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Risk: {risk}
                </div>
            </CardContent>
        </Card>
    );
}

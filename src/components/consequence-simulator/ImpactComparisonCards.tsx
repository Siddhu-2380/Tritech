"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { RiskBadge } from "@/components/financial-health/RiskBadge";
import { ArrowRight, ArrowDown, ArrowUp } from "lucide-react";

export function ImpactComparisonCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-950">
            {/* Before */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Before Decision</h3>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-600 dark:text-slate-300">Financial Score</span>
                        <span className="font-bold text-slate-900 dark:text-white text-lg">72</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-600 dark:text-slate-300">Risk Level</span>
                        <RiskBadge level="Medium" />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-600 dark:text-slate-300">Savings Projection</span>
                        <span className="font-bold text-teal-600 dark:text-teal-400 text-lg">{formatCurrency(375000)}</span>
                    </div>
                </div>
            </div>

            {/* Action arrow overlay for desktop */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-950 rounded-full p-2 border border-slate-200 dark:border-slate-800 shadow-sm z-10">
                <ArrowRight className="h-5 w-5 text-slate-400" />
            </div>

            {/* After */}
            <div className="p-6 bg-red-50/30 dark:bg-red-900/10">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">After Decision</h3>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-600 dark:text-slate-300">Financial Score</span>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 dark:text-white text-lg">58</span>
                            <ArrowDown className="h-4 w-4 text-red-500" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-600 dark:text-slate-300">Risk Level</span>
                        <RiskBadge level="High" />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-600 dark:text-slate-300">Savings Projection</span>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-red-600 dark:text-red-400 text-lg">{formatCurrency(240000)}</span>
                            <ArrowDown className="h-4 w-4 text-red-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

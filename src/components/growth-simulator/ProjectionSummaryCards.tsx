"use client";

import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Wallet, TrendingUp } from "lucide-react";

interface ProjectionSummaryCardsProps {
    principalOnly: number;
    totalReturns: number;
    finalValue: number;
    annualReturn?: number;
}

export function ProjectionSummaryCards({ principalOnly, totalReturns, finalValue, annualReturn = 12 }: ProjectionSummaryCardsProps) {
    return (
        <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardContent className="pt-6 flex flex-col items-center text-center space-y-2">
                        <div className="p-3 bg-slate-100 rounded-full dark:bg-slate-800">
                            <Wallet className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Without Investing</p>
                            <p className="text-2xl font-bold text-slate-900 dark:text-white">{formatCurrency(principalOnly)}</p>
                            <p className="text-xs text-slate-400 mt-1">Total Amount Saved</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-2 border-green-200 dark:border-green-800">
                    <CardContent className="pt-6 flex flex-col items-center text-center space-y-2">
                        <div className="p-3 bg-green-100 rounded-full dark:bg-green-900/30">
                            <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">With Investment</p>
                            <p className="text-2xl font-bold text-green-600 dark:text-green-400">{formatCurrency(finalValue)}</p>
                            <p className="text-xs text-slate-400 mt-1">{annualReturn}% Annual Growth</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm md:text-base font-semibold text-green-700 dark:text-green-400">
                    💰 You earn {formatCurrency(totalReturns)} more by investing!
                </p>
            </div>
        </div>
    );
}

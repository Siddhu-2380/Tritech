"use client";

import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export function MonthlySavingResultCard() {
    return (
        <Card className="bg-gradient-to-br from-teal-50 to-white dark:from-teal-900/20 dark:to-slate-900 border-teal-200 dark:border-teal-800">
            <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="p-3 bg-teal-100 rounded-full dark:bg-teal-900/40">
                    <CheckCircle2 className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                    <h3 className="text-lg font-medium text-slate-600 dark:text-slate-300">Required Monthly Saving</h3>
                    <p className="text-4xl font-bold text-slate-900 dark:text-white mt-2">{formatCurrency(12500)}</p>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                    To achieve your goal of <strong>{formatCurrency(1000000)}</strong> in <strong>5 years</strong>, you need to save this amount consistently.
                </p>
            </CardContent>
        </Card>
    );
}

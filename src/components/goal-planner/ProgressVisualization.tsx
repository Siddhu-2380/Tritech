"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

export function ProgressVisualization() {
    const currentSavings = 250000;
    const targetAmount = 1000000;
    const progress = (currentSavings / targetAmount) * 100;

    return (
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium">Goal Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">{formatCurrency(currentSavings)}</span>
                        <span className="text-sm text-slate-500 ml-1">saved</span>
                    </div>
                    <div className="text-right">
                        <span className="text-sm text-slate-500">Target</span>
                        <div className="font-semibold">{formatCurrency(targetAmount)}</div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 rounded-full h-4 dark:bg-slate-800">
                    <div
                        className="bg-teal-600 h-4 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <p className="text-sm text-center text-slate-600 dark:text-slate-400">
                    You are <strong>{progress}%</strong> of the way there!
                </p>
            </CardContent>
        </Card>
    );
}

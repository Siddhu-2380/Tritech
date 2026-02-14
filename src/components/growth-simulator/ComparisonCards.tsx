"use client";

import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

export function ComparisonCards() {
    return (
        <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
                <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-sm">
                    <CardContent className="pt-6 text-center">
                        <p className="text-sm font-medium text-slate-500">Without Investment</p>
                        <p className="text-3xl font-bold text-slate-700 dark:text-slate-300 mt-2">{formatCurrency(600000)}</p>
                        <p className="text-xs text-slate-400 mt-1">Principal Amount Only</p>
                    </CardContent>
                </Card>
                <Card className="bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-1 bg-teal-600 text-white text-[10px] rounded-bl-lg font-bold">
                        RECOMMENDED
                    </div>
                    <CardContent className="pt-6 text-center">
                        <p className="text-sm font-medium text-teal-700 dark:text-teal-300">With Investment</p>
                        <p className="text-3xl font-bold text-teal-600 dark:text-teal-400 mt-2">{formatCurrency(654628)}</p>
                        <p className="text-xs text-teal-600/80 dark:text-teal-400/80 mt-1">12% Annual Growth</p>
                    </CardContent>
                </Card>
            </div>
            <div className="text-center">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                    You earn <span className="font-bold text-teal-600 dark:text-teal-400">{formatCurrency(54628)} more</span> by investing.
                </p>
            </div>
        </div>
    );
}

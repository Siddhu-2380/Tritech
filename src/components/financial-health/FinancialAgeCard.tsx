"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hourglass } from "lucide-react";

export function FinancialAgeCard() {
    return (
        <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white border-none shadow-lg transform transition-all hover:scale-[1.02]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium text-slate-100">Your Financial Age</CardTitle>
                <Hourglass className="h-5 w-5 text-teal-400 opacity-80" />
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <span className="text-4xl font-bold text-teal-400">35 Years</span>
                        <span className="ml-2 text-sm text-slate-400">
                            (Actual Age: 32)
                        </span>
                    </div>
                    <p className="text-slate-300 font-medium">
                        You are financially 3 years behind your actual age.
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                        Based on your current net worth and retirement goals, your financial progress aligns with the average 35-year-old. Increasing your savings rate by 5% can help you catch up within 2 years.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}

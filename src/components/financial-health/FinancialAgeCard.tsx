"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hourglass } from "lucide-react";

interface FinancialAgeCardProps {
    financialAge: number;
    actualAge: number;
}

export function FinancialAgeCard({ financialAge, actualAge }: FinancialAgeCardProps) {
    const diff = financialAge - actualAge;
    const isBehind = diff > 0;
    const isAhead = diff < 0;

    return (
        <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white border-none shadow-lg transform transition-all hover:scale-[1.02]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium text-slate-100">Your Financial Age</CardTitle>
                <Hourglass className="h-5 w-5 text-teal-400 opacity-80" />
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <span className="text-4xl font-bold text-teal-400">{financialAge} Years</span>
                        <span className="ml-2 text-sm text-slate-400">
                            (Actual Age: {actualAge})
                        </span>
                    </div>
                    <p className="text-slate-300 font-medium">
                        {isBehind
                            ? `You are financially ${diff} years behind your actual age.`
                            : isAhead
                                ? `You are financially ${Math.abs(diff)} years ahead of your actual age!`
                                : "Your financial age matches your actual age."}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                        {isBehind
                            ? "Increasing your savings rate and reducing debt can help you catch up quickly."
                            : "Great job! Keep maintaining your healthy financial habits to stay ahead."}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}

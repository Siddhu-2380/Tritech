"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Plane, TrendingUp, AlertCircle } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface FinancialFreedomCardProps {
    freedomAge: number | null;
    yearsToFreedom: number | null;
    requiredCorpus: number;
    monthlyInvestment: number;
    monthlyExpenses: number;
    currentAge?: number;
    message?: string;
    additionalInvestmentNeeded?: number;
}

export function FinancialFreedomCard({
    freedomAge,
    yearsToFreedom,
    requiredCorpus,
    monthlyInvestment,
    monthlyExpenses,
    currentAge,
    message,
    additionalInvestmentNeeded
}: FinancialFreedomCardProps) {

    // If no data, show placeholder
    if (!currentAge || !monthlyExpenses) {
        return (
            <Card className="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-700 border-slate-200 dark:border-slate-600">
                <CardContent className="flex items-center justify-between p-6">
                    <div className="space-y-2">
                        <p className="text-slate-600 dark:text-slate-300 font-medium flex items-center gap-2">
                            <Plane className="h-4 w-4" />
                            Estimated Financial Freedom Age
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Enter your current age and monthly expenses to calculate your financial freedom age.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <div className="h-24 w-24 rounded-full bg-slate-200/50 dark:bg-slate-600/50 flex items-center justify-center">
                            <span className="text-3xl">📊</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }

    // If freedom is achievable
    if (freedomAge && yearsToFreedom) {
        return (
            <Card className="bg-gradient-to-r from-teal-600 to-teal-500 text-white border-none shadow-lg transform transition-all hover:scale-[1.01]">
                <CardContent className="flex items-center justify-between p-6">
                    <div className="space-y-2">
                        <p className="text-teal-100 font-medium flex items-center gap-2">
                            <Plane className="h-4 w-4" />
                            Estimated Financial Freedom Age
                        </p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold">{freedomAge} Years</span>
                            <span className="text-sm text-teal-100 opacity-80">({yearsToFreedom} years from now)</span>
                        </div>
                        <p className="text-sm text-teal-50 max-w-lg">
                            At your current investment rate of <strong>{formatCurrency(monthlyInvestment)}/month</strong> and expenses of <strong>{formatCurrency(monthlyExpenses)}/month</strong>, you are projected to achieve financial independence by age {freedomAge}.
                        </p>
                        <p className="text-xs text-teal-100 opacity-75 mt-2">
                            Required corpus: {formatCurrency(requiredCorpus)} (using 4% withdrawal rule)
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <div className="h-24 w-24 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                            <span className="text-3xl">🚀</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }

    // If freedom is NOT achievable
    return (
        <Card className="bg-gradient-to-r from-orange-600 to-orange-500 text-white border-none shadow-lg">
            <CardContent className="flex items-center justify-between p-6">
                <div className="space-y-2">
                    <p className="text-orange-100 font-medium flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Financial Freedom Not Achievable
                    </p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold">Action Required</span>
                    </div>
                    <p className="text-sm text-orange-50 max-w-lg">
                        {message || "Your current investment rate may not be sufficient to achieve financial freedom within 50 years."}
                    </p>
                    {additionalInvestmentNeeded && additionalInvestmentNeeded > 0 && (
                        <div className="mt-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                            <p className="text-sm font-semibold">
                                💡 Suggestion: Increase monthly investment by <strong>{formatCurrency(additionalInvestmentNeeded)}</strong>
                            </p>
                            <p className="text-xs text-orange-100 mt-1">
                                Or reduce monthly expenses to {formatCurrency(monthlyExpenses * 0.7)} (30% reduction)
                            </p>
                        </div>
                    )}
                </div>
                <div className="hidden md:block">
                    <div className="h-24 w-24 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-3xl">⚠️</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

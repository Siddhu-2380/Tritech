"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { RefreshCw, TrendingUp, AlertTriangle, ArrowRight } from "lucide-react";
import { ChallengeResponse } from "@/services/api";

interface Props {
    result: ChallengeResponse;
    choice: "buy" | "invest";
    amount: number;
    onReplay: () => void;
}

export function ChallengeResultCard({ result, choice, amount, onReplay }: Props) {
    const isSuccess = choice === "invest";

    return (
        <Card className={`border-2 shadow-lg overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 ${isSuccess ? "border-green-200 bg-green-50/30" : "border-red-200 bg-red-50/30"}`}>
            <CardContent className="p-8 md:p-12 text-center space-y-6">
                {/* Icon & Title */}
                <div className="flex flex-col items-center gap-3">
                    <div className={`p-4 rounded-full ${isSuccess ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                        {isSuccess ? <TrendingUp className="h-10 w-10" /> : <AlertTriangle className="h-10 w-10" />}
                    </div>
                    <h2 className={`text-2xl font-bold ${isSuccess ? "text-green-800" : "text-red-800"}`}>
                        {isSuccess ? "Great Choice! You chose Wealth." : "Ouch! You chose Instant Gratification."}
                    </h2>
                </div>

                {/* Main comparison Stats */}
                <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto py-6">
                    <div className="text-center p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <p className="text-sm text-slate-500 mb-1">Original Amount</p>
                        <p className="text-2xl font-bold text-slate-700 dark:text-slate-300">{formatCurrency(amount)}</p>
                    </div>

                    <div className={`text-center p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border-2 ${isSuccess ? "border-green-100" : "border-red-100"}`}>
                        <p className="text-sm text-slate-500 mb-1">
                            {isSuccess ? "Value after 5 Years" : "Missed Potential Value"}
                        </p>
                        <p className={`text-3xl font-bold ${isSuccess ? "text-green-600" : "text-red-600"}`}>
                            {formatCurrency(result.future_value)}
                        </p>
                    </div>
                </div>

                {/* Educational Message */}
                <div className={`p-4 rounded-lg text-sm max-w-lg mx-auto ${isSuccess ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    <p className="font-medium">
                        {isSuccess
                            ? `By waiting 5 years, your money grew by ${formatCurrency(result.total_gain)} thanks to compound interest!`
                            : `Buying the gadget meant losing ${formatCurrency(result.total_gain)} in potential investment returns.`
                        }
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-4">
                    <Button onClick={onReplay} className="gap-2" variant="outline">
                        <RefreshCw className="h-4 w-4" />
                        Play Again
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

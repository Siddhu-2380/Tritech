"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertCircle, Lightbulb } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface ConsequenceResultCardProps {
    futureGainOrLoss: number;
    message: string;
    suggestion: string;
}

export function ConsequenceResultCard({ futureGainOrLoss, message, suggestion }: ConsequenceResultCardProps) {
    const isGain = futureGainOrLoss >= 0;

    return (
        <div className="space-y-4 animate-in fade-in duration-500">
            {/* Future Gain/Loss Card */}
            <Card className={`border-2 ${isGain ? 'border-green-300 dark:border-green-700' : 'border-red-300 dark:border-red-700'}`}>
                <CardContent className="p-6">
                    <div className="text-center space-y-3">
                        <div className="flex items-center justify-center gap-2">
                            {isGain ? (
                                <TrendingUp className="h-6 w-6 text-green-600" />
                            ) : (
                                <TrendingDown className="h-6 w-6 text-red-600" />
                            )}
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                {isGain ? "Future Gain" : "Future Loss"}
                            </p>
                        </div>

                        <div className={`text-5xl font-bold ${isGain ? 'text-green-600' : 'text-red-600'}`}>
                            {isGain ? '+' : ''}{formatCurrency(futureGainOrLoss)}
                        </div>

                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            {isGain ? "Expected wealth creation" : "Opportunity cost or total cost"}
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* AI Message Card */}
            <Card className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 border-slate-200 dark:border-slate-600">
                <CardContent className="p-6">
                    <div className="flex gap-3">
                        <AlertCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div className="space-y-2">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">AI Analysis</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                {message}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Smart Suggestion Card */}
            <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border-teal-200 dark:border-teal-700">
                <CardContent className="p-6">
                    <div className="flex gap-3">
                        <Lightbulb className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div className="space-y-2">
                            <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">Smart Suggestion</p>
                            <p className="text-sm text-teal-800 dark:text-teal-200 leading-relaxed">
                                {suggestion}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

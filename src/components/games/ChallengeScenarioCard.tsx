"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Smartphone, TrendingUp } from "lucide-react";

interface Props {
    amount: number;
    onBuy: () => void;
    onInvest: () => void;
}

export function ChallengeScenarioCard({ amount, onBuy, onInvest }: Props) {
    return (
        <Card className="border-2 border-slate-200 dark:border-slate-800 shadow-lg text-center overflow-hidden">
            <CardContent className="p-8 md:p-12 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                        You have <span className="text-teal-600 dark:text-teal-400">{formatCurrency(amount)}</span>
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400">
                        What will you do with it today?
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {/* Option A: Buy Gadget */}
                    <Button
                        onClick={onBuy}
                        className="h-auto py-8 px-6 flex flex-col items-center gap-4 bg-white hover:bg-red-50 text-slate-900 border-2 border-slate-200 hover:border-red-200 transition-all duration-300 group shadow-sm hover:shadow-md"
                        variant="ghost"
                    >
                        <div className="p-4 rounded-full bg-red-100 group-hover:bg-red-200 transition-colors">
                            <Smartphone className="h-8 w-8 text-red-600" />
                        </div>
                        <div className="space-y-1">
                            <span className="text-lg font-bold">Buy New Gadget</span>
                            <p className="text-xs text-slate-500 font-normal">Instant Satisfaction</p>
                        </div>
                    </Button>

                    {/* Option B: Invest */}
                    <Button
                        onClick={onInvest}
                        className="h-auto py-8 px-6 flex flex-col items-center gap-4 bg-white hover:bg-green-50 text-slate-900 border-2 border-slate-200 hover:border-green-200 transition-all duration-300 group shadow-sm hover:shadow-md"
                        variant="ghost"
                    >
                        <div className="p-4 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                            <TrendingUp className="h-8 w-8 text-green-600" />
                        </div>
                        <div className="space-y-1">
                            <span className="text-lg font-bold">Invest for 5 Years</span>
                            <p className="text-xs text-slate-500 font-normal">Delayed Gratification</p>
                        </div>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

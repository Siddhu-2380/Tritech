"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { AlertCircle, CheckCircle, Smartphone, Home, Coffee, Car, PiggyBank, BriefcaseMedical } from "lucide-react";
import { playBudgetBattle, BudgetBattleResponse } from "@/services/api";
import { useGamification } from "@/hooks/useGamification";

export default function BudgetBattlePage() {
    const INCOME = 25000;

    // State for Allocations
    const [allocations, setAllocations] = useState({
        rent: 8000,
        food: 5000,
        transport: 2000,
        entertainment: 2000,
        savings: 8000
    });

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<BudgetBattleResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { awardXP } = useGamification();

    // Derived State
    const totalAllocated = Object.values(allocations).reduce((a, b) => a + b, 0);
    const remaining = INCOME - totalAllocated;
    const isValid = remaining === 0;

    const handleSliderChange = (category: keyof typeof allocations, value: number) => {
        setAllocations(prev => ({
            ...prev,
            [category]: value
        }));
    };

    const handleSubmit = async () => {
        if (!isValid) return;
        setLoading(true);
        setError(null);

        try {
            const data = await playBudgetBattle({
                income: INCOME,
                ...allocations
            });

            setResult(data);

            // Award XP based on score
            if (data.score >= 100) {
                awardXP("plan_goal"); // Reuse existing, +30 equivalent
            } else if (data.score >= 60) {
                awardXP("simulate_growth"); // Reuse +20 equivalent? Just triggering something.
                // Or just stick to one type.
                awardXP("read_article");
            } else {
                awardXP("read_article");
            }

        } catch (err) {
            setError("Failed to submit budget. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const resetGame = () => {
        setResult(null);
        setAllocations({
            rent: 8000,
            food: 5000,
            transport: 2000,
            entertainment: 2000,
            savings: 8000
        });
    };

    return (
        <div className="space-y-8 p-6 md:p-8 max-w-4xl mx-auto animate-in fade-in duration-500">
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Budget Battle ⚔️
                </h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                    Can you survive the month? Allocate your income wisely and prepare for the unexpected!
                </p>
                <div className="inline-block bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-lg mt-4 shadow-lg">
                    Monthly Income: {formatCurrency(INCOME)}
                </div>
            </div>

            {error && (
                <div className="p-4 bg-red-50 text-red-800 rounded-lg flex items-center gap-2 justify-center">
                    <AlertCircle className="h-5 w-5" />
                    {error}
                </div>
            )}

            {!result ? (
                <Card className="border-2 border-slate-200 dark:border-slate-800 shadow-xl">
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            <span>Allocate Your Funds</span>
                            <span className={`text-sm font-bold px-3 py-1 rounded-full ${isValid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                Remaining: {formatCurrency(remaining)}
                            </span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Sliders */}
                        <div className="space-y-6">
                            <BudgetSlider
                                label="Rent & Housing"
                                icon={Home}
                                value={allocations.rent}
                                onChange={(v: number) => handleSliderChange("rent", v)}
                                color="bg-indigo-500"
                            />
                            <BudgetSlider
                                label="Food & Groceries"
                                icon={Coffee}
                                value={allocations.food}
                                onChange={(v: number) => handleSliderChange("food", v)}
                                color="bg-orange-500"
                            />
                            <BudgetSlider
                                label="Transport"
                                icon={Car}
                                value={allocations.transport}
                                onChange={(v: number) => handleSliderChange("transport", v)}
                                color="bg-blue-500"
                            />
                            <BudgetSlider
                                label="Entertainment"
                                icon={Smartphone}
                                value={allocations.entertainment}
                                onChange={(v: number) => handleSliderChange("entertainment", v)}
                                color="bg-pink-500"
                            />
                            <BudgetSlider
                                label="Savings & Emergency Fund"
                                icon={PiggyBank}
                                value={allocations.savings}
                                onChange={(v: number) => handleSliderChange("savings", v)}
                                color="bg-teal-500"
                            />
                        </div>

                        <div className="pt-4">
                            <Button
                                onClick={handleSubmit}
                                disabled={!isValid || loading}
                                className="w-full h-12 text-lg bg-teal-600 hover:bg-teal-700 disabled:opacity-50"
                            >
                                {loading ? "Simulating Month..." : "Submit Budget"}
                            </Button>
                            {!isValid && (
                                <p className="text-center text-sm text-red-500 mt-2">
                                    You must allocate exactly {formatCurrency(INCOME)}.
                                </p>
                            )}
                        </div>
                    </CardContent>
                </Card>
            ) : (
                <Card className={`border-2 shadow-xl overflow-hidden animate-in zoom-in-95 duration-500 ${result.score >= 100 ? "border-green-200 bg-green-50/20" : result.score >= 60 ? "border-yellow-200 bg-yellow-50/20" : "border-red-200 bg-red-50/20"}`}>
                    <CardContent className="p-8 space-y-8 text-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">{result.result}</h2>
                            <p className="text-slate-600 dark:text-slate-300">{result.feedback}</p>
                        </div>

                        {/* Emergency Reveal */}
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 max-w-lg mx-auto transform transition-all hover:scale-105">
                            <div className="flex flex-col items-center gap-2 mb-4">
                                <div className="p-3 bg-red-100 text-red-600 rounded-full animate-bounce">
                                    <BriefcaseMedical className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-red-700">Unexpected Emergency!</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-left">
                                <div>
                                    <p className="text-sm text-slate-500">Your Savings</p>
                                    <p className="text-lg font-bold text-teal-600">{formatCurrency(allocations.savings)}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Emergency Cost</p>
                                    <p className="text-lg font-bold text-red-600">{formatCurrency(result.emergency_expense)}</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                <p className="text-sm text-slate-500">Debt Incurred</p>
                                <p className={`text-2xl font-bold ${result.debt > 0 ? "text-red-600" : "text-green-600"}`}>
                                    {formatCurrency(result.debt)}
                                </p>
                            </div>
                        </div>

                        {/* Score */}
                        <div className="space-y-2">
                            <p className="text-sm font-medium uppercase tracking-wider text-slate-500">Financial Score</p>
                            <div className="text-5xl font-black text-slate-900 dark:text-white">
                                {result.score}<span className="text-2xl text-slate-400">/120</span>
                            </div>
                        </div>

                        <Button onClick={resetGame} variant="outline" className="gap-2">
                            Try Again
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

// Custom Slider Component
function BudgetSlider({ label, icon: Icon, value, onChange, color }: any) {
    return (
        <div className="space-y-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${color} bg-opacity-10 text-opacity-100`}>
                        <Icon className={`w-5 h-5 ${color.replace("bg-", "text-")}`} />
                    </div>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{label}</span>
                </div>
                <span className="font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-800 px-3 py-1 rounded-md shadow-sm border border-slate-200 dark:border-slate-700 min-w-[100px] text-right">
                    {formatCurrency(value)}
                </span>
            </div>

            <input
                type="range"
                min="0"
                max="25000"
                step="500"
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600 hover:accent-teal-500 transition-all"
            />
        </div>
    );
}

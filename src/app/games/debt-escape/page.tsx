"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { AlertCircle, TrendingDown, Clock, Banknote, ShieldCheck, AlertTriangle } from "lucide-react";
import { playDebtEscape, DebtEscapeResponse } from "@/services/api";
import { useGamification } from "@/hooks/useGamification";

export default function DebtEscapePage() {
    const [monthlyPayment, setMonthlyPayment] = useState(5000);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<DebtEscapeResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { awardXP } = useGamification();

    const DEBT_AMOUNT = 50000;
    const INTEREST_RATE = 18;
    const INCOME = 30000;

    const remainingIncome = INCOME - monthlyPayment;

    const handleRepaymentChange = (value: number) => {
        setMonthlyPayment(value);
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await playDebtEscape({ monthly_payment: monthlyPayment });
            setResult(data);

            // Award XP
            if (data.score >= 110) {
                awardXP("plan_goal"); // +35 equivalent logic
            } else if (data.score >= 80) {
                awardXP("simulate_growth"); // +25 equivalent
            } else {
                awardXP("read_article"); // +15 equivalent
            }
        } catch (err: any) {
            setError(err.message || "Failed to calculate strategy");
        } finally {
            setLoading(false);
        }
    };

    const resetGame = () => {
        setResult(null);
        setMonthlyPayment(5000);
    };

    return (
        <div className="space-y-8 p-6 md:p-8 max-w-4xl mx-auto animate-in fade-in duration-500">
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Debt Escape ⛓️
                </h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                    You have ₹50,000 credit card debt at 18% interest. How fast can you break free?
                </p>
            </div>

            {/* Scenario Card */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card className="bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                        <TrendingDown className="h-8 w-8 text-red-500 mb-2" />
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase">Total Debt</p>
                        <p className="text-2xl font-bold text-red-600 dark:text-red-400">{formatCurrency(DEBT_AMOUNT)}</p>
                    </CardContent>
                </Card>
                <Card className="bg-orange-50 dark:bg-orange-900/10 border-orange-100 dark:border-orange-900">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                        <AlertTriangle className="h-8 w-8 text-orange-500 mb-2" />
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase">Interest Rate</p>
                        <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{INTEREST_RATE}% p.a.</p>
                    </CardContent>
                </Card>
                <Card className="bg-green-50 dark:bg-green-900/10 border-green-100 dark:border-green-900">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                        <Banknote className="h-8 w-8 text-green-500 mb-2" />
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase">Monthly Income</p>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">{formatCurrency(INCOME)}</p>
                    </CardContent>
                </Card>
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
                        <CardTitle>Choose Repayment Strategy</CardTitle>
                        <CardDescription>Higher payments mean less interest, but less cash for you.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-medium text-slate-700 dark:text-slate-300">Monthly Payment</label>
                                <span className="font-bold text-2xl text-teal-600 bg-teal-50 dark:bg-teal-900/30 px-4 py-1 rounded-lg">
                                    {formatCurrency(monthlyPayment)}
                                </span>
                            </div>

                            <input
                                type="range"
                                min="5000"
                                max="20000"
                                step="500"
                                value={monthlyPayment}
                                onChange={(e) => handleRepaymentChange(parseInt(e.target.value))}
                                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600 hover:accent-teal-500 transition-all"
                            />

                            <div className="flex justify-between text-xs text-slate-400 font-medium uppercase tracking-wider">
                                <span>Min: ₹5,000</span>
                                <span>Max: ₹20,000</span>
                            </div>
                        </div>

                        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 flex justify-between items-center">
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Remaining Income for Living</span>
                            <span className={`font-bold text-lg ${remainingIncome < 5000 ? "text-red-500" : "text-slate-900 dark:text-white"}`}>
                                {formatCurrency(remainingIncome)}
                            </span>
                        </div>

                        <Button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full h-12 text-lg bg-slate-900 hover:bg-teal-600 text-white transition-all shadow-lg hover:shadow-teal-500/20"
                        >
                            {loading ? "Calculating Impact..." : "Start Repayment Strategy"}
                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <Card className={`border-2 shadow-xl overflow-hidden animate-in zoom-in-95 duration-500 ${result.score >= 110 ? "border-teal-200 bg-teal-50/20" : result.score >= 80 ? "border-blue-200 bg-blue-50/20" : "border-amber-200 bg-amber-50/20"}`}>
                    <CardContent className="p-8 space-y-8 text-center">
                        <div className="space-y-2">
                            <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${result.score >= 110 ? "bg-teal-100 text-teal-600" : result.score >= 80 ? "bg-blue-100 text-blue-600" : "bg-amber-100 text-amber-600"}`}>
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{result.result}</h2>
                            <p className="text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">{result.feedback}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                                <Clock className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
                                <p className="text-xs text-slate-500 font-medium uppercase">Time to Debt Free</p>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">{result.total_months} Months</p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                                <TrendingDown className="w-6 h-6 text-red-500 mx-auto mb-2" />
                                <p className="text-xs text-slate-500 font-medium uppercase">Total Interest Paid</p>
                                <p className="text-2xl font-bold text-red-600">{formatCurrency(result.total_interest_paid)}</p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                                <Banknote className="w-6 h-6 text-green-500 mx-auto mb-2" />
                                <p className="text-xs text-slate-500 font-medium uppercase">Total Amount Paid</p>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">{formatCurrency(result.total_paid)}</p>
                            </div>
                        </div>

                        {/* Score Indicator */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm font-medium">
                                <span>Strategy Score</span>
                                <span>{result.score}/120</span>
                            </div>
                            <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-1000 ${result.score >= 110 ? "bg-teal-500" : result.score >= 80 ? "bg-blue-500" : "bg-amber-500"}`}
                                    style={{ width: `${(result.score / 120) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <Button onClick={resetGame} variant="outline" className="gap-2">
                            Try Another Strategy
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

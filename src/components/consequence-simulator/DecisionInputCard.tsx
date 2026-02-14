"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { DecisionInput } from "@/services/api";
import { ShoppingBag, CreditCard, PiggyBank, TrendingUp, IndianRupee } from "lucide-react";

interface DecisionInputCardProps {
    onAnalyze: (data: DecisionInput) => void;
    isLoading: boolean;
}

const DECISION_TYPES = [
    { value: "buy_gadget", label: "Buy Gadget", icon: ShoppingBag, color: "text-purple-600" },
    { value: "take_loan", label: "Take Loan", icon: CreditCard, color: "text-red-600" },
    { value: "increase_savings", label: "Increase Savings", icon: PiggyBank, color: "text-blue-600" },
    { value: "start_investing", label: "Start Investing", icon: TrendingUp, color: "text-green-600" }
];

export function DecisionInputCard({ onAnalyze, isLoading }: DecisionInputCardProps) {
    const [formData, setFormData] = useState<DecisionInput>({
        monthly_income: 60000,
        monthly_expenses: 40000,
        decision_type: "buy_gadget",
        decision_amount: 50000,
        years: 5
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === "decision_type" ? value : Number(value)
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAnalyze(formData);
    };

    const selectedDecision = DECISION_TYPES.find(d => d.value === formData.decision_type);
    const Icon = selectedDecision?.icon || ShoppingBag;

    return (
        <Card className="border-2 border-slate-200 dark:border-slate-700">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Icon className={`h-5 w-5 ${selectedDecision?.color}`} />
                    Decision Simulator
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Decision Type Dropdown */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Decision Type</label>
                        <select
                            name="decision_type"
                            value={formData.decision_type}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            {DECISION_TYPES.map(decision => (
                                <option key={decision.value} value={decision.value}>
                                    {decision.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Monthly Income */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Monthly Income</label>
                        <div className="relative">
                            <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                name="monthly_income"
                                type="number"
                                className="pl-9"
                                value={formData.monthly_income}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Monthly Expenses */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Monthly Expenses</label>
                        <div className="relative">
                            <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                name="monthly_expenses"
                                type="number"
                                className="pl-9"
                                value={formData.monthly_expenses}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Decision Amount */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            {formData.decision_type === "start_investing" || formData.decision_type === "increase_savings"
                                ? "Monthly Amount"
                                : "Amount"}
                        </label>
                        <div className="relative">
                            <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                name="decision_amount"
                                type="number"
                                className="pl-9"
                                value={formData.decision_amount}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Years */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Time Horizon (Years)</label>
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                name="years"
                                min="1"
                                max="10"
                                value={formData.years}
                                onChange={handleChange}
                                className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-600"
                            />
                            <span className="text-lg font-semibold w-12 text-center">{formData.years}</span>
                        </div>
                    </div>

                    {/* Analyze Button */}
                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600"
                        disabled={isLoading}
                    >
                        {isLoading ? "Analyzing..." : "Analyze Decision"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

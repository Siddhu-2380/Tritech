"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IndianRupee, Percent, Loader2 } from "lucide-react";
import { GrowthInput } from "@/services/api";

interface InvestmentInputCardProps {
    onSubmit: (data: GrowthInput) => void;
    isLoading: boolean;
}

export function InvestmentInputCard({ onSubmit, isLoading }: InvestmentInputCardProps) {
    const [formData, setFormData] = useState<GrowthInput>({
        monthly_investment: 5000,
        annual_return: 12,
        years: 10,
        investment_type: "SIP (Systematic Investment Plan)",
        current_age: 26,
        monthly_expenses: 30000
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === "investment_type" ? value : Number(value)
        }));
    };

    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Investment Parameters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Investment Type</label>
                    <select
                        name="investment_type"
                        value={formData.investment_type}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
                    >
                        <option value="SIP (Systematic Investment Plan)">SIP (Systematic Investment Plan)</option>
                        <option value="Lumpsum Savings">Lumpsum Savings</option>
                        <option value="Fixed Deposit">Fixed Deposit</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Monthly Contribution</label>
                    <div className="relative">
                        <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                            name="monthly_investment"
                            type="number"
                            className="pl-9"
                            value={formData.monthly_investment}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between">
                        <label className="text-sm font-medium">Expected Annual Return (%)</label>
                        <span className="text-sm text-slate-500">{formData.annual_return}%</span>
                    </div>
                    <div className="relative">
                        <Percent className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                            name="annual_return"
                            type="number"
                            className="pl-9"
                            value={formData.annual_return}
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        type="range"
                        name="annual_return"
                        min="1"
                        max="30"
                        value={formData.annual_return}
                        onChange={handleChange}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-teal-600"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Current Age</label>
                        <Input
                            name="current_age"
                            type="number"
                            placeholder="26"
                            value={formData.current_age || ''}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Monthly Expenses</label>
                        <div className="relative">
                            <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                name="monthly_expenses"
                                type="number"
                                className="pl-9"
                                placeholder="30000"
                                value={formData.monthly_expenses || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Investment Duration (Years)</label>
                    <select
                        name="years"
                        value={formData.years}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
                    >
                        {[...Array(30)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1} Years</option>
                        ))}
                    </select>
                </div>

                <Button
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-4"
                    onClick={() => onSubmit(formData)}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Simulating...
                        </>
                    ) : (
                        "Simulate Growth"
                    )}
                </Button>
            </CardContent>
        </Card>
    );
}

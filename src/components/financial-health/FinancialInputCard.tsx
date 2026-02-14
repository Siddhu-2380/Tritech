"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IndianRupee, User, Loader2 } from "lucide-react";
import { FinancialInput } from "@/services/api";

interface FinancialInputCardProps {
    onSubmit: (data: FinancialInput) => void;
    isLoading: boolean;
}

export function FinancialInputCard({ onSubmit, isLoading }: FinancialInputCardProps) {
    const [formData, setFormData] = useState<FinancialInput>({
        monthly_income: 50000,
        monthly_expenses: 30000,
        savings: 100000,
        debt: 200000,
        emergency_fund: 50000,
        age: 30
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: Number(value)
        }));
    };

    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Financial Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Monthly Income (₹)</label>
                        <div className="relative">
                            <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                name="monthly_income"
                                type="number"
                                className="pl-9"
                                value={formData.monthly_income}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Monthly Expenses (₹)</label>
                        <div className="relative">
                            <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                name="monthly_expenses"
                                type="number"
                                className="pl-9"
                                value={formData.monthly_expenses}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Current Savings (₹)</label>
                        <div className="relative">
                            <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                name="savings"
                                type="number"
                                className="pl-9"
                                value={formData.savings}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Current Debt (₹)</label>
                        <div className="relative">
                            <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                name="debt"
                                type="number"
                                className="pl-9"
                                value={formData.debt}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Emergency Fund (₹)</label>
                        <div className="relative">
                            <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                name="emergency_fund"
                                type="number"
                                className="pl-9"
                                value={formData.emergency_fund}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Age (Years)</label>
                        <div className="relative">
                            <User className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                name="age"
                                type="number"
                                className="pl-9"
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <Button
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-4"
                    onClick={() => onSubmit(formData)}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Calculating...
                        </>
                    ) : (
                        "Calculate Financial Health"
                    )}
                </Button>
            </CardContent>
        </Card>
    );
}

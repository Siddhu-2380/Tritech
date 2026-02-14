"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { GoalInput } from "@/services/api";
import { IndianRupee, Target, TrendingUp, Calendar } from "lucide-react";

interface GoalInputCardProps {
    onCalculate: (data: GoalInput) => void;
    isLoading: boolean;
}

export function GoalInputCard({ onCalculate, isLoading }: GoalInputCardProps) {
    const [formData, setFormData] = useState<GoalInput>({
        target_amount: 1000000,
        current_savings: 100000,
        annual_return: 12,
        years: 5
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: Number(value)
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCalculate(formData);
    };

    return (
        <Card className="border-2 border-slate-200 dark:border-slate-700 h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-teal-600" />
                    Goal Details
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Target Amount */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Target Amount</label>
                        <div className="relative">
                            <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                name="target_amount"
                                type="number"
                                className="pl-9"
                                value={formData.target_amount}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Current Savings */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Current Savings</label>
                        <div className="relative">
                            <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                name="current_savings"
                                type="number"
                                className="pl-9"
                                value={formData.current_savings}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Expected Return */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Expected Annual Return (%)</label>
                        <div className="relative">
                            <TrendingUp className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                name="annual_return"
                                type="number"
                                className="pl-9"
                                value={formData.annual_return}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Years */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Years to Achieve Goal</label>
                        <div className="flex items-center gap-4">
                            <Calendar className="h-4 w-4 text-slate-400 flex-shrink-0" />
                            <input
                                type="range"
                                name="years"
                                min="1"
                                max="30"
                                value={formData.years}
                                onChange={handleChange}
                                className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-600"
                            />
                            <span className="text-lg font-semibold w-12 text-center">{formData.years}</span>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600"
                        disabled={isLoading}
                    >
                        {isLoading ? "Calculating..." : "Calculate Plan"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IndianRupee } from "lucide-react";

export function FinancialInputCard() {
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
                            <Input className="pl-9" placeholder="50,000" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Monthly Expenses (₹)</label>
                        <div className="relative">
                            <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input className="pl-9" placeholder="30,000" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Current Savings (₹)</label>
                        <div className="relative">
                            <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input className="pl-9" placeholder="1,00,000" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Current Debt (₹)</label>
                        <div className="relative">
                            <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input className="pl-9" placeholder="2,00,000" />
                        </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium">Emergency Fund (₹)</label>
                        <div className="relative">
                            <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input className="pl-9" placeholder="50,000" />
                        </div>
                    </div>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-4">
                    Calculate Financial Health
                </Button>
            </CardContent>
        </Card>
    );
}

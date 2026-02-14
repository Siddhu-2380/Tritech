"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IndianRupee, Clock } from "lucide-react";

export function DecisionSelectorCard() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Decision Parameters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium">What decision are you considering?</label>
                    <select className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300">
                        <option>Buy Phone on EMI</option>
                        <option>Take Personal Loan</option>
                        <option>Increase Lifestyle Spending</option>
                        <option>Invest in SIP</option>
                        <option>Quit Job Without Savings</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Monthly EMI / Expense Impact (₹)</label>
                    <div className="relative">
                        <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                        <Input className="pl-9" placeholder="5,000" defaultValue="4,500" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Duration (Months)</label>
                    <div className="relative">
                        <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                        <Input className="pl-9" placeholder="12" defaultValue="12" />
                    </div>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-4">
                    Analyze Impact
                </Button>
            </CardContent>
        </Card>
    );
}

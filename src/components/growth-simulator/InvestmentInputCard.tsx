"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IndianRupee, Percent, Calendar } from "lucide-react";

export function InvestmentInputCard() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Investment Parameters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Investment Type</label>
                    <select className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300">
                        <option>SIP (Systematic Investment Plan)</option>
                        <option>Lumpsum Savings</option>
                        <option>Fixed Deposit</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Monthly Contribution</label>
                    <div className="relative">
                        <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                        <Input className="pl-9" placeholder="5,000" defaultValue="5,000" />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between">
                        <label className="text-sm font-medium">Expected Annual Return</label>
                        <span className="text-sm text-slate-500">12%</span>
                    </div>
                    <div className="relative">
                        <Percent className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                        <Input className="pl-9" placeholder="12" defaultValue="12" />
                    </div>
                    <input type="range" min="1" max="30" defaultValue="12" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-teal-600" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Investment Duration (Years)</label>
                    <select className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300">
                        {[...Array(30)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1} Years</option>
                        ))}
                    </select>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-4">
                    Simulate Growth
                </Button>
            </CardContent>
        </Card>
    );
}

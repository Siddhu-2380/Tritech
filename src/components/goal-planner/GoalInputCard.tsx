"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IndianRupee, Clock, Target } from "lucide-react";

export function GoalInputCard() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Goal Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium">What are you planning for?</label>
                    <select className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300">
                        <option>Buy a Car</option>
                        <option>Buy a House</option>
                        <option>Travel Abroad</option>
                        <option>Emergency Fund</option>
                        <option>Custom Goal</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Target Amount (₹)</label>
                    <div className="relative">
                        <IndianRupee className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                        <Input className="pl-9" placeholder="5,00,000" defaultValue="10,00,000" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Target Timeframe (Years)</label>
                    <div className="relative">
                        <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                        <Input className="pl-9" placeholder="5" defaultValue="5" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Current Savings (₹)</label>
                    <div className="relative">
                        <Target className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                        <Input className="pl-9" placeholder="50,000" defaultValue="2,50,000" />
                    </div>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-4">
                    Calculate Plan
                </Button>
            </CardContent>
        </Card>
    );
}

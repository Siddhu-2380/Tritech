"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Wallet, PiggyBank } from "lucide-react";

const suggestions = [
    {
        icon: TrendingUp,
        title: "Increase Savings Ratio",
        description: "Aim to save at least 30% of your monthly income.",
        color: "text-blue-500",
        bg: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
        icon: Wallet,
        title: "Reduce Discretionary Spending",
        description: "Cut down on non-essential expenses to boost savings.",
        color: "text-red-500",
        bg: "bg-red-100 dark:bg-red-900/20",
    },
    {
        icon: PiggyBank,
        title: "Build Emergency Fund",
        description: "Target a 6-month emergency fund for financial security.",
        color: "text-green-500",
        bg: "bg-green-100 dark:bg-green-900/20",
    },
];

export function SuggestionCards() {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            {suggestions.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <div className={`p-2 rounded-full ${item.bg}`}>
                            <item.icon className={`h-5 w-5 ${item.color}`} />
                        </div>
                        <CardTitle className="text-base">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            {item.description}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

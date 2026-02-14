"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee, TrendingUp, ShieldAlert } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const stats = [
    {
        title: "Financial Score",
        value: "720",
        description: "Good (Top 30%)",
        icon: TrendingUp,
        color: "text-teal-600",
    },
    {
        title: "Monthly Savings",
        value: formatCurrency(25000),
        description: "+12% from last month",
        icon: IndianRupee,
        color: "text-blue-600",
    },
    {
        title: "Risk Level",
        value: "Moderate",
        description: "Balanced Portfolio",
        icon: ShieldAlert,
        color: "text-yellow-600",
    },
];

export function OverviewCards() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
                <Card key={stat.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            {stat.title}
                        </CardTitle>
                        <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            {stat.description}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

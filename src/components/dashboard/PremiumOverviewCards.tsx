"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee, TrendingUp, Wallet, ShieldCheck } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const stats = [
    {
        title: "Total Net Worth",
        value: formatCurrency(1250000),
        change: "+8.2%",
        icon: Wallet,
        color: "text-blue-600",
        bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
        title: "Monthly Savings",
        value: formatCurrency(25000),
        change: "+12.5%",
        icon: IndianRupee,
        color: "text-teal-600",
        bg: "bg-teal-100 dark:bg-teal-900/30",
    },
    {
        title: "Financial Score",
        value: "720",
        change: "+5 pts",
        icon: TrendingUp,
        color: "text-purple-600",
        bg: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
        title: "Risk Profile",
        value: "Moderate",
        change: "Stable",
        icon: ShieldCheck,
        color: "text-amber-600",
        bg: "bg-amber-100 dark:bg-amber-900/30",
    },
];

export function PremiumOverviewCards() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                            {stat.title}
                        </CardTitle>
                        <div className={`p-2 rounded-full ${stat.bg}`}>
                            <stat.icon className={`h-4 w-4 ${stat.color}`} />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                        <p className="text-xs text-green-600 font-medium mt-1">
                            {stat.change} <span className="text-slate-500 font-normal">from last month</span>
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

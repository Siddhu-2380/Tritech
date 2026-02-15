"use client";

import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Wallet, TrendingUp, Target } from "lucide-react";

interface SummaryProps {
    totalInvested: number | null;
    totalReturns: number | null;
    activeGoals: number;
}

export function DashboardSummaryCards({ totalInvested, totalReturns, activeGoals }: SummaryProps) {
    const hasInvestmentData = totalInvested !== null;

    const cards = [
        {
            label: "Total Invested",
            value: hasInvestmentData ? formatCurrency(totalInvested || 0) : "₹0",
            icon: Wallet,
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
            iconColor: "text-blue-600 dark:text-blue-400",
            valueColor: "text-slate-900 dark:text-white",
        },
        {
            label: "Total Returns",
            value: hasInvestmentData ? `+${formatCurrency(totalReturns || 0)}` : "₹0",
            icon: TrendingUp,
            iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
            iconColor: "text-emerald-600 dark:text-emerald-400",
            valueColor: hasInvestmentData ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-white",
        },
        {
            label: "Active Goals",
            value: String(activeGoals),
            icon: Target,
            iconBg: "bg-violet-100 dark:bg-violet-900/30",
            iconColor: "text-violet-600 dark:text-violet-400",
            valueColor: "text-slate-900 dark:text-white",
        },
    ];

    return (
        <div className="grid gap-4 md:grid-cols-3">
            {cards.map((card, i) => (
                <Card key={card.label} className={`animate-slide-up`} style={{ animationDelay: `${i * 100}ms` }}>
                    <CardContent className="p-5 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{card.label}</p>
                            <h3 className={`text-2xl font-bold mt-1 tracking-tight ${card.valueColor}`}>
                                {card.value}
                            </h3>
                        </div>
                        <div className={`p-3 ${card.iconBg} rounded-2xl`}>
                            <card.icon className={`h-5 w-5 ${card.iconColor}`} />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

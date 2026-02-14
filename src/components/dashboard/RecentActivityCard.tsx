"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { ArrowUpRight, ArrowDownLeft, Coffee, ShoppingBag, Landmark } from "lucide-react";

const activities = [
    {
        id: 1,
        title: "SIP Investment",
        date: "Today, 10:00 AM",
        amount: 5000,
        type: "debit",
        icon: Landmark,
        color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
        id: 2,
        title: "Salary Credited",
        date: "Yesterday, 6:00 PM",
        amount: 85000,
        type: "credit",
        icon: ArrowDownLeft,
        color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    },
    {
        id: 3,
        title: "Grocery Shopping",
        date: "Yesterday, 2:30 PM",
        amount: 3200,
        type: "debit",
        icon: ShoppingBag,
        color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    },
    {
        id: 4,
        title: "Coffee & Snacks",
        date: "Oct 24, 4:15 PM",
        amount: 450,
        type: "debit",
        icon: Coffee,
        color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
    },
];

export function RecentActivityCard() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {activities.map((activity) => (
                        <div key={activity.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className={`p-2 rounded-full ${activity.color}`}>
                                    <activity.icon className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-900 dark:text-white">{activity.title}</p>
                                    <p className="text-xs text-slate-500">{activity.date}</p>
                                </div>
                            </div>
                            <div className={`text-sm font-bold ${activity.type === 'credit' ? 'text-green-600' : 'text-slate-900 dark:text-white'}`}>
                                {activity.type === 'credit' ? '+' : '-'}{formatCurrency(activity.amount)}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

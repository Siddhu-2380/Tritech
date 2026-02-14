"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, BookOpen, TrendingUp, AlertTriangle, Target, PiggyBank } from "lucide-react";

interface Badge {
    id: number;
    title: string;
    icon: any;
    unlocked: boolean;
    color: string;
}

const badges: Badge[] = [
    { id: 1, title: "First Budget", icon: PiggyBank, unlocked: true, color: "text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30" },
    { id: 2, title: "Read 3 Articles", icon: BookOpen, unlocked: true, color: "text-blue-500 bg-blue-100 dark:bg-blue-900/30" },
    { id: 3, title: "Invested Growth", icon: TrendingUp, unlocked: true, color: "text-purple-500 bg-purple-100 dark:bg-purple-900/30" },
    { id: 4, title: "Risk Avoider", icon: AlertTriangle, unlocked: false, color: "text-slate-400 bg-slate-100 dark:bg-slate-800" },
    { id: 5, title: "Goal Setter", icon: Target, unlocked: false, color: "text-slate-400 bg-slate-100 dark:bg-slate-800" },
    { id: 6, title: "Safety Net", icon: ShieldCheck, unlocked: false, color: "text-slate-400 bg-slate-100 dark:bg-slate-800" },
];

export function AchievementBadges() {
    return (
        <Card className="h-full">
            <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Your Achievements</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 gap-3">
                    {badges.map((badge) => (
                        <div
                            key={badge.id}
                            className={`flex flex-col items-center justify-center p-3 rounded-lg text-center transition-all ${badge.unlocked
                                    ? "bg-white border border-slate-100 shadow-sm hover:shadow-md dark:bg-slate-900 dark:border-slate-800"
                                    : "opacity-60 bg-slate-50 border border-transparent dark:bg-slate-900/50"
                                }`}
                        >
                            <div className={`p-2.5 rounded-full mb-2 ${badge.color} ${!badge.unlocked && "grayscale"}`}>
                                <badge.icon className="h-5 w-5" />
                            </div>
                            <span className={`text-[10px] font-medium leading-tight ${badge.unlocked ? "text-slate-700 dark:text-slate-300" : "text-slate-400"
                                }`}>
                                {badge.title}
                            </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

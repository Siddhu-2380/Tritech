"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
    score: number | null;
    risk: string | null;
}

function AnimatedNumber({ value, duration = 1000 }: { value: number; duration?: number }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = value / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCurrent(value);
                clearInterval(timer);
            } else {
                setCurrent(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [value, duration]);

    return <>{current}</>;
}

export function FinancialScoreSummaryCard({ score, risk }: Props) {
    if (score === null) {
        return (
            <Card className="h-full border-dashed border-2 border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 hover:border-teal-300 dark:hover:border-teal-700 transition-colors">
                <CardContent className="h-full flex flex-col items-center justify-center text-center p-8">
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-3">
                        <Activity className="h-7 w-7 text-slate-400" />
                    </div>
                    <p className="font-semibold text-slate-900 dark:text-white">Financial Score</p>
                    <p className="text-sm text-slate-500 mt-1">Complete health check to view</p>
                </CardContent>
            </Card>
        );
    }

    const getColor = (s: number) => {
        if (s >= 80) return { text: "text-emerald-600 dark:text-emerald-400", bg: "from-emerald-500 to-green-500", badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" };
        if (s >= 50) return { text: "text-amber-600 dark:text-amber-400", bg: "from-amber-500 to-yellow-500", badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300" };
        return { text: "text-red-600 dark:text-red-400", bg: "from-red-500 to-rose-500", badge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300" };
    };

    const colors = getColor(score);

    return (
        <Card className="h-full relative overflow-hidden gradient-border">
            {/* Decorative gradient accent */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.bg}`}></div>
            <CardContent className="p-6 pt-5">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Financial Health Score</p>
                <div className="flex items-end gap-2 mb-4">
                    <span className={`text-5xl font-extrabold tracking-tight ${colors.text}`}>
                        <AnimatedNumber value={score} />
                    </span>
                    <span className="text-base text-slate-400 mb-1.5 font-medium">/ 100</span>
                </div>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${colors.badge}`}>
                    <div className={`h-1.5 w-1.5 rounded-full bg-current`}></div>
                    Risk: {risk}
                </div>
            </CardContent>
        </Card>
    );
}

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";

export function WeeklyChallengeCard() {
    return (
        <Card className="bg-indigo-50 border-indigo-100 dark:bg-indigo-900/20 dark:border-indigo-900/50">
            <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Weekly Challenge</span>
                    </div>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full dark:bg-indigo-900/50 dark:text-indigo-300">
                        +50 XP
                    </span>
                </div>

                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Increase your savings ratio to 25%
                </h3>

                <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span>Progress</span>
                        <span>15% / 25%</span>
                    </div>
                    <div className="w-full bg-white h-2 rounded-full dark:bg-slate-800 overflow-hidden border border-indigo-200 dark:border-indigo-800">
                        <div className="h-full bg-indigo-500 w-[60%] rounded-full"></div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

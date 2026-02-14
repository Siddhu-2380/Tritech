"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Trophy } from "lucide-react";

export function ProgressTracker() {
    const completed = 2;
    const total = 6;
    const progress = (completed / total) * 100;

    return (
        <Card className="bg-slate-900 text-white border-none shadow-lg dark:bg-slate-800">
            <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                        <Trophy className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Your Learning Journey</h3>
                        <p className="text-slate-400 text-sm">Keep going! You're building valuable financial skills.</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto">
                    <div className="text-right">
                        <span className="text-2xl font-bold">{completed} / {total}</span>
                        <p className="text-xs text-slate-400">Articles Completed</p>
                    </div>
                    <div className="flex-1 md:w-48 bg-slate-800 rounded-full h-3 overflow-hidden">
                        <div
                            className="bg-teal-500 h-full rounded-full transition-all duration-1000"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

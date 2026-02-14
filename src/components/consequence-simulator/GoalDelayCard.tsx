"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";

export function GoalDelayCard() {
    return (
        <Card className="border-l-4 border-l-amber-500 bg-amber-50 dark:bg-amber-900/10 shadow-sm">
            <CardContent className="flex items-center gap-4 p-4">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                    <CalendarClock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Goal Impact</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                        Your goal of <span className="font-medium text-amber-700 dark:text-amber-400">Buying a Car</span> will be delayed by <strong>8 months</strong>.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}

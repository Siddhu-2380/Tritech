"use client";

import { Lightbulb } from "lucide-react";

export function EmotionalInsightCard() {
    return (
        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
            <div>
                <p className="text-sm italic text-slate-600 dark:text-slate-400">
                    "Small lifestyle upgrades today can cost you years of financial freedom tomorrow. Consider if this expense aligns with your long-term vision."
                </p>
            </div>
        </div>
    );
}

"use client";

import { Lightbulb } from "lucide-react";

export function InsightCard() {
    return (
        <div className="mx-4 mb-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 p-4 border border-amber-100 dark:from-amber-950/30 dark:to-orange-950/30 dark:border-amber-900/50 flex gap-3 items-start shadow-sm">
            <div className="p-2 bg-amber-100 rounded-full dark:bg-amber-900/50 shrink-0">
                <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
                <h4 className="text-sm font-semibold text-amber-900 dark:text-amber-300">Smart Tip</h4>
                <p className="text-sm text-amber-800 dark:text-amber-200/80 leading-relaxed mt-1">
                    Consistency in saving small amounts monthly builds more wealth than occasional large investments.
                </p>
            </div>
        </div>
    );
}

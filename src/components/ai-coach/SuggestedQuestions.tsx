"use client";

import { Button } from "@/components/ui/button";

const questions = [
    "How to build emergency fund?",
    "How much should I save monthly?",
    "What is good debt?",
    "How to reduce financial risk?",
];

export function SuggestedQuestions() {
    return (
        <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
            <p className="text-xs font-medium text-slate-500 mb-3 px-1">Suggested Questions</p>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {questions.map((q, i) => (
                    <Button
                        key={i}
                        variant="outline"
                        size="sm"
                        className="whitespace-nowrap rounded-full bg-white dark:bg-slate-950 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 dark:hover:bg-teal-900/20 dark:hover:text-teal-400 dark:hover:border-teal-800 transition-colors"
                    >
                        {q}
                    </Button>
                ))}
            </div>
        </div>
    );
}

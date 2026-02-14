"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, TrendingUp, AlertTriangle } from "lucide-react";

interface SuggestionCardsProps {
    suggestions: string[];
}

export function SuggestionCards({ suggestions }: SuggestionCardsProps) {
    if (!suggestions || suggestions.length === 0) {
        return (
            <div className="text-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
                <p className="text-slate-500">Calculate your score to get personalized suggestions.</p>
            </div>
        );
    }

    return (
        <div className="grid gap-4 md:grid-cols-3">
            {suggestions.map((suggestion, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <div className="p-2 rounded-full bg-teal-100 dark:bg-teal-900/20">
                            <Lightbulb className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                        </div>
                        <CardTitle className="text-base">Suggestion {index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            {suggestion}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

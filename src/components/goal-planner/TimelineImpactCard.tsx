"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Timer, ArrowRight } from "lucide-react";

export function TimelineImpactCard() {
    return (
        <Card className="bg-slate-50 dark:bg-slate-900 border-dashed border-2 border-slate-200 dark:border-slate-800">
            <CardContent className="flex items-center gap-4 p-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <Timer className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="space-y-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white">Timeline Impact</h4>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span>Save <strong>₹2,000 more</strong></span>
                        <ArrowRight className="h-4 w-4" />
                        <span className="text-green-600 font-medium">Reach goal 8 months sooner</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

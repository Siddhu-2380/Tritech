"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function GrowthChart() {
    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle>Net Worth Growth</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center text-slate-400">
                    Chart Placeholder (Values over time)
                </div>
            </CardContent>
        </Card>
    );
}

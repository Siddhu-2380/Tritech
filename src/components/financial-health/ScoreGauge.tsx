"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RiskBadge } from "./RiskBadge";

export function ScoreGauge() {
    const score = 72; // Mock score

    // Calculate rotation for gauge (0-180 degrees)
    // Score 0 = -90deg, Score 100 = 90deg
    const rotation = (score / 100) * 180 - 90;

    return (
        <Card className="h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
            <div className="relative w-48 h-24 overflow-hidden mb-4">
                {/* Gauge Background */}
                <div className="absolute w-48 h-48 rounded-full border-[12px] border-slate-200 dark:border-slate-800 top-0 left-0 box-border"></div>
                {/* Gauge Fill (Simplified visual) */}
                <div
                    className="absolute w-48 h-48 rounded-full border-[12px] border-transparent border-t-teal-500 border-r-teal-500 top-0 left-0 box-border transition-all duration-1000 ease-out"
                    style={{ transform: `rotate(${rotation}deg)` }}
                ></div>
                {/* Center Text */}
                <div className="absolute w-full top-12 text-center">
                    <span className="text-5xl font-bold text-slate-900 dark:text-white">{score}</span>
                </div>
            </div>

            <div className="text-center space-y-2 mt-4">
                <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">Your Financial Health Score</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                    Based on savings ratio, debt ratio, and emergency coverage.
                </p>
                <div className="pt-2">
                    <RiskBadge level="Medium" />
                </div>
            </div>
        </Card>
    );
}

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Hourglass, TrendingDown } from "lucide-react";

export function FinancialAgeImpactCard() {
    return (
        <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white border-none shadow-lg">
            <CardContent className="flex items-center justify-between p-6">
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-teal-400 font-medium">
                        <Hourglass className="h-4 w-4" />
                        Financial Age Update
                    </div>
                    <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-slate-300 line-through decoration-red-500 decoration-2">25</span>
                        <ArrowComp />
                        <span className="text-4xl font-bold text-white">29 Years</span>
                    </div>
                    <p className="text-sm text-slate-300 max-w-lg">
                        This decision increases your financial age by <strong>4 years</strong>. It may delay your financial stability by approximately 2 years.
                    </p>
                </div>
                <div className="hidden md:block">
                    <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-3xl">👴</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

function ArrowComp() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 h-6 w-6"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
    )
}

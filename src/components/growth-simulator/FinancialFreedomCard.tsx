"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";

export function FinancialFreedomCard() {
    return (
        <Card className="bg-gradient-to-r from-teal-600 to-teal-500 text-white border-none shadow-lg transform transition-all hover:scale-[1.01]">
            <CardContent className="flex items-center justify-between p-6">
                <div className="space-y-2">
                    <p className="text-teal-100 font-medium flex items-center gap-2">
                        <Plane className="h-4 w-4" />
                        Estimated Financial Freedom Age
                    </p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">48 Years</span>
                        <span className="text-sm text-teal-100 opacity-80">(16 years from now)</span>
                    </div>
                    <p className="text-sm text-teal-50 max-w-lg">
                        At your current investment rate of <strong>₹5,000/month</strong>, you are projected to achieve financial independence by age 48. Increasing contribution by ₹2,000 can reduce this by 3 years.
                    </p>
                </div>
                <div className="hidden md:block">
                    <div className="h-24 w-24 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-3xl">🚀</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

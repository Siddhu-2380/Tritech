"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function MotivationCard() {
    return (
        <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none shadow-md">
            <CardContent className="flex items-start gap-4 p-6">
                <Sparkles className="h-6 w-6 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-lg">Stay Consistent</h4>
                    <p className="text-indigo-100 text-sm mt-1 leading-relaxed">
                        "Small disciplined savings today turn into big achievements tomorrow. Stick to your plan and watch your dreams become reality."
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}

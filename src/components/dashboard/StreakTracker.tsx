"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Flame } from "lucide-react";

export function StreakTracker() {
    return (
        <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-none shadow-md">
            <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm animate-pulse">
                        <Flame className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg leading-none">5-Day Streak</h3>
                        <p className="text-orange-100 text-xs mt-1">Keep learning daily!</p>
                    </div>
                </div>
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((day) => (
                        <div key={day} className="h-8 w-2 rounded-full bg-white/40 overflow-hidden">
                            <div className="h-full w-full bg-white"></div>
                        </div>
                    ))}
                    {[6, 7].map((day) => (
                        <div key={day} className="h-8 w-2 rounded-full bg-black/20"></div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

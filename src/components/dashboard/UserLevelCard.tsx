"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star } from "lucide-react";

export function UserLevelCard() {
    const currentXP = 320;
    const nextLevelXP = 500;
    const progress = (currentXP / nextLevelXP) * 100;

    return (
        <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white border-none shadow-lg overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Trophy className="h-32 w-32" />
            </div>

            <CardContent className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="bg-yellow-500/20 text-yellow-300 text-xs font-bold px-2 py-0.5 rounded-full border border-yellow-500/50">
                                LEVEL 3
                            </span>
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Wealth Builder</h2>
                        <p className="text-slate-300 text-sm">Earn XP by improved financial habits.</p>
                    </div>
                    <div className="text-right">
                        <span className="text-3xl font-bold text-white">{currentXP}</span>
                        <span className="text-slate-400 text-sm"> / {nextLevelXP} XP</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-700/50 h-3 rounded-full mb-2">
                    <div
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-1000"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="text-xs text-right text-slate-400">
                    {nextLevelXP - currentXP} XP to next level
                </p>
            </CardContent>
        </Card>
    );
}

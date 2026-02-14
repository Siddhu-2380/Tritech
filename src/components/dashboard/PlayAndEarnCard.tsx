"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useGamification } from "@/hooks/useGamification";

export function PlayAndEarnCard() {
    const { xp } = useGamification();
    // In a real app, we'd track "games played" separately or derive it.
    // For now, we'll confirm 5 games are available.

    return (
        <Card className="border-2 border-indigo-100 dark:border-indigo-900 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/30 dark:to-slate-900 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Gamepad2 className="w-24 h-24 text-indigo-600" />
            </div>

            <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400">
                        <Gamepad2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Play & Earn XP</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-indigo-50 dark:border-indigo-900">
                        <p className="text-xs text-slate-500 font-medium uppercase">Available</p>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">5 Games</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-indigo-50 dark:border-indigo-900">
                        <p className="text-xs text-slate-500 font-medium uppercase">XP Reward</p>
                        <p className="text-xl font-bold text-amber-500 flex items-center gap-1">
                            <Trophy className="w-4 h-4" />
                            Up to 35
                        </p>
                    </div>
                </div>

                <Link href="/games">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white gap-2 shadow-lg shadow-indigo-200 dark:shadow-none">
                        Go to Games Arena
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}

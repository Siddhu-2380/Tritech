"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star, Zap, X } from "lucide-react";
import { useGamification } from "@/hooks/useGamification";

const LEVEL_THRESHOLDS = [0, 100, 250, 500, 1000];

export function GamificationCard() {
    const { xp, level, xpToNextLevel, badge, lastMessage, showPopup, dismissPopup } = useGamification();

    // Calculate progress percentage to next level
    const currentThreshold = LEVEL_THRESHOLDS[level - 1] || 0;
    const nextThreshold = LEVEL_THRESHOLDS[level] || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
    const progressInLevel = xp - currentThreshold;
    const levelRange = nextThreshold - currentThreshold;
    const progressPercent = level >= 5 ? 100 : Math.min(100, (progressInLevel / levelRange) * 100);

    const getLevelColor = () => {
        if (level >= 5) return "from-yellow-500 to-amber-600";
        if (level >= 4) return "from-violet-500 to-purple-600";
        if (level >= 3) return "from-blue-500 to-cyan-600";
        if (level >= 2) return "from-teal-500 to-green-600";
        return "from-slate-400 to-slate-500";
    };

    return (
        <Card className="border-2 border-slate-200 dark:border-slate-700 relative overflow-hidden">
            {/* XP Popup Notification */}
            {showPopup && lastMessage && (
                <div className="absolute top-2 right-2 z-10 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 rounded-lg shadow-lg animate-in fade-in slide-in-from-top-2 duration-300 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    <span className="text-sm font-semibold">{lastMessage}</span>
                    <button onClick={dismissPopup} className="ml-1">
                        <X className="h-3 w-3" />
                    </button>
                </div>
            )}

            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getLevelColor()} flex items-center justify-center shadow-lg`}>
                            <Trophy className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-slate-900 dark:text-white">Level {level}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{badge}</p>
                        </div>
                    </div>

                    <div className="text-right">
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-2xl font-bold text-slate-900 dark:text-white">{xp}</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Total XP</p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span>Level {level}</span>
                        <span>{level < 5 ? `${xpToNextLevel} XP to Level ${level + 1}` : "Max Level!"}</span>
                    </div>
                    <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-gradient-to-r ${getLevelColor()} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

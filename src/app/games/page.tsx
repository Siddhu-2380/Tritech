"use client";

import { GameCard } from "@/components/games/GameCard";
import { useGamification } from "@/hooks/useGamification";
import { Sparkles } from "lucide-react";

export default function GamesHubPage() {
    const { xp, level, badge } = useGamification();

    const GAMES = [
        {
            title: "Investment vs Spending",
            description: "Understand opportunity cost by choosing between spending and investing.",
            difficulty: "Easy" as const,
            xp: 25,
            link: "/games/investment-challenge",
            color: "bg-blue-500"
        },
        {
            title: "Budget Battle",
            description: "Manage monthly income and survive unexpected expenses.",
            difficulty: "Medium" as const,
            xp: 30,
            link: "/games/budget-battle",
            color: "bg-emerald-500"
        },
        {
            title: "Quiz Arena",
            description: "Test your financial knowledge in a timed quiz.",
            difficulty: "Easy" as const,
            xp: 20,
            link: "/games/quiz-arena",
            color: "bg-purple-500"
        },
        {
            title: "Debt Escape",
            description: "Escape high-interest debt with smart repayment strategy.",
            difficulty: "Hard" as const,
            xp: 35,
            link: "/games/debt-escape",
            color: "bg-red-500"
        },
        {
            title: "Emergency Fund Rush",
            description: "Prepare for unexpected life events before they strike.",
            difficulty: "Medium" as const,
            xp: 30,
            link: "/games/emergency-rush",
            color: "bg-amber-500"
        }
    ];

    return (
        <div className="space-y-8 p-6 md:p-8 max-w-7xl mx-auto animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
                <div className="space-y-2">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Financial Learning Games
                    </h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
                        Learn money management through interactive challenges.
                        Play, learn, and level up your financial IQ! 🧠
                    </p>
                </div>

                {/* Mini Stats Card */}
                <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="p-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg shadow-orange-500/20">
                        <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Current Level</p>
                        <p className="text-lg font-bold text-slate-900 dark:text-white">{level}</p>
                    </div>
                    <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Total XP</p>
                        <p className="text-lg font-bold text-teal-600 dark:text-teal-400">{xp} XP</p>
                    </div>
                </div>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {GAMES.map((game, index) => (
                    <div key={index} className="animate-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}>
                        <GameCard {...game} />
                    </div>
                ))}
            </div>
        </div>
    );
}

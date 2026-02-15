"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Star, Trophy, Coins, Brain, Shield, Siren, DollarSign } from "lucide-react";
import Link from "next/link";

interface GameCardProps {
    title: string;
    description: string;
    difficulty: "Easy" | "Medium" | "Hard";
    xp: number;
    link: string;
    color: string;
}

const gameIcons: Record<string, React.ElementType> = {
    "Investment vs Spending": Coins,
    "Budget Battle": Shield,
    "Quiz Arena": Brain,
    "Debt Escape": DollarSign,
    "Emergency Fund Rush": Siren,
};

export function GameCard({ title, description, difficulty, xp, link, color }: GameCardProps) {
    const difficultyStyles = {
        Easy: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
        Medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800",
        Hard: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800"
    };

    const IconComp = gameIcons[title] || Trophy;

    return (
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 relative">
            {/* XP Badge */}
            <div className="absolute top-4 right-4 z-10">
                <Badge variant="secondary" className="bg-amber-50 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 border-amber-200/50 gap-1.5 pl-2 pr-2.5 py-1 font-semibold">
                    <Star className="w-3 h-3 text-amber-500 fill-current" />
                    +{xp} XP
                </Badge>
            </div>

            <CardContent className="p-6 pt-12 relative">
                {/* Decorative Background Shape */}
                <div className={`absolute top-0 right-0 w-36 h-36 ${color} opacity-[0.07] rounded-bl-[60px] transform translate-x-10 -translate-y-10 group-hover:scale-125 transition-transform duration-700 ease-out`}></div>

                {/* Game Icon */}
                <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComp className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 min-h-[40px]">
                    {description}
                </p>

                <Badge className={`${difficultyStyles[difficulty]} border text-[11px] font-semibold`}>
                    {difficulty}
                </Badge>
            </CardContent>

            <CardFooter className="p-6 pt-0">
                <Link href={link} className="w-full">
                    <Button className="w-full gap-2 group-hover:shadow-lg transition-all">
                        <Play className="w-4 h-4" />
                        Play Now
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

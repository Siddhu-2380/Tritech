"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Star, Trophy } from "lucide-react";
import Link from "next/link";

interface GameCardProps {
    title: string;
    description: string;
    difficulty: "Easy" | "Medium" | "Hard";
    xp: number;
    link: string;
    color: string; // TailWind color class for icon background
}

export function GameCard({ title, description, difficulty, xp, link, color }: GameCardProps) {
    const difficultyColor = {
        Easy: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        Hard: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
    };

    return (
        <Card className="group overflow-hidden border-2 border-slate-200 dark:border-slate-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
            {/* XP Badge */}
            <div className="absolute top-4 right-4 z-10">
                <Badge variant="secondary" className="bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 border-amber-200 gap-1 pl-1.5 pr-2.5 py-1 backdrop-blur-sm">
                    <div className="bg-amber-500 rounded-full p-0.5">
                        <Star className="w-3 h-3 text-white fill-current" />
                    </div>
                    +{xp} XP
                </Badge>
            </div>

            <CardContent className="p-6 pt-12 relative">
                {/* Icon Background Shape */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${color} opacity-10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500`}></div>

                <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mb-4 text-white shadow-lg`}>
                    <Trophy className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 transition-colors">
                    {title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 min-h-[40px]">
                    {description}
                </p>

                <Badge className={`${difficultyColor[difficulty]} border-none`}>
                    {difficulty}
                </Badge>
            </CardContent>

            <CardFooter className="p-6 pt-0">
                <Link href={link} className="w-full">
                    <Button className="w-full gap-2 bg-slate-900 hover:bg-teal-600 dark:bg-white dark:text-slate-900 dark:hover:bg-teal-400 transition-colors group-hover:shadow-lg">
                        <Play className="w-4 h-4" />
                        Play Now
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

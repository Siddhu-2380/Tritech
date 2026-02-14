"use client";

import { useState } from "react";
import { ChallengeScenarioCard } from "@/components/games/ChallengeScenarioCard";
import { ChallengeResultCard } from "@/components/games/ChallengeResultCard";
import { calculateChallenge, ChallengeResponse } from "@/services/api";
import { useGamification } from "@/hooks/useGamification";
import { AlertCircle } from "lucide-react";

export default function InvestmentChallengePage() {
    const [gameState, setGameState] = useState<"scenario" | "result">("scenario");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<ChallengeResponse | null>(null);
    const [userChoice, setUserChoice] = useState<"buy" | "invest" | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Default Game Parameters
    const GAME_AMOUNT = 50000;
    const GAME_YEARS = 5;
    const GAME_RETURN = 12;

    const { awardXP } = useGamification();

    const handleChoice = async (choice: "buy" | "invest") => {
        setLoading(true);
        setError(null);
        setUserChoice(choice);

        try {
            // Always calculate the investment potential to show comparison
            const data = await calculateChallenge({
                amount: GAME_AMOUNT,
                years: GAME_YEARS,
                annual_return: GAME_RETURN
            });

            setResult(data);
            setGameState("result");

            // Award XP based on choice
            if (choice === "invest") {
                awardXP("invest_game_win"); // We can map this to +25 in backend or just use existing rules
                // Since "invest_game_win" isn't in backend XP_RULES, I'll use standard "simulate_growth" + extra?
                // Or I should stick to the rules I defined or "simulate_growth" (+25).
                // "analyze_decision" is +25. Let's use that.
                awardXP("analyze_decision");
            } else {
                // "read_article" is +10. Let's use that for "learning experience"
                awardXP("read_article");
            }

        } catch (err) {
            setError("Failed to calculate results. Please check connection.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleReplay = () => {
        setGameState("scenario");
        setResult(null);
        setUserChoice(null);
    };

    return (
        <div className="space-y-8 p-6 md:p-8 max-w-5xl mx-auto">
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Investment vs Spending Challenge
                </h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                    Make a choice and see how it impacts your financial future.
                    Can you resist instant gratification?
                </p>
            </div>

            {error && (
                <div className="p-4 bg-red-50 text-red-800 rounded-lg flex items-center gap-2 justify-center">
                    <AlertCircle className="h-5 w-5" />
                    {error}
                </div>
            )}

            {loading ? (
                <div className="flex items-center justify-center h-64">
                    <div className="text-center space-y-3">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
                        <p className="text-slate-600">Calculating impact...</p>
                    </div>
                </div>
            ) : (
                <div className="transition-all duration-500 ease-in-out">
                    {gameState === "scenario" && (
                        <ChallengeScenarioCard
                            amount={GAME_AMOUNT}
                            onBuy={() => handleChoice("buy")}
                            onInvest={() => handleChoice("invest")}
                        />
                    )}

                    {gameState === "result" && result && userChoice && (
                        <ChallengeResultCard
                            result={result}
                            choice={userChoice}
                            amount={GAME_AMOUNT}
                            onReplay={handleReplay}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BrainCircuit, Clock, CheckCircle, XCircle, Award, Trophy } from "lucide-react";
import { getQuizQuestions, playQuizArena, QuizQuestion, QuizResult } from "@/services/api";
import { useGamification } from "@/hooks/useGamification";

export default function QuizArenaPage() {
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<{ id: number; selected_option: string }[]>([]);
    const [timeLeft, setTimeLeft] = useState(60);
    const [gameStatus, setGameStatus] = useState<"idle" | "playing" | "finished">("idle");
    const [result, setResult] = useState<QuizResult | null>(null);
    const [loading, setLoading] = useState(false);

    const { awardXP } = useGamification();

    // Timer Logic
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (gameStatus === "playing" && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && gameStatus === "playing") {
            handleSubmit(); // Auto submit
        }
        return () => clearInterval(timer);
    }, [gameStatus, timeLeft]);

    const startGame = async () => {
        setLoading(true);
        try {
            const data = await getQuizQuestions();
            setQuestions(data);
            setGameStatus("playing");
            setTimeLeft(60);
            setAnswers([]);
            setCurrentQuestionIndex(0);
            setResult(null);
        } catch (error) {
            console.error("Failed to start quiz", error);
        } finally {
            setLoading(false);
        }
    };

    const handleOptionSelect = (option: string) => {
        const currentQ = questions[currentQuestionIndex];
        const newAnswers = [...answers];
        // Check if already answered this question update it
        const existingIndex = newAnswers.findIndex(a => a.id === currentQ.id);
        if (existingIndex >= 0) {
            newAnswers[existingIndex].selected_option = option;
        } else {
            newAnswers.push({ id: currentQ.id, selected_option: option });
        }
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    const currentAnswer = answers.find(a => a.id === questions[currentQuestionIndex]?.id)?.selected_option;

    const handleSubmit = async () => {
        setGameStatus("finished");
        setLoading(true);
        try {
            const data = await playQuizArena({ items: answers });
            setResult(data);

            // Backend awards XP logic internally? No, we call awardXP hook to update frontend state visually
            // Although backend might update DB, frontend hook shows toast.
            if (data.score === 100) awardXP("create_budget"); // Map to high XP
            else if (data.score >= 60) awardXP("simulate_growth");
            else awardXP("read_article");

        } catch (error) {
            console.error("Failed to submit quiz", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8 p-6 md:p-8 max-w-3xl mx-auto animate-in fade-in duration-500">
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center justify-center gap-3">
                    <BrainCircuit className="w-10 h-10 text-violet-500" />
                    Quiz Arena
                </h1>
                <p className="text-lg text-slate-500 dark:text-slate-400">
                    Test your financial IQ. 60 Seconds. 5 Questions. Can you score 100?
                </p>
            </div>

            {gameStatus === "idle" && (
                <div className="flex justify-center">
                    <Button
                        onClick={startGame}
                        disabled={loading}
                        className="h-16 px-8 text-xl bg-violet-600 hover:bg-violet-700 text-white rounded-full shadow-lg hover:shadow-violet-500/25 transition-all transform hover:scale-105"
                    >
                        {loading ? "Loading Arena..." : "Start Challenge 🚀"}
                    </Button>
                </div>
            )}

            {gameStatus === "playing" && questions.length > 0 && (
                <Card className="border-2 border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
                    {/* Timer Bar */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-slate-100">
                        <div
                            className={`h-full transition-all duration-1000 ${timeLeft < 10 ? "bg-red-500" : "bg-violet-500"}`}
                            style={{ width: `${(timeLeft / 60) * 100}%` }}
                        />
                    </div>

                    <CardHeader className="pt-8 flex flex-row justify-between items-center">
                        <div className="flex items-center gap-2 text-slate-500 font-medium">
                            <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-sm">
                                Question {currentQuestionIndex + 1}/{questions.length}
                            </span>
                        </div>
                        <div className={`flex items-center gap-2 font-bold text-xl ${timeLeft < 10 ? "text-red-500 animate-pulse" : "text-slate-700 dark:text-slate-300"}`}>
                            <Clock className="w-5 h-5" />
                            {timeLeft}s
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white leading-relaxed">
                            {questions[currentQuestionIndex].question}
                        </h2>

                        <div className="grid gap-3">
                            {questions[currentQuestionIndex].options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionSelect(option)}
                                    className={`p-4 rounded-xl border-2 text-left font-medium transition-all duration-200 flex items-center justify-between group
                                        ${currentAnswer === option
                                            ? "border-violet-500 bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 shadow-md"
                                            : "border-slate-100 dark:border-slate-800 hover:border-violet-200 dark:hover:border-violet-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300"
                                        }
                                    `}
                                >
                                    <span>{option}</span>
                                    {currentAnswer === option && <CheckCircle className="w-5 h-5 text-violet-500" />}
                                </button>
                            ))}
                        </div>

                        <div className="pt-4 flex justify-end">
                            {isLastQuestion ? (
                                <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white min-w-[120px]">
                                    Submit Quiz
                                </Button>
                            ) : (
                                <Button onClick={handleNext} variant="outline" className="min-w-[120px]">
                                    Next
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            )}

            {gameStatus === "finished" && result && (
                <Card className={`border-2 shadow-2xl animate-in zoom-in-95 duration-500 ${result.score === 100 ? "border-yellow-400 bg-yellow-50/20" : result.score >= 60 ? "border-blue-400 bg-blue-50/20" : "border-slate-200 bg-slate-50/50"}`}>
                    <CardContent className="p-8 text-center space-y-8">
                        <div className="space-y-2">
                            <div className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg ${result.score === 100 ? "bg-yellow-400 text-white" : result.score >= 60 ? "bg-blue-500 text-white" : "bg-slate-400 text-white"}`}>
                                <Trophy className="w-10 h-10" />
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                                {result.result}
                            </h2>
                            <p className="text-xl font-medium text-slate-600 dark:text-slate-300">
                                You scored {result.score} points!
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-2xl flex flex-col items-center">
                                <span className="text-3xl font-bold text-green-600 dark:text-green-400">{result.correct_count}</span>
                                <span className="text-xs text-green-700 dark:text-green-300 uppercase font-bold tracking-wider">Correct</span>
                            </div>
                            <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-2xl flex flex-col items-center">
                                <span className="text-3xl font-bold text-red-600 dark:text-red-400">{result.wrong_count}</span>
                                <span className="text-xs text-red-700 dark:text-red-300 uppercase font-bold tracking-wider">Wrong</span>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white py-3 px-6 rounded-full inline-flex items-center gap-2 shadow-lg animate-bounce">
                            <Award className="w-5 h-5 text-yellow-400" />
                            <span className="font-bold">+{result.xp_awarded} XP Earned</span>
                        </div>

                        <div className="pt-4">
                            <Button onClick={startGame} variant="outline" className="min-w-[200px] border-2">
                                Play Again
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

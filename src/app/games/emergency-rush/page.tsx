"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { ShieldAlert, AlertTriangle, CheckCircle, Wallet, TrendingDown, Ambulance } from "lucide-react";
import { playEmergencyRush, EmergencyRushResponse, EmergencyEvent } from "@/services/api";
import { useGamification } from "@/hooks/useGamification";

export default function EmergencyRushPage() {
    const [income, setIncome] = useState(30000);
    const [fund, setFund] = useState(15000); // Default start
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<EmergencyRushResponse | null>(null);
    const [revealedEvents, setRevealedEvents] = useState<EmergencyEvent[]>([]);
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    const { awardXP } = useGamification();

    const handleStart = async () => {
        setLoading(true);
        try {
            const data = await playEmergencyRush({ income, emergency_fund: fund });
            setResult(data);
            setGameStarted(true);
            setRevealedEvents([]);
            setCurrentEventIndex(0);

            // Start Animation Sequence
            setTimeout(() => revealNextEvent(data.events, 0), 1000);

            // Award XP
            if (data.score >= 120) awardXP("create_budget"); // +35 equivalent logic
            else if (data.score >= 80) awardXP("simulate_growth"); // +25 equivalent
            else awardXP("read_article"); // +15 equivalent

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const revealNextEvent = (events: EmergencyEvent[], index: number) => {
        if (index >= events.length) return;

        setRevealedEvents(prev => [...prev, events[index]]);
        setCurrentEventIndex(index + 1);

        if (index < events.length - 1) {
            setTimeout(() => revealNextEvent(events, index + 1), 2000); // 2 seconds delay between reveals
        }
    };

    const resetGame = () => {
        setResult(null);
        setGameStarted(false);
        setRevealedEvents([]);
        setFund(15000);
    };

    return (
        <div className="space-y-8 p-6 md:p-8 max-w-4xl mx-auto animate-in fade-in duration-500">
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Emergency Fund Rush 🚨
                </h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                    Three random disasters are about to strike. Is your emergency fund ready?
                </p>
            </div>

            {!gameStarted && (
                <Card className="border-2 border-slate-200 dark:border-slate-800 shadow-xl max-w-lg mx-auto">
                    <CardHeader>
                        <CardTitle>Prepare Your Fund</CardTitle>
                        <CardDescription>Enter your savings before life happens.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Monthly Income</label>
                            <div className="flex items-center bg-slate-100 dark:bg-slate-900 rounded-lg px-4 py-3 border border-slate-200 dark:border-slate-800">
                                <span className="text-slate-500 font-bold mr-2">₹</span>
                                <input
                                    type="number"
                                    value={income}
                                    onChange={(e) => setIncome(parseInt(e.target.value) || 0)}
                                    className="bg-transparent border-none focus:outline-none w-full font-bold text-slate-900 dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Emergency Fund Amount</label>
                            <div className="flex items-center bg-teal-50 dark:bg-teal-900/10 rounded-lg px-4 py-3 border border-teal-200 dark:border-teal-800">
                                <span className="text-teal-600 font-bold mr-2">₹</span>
                                <input
                                    type="number"
                                    value={fund}
                                    onChange={(e) => setFund(parseInt(e.target.value) || 0)}
                                    className="bg-transparent border-none focus:outline-none w-full font-bold text-teal-700 dark:text-teal-300"
                                />
                            </div>
                            <p className="text-xs text-slate-500">Recommended: 3-6 months of income (₹{formatCurrency(income * 3)})</p>
                        </div>

                        <Button
                            onClick={handleStart}
                            disabled={loading || fund <= 0}
                            className="w-full h-12 text-lg bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-500/20"
                        >
                            {loading ? "Simulating Life..." : "Start Simulation"}
                        </Button>
                    </CardContent>
                </Card>
            )}

            {gameStarted && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Event Cards */}
                    {revealedEvents.map((event, index) => (
                        <Card key={index} className={`border-2 overflow-hidden animate-in zoom-in-50 duration-500 ${event.status === "Debt Taken" ? "border-red-200 bg-red-50 dark:bg-red-900/10" : "border-green-200 bg-green-50 dark:bg-green-900/10"}`}>
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                    <div className={`p-2 rounded-lg ${event.status === "Debt Taken" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
                                        {event.status === "Debt Taken" ? <AlertTriangle className="w-6 h-6" /> : <CheckCircle className="w-6 h-6" />}
                                    </div>
                                    <span className="font-bold text-lg">{formatCurrency(event.cost)}</span>
                                </div>
                                <CardTitle className="pt-4 text-slate-900 dark:text-white">{event.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={`text-sm font-bold ${event.status === "Debt Taken" ? "text-red-600" : "text-green-600"}`}>
                                    {event.status}
                                </p>
                            </CardContent>
                        </Card>
                    ))}

                    {/* Start with placeholder cards if events not yet revealed */}
                    {Array.from({ length: 3 - revealedEvents.length }).map((_, i) => (
                        <Card key={i + revealedEvents.length} className="border-2 border-dashed border-slate-300 dark:border-slate-700 bg-transparent flex items-center justify-center h-48 opacity-50">
                            <div className="text-center text-slate-400">
                                <ShieldAlert className="w-8 h-8 mx-auto mb-2 animate-pulse" />
                                <p>Incoming Event...</p>
                            </div>
                        </Card>
                    ))}
                </div>
            )}

            {/* Final Summary - Only show when all events revealed */}
            {gameStarted && revealedEvents.length === 3 && result && (
                <Card className="mt-8 border-2 border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-900 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
                    <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="space-y-4 text-center md:text-left">
                                <div>
                                    <h2 className="text-3xl font-bold mb-2">{result.result}</h2>
                                    <p className="text-slate-400 max-w-md">{result.feedback}</p>
                                </div>
                                <div className="flex gap-4 justify-center md:justify-start">
                                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Total Debt</p>
                                        <p className={`text-2xl font-bold ${result.total_debt > 0 ? "text-red-400" : "text-green-400"}`}>
                                            {formatCurrency(result.total_debt)}
                                        </p>
                                    </div>
                                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Remaining Fund</p>
                                        <p className="text-2xl font-bold text-teal-400">
                                            {formatCurrency(result.remaining_emergency_fund)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-auto min-w-[250px] space-y-4">
                                <div className="flex justify-between items-center font-bold text-lg">
                                    <span>Score</span>
                                    <span>{result.score}/130</span>
                                </div>
                                <div className="h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                                    <div
                                        className={`h-full transition-all duration-1000 ${result.score >= 120 ? "bg-green-500" : result.score >= 80 ? "bg-blue-500" : "bg-red-500"}`}
                                        style={{ width: `${(result.score / 130) * 100}%` }}
                                    ></div>
                                </div>
                                <Button onClick={resetGame} variant="secondary" className="w-full">
                                    Play Again
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

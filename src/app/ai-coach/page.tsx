"use client";

import { ChatInterface } from "@/components/ai-coach/ChatInterface";
import { SuggestedQuestions } from "@/components/ai-coach/SuggestedQuestions";
import { InsightCard } from "@/components/ai-coach/InsightCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, Sparkles } from "lucide-react";

export default function AICoachPage() {
    return (
        <div className="h-[calc(100vh-6rem)] p-4 md:p-6 lg:p-8 max-w-5xl mx-auto flex flex-col gap-4">
            {/* Header */}
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        AI Finance Coach
                    </h1>
                    <span className="px-2 py-0.5 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold dark:bg-teal-900/30 dark:text-teal-400">
                        Beta
                    </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Ask anything about saving, investing, budgeting, or financial planning.
                </p>
            </div>

            {/* Main Chat Container */}
            <div className="flex-1 flex flex-col bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden relative">

                {/* Chat Header (Optional cosmetic top bar) */}
                <div className="h-1 bg-gradient-to-r from-teal-500 to-emerald-500 w-full"></div>

                {/* Messages */}
                <ChatInterface />

                {/* Insight & Suggestions */}
                <InsightCard />
                <SuggestedQuestions />

                {/* Input Area */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                    <div className="relative flex items-center gap-2">
                        <div className="absolute left-3 top-2.5">
                            <Sparkles className="h-5 w-5 text-teal-500 animate-pulse" />
                        </div>
                        <Input
                            placeholder="Ask a financial question..."
                            className="pl-10 pr-12 h-12 rounded-full border-slate-200 dark:border-slate-800 focus-visible:ring-teal-500 shadow-sm"
                        />
                        <Button
                            size="icon"
                            className="absolute right-1.5 top-1.5 h-9 w-9 rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-sm"
                        >
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                    <p className="text-[10px] text-center text-slate-400 mt-2">
                        This AI coach provides educational guidance only and not professional financial advice.
                    </p>
                </div>
            </div>
        </div>
    );
}

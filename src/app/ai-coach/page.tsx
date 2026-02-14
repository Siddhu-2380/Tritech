"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, User, Send, Sparkles } from "lucide-react";
import { sendChat, ChatRequest } from "@/services/api";
import ReactMarkdown from 'react-markdown';

interface Message {
    role: "user" | "model";
    content: string;
}

export default function AICoachPage() {
    const [messages, setMessages] = useState<Message[]>([
        { role: "model", content: "Hello! I am FinGrow, your personal AI finance coach. How can I help you manage your money today?" }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = { role: "user", content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            // Context could be gathered here from other stores if implemented
            const context = {
                monthly_income: 30000,
                current_savings: 50000,
                financial_goals: ["Buy a house in 5 years", "Retire at 45"]
            };

            // Format history for API
            const history = messages.map(m => ({
                role: m.role === "user" ? "user" : "model",
                parts: [m.content]
            }));

            const data = await sendChat({
                message: userMsg.content,
                context,
                history
            });

            const botMsg: Message = { role: "model", content: data.response };
            setMessages(prev => [...prev, botMsg]);

        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: "model", content: "I'm having trouble connecting to my brain right now. Please try again later." }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="h-[calc(100vh-100px)] p-4 max-w-4xl mx-auto flex flex-col gap-4 animate-in fade-in duration-500">
            <div className="text-center space-y-1">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center justify-center gap-2">
                    <Sparkles className="w-8 h-8 text-indigo-500" />
                    AI Finance Coach
                </h1>
                <p className="text-slate-500 dark:text-slate-400">Powered by Gemini Pro</p>
            </div>

            <Card className="flex-1 flex flex-col border-2 border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden bg-white dark:bg-slate-950">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                            {msg.role === "model" && (
                                <Avatar className="h-8 w-8 border border-indigo-200 bg-indigo-50">
                                    <AvatarFallback><Bot className="h-5 w-5 text-indigo-600" /></AvatarFallback>
                                </Avatar>
                            )}

                            <div className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${msg.role === "user"
                                    ? "bg-indigo-600 text-white rounded-br-none"
                                    : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-bl-none border border-slate-200 dark:border-slate-700"
                                }`}>
                                <div className="prose dark:prose-invert prose-sm max-w-none leading-relaxed">
                                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                                </div>
                            </div>

                            {msg.role === "user" && (
                                <Avatar className="h-8 w-8 border border-slate-200 bg-slate-100">
                                    <AvatarFallback><User className="h-5 w-5 text-slate-600" /></AvatarFallback>
                                </Avatar>
                            )}
                        </div>
                    ))}
                    {loading && (
                        <div className="flex gap-3 justify-start animate-pulse">
                            <Avatar className="h-8 w-8 border border-indigo-200 bg-indigo-50">
                                <AvatarFallback><Bot className="h-5 w-5 text-indigo-600" /></AvatarFallback>
                            </Avatar>
                            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1">
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                            </div>
                        </div>
                    )}
                    <div ref={scrollRef} />
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex gap-2">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask me anything about money..."
                            className="flex-1 bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 focus-visible:ring-indigo-500"
                            disabled={loading}
                        />
                        <Button
                            onClick={handleSend}
                            disabled={loading || !input.trim()}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-indigo-500/25"
                        >
                            {loading ? <span className="animate-spin">⏳</span> : <Send className="w-5 h-5" />}
                        </Button>
                    </div>
                    <p className="text-xs text-center text-slate-400 mt-2">
                        FinGrow AI can make mistakes. Consider checking important information.
                    </p>
                </div>
            </Card>
        </div>
    );
}

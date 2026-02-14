"use client";

import { useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
    id: number;
    role: "user" | "bot";
    content: string;
    timestamp?: string;
}

const demoMessages: Message[] = [
    {
        id: 1,
        role: "user",
        content: "How can I improve my savings?",
    },
    {
        id: 2,
        role: "bot",
        content: "To improve savings, try increasing your savings ratio to at least 30% of your income and reduce discretionary spending.",
    },
    {
        id: 3,
        role: "user",
        content: "Is taking a personal loan a good idea?",
    },
    {
        id: 4,
        role: "bot",
        content: "It depends on your debt-to-income ratio. If your EMI exceeds 30% of your income, it may increase financial risk.",
    },
    {
        id: 5,
        role: "user",
        content: "What is SIP?",
    },
    {
        id: 6,
        role: "bot",
        content: "SIP (Systematic Investment Plan) allows you to invest a fixed amount monthly and benefit from long-term compounding.",
    },
];

export function ChatInterface() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, []);

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[400px]" ref={scrollRef}>
            {demoMessages.map((message) => (
                <div
                    key={message.id}
                    className={cn(
                        "flex w-full items-end gap-2",
                        message.role === "user" ? "justify-end" : "justify-start"
                    )}
                >
                    {message.role === "bot" && (
                        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                            <Bot className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                        </div>
                    )}

                    <div
                        className={cn(
                            "max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm",
                            message.role === "user"
                                ? "bg-teal-600 text-white rounded-br-none"
                                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-bl-none"
                        )}
                    >
                        <p className="leading-relaxed">{message.content}</p>
                    </div>

                    {message.role === "user" && (
                        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800">
                            <User className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

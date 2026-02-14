"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Clock } from "lucide-react";
import { useGamification } from "@/hooks/useGamification";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/simple-dialog";

const ARTICLES = [
    {
        id: 1,
        title: "How to Build an Emergency Fund",
        desc: "Start small and save 6 months of expenses to secure your future against unexpected events.",
        author: "FinGrow Team",
        readTime: "5 min",
        content: "Building an emergency fund is the first step to financial freedom. Start by tracking your monthly expenses..."
    },
    {
        id: 2,
        title: "Power of SIP: Start Early",
        desc: "Compounding is the 8th wonder of the world. See how small investments grow over time.",
        author: "Rahul Sharma",
        readTime: "4 min",
        content: "Systematic Investment Plans (SIPs) allow you to invest small amounts regularly. the key is consistency..."
    },
    {
        id: 3,
        title: "Credit Score Explained",
        desc: "Understanding your CIBIL score and how it impacts your loan eligibility.",
        author: "Priya Singh",
        readTime: "6 min",
        content: "Your credit score is a numerical representation of your creditworthiness. A score above 750 is considered good..."
    },
    {
        id: 4,
        title: "Smart Budgeting for Students",
        desc: "Manage your pocket money and savings effectively with the 50/30/20 rule.",
        author: "Amit Patel",
        readTime: "3 min",
        content: "Budgeting doesn't mean restricting yourself. It means spending intentionally on what matters to you..."
    },
    {
        id: 5,
        title: "Avoid Lifestyle Inflation",
        desc: "Don't let your expenses grow as fast as your income. Save the difference.",
        author: "FinGrow Team",
        readTime: "5 min",
        content: "Lifestyle inflation is the tendency to increase your spending when your income increases. Avoid this trap..."
    }
];

export function FinancialArticles() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { awardXP } = useGamification();
    const [selectedArticle, setSelectedArticle] = useState<typeof ARTICLES[0] | null>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    const handleReadMore = (article: typeof ARTICLES[0]) => {
        setSelectedArticle(article);
        awardXP("read_article");
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-teal-600" />
                    Financial Learning
                </h2>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => scroll("left")} className="h-8 w-8 rounded-full">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => scroll("right")} className="h-8 w-8 rounded-full">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {ARTICLES.map((article) => (
                    <div key={article.id} className="snap-start min-w-[300px] max-w-[300px]">
                        <Card className="h-full border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all hover:scale-[1.02] duration-300 cursor-pointer group">
                            <CardContent className="p-5 flex flex-col h-full">
                                <div className="mb-4">
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-1 mb-2 group-hover:text-teal-600 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                                        {article.desc}
                                    </p>
                                </div>

                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="flex items-center gap-1 text-xs text-slate-400">
                                        <Clock className="h-3 w-3" />
                                        {article.readTime}
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0 h-auto font-medium"
                                        onClick={() => handleReadMore(article)}
                                    >
                                        Read More &rarr;
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Article Reader Modal */}
            <Dialog open={!!selectedArticle} onOpenChange={(open: boolean) => !open && setSelectedArticle(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{selectedArticle?.title}</DialogTitle>
                        <DialogDescription>
                            By {selectedArticle?.author} • {selectedArticle?.readTime} read
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                        {selectedArticle?.content}
                        <p className="mt-4 italic text-sm text-slate-400">
                            (This is a demo article content. In a full app, this would be fetched from a CMS.)
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

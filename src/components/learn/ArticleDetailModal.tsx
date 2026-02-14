"use client";

import { X, Clock, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Article {
    id: number;
    title: string;
    category: string;
    readTime: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    description: string;
    content: string;
}

interface ArticleDetailModalProps {
    article: Article | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ArticleDetailModal({ article, isOpen, onClose }: ArticleDetailModalProps) {
    if (!isOpen || !article) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-slate-950 dark:border dark:border-slate-800 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 p-6 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
                            {article.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock className="h-3 w-3" />
                            <span>{article.readTime}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-slate-900 dark:hover:text-white">
                            <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-slate-900 dark:hover:text-white">
                            <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 text-slate-500 hover:text-red-500">
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Content */}
                <div className="overflow-y-auto p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                        {article.title}
                    </h2>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <div className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-medium">
                            {article.description}
                        </div>

                        <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                            {article.content}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-slate-100 p-6 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex justify-between items-center">
                    <span className="text-xs text-slate-400">Written by FinGrow Finance Team</span>
                    <Button onClick={onClose} className="bg-teal-600 text-white hover:bg-teal-700">
                        Mark as Completed
                    </Button>
                </div>
            </div>
        </div>
    );
}

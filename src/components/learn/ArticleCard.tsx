"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen } from "lucide-react";

interface Article {
    id: number;
    title: string;
    category: string;
    readTime: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    description: string;
    content: string;
}

interface ArticleCardProps {
    article: Article;
    onReadMore: (article: Article) => void;
}

export function ArticleCard({ article, onReadMore }: ArticleCardProps) {
    return (
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-800">
            <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 hover:bg-teal-100">
                        {article.category}
                    </Badge>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${article.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                            article.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        }`}>
                        {article.difficulty}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2 leading-tight">
                    {article.title}
                </h3>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3 mb-4">
                    {article.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="pt-0">
                <button
                    onClick={() => onReadMore(article)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition-colors"
                >
                    <BookOpen className="h-4 w-4" />
                    Read Article
                </button>
            </CardFooter>
        </Card>
    );
}

"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, RefreshCw, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsItem {
    title: string;
    link: string;
    source: string;
    published: string;
    summary: string;
}

export function NewsFeed() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchNews = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("http://localhost:8000/news/");
            if (!response.ok) throw new Error("Failed to fetch news");
            const data = await response.json();
            setNews(data);
        } catch (err) {
            setError("Unable to load latest news");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <Card className="h-fit sticky top-24">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    Market Updates
                </CardTitle>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={fetchNews}
                    disabled={loading}
                    className="h-8 w-8"
                >
                    <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                </Button>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {error && (
                    <div className="text-sm text-red-500 text-center py-4">
                        {error}
                        <Button variant="link" size="sm" onClick={fetchNews} className="ml-1">Retry</Button>
                    </div>
                )}

                {loading && news.length === 0 && (
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="animate-pulse space-y-2">
                                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
                            </div>
                        ))}
                    </div>
                )}

                {!loading && !error && news.length === 0 && (
                    <div className="text-sm text-slate-500 text-center py-4">
                        No news available at the moment.
                    </div>
                )}

                {news.map((item, index) => (
                    <div key={index} className="group border-b border-slate-100 dark:border-slate-800 last:border-0 pb-3 last:pb-0">
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block space-y-1 hover:bg-slate-50 dark:hover:bg-slate-800/50 p-2 -mx-2 rounded-md transition-colors"
                        >
                            <h4 className="font-medium text-sm text-slate-900 dark:text-slate-100 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                                {item.title}
                            </h4>
                            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                                <span className="font-semibold text-slate-600 dark:text-slate-300">{item.source}</span>
                                <span className="flex items-center gap-1">
                                    {new Date(item.published).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </span>
                            </div>
                        </a>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

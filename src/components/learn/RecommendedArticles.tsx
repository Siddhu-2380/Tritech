"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

export function RecommendedArticles() {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Recommended For You</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <Card className="hover:border-teal-500 transition-colors cursor-pointer group">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-teal-600 dark:text-teal-400 mb-1">Investing</p>
                            <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">Start Investing with ₹500</h4>
                        </div>
                        <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-teal-500 transition-colors" />
                    </CardContent>
                </Card>
                <Card className="hover:border-teal-500 transition-colors cursor-pointer group">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-1">Psychology</p>
                            <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">The Psychology of Money</h4>
                        </div>
                        <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-teal-500 transition-colors" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

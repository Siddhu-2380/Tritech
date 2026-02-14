"use client";

import { Button } from "@/components/ui/button";
import { Plus, Target, PieChart, FileText } from "lucide-react";
import Link from "next/link";

export function PremiumQuickActions() {
    return (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <Link href="/growth-simulator">
                <Button variant="outline" className="h-auto flex-col items-center gap-2 p-4 min-w-[100px] border-slate-200 hover:border-teal-500 hover:bg-teal-50 dark:border-slate-800 dark:hover:bg-teal-900/20 transition-all">
                    <div className="p-2 bg-teal-100 rounded-full dark:bg-teal-900/50">
                        <Plus className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <span className="text-xs font-medium">New Investment</span>
                </Button>
            </Link>

            <Link href="/goal-planner">
                <Button variant="outline" className="h-auto flex-col items-center gap-2 p-4 min-w-[100px] border-slate-200 hover:border-blue-500 hover:bg-blue-50 dark:border-slate-800 dark:hover:bg-blue-900/20 transition-all">
                    <div className="p-2 bg-blue-100 rounded-full dark:bg-blue-900/50">
                        <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-xs font-medium">Set Goal</span>
                </Button>
            </Link>

            <Link href="/financial-health">
                <Button variant="outline" className="h-auto flex-col items-center gap-2 p-4 min-w-[100px] border-slate-200 hover:border-purple-500 hover:bg-purple-50 dark:border-slate-800 dark:hover:bg-purple-900/20 transition-all">
                    <div className="p-2 bg-purple-100 rounded-full dark:bg-purple-900/50">
                        <PieChart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-xs font-medium">Analyze</span>
                </Button>
            </Link>

            <Link href="/learn">
                <Button variant="outline" className="h-auto flex-col items-center gap-2 p-4 min-w-[100px] border-slate-200 hover:border-amber-500 hover:bg-amber-50 dark:border-slate-800 dark:hover:bg-amber-900/20 transition-all">
                    <div className="p-2 bg-amber-100 rounded-full dark:bg-amber-900/50">
                        <FileText className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <span className="text-xs font-medium">Report</span>
                </Button>
            </Link>
        </div>
    );
}

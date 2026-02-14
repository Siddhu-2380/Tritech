"use client";

import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Wallet, TrendingUp, PiggyBank } from "lucide-react";

export function ProjectionSummaryCards() {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-2">
                    <div className="p-3 bg-blue-100 rounded-full dark:bg-blue-900/30">
                        <Wallet className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">Total Invested</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white">{formatCurrency(600000)}</p>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-2">
                    <div className="p-3 bg-green-100 rounded-full dark:bg-green-900/30">
                        <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">Total Returns</p>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">+{formatCurrency(54628)}</p>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-2">
                    <div className="p-3 bg-teal-100 rounded-full dark:bg-teal-900/30">
                        <PiggyBank className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">Total Value</p>
                        <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">{formatCurrency(654628)}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle, Target, RefreshCw } from "lucide-react";
import Link from "next/link";

export function QuickActions() {
    return (
        <div className="flex flex-wrap gap-4">
            <Button asChild className="gap-2">
                <Link href="/add-transaction">
                    <PlusCircle className="h-4 w-4" />
                    Add Transaction
                </Link>
            </Button>
            <Button variant="outline" asChild className="gap-2">
                <Link href="/goal-planner">
                    <Target className="h-4 w-4" />
                    New Goal
                </Link>
            </Button>
            <Button variant="outline" asChild className="gap-2">
                <Link href="/growth-simulator">
                    <RefreshCw className="h-4 w-4" />
                    Run Simulation
                </Link>
            </Button>
        </div>
    );
}

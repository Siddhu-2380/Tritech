"use client";

import { Badge } from "@/components/ui/badge";

interface RiskBadgeProps {
    level: "Low" | "Medium" | "High";
}

export function RiskBadge({ level }: RiskBadgeProps) {
    let colorClass = "";

    switch (level) {
        case "Low":
            colorClass = "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
            break;
        case "Medium":
            colorClass = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
            break;
        case "High":
            colorClass = "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
            break;
    }

    return (
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colorClass}`}>
            Risk Level: {level}
        </div>
    );
}

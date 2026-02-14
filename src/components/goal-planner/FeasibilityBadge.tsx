"use client";

interface FeasibilityBadgeProps {
    level: "Easy" | "Moderate" | "Difficult";
}

export function FeasibilityBadge({ level }: FeasibilityBadgeProps) {
    let colorClass = "";

    switch (level) {
        case "Easy":
            colorClass = "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
            break;
        case "Moderate":
            colorClass = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
            break;
        case "Difficult":
            colorClass = "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
            break;
    }

    return (
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colorClass}`}>
            Feasibility: {level}
        </div>
    );
}

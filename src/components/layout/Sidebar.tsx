"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Activity,
    TrendingUp,
    Target,
    AlertTriangle,
    Bot,
    BookOpen,
    Gamepad2
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Financial Health", href: "/financial-health", icon: Activity },
    { name: "Growth Simulator", href: "/growth-simulator", icon: TrendingUp },
    { name: "Games", href: "/games", icon: Gamepad2 },
    { name: "Goal Planner", href: "/goal-planner", icon: Target },
    { name: "Consequence Simulator", href: "/consequence-simulator", icon: AlertTriangle },
    { name: "AI Finance Coach", href: "/ai-coach", icon: Bot },
    { name: "Learn Finance", href: "/learn", icon: BookOpen },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-full w-64 flex-col border-r bg-slate-900 text-white">
            <div className="flex h-16 items-center justify-center border-b border-slate-800 px-4">
                <h1 className="text-2xl font-bold text-teal-400">FinGrow</h1>
            </div>
            <nav className="flex-1 space-y-1 px-2 py-4">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-teal-600 text-white"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            )}
                        >
                            <item.icon
                                className={cn(
                                    "mr-3 h-5 w-5 flex-shrink-0",
                                    isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                                )}
                                aria-hidden="true"
                            />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
            <div className="border-t border-slate-800 p-4">
                <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-teal-500"></div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-white">User Name</p>
                        <p className="text-xs text-slate-400">View Profile</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

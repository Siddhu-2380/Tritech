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
    Gamepad2,
    LogOut,
    Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Financial Health", href: "/financial-health", icon: Activity },
    { name: "Growth Simulator", href: "/growth-simulator", icon: TrendingUp },
    { name: "Games", href: "/games", icon: Gamepad2 },
    { name: "Goal Planner", href: "/goal-planner", icon: Target },
    { name: "Consequence Sim", href: "/consequence-simulator", icon: AlertTriangle },
    { name: "AI Finance Coach", href: "/ai-coach", icon: Bot },
    { name: "Learn Finance", href: "/learn", icon: BookOpen },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-full w-[260px] flex-col bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border-r border-slate-800/50">
            {/* Logo */}
            <div className="flex h-16 items-center gap-2.5 px-6 border-b border-slate-800/50">
                <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
                    <TrendingUp className="h-4.5 w-4.5 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                    FinGrow
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 px-3 py-5 overflow-y-auto custom-scrollbar">
                <p className="px-3 mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    Menu
                </p>
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition-all duration-200",
                                isActive
                                    ? "bg-gradient-to-r from-teal-600/90 to-teal-500/90 text-white shadow-md shadow-teal-500/20"
                                    : "text-slate-400 hover:bg-slate-800/60 hover:text-white"
                            )}
                        >
                            <item.icon
                                className={cn(
                                    "h-[18px] w-[18px] flex-shrink-0 transition-colors duration-200",
                                    isActive ? "text-white" : "text-slate-500 group-hover:text-slate-300"
                                )}
                                aria-hidden="true"
                            />
                            {item.name}
                            {isActive && (
                                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-white/80" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* User Profile */}
            <div className="border-t border-slate-800/50 p-4">
                <div className="flex items-center gap-3 rounded-xl p-2 hover:bg-slate-800/40 transition-colors cursor-pointer">
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-sm font-bold text-white shadow-md shadow-teal-500/20">
                        A
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">Alex</p>
                        <p className="text-[11px] text-slate-500">Level 3 Investor</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { Bell, Search, User } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200/60 bg-white/70 backdrop-blur-xl px-6 dark:border-slate-800/60 dark:bg-slate-950/70">
            <div className="flex items-center">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        type="search"
                        placeholder="Search features..."
                        className="h-10 w-72 rounded-xl border border-slate-200/80 bg-slate-50/80 pl-10 pr-4 text-sm outline-none transition-all duration-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:bg-white dark:border-slate-700/80 dark:bg-slate-800/50 dark:text-white dark:focus:bg-slate-800 dark:focus:border-teal-400"
                    />
                </div>
            </div>
            <div className="flex items-center gap-3">
                <button className="relative rounded-xl p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200">
                    <Bell className="h-[18px] w-[18px] text-slate-500 dark:text-slate-400" />
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-950"></span>
                </button>
                <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
                <button className="flex items-center gap-2.5 rounded-xl p-1.5 pr-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200">
                    <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-sm">
                        <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 hidden sm:inline">Alex</span>
                </button>
            </div>
        </header>
    );
}

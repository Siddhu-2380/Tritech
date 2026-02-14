"use client";

import { Bell, Search, User } from "lucide-react";

export function Navbar() {
    return (
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center">
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                        type="search"
                        placeholder="Search..."
                        className="h-9 w-64 rounded-md border border-slate-200 bg-slate-50 pl-9 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className="relative rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <Bell className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                    <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500"></span>
                </button>
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
                        <User className="h-5 w-5 text-teal-600" />
                    </div>
                </div>
            </div>
        </header>
    );
}

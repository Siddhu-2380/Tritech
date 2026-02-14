"use client";

import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-slate-50 dark:bg-slate-950">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Navbar />
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
                {/* Footer is optional inside the scrolling area or fixed at bottom */}
                {/* <Footer /> */}
            </div>
        </div>
    );
}

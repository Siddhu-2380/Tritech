"use client";

import { GamificationProvider } from "@/hooks/useGamification";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <GamificationProvider>
            {children}
        </GamificationProvider>
    );
}

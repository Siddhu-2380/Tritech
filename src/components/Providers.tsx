"use client";

import { GamificationProvider } from "@/hooks/useGamification";
import { FinancialDataProvider } from "@/hooks/useFinancialData";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <GamificationProvider>
            <FinancialDataProvider>
                {children}
            </FinancialDataProvider>
        </GamificationProvider>
    );
}

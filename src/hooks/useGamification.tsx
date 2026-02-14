"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { updateXP, XPResponse } from "@/services/api";

interface GamificationState {
    xp: number;
    level: number;
    xpToNextLevel: number;
    badge: string;
    lastMessage: string | null;
    showPopup: boolean;
}

interface GamificationContextType extends GamificationState {
    awardXP: (actionType: string) => Promise<void>;
    dismissPopup: () => void;
}

const GamificationContext = createContext<GamificationContextType | null>(null);

export function useGamification() {
    const ctx = useContext(GamificationContext);
    if (!ctx) throw new Error("useGamification must be used within GamificationProvider");
    return ctx;
}

export function GamificationProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<GamificationState>({
        xp: 0,
        level: 1,
        xpToNextLevel: 100,
        badge: "Novice",
        lastMessage: null,
        showPopup: false
    });

    // Load XP from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem("fingrow_xp");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setState(prev => ({ ...prev, ...parsed, showPopup: false, lastMessage: null }));
            } catch { /* ignore */ }
        }
    }, []);

    // Save XP to localStorage on change
    useEffect(() => {
        localStorage.setItem("fingrow_xp", JSON.stringify({
            xp: state.xp,
            level: state.level,
            xpToNextLevel: state.xpToNextLevel,
            badge: state.badge
        }));
    }, [state.xp, state.level, state.xpToNextLevel, state.badge]);

    const awardXP = useCallback(async (actionType: string) => {
        try {
            const result: XPResponse = await updateXP({
                action_type: actionType,
                current_xp: state.xp
            });

            const leveledUp = result.level > state.level;

            setState({
                xp: result.new_xp,
                level: result.level,
                xpToNextLevel: result.xp_to_next_level,
                badge: result.badge,
                lastMessage: leveledUp
                    ? `Level Up! You are now Level ${result.level} - ${result.badge}!`
                    : result.message,
                showPopup: true
            });

            // Auto-dismiss popup after 3 seconds
            setTimeout(() => {
                setState(prev => ({ ...prev, showPopup: false }));
            }, 3000);
        } catch (err) {
            console.error("XP update failed:", err);
        }
    }, [state.xp, state.level]);

    const dismissPopup = useCallback(() => {
        setState(prev => ({ ...prev, showPopup: false }));
    }, []);

    return (
        <GamificationContext.Provider value={{ ...state, awardXP, dismissPopup }}>
            {children}
        </GamificationContext.Provider>
    );
}

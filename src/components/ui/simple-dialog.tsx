import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

// Simple Custom Dialog to avoid Radix dependency issues if not installed
interface DialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    children: React.ReactNode
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="fixed inset-0" onClick={() => onOpenChange(false)} />
            {children}
        </div>
    )
}

export function DialogContent({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn(
            "relative z-50 w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-950 animate-in zoom-in-95 duration-200",
            className
        )}>
            <button
                onClick={(e) => {
                    // We need to find the parent Dialog and close it, but for simplicity in this custom implementation
                    // we rely on the overlay click or explicit close buttons. 
                    // Actually, let me add a close button here if I can Context it. 
                    // For now, I'll just put an absolute close button.
                    const closeEvent = new CustomEvent('close-dialog', { bubbles: true });
                    e.currentTarget.dispatchEvent(closeEvent);
                }}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800"
            >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </button>
            {children}
        </div>
    )
}

export function DialogHeader({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}>
            {children}
        </div>
    )
}

export function DialogTitle({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)}>
            {children}
        </h3>
    )
}

export function DialogDescription({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={cn("text-sm text-slate-500 dark:text-slate-400", className)}>
            {children}
        </p>
    )
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TrendingUp, Mail, Lock, Eye, EyeOff, ArrowRight, User, Zap } from "lucide-react";

export default function SignupPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise((r) => setTimeout(r, 800));
        router.push("/");
    };

    const handleGuest = () => {
        router.push("/");
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Panel — Branding */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                {/* Animated Background Shapes */}
                <div className="absolute inset-0">
                    <div className="absolute top-32 right-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-32 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
                    <div className="absolute top-1/3 left-1/2 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "0.5s" }}></div>
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }}></div>

                <div className="relative z-10 flex flex-col justify-center items-center px-16 text-center">
                    {/* Logo */}
                    <div className="flex items-center gap-3 mb-12">
                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-2xl shadow-teal-500/30">
                            <TrendingUp className="h-7 w-7 text-white" />
                        </div>
                        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                            FinGrow
                        </h1>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                        Start Your Financial<br />Growth Journey
                    </h2>
                    <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-10">
                        Join thousands of learners mastering personal finance through gamification and AI-powered insights.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6">
                        {[
                            { value: "10K+", label: "Active Users" },
                            { value: "50+", label: "Finance Games" },
                            { value: "98%", label: "Satisfaction" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Panel — Signup Form */}
            <div className="flex-1 flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
                <div className="w-full max-w-md space-y-8 animate-fade-in">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center gap-2.5 justify-center mb-4">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
                            <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                            FinGrow
                        </h1>
                    </div>

                    {/* Header */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                            Create account
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">
                            Begin your journey to financial freedom
                        </p>
                    </div>

                    {/* Guest Access */}
                    <button
                        onClick={handleGuest}
                        className="w-full flex items-center justify-center gap-3 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 hover:brightness-110 transition-all duration-200 active:scale-[0.98]"
                    >
                        <Zap className="h-5 w-5" />
                        Continue as Guest
                        <ArrowRight className="h-4 w-4" />
                    </button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white dark:bg-slate-950 px-3 text-slate-400 font-medium">or create an account</span>
                        </div>
                    </div>

                    {/* Signup Form */}
                    <form onSubmit={handleSignup} className="space-y-5">
                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Alex Johnson"
                                    className="w-full h-12 rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition-all duration-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:border-teal-400"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full h-12 rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition-all duration-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:border-teal-400"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full h-12 rounded-xl border border-slate-200 bg-white pl-11 pr-12 text-sm outline-none transition-all duration-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:border-teal-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/30 hover:brightness-110 transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    Create Account
                                    <ArrowRight className="h-4 w-4" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                        Already have an account?{" "}
                        <Link href="/login" className="text-teal-600 dark:text-teal-400 font-semibold hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

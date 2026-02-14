"use client";

import { PremiumOverviewCards } from "@/components/dashboard/PremiumOverviewCards";
import { PremiumQuickActions } from "@/components/dashboard/PremiumQuickActions";
import { RecentActivityCard } from "@/components/dashboard/RecentActivityCard";
import { GrowthProjectionChart } from "@/components/growth-simulator/GrowthProjectionChart";
import { UserLevelCard } from "@/components/dashboard/UserLevelCard";
import { AchievementBadges } from "@/components/dashboard/AchievementBadges";
import { GamificationCard } from "@/components/dashboard/GamificationCard";
import { StreakTracker } from "@/components/dashboard/StreakTracker";
import { WeeklyChallengeCard } from "@/components/dashboard/WeeklyChallengeCard";
import { FinancialFreedomProgress } from "@/components/dashboard/FinancialFreedomProgress";
import { RankMeter } from "@/components/dashboard/RankMeter";
import { Button } from "@/components/ui/button";
import { Bot, Bell } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Hello, Alex 👋
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Here's your financial progress for today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-4 w-4 text-slate-600" />
          </Button>
          <Button className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
            Download Report
          </Button>
        </div>
      </div>

      {/* Your Progress - Gamification Card */}
      <GamificationCard />

      {/* Gamification Top Row */}
      <div className="grid gap-6 md:grid-cols-12">
        {/* Main XP Card */}
        <div className="md:col-span-8 lg:col-span-6">
          <UserLevelCard />
        </div>
        {/* Streak & Challenge */}
        <div className="md:col-span-4 lg:col-span-3 space-y-4">
          <StreakTracker />
          <WeeklyChallengeCard />
        </div>
        {/* Rank Meter (Hidden on small screens, shown on large) */}
        <div className="hidden lg:block lg:col-span-3">
          <RankMeter />
        </div>
      </div>

      {/* Quick Actions */}
      <PremiumQuickActions />

      {/* Overview Cards (Net Worth etc) */}
      <PremiumOverviewCards />

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-12">

        {/* Left Column: Charts & Freedom */}
        <div className="lg:col-span-8 space-y-6">
          {/* Financial Freedom Progress */}
          <FinancialFreedomProgress />

          {/* Reusing Growth Projection Chart for Dashboard View */}
          <div className="bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 h-[400px]">
            <h3 className="text-lg font-semibold mb-4 px-2">Net Worth Growth</h3>
            <GrowthProjectionChart data={[]} />
          </div>
        </div>

        {/* Right Column: Badges & Activity */}
        <div className="lg:col-span-4 space-y-6">
          {/* Achievement Badges */}
          <AchievementBadges />

          {/* Recent Activity */}
          <div className="h-[400px]">
            <RecentActivityCard />
          </div>

          {/* AI Coach Insight Card */}
          <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-teal-50 to-white p-6 shadow-sm dark:from-teal-900/20 dark:to-slate-950 dark:border-teal-900/50">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-100 rounded-full dark:bg-teal-900/50">
                <Bot className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  AI Coach Insight
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  "You're crushing it! 5-day streak and a new badge unlocked. Improving your savings ratio this week will get you to the next level."
                </p>
                <Button variant="link" className="p-0 h-auto text-teal-600 dark:text-teal-400 font-medium">
                  Ask AI Coach &rarr;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { PremiumQuickActions } from "@/components/dashboard/PremiumQuickActions";
import { RecentActivityCard } from "@/components/dashboard/RecentActivityCard";
import { UserLevelCard } from "@/components/dashboard/UserLevelCard";
import { AchievementBadges } from "@/components/dashboard/AchievementBadges";
import { GamificationCard } from "@/components/dashboard/GamificationCard";
import { StreakTracker } from "@/components/dashboard/StreakTracker";
import { WeeklyChallengeCard } from "@/components/dashboard/WeeklyChallengeCard";
import { FinancialFreedomProgress } from "@/components/dashboard/FinancialFreedomProgress";
import { RankMeter } from "@/components/dashboard/RankMeter";
import { DashboardSummaryCards } from "@/components/dashboard/DashboardSummaryCards";
import { FinancialScoreSummaryCard } from "@/components/dashboard/FinancialScoreSummaryCard";
import { FinancialArticles } from "@/components/dashboard/FinancialArticles";
import { PlayAndEarnCard } from "@/components/dashboard/PlayAndEarnCard";
import { Button } from "@/components/ui/button";
import { Bot, Bell } from "lucide-react";
import { useFinancialData } from "@/hooks/useFinancialData";

export default function DashboardPage() {
  const { financialScore, riskLevel, totalInvested, totalReturns, activeGoalsCount } = useFinancialData();

  return (
    <div className="space-y-8 p-4 md:p-8 lg:p-10 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Hello, Alex 👋
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Here&apos;s your financial progress for today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" className="rounded-xl">
            <Bell className="h-4 w-4 text-slate-600" />
          </Button>
          <Button className="shadow-md">
            Download Report
          </Button>
        </div>
      </div>

      {/* Top Section: Score & XP */}
      <div className="grid gap-6 md:grid-cols-12 animate-slide-up">
        <div className="md:col-span-4 lg:col-span-4">
          <FinancialScoreSummaryCard score={financialScore} risk={riskLevel} />
        </div>
        <div className="md:col-span-8 lg:col-span-8">
          <GamificationCard />
        </div>
      </div>

      {/* Middle Section: Summary Stats */}
      <div className="animate-slide-up-delay-1">
        <DashboardSummaryCards
          totalInvested={totalInvested}
          totalReturns={totalReturns}
          activeGoals={activeGoalsCount}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-12 animate-slide-up-delay-2">
        <div className="lg:col-span-8 space-y-6">
          <PremiumQuickActions />
          <PlayAndEarnCard />
          <FinancialFreedomProgress />
        </div>

        <div className="lg:col-span-4 space-y-6">
          <StreakTracker />
          <WeeklyChallengeCard />
        </div>
      </div>

      {/* Bottom Section: Articles */}
      <div className="animate-slide-up-delay-3">
        <FinancialArticles />
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { CategoryFilter } from "@/components/learn/CategoryFilter";
import { ArticleCard } from "@/components/learn/ArticleCard";
import { ArticleDetailModal } from "@/components/learn/ArticleDetailModal";
import { ProgressTracker } from "@/components/learn/ProgressTracker";
import { RecommendedArticles } from "@/components/learn/RecommendedArticles";

// Mock Data
type Difficulty = "Beginner" | "Intermediate" | "Advanced";
interface Article {
    id: number;
    title: string;
    category: string;
    readTime: string;
    difficulty: Difficulty;
    description: string;
    content: string;
}

const articles: Article[] = [
    {
        id: 1,
        title: "Understanding the 50-30-20 Rule",
        category: "Budgeting",
        readTime: "5 min read",
        difficulty: "Beginner",
        description: "Learn how to divide your income into Needs (50%), Wants (30%), and Savings (20%) to build financial discipline.",
        content: `The 50-30-20 rule is a simple budgeting method that helps you manage your monthly income effectively.

        50% – Needs:
        This includes essential expenses such as rent, groceries, utilities, transport, and insurance. These are non-negotiable costs that you must cover to maintain a basic standard of living.

        30% – Wants:
        These are lifestyle expenses like dining out, entertainment, subscriptions, and shopping. While these are not essential, they are important for your happiness and well-being. The key is to enjoy them within this limit.

        20% – Savings:
        This portion should go towards investments, emergency funds, and long-term goals. Saving consistently—even a small amount—builds a safety net and helps you achieve financial freedom over time.

        By following this rule consistently, you create balance between enjoying life today and building financial security for tomorrow. It simplifies decision-making and ensures you aren't overspending in any one area.`
    },
    {
        id: 2,
        title: "What is SIP and How It Works?",
        category: "Investing",
        readTime: "6 min read",
        difficulty: "Beginner",
        description: "Understand how Systematic Investment Plans help you invest small amounts monthly and benefit from compounding.",
        content: `A Systematic Investment Plan (SIP) is a method of investing in mutual funds where you invest a fixed amount regularly—typically monthly.

        It works on the principle of rupee cost averaging. When the market is high, you buy fewer units, and when the market is low, you buy more units. Over time, this averages out the cost of your investment and reduces market risk.

        SIPs also instill financial discipline because the money is automatically deducted from your bank account. You don't need to time the market; you just need to stay consistent.

        The power of compounding is the biggest advantage of SIPs. The returns you earn are reinvested, generating further returns. Over 10-20 years, even a small monthly investment of ₹5,000 can grow into a significant corpus.`
    },
    {
        id: 3,
        title: "How to Build a 6-Month Emergency Fund",
        category: "Emergency Planning",
        readTime: "7 min read",
        difficulty: "Intermediate",
        description: "Discover why emergency savings are essential and how to gradually build financial security.",
        content: `An emergency fund is a stash of money set aside to cover the financial surprises life throws your way. These unexpected events can be stressful and costly.

        Ideally, your emergency fund should cover 3 to 6 months of living expenses. This includes rent, food, utilities, loan EMIs, and insurance premiums.

        Start small if you have to. Aim for one month of expenses first. Automate your savings transfer so it happens before you have a chance to spend the money.

        Keep this money in a high-yield savings account or a liquid fund where it is easily accessible but separate from your daily spending account. This ensures you don't dip into it for non-emergencies.`
    },
    {
        id: 4,
        title: "Good Debt vs Bad Debt",
        category: "Debt",
        readTime: "4 min read",
        difficulty: "Beginner",
        description: "Learn the difference between productive debt and harmful debt that damages your finances.",
        content: `Not all debt is created equal. Understanding the difference between good and bad debt is crucial for financial health.

        Good Debt:
        This is debt that helps you build wealth or increase your income over time. Examples include:
        - Education loans (investing in your skills/future income)
        - Home loans (building an asset that appreciates)
        - Business loans (generating revenue)

        Bad Debt:
        This is debt used to purchase depreciating assets or for consumption. Examples include:
        - High-interest credit card debt
        - Personal loans for vacations or luxury items
        - Payday loans

        The goal is to minimize bad debt and leverage good debt responsibly to grow your net worth.`
    },
    {
        id: 5,
        title: "How Compounding Builds Wealth",
        category: "Investing",
        readTime: "6 min read",
        difficulty: "Intermediate",
        description: "Explore how money grows exponentially over time when returns are reinvested.",
        content: `Compound interest is often called the eighth wonder of the world. It is the interest on interest.

        When you invest, you earn returns. In the next period, you earn returns on your initial principal PLUS the returns you've already earned. This cycle repeats, creating a snowball effect.

        Time is the most critical factor in compounding. The earlier you start, the more time your money has to grow.

        For example, investing ₹5,000/month for 10 years at 12% returns yields ~₹11.6 Lakhs. But continuing for another 10 years (total 20 years) yields ~₹50 Lakhs! The last 10 years generate 4x the wealth of the first 10, purely due to compounding.`
    },
    {
        id: 6,
        title: "Top 5 Financial Mistakes Youth Make",
        category: "Financial Freedom",
        readTime: "5 min read",
        difficulty: "Beginner",
        description: "Avoid common money mistakes like overspending, ignoring savings, and taking unnecessary loans.",
        content: `Your 20s are a critical time for setting up your financial future. Avoid these common traps:

        1. Lifestyle Inflation: Increasing your spending as soon as you get a raise. Instead, increase your savings rate.
        2. Ignoring Emergency Funds: Relying on credit cards for emergencies starts a debt cycle.
        3. Waiting to Invest: Thinking you need "more money" to start. Start with whatever you have.
        4. Not Tracking Expenses: Small leaks sink great ships. Use an app or spreadsheet to track where your money goes.
        5. Taking Bad Debt: Buying latest gadgets or vacations on EMI. If you can't pay cash for a luxury, you can't afford it yet.

        Fixing these mistakes early puts you on the fast track to financial freedom.`
    }
];

const categories = ["All", "Budgeting", "Investing", "Debt", "Emergency Planning", "Financial Freedom"];

export default function LearnPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredArticles = activeCategory === "All"
        ? articles
        : articles.filter(article => article.category === activeCategory);

    const handleReadMore = (article: Article) => {
        setSelectedArticle(article);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedArticle(null), 300); // Wait for transition if we had one, but keeping it simple
    };

    return (
        <div className="space-y-8 p-6 md:p-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                    FinGrow Learning Hub
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                    Master money management with practical financial knowledge.
                </p>
            </div>

            {/* Progress Tracker */}
            <ProgressTracker />

            {/* Main Content */}
            <div className="space-y-6">
                {/* Filters */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <CategoryFilter
                        categories={categories}
                        activeCategory={activeCategory}
                        onSelectCategory={setActiveCategory}
                    />
                </div>

                {/* Articles Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredArticles.map((article) => (
                        <ArticleCard
                            key={article.id}
                            article={article}
                            onReadMore={handleReadMore}
                        />
                    ))}
                </div>
            </div>

            {/* Recommended Section */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <RecommendedArticles />
            </div>

            {/* Article Detail Modal */}
            <ArticleDetailModal
                article={selectedArticle}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
}

"use client";

import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

export function CategoryFilter({ categories, activeCategory, onSelectCategory }: CategoryFilterProps) {
    return (
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
                <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => onSelectCategory(category)}
                    className={`whitespace-nowrap rounded-full px-6 transition-all ${activeCategory === category
                            ? "bg-teal-600 text-white hover:bg-teal-700"
                            : "border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-900"
                        }`}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
}

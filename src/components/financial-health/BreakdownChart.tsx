"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
    { name: 'Needs', value: 50, color: '#0f766e' }, // teal-700
    { name: 'Wants', value: 30, color: '#f59e0b' }, // amber-500
    { name: 'Savings', value: 20, color: '#0d9488' }, // teal-600
];

export function BreakdownChart() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Financial Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value: any) => [`${value}%`, 'Allocation']}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Legend verticalAlign="bottom" height={36} iconType="circle" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-4 text-center text-sm text-slate-500">
                    <p>Ideal: 50% Needs, 30% Wants, 20% Savings</p>
                </div>
            </CardContent>
        </Card>
    );
}

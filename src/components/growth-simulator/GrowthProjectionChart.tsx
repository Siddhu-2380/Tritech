"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatCurrency } from "@/lib/utils";
import { YearlyProjection } from "@/services/api";

interface GrowthProjectionChartProps {
    data: YearlyProjection[];
}

export function GrowthProjectionChart({ data }: GrowthProjectionChartProps) {
    // Transform API data for Recharts if needed, or use directly if keys match
    // API returns: { year: int, invested: float, value: float }
    // We want to graph 'invested' vs 'value'

    // Safety check for empty data
    const chartData = data && data.length > 0 ? data : [];

    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Growth Projection</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                            <XAxis
                                dataKey="year"
                                stroke="#64748b"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `Yr ${value}`}
                            />
                            <YAxis
                                stroke="#64748b"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `₹${value / 1000}k`}
                            />
                            <Tooltip
                                formatter={(value: any) => [formatCurrency(value), 'Amount']}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Legend verticalAlign="top" height={36} />
                            <Line type="monotone" dataKey="investment_value" name="With Investment" stroke="#0d9488" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                            <Line type="monotone" dataKey="principal_only" name="Without Investing" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}

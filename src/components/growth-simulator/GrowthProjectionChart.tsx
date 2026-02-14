"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatCurrency } from "@/lib/utils";

const data = [
    { year: 'Year 1', withInvestment: 120000 + 7200, withoutInvestment: 120000 },
    { year: 'Year 2', withInvestment: 240000 + 15864, withoutInvestment: 240000 },
    { year: 'Year 3', withInvestment: 360000 + 26368, withoutInvestment: 360000 },
    { year: 'Year 4', withInvestment: 480000 + 39132, withoutInvestment: 480000 },
    { year: 'Year 5', withInvestment: 600000 + 54628, withoutInvestment: 600000 },
];

export function GrowthProjectionChart() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Growth Projection (5 Years)</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                            <XAxis dataKey="year" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
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
                            <Line type="monotone" dataKey="withInvestment" name="With Investment" stroke="#0d9488" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                            <Line type="monotone" dataKey="withoutInvestment" name="Without Investment" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}

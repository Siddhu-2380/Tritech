"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

const tableData = [
    { year: 1, invested: 120000, returns: 7200, total: 127200 },
    { year: 2, invested: 240000, returns: 15864, total: 255864 },
    { year: 3, invested: 360000, returns: 26368, total: 386368 },
    { year: 4, invested: 480000, returns: 39132, total: 519132 },
    { year: 5, invested: 600000, returns: 54628, total: 654628 },
];

export function BreakdownTable() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Yearly Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-900 dark:text-slate-400">
                        <tr>
                            <th className="px-4 py-3 rounded-l-lg">Year</th>
                            <th className="px-4 py-3">Invested Amount</th>
                            <th className="px-4 py-3">Returns Earned</th>
                            <th className="px-4 py-3 rounded-r-lg">Total Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={row.year} className="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                                <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{row.year}</td>
                                <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{formatCurrency(row.invested)}</td>
                                <td className="px-4 py-3 text-green-600 dark:text-green-400">+{formatCurrency(row.returns)}</td>
                                <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">{formatCurrency(row.total)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardContent>
        </Card>
    );
}

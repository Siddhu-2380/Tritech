"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export function RiskWarningCard() {
    return (
        <Card className="border-l-4 border-l-red-500 bg-red-50 dark:bg-red-900/10 shadow-sm">
            <CardHeader className="pb-2">
                <CardTitle className="text-red-700 dark:text-red-400 flex items-center gap-2 text-base">
                    <AlertCircle className="h-5 w-5" />
                    Risk Warning
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-red-600 dark:text-red-300">
                    This decision significantly increases your debt-to-income ratio and reduces your emergency coverage. Consider alternative options or delay this purchase.
                </p>
            </CardContent>
        </Card>
    );
}

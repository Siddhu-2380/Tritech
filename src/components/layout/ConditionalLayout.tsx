"use client";

import { usePathname } from "next/navigation";
import { DashboardLayout } from "./DashboardLayout";

const AUTH_ROUTES = ["/login", "/signup"];

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAuthPage = AUTH_ROUTES.includes(pathname);

    if (isAuthPage) {
        return <>{children}</>;
    }

    return <DashboardLayout>{children}</DashboardLayout>;
}

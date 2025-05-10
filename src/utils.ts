import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { enUS, cs } from "date-fns/locale";
import type { DateRange } from "@/types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatJobDateRange({
    from,
    to,
    present = "Present",
    locale = "en",
}: DateRange & { present?: string; locale?: "en" | "cs" }): string {
    const fromYear = from.getFullYear();
    const toYear = to?.getFullYear();

    if (!to) {
        return `${fromYear} — ${present}`;
    }

    if (fromYear !== toYear) {
        return `${fromYear} — ${toYear}`;
    }

    const fromMonth = format(from, "MMM", {
        locale: locale === "cs" ? cs : enUS,
    }).toLowerCase();
    const toMonth = format(to, "MMM", {
        locale: locale === "cs" ? cs : enUS,
    }).toLowerCase();
    return `${fromMonth} — ${toMonth} ${fromYear}`;
}

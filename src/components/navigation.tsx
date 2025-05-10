"use client";
import { useEffect, useState } from "react";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";

const items = [
    { href: "#about", labelKey: "about" },
    { href: "#experience", labelKey: "experience" },
    { href: "#projects", labelKey: "projects" },
] as const;

export function Navigation({
    className,
    classNameItem,
    classNameList,
    ...props
}: Omit<React.ComponentProps<"nav">, "children"> & {
    classNameList?: string;
    classNameItem?: string;
}) {
    const [activeId, setActiveId] = useState("#about");
    const t = useTranslations("nav");

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const visibleEntries = entries
                    .filter(entry => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top,
                    );

                if (visibleEntries.length > 0) {
                    setActiveId(`#${visibleEntries[0].target.id}`);
                }
            },
            {
                rootMargin: "0px 0px -80% 0px",
                threshold: 0.1,
            },
        );

        const sectionIds = items.map(item => item.href.replace("#", ""));
        const elements = sectionIds
            .map(id => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <nav
            aria-label={t("aria_label")}
            className={cn("hidden lg:block", className)}
            {...props}
        >
            <ul className={cn("w-max", classNameList)}>
                {items.map(item => {
                    const isActive = activeId === item.href;

                    return (
                        <li key={item.labelKey}>
                            <a
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-4 py-2 text-sm font-semibold outline-offset-4 outline-zinc-100/95 transition-colors hover:text-zinc-100 focus-visible:text-zinc-100 focus-visible:outline-2 hover:[&>span:first-child]:w-16 hover:[&>span:first-child]:bg-zinc-100 focus-visible:[&>span:first-child]:w-16 focus-visible:[&>span:first-child]:bg-zinc-100",
                                    isActive
                                        ? "text-zinc-100"
                                        : "text-zinc-400/95",
                                    classNameItem,
                                )}
                            >
                                <span
                                    className={cn(
                                        "h-px shrink-0 bg-zinc-400/95 transition-all duration-300",
                                        isActive ? "w-16 bg-zinc-100" : "w-8",
                                    )}
                                />
                                <span>{t(item.labelKey)}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

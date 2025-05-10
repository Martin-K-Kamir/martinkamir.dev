"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/select";
import { cn } from "@/utils";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const languages = {
    en: {
        value: "en",
        label: "English",
    },
    cs: {
        value: "cs",
        label: "Čeština",
    },
};

export function LangSelect({
    className,
    classNameContent,
    variant = "default",
}: {
    className?: string;
    classNameContent?: string;
    variant?: "default" | "circle";
}) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    return (
        <Select
            onValueChange={value => {
                startTransition(() => {
                    router.replace(`/${value}`);
                });
            }}
            value={localActive}
        >
            <SelectTrigger
                className={cn(
                    "relative w-28",
                    variant === "circle" &&
                        "!leading-1 flex !size-10 items-center justify-center rounded-full text-xs font-semibold uppercase text-zinc-50 hover:bg-zinc-800 [&>svg]:hidden",
                    className,
                )}
                disabled={isPending}
            >
                {variant === "default"
                    ? languages[localActive].label
                    : localActive}
            </SelectTrigger>
            <SelectContent className={cn("w-28 min-w-28", classNameContent)}>
                {Object.values(languages).map(({ value, label }) => (
                    <SelectItem key={value} value={value}>
                        {label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

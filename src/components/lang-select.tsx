"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/select";
import { cn } from "@/utils";
import { useEffect, useState } from "react";

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
    const [lang, setLang] = useState<keyof typeof languages>("en");

    return (
        <Select
            onValueChange={value => setLang(value as keyof typeof languages)}
            value={lang}
        >
            <SelectTrigger
                className={cn(
                    "relative w-28",
                    variant === "circle" &&
                        "flex !size-10 items-center justify-center rounded-full text-xs !leading-1 font-semibold text-zinc-50 uppercase hover:bg-zinc-800 [&>svg]:hidden",
                    className,
                )}
            >
                {variant === "default" ? languages[lang].label : lang}
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

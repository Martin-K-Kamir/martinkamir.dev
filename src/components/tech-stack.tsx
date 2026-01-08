import { useTranslations } from "next-intl";
import React from "@/assets/icons/react.svg";
import Typescript from "@/assets/icons/typescript.svg";
import Nextjs from "@/assets/icons/nextjs.svg";
import Tailwindcss from "@/assets/icons/tailwindcss.svg";
import TanstackQuery from "@/assets/icons/tanstack-query.svg";
import { cn } from "@/utils";

const items = [
    { icon: <React />, key: "react" },
    { icon: <Typescript />, key: "typescript" },
    { icon: <Nextjs />, key: "nextjs" },
    { icon: <Tailwindcss />, key: "tailwindcss" },
    { icon: <TanstackQuery />, key: "tanstackQuery" },
] as const;

export function TechStack({
    className,
    ...props
}: Omit<React.ComponentProps<"ul">, "children">) {
    const t = useTranslations("tech_stack");

    return (
        <ul
            className={cn(
                "flex flex-wrap gap-3 [&_svg]:size-6 [&_svg]:fill-zinc-50",
                className,
            )}
            aria-label={t("aria_label")}
            {...props}
        >
            {items.map(item => {
                return (
                    <li key={item.key} className="flex items-center gap-2">
                        {item.icon}
                    </li>
                );
            })}
        </ul>
    );
}

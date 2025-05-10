import { useTranslations } from "next-intl";
import Zustand from "@/assets/icons/zustand.svg";
import React from "@/assets/icons/react.svg";
import Typescript from "@/assets/icons/typescript.svg";
import Nextjs from "@/assets/icons/nextjs.svg";
import Tailwindcss from "@/assets/icons/tailwindcss.svg";
import TanstackQuery from "@/assets/icons/tanstack-query.svg";
import Vitest from "@/assets/icons/vitest.svg";
import Vite from "@/assets/icons/vite.svg";
import Cypress from "@/assets/icons/cypress.svg";
import { SimpleTooltip } from "@/components/tooltip";
import { cn } from "@/utils";

const items = [
    { icon: <React />, intlKey: "react" },
    { icon: <Typescript />, intlKey: "typescript" },
    { icon: <Nextjs />, intlKey: "nextjs" },
    { icon: <Tailwindcss />, intlKey: "tailwindcss" },
    { icon: <TanstackQuery />, intlKey: "tanstack_query" },
    { icon: <Vite />, intlKey: "vite" },
    { icon: <Zustand />, intlKey: "zustand" },
    { icon: <Cypress />, intlKey: "cypress" },
    { icon: <Vitest />, intlKey: "vitest" },
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
                const title = t(`${item.intlKey}.title`);
                const description = t(`${item.intlKey}.description`);

                return (
                    <li key={item.intlKey} className="flex items-center gap-2">
                        <SimpleTooltip
                            content={
                                <p>
                                    <span className="font-medium">{title}</span>{" "}
                                    - {description}
                                </p>
                            }
                            contentProps={{
                                side: "bottom",
                                align: "center",
                                sideOffset: 8,
                                className: "w-44 text-balance",
                            }}
                        >
                            <div>
                                {item.icon}
                                <span className="sr-only">{title}</span>
                            </div>
                        </SimpleTooltip>
                    </li>
                );
            })}
        </ul>
    );
}

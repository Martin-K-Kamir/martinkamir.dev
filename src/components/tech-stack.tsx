import Zustand from "@/assets/icons/zustand.svg";
import React from "@/assets/icons/react.svg";
import Typescript from "@/assets/icons/typescript.svg";
import Nextjs from "@/assets/icons/nextjs.svg";
import Tailwindcss from "@/assets/icons/tailwindcss.svg";
import TanstackQuery from "@/assets/icons/tanstack-query.svg";
import Vitest from "@/assets/icons/vitest.svg";
import Cypress from "@/assets/icons/cypress.svg";
import { cn } from "@/utils";

export function TechStack({
    className,
    ...props
}: Omit<React.ComponentProps<"ul">, "children">) {
    return (
        <ul
            className={cn(
                "flex gap-3 [&_svg]:size-8 [&_svg]:fill-zinc-50",
                className,
            )}
            {...props}
        >
            <li>
                <React />
                <span className="sr-only">React</span>
            </li>
            <li>
                <Typescript />
                <span className="sr-only">Typescript</span>
            </li>
            <li>
                <Nextjs />
                <span className="sr-only">Next.js</span>
            </li>
            <li>
                <Tailwindcss />
                <span className="sr-only">Tailwind CSS</span>
            </li>
            <li>
                <TanstackQuery />
                <span className="sr-only">Tanstack Query</span>
            </li>
            <li>
                <Zustand />
                <span className="sr-only">Zustand</span>
            </li>
            <li>
                <Cypress />
                <span className="sr-only">Cypress</span>
            </li>
            <li>
                <Vitest />
                <span className="sr-only">Vitest</span>
            </li>
        </ul>
    );
}

import Zustand from "@/assets/icons/zustand.svg";
import React from "@/assets/icons/react.svg";
import Typescript from "@/assets/icons/typescript.svg";
import Nextjs from "@/assets/icons/nextjs.svg";
import Tailwindcss from "@/assets/icons/tailwindcss.svg";
import TanstackQuery from "@/assets/icons/tanstack-query.svg";
import Vitest from "@/assets/icons/vitest.svg";
import Vite from "@/assets/icons/vite.svg";
import Cypress from "@/assets/icons/cypress.svg";
import { cn } from "@/utils";
import { SimpleTooltip } from "@/components/tooltip";

const items = [
    {
        icon: <React />,
        srOnly: "React",
        tooltipContent: (
            <p>
                <span className="font-medium">React</span> - My go to for
                building interactive, component driven UIs.
            </p>
        ),
    },
    {
        icon: <Typescript />,
        srOnly: "Typescript",
        tooltipContent: (
            <p>
                <span className="font-medium">Typescript</span> - Makes
                development smoother, more reliable, and way less error prone.
            </p>
        ),
    },
    {
        icon: <Nextjs />,
        srOnly: "Next.js",
        tooltipContent: (
            <p>
                <span className="font-medium">Nextjs</span> - All the power of
                React, with fewer headaches.
            </p>
        ),
    },
    {
        icon: <Tailwindcss />,
        srOnly: "Tailwind CSS",
        tooltipContent: (
            <p>
                <span className="font-medium">Tailwind</span> - Tried every CSS
                approach. Tailwind just works and scales as I build.
            </p>
        ),
    },
    {
        icon: <TanstackQuery />,
        srOnly: "Tanstack Query",
        tooltipContent: (
            <p>
                <span className="font-medium">TanStack Query</span> - There's no
                other solution. This is the best way to handle data fetching.
            </p>
        ),
    },
    {
        icon: <Vite />,
        srOnly: "Vite",
        tooltipContent: (
            <p>
                <span className="font-medium">Vite</span> - I love building SPAs
                with Vite, makes it fast and smooth every time.
            </p>
        ),
    },
    {
        icon: <Zustand />,
        srOnly: "Zustand",
        tooltipContent: (
            <p>
                <span className="font-medium">Zustand</span> - It's the easiest
                way to manage state, no need for extra complexity.
            </p>
        ),
    },
    {
        icon: <Cypress />,
        srOnly: "Cypress",
        tooltipContent: (
            <p>
                <span className="font-medium">Cypress</span> -{" "}
                <span className="text-nowrap">End-to-end</span> testing made
                effortless. Cypress is fast, reliable, and fun.
            </p>
        ),
    },
    {
        icon: <Vitest />,
        srOnly: "Vitest",
        tooltipContent: (
            <p>
                <span className="font-medium">Vitest</span> - Unit testing made
                fast and simple.
            </p>
        ),
    },
];

export function TechStack({
    className,
    ...props
}: Omit<React.ComponentProps<"ul">, "children">) {
    return (
        <ul
            className={cn(
                "flex gap-3 [&_svg]:size-6 [&_svg]:fill-zinc-50",
                className,
            )}
            aria-label="Favorite technologies"
            {...props}
        >
            {items.map(item => (
                <li key={item.srOnly} className="flex items-center gap-2">
                    <SimpleTooltip
                        delayDuration={0}
                        skipDelayDuration={0}
                        content={item.tooltipContent}
                        contentProps={{
                            side: "bottom",
                            align: "center",
                            sideOffset: 8,
                            className: "w-44 text-balance",
                        }}
                    >
                        <div>
                            {item.icon}
                            <span className="sr-only">{item.srOnly}</span>
                        </div>
                    </SimpleTooltip>
                </li>
            ))}
        </ul>
    );
}

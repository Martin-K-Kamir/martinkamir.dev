import Image from "next/image";
import me from "@/assets/images/me.webp";
import Github from "@/assets/icons/github.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import { LangSelect } from "@/components/lang-select";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";

const links = [
    {
        href: "https://github.com/Martin-K-Kamir",
        label: "Github",
        icon: <Github />,
    },
    {
        href: "https://www.linkedin.com/in/martin-kam%C3%ADr-2967aa222",
        label: "Linkedin",
        icon: <Linkedin />,
    },
];

export function UserProfile({
    className,
    ...props
}: Omit<React.ComponentProps<"div">, "children">) {
    const t = useTranslations("other");

    return (
        <div
            className={cn("flex items-center gap-6 lg:gap-8", className)}
            {...props}
        >
            <Image
                src={me}
                className="aspect-square w-10 rounded-full object-cover"
                alt={`Martin Kamír - ${t("portrait")}`}
                width={80}
                height={80}
                placeholder="blur"
                loading="lazy"
                quality={95}
            />

            <div className="flex flex-wrap items-center gap-6 gap-y-4 lg:gap-x-8">
                <ul
                    className="flex gap-6 lg:gap-4"
                    aria-label={t("social_media_links")}
                >
                    {links.map(link => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm font-medium text-zinc-100/95 outline-offset-4 outline-zinc-100/95 transition-colors hover:underline focus-visible:outline-2 [&>svg]:size-4"
                                aria-label={t("opens_new_tab", {
                                    label: link.label,
                                })}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                <LangSelect className="hidden lg:flex" />
            </div>
        </div>
    );
}

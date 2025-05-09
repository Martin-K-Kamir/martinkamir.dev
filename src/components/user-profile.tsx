import Image from "next/image";
import me from "@/assets/images/me.webp";
import Github from "@/assets/icons/github.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import { LangSelect } from "@/components/lang-select";
import { cn } from "@/utils";

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
    return (
        <div className={cn("flex items-center gap-10", className)} {...props}>
            <Image
                src={me}
                className="aspect-square w-12 rounded-full object-cover"
                alt="Martin Kamír"
                width={96}
                height={96}
                placeholder="blur"
                loading="lazy"
                quality={95}
            />

            <ul className="flex gap-6" aria-label="Social media links">
                {links.map(link => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm font-medium text-zinc-100/95 outline-offset-4 outline-zinc-100/95 transition-colors hover:underline focus-visible:outline-2 [&>svg]:size-4"
                            aria-label={`View ${link.label} (opens in new tab)`}
                        >
                            {link.icon}
                            <span>{link.label}</span>
                        </a>
                    </li>
                ))}
            </ul>

            <LangSelect />
        </div>
    );
}

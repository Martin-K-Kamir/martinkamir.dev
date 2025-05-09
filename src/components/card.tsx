import { ArrowUpRightIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { cn, formatJobDateRange } from "@/utils";
import { Badge } from "@/components/badge";
import type { DateRange } from "@/types";

export function Card({ className, ...props }: React.ComponentProps<"article">) {
    return (
        <article
            {...props}
            className={cn(
                "group transition-100 relative grid grid-cols-[14ch_1fr] gap-6 transition-opacity lg:group-hover/list:opacity-50 lg:hover:!opacity-100",
                className,
            )}
        />
    );
}

export function CardHeader({
    className,
    ...props
}: React.ComponentProps<"header">) {
    return (
        <header
            {...props}
            className={cn(
                "col-start-1 py-0.5 text-xs font-semibold text-zinc-400/95 uppercase",
                className,
            )}
        />
    );
}

export function CardOverlay({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            {...props}
            className={cn(
                "transition-100 absolute -inset-6 z-0 hidden rounded-xl transition-colors motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-indigo-400/5",
                className,
            )}
        ></div>
    );
}

export function CardImage({
    className,
    src,
    alt,
    ...props
}: React.ComponentProps<typeof Image> & {
    src: string | StaticImageData;
}) {
    return (
        <Image
            className={cn(
                "transition-100 col-start-1 row-start-1 aspect-video rounded-lg border-2 border-zinc-800 object-cover transition group-hover:border-zinc-700 motion-reduce:transition-none",
                className,
            )}
            src={src}
            alt={alt ?? ""}
            aria-hidden={alt ? false : true}
            width={400}
            height={300}
            placeholder="blur"
            loading="lazy"
            quality={95}
            {...props}
        />
    );
}

export function CardDateRange({
    dateRange: { from, to },
    ...props
}: { dateRange: DateRange } & Omit<React.ComponentProps<"p">, "children">) {
    return <p {...props}>{formatJobDateRange({ from, to })}</p>;
}

export function CardContent({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("col-start-2 space-y-2", className)} {...props} />
    );
}

type AsTitle = "h3" | "h4" | "h5" | "h6" | "p" | "span";

const classNameTitle =
    "transition-100 text-base leading-tight font-medium text-zinc-50 transition-colors hover:text-indigo-300 focus-visible:text-indigo-300";

export function CardTitle({
    as,
    href,
    className,
    children,
    "aria-label": ariaLabel,
    ...props
}: React.ComponentPropsWithoutRef<AsTitle> & {
    as?: AsTitle;
    href?: string;
}) {
    const Comp = as ?? "h3";

    if (href) {
        return (
            <Comp>
                <a
                    href={href}
                    className={cn(
                        classNameTitle,
                        "group/link outline-offset-4 outline-zinc-100/95 focus-visible:outline-2",
                        className,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ariaLabel}
                >
                    {children}{" "}
                    <ArrowUpRightIcon className="ml-0.5 inline-block size-4 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" />
                    <span className="absolute -inset-6 hidden rounded lg:block"></span>
                </a>
            </Comp>
        );
    }

    return (
        <Comp className={cn(classNameTitle, className)} {...props}>
            {" "}
            {children}{" "}
        </Comp>
    );
}

export function CardDescription({
    className,
    ...props
}: React.ComponentProps<"p">) {
    return (
        <p
            className={cn("text-sm text-pretty text-zinc-300/95", className)}
            {...props}
        />
    );
}

export function CardBadges({
    className,
    classNameItem,
    badges,
    ...props
}: Omit<React.ComponentProps<"ul">, "children"> & {
    classNameItem?: string;
    badges: readonly string[];
}) {
    return (
        <ul
            className={cn("flex flex-wrap gap-x-2 gap-y-3", className)}
            aria-label="technologies used"
            {...props}
        >
            {badges.map(badge => (
                <li key={badge} className={classNameItem}>
                    <Badge>{badge}</Badge>
                </li>
            ))}
        </ul>
    );
}

type LinkEntry = {
    icon?: React.ReactNode;
    href: string;
    label: string;
};

export function CardLinks({
    className,
    classNameItem,
    urls,
    ...props
}: Omit<React.ComponentProps<"ul">, "children"> & {
    classNameItem?: string;
    urls: readonly (string | LinkEntry)[];
}) {
    return (
        <ul
            className={cn("relative z-10", className)}
            aria-label="related links"
            {...props}
        >
            {urls.map(url => (
                <li key={typeof url === "string" ? url : url.label}>
                    <a
                        href={typeof url === "string" ? url : url.href}
                        className={cn(
                            "transition-100 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-200 outline-offset-4 outline-zinc-100/95 transition-colors hover:text-indigo-300 focus-visible:text-indigo-300 focus-visible:outline-2 [&>svg]:size-3",
                            classNameItem,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={
                            typeof url === "string"
                                ? `View ${url} (opens in new tab)`
                                : `View ${url.label} (opens in new tab)`
                        }
                    >
                        {typeof url !== "string" && url.icon}
                        {typeof url === "string" ? url : url.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export type SimpleCardProps = {
    title: string;
    description: string;
    url?: string;
    image?: {
        src: string | StaticImageData;
        alt?: string;
    };
    dateRange?: {
        from: Date;
        to?: Date;
    };
    otherUrls?: readonly (string | LinkEntry)[];
    badges: readonly string[];
} & React.ComponentProps<"article">;

export function SimpleCard({
    title,
    description,
    dateRange,
    badges,
    url,
    otherUrls,
    image,
    ...props
}: SimpleCardProps) {
    return (
        <Card {...props}>
            {dateRange && (
                <CardHeader>
                    <CardDateRange dateRange={dateRange} />
                </CardHeader>
            )}

            <CardOverlay />

            <CardContent>
                <CardTitle
                    href={url}
                    {...(url && {
                        "aria-label": `View ${title} (opens in new tab)`,
                    })}
                >
                    {title}
                </CardTitle>
                <CardDescription>{description}</CardDescription>
                {otherUrls && <CardLinks urls={otherUrls} className="mt-3" />}
                <CardBadges badges={badges} className="mt-4" />
            </CardContent>

            {image && <CardImage src={image.src} alt={image.alt ?? ""} />}
        </Card>
    );
}

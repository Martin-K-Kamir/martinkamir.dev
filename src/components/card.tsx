import { ArrowUpRightIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { cn, formatJobDateRange } from "@/utils";
import { Badge } from "@/components/badge";
import type { DateRange } from "@/types";
import { useTranslations, useLocale } from "next-intl";

export function Card({ className, ...props }: React.ComponentProps<"article">) {
    return (
        <article
            {...props}
            className={cn(
                "transition-100 group relative grid gap-2 transition-opacity sm:grid-cols-[14ch_1fr] sm:gap-6 lg:hover:!opacity-100 lg:group-hover/list:opacity-50",
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
                "py-0.5 text-xs font-semibold uppercase text-zinc-400/95 sm:col-start-1",
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
    const t = useTranslations("other");

    return (
        <Image
            className={cn(
                "transition-100 aspect-video w-48 rounded-lg border-2 border-zinc-800 object-cover transition motion-reduce:transition-none sm:col-start-1 sm:row-start-1 sm:w-auto lg:group-hover:border-zinc-700",
                className,
            )}
            src={src}
            alt={alt ? `${alt} ${t("preview_image")}` : ""}
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
    const locale = useLocale();
    const t = useTranslations("other");

    return (
        <p {...props}>
            {formatJobDateRange({
                from,
                to,
                locale: locale === "cs" ? "cs" : "en",
                present: t("present"),
            })}
        </p>
    );
}

export function CardContent({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("space-y-2 sm:col-start-2", className)} {...props} />
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
                    <ArrowUpRightIcon className="ml-0.5 inline-block size-4 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
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
            className={cn("text-pretty text-sm text-zinc-300/95", className)}
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
    const t = useTranslations("other");

    return (
        <ul
            className={cn("flex flex-wrap gap-x-2 gap-y-3", className)}
            aria-label={t("related_badges")}
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
    namespace?: string;
    intlKey?: string;
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
    const t = useTranslations();

    return (
        <ul
            className={cn("relative z-10", className)}
            aria-label={t("other.related_links")}
            {...props}
        >
            {urls.map(url => {
                /* eslint-disable @typescript-eslint/no-explicit-any */
                const transLabel = (
                    typeof url !== "string" && url.namespace && url.intlKey
                        ? t(`${url.namespace}.${url.intlKey}` as any)
                        : url
                ) as string;

                return (
                    <li key={typeof url === "string" ? url : url.label}>
                        <a
                            href={typeof url === "string" ? url : url.href}
                            className={cn(
                                "transition-100 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-200 outline-offset-4 outline-zinc-100/95 transition-colors hover:text-indigo-300 focus-visible:text-indigo-300 focus-visible:outline-2 [&>svg]:size-3",
                                classNameItem,
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t("other.opens_new_tab", {
                                label: transLabel,
                            })}
                        >
                            {typeof url !== "string" && url.icon}
                            {transLabel}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

export type SimpleCardProps = {
    intlKey?: string;
    namespace?: string;
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
    intlKey,
    namespace,
    title,
    description,
    dateRange,
    badges,
    url,
    otherUrls,
    image,
    ...props
}: SimpleCardProps) {
    const t = useTranslations();

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const transTitle =
        namespace && intlKey
            ? t(`${namespace}.${intlKey}.title` as any)
            : title;

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const transDescription =
        namespace && intlKey
            ? t(`${namespace}.${intlKey}.description` as any)
            : description;

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
                        "aria-label": t("other.opens_new_tab", {
                            label: transTitle,
                        }),
                    })}
                >
                    {transTitle}
                </CardTitle>

                <CardDescription>{transDescription}</CardDescription>
                {otherUrls && <CardLinks urls={otherUrls} className="mt-3" />}
                <CardBadges badges={badges} className="mt-4" />
            </CardContent>

            {image && (
                <CardImage
                    src={image.src}
                    alt={image.alt ?? ""}
                    className="mt-4 sm:mt-0"
                />
            )}
        </Card>
    );
}

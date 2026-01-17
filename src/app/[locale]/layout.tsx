import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { CursorGlow } from "@/components/cursor-glow";
import { Hello } from "@/components/hello";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/types";
import "./globals.css";

const geistSans = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export function generateStaticParams() {
    return routing.locales.map((locale): { locale: Locale } => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const typedLocale = locale as Locale;
    const t = await getTranslations({
        locale: typedLocale,
        namespace: "metadata",
    });

    const title = t("title");
    const description = t("description");

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
            url: "https://www.martinkamir.dev",
            siteName: title,
        },
        twitter: {
            card: "summary",
            title,
            description,
            url: "https://www.martinkamir.dev",
        },
        meta: {
            keywords:
                "Martin Kamír, Frontend Developer, Web Development, React, TypeScript, Next.js, Vite, Zustand, Tailwind CSS, TanStack Query, Cypress, Vitest Portfolio",
            author: "Martin Kamír",
            robots: "index, follow",
            viewport: "width=device-width, initial-scale=1.0",
        },
    };
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const typedLocale = locale as Locale;
    if (!hasLocale(routing.locales, typedLocale)) {
        notFound();
    }

    return (
        <html lang={typedLocale} className="scroll-smooth">
            <body
                className={`${geistSans.variable} bg-zinc-950 text-zinc-50 antialiased`}
            >
                <CursorGlow />
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
                <Hello />
                <Analytics />
            </body>
        </html>
    );
}

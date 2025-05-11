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

type WithParams = {
    params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: WithParams) {
    const { locale } = await params;
    const t = await getTranslations({
        locale,
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
            url: "",
            siteName: title,
        },
        twitter: {
            card: "summary",
            title,
            description,
            url: "",
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
} & WithParams) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale} className="scroll-smooth">
            <body
                className={`${geistSans.variable} bg-zinc-950 text-zinc-50 antialiased`}
            >
                <CursorGlow />
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
                <Hello />
            </body>
        </html>
    );
}

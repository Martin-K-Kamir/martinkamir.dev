import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { CursorGlow } from "@/components/cursor-glow";
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

    return {
        title: t("title"),
        description: t("description"),
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
            </body>
        </html>
    );
}

"use client";

import { useTranslations } from "next-intl";

export default function Error({ reset }: { reset: () => void }) {
    const t = useTranslations("error.500");

    return (
        <main className="grid min-h-svh place-items-center">
            <div className="px-6">
                <h1 className="flex flex-col items-center text-3xl font-bold uppercase sm:text-4xl">
                    <span>oops!</span>
                    <span className="text-[5rem] leading-none text-indigo-400 sm:text-[8rem]">
                        500
                    </span>
                </h1>

                <div className="mt-6 flex flex-col items-center">
                    <p
                        className="text-pretty text-center text-zinc-100/95"
                        dangerouslySetInnerHTML={{
                            __html: t.raw("description"),
                        }}
                    />

                    <button
                        onClick={() => reset()}
                        className="mt-4 inline-block cursor-pointer rounded-lg border border-zinc-800 bg-zinc-950 px-10 py-2.5 text-sm font-semibold text-zinc-50 hover:bg-zinc-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700 sm:mt-6"
                    >
                        {t("button")}
                    </button>
                </div>
            </div>
        </main>
    );
}

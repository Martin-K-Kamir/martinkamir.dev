import { useTranslations } from "next-intl";
import { TechStack } from "@/components/tech-stack";
import { CardList } from "@/components/card-list";
import { UserProfile } from "@/components/user-profile";
import { Navigation } from "@/components/navigation";
import { StickyHeader } from "@/components/sticky-header";
import { projects, experiences } from "@/data";
import { LangSelect } from "@/components/lang-select";
import { HeroDescription } from "@/components/hero-description";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
    return routing.locales.map(locale => ({ locale }));
}

export default function Page() {
    const t = useTranslations("page");
    const tOther = useTranslations("other");

    return (
        <div className="mx-auto grid min-h-svh max-w-7xl px-6 pb-24 pt-12 md:px-12 md:pb-28 md:pt-16 lg:grid-cols-[minmax(0,_1fr)_minmax(54ch,_1.1fr)] lg:gap-6 lg:py-0">
            <a
                href="#content"
                className="absolute -left-2 top-0 block -translate-x-full rounded-lg bg-zinc-50 px-4 py-3 text-sm font-bold uppercase tracking-widest text-zinc-950 outline-none focus-visible:left-0 focus-visible:translate-x-0"
            >
                {t("other.skip_to_content")}
            </a>

            <header className="flex flex-col justify-between lg:sticky lg:top-0 lg:max-h-svh lg:py-24">
                <div>
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            {t("hero.title")}
                        </h1>

                        <p className="text-lg font-semibold sm:text-xl">
                            {t("hero.subtitle")}
                        </p>

                        <HeroDescription />
                    </div>

                    <Navigation className="mt-12" />
                </div>

                <UserProfile className="mt-8 lg:mt-0" />
            </header>

            <main
                className="space-y-18 pt-18 sm:space-y-28 sm:pt-24 lg:py-24"
                id="content"
            >
                <section className="scroll-mt-16" id="about">
                    <StickyHeader>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-50/95 lg:sr-only">
                            {t("about.title")}
                        </h2>
                    </StickyHeader>

                    <div className="mt-4 space-y-4 text-zinc-300/95">
                        <p className="text-pretty">
                            {t("about.description.p1")}
                        </p>
                        <p className="text-pretty">
                            {t("about.description.p2")}{" "}
                            <a
                                href="https://www.rondo.cz/hra"
                                className="font-medium text-zinc-50/95 outline-offset-4 outline-zinc-100/95 hover:underline focus-visible:outline-2"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={tOther("opens_new_tab", {
                                    label: "Rondo",
                                })}
                            >
                                Rondo
                            </a>
                            {t("about.description.p3")}
                        </p>
                        <p className="text-pretty">
                            {t("about.description.p4")}{" "}
                        </p>

                        <TechStack />
                    </div>
                </section>

                <section className="scroll-mt-16" id="experience">
                    <StickyHeader>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-50/95 lg:sr-only">
                            {t("experience.title")}
                        </h2>
                    </StickyHeader>

                    <CardList
                        data={experiences}
                        as="ol"
                        className="mt-4 min-h-[476px]"
                    />
                </section>

                <section className="scroll-mt-16" id="projects">
                    <StickyHeader>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-50/95 lg:sr-only">
                            {t("projects.title")}
                        </h2>
                    </StickyHeader>

                    <CardList
                        data={projects}
                        as="ol"
                        className="mt-4 min-h-[1236px]"
                    />
                </section>
            </main>

            <LangSelect
                variant="circle"
                className="z-100 fixed bottom-4 right-4 lg:hidden"
                classNameContent="z-100"
            />
        </div>
    );
}

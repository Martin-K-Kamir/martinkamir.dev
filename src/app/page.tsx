import { ImageHoverReveal } from "@/components/image-hover-reveal";
import { TechStack } from "@/components/tech-stack";
import { CardList } from "@/components/card-list";
import { UserProfile } from "@/components/user-profile";
import { Navigation } from "@/components/navigation";
import responsiveGif from "@/assets/gifs/responsive.gif";
import typesafeGif from "@/assets/gifs/typesafe.gif";
import { StickyHeader } from "@/components/sticky-header";
import fastGif from "@/assets/gifs/fast.gif";
import { projects, jobs } from "@/data";
import { LangSelect } from "@/components/lang-select";

export default function Page() {
    return (
        <div className="mx-auto grid min-h-svh max-w-7xl px-6 pt-12 pb-24 md:px-12 md:pt-16 md:pb-28 lg:grid-cols-[minmax(0,_1fr)_minmax(54ch,_1.1fr)] lg:gap-6 lg:py-0">
            <a
                href="#content"
                className="absolute top-0 left-0 block -translate-x-full rounded-lg bg-zinc-50 px-4 py-3 text-sm font-bold tracking-widest text-zinc-950 uppercase outline-none focus-visible:translate-x-0"
            >
                Skip to Content
            </a>

            <header className="flex flex-col justify-between lg:sticky lg:top-0 lg:max-h-svh lg:py-24">
                <div>
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Martin Kamír
                        </h1>
                        <p className="text-lg font-semibold sm:text-xl">
                            Front End Developer
                        </p>
                        <p className="mt-3 text-pretty text-zinc-300/95 sm:mt-4">
                            I build{" "}
                            <ImageHoverReveal url={responsiveGif}>
                                <strong className="font-semibold text-emerald-400">
                                    responsive
                                </strong>
                            </ImageHoverReveal>
                            ,{" "}
                            <ImageHoverReveal url={typesafeGif}>
                                <strong className="font-semibold text-indigo-400">
                                    type-safe
                                </strong>
                            </ImageHoverReveal>{" "}
                            &&{" "}
                            <ImageHoverReveal url={fastGif}>
                                <strong className="font-semibold text-rose-400">
                                    blazingly fast
                                </strong>
                            </ImageHoverReveal>{" "}
                            web apps.
                        </p>
                    </div>

                    <Navigation className="mt-12" />
                </div>

                <UserProfile className="mt-8 lg:mt-0" />
            </header>

            <main
                className="space-y-18 pt-18 sm:space-y-28 sm:pt-24 lg:py-24"
                id="content"
            >
                <section className="scroll-mt-24" id="about">
                    <StickyHeader>
                        <h2 className="text-sm font-bold tracking-widest text-zinc-50/95 uppercase lg:sr-only">
                            About
                        </h2>
                    </StickyHeader>

                    <div className="mt-4 space-y-4 text-zinc-300/95">
                        <p className="text-pretty">
                            I'm a developer with a passion for creating
                            beautiful and functional web applications. My
                            journey in web development began with a simple HTML
                            page, and since then I've been constantly learning,
                            experimenting, and pushing myself to build cool
                            stuff.
                        </p>
                        <p className="text-pretty">
                            Currently, I'm working at{" "}
                            <a
                                href="https://www.rondo.cz/hra"
                                className="font-medium text-zinc-50/95 outline-offset-4 outline-zinc-100/95 hover:underline focus-visible:outline-2"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Rondo (opens in new tab)"
                            >
                                Rondo
                            </a>
                            . I started as a junior and have grown a lot through
                            hands-on experience and tough challenges.
                        </p>
                        <p className="text-pretty">
                            Here are the tools I'm most into right now:
                        </p>

                        <TechStack />
                    </div>
                </section>

                <section className="scroll-mt-24" id="experience">
                    <StickyHeader>
                        <h2 className="text-sm font-bold tracking-widest text-zinc-50/95 uppercase lg:sr-only">
                            Experience
                        </h2>
                    </StickyHeader>

                    <CardList data={jobs} as="ol" className="mt-4" />
                </section>

                <section className="scroll-mt-24" id="projects">
                    <StickyHeader>
                        <h2 className="text-sm font-bold tracking-widest text-zinc-50/95 uppercase lg:sr-only">
                            Projects
                        </h2>
                    </StickyHeader>

                    <CardList data={projects} as="ol" className="mt-4" />
                </section>
            </main>

            <LangSelect
                variant="circle"
                className="fixed right-4 bottom-4 z-100 lg:hidden"
                classNameContent="z-100"
            />
        </div>
    );
}

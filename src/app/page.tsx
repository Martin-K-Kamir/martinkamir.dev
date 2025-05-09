import { ImageHoverReveal } from "@/components/image-hover-reveal";
import { TechStack } from "@/components/tech-stack";
import { CardList } from "@/components/card-list";
import { Navigation } from "@/components/navigation";
import responsiveGif from "@/assets/gifs/responsive.gif";
import typesafeGif from "@/assets/gifs/typesafe.gif";
import fastGif from "@/assets/gifs/fast.gif";
import { projects, jobs } from "@/data";
import { UserProfile } from "@/components/user-profile";

export default function Page() {
    return (
        <div className="mx-auto grid min-h-svh max-w-7xl grid-cols-[1fr_64ch] gap-8">
            <a
                href="#content"
                className="absolute top-0 left-0 block -translate-x-full rounded-lg bg-zinc-50 px-4 py-3 text-sm font-bold tracking-widest text-zinc-950 uppercase outline-none focus-visible:translate-x-0"
            >
                Skip to Content
            </a>
            <header className="flex flex-col justify-between py-24 lg:sticky lg:top-0 lg:max-h-svh">
                <div>
                    <div className="space-y-3">
                        <h1 className="text-5xl font-bold tracking-tight">
                            Martin Kamír
                        </h1>
                        <p className="text-xl font-semibold">
                            Front End Developer
                        </p>
                        <p className="mt-4 text-zinc-300/95">
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

                <UserProfile />
            </header>
            <main className="space-y-28 py-24" id="content">
                <section className="scroll-mt-24 space-y-4" id="about">
                    <div className="space-y-4 text-zinc-300/95">
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
                    </div>
                    <TechStack />
                </section>

                <section className="scroll-mt-24 space-y-4" id="experience">
                    <CardList data={jobs} as="ol" />
                </section>

                <section className="scroll-mt-24 space-y-4" id="projects">
                    <CardList data={projects} as="ol" />
                </section>
            </main>
        </div>
    );
}

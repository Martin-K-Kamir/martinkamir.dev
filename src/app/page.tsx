import { ImageHoverReveal } from "@/components/image-hover-reveal";
import { TechStack } from "@/components/tech-stack";
import { CardList } from "@/components/card-list";
import { projects, jobs } from "@/data";
import responsiveGif from "@/assets/gifs/responsive.gif";
import typesafeGif from "@/assets/gifs/typesafe.gif";
import fastGif from "@/assets/gifs/fast.gif";

export default function Page() {
    return (
        <main className="mx-auto grid max-w-7xl grid-cols-[1fr_60ch] gap-10 px-12 py-24">
            <div>
                <section aria-labelledby="intro-heading">
                    <header id="intro-heading" className="space-y-2">
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
                    </header>
                </section>
            </div>
            <div className="space-y-28">
                <section className="space-y-4">
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
                                href=""
                                className="font-semibold text-zinc-50 underline"
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
                <section>
                    <CardList data={jobs} as="ol" />
                </section>
                <section>
                    <CardList data={projects} as="ol" />
                </section>
            </div>
        </main>
    );
}

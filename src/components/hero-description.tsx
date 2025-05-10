"use client";
import { useTranslations } from "next-intl";
import { ImageHoverReveal } from "@/components/image-hover-reveal";
import responsiveGif from "@/assets/gifs/responsive.gif";
import typesafeGif from "@/assets/gifs/typesafe.gif";
import fastGif from "@/assets/gifs/fast.gif";

export function HeroDescription() {
    const t = useTranslations("page");

    return (
        <p className="mt-3 text-pretty text-zinc-300/95 sm:mt-4">
            {t.rich("hero.description", {
                responsive: chunk => (
                    <ImageHoverReveal url={responsiveGif}>
                        <strong className="font-semibold text-emerald-400">
                            {chunk}
                        </strong>
                    </ImageHoverReveal>
                ),
                typesafe: chunk => (
                    <ImageHoverReveal url={typesafeGif}>
                        <strong className="font-semibold text-indigo-400">
                            {chunk}
                        </strong>
                    </ImageHoverReveal>
                ),
                fast: chunk => (
                    <ImageHoverReveal url={fastGif}>
                        <strong className="font-semibold text-rose-400">
                            {chunk}
                        </strong>
                    </ImageHoverReveal>
                ),
            })}
        </p>
    );
}

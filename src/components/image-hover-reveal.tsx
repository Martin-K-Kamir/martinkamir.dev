"use client";

import { cn } from "@/utils";
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";

export type ImageHoverRevealProps = {
    url: string | StaticImageData;
} & React.ComponentProps<"span">;

export function ImageHoverReveal({
    url,
    children,
    ...rest
}: ImageHoverRevealProps) {
    const spanRef = useRef<HTMLSpanElement>(null);
    const [coords, setCoords] = useState({ x: 0, y: 0, visible: false });

    const handleMouseMove = (e: React.MouseEvent) => {
        const bounds = spanRef.current?.getBoundingClientRect();
        if (bounds) {
            setCoords({
                x: e.clientX - bounds.left,
                y: e.clientY - bounds.top,
                visible: true,
            });
        }
    };

    const handleMouseLeave = () => {
        setCoords(prev => ({ ...prev, visible: false }));
    };

    return (
        <span
            ref={spanRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative inline-block"
            {...rest}
        >
            <Image
                src={url}
                alt=""
                aria-hidden
                className={cn(
                    "pointer-events-none absolute aspect-square w-38 max-w-max -translate-y-1 transition-opacity duration-100",
                    coords.visible ? "opacity-100" : "opacity-0",
                )}
                style={{
                    left: coords.x,
                    top: coords.y,
                    transform: "translate(-50%, -100%)",
                }}
            />
            {children}
        </span>
    );
}

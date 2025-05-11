"use client";
import { useEffect, useState } from "react";

export function CursorGlow() {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCoords({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 opacity-0 transition duration-300 lg:opacity-100"
            style={{
                background: `radial-gradient(600px at ${coords.x}px ${coords.y}px, rgb(99 102 241 / 7%), transparent 80%)`,
            }}
        ></div>
    );
}

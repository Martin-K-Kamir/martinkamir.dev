"use client";
import { useEffect } from "react";

export function Hello() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            console.log(`
██   ██ ███████ ██      ██       ██████      ████████ ██   ██ ███████ ██████  ███████ ██ 
██   ██ ██      ██      ██      ██    ██        ██    ██   ██ ██      ██   ██ ██      ██ 
███████ █████   ██      ██      ██    ██        ██    ███████ █████   ██████  █████   ██ 
██   ██ ██      ██      ██      ██    ██        ██    ██   ██ ██      ██   ██ ██         
██   ██ ███████ ███████ ███████  ██████         ██    ██   ██ ███████ ██   ██ ███████ ██ `);

            console.log(
                "Looks like you are interested in the code \uD83D\uDC40\nHere is the repo to fulfill your curiosity\nhttps://github.com/Martin-K-Kamir/martinkamir.dev\n\n",
            );
        }
    }, []);

    return null;
}

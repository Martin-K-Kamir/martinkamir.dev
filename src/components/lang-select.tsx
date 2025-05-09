"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/select";
import { useEffect, useState } from "react";

export function LangSelect() {
    const [lang, setLang] = useState("english");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Select onValueChange={setLang} value={lang}>
            <SelectTrigger className="relative w-28">
                {!mounted && "English"}
                <SelectValue />
            </SelectTrigger>
            <SelectContent className="w-28 min-w-28">
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="czech">Česky</SelectItem>
            </SelectContent>
        </Select>
    );
}

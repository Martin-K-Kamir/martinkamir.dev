import { cn } from "@/utils";

export function Badge({ className, ...props }: React.ComponentProps<"span">) {
    return (
        <span
            className={cn(
                "text-xs bg-indigo-400/20 text-indigo-300 font-medium px-3.5 py-1.5 rounded-full",
                className,
            )}
            {...props}
        />
    );
}

import { cn } from "@/utils";

export function Badge({ className, ...props }: React.ComponentProps<"span">) {
    return (
        <span
            className={cn(
                "rounded-full bg-indigo-400/20 px-3.5 py-1.5 text-xs font-medium text-indigo-300",
                className,
            )}
            {...props}
        />
    );
}

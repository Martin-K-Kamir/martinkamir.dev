import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/utils";

export function TooltipProvider({
    delayDuration = 300,
    ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
    return (
        <TooltipPrimitive.Provider
            data-slot="tooltip-provider"
            delayDuration={delayDuration}
            {...props}
        />
    );
}

export function Tooltip({
    ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
    return (
        <TooltipProvider>
            <TooltipPrimitive.Root data-slot="tooltip" {...props} />
        </TooltipProvider>
    );
}

export function TooltipTrigger({
    ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
    return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

export function TooltipContent({
    className,
    sideOffset = 4,
    children,
    ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
    return (
        <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
                data-slot="tooltip-content"
                sideOffset={sideOffset}
                className={cn(
                    "animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 z-[10000] max-w-sm rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-50 shadow-md",
                    className,
                )}
                {...props}
            >
                {children}
            </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
    );
}

export type SimpleTooltipProps = {
    children: React.ReactNode;
    content: React.ReactNode;
    contentProps?: React.ComponentProps<typeof TooltipPrimitive.Content>;
} & React.ComponentProps<typeof TooltipProvider>;

export function SimpleTooltip({
    children,
    content,
    contentProps,
    ...props
}: SimpleTooltipProps) {
    return (
        <TooltipProvider {...props}>
            <Tooltip>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent {...contentProps}>{content}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

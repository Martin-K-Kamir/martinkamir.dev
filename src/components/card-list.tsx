import {
    SimpleCard as Card,
    type SimpleCardProps as CardProps,
} from "@/components/card";
import { cn } from "@/utils";

type ListAs = "ul" | "ol";

type ListProps<TAs extends ListAs> = Omit<
    React.ComponentPropsWithoutRef<TAs>,
    "children"
> & {
    as?: TAs;
    data: readonly CardProps[];
    classNameItem?: string;
};

export function CardList<TAs extends ListAs = "ul">({
    data,
    classNameItem,
    className,
    as,
    ...props
}: ListProps<TAs>) {
    const Comp = as ?? "ul";

    return (
        <Comp {...props} className={cn("group/list space-y-16", className)}>
            {data.map((item, index) => (
                <li key={index}>
                    <Card {...item} className={classNameItem} />
                </li>
            ))}
        </Comp>
    );
}

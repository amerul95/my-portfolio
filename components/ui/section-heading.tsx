import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    subtitle?: string
}

export function SectionHeading({
    title,
    subtitle,
    className,
    ...props
}: SectionHeadingProps) {
    return (
        <div className={cn("flex flex-col gap-2 mb-10 md:mb-14", className)} {...props}>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted-foreground text-lg max-w-[800px]">
                    {subtitle}
                </p>
            )}
        </div>
    )
}

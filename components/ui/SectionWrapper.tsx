"use client";

import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    noPadding?: boolean;
}

export default function SectionWrapper({
    children,
    id,
    className,
    noPadding = false,
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn("relative w-full", className)}
            style={{
                // Explicitly enforce padding if tailwind fails
                paddingTop: noPadding ? 0 : "160px",
                paddingBottom: noPadding ? 0 : "160px",
            }}
        >
            {children}
        </section>
    );
}

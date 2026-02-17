"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextRevealProps {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
    delay?: number;
    stagger?: number;
}

const containerVariants = {
    hidden: {},
    visible: (custom: { delay: number; stagger: number }) => ({
        transition: {
            staggerChildren: custom.stagger,
            delayChildren: custom.delay,
        },
    }),
};

const wordVariants = {
    hidden: {
        y: "100%",
        opacity: 0,
    },
    visible: {
        y: "0%",
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.33, 1, 0.68, 1] as const,
        },
    },
};

export default function SplitTextReveal({
    text,
    className,
    as: Tag = "h2",
    delay = 0,
    stagger = 0.02,
}: SplitTextRevealProps) {
    const words = text.split(" ");

    return (
        <Tag className={cn(className)}>
            <motion.span
                style={{ display: "inline" }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                custom={{ delay, stagger }}
            >
                {words.map((word, i) => (
                    <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
                        <motion.span style={{ display: "inline-block" }} variants={wordVariants}>
                            {word}
                        </motion.span>
                        {i < words.length - 1 && <>&nbsp;</>}
                    </span>
                ))}
            </motion.span>
        </Tag>
    );
}

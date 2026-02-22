"use client"

import { portfolioData } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
    const { hero } = portfolioData

    return (
        <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 flex justify-center text-center">
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

            <div className="container px-4 md:px-8 max-w-[1000px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block rounded-full border bg-muted/50 px-3 py-1 text-sm text-muted-foreground mb-6 backdrop-blur">
                        Available for new opportunities
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-balance"
                >
                    {hero.headline}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 text-xl text-muted-foreground max-w-[800px] mx-auto text-balance"
                >
                    {hero.subheadline}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-4 text-base text-muted-foreground max-w-[700px] mx-auto text-balance"
                >
                    {hero.supportingLine}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-4"
                >
                    <Button size="lg" asChild className="h-12 px-8 text-base font-semibold shadow-lg shadow-primary/20">
                        <Link href="#contact">Hire Me</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="h-12 px-8 text-base">
                        <a href="/resume.pdf" download>Download CV</a>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

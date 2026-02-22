"use client"

import { portfolioData } from "@/data/portfolio"
import { Section } from "@/components/ui/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function About() {
    const { about } = portfolioData

    return (
        <Section id="about" className="bg-muted/30">
            <SectionHeading
                title="About Me"
                subtitle="Bridging the gap between frontend interfaces and reliable backend architecture."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 text-lg text-muted-foreground"
                >
                    {about.description.map((paragraph, idx) => (
                        <p key={idx} className="leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-card border rounded-xl p-8 shadow-sm"
                >
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        Engineering Focus
                    </h3>
                    <ul className="space-y-4">
                        {about.focuses.map((focus, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                <span className="text-foreground/80 font-medium">{focus}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </Section>
    )
}

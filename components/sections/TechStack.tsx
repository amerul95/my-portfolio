"use client"

import { portfolioData } from "@/data/portfolio"
import { Section } from "@/components/ui/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"
import { motion, type Variants } from "framer-motion"

export function TechStack() {
    const { techStack } = portfolioData

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    }

    const item: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
    }

    return (
        <Section>
            <SectionHeading
                title="Technology Stack"
                subtitle="Tools and technologies I use to build robust applications."
            />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-wrap gap-4"
            >
                {techStack.map((tech, idx) => (
                    <motion.div key={idx} variants={item}>
                        <Badge variant="secondary" className="text-sm md:text-base px-5 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                            {tech}
                        </Badge>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    )
}

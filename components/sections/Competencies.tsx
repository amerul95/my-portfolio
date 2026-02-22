"use client"

import { portfolioData } from "@/data/portfolio"
import { Section } from "@/components/ui/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion, type Variants } from "framer-motion"
import { Database, Layout, Server } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
    "Application Architecture": <Layout className="w-6 h-6 text-primary" />,
    "Backend & Data": <Database className="w-6 h-6 text-primary" />,
    "Infrastructure": <Server className="w-6 h-6 text-primary" />
}

export function Competencies() {
    const { competencies } = portfolioData

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <Section className="bg-muted/30">
            <SectionHeading
                title="Core Competencies"
                subtitle="Specialized skills combining modern frontend tools with solid backend architecture."
            />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {competencies.map((comp, idx) => (
                    <motion.div key={idx} variants={item} className="h-full">
                        <Card className="h-full bg-card hover:shadow-md transition-shadow">
                            <CardHeader className="pb-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    {iconMap[comp.title] || <Layout className="w-6 h-6 text-primary" />}
                                </div>
                                <CardTitle>{comp.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {comp.items.map((skill, sIdx) => (
                                        <li key={sIdx} className="flex flex-col">
                                            <span className="text-muted-foreground font-medium text-sm leading-snug">
                                                {skill}
                                            </span>
                                            {sIdx < comp.items.length - 1 && (
                                                <div className="w-1/4 h-px bg-border my-2"></div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    )
}

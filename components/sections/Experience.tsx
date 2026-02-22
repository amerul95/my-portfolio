"use client"

import { portfolioData } from "@/data/portfolio"
import { Section } from "@/components/ui/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { motion, type Variants } from "framer-motion"

export function Experience() {
    const { experience } = portfolioData

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <Section id="experience">
            <SectionHeading
                title="Professional Experience"
                subtitle="Over 5 years of experience building and maintaining production web ecosystems."
            />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent"
            >
                {experience.map((job, idx) => (
                    <motion.div
                        key={idx}
                        variants={item}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        {/* Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                            <div className="w-3 h-3 bg-primary rounded-full transition-transform group-hover:scale-150"></div>
                        </div>

                        {/* Card */}
                        <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0 mb-1">
                                    <CardTitle className="text-xl">{job.role}</CardTitle>
                                    <span className="text-sm font-medium text-muted-foreground whitespace-nowrap px-3 py-1 bg-muted rounded-full w-fit">
                                        {job.period}
                                    </span>
                                </div>
                                <CardDescription className="text-base text-foreground font-medium">
                                    {job.company}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    {job.responsibilities.map((resp, rIdx) => (
                                        <li key={rIdx}>{resp}</li>
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

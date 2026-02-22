"use client"

import { Section } from "@/components/ui/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

const blogTopics = [
    {
        title: "System Architecture Breakdowns",
        description: "Deep dives into structuring Next.js and NestJS applications."
    },
    {
        title: "API Integration Case Studies",
        description: "Lessons learned working with PSPs and complex external services."
    },
    {
        title: "Deployment Insights",
        description: "Strategies for AWS, Docker, and ensuring zero-downtime."
    }
]

export function Blog() {
    return (
        <Section id="blog">
            <SectionHeading
                title="Technical Writing"
                subtitle="Insights on full-stack engineering, architecture, and production deployments. (Coming soon)"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogTopics.map((topic, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                        <Card className="h-full hover:border-primary/50 transition-colors opacity-80 hover:opacity-100">
                            <CardHeader>
                                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-4 text-muted-foreground">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <CardTitle className="text-xl">{topic.title}</CardTitle>
                                <CardDescription className="text-base pt-2">
                                    {topic.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <Link href="#contact" className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4">
                    Subscribe for updates <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </Section>
    )
}

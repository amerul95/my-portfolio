"use client"

import { portfolioData } from "@/data/portfolio"
import { Section } from "@/components/ui/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, type Variants } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function FeaturedProjects() {
    const { projects } = portfolioData

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
        <Section id="projects" className="bg-muted/30">
            <SectionHeading
                title="Projects"
                subtitle="Production systems, dashboards, and client platforms I've architected and delivered."
            />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {projects.map((project, idx) => {
                    const isGithub = project.link.includes('github.com')
                    return (
                        <motion.div key={idx} variants={item} className="h-full flex">
                            <Card className="flex flex-col h-full w-full overflow-hidden hover:border-primary/50 transition-colors group">
                                <div className="relative w-full aspect-video border-b overflow-hidden bg-muted">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-muted/50 p-6 flex-col gap-2">
                                            <div className="w-12 h-12 rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center">
                                                <ExternalLink className="w-5 h-5 text-primary/30" />
                                            </div>
                                            <span className="text-sm font-medium text-muted-foreground/50">Preview Image</span>
                                        </div>
                                    )}
                                </div>
                                <CardHeader>
                                    <CardTitle className="line-clamp-2 md:min-h-[3rem] items-center flex">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-4">
                                    <CardDescription className="text-base text-foreground/80 line-clamp-4">
                                        {project.description}
                                    </CardDescription>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tech.map((t, i) => (
                                            <Badge key={i} variant="outline" className="font-normal border-primary/20 bg-primary/5">
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-4 border-t mt-auto">
                                    <Button variant="ghost" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            {isGithub ? (
                                                <><Github className="w-4 h-4" /> View Source</>
                                            ) : (
                                                <><ExternalLink className="w-4 h-4" /> Live Demo</>
                                            )}
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    )
                })}
            </motion.div>
        </Section>
    )
}
